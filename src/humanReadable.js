function humanReadable(seconds) {
  return `00:00:${seconds.toString().padStart(2, '0')}`;
}

module.exports = humanReadable;
