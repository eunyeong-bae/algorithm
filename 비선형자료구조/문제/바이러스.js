function Graph() {
    this.edge = {};
    this.visited= {};
}

Graph.prototype.addVertex = function(v){
    this.edge[v] = [];
    this.visited[v] = false;
}

Graph.prototype.addEdge = function(v1, v2){
    this.edge[v2].push(v1)
    this.edge[v1].push(v2)
}

Graph.prototype.dfs = function(vertex){
    //1.종료 조건
    if(this.visited[vertex]) return; //이미 방문된 것 처리

    this.visited[vertex] = true;
    
    let neighbors = this.edge[vertex]; //인접리스트 정보
    for(let i=0; i<neighbors.length;i++){
        this.dfs(neighbors[i]);
    }
}

function answer(v, e_list){
    let result = 0;

    let g = new Graph();

    // addVertex() : PC추가
    for(let i=1; i<=v; i++){
        g.addVertex(i);
    }

    // addEdge() : 네트워크 연결(무방향)
    for(let i=0; i< e_list.length;i++){
        let e = e_list[i]; //[v1, v2]
        g.addEdge(e[0], e[1]);
    }

    // dfs() : 방문한 Pc(노드)를 업데이트
    g.dfs(1);

    // 업데이트 된 PC들은 visisted[vertex] = true, 방문x(false)
    for(let vertex in g.visited){
        result += g.visited[vertex] ? 1 : 0;
    }

    return result;
}

let input = [
    [7, [
        [1,2],[2,3],[1,5],[1,5],[5,2],[5,6],[4,7]
    ]],
    [10, [
        [8,6],[5,7],[9,10],[7,4],[1,8],[5,10],[7,2]
    ]],
    [10,[
        [6,9],[9,4],[4,8],[9,7],[6,8],[10,1],[10,9]
    ]],
]

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i][0], input[i][1]))
}