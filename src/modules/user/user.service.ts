import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
    private readonly users: User[];

    constructor() {
        // In real conditions, store the hash of password, of course
        this.users = [
            {
                userId: 1,
                username: 'admin',
                password: 'admin',
            },
            {
                userId: 2,
                username: 'root',
                password: 'root',
            },
            {
                userId: 3,
                username: 'login',
                password: 'password',
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
