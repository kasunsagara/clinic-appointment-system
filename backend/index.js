import express from 'express';

const app = express();

const mongoUrl = "mongodb+srv://kasunsagara689:20010924@cluster0.iuoj1m7.mongodb.net/?appName=Cluster0";

app.listen (
    5000, 
    () => {
        console.log("Server is running on port 5000");
    }
)