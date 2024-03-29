// Node() : value & left, right node 저장을 위한 생성자
function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

// BinaryTree() : 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree() {
    this.root = null;
}

// _insertNode() : 재귀로 트리를 순회하며 노드 추가(내부 사용)
BinaryTree.prototype._insertNode = function(node, value){
    //현재 값과 비교
    //작으면 왼쪽, 크면 오른쪽
    // 왼쪽, 오른쪽에 left, right pointer 비어 있으면, 추가할 노드를 연결
    // 비어있지 않다멶 ㅏ위 노드에서 다시 비교하도록 넘겨준다

    if(node === null){
        node = new Node(value);
    } else if( value < node.value){
        node.left = this._insertNode(node.left, value);
    } else if( value >= node.value){
        node.right = this._insertNode(node.right, value);
    }

    return node;
}

// insert() : 노드 추가
BinaryTree.prototype.insert = function(value){
    this.root = this._insertNode(this.root, value);
}

//_preOrderTraverseNode() : 재귀로 트리를 순회하며 전위 순회(내부 사용)
BinaryTree.prototype._preOrderTraverseNode = function(node, callback){
    if(node === null){
        return;
    }

    callback(node);
    this._preOrderTraverseNode(node.left, callback);
    this._preOrderTraverseNode(node.right, callback);
}

//preOrderTraverse() : 전위 순회하며 노드 출력
BinaryTree.prototype.preOrderTraverse = function(callback){
    this._preOrderTraverseNode(this.root, callback);
}

//_inOrderTraverseNode() : 재귀로 트리를 순회하며 중위 순회(내부 사용)
BinaryTree.prototype._inOrderTraverseNode = function(node, callback){
    if(node === null){
        return;
    }

    this._inOrderTraverseNode(node.left, callback);
    callback(node);
    this._inOrderTraverseNode(node.right, callback);
}

//inOrderTraverse() : 중위 순회하며 노드 출력
BinaryTree.prototype.inOrderTraverse = function(callback){
    this._inOrderTraverseNode(this.root, callback);
    console.log("end")
}

//_postOrderTraverseNode() : 재귀로 트리를 순회하며 후위 순회(내부 사용)
BinaryTree.prototype._postOrderTraverseNode = function(node, callback){
    if(node === null){
        return;
    }

    this._postOrderTraverseNode(node.left, callback);
    this._postOrderTraverseNode(node.right, callback);
    callback(node);
}

//postOrderTraverse() : 후위 순회하며 노드 출력
BinaryTree.prototype.postOrderTraverse = function(callback){
    this._postOrderTraverseNode(this.root, callback);
}


// make & insert tree
let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree)

function printNode(node){
    process.stdout.write(`${node.value} -> `);
}

console.log("**********pre-order ********")
tree.preOrderTraverse(printNode);
console.log("end")

console.log("**********in-order ********")
tree.inOrderTraverse(printNode);
console.log("end")

console.log("**********post-order ********")
tree.postOrderTraverse(printNode);
console.log("end")