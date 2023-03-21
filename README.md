# TUGAS 1 MCI

**<br>Nama  : Fathin Muhashibi Putra**
**<br>NRP   : 5025211229**

## SQL

## NO. 1
> **Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal!** 

```
SELECT nama, ukt 
FROM data_fix 
ORDER BY ukt DESC;
```
 
 Screenshoot hasil query :
 
<img width="130" alt="image" src="https://user-images.githubusercontent.com/103252800/226502677-4c5e870a-1f56-4c6f-b77e-df4318b843e0.png"> <img width="131" alt="image" src="https://user-images.githubusercontent.com/103252800/226502731-15637e93-8d32-4c3e-b464-e505f357105b.png"> <img width="130" alt="image" src="https://user-images.githubusercontent.com/103252800/226503053-afa2ca91-f865-4595-9529-4373abd67ee4.png"> <img width="129" alt="image" src="https://user-images.githubusercontent.com/103252800/226503099-8ecf60ce-5a81-474b-878c-2ab19cdd1bf7.png"> <img width="129" alt="image" src="https://user-images.githubusercontent.com/103252800/226503263-c76586e4-1397-4fcf-8ba1-bb123b8d5261.png">


## NO. 2
> **Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal.** 

```
SELECT nama, ukt 
FROM data_fix
ORDER BY ukt DESC, nama ASC
```
 
 Screenshoot hasil query :
 
 <img width="174" alt="image" src="https://user-images.githubusercontent.com/103252800/226503498-7a4dd59d-c2e6-4dc0-ad53-37e34af6edfd.png"> <img width="129" alt="image" src="https://user-images.githubusercontent.com/103252800/226503529-d132d68a-25b7-444e-addb-ce9394bf5160.png"> <img width="130" alt="image" src="https://user-images.githubusercontent.com/103252800/226503590-5090c40d-246f-4e37-8b04-73faf981dfd8.png"> <img width="130" alt="image" src="https://user-images.githubusercontent.com/103252800/226503606-244ac551-7a54-4c83-8795-e0456ed7969f.png"> <img width="128" alt="image" src="https://user-images.githubusercontent.com/103252800/226503642-f96ceb44-7b9a-4a7e-9c54-e0c13d660b9f.png">


## NO. 3
> **Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8** 

```
SELECT COUNT(*) AS Jumlah_Mahasiswa
FROM data_fix
WHERE semester = 8 AND ipk >= 3.5;
```
 
 Screenshoot hasil query :
 
 <img width="221" alt="image" src="https://user-images.githubusercontent.com/103252800/226503949-9a5f5aef-4c40-40c3-93ff-2efd924daf60.png">


## NO. 4
> **Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa kurang dari sama dengan 1 juta, maka masuk golongan "A". Jika ukt mahasiswa diatas 1 juta sampai denga 2 juta, maka masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka masuk golongan "C".** 

```
SELECT nama, ukt,
CASE
    WHEN ukt <= 1000000 THEN 'A'
    WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
    WHEN ukt > 2000000 THEN 'C'
END AS Golongan
FROM data_fix;
```
 
 Screenshoot hasil query :
 
 <img width="289" alt="image" src="https://user-images.githubusercontent.com/103252800/226504255-14c4df0e-932c-4b85-8352-36d599a4c860.png"> 
 <img width="176" alt="image" src="https://user-images.githubusercontent.com/103252800/226504352-264df7cd-2a55-44bd-82e9-73ab58d530e9.png"> 
 <img width="177" alt="image" src="https://user-images.githubusercontent.com/103252800/226504384-d520a71f-5bce-4b86-8211-9700ebdc70b8.png"> 
 <img width="178" alt="image" src="https://user-images.githubusercontent.com/103252800/226504448-a4992744-fc70-4706-a541-d3785c012726.png">
 <img width="177" alt="image" src="https://user-images.githubusercontent.com/103252800/226504648-6aa0cfe8-f9dc-4ca2-bb8b-a61806b6a906.png">
<img width="178" alt="image" src="https://user-images.githubusercontent.com/103252800/226504674-027b16a8-7b33-463a-9f94-020ff8c44c4c.png">




## NO. 5
> **Tampilkan daftar nama, semester dan ipk berdasarkan ipk tertinggi tiap semester. Diurutkan berdasarkan semesternya. Jika ada yang nilainya sama, maka diurutkan berdasarkan alfabet.** 

```
SELECT nama, semester, ipk
FROM data_fix
WHERE (semester, ipk) IN 
	(
    SELECT semester, MAX(ipk)
    FROM data_fix
    GROUP BY semester
   )
ORDER BY semester ASC, nama ASC;
```
 
 Screenshoot hasil query :
 
 <img width="202" alt="image" src="https://user-images.githubusercontent.com/103252800/226504827-0d7b60a3-0e4b-480b-b31e-42051c15a1d5.png">


 
