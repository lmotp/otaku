const { PassThrough } = require('stream');
const fs = require('fs');

const cloneable = 'cloneable-readable';
const ytdl = require('ytdl-core');

class Youtubestream {
  constructor(url) {
    this.videoId = this.#parseUrl(url);
    this.mp3Path = this.#getMp3Path(this.videoId);
    this.passThrough = this.#getPassThrough(this.videoId, this.mp3Path);
  }

  get stream() {
    if (this.passThrough) {
      return cloneable(this.passThrough);
    }
    return fs.createReadStream(this.mp3Path);
  }

  #getPassThrough(videoId, mp3Path) {
    const NEED_FILE_BYTE = 2 ** 19;
    const DOWNLOAD_FILE_BYTE = 2 ** 21;

    if (!fs.existsSync(`musics`)) fs.mkdirSync('musics');
    if (fs.existsSync(mp3Path) && fs.statSync(mp3Path).size >= NEED_FILE_BYTE) return;

    const passThrough = new PassThrough();
    const writeStream = fs.createWriteStream(mp3Path);
    const video = ytdl(`https://youtube.com/watch?v=${videoId}`, { quality: 'lowestaudio' });

    video.pipe(passThrough);
    passThrough.pipe(writeStream);

    writeStream.on('drain', () => {
      if (fs.statSync(mp3Path).size < DOWNLOAD_FILE_BYTE) return;
      video.unpipe();
      passThrough.unpipe();
      passThrough.destroy();
      delete this.passThrough;
      writeStream.close();
    });

    return passThrough;
  }

  #getMp3Path(videoId) {
    return `musics/${videoId}.mp3`;
  }

  #parseUrl(url) {
    const regex = /(.*?)(^|\/|v=)([a-z0-9_-]{11})(.*)?/i;
    return url.match(regex)[3];
  }
}

module.exports = Youtubestream;
