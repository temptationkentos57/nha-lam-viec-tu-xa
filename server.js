const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'API is working fine!' });
});

app.listen(PORT, () => {
    console.log(`Server API is running on http://localhost:${PORT}`);
});