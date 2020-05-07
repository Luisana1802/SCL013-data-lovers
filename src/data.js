

//ordering pokemon AZ 
let orderName = (arrayName) => {
    let nameAZ = arrayName.sort(); 
    return nameAZ;
};

//ordering pokemon ZA
let orderNameReverse = (arrayName) => {
    let nameZA = arrayName.reverse();
    return nameZA;
};
//ordering pokemon from 1 to 151
let orderNum = (arrayNum) => {
    let numOrdenado = arrayNum.sort();
    return numOrdenado;
};

//ordering pokemon from 151 to 1
let orderNumReverse = (arrayNum) => {
    let numReverse = arrayNum.reverse();
    return numReverse;
};


//export default orderNum;
export {orderNum,orderNumReverse,orderName,orderNameReverse};