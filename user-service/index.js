const app= require('express')()

app.get("/", (req, res)=> res.send("Hi the app"))

app.listen(4000, ()=> console.log('APP RAN ON 4000'))