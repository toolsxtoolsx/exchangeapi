const express  = require("express")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')
const port = process.env.PORT||3000;



app.use(cors({"Access-Control-Expose-Headers": "Content-Range"}));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))




//route for post data
app.get("/:id",(req,res)=>{
  const id = req.params
  console.log(id)
  res.redirect(301, `https://barcodescanview.com/${id}`);

});

//route for post data
app.get("/",(req,res)=>{
  const id = req.params

  console.log("req.headers")
  console.log(id)

  const l = id.replace("%5Bobject%20Object%5D", "");
  res.redirect(301, `https://barcodescanview.com/${l}`);

});





app.listen(port, () => {
  console.log(`Examples app  very listening at http://localhost:${port}`);
});

module.exports = app;