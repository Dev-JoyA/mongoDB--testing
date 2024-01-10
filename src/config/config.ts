import dotenv from "dotenv";
dotenv.config()

const PORT = 5005

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.upaohmi.mongodb.net/`

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: PORT
    }
}

// export default config;
