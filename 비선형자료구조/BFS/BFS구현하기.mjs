import {Queue} from './queue.mjs'
import {Stack } from './stack.mjs'

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

//bfs()
Graph.prototype.bfs = function(startVertex){
    this._bfsLoopVisit(startVertex);
}
//_bfsLoopVisit(): queue를 이용한 bfs 탐색
Graph.prototype._bfsLoopVisit = function(vertex){
   let queue = new Queue();
   queue.enqueue(vertex);

   while(!queue.isEmpty()){
    let vertex = queue.dequeue();
    if(this.visited[vertex]){
        continue;
    }

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`)

    let neighbors = this.edge[vertex];
    for(let i=0; i<neighbors.length;i++){
        queue.enqueue(neighbors[i])
    }

   }
}

//_bfsShortestPath() : 다른 정점 간 최단 경로 비용 산출
Graph.prototype._bfsShortestPath = function(vertex){
    let queue = new Queue();
    queue.enqueue(vertex);

    let distance = {}
    let pre_visit = {}
    for(let vertex in this.edge){
        distance[vertex] = 0;
        pre_visit[vertex] = null;
    }

    while(!queue.isEmpty()){
        let vertex = queue.dequeue();
        if(this.visited[vertex]){
            continue;
        }

        this.visited[vertex] =true;
        console.log(`visit "${vertex}"`)

        let neighbors = this.edge[vertex];
        for(let i=0; i<neighbors.length;i++){
            //A:0, B:1..
            distance[neighbors[i]] = distance[vertex] + 1;
            //앞전에 들렸던 정점 저장
            pre_visit[neighbors[i]] = vertex;
            queue.enqueue(neighbors[i])
        }
    }

    return {distance, pre_visit}
}

//_from_to_path() : 프롬 정점에서 새 정점으로 최단 경로 출력
Graph.prototype._from_to_path = function(pre_visit, from, to){
    let stack = new Stack();

    for(let v = to; v !== from; v= pre_visit[v]){
        stack.push(v);
    }
    stack.push(from);

    while(!stack.isEmpty()){
        let v = stack.pop();
        process.stdout.write(`${v} -> `);
    }
    console.log("end")
}

// shortestPath() : 다른 정점 간 최단 경로 탐색
Graph.prototype.shortestPath = function(startVertex){
    let result = this._bfsShortestPath(startVertex);

    console.log(result.distance)
    console.log(result.pre_visit)

    for(let vertex in this.edge){
        if(vertex === startVertex) continue;

        this._from_to_path(result.pre_visit, startVertex, vertex)
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

// graph.bfs("A")
// console.log(graph._bfsShortestPath(("A")))
graph.shortestPath("A")