import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.usersRepo.create(createUserDto as Partial<User>);
    return this.usersRepo.save(user);
  }

  findAll() {
    return this.usersRepo.find();
  }

  async findOne(id: number) {
    const user = await this.usersRepo.findOneBy({ id });
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async register(registerUserDto: { email: string; password: string; username: string }) {
    const existingUser = await this.usersRepo.findOneBy({ email: registerUserDto.email });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);

    const user = this.usersRepo.create({
      email: registerUserDto.email,
      password: hashedPassword,
      username: registerUserDto.username,
    });

    await this.usersRepo.save(user);

    const tokens = await this.generateTokens(String(user.id), user.email);

    return {
      user,
      ...tokens,
    };
  }
  async login(loginUserDto: { email: string; password: string; username: string }) {
    const user = await this.usersRepo.findOneBy({ email: loginUserDto.email });
    if (!user) throw new NotFoundException('User not found');

    const isPasswordValid = await bcrypt.compare(loginUserDto.password, user.password);
    if (!isPasswordValid) throw new BadRequestException('Invalid credentials');

    const tokens = await this.generateTokens(String(user.id), user.email);
    const access = tokens.access_token;
    return {
      user,
      access_token: access,
    };
  }

  private async generateTokens(userId: string, email: string) {
    const accessSecret = process.env.ACCESS_TOKEN_SECRET || 'ACCESS_TOKEN_SECRET';
    const refreshSecret = process.env.REFRESH_TOKEN_SECRET || 'REFRESH_TOKEN_SECRET';

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email },
        {
          secret: accessSecret,
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        { sub: userId, email },
        {
          secret: refreshSecret,
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }
}
