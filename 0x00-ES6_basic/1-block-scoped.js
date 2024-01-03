export default function taskBlock(trueOrFalse) {
  const task = false
  const task2 = true

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-expressions
    task
    // eslint-disable-next-line no-unused-expressions
    task2
  }

  return [task, task2]
}
