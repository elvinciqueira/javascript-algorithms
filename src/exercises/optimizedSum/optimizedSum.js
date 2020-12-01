export default function ListFastSum(arr) {
  function sum(start_idx, end_idx) {
    let total = 0

    for (let i = start_idx; i < end_idx; i++) {
      total += arr[i]
    }

    return total
  }

  return {
    sum
  }
}
