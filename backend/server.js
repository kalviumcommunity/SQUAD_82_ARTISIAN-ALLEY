const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"]
}));


const authRoutes = require("./routes/auth");     
const otpRoutes = require("./routes/otpRoutes");   

app.use("/api", authRoutes);        
app.use("/api2", otpRoutes);        

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const MONGO_URL=process.env.MONGO_URL;

const mongo=async ()=>{
   try{ 
    await mongoose.connect(MONGO_URL)
    console.log("successfully connected")
   }
   catch(e){
    console.log("doesn't connected successfully",e.message)
   }
}

mongo();

  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
  