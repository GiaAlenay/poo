class Perro :
    def __init__(self,nombre) -> None:
        self.nombre=nombre
    def ladrar(self):
        print('guau guau')
    def jugar(self):
        print(f'{self.nombre} esta jugando')


perro1 = Perro('Firu')
perro1.jugar()

class Estudiante:
    def __init__(self,nombre,edad, calificaciones) -> None:
        self.nombre=nombre
        self.edad=edad
        self.calificaciones=calificaciones

    def promedio(self):
        return sum(self.calificaciones)/len(self.calificaciones)
    
    def aprobado(self):
        promedio=self.promedio()
        if promedio>60:
            return 'aprobado'
        return 'desaprobado'
    
estudiante1=Estudiante('alan',15, [85, 90, 75, 95, 80])
print(estudiante1.promedio())


class Producto:
    def __init__(self,nombre, precio, cantidad) -> None:
        self.nombre=nombre
        self.precio=precio
        self.cantidad=cantidad

    def calcular_Total(self):
        return self.precio*self.cantidad
producto1=Producto('huevo',14, 15)      
print(producto1.calcular_Total()) 
        