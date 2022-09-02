// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.get('/probando/:palabra',(req,res)=>{
    const {palabra}=req.params
    res.json({msj:'el servidor recivio: '+ palabra})
})

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
module.exports= app;