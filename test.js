const assert = require('assert');

const toReadable = require('./src');


it('Should return \'zero\' when 0 given', () => {
  const readable = toReadable(0);

  assert.equal(readable, 'zero');
});

it('Should return \'one\' when 1 given', () => {
  const readable = toReadable(1);

  assert.equal(readable, 'one');
});

it('Should return \'two\' when 2 given', () => {
  const readable = toReadable(2);

  assert.equal(readable, 'two');
});

it('Should return \'three\' when 3 given', () => {
  const readable = toReadable(3);

  assert.equal(readable, 'three');
});

it('Should return \'four\' when 4 given', () => {
  const readable = toReadable(4);

  assert.equal(readable, 'four');
});

it('Should return \'five\' when 5 given', () => {
  const readable = toReadable(5);

  assert.equal(readable, 'five');
});

it('Should return \'six\' when 6 given', () => {
  const readable = toReadable(6);

  assert.equal(readable, 'six');
});

it('Should return \'seven\' when 7 given', () => {
  const readable = toReadable(7);

  assert.equal(readable, 'seven');
});

it('Should return \'eight\' when 8 given', () => {
  const readable = toReadable(8);

  assert.equal(readable, 'eight');
});

it('Should return \'nine\' when 9 given', () => {
  const readable = toReadable(9);

  assert.equal(readable, 'nine');
});

it('Should return \'ten\' when 10 given', () => {
  const readable = toReadable(10);

  assert.equal(readable, 'ten');
});

it('Should return \'eleven\' when 11 given', () => {
  const readable = toReadable(11);

  assert.equal(readable, 'eleven');
});

it('Should return \'twelve\' when 12 given', () => {
  const readable = toReadable(12);

  assert.equal(readable, 'twelve');
});

it('Should return \'thirteen\' when 13 given', () => {
  const readable = toReadable(13);

  assert.equal(readable, 'thirteen');
});

it('Should return \'fourteen\' when 14 given', () => {
  const readable = toReadable(14);

  assert.equal(readable, 'fourteen');
});

it('Should return \'fifteen\' when 15 given', () => {
  const readable = toReadable(15);

  assert.equal(readable, 'fifteen');
});

it('Should return \'sixteen\' when 16 given', () => {
  const readable = toReadable(16);

  assert.equal(readable, 'sixteen');
});

it('Should return \'seventeen\' when 17 given', () => {
  const readable = toReadable(17);

  assert.equal(readable, 'seventeen');
});

it('Should return \'eighteen\' when 18 given', () => {
  const readable = toReadable(18);

  assert.equal(readable, 'eighteen');
});

it('Should return \'nineteen\' when 19 given', () => {
  const readable = toReadable(19);

  assert.equal(readable, 'nineteen');
});

it('Should return \'twenty\' when 20 given', () => {
  const readable = toReadable(20);

  assert.equal(readable, 'twenty');
});