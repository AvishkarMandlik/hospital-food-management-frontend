const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    
    // Check if MONGO_URI is defined
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined in the environment variables.');
    }

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,    // Ensure backward compatibility
      useUnifiedTopology: true // Recommended for MongoDB driver >= 3.2
    });

    console.log('MongoDB connected...');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
