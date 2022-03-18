import { createConnection } from "typeorm";
import { Club } from "./models/Club";
import { Court } from "./models/Court";
import { CourtType } from "./models/CourtType";
import { Rental } from "./models/Rental";
import { User } from "./models/User";
import { UserType } from "./models/UserType";

export const connectDatabase = async () => {
  try {
    await createConnection({
      type: "mysql",
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      synchronize: true,
      entities: [Court, CourtType, Club, User, UserType, Rental],
      ssl: false,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};
