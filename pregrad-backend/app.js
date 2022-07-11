const express = require("express");
const app = express();
const authRouter = require("./routes/authRoutes");

const cors = require("cors");
require("./db/connect");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", authRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
