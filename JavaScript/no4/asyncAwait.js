// ASYNC/AWAIT

let mulai_mencapai_target_hidup = true;

let judul   = "Target Hidup tahun 2023 : ";
let target1 = "Lolos seleksi Camin Lab MCI 2023";
let target2 = "Mendapatkan ilmu dan keahlian baru";
let target3 = "Bermanfaat bagi orang sekitar";
let target4 = "Mendapatkan IPK tinggi";
let target5 = "Mendapatkan berbagai pengalaman yang bermanfaat";

function time(ms){
    return new Promise(( terselesaikan, terlewatkan) => {
        if( mulai_mencapai_target_hidup ){
            setTimeout(terselesaikan, ms);
        } else {
            terlewatkan( console.log("Target hidup tidak tercapai.") )
        }
    });
}
 
async function targetHidup(){
    try{
	await time(2000)
	console.log(judul);

	await time(1000)
	console.log(target1);

	await time(2000)
	console.log(target2);

	await time(1000)
	console.log(target3);

	await time(1000)
	console.log(target4);

    await time(1000)
	console.log(target5);

	await time(2000)
	console.log("Mencapai target hidup");
    }

    catch(error){
	 console.log("Target hidup tidak bisa");
    }
}

targetHidup();
