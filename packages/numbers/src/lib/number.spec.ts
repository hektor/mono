import test from 'ava';

import {
  clamp,
  double,
  pow,
  inClosedInterval,
  inOpenInterval,
  isNumber,
} from './number';

test('double', (t) => {
  t.is(double(0), 0);
  t.is(double(1), 2);
  t.is(double(2), 4);
});

test('power', (t) => {
  t.is(pow(2, 0), 1);
  t.is(pow(2, 1), 2);
  t.is(pow(2, 4), 16);
});

test('clamp', (t) => {
  t.is(clamp(1, 0, 100), 1);
  t.is(clamp(0, 0, 100), 0);
  t.is(clamp(-1, 0, 100), 0);
  t.is(clamp(100.1, 0, 100), 100);
});

test('isNumber', (t) => {
  t.is(isNumber(3), true);
  t.is(isNumber(Math.PI), true);
  t.is(isNumber(''), false);
  t.is(isNumber('1'), false);
  t.is(isNumber({}), false);
  t.is(isNumber([]), false);
});

test('inClosedInterval', (t) => {
  t.is(inClosedInterval(0, [0, 100]), true);
  t.is(inClosedInterval(1, [0, 100]), true);
  t.is(inClosedInterval(-1, [0, 100]), false);
  t.is(inClosedInterval(100.1, [0, 100]), false);
});

test('inOpenInterval', (t) => {
  t.is(inOpenInterval(0, [0, 100]), false);
  t.is(inOpenInterval(1, [0, 100]), true);
  t.is(inOpenInterval(-1, [0, 100]), false);
  t.is(inOpenInterval(100.1, [0, 100]), false);
});
