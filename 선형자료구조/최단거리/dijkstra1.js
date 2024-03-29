//shortestPath() : edge object 객체 저장을 위한 생성자
//key : vertex
//value : list 형태로 연결된 vertex를 표현하여 edge 연결 관계 표현
function ShortestPath() {
    this.edges = {};
}

//addVertex() : 정점 추가(간선 비용 표시를 위해 key/value object 형태로 저장)
ShortestPath.prototype.addVertex = function(vertex){
    this.edges[vertex] = {};
}

//addEdge() : 간선 추가
ShortestPath.prototype.addEdge = function(srcVertex, dstVertex, weight){
    this.edges[srcVertex][dstVertex] = weight;
}

//_extractMin(): 최단 거리 노드 검색
ShortestPath.prototype._extractMin = function(queue, dist){
    let minDistance = Number.POSITIVE_INFINITY;
    let minVertex = null;

    for(let vertex in queue){
        if(dist[vertex] <= minDistance){
            minDistance = dist[vertex];
            minVertex = vertex;
        }
    }

    return minVertex;
}

//dijkstra() : 다익스트라 최단 경로 탐색
ShortestPath.prototype.dijkstra = function(start){
    let queue = {}; //각각의 vertex 저장하는 객체
    let dist = []; //vertex로 가는 최단거리 저장

    for(let vertex in this.edges){
        dist[vertex] = Number.POSITIVE_INFINITY;
        queue[vertex] = this.edges[vertex];
    }

    dist[start] = 0;

    while(Object.keys(queue).length != 0){
        let u = this._extractMin(queue, dist);

        delete queue[u];

        for(let neighber in this.edges[u]){
            let alt = dist[u] + this.edges[u][neighber];
            if(alt < dist[neighber]) dist[neighber] = alt;
        }
    }

    for(let vertex in this.edges){
        if(dist[vertex] === Number.POSITIVE_INFINITY) delete dist[vertex];
    }

    return dist;
}


let path = new ShortestPath();
path.addVertex("A");
path.addVertex("B");
path.addVertex("C");
path.addVertex("D");
path.addVertex("E");

path.addEdge("A","B", 10);
path.addEdge("A","C", 3);
path.addEdge("B","C", 1);
path.addEdge("B","D", 2);
path.addEdge("C","B", 4);
path.addEdge("C","D", 8);
path.addEdge("C","E", 2);
path.addEdge("D","E", 7);
path.addEdge("E","D", 9);

console.log(path);
console.log(path.dijkstra("A"))
console.log(path.dijkstra("B"))
console.log(path.dijkstra("C"))