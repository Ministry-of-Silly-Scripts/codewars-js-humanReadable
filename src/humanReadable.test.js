const humanReadable = require('./humanReadable');

describe('the humanReadable canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('humanReadable', () => {
  it('should return 00:00:00 for input equal to 0', () => {
    expect(humanReadable(0)).toBe('00:00:00');
  });
});
