// Recursive
// const depthFirst = (graph, root) => {
// 	console.log(root);

// 	for (let neighbor of graph[root]) {
// 		depthFirst(graph, neighbor);
// 	}
// };

const depthFirst = (graph, root) => {
	const stack = [root];

	while (stack.length > 0) {
		const current = stack.pop();
		console.log(current);

		while (graph[current].length > 0) {
			stack.push(graph[current].pop());
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

depthFirst(graph, 'a');
