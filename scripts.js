//1).Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.
// let toplam = 0

// function GelenData(...data) {
//     let toplam = data.reduce((acc, current) => acc + current, 0);
//     return toplam / data.length
// }

// function Ortalama(callback,...data) {
//     return callback(...data)

// }

// console.log(Ortalama(GelenData,15,15,15));



//1).Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.
// let toplam = 0

// function GelenData(...data) {
//     let toplam = data.reduce((acc,curent) => acc + curent , 0) 
//     return toplam/data.length
// }

// function Ortalama(callback,...data) {
//     return callback (...data)
// }

// console.log(Ortalama(GelenData,10,10));



// let toplam = 0

// function GelenData(...data) {
//     let toplam = data.reduce((acc,current)=> acc+current , 0 )
//     return toplam/ data.length
// }

// function Ortalama(callback,...data) {
//     return callback(...data)
// }

// console.log(Ortalama(GelenData,12,10));




























//2)2.Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// let toplam = 0

// function GelenData(...data) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] % 2 === 0) {
//             toplam += data[i];
//         }
//     }

//     return toplam;
// }
// function Cut(callback,...data) {
//     return callback(...data)
// }
// console.log(Cut(GelenData,15,20,15,30));



//2)2.Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// let toplam = 0

// function GelenData(...data) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i]%2===0) {
//             toplam+=data[i]
            
//         }
        
//     }
//     return toplam
// }

// function Cut(callback,...data) {
//     return callback(...data)
// }
// console.log(Cut(GelenData,10,10,13));























//3)3.Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.
// let toplam = 0

// function GelenData(...data) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] % 2 !== 0) {
//             toplam += data[i];
//         }
//     }

//     return toplam;
// }
// function Tek(callback,...data) {
//     return callback(...data)
// }
// console.log(Tek(GelenData,15,20,15,30));



//3)3.Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.


// let toplam = 0
// function GelenData(...data) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] % 2 !==0) {
//              toplam += data[i]

//         }
        
//     }
//     return toplam
    
// }

// function Tek(callback,...data) {
//     return callback(...data)
    
// }

// console.log(Tek(GelenData,10,12,13,21));





















//4).Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.

// let CutToplam = 0;
// let TekToplam = 0
// let hasil = 1

// function GelenData(...data) {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] % 2 === 0) {
//       CutToplam += data[i];
//     }
//     if (data[i]%2!==0) {
//         TekToplam +=data[i]   
//     }
//   }

//   let hasil = CutToplam * TekToplam

//   return hasil;
// }

// function Hasil(callback,...data) {
//     return callback(...data)
// }
// console.log(Hasil(GelenData,2,3,4));






// let cutToplam = 0
// let tekToplam = 0

// let hasil = 1

// function GelenData(...data) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] % 2 ===0)  {
//             cutToplam += data[i]
//         }
//         if(data[i]%2 !==0){
//             tekToplam += data[i]
//         }
        
//     }
//     let hasil = cutToplam * tekToplam
//     return hasil
// }

// function Hasil(callback,...data) {
//     return callback(...data)
// }

// console.log(Hasil(GelenData,10,10,12,13));

