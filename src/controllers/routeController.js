const pool = require("../db/db");


function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const visited = new Set();

  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
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
        previous[neighbor.node] = currentNode;
      }
    }
  }

  const path = [];

  let current = end;

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    distance: distances[end],
    path,
  };
}

const calculateRoute = async (req, res) => {
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

  const result = dijkstra(graph, "A", "D");


   await pool.query(
  `
  INSERT INTO routes_history
  (
    user_id,
    start_location,
    end_location,
    distance
  )
  VALUES ($1, $2, $3, $4)
  `,
  [
    1,
    "A",
    "D",
    result.distance,
  ]
);

  res.json({
    message: "Shortest Route Calculated",
    result,
  });
};

module.exports = {
  calculateRoute,
};