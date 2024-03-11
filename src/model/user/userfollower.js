import UserModel from "./index.js";
import sequelize from "../../db/config.js";

const userFollowModel = sequelize.define("User Follower", {})

userFollowModel.belongsTo(UserModel, { as: "follower" });
userFollowModel.belongsTo(UserModel, { as: "followee" });


UserModel.belongsToMany(UserModel, {
    through: userFollowModel,
    as: "followers",

    foreignKey: "followeeId",
});

UserModel.belongsToMany(UserModel, {
    through: userFollowModel,
    as: "followings",

    foreignKey: "followerId",
});

export default userFollowModel;

