const DynamicArrayAPI = require("./dynamicArrayAPI.js")

class ExtraDynamicArrayAPI extends DynamicArrayAPI {
    pop(index){
        if(index < 0 || index > this._size){
            return new Error("Out of bounds");
        }
        const elementToRemove = this.fixedArray[index];
        const newFixedArrayLeft = this.fixedArray.slice(0,index);
        this.fixedArray = newFixedArrayLeft.concat(this.fixedArray.slice(index + 1));
        this._size--;
        return elementToRemove;
    }
    contains(value){
        for (let i=0; i<this._size; i++){
            if (this.fixedArray[i] === value){
                return true;
            }
        }
        return false;
    }
    insert(index, value){
        if(index < 0 || index > this._size){
            return new Error("Out of bounds");
        }
        const newFixedArrayLeft = this.fixedArray.slice(0,index);
        newFixedArrayLeft[index] = value;
        this.fixedArray = newFixedArrayLeft.concat(this.fixedArray.slice(index));
    }
    remove(value){
        for(let i=0; i<this._size; i++){
            if (this.fixedArray[i] === value){
                this.pop(i);
                return i;
            }
        }
        return -1;
    }
}

console.log("-------")
// Example 1:
d = new ExtraDynamicArrayAPI();
d.append(1);
d.append(2);
d.append(3);
console.log(d.pop(1));
console.log(d.fixedArray)
console.log(d.get(1));
console.log(d.size());

// Example 2:
dd = new ExtraDynamicArrayAPI();
dd.append(1);
dd.append(2);
console.log(dd.contains(1));
console.log(dd.contains(3));

// Example 3:
ddd = new ExtraDynamicArrayAPI();
ddd.append(1);
ddd.append(2);
ddd.insert(1, 3);
console.log(ddd.fixedArray);
console.log(ddd.get(1));

// Example 4:
dddd = new ExtraDynamicArrayAPI();
dddd.append(1);
dddd.append(2);
dddd.append(2);
console.log(dddd.remove(2));
console.log(dddd.get(1));