const express = require("express")
const app = express()
const addTwoNumber = (n1,n2) => {
    return n1+n2;
}


app.get("/addTwoNumber", (req,res)=>{
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n1);
    const result = addTwoNumber(req.query.n1);
    res.json({statuscode:200, data: result});
});

app.get("/", (req,res) =>{
    const n1 = "<html><body><h1>HI THERE!</h1></body></html>";
    res.set('content-Type', 'text/html');
    res.send(Buffer.from(n1));
})

console.log (addTwoNumber(20,30));
const port=3050;
app.listen(port,()=>{
    console.log("port no: "+port);
})
