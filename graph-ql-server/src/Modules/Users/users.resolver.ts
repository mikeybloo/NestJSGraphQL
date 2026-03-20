import { Resolver, ResolveField, Args, Int, Query } from '@nestjs/graphql';
import { User } from 'src/Models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
    constructor(
        private usersService: UsersService,
    ) {}

    @Query(() => [User])
    async getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }
}