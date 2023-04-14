//2. Buatlah promise untuk menjumlahkan, mengurangi, mengalikan, membagi, dan mempangkatkan 2 bilangan, boleh dengan mengubah fungsi callback pada nomor 1 untuk dijadikan promise.
function jumlahPromise(a,b){
    const p = new Promise ((resolve,reject) => {
        if (typeof a != 'number' || typeof b != 'number' ){
            reject('ada angka tapi bukan number');
    
        }else{
            resolve(a+b);
        }
    })
    return p;
}
//12+20+35+40+55+60
jumlahPromise(12,20)
.then(function(d){
    return jumlahPromise(d,35);
})
.then(function(d){
    return jumlahPromise(d,40);
})
.then(function(d){
    return jumlahPromise(d,55);
})
.then(function(d){
    return jumlahPromise(d,60);
})
.then(function(d){
  console.log('hasilnya',d);
})
.catch(function(err){
    console.log(err);
})
.finally(() =>{
    console.log('done,and always executed');
})

console.log('===============================');
function jumlahPromise(a,b){
    const p = new Promise ((resolve,reject) => {
        if (typeof a != 'number' || typeof b != 'number' ){
            reject('ada angka tapi bukan number');
    
        }else{
            resolve(a-b);
        }
    })
    return p;
}
//10-20-30-40-50-60
jumlahPromise(10,20)
.then(function(d){
    return jumlahPromise(d,30);
})
.then(function(d){
    return jumlahPromise(d,40);
})
.then(function(d){
    return jumlahPromise(d,50);
})
.then(function(d){
    return jumlahPromise(d,60);
})
.then(function(d){
  console.log('hasilnya',d);
})
.catch(function(err){
    console.log(err);
})
.finally(() =>{
    console.log('done,and always executed');
})

console.log('=================================');
function jumlahPromise(a,b){
    const p = new Promise ((resolve,reject) => {
        if (typeof a != 'number' || typeof b != 'number' ){
            reject('ada angka tapi bukan number');
    
        }else{
            resolve(a*b);
        }
    })
    return p;
}
//10*5*20*5*30*5
jumlahPromise(10,5)
.then(function(d){
    return jumlahPromise(d,20);
})
.then(function(d){
    return jumlahPromise(d,5);
})
.then(function(d){
    return jumlahPromise(d,30);
})
.then(function(d){
    return jumlahPromise(d,5);
})
.then(function(d){
  console.log('hasilnya',d);
})
.catch(function(err){
    console.log(err);
})
.finally(() =>{
    console.log('done,and always executed');
})

console.log('=======================================');
function jumlahPromise(a,b){
    const p = new Promise ((resolve,reject) => {
        if (typeof a != 'number' || typeof b != 'number' ){
            reject('ada angka tapi bukan number');
    
        }else{
            resolve(a/b);
        }
    })
    return p;
}
//100/50/25/5/7/6
jumlahPromise(100,50)
.then(function(d){
    return jumlahPromise(d,25);
})
.then(function(d){
    return jumlahPromise(d,5);
})
.then(function(d){
    return jumlahPromise(d,7);
})
.then(function(d){
    return jumlahPromise(d,6);
})
.then(function(d){
  console.log('hasilnya',d);
})
.catch(function(err){
    console.log(err);
})
.finally(() =>{
    console.log('done,and always executed');
})

console.log('=======================================');
function jumlahPromise(a,b){
    const p = new Promise ((resolve,reject) => {
        if (typeof a != 'number' || typeof b != 'number' ){
            reject('ada angka tapi bukan number');
    
        }else{
            resolve(a**b);
        }
    })
    return p;
}
//10**5
jumlahPromise(10,5)
.then(function(d){
  console.log('hasilnya',d);
})
.catch(function(err){
    console.log(err);
})
.finally(() =>{
    console.log('done,and always executed');
}) 