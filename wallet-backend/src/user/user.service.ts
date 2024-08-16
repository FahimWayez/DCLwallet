import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ) {}

  async create(newUser: CreateUserDto): Promise<User> {
    const user = this.userRepo.create({
      passPhrase: newUser.passPhrase,
      publicKey: newUser.publicKey,
      privateKey: newUser.privateKey,
      password: newUser.password,
      balance: 0,
    });

    return await this.userRepo.save(user);
  }

  async findByPassPhrase(passPhrase: string, password: string): Promise<User | undefined> {
    const user: any = await this.userRepo.findOne({ where: { passPhrase, password} });
    console.log(user)
    return user
  }

  async update(user: User): Promise<void> {
    await this.userRepo.update(user.id, user);
  }

  async findByPublicKey(publicKey: string): Promise<User | undefined> {
    return await this.userRepo.findOne({ where: { publicKey } });
  }
}

interface CreateUserDto {
  passPhrase: string;
  publicKey: string;
  privateKey: string;
  password: string;
}

export interface Transaction {
  status: 'success' | 'pending' | 'rejected';
  block: number;
  timestamp: number;
  transactionAction: string;
  from: string;
  to: string;
  value: number;
  transactionFee: number;
  gasPrice: number;
  transactionHash: string;
  signature: string;
}
