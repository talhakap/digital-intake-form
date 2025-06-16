const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/prefill', (req, res) => {
  res.json({
    name: '',
    email: '',
    subscribe: true,
    notes: ''
  });
});

app.post('/api/submit', (req, res) => {
  console.log('Received form data:', req.body);
  res.json({ message: 'Success' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
