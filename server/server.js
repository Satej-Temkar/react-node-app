import express from "express";
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(PORT, () => {console.log(`server running on port ${PORT}`)})