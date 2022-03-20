require("dotenv").config();

const {env} = process;

module.exports = {
    PORT: env.PORT,
    JWT_SECRET: env.JWT_SECRET,
    MONGO_URL: env.MONGO_URL
}