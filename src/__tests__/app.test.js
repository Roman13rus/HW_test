import health from '../app';

test.each([
  ['маг', { health: 90 }, 'healthy'],
  ['воин', { health: 45 }, 'wounded'],
  ['крестьянин', { health: 12 }, 'critical'],
])(
  ('the level of health for %n name with %i health'),
  (name, level, expected) => {
    const result = health(level);
    expect(result).toMatch(expected);
  },
);
