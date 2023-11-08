import express from "express";

import dotenv from "dotenv";

import bodyParser from "body-parser";

import router from "./routes";
import mongoose from "mongoose";
import { seedDB } from "./db/seed";

dotenv.config();

const app = express();

connectAndSeedDB();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${[port]}`);
});

app.use(bodyParser.json());
app.use("/api", router);

async function connectAndSeedDB() {
  const mongoUrl = process.env.MONGODB_URL;
  const database = process.env.MONGO_DB;
  await mongoose
    .connect(`${mongoUrl}/${database}`)
    .then(() => {
      console.log(`Connected to mongo at ${mongoUrl}`);
    })
    .catch((err) => {
      console.error("Database connection error");
      console.log(err);
    });
    await seedDB();
}
