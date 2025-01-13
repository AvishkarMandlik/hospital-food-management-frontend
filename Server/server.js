const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const patientRoutes = require('./routes/patients');
const dietChartRoutes = require('./routes/dietCharts');
const pantryRoutes = require('./routes/pantry');
const deliveryRoutes = require('./routes/deliveries');
const dashboardRoutes = require('./routes/dashboard');
// const path = require('path');

dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected...'));
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
// app.use(cors({ origin: 'https://your-frontend.netlify.app' }));
// Middleware
app.use(express.json());

// Routes
app.use('/api/patients', patientRoutes);
app.use('/api/diet-charts', dietChartRoutes);
app.use('/api/pantry', pantryRoutes);
app.use('/api/deliveries', deliveryRoutes);

app.use('/api/dashboard', dashboardRoutes)

// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

  
// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
