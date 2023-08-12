import { Field, InputType, Int } from '@nestjs/graphql';
import { type } from 'os';
import { Owner } from 'src/owners/entities/owner.entity';

@InputType()
export class CreatePetInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => Int)
  ownerId: number;
}
