import express from "express";
import cors from 'cors';
import path from 'path';
import userRoutes from './routes/userRoutes.js'

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api/user", userRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {console.log(`server running on port ${PORT}`)})
