import Queue from './queue';

let queue;

describe('Queue', () => {
  beforeEach(() => {
    queue = new Queue();
  });

  describe('when instantiate the queue class', () => {
    test('enqueue() method', () => {
      const result = {
        0: 'John',
      };

      queue.enqueue('John');

      expect(queue.items).toEqual(result);
    });

    test('dequeue() method', () => {
      const result = {
        1: 'John',
      };

      queue.enqueue('Jalyn');
      queue.enqueue('John');

      expect(queue.dequeue()).toEqual('Jalyn');
      expect(queue.items).toEqual(result);
    });

    test('peek() method', () => {
      queue.enqueue('Jalyn');
      queue.enqueue('John');
      queue.enqueue('BB8');

      expect(queue.peek()).toBe('Jalyn');
    });

    test('size() method', () => {
      queue.enqueue(81);
      queue.enqueue(90);
      queue.enqueue(100);

      expect(queue.size()).toBe(3);
    });

    test('clear() method', () => {
      queue.enqueue(81);
      queue.enqueue(90);
      queue.enqueue(100);

      expect(queue.size()).toBe(3);

      queue.clear();

      expect(queue.size()).toBe(0);
    });

    test('toString() method', () => {
      const string = 'Jalyn,John,Cena';

      queue.enqueue('Jalyn');
      queue.enqueue('John');
      queue.enqueue('Cena');

      expect(queue.toString()).toBe(string);
    });
  });

  describe('when calling stack isEmpty() method', () => {
    describe('when its empty', () => {
      test('return true', () => {
        expect(queue.isEmpty()).toBe(true);
      });
    });

    describe('when its NOT empty', () => {
      test('return false', () => {
        queue.enqueue('Jalyn');

        expect(queue.isEmpty()).toBeFalsy();
      });
    });
  });
});
