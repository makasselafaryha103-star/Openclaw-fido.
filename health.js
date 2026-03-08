import express from "express";
import { exec } from "child_process";

const app = express();

// Lancer OpenClaw en arrière-plan
exec("node index.js", (err) => {
  if (err) console.error("OpenClaw error:", err);
});

// Health check HTTP pour Fly.io
app.get("/", (req, res) => {
  res.send("OK");
});

const port = process.env.PORT || 18789;
app.listen(port, "0.0.0.0", () => {
  console.log(`Health server running on port ${port}`);
});
