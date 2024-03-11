import UserModel from "../../model/user/index.js";
import userFollowModel from "../../model/user/userfollower.js";
import commentModel from "../../model/comment/index.js";
import PostModel from "../../model/post/index.js";

const UserController = {

    getOne: async (req, res) => {
        const requestedUserId = req.params.userId;
        const authenticatedUserId = req.user.id;
    
        try {
            if (requestedUserId !== authenticatedUserId) {
                return res.status(403).json({ message: "You are not authorized to access this user's details" });
            }
    
            const user = await UserModel.findByPk(requestedUserId, {
                include: ["followings", "followers", PostModel, commentModel]
            });
    
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            return res.json({ message: "User details", user });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    },
    
    



    update: async (req, res) => {
        const payload = req.body;
        const params = req.params;


        const user = await UserModel.findByPk(params.userId)
        if (!user) {
            return res.status(404).json({
                message: "NO data found",
            });
        }

        user.name = payload.name;
        user.email = payload.email;
        user.password = payload.password;

        await user.save();

        res.json({
            message: "User updated",
            user,
        });

    },

    follow: async (req, res) => {
        const { userId, followId } = req.body;

        await userFollowModel.create({
            followeeId: followId,
            followerId: userId,
        });

        return res.json({ message: "User followed" });
    },

};

export default UserController;