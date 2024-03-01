const express = require('express');
const app = express();

/*app.get('/', function (req, res) {
  res.json({
    name: "Santhosh",
  });
});*/
const static= express.static("static");
app.use("/",static);

app.listen(3000, () => {
  console.log("app running");
});