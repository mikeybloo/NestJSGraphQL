import { Injectable } from "@nestjs/common";
import { User } from "src/Models/user.model";


@Injectable()
export class UsersService {
    private users: User[] = [];

    async findAll() : Promise<User[]> {
        return this.users;
    }
}