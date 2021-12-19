import test from 'ava';

import { double, exp } from './number';

test('double', (t) => {
  t.is(double(0), 0);
  t.is(double(1), 2);
  t.is(double(2), 4);
});

test('power', (t) => {
  t.is(exp(2, 0), 1);
  t.is(exp(2, 1), 2);
  t.is(exp(2, 4), 16);
});
