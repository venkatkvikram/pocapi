import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    gender: boolean;

    @Column()
    mobileNumber: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;
}
