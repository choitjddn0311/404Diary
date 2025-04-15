import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});

app.post("/api/posts" , (req,res) => {
    const {title, content} = req.body;

    if(!title || !content) {
        return res.status(400).json({error: "제목과 내용을 입력해주세요."});
    }

    const sql = "INSERT INTO posts (title,content) VALUES (?,?)";
    db.query(sql, [title,content], (error, result) => {
        res.status(201).json({message: "글 저장 성공" , postId: result.insertId});
    })
})

app.listen(port , () => {
    console.log(`${port}포트에서 듣는중`);
})
