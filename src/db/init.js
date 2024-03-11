import UserModel from "../model/user/index.js";
import PostModel from "../model/post/index.js";
import userFollowModel from "../model/user/userfollower.js";
import commentModel from "../model/comment/index.js";

const dataBaseInIt = async () => {
    await UserModel.sync({ alter: true, force: false });
    await PostModel.sync({ alter: true, force: false });
    await userFollowModel.sync({ alter: true, force: false });
    await commentModel.sync({alter: true, force: false})
}

export default dataBaseInIt