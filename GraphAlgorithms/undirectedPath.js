const createGraph = (edges) => {
	const graph = {};

	for (let [a, b] of edges) {
		if (!(a in graph)) graph[a] = [];
		if (!(b in graph)) graph[b] = [];

		graph[a].push(b);
		graph[b].push(a);
	}

	return graph;
};

//recursive
// const hasPath = (graph, root, target, visited) => {
// 	if (root === target) return true;
// 	if (visited.has(root)) return;

// 	visited.add(root);

// 	for (let neighbor of graph[root]) {
// 		if (hasPath(graph, neighbor, target, visited) === true) {
// 			return true;
// 		}
// 	}

// 	return false;
// };

const hasPath = (graph, root, target, visited) => {
	const queue = [root];

	while (queue.length > 0) {
		const current = queue.shift();
		visited.add(current);
    
		if (current === target) return true;

		for (let neighbor of graph[current]) {
			if (!visited.has(neighbor)) {
				queue.push(neighbor);
			}
		}
	}

	return false;
};

const undirectedPath = (edges, root, target) => {
	const graph = createGraph(edges);
	return hasPath(graph, root, target, new Set());
};

const edges = [
	['i', 'j'],
	['k', 'i'],
	['m', 'k'],
	['k', 'l'],
	['o', 'n'],
];

const result = undirectedPath(edges, 'j', 'm');
console.log({ result });
