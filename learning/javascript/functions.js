function printCombinations(arr) {
  const n = arr.length;
  // Loop through all possible combinations
  for (let i = 0; i < 2 ** n; i++) {
    const combination = [];
    // Generate the combination based on the binary representation of i
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        combination.push(arr[j]);
      }
    }
    // Print the combination
    console.log(combination);
  }
}

const arr = [1,2,3,4];
//printCombinations(arr);