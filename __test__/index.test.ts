import { main } from '../src/index';

describe('index file test', () => {
  test('main should equal a + b', () => {
    expect(main(1, 2)).toEqual(3);
  });

  test('main should equal 5', () => {
    expect(main(3, 3)).toEqual(5);
  });
});
