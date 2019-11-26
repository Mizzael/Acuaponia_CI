//ultimo dato almacenado
 SELECT lec_TemR
 from lecturas
 order by id_lectura desc
 limit 1;

//Mes especifico con promedio
SELECT AVG(lec_TemR),AVG(lec_HumR),AVG(lec_HumT),AVG(lec_TemA)
FROM lectura
WHERE Month(lec_fechahora)=01

//todos los meses
SELECT *
FROM lecturas
WHERE Month(lec_fechahora)

//Fallar
select *
from lectura
where lec_fechahora between '2019-11-01' and '2019-11-30';


SELECT * FROM lectura WHERE lec_fechahora<NOW()