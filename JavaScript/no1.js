// Buatkan program menggunakan Function Expression dengan JavaScript dengan tujuan menampilkan 
// kalimat (“Saya Calon Admin MCI”) dengan delay 3000 ms lalu tampilkan nama anda.

const NamaCalonAdminMCI = function() {
    console.log("Saya Calon Admin MCI");
    let time = 3000;
    setTimeout(function() {
      console.log("Fathin Muhashibi Putra");
    }, time);
  };
  
  NamaCalonAdminMCI();
