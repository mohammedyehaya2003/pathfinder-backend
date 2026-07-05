const dijkstra = require("../algorithms/dijkstra");

test("should calculate shortest distances from node A", () => {
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
      { node: "B", weight: 1 },
      { node: "C", weight: 3 },
    ],
  };

  const result = dijkstra(graph, "A");

  expect(result).toEqual({
    A: 0,
    B: 5,
    C: 2,
    D: 5,
  });
});