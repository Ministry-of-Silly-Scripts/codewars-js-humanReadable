function humanReadable(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaingSeconds = seconds % 60

  return `00:${minutes.toString().padStart(2, '0')}:${remaingSeconds.toString().padStart(2, '0')}`;
}

module.exports = humanReadable;
