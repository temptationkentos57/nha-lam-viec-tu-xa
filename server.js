const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'API hoạt động tốt!' });
});

app.listen(PORT, () => {
    console.log(`Máy chủ API đang chạy trên http://localhost:${PORT}`);
});
