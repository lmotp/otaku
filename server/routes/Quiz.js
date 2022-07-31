const express = require('express');
const router = express.Router();
const fs = require('fs');
const ytdl = require('ytdl-core');

router.post('/music/make', (req, res) => {
  const { musicQuizItems } = req.params;
});
