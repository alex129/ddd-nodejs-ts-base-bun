import User from "../User";

export default interface UserRepository {
    create: (user: User) => Promise<void>;
}