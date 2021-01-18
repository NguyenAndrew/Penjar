import app from "./app.js";

const nodeEnvToPortMap = {
  local: 3001,
  cloud: 8080,
};

console.log(`NODE_ENV is ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV === undefined) {
  throw new Error("Node Env must be defined");
}
if (process.env.NODE_ENV !== "local" && process.env.NODE_ENV !== "cloud") {
  throw new Error("Node Env must be either 'local' or 'cloud'");
}
const nodeEnv: "local" | "cloud" = process.env.NODE_ENV;

const port = nodeEnvToPortMap[nodeEnv];
console.log(`PORT is ${port}`);

if (port === undefined) {
  throw new Error("Missing port");
}

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
