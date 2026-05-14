import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.route.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5500;

const app = express();

// app.get("/", (req, res) => {
//     res.send("Server is ready and working fine");
// });

app.use(express.json());
// app.use(cors());

app.use("/api/todos", todoRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, async () => {
    await connectDB();
    console.log("Server started at http://localhost:5000");
});

