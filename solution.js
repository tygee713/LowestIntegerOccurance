
const solution = (numbers) => {
    if (!numbers.length) return []
    let numberOccurances = {}

    for (let i=0; i<numbers.length; i++) {
      numberOccurances[numbers[i]] = numberOccurances[numbers[i]] ? numberOccurances[numbers[i]] + 1 : 1
    }

    let entries = Object.entries(numberOccurances)
    entries.sort((a, b) => a[1] > b[1] ? 1 : b[1] > a[1] ? -1 : 0)
    let lowestNumberOccurances = entries[0][1]
    let lowestNumbers = []

    for (let i=0; i<entries.length; i++) {
      if (entries[i][1] <= lowestNumberOccurances) lowestNumbers.push(parseInt(entries[i][0]))
    }

    return lowestNumbers
}