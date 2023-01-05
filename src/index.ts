import express from 'express';

const app = express();

app.listen(3001, () => {
  console.log('server is running on http://localhost:3001');
});
