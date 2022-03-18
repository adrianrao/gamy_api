import express from "express";
import cors from "cors";

export const instanceApp = () => {
  const app = express();

  //middleware
  app.use(express.json());
  app.use(cors());
  return app;
};
