const express = require('express');
const { getDietCharts, createDietChart } = require('../controllers/dietChartController');
const router = express.Router();

router.get('/', getDietCharts);
router.post('/', createDietChart);

module.exports = router;
