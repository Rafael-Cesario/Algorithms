// Iterate from 0 to N-1 and compare the value of every index with x if they match return index.
// Time = O(n);
// Space = O(1);


const linearSearch = (array, x) => {
    for (let i = 0; i < array.length;i++) 
        if (array[i] === x) return i;
    

    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8,9,10], 8))
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8,9,10], 11))
