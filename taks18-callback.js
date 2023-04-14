//1. Buatlah fungsi callback untuk menjumlahkan, mengurangi, mengalikan, membagi, dan mempangkatkan 2 bilangan.
console.log('==============hasil penjumlahan====================');
function jumlah(a,b,hasil){
    setTimeout(() =>{
        hasil(null,a-b);
    },0);
    }
//12+20+35+40+55+60
let hasilPenjumlahan =0;
// callback hell
jumlah (12,20, function (err,result){
    jumlah (result,35,function(err,result1){
        jumlah(result1,40, function(err,result2){
            jumlah(result2,55, function(err,result3){
                jumlah(result3,60,function(err,result4){
                    console.log(result4);
                });
            });
        
        });
    });
});
console.log('===============hasil pengurangan======================');
function jumlah(a,b,hasil){
    setTimeout(() =>{
        hasil(null,a-b);
    },0);
    }
//10-20-30-40-50-60
let hasilPengurangan =0;
// callback hell
jumlah (10,20, function (err,result){
    jumlah (result,30,function(err,result1){
        jumlah(result1,40, function(err,result2){
            jumlah(result2,50, function(err,result3){
                jumlah(result3,60,function(err,result4){
                    console.log(result4);
                });
            });
        
        });
    });
});

console.log('==========hasil perkalian========================');
function jumlah(a,b,hasil){
    setTimeout(() =>{
        hasil(null,a*b);
    },0);
    }
//10*5*20*5*30*5
let hasilPerkalian = 0;
// callback hell
jumlah (10,5, function (err,result){
    jumlah (result,20,function(err,result1){
        jumlah(result1,5, function(err,result2){
            jumlah(result2,30, function(err,result3){
                jumlah(result3,5,function(err,result4){
                    console.log(result4);
                });
            });
        
        });
    });
});

console.log('==============hasil pembagian=====================');

function jumlah(a,b,hasil){
    setTimeout(() =>{
        hasil(null,a/b);
    },0);
    }
//100/50/25/5/7/6
let hasilPembagian = 0;
// callback hell
jumlah (100,50, function (err,result){
    jumlah (result,25,function(err,result1){
        jumlah(result1,5, function(err,result2){
            jumlah(result2,7, function(err,result3){
                jumlah(result3,6,function(err,result4){
                    console.log(result4);
                });
            });
        
        });
    });
});

console.log('===============hasil perpangkatan===================');

function jumlah(a,b,hasil){
    setTimeout(() =>{
        hasil(null,a**b);
    },0);
    }
//10**5
let hasilPerpangkatan =0;
// callback hell
jumlah (10,5, function (err,result){
    console.log(result)
});




