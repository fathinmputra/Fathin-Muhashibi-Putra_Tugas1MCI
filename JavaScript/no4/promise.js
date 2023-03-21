let mulai_mencapai_target_hidup = true;

let judul   = "Target Hidup tahun 2023 : ";
let target1 = "Lolos seleksi Camin Lab MCI 2023";
let target2 = "Mendapatkan ilmu dan keahlian baru";
let target3 = "Bermanfaat bagi orang sekitar";
let target4 = "Mendapatkan IPK tinggi";
let target5 = "Mendapatkan berbagai pengalaman yang bermanfaat";

let targetHidup = ( time, work ) => {

  return new Promise( ( terselesaikan, terlewatkan )=>{

    if( mulai_mencapai_target_hidup ){

      setTimeout(()=>{

       // work is 👇 getting done here
        terselesaikan( work() )

// Setting 👇 time here for 1 work
       }, time)

    }

    else{
      terlewatkan( console.log("Target hidup tidak tercapai.") )
    }

  })
}

targetHidup(0000,()=>console.log(judul))

// Target 1
.then(()=>{
  return targetHidup(1000,()=>console.log(target1))
})

// Target 2
.then(()=>{
  return targetHidup(3000, ()=>console.log(target2))
})

// Target 3
.then(()=>{
  return targetHidup(0000, ()=>console.log(target3))
})

// Target 4
.then(()=>{
  return targetHidup(2000, ()=>console.log(target4))
})

// Target 5
.then(()=>{
    return targetHidup(2000, ()=>console.log(target5))
  })

// when promise terlewatkan
.catch(()=>{
    console.log("Target hidup tidak bisa dicapai")
  })

.finally(()=>{
    console.log("Target hidup tercapai")
  })
