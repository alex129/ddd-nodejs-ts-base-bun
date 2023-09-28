export default class User {
  readonly id?: number;
  readonly name: string;
  readonly email: string;
  readonly password: string;

  constructor({ id, name, email, password }: { id?: number; name: string; email: string; password: string }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
