require("dotenv").config();
const cors = require("cors");
const express = require("express");
const jokesRouter = require("./routes/jokes");

const app = express();
const PORT = 8080;
app.use(cors());

app.use("/api/jokes", jokesRouter);

app.use((req, res) => {
  res.json({
    message: "Use /api/jokes/{random | dark | office | relationship}",
  });
});

app.listen(PORT, () => console.log(`Server is Running on PORT:${PORT}`));
