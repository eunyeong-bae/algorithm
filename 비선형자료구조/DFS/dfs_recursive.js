/**무방향 그래프 
 * 
 * Graph() : edge object 객체 저장을 위한 생성자
 * key: vertex
 * value: list 형태로 연결된 vertex를 표현하여 egde 연결 관계 표현
*/
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

// dfs(): DFS 탐색
Graph.prototype.dfs = function(startVertex){
    this._dfsRecursiveVisit(startVertex);
}

// _dfsRecursiveVisit() : 재귀를 이용한 DFS 탐색
Graph.prototype._dfsRecursiveVisit = function(vertex){
    //1.종료 조건
    if(this.visited[vertex]){
        return;
    }

    //2.재귀 호출을 하면서 수행해야할 코드
    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`)

    let neighbors = this.edge[vertex];
    for(let i=0; i<neighbors.length;i++){
        this._dfsRecursiveVisit(neighbors[i]);
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