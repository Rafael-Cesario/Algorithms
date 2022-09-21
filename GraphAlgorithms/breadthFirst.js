const breadthFirst = (graph, root) => {
	const queue = [root];

	while (queue.length > 0) {
		const current = queue.shift();
		console.log(current);

		for (let neighbor of graph[current]) {
			queue.push(neighbor);
		}
	}
};

const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [],
};

breadthFirst(graph, 'a');
