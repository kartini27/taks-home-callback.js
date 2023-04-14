//3. Dengan menggunakan:
//1) Callback pada nomor 1;
//2) Promise pada nomor 2;
//3) Async await menggunakan promise pada nomor 2.
AsynAwait 
console.log('===========penjumlahan========');
function jumlahPromise(a,b){
    const p =new Promise((resolve,reject) => {
        if(typeof a != 'number' || typeof b != 'number'){
            reject('ada angka tapi bukan number');
        } else{
            resolve(a +b );
        }

    });
    return p;
}

 function execAsynAwait(){
try{
    let hasil = await jumlahPromise (12,20);
    hasil = await jumlahPromise(hasil,35);
    hasil =await jumlahPromise(hasil,40);
    hasil =await jumlahPromise(hasil,55);
    hasil = await jumlahPromise(hasil,60 );
    return hasil;
}catch (error){
    console.log(error);
}finally{
    console.log('done,and always executed');
}
}
async function main(){
    const hasil = await execAsynAwait();
    console.log(hasil);
}
main()


console.log('==============pengurangan===============');
function jumlahPromise(a,b){
    const p =new Promise((resolve,reject) => {
        if(typeof a != 'number' || typeof b != 'number'){
            reject('ada angka tapi bukan number');
        } else{
            resolve(a - b );
        }

    });
    return p;
}

 function execAsynAwait(){
try{
    let hasil =await jumlahPromise(10,20);
    hasil = await jumlahPromise(hasil,30);
    hasil =await jumlahPromise(hasil,40);
    hasil =await jumlahPromise(hasil,50);
    hasil = await jumlahPromise(hasil,60 );
    return hasil;
}catch (error){
    console.log(error);
}finally{
    console.log('done,and always executed');
}
}
async function main(){
    const hasil = await execAsynAwait();
    console.log(hasil);
}
main()

console.log('=============perkalian=========');  
function jumlahPromise(a,b){
    const p = new Promise((resolve,reject) => {
        if(typeof a != 'number' || typeof b != 'number'){
            reject('ada angka tapi bukan number');
        } else{
            resolve(a * b );
        }

    });
    return p;
}

 function execAsynAwait(){
try{
    let hasil =await jumlahPromise(10,20);
    hasil = await jumlahPromise(hasil,30);
    hasil =await jumlahPromise(hasil,40);
    hasil =await jumlahPromise(hasil,50);
    hasil = await jumlahPromise(hasil,60 );
    return hasil;
}catch (error){
    console.log(error);
}finally{
    console.log('done,and always executed');
}
}
async function main(){
    const hasil = await execAsynAwait();
    console.log(hasil);
}
main()

console.log('========perkalian==========');
function jumlahPromise(a,b){
    const p =new Promise((resolve,reject) => {
        if(typeof a != 'number' || typeof b != 'number'){
            reject('ada angka tapi bukan number');
        } else{
            resolve(a * b );
        }

    });
    return p;
}

 function execAsynAwait(){
try{
    let hasil =await jumlahPromise(10,20);
    hasil = await jumlahPromise(hasil,30);
    hasil =await jumlahPromise(hasil,40);
    hasil =await jumlahPromise(hasil,50);
    hasil = await jumlahPromise(hasil,60 );
    return hasil;
}catch (error){
    console.log(error);
}finally{
    console.log('done,and always executed');
}
}
async function main(){
    const hasil = await execAsynAwait();
    console.log(hasil);
}
main()

console.log('================perpangkatan===============') 
function jumlahPromise(a,b){
    const p =new Promise((resolve,reject) => {
        if(typeof a != 'number' || typeof b != 'number'){
            reject('ada angka tapi bukan number');
        } else{
            resolve(a ** b );
        }

    });
    return p;
}

 function execAsynAwait(){
try{
    let hasil =await jumlahPromise(10,20);
    hasil = await jumlahPromise(hasil,30);
    hasil =await jumlahPromise(hasil,40);
    hasil =await jumlahPromise(hasil,50);
    hasil = await jumlahPromise(hasil,60 );
    return hasil;
}catch (error){
    console.log(error);
}finally{
    console.log('done,and always executed');
}
}
async function main(){
    const hasil = await execAsynAwait();
    console.log(hasil);
}
main()



//Selesaikan permasalahan matematika di bawah ini:



//a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12

//b. 500 - 625 / 5 + 84 / 12 * 96 / 12
//c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84
//d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250
//e. 36 ** 2 / 72 + 125 * 10 - 24 * 3
//f. 500 / 100 * 20 + 84 * 2 - 125 / 5
//g. 375 * 2 - 750 / 25 + 1000 / 500
//h. 12 * 12 * 2 - 84 + 96 ** 2
//i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12
//j. 96 / 12 ** 2 + 625 / 5 - 375 * 84
//k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10
//l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10
//m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2
//n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12
//o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2



