import express, { static } from 'express';
const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  });

app.use(static('public'));

app.listen(process.env.PORT || 3000);

export default app


