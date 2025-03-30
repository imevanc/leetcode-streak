/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (internalVal) => {
            if (val === internalVal){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe: (internalVal) => {
            if (val !== internalVal){
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
