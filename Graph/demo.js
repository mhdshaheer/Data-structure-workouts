class Graph{
    constructor(){
        this.adjacent = {}
    }
    addVertex(vertex){
        if(!this.adjacent[vertex]){
            this.adjacent[vertex] = new Set();
        }
    }
    addEdge(v1,v2){
        if(!this.adjacent[v1]){
            this.addVertex(v1)
        }
        if(!this.adjacent[v2]){
            this.addVertex(v2)
        }
        this.adjacent[v1].add(v2)
        this.adjacent[v2].add(v1)
    }
    hasEdge
    display(){
        for(let vertex in this.adjacent){
            console.log(vertex,'=>',[...this.adjacent[vertex]])
        }
    }
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A','B')
graph.addEdge('C','B');
graph.display()