import express from "express";
const app=express();
const PORT=3000;
app.use((req, res, next)=> {
    var date=new Date();
  if(date.getDay()==0||date.getDay()==6||date.getHours()>17 ||date.getHours()<9 )
  {
    res.status(403).end("The web application is only available during working hours (Monday to Friday,  from 9 to 17)")
  }
  else{
  
      next()
  }
    })
app.use(express.static('public'))
app.listen(PORT,()=> console.log('listening on port'+ PORT))