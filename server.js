import express from 'express'
import dotenv from 'dotenv'
import mysql from 'mysql'
import bp from 'body-parser'

dotenv.config()

const app = express()
app.use(bp.json())

// db mysql connection 
const mydb = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'db'
})

mydb.connect(function(err){
    if(err) throw new Error(err)
        console.log('Mysql Databse connected')
})


app.get('/',function(req,res){
    res.send('my Server is running')
})

// GET all users(students)

app.get('/users',function(req,res){

    mydb.query('select * from users',(err,results)=>{
        if(err) throw new Error(err)
        res.json({message: 'Got users ',results})
    })
})


app.post('/users',function(req,res){
    const {id,name,age,salary,is_active } = req.body
    mydb.query('insert into users (id,name,age,salary,is_active ) values(?,?,?,?,?)',[id,name,age,salary,is_active],(err,results)=>{
        if(err) throw new Error(err)
        res.json({message: 'Added a user',results})
    })
})
app.get('/users/:id',function(req,res){
    const id = req.params.id
    mydb.query('select * from users where id=?',[id],(err,results)=>{
        if(err) throw new Error(err)
        res.json({message: 'Got a user ',results})
    })

    })

app.put('/users/:id',function(req,res){
    const id = req.params.id
    const {name,age,salary,is_active } = req.body
    mydb.query('UPDATE users SET name=?, age=?, salary=?, is_active=? WHERE id=?',[name,age,salary,is_active,id],(err,results)=>{
        if(err) throw new Error(err)
        res.json({message: 'Updated a user',results})
    })
})
app.delete('/users/:id',function(req,res){
    const id = req.params.id
    mydb.query('DELETE FROM users WHERE id=?',[id],(err,results)=>{
        if(err) throw new Error(err)
        res.json({message: 'Deleted a user',results})
    })
})



app.listen(5000, function(){
    console.log('server is running on port 5000')
})