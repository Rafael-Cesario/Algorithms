// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

const largestComponent = (graph) => {
	const visited = new Set();
	let largest = 0;

	for (let node in graph) {
		const size = explore(graph, node, visited);

		if (size > largest) largest = size;
	}

	return largest;
};

const explore = (graph, node, visited) => {
	if (visited.has(node)) return 0;

	let size = 1;
	visited.add(node);

	for (let neighbor of graph[node]) {
		size += explore(graph, neighbor, visited);
	}

	return size;
};

const graph = {
	3: [],
	4: ['6'],
	6: ['4', '5', '7', '8'],
	8: ['6'],
	7: ['6'],
	5: ['6'],
	1: ['2'],
	2: ['1'],
}; // -> 5

const result = largestComponent(graph);
console.log({ result });
