import commentModel from "../../model/comment/index.js";
import PostModel from "../../model/post/index.js";

const commentController = {
    create: async (req, res) => {
        const payload = req.body;


        try {
            const post = PostModel.findByPk(payload.postId)

            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }

            const Comment = await commentModel.create({
                comment: payload.comment,
                PostId: payload.postId,
                UserId: payload.userId,
            });

            return res.json({
                message: "Comment created",
                Comment,
            });
        } catch (error) {
            console.error("Error creating comment:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
        },

        update: async (req, res) => {
            const payload = req.body;
            const params = req.params;
    
            try {
                const Comment = await commentModel.findByPk(params.commentId);
                if (!Comment) {
                    return res.status(404).json({ message: "Comment not found" });
                }
    
                Comment.comment = payload.comment;
                await Comment.save();
    
                return res.json({
                    message: "Comment updated",
                    Comment,
                });
            } catch (error) {
                console.error("Error updating comment:", error);
                return res.status(500).json({ message: "Internal server error" });
            }
        },

        getOne: async (req, res) => {
            const commentId = req.params.commentId;
    
            try {
                const Comment = await commentModel.findByPk(commentId, {
                    include: [{ model: PostModel, as: 'Post' }] 
                });
    
                if (!Comment) {
                    return res.status(404).json({ message: "Comment not found" });
                }
    
                return res.json({ Comment });
            } catch (error) {
                console.error("Error retrieving comment:", error);
                return res.status(500).json({ message: "Internal server error" });
            }
        }
    }

export default commentController;