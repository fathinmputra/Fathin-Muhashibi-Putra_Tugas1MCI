//CALLBACK FUNCTION
let judul   = "Target Hidup tahun 2023 : ";
let target1 = "Lolos seleksi Camin Lab MCI 2023";
let target2 = "Mendapatkan ilmu dan keahlian baru";
let target3 = "Bermanfaat bagi orang sekitar";
let target4 = "Mendapatkan IPK tinggi";
let target5 = "Mendapatkan berbagai pengalaman yang bermanfaat";


 let targetHidup = () =>{

    setTimeout(()=>{
      console.log(judul)
      setTimeout(()=>{
        console.log(target1)
        setTimeout(()=>{
          console.log(target2)
          setTimeout(()=>{
            console.log(target3)
            setTimeout(()=>{
              console.log(target4)
              setTimeout(()=>{
                console.log(target5)
              },2000)
            },1000)
          },2000)
        },3000)
      },1000)
    },0000)
  
  };

  targetHidup();