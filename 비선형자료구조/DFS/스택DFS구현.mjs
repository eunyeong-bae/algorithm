import {Stack} from './stack.mjs'
//dfs() : DFS

function Graph() {
    this.edge = {}
    this.visited = {}
}

Graph.prototype.addVertex = function(v){
    this.edge[v] = [];
    this.visited[v] = false;
}

Graph.prototype.addEdge = function(v1,v2){
    this.edge[v1].push(v2);
}

Graph.prototype.removeEdge = function(v1, v2){
    if(this.edge[v1]){
        let idx = this.edge[v1].indexOf(v2);

        if(idx != -1){
            this.edge[v1].splice(idx, 1);
        }

        if(this.edge[v1].length === 0){
            delete this.edge[v1];
        }
    }
}

Graph.prototype.removeVertex = function(vertex){
    if(this.edge[vertex] === undefined) return;

    let length = this.edge[vertex].length;
    let connectedVertex = [...this.edge[vertex]];

    for(let i=0; i<length;i++){
        this.removeEdge(vertex, connectedVertex[i]);
    }
}

Graph.prototype.sizeVertex = function(){
    return Object.keys(this.edge).length;
}

Graph.prototype.sizeEdge = function(vertex){
    return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
}

Graph.prototype.print = function(){
    for(let vertex in this.edge){
        let neighbors = this.edge[vertex];
        if(neighbors.length === 0) continue;

        process.stdout.write(`${vertex} -> `)
        for(let j=0; j<neighbors.length;j++){
            process.stdout.write(`${neighbors[j]} `)
        }
        console.log("")
    }
}

//dfs()
Graph.prototype.dfs = function(startVertex){
    this._dfsLoopVisit(startVertex);
}
//_dfsLoopVisit(): 재귀를 이용한 dfs 탐색
Graph.prototype._dfsLoopVisit = function(vertex){
   let stack = new Stack();
   stack.push(vertex);

   while(!stack.isEmpty()){
    let vertex = stack.pop();
        if(this.visited[vertex]){
            continue;
        }

        this.visited[vertex] = true;
        console.log(`visit "${vertex}"`)

        let neighbors = this.edge[vertex];
        for(let i=neighbors.length - 1; i>= 0;i--){
            this._dfsLoopVisit(neighbors[i]);
        }
   }
}

let graph = new Graph();
let vertices = ["A","B", "C","D","E", "F","G","H","I"];

for(let i=0; i<vertices.length;i++){
    graph.addVertex(vertices[i])
}

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("A","D")
graph.addEdge("C","G")
graph.addEdge("D","G")
graph.addEdge("D","H")
graph.addEdge("B","E")
graph.addEdge("B","F")
graph.addEdge("E","I")
graph.print()
console.log("")

graph.dfs("A")