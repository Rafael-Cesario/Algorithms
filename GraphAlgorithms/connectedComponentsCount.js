const connectedCount = (graph) => {
	const visited = new Set();
	let count = 0;

	for (let node in graph) {
		if (!visited.has(Number(node))) {
			visited.add(node);
			count++;
		}

		for (let neighbor of graph[node]) {
			visited.add(neighbor);

			console.log(visited);
		}
	}

	return count;
};

const graph = {
	0: [8, 1, 5],
	1: [0],
	5: [0, 8],
	8: [0, 5],
	2: [3, 4],
	3: [2, 4],
	4: [3, 2],
};

const result = connectedCount(graph);
console.log({ result }); // => 2
