class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i= 0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total % this.size;
    }
    set(key,value){
        const index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKeyItem = bucket.find(item=>item[0]==key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key);
    }
    remove(key){
        const index = this.hash(key);
        this.table[index] = undefined;
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,'=>',this.table[i])
            }
        }
    }
}
const table = new HashTable(20);
table.set('name','Shaheer');
table.set('mane','zero');
table.set('hame','hhhhhhh');
table.set('Age','22');
// table.remove('Name')
table.display()