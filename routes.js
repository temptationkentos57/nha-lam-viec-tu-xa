const express = require('express');
const router = express.Router();

// Các route cho dự án
router.get('/projects', (req, res) => {
    res.json([{ id: 1, title: 'Dự án 1' }, { id: 2, title: 'Dự án 2' }]);
});

module.exports = router;
