function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let i = 0;
  let j = 0;

  for (let x of pushed) {
    pushed[i++] = x;

    while (i > 0 && pushed[i - 1] === popped[j]) {
      i--;
      j++;
    }
  }

  return i === 0;
}
