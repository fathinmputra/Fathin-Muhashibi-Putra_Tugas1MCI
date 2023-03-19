-- no.4
-- Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa 
-- kurang dari sama dengan 1 juta, maka masuk golongan "A". 
-- Jika ukt mahasiswa diatas 1 juta sampai denga 2 juta, maka 
-- masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka 
-- masuk golongan "C".

SELECT nama, ukt,
CASE
    WHEN ukt <= 1000000 THEN 'A'
    WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
    WHEN ukt > 2000000 THEN 'C'
END AS Golongan
FROM data_fix;