SELECT AVG(lec_TemR),AVG(lec_HumR)  FROM lecturas 

select *
  from lecturas
 order by id_lectura desc
 limit 1;

//ultimo dato almacenado
 SELECT lec_TemR
 from lecturas
 order by id_lectura desc
 limit 1;

//Mes especifico con promedio
SELECT AVG(lec_TemR),AVG(lec_HumR),AVG(lec_HuxmT),AVG(lec_TemA)
FROM lecturas
WHERE Month(lec_fechahora)=11

//todos los meses
SELECT *
FROM lecturas
WHERE Month(lec_fechahora)

//Fallar
SELECT AVG(lec_TemR)
FROM lecturas
WHERE lec_fechahora
LIKE '%Aug%'