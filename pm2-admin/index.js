
import express from "express";
import pm2 from "pm2";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/projects", (req, res) => {
  pm2.connect(() => {
    pm2.list((err, list) => {
      pm2.disconnect(); 
      if (err) return res.status(500).send(err);
      const data = list.map(proc => ({
        name: proc.name,
        status: proc.pm2_env.status,
        pid: proc.pid,
        uptime: proc.pm2_env.pm_uptime
      }));
      res.json(data);
      
    });
  });
});

app.post("/projects/:name/restart", (req, res) => {
  const { name } = req.params;
  pm2.connect(() => {
    pm2.restart(name, (err) => {
      pm2.disconnect();
      if (err) return res.status(500).send(err);
      res.send({ message: `Restarted ${name}` });
    });
  });
});

app.listen(PORT, () => {
  console.log(`PM2 Admin API running on port ${PORT}`);
});
