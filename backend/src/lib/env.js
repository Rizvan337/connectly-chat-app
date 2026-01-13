import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  CLIENT_URL: process.env.CLIENT_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
};

// PORT=3000

// MONGO_URI=mongodb+srv://rizvanichu337_db_user:sFwk6teAcmRTeti6@cluster0.psltrl2.mongodb.net/connectly_db?appName=Cluster0

// JWT_SECRET=myjwtsecret

// NODE_ENV=development

// RESEND_API_KEY=re_DRveQYye_4J83WonrrMqnh2W3vmAvQHag

// EMAIL_FROM="onboarding@resend.dev"

// EMAIL_FROM_NAME="Rizvan"

// CLIENT_URL=http://localhost:5173/
