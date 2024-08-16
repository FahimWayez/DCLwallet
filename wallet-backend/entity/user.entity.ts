import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    passPhrase: string;

    @Column({ nullable: false })
    publicKey: string;

    @Column({ nullable: false })
    privateKey: string;

    @Column({ nullable: false })
    password: string;

    @Column({ type: 'float', default: 1000, nullable: false })
    balance: number;
}
