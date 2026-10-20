const express = require("express");
const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");
const userRoute=require("./routes/user")
const createAdminAccount=require("./scripts/admin")
const loginRoute=require("./routes/login")
const cors=require("cors")
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors())

createAdminAccount();

app.use("/user", signupRoute);
app.use("/auth",loginRoute)
api.use("/api",userRoute)

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});

//<-------------------------------------------------------------- FLOW ------------------------------------------->

/*     JWT-NODE PROJECT
  REGISTRATION FLOW
               |
               v
     +-------------------+
     |   React Frontend  |
     | Registration Form |
     +-------------------+
               |
               v
     +-------------------+
     |   POST /register  |
     |    HTTP Request   |
     +-------------------+
               |
               v
     +-------------------+
     | routes/signup.js  |
     |   Route Handler   |
     +-------------------+
               |
               v
     +-------------------+
     | controller/       |
     |    signup.js      |
     |   createUser()    |
     +-------------------+
               |
               v
     +-------------------+
     | services/signup.js|
     |   Business Logic  |
     +-------------------+
               |
               v
     +-------------------+
     |    User Model     |
     +-------------------+
               |
               v
     +-------------------+
     |     MongoDB       |
     |  Save User Data   |
     +-------------------+
               |
               v
     +-------------------+
     | HTTP Response     |
     | 201 Created       |
     | Success Message   |
     +-------------------+
 */






































