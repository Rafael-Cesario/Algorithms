// Buble sort
// o(n^2)

const sortArray = (array) => {
	const swap = (a, b) => {
		const temp = array[a];
		array[a] = array[b];
		array[b] = temp;
	};

	for (let i = 0; i < array.length; i++) {
    let haveChanged = false;

		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]){
        swap(j, j + 1)
        haveChanged = true;
      };
		}

    if (!haveChanged) break;
	}

	return array;
};

const a = Array(20)
	.fill()
	.map(() => Math.floor(Math.random() * 21));
console.log({ a });

const result = sortArray(a);
console.log({ result });
