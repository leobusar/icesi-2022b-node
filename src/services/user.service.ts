import UserModel, { UserDocument, UserInput } from "../models/user.model";

class UserService {
  async createUser(input: UserInput) {
    try {
      const user = await UserModel.create(input);
      return user.toJSON();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async updateUser(id: string, input: UserInput) {
    try {
      const user = await UserModel.findOneAndUpdate({ _id: id }, input, {
        new: true,
      });
      return user?.toJSON();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async findUserByEmail(email: string) {
    try {
      const user = await UserModel.findOne({ email: email });
      return user;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async findUserById(id: string) {
    try {
      const user = await UserModel.findOne({ _id: id });
      return user;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await UserModel.deleteOne({ _id: id });
      return user;
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new UserService();
