const express = require('express');
const Youtubestream = require('../middleware/YoutubeStream');
const router = express.Router();

router.post('/music/make', async (req, res) => {
  const { musicQuizItems } = req.body;

  const { stream } = new Youtubestream(musicQuizItems[0]);

  for await (const chunk of stream) {
    res.write(chunk);
  }

  res.end();
});

module.exports = router;
