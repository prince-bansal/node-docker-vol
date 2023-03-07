const app= require('express')()

app.get("/", (req,res)=> res.send('Hi from the todo!'))

app.listen(4300,()=> console.log('TODO RUNNING ON 4300'))