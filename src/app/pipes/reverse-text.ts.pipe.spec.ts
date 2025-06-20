import { ReverseTextTsPipe } from './reverse-text.ts.pipe';

describe('ReverseTextTsPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseTextTsPipe();
    expect(pipe).toBeTruthy();
  });
});
