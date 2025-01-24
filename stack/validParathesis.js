function valid(value){
    let stack = [];
    let pairs ={
        '}':'{',
        ']':'[',
        ')':'('
    }
    for(let i =0;i<value.length;i++){
        if(value[i]==='(' || value[i]==='[' || value[i]==='{'){
            stack.push(value[i]);
        }else{
            if(stack.pop()!==pairs[value[i]]){
                return false
            }
        }
    }
    return stack.length===0
}
let brackets = '{()}'
console.log(valid(brackets))