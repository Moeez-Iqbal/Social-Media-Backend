import Joi from "joi";

const postValidator = {
    create: (req, res, next) =>{
        const schema = Joi.object({
            title: Joi.string().min(3).max(90),

            description: Joi.string().max(950),
            userId: Joi.number()
        });


        const response = schema.validate(req.body);
        if (response.error) {
            return res
            .status(400)
            .json({message: "Invalid Data", error: response.error})
        }
     
        console.log(response);
        next();

    },

};

export default postValidator