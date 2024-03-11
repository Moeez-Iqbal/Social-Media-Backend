import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import UserModel from "../user/index.js";
import PostModel from "../post/index.js";

const commentModel = sequelize.define(
    "Comment",
    {
        comment:{
            type: DataTypes.STRING(1000),
            allowNull: false
        },

        UserId:{
            type: DataTypes.INTEGER,
            allowNull:false
            },
        
        PostId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },

    {paranoid: true}
);

UserModel.hasMany(commentModel)
commentModel.belongsTo(UserModel)

PostModel.hasMany(commentModel)
commentModel.belongsTo(PostModel)

export  default commentModel;