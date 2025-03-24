import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = ["http://localhost:5173"];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only this origin
    credentials: true, // If you need to send cookies
  })
);

// API Endpoints
app.get("/", (req, res) => res.send("API Working"));
const states = [
  {
    id: "1",
    name: "Andhra Pradesh",
    capital: "Amaravati",
    coordinates: { latitude: 15.9129, longitude: 79.74 },
    mapImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/IN-AP.svg/1686px-IN-AP.svg.png",
  },
  {
    id: "2",
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    coordinates: { latitude: 27.1025, longitude: 93.6166 },
    mapImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/IN-AR.svg/899px-IN-AR.svg.png",
  },
  {
    id: "3",
    name: "Assam",
    capital: "Dispur",
    coordinates: { latitude: 26.2006, longitude: 92.9376 },
    mapImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/IN-AS.svg/899px-IN-AS.svg.png",
  },
  {
    id: "4",
    name: "Bihar",
    capital: "Patna",
    coordinates: { latitude: 25.5941, longitude: 85.1376 },
    mapImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/IN-BR.svg/899px-IN-BR.svg.png",
  },
  {
    id: "5",
    name: "Chhattisgarh",
    capital: "Raipur",
    coordinates: { latitude: 21.2514, longitude: 81.6296 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/IN-CT.svg/899px-IN-CT.svg.png",
  },
  {
    id: "6",
    name: "Goa",
    capital: "Panaji",
    coordinates: { latitude: 15.2993, longitude: 74.124 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/IN-GA.svg/899px-IN-GA.svg.png",
  },
  {
    id: "7",
    name: "Gujarat",
    capital: "Gandhinagar",
    coordinates: { latitude: 22.2587, longitude: 71.1924 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/IN-GJ.svg/899px-IN-GJ.svg.png",
  },
  {
    id: "8",
    name: "Haryana",
    capital: "Chandigarh",
    coordinates: { latitude: 29.0588, longitude: 76.0856 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/IN-HR.svg/899px-IN-HR.svg.png",
  },
  {
    id: "9",
    name: "Himachal Pradesh",
    capital: "Shimla",
    coordinates: { latitude: 31.1048, longitude: 77.1734 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/IN-HP.svg/899px-IN-HP.svg.png",
  },
  {
    id: "10",
    name: "Jharkhand",
    capital: "Ranchi",
    coordinates: { latitude: 23.6102, longitude: 85.2799 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/IN-JH.svg/899px-IN-JH.svg.png",
  },
  {
    id: "11",
    name: "Karnataka",
    capital: "Bengaluru",
    coordinates: { latitude: 12.9716, longitude: 77.5946 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/IN-KA.svg/899px-IN-KA.svg.png",
  },
  {
    id: "12",
    name: "Kerala",
    capital: "Thiruvananthapuram",
    coordinates: { latitude: 8.5241, longitude: 76.9366 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/IN-KL.svg/899px-IN-KL.svg.png",
  },
  {
    id: "13",
    name: "Madhya Pradesh",
    capital: "Bhopal",
    coordinates: { latitude: 23.2599, longitude: 77.4126 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/IN-MP.svg/899px-IN-MP.svg.png",
  },
  {
    id: "14",
    name: "Maharashtra",
    capital: "Mumbai",
    coordinates: { latitude: 19.076, longitude: 72.8777 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/IN-MH.svg/899px-IN-MH.svg.png",
  },
  {
    id: "15",
    name: "Manipur",
    capital: "Imphal",
    coordinates: { latitude: 24.817, longitude: 93.9368 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/IN-MN.svg/899px-IN-MN.svg.png",
  },
  {
    id: "16",
    name: "Meghalaya",
    capital: "Shillong",
    coordinates: { latitude: 25.5788, longitude: 91.8933 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/IN-ML.svg/899px-IN-ML.svg.png",
  },
  {
    id: "17",
    name: "Mizoram",
    capital: "Aizawl",
    coordinates: { latitude: 23.1645, longitude: 92.9376 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/IN-MZ.svg/899px-IN-MZ.svg.png",
  },
  {
    id: "18",
    name: "Nagaland",
    capital: "Kohima",
    coordinates: { latitude: 25.6741, longitude: 94.11 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/IN-NL.svg/899px-IN-NL.svg.png",
  },
  {
    id: "19",
    name: "Odisha",
    capital: "Bhubaneswar",
    coordinates: { latitude: 20.2961, longitude: 85.8245 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/IN-OD.svg/899px-IN-OD.svg.png",
  },
  {
    id: "20",
    name: "Punjab",
    capital: "Chandigarh",
    coordinates: { latitude: 31.1471, longitude: 75.3412 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/IN-PB.svg/899px-IN-PB.svg.png",
  },
  {
    id: "21",
    name: "Rajasthan",
    capital: "Jaipur",
    coordinates: { latitude: 26.9124, longitude: 75.7873 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/IN-RJ.svg/899px-IN-RJ.svg.png",
  },
  {
    id: "22",
    name: "Sikkim",
    capital: "Gangtok",
    coordinates: { latitude: 27.3389, longitude: 88.6065 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/IN-SK.svg/899px-IN-SK.svg.png",
  },
  {
    id: "23",
    name: "Tamil Nadu",
    capital: "Chennai",
    coordinates: { latitude: 13.0827, longitude: 80.2707 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/IN-TN.svg/899px-IN-TN.svg.png",
  },
  {
    id: "24",
    name: "Telangana",
    capital: "Hyderabad",
    coordinates: { latitude: 17.385, longitude: 78.4867 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/IN-TG.svg/899px-IN-TG.svg.png",
  },
  {
    id: "25",
    name: "Tripura",
    capital: "Agartala",
    coordinates: { latitude: 23.8315, longitude: 91.2868 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/IN-TR.svg/899px-IN-TR.svg.png",
  },
  {
    id: "26",
    name: "Uttar Pradesh",
    capital: "Lucknow",
    coordinates: { latitude: 26.8467, longitude: 80.9462 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/IN-UP.svg/899px-IN-UP.svg.png",
  },
  {
    id: "27",
    name: "Uttarakhand",
    capital: "Dehradun",
    coordinates: { latitude: 30.3165, longitude: 78.0322 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/IN-UT.svg/899px-IN-UT.svg.png",
  },
  {
    id: "28",
    name: "West Bengal",
    capital: "Kolkata",
    coordinates: { latitude: 22.5726, longitude: 88.3639 },
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/IN-WB.svg/899px-IN-WB.svg.png",
  },
];

app.get("/api/dashboard", (req, res) => {
  res.json(states);
});
// Endpoint to fetch details of a specific state
app.get("/api/map/:id", (req, res) => {
  const state = states.find((s) => s.id === req.params.id);
  if (state) {
    res.json(state);
  } else {
    res.status(404).json({ error: "State not found" });
  }
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => console.log(`Server started on PORT:${port}`));
