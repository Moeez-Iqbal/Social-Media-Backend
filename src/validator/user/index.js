import Joi from "joi";

const userValidator ={
    create: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string().min(5).max(100).required(),

            email: Joi.string().max(100).required(),

            password: Joi.string().min(5).max(100).required(),

        });

        const response = schema.validate(req.body)
        if (response.error) {
        return res
        .status(400)
        .json({message: "Invalid Format", error: response.error})   
        }

        console.log(response);
        next();
    },
};

export default  userValidator;