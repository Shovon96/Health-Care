import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    frontend_url: process.env.FRONTEND_URL,
    jwt_secret: process.env.JWT_SECRET,
    accesstoken_expires_in: process.env.ACCESSTOKEN_EXPIRES_IN,
    refreshtoken_expires_in: process.env.REFRESHTOKEN_EXPIRES_IN,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    cloudinary: {
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    },
    openai_api_key: process.env.OPENAI_API_KEY,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY,
    stripe_webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
    sending_email: process.env.SENDING_EMAIL,
    sending_email_pass: process.env.SENDING_EMAIL_PASS
}