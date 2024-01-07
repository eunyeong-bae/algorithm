import {Queue} from './queue.mjs';

function Graph(){
    this.edge = {};
    this.visited = {};
}

// addVertex(): 정점(vertex) 추가
Graph.prototype.addVertex = function(v){
    this.edge[v] = [];
    this.visited[v] = false;
}

// addEdge(): 간선(edge) 추가
Graph.prototype.addEdge = function(v1, v2){
    this.edge[v1].push(v2); //v1 -> v2
}


// removeEdge() : 간선(edge) 삭제
Graph.prototype.removeEdge = function(v1, v2){

    //v1 -> v2 삭제
    //1.key 값 유무 체크
    if(this.edge[v1]){
        //2.리스트 배열 내, v2 유무 체크
        let idx = this.edge[v1].indexOf(v2);

        if(idx != -1){
            this.edge[v1].splice(idx, 1);
        }

        //빈 객체니까, 정점 삭제
        if(this.edge[v1].length === 0){
            delete this.edge[v1];
        }
    }
}


// removeVertex() : 정점(vetex) 삭제
Graph.prototype.removeVertex = function(v){
    //정점이 이미 엣지 내 없다면 리턴
    if(this.edge[v] === undefined) return;

    let length = this.edge[v].length; //changed length
    let connectedVertex = [...this.edge[v]]; //object copy

    for(let i=0; i<length;i++){
        this.removeEdge(v, connectedVertex[i]);
    }
}

// print() : 현재 graph 연결 상태 출력
Graph.prototype.print = function() {
    for(let vertex in this.edge){
        let neighbors = this.edge[vertex];
        if(neighbors.length === 0) continue;

        //화살표로 출력해줘야 하기 때문에, 개행을 하지 않는 api 사용
        process.stdout.write(`${vertex} -> `); 
        for(let j =0; j<neighbors.length;j++){
            process.stdout.write(`${neighbors[j]} `);
        }
        console.log("")
    }
}

// bfs() : BFS 탐색
Graph.prototype.bfs = function(startVertex){
    this._bfsLoopVisit(startVertex);
}

// _bfsLoopVisit() : 큐를 이용한 BFS 탐색
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
            queue.enqueue(neighbors[i]);
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

graph.bfs("A")