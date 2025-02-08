// class Graph{
//     constructor(){
//         this.adjacentList = {};
//     }
//     addVertex(vertex){
//         if(!this.adjacentList[vertex]){
//             this.adjacentList[vertex] = new Set();
//         }
//     }
//     addEdge(v1,v2){
//         if(!this.adjacentList[v1]){
//             this.addVertex(v1)
//         }
//         if(!this.adjacentList[v2]){
//             this.addVertex(v2)
//         }
//         this.adjacentList[v1].add(v2);
//         this.adjacentList[v2].add(v1);
//     }
//     addEdgeWeight(v1,v2,weight){
//         if(!this.adjacentList[v1]){
//             this.addVertex(v1)
//         }
//         if(!this.adjacentList[v2]){
//             this.addVertex(v2)
//         }
//         this.adjacentList[v1].add({node:v2,weight});
//         this.adjacentList[v2].add({node:v1,weight});
//     }
//     hasEdge(v1,v2){
//         return (this.adjacentList[v1].has(v2)&&this.adjacentList[v2].has(v1))
//     }
//     removeEdge(v1,v2){
//         this.adjacentList[v1].delete(v2);
//         this.adjacentList[v2].delete(v1);
//     }
//     removeVertex(vertex){
//         if(!this.adjacentList[index]){
//             return 
//         }
//         for(adjVtx of this.adjacentList[vertex]){
//             this.removeEdge(vertex,adjVtx)
//         }
//         delete this.adjacentList[vertex]
//     }
//     display(){
//         for(let vertex in this.adjacentList){
//             console.log(vertex,'=>',[...this.adjacentList[vertex]])
//         }
//     }
//     deaptFS(startNode,visited=new Set()){
//         visited.add(startNode);
//         console.log(startNode);
//         this.adjacentList[startNode].forEach((node)=>{
//             if(!visited.has(node)){
//                 this.deaptFS(node,visited)
//             }
//         })
//     }
//     bredthFS(startNode){
//         const visited = new Set();
//         const queue = [startNode];
//         visited.add(startNode);
//         while(queue.length>0){
//             const curr = queue.shift();
//             console.log(curr);
//             this.adjacentList[curr].forEach((node)=>{
//                 if(!visited.has(node)){
//                     visited.add(node);
//                     queue.push(node)
//                 }
//             })
//         }
//     }
// }
// const graph = new Graph();
// graph.addEdge('A','B');
// graph.addEdge('A','C')
// graph.display()
// console.log('DFS:')
// graph.deaptFS('B')
// console.log('BFS:')
// graph.bredthFS('A')

class Graph{
    constructor(){
        this.adList = {};
    }
    addVertex(vertex){
        if(!this.adList[vertex]){
            this.adList[vertex] = new Set();
        } 
    }
    addEdge(v1,v2){
        if(!this.adList[v1]){
            this.addVertex(v1)
        }
        if(!this.adList[v2]){
            this.addVertex(v2)
        }
        this.adList[v1].add(v2);
        this.adList[v2].add(v1);
    }
    removeEdge(v1,v2){
        this.adList[v1].delete(v2);
        this.adList[v2].delete(v1);
    }
    removeVertex(vertex){
        if(this.adList[vertex]){
            this.adList[vertex].forEach((item)=>this.removeEdge(vertex,item));
            delete this.adList[vertex]
        }
    }
    display(){
        for(let vertex in this.adList){
            console.log(vertex,'=>',[...this.adList[vertex]])
        }
    }
    dfs(start,visited=new Set()){
        if(visited.has(start)) return;
        console.log(start);
        visited.add(start);
        let neighbors = this.adList[start];
        if(neighbors){
            for(let neighbor of neighbors){
                this.dfs(neighbor,visited)
            }
        }
    }
    bfs(start){
        let queue = [];
        let visited = new Set();
        queue.push(start)
        visited.add(start)
        while(queue.length){
            let curr = queue.shift();
            console.log(curr);
            for(let neighbor of this.adList[curr]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }
}

const graph = new Graph();
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('C','E')
graph.addEdge('B','C')
graph.addEdge('A','D')
graph.display()
console.log('=====================')
// graph.removeEdge('A','B')
// graph.removeVertex('A')
// graph.display()
graph.bfs('A')