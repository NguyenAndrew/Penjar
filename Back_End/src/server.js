const app = require('./app.js');

const nodeEnvToPortMap = {
  'local': 3001,
  'cloud': 8000
};

console.log(`NODE_ENV is ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV === undefined) {
  throw new Error('Missing NODE_ENV environment variable');
}

const port = nodeEnvToPortMap[process.env.NODE_ENV];
console.log (`PORT is ${port}`);

if (port === undefined) {
  throw new Error('Missing port');
}

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});