class DynamicArrayAPI {
    constructor(){
        this.fixedArray = new Array(this.capacity).fill(null);
        this.capacity = 10;
        this._size = 0;
    }
    get(index){
        if(index<0 || index>this._size){
            return new Error("Out of bounds");
        }
        return this.fixedArray[index];
    }
    size(){
        return this._size;
    }
    set(index, value){
        if(index<0 || index>this._size){
            return new Error("Out of bounds");
        }
        this.fixedArray[index] = value;
    }
    resize(newCapacity){
        const newFixedArray = new Array(newCapacity).fill(null);
        for(let i=0; i<this.size();i++){
            newFixedArray[i] = this.fixedArray[i];
        }
        this.fixedArray = newFixedArray;
        this.capacity = newCapacity;
    }
    append(value){
        if (this.capacity === this.size()){
            this.resize(this.capacity*2);
        }
        this.fixedArray[this._size] = value;
        this._size++;
    }
    popBack(){
        if(this._size === 0){
            return new Error("Pop from empty array");
        }
        this._size--;
        if(this._size/this.capacity <= 0.25 && this.capacity>10){
            this.resize(Math.floor(this.capacity/2))
        }
    }
}

d = new DynamicArrayAPI();
d.append(1);
d.append(2);
console.log(d.fixedArray);
console.log(d.get(0));
console.log(d.get(1));
console.log(d.size());

dd = new DynamicArrayAPI();
dd.append(1);
dd.set(0,10);
console.log(dd.get(0));

ddd = new DynamicArrayAPI();
ddd.append(1);
ddd.append(2);
ddd.popBack();
console.log(ddd.size());
console.log(ddd.get(0));

module.exports = DynamicArrayAPI;