const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS ayarları - production'da frontend origin'i ekle
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://ali2552.github.io',
    'https://gelir-gider-backend.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend sunucu http://localhost:${PORT} adresinde çalışıyor`);
  console.log('📝 Google OAuth2 setup için bak: /auth/google?userId=USER_ID');
});
