import axios from "axios";
import path from "path";
import express, { Request, Response } from "express";
import helmet from "helmet";
import "./database/databaseInfo";
import databaseInfo from "./database/databaseInfo";
import host from "./host/host";

const app = express();

app.use(helmet());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Healthy!");
  axios.post(`${host}/axios-test`);
});

app.post("/axios-test", (req: Request, res: Response) => {
  console.log("You have succesfully made an axios call!");
  res.status(200).send("axios-test completed succesfully!");
});

if (process.env.NODE_ENV === "cloud") {
  console.log("Server is running on the cloud");

  const frontEndBuildFolder = "front_end/build";

  app.use(
    express.static(path.join(__dirname, "../../..", frontEndBuildFolder))
  );

  app.get("/", (_req: Request, res: Response) => {
    res.sendFile(
      path.join(__dirname, "../../..", frontEndBuildFolder, "index.html")
    );
  });
} else {
  console.log("Server is not running on the cloud");
}

export = app;
