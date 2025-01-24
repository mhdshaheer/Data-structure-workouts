class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key,value){
        const index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const samekeyExist = bucket.find(item=>item[0]===key);
            if(samekeyExist){
                samekeyExist[1] = value;
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const samekeyExist =bucket.find(item=>item[0]===key);
            if(samekeyExist){
                return samekeyExist;
            }
        }
        return undefined;
    }
    remove(key){
        const index = this.hash(key);
        // this.table[index] = undefined;
        let bucket = this.table[index];
        if(bucket){
            this.table[index] = bucket.filter(item=>item[0]!==key);
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,'=>',this.table[i])
            }
        }
    }
}
const table = new HashTable(30);
table.set('name','shaheer');
table.set('mane','zero');
table.set('age',22);
table.set('place','mukkam');
table.remove('mane')
table.display()