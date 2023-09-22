require("dotenv").config();
const express = require("express");
const app = express();
require("./db/connection");
const userRoute = require("./routes/userroute");
const adminRoute = require("./routes/adminroute");
const listingRoute = require("./routes/listingroute");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors({ origin: "https://swapnil-shahare-book-store.netlify.app/",credentials: true }));
// Configure CORS to only allow requests from your Netlify site
// const allowedOrigins = ['https://swapnil-shahare-book-store.netlify.app'];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRoute);
app.use(adminRoute);
app.use(listingRoute);

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen(3000, () => console.log("server is running on port 3000"));
