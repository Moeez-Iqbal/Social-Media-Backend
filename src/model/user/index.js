import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import PostModel from "../post/index.js";

const UserModel = sequelize.define(
    "User",
    {
        name: {
            type: DataTypes.STRING(100)
        },

        email: {
            type: DataTypes.STRING(100)
        },

        password: {
            type: DataTypes.STRING(100)
        },
    },

    { paranoid: true }
);
UserModel.hasMany(PostModel);
PostModel.belongsTo(UserModel);

export default UserModel;