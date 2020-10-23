import gradingStudents from './gradingStudents';

describe('gradingStudents()', () => {
  it('should round grade up to the next multiple of 5.', () => {
    expect(gradingStudents([84, 29, 57])).toEqual([85, 29, 57]);
    expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
  });
});
