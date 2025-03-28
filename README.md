# Task Management API

This repository contains a Task Management API built with Node.js and Express. The project follows a structured architecture and utilizes various essential packages for security, database management, and email notifications.

## Project File Structure

```
project-folder/
│-- node_modules/
│-- src/
│   │-- routes/
│   │-- controllers/
│   │-- models/
│   │-- middleware/
│-- .gitignore
│-- package.json
│-- app.js
│-- README.md
```

## Project Packages

To install the required packages, run the following commands:

```sh
npm i cors
npm i express
npm i express-rate-limit
npm i helmet
npm i jsonwebtoken
npm i mongoose
npm i nodemailer
npm i nodemon
```

## Route Configuration

Define API routes in the `routes` folder. Example:

```js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.createTask);

module.exports = router;
```

## App.js Configuration

Configure the main server file (`app.js`):

```js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const taskRoutes = require("./src/routes/taskRoutes");
app.use("/api", taskRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
```

## Running the Project

Start the project using nodemon:

```sh
nodemon app.js
```

## License

This project is open-source and available for personal or commercial use.
