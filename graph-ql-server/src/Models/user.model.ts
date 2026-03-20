import { Field, Int, ObjectType } from '@nestjs/graphql';
//import { Videogame } from './videogame.model';

@ObjectType()
export class User {
    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    firstName?: string;

    @Field({ nullable: true })
    lastName?: string;

    @Field({ nullable: false})
    username: string;

    // @Field(type => [Videogame])
    // videogames: Videogame[];
}