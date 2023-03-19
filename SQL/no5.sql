-- no.5
-- Tampilkan daftar nama, semester dan ipk berdasarkan ipk tertinggi tiap semester. 
-- Diurutkan berdasarkan semesternya. Jika ada yang nilainya sama, maka diurutkan berdasarkan alfabet.

SELECT nama, semester, ipk
FROM data_fix
WHERE (semester, ipk) IN 
	(
    SELECT semester, MAX(ipk)
    FROM data_fix
    GROUP BY semester
   )
ORDER BY semester ASC, nama ASC;