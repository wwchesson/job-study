//Graphs are non-linear data structures made up finite nodes or vertices with edges to connect between them. Google maps and social networks work via graphs.
//No order to how connect vertices.
//Edges are what connects 2 vertices together. An edge is a path to another vertex.

//4 TYPES OF GRAPHS: see diagram
//store graph in 2 ways: adjacency matrix or adjacency list

//BIG O considerations
//Adjacency list: less space, faster on iterating on edges, slow on seraching for a specific edge
//Adjacency matrix: more space, slower on iterating over edges, fast on seraching for specific edge
//Faster for looking for specific edge on matrix is because if know the index, can look that up easily
//Slower in list bc if see A: [B, F] and see connection between A&B, doesn't necessarily mean that there's a connection between B&A
//Lists are faster in traversing edges and not concerned with looking for specific edge
//Data is growing, need data structure that provides us that flexibility

//Graph methods & # of args: add vertex (V), add edge (V1, V2), remove edge(V1, V2), remove vertex(V)

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    //add key to adjacency list with the name of the vertex & set value equal to []
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    //the function should reassign the key of v1 to b an array without v2 & vice versa

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(v) {
    //while the array (the value of the key of v) still has entries
    while (this.adjacencyList[v].length) {
      const adjVertex = this.adjacencyList[v].pop();

      //call removeEdge with the v we are trying to remove and the popped value
      this.removeEdge(v, adjVertex);
    }
    //delete actual vertex
    delete this.adjacencyList[v]; //the delete operator removes a property from an object.
  }
}

const stationGraph = new Graph();
stationGraph.addVertex("DAL");
stationGraph.addVertex("AUS");
stationGraph.addVertex("HOU");
stationGraph.addEdge("DAL", "AUS");
stationGraph.addEdge("HOU", "AUS");
stationGraph.addEdge("HOU", "DAL");
stationGraph.removeEdge("DAL", "AUS");

console.log(stationGraph);
