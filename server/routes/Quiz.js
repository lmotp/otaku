const express = require('express');
const router = express.Router();

const ytdl = require('ytdl-core');

router.post('/music/make', async (req, res) => {
  const { musicQuizItems } = req.body;

  let infoItem = await ytdl.getInfo(`https://www.youtube.com/watch?v=${musicQuizItems[0]}`);
  let format = ytdl.chooseFormat(infoItem.formats, { quality: 'lowestaudio' });

  res.send(format.url);
});

module.exports = router;
