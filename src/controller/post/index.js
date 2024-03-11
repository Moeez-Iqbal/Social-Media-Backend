import commentModel from "../../model/comment/index.js";
import PostModel from "../../model/post/index.js";
import UserModel from "../../model/user/index.js";

const PostController = {
    create: (req, res) => {
        const payload = req.body
         const post = PostModel.create({
            title: payload.title,
            description: payload.description,
            UserId: payload.userId
        });


        res.json({
            message: "Post Created",
            post,
        });
    },

    update: async (req, res) => {

        const payload = req.body;
        const params = req.params;

        const post = await PostModel.findByPk(params.postId)
        if (!post) {
            return res.status(404).json({
                message: "No Data Found"
            })
        }

        post.title = payload.title;
        post.description = payload.description;

        await post.save();

        res.json({
            message: "Post updated",
            post,
        });
    },

    getAll: async (req, res) => {
        try {
            const post = await PostModel.findAll({
                include: [UserModel]
            });
    
            res.json({
                post, 
            });
        } catch (error) {
            console.error("Error retrieving posts:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    
    getOne: async (req, res) => {
        const postId = req.params.postId; 
        
        try {
            const post = await PostModel.findByPk(postId ,{
                include: [commentModel]
            }) 
        
            if (!post) {
                return res.status(404).json({ message: "No data found" });
            }
        
            res.json({ post });
        } catch (error) {
            console.error("Error retrieving post:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    
}

export default PostController