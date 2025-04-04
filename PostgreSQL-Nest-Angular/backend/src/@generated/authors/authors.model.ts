import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class authors {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: true })
  name!: string | null;
}
