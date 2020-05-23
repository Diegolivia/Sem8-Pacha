Algoritmo P10
	Definir n1 Como Caracter
	Definir e1 Como Entero
	Definir n2 Como Caracter
	Definir e2 Como Entero
	Definir n3 Como Caracter
	Definir e3 Como Entero
	Definir mName Como Caracter
	Definir Min Como Entero
	Escribir "Ingrese el nombre de la persona 1"
	Leer n1
	Escribir "Ingrese la edad de la persona 1"
	Leer e1
	Min=e1
	mName = n1
	Escribir "Ingrese el nombre de la persona 2"
	Leer n2
	Escribir "Ingrese la edad de la persona 2"
	Leer e2
	Si e2<Min Entonces
		Min=e2
		mName=n2
	Fin Si
	Escribir "Ingrese el nombre de la persona 3"
	Leer n3
	Escribir "Ingrese la edad de la persona 3"
	Leer e3
	Si e3<Min Entonces
		Min=e3
		mName=n3
	Fin Si
	
	Escribir "El menor es " mName " con la edad de " Min "."
	
FinAlgoritmo
