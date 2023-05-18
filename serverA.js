import express, { json } from 'express';

const app = express();
let port=3030;
app.set('view engine', 'hbs');

app.use(json());

app.get("/ajax",(req,res)=>{
    res.render("square")
  
})

app.post("/square",(req,res)=>{
    res.render("square")
    let n1 = req.body.num1
    let n2 = req.body.num2
    let Add = n1+n2
    res.send({Add:Add})
})


app.listen(port,()=>{
     console.log(`App is listen ${port} port number:`)

})
