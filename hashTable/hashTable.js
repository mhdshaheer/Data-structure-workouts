class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
        this.count = 0
        this.loadFactor = 0.7;
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
            this.count++;
        }else{
            const samekeyExist = bucket.find(item=>item[0]===key);
            if(samekeyExist){
                samekeyExist[1] = value;
            }else{
                bucket.push([key,value])
                this.count++
            }
        }
        if(this.count/this.size>this.loadFactor){
            this.rehash();
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
            if(this.count>0){
                this.count--
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,'=>',this.table[i])
            }
        }
    }
    rehash(){
        console.log("Re hashing...")
        let oldTable = this.table;
        this.size = this.size*2;
        this.table = new Array(this.size);
        this.count = 0;
        for(let bucket of oldTable){
            if(bucket){
                for(let [key,value] of bucket){
                    this.set(key,value);
                }
            }
        }
    }
}
const table = new HashTable(10);
table.set('name','shaheer');
table.set('mane','zero');
table.set('age',22);
table.set('place','mukkam');
// table.remove('mane')
table.display()