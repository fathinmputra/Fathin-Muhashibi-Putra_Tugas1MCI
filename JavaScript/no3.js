/*
No.3
np.argwhere merupakan sebuah fungsi yang tersedia pada library numpy di bahasa pemrograman python. 
Fungsi tersebut akan mengembalikan sebuah array 2 dimensi yang berisikan index - index value pada 
array n-d yang tidak bernilai 0, lakukan pencarian secara mandiri untuk mengetahui lebih lanjut 
mengenai fungsi np.argwhere. Implementasikan fungsi tersebut pada bahasa pemrograman Javascript 
untuk input array 3 dimensi.
*/

 // Fungsi "dim" dengan parameter "arr" 
 // Untuk mengembalikan ukuran dari array yang menjadi input value.
 function dim(arr) {
    if (arr instanceof Array) {
      return [arr.length].concat(dim(arr[0]));
    } else {
      return [];
    }
  }

 // Fungsi "argwhere" dengan parameter "arr" 
 // Untuk mencari indeks dari nilai yang bukan nol dalam array 2 dimensi
 function argwhere(arr) {
    let size = dim(arr);
    let indeks = [];
    for (let i = 0; i < size[0]; i++) {
      for (let j = 0; j < size[1]; j++) {
        for (let k = 0; k < size[2]; k++) {
          if (arr[i][j][k] !== 0) {
            indeks.push([i, j, k]);
          }
        }
      }
    }
    return indeks;
  }
  
  const input = [
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  ];
  
  const output = argwhere(input);
  console.log(output); //[ [ 0, 0, 0 ], [ 0, 1, 1 ], [ 1, 0, 0 ], [ 1, 1, 1 ] ]



  