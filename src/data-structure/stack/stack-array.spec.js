import Stack from './stack-array';

let stack;

describe('Stack', () => {
  beforeEach(() => {
    stack = new Stack();
  });

  describe('when instantiate the Stack class', () => {
    test('push() method', () => {
      stack.push(1);

      expect(stack.items).toHaveLength(1);
      expect(stack.items).toEqual([1]);
    });

    test('pop() method', () => {
      stack.push(1);
      stack.push(2);

      expect(stack.pop()).toBe(2);
    });

    test('peek() method', () => {
      stack.push(81);
      stack.push(90);
      stack.push(100);

      expect(stack.peek()).toBe(100);
    });

    test('size() method', () => {
      stack.push(81);
      stack.push(90);
      stack.push(100);

      expect(stack.size()).toBe(3);
    });

    test('clear() method', () => {
      stack.push(81);
      stack.push(90);
      stack.push(100);

      expect(stack.size()).toBe(3);

      stack.clear();

      expect(stack.size()).toBe(0);
    });
  });

  describe('when calling stack isEmpty() method', () => {
    describe('when its empty', () => {
      test('return true', () => {
        expect(stack.isEmpty()).toBe(true);
      });
    });

    describe('when its NOT empty', () => {
      test('return false', () => {
        stack.push(1);

        expect(stack.isEmpty()).toBeFalsy();
      });
    });
  });
});
