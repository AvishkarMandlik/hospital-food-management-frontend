const DietChart = require('../models/DietChart');

exports.getDietCharts = async (req, res) => {
  try {
    const charts = await DietChart.find();
    res.json(charts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDietChart = async (req, res) => {
  try {
    const chart = new DietChart(req.body);
    const savedChart = await chart.save();
    res.status(201).json(savedChart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
