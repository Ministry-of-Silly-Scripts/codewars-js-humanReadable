function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remaingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remaingSeconds.toString().padStart(2, '0')}`;
}

module.exports = humanReadable;
