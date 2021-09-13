import express from "express";
const app=express();
const PORT=3000;
const students=[
    {
        name:"rakia",
        id:1,
    },
    {
        name:"rahma",
        id:2,
    },
    {
        name:"nsouaa",
        id:3,
    },
]
app.listen(PORT,()=> console.log('listening on port'+ PORT))
app.get("/student/:name",(req,res)=>res.json(students.find((student)=>student.name===req.params.name)))