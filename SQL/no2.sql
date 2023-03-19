-- no.2
-- Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal.

SELECT nama, ukt 
FROM data_fix
ORDER BY ukt DESC, nama ASC