-- no.3
-- Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8

SELECT COUNT(*) AS Jumlah_Mahasiswa
FROM data_fix
WHERE semester = 8 AND ipk >= 3.5;