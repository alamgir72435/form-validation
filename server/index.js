const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Database Connection


// Schema

// Model

app.get("/", (req, res) => {
  res.send("<h2>Server running</h2>");
});



app.post("/add", async(req, res) => {
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
    // Save Data to Database
    let newUser = new Model({
      fullname, email, pass, rePass
    })

    const created = await newUser.save()
    // console.log(fullname, email, pass, rePass)

    if(created){
      return res.json({
        error: false,
        message: "Success !",
      });
    }else{
      return res.json({
        error: true,
        message: "server Not Ready !",
      });
    }

    
  }
});

app.listen(3000, console.log("server running on port 3000"));
