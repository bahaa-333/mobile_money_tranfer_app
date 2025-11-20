import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
    try {
        //to be switched into using userid as key
        const {success} = await ratelimit.limit("my limit")

        if(!success){
            return res.status(429).json({error: "Too many requests, please try again later."});
        }

        next();
    }catch(error){
        console.log(error);
        next(error)
    }
};

export default ratelimiter;