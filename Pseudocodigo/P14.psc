Algoritmo P14
	Definir n1 Como Entero	
	Definir col Como Caracter
	Definir V Como Entero
	Definir R Como Entero
	Definir B Como Entero
	V=0
	R=0
	B=0
	Escribir "Ingrese la cantidad de focos a revisar"
	Leer n1
	Para Al<-1 Hasta n1 Con Paso 1 Hacer
		Escribir "Ingrese el color del foco (V/R/B) *solo admite mayusculas* " Al
		Leer col
		Si col =="V" Entonces
			V=V+1
		SiNo
			Si col=="R" Entonces
				R=R+1
			SiNo
				Si col=="B" Entonces
					B=B+1
				SiNo
					Escribir "Foco invalido, entrada descartada, vuelva a ingresar"
					Al=Al-1
				Fin SI
			Fin Si
		FinSi
	Fin Para
	
	Escribir V " focos verdes"
	Escribir R " focos rojos"
	Escribir B " focos blancos"
	
FinAlgoritmo
