import { Field, ObjectType, Directive, ID } from "../src";

@Directive(`@key(fields: "id")`)
@ObjectType()
export default class User {
  @Field(type => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  name: string;

  @Field()
  birthDate: string;
}
