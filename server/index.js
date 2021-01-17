const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h2>Server running</h2>");
});

app.post("/add", (req, res) => {
  const { fullname, email, pass, rePass } = req.body;

  if (fullname == "") {
    return res.json({
      error: true,
      message: "Name must not be Empty from server !",
    });
  } else if (email == "") {
    return res.json({
      error: true,
      message: "Email must not be Empty from server !",
    });
  } else if (pass == "") {
    return res.json({
      error: true,
      message: "password must not be Empty from server !",
    });
  } else {
    // Save Data to server

    return res.json({
      error: false,
      message: "Success !",
    });
  }
});

app.listen(3000, console.log("server running on port 3000"));
