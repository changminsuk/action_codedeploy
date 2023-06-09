const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'mysql-dbs-instance.c7dwlleamq8g.ap-northeast-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Skw7640*',
  database: 'CxB',
});

const message = `
🚀🚀🚀 서버가 정상 실행중입니다.2233 🚀🚀🚀
<br>
후원 : 카카오뱅크 석창민 3333-14-8217656
<br>
Auto scaling 정상 동작합니다. 얏효~~
`;

app.get('/', (req, res) => {
  res.send(message);
});

// 데이터 조회 API
app.get('/data', (req, res) => {
  const { param1, param2 } = req.query;

  const sql = 'SELECT * FROM users_TB WHERE ?? = ?';
  const inserts = [param1, param2];
  const query = mysql.format(sql, inserts);

  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error: ${error.message}');
    } else {
      res.json(results);
    }
  });
});

app.get('/showUSERS', (req, res) => {
  const sql = `SELECT * FROM users_TB`;
  const query = mysql.format(sql);

  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error: ${error.message}');
    } else {
      res.json(results);
    }
  });
});



// 서버 실행
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
