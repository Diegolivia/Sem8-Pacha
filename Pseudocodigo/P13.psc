Algoritmo P13
	Definir n1 Como Entero	
	Definir nota Como Entero
	Definir Ap Como Entero
	Definir Des Como Entero
	Ap=0
	Des=0
	Escribir "Ingrese la cantidad de alumnos a revisar"
	Leer n1
	Para Al<-1 Hasta n1 Con Paso 1 Hacer
		Escribir "Ingrese la calificacion del alumno " Al
		Leer nota
		Si nota >=11 Entonces
			Ap=Ap+1
		SiNo
			Des=Des+1
		FinSi
	Fin Para
	
	Escribir Ap " alumnos aprobaron"
	Escribir Des " alumnos desaprobaron"
	
FinAlgoritmo
