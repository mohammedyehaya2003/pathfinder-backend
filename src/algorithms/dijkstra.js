function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();

  for (let node in graph) {
    distances[node] = Infinity;
  }

  distances[start] = 0;

  while (true) {
    let currentNode = null;

    for (let node in distances) {
      if (
        !visited.has(node) &&
        (currentNode === null ||
          distances[node] < distances[currentNode])
      ) {
        currentNode = node;
      }
    }

    if (currentNode === null) {
      break;
    }

    visited.add(currentNode);

    for (let neighbor of graph[currentNode]) {
      const distance =
        distances[currentNode] + neighbor.weight;

      if (distance < distances[neighbor.node]) {
        distances[neighbor.node] = distance;
      }
    }
  }

  return distances;
}

const graph = {
  A: [
    { node: "B", weight: 5 },
    { node: "C", weight: 2 },
  ],

  B: [
    { node: "A", weight: 5 },
    { node: "D", weight: 1 },
  ],

  C: [
    { node: "A", weight: 2 },
    { node: "D", weight: 3 },
  ],

  D: [
    { node: "C", weight: 3 },
    { node: "B", weight: 1 },
  ],
};

module.exports = dijkstra;