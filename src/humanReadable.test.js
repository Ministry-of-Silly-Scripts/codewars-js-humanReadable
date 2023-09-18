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

  it('should return 00:00:30 for input equal to 30', () => {
    expect(humanReadable(30)).toBe('00:00:30');
  });

  it('should return 00:00:59 for input equal to 59', () => {
    expect(humanReadable(59)).toBe('00:00:59');
  });

  it('should return 00:01:00 for input equal to 60', () => {
    expect(humanReadable(60)).toBe('00:01:00');
  });

  it('should return 00:59:59 for input equal to 3599', () => {
    expect(humanReadable(3599)).toBe('00:59:59');
  });

  it('should return 01:00:00 for input equal to 3600', () => {
    expect(humanReadable(3600)).toBe('01:00:00');
  });

  it('should return 99:59:59 for input equal to 359999', () => {
    expect(humanReadable(359999)).toBe('99:59:59');
  });
});
