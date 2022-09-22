const hasPath = (graph, root, target) => {
	const queue = [root];

	while (queue.length > 0) {
		const current = queue.shift();

		if (current === target) return true;

		for (let neighbor of graph[current]) {
			queue.push(neighbor);
		}
	}

	return false;
};

// Recursive
// const hasPath = (graph, root, target) => {
// 	if (root === target) return true;

// 	for (let neighbor of graph[root]) {
// 		if (hasPath(graph, neighbor, target) === true) {
// 			return true;
// 		}
// 	}

// 	return false;
// };

const graph = {
	f: ['g', 'i'],
	g: ['h'],
	h: [],
	i: ['g', 'k'],
	j: ['i'],
	k: [],
};

const result = hasPath(graph, 'f', 'k');
console.log(result);
