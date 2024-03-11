import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";


const PostModel = sequelize.define(
    "Post",
    {
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        description: {
            type: DataTypes.STRING(1000)
        }
    },

    { paranoid: true }
);

export default PostModel;