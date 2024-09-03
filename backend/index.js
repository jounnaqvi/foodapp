const express = require("express");
const cors = require("cors");
require("./db"); 
const DisplayData = require("./Routes/DisplayData");
const Orderdata = require("./Routes/Orderdata");
// const payment = require(".")

const app = express();
const port = process.env.PORT || 5000;
const paymentRoutes = require('./routes/paymentRoutes');



app.use(cors());
app.use(express.json()); 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


// app.use('/api/orderdata',orderData); 
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/Orderdata'));
app.use('/api', require('./Routes/CreateUser')); 
app.use('/api', paymentRoutes);
// const paymentRoutes = require('./routes/paymentRoutes'); // adjust path as needed
// app.use('/api', paymentRoutes);
// app.use('/api', require('./Routes/orderdata')); 


app.get("/", (req, res) => {
  res.send("Hello bro");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
