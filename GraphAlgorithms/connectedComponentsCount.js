// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

const connectedCount = (graph) => {
	const visited = new Set();
	let count = 0;

	for (let node in graph) {
		const isExplored = explore(graph, node, visited);

		if (isExplored) count++;
	}

	return count;
};

const explore = (graph, node, visited) => {
	if (visited.has(Number(node))) return false;

	visited.add(node);

	for (let neighbor of graph[node]) {
		explore(graph, neighbor, visited);
	}

	return true;
};

const graph = {
	0: [8, 1, 5],
	1: [0],
	5: [0, 8],
	8: [0, 5],
	2: [3, 4],
	3: [2, 4],
	4: [3, 2],
}; // => 2

const result = connectedCount(graph);
console.log({ result }); // => 2
