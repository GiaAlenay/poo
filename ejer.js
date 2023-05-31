console.log('hola')

class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

const persona1= new Persona("Juan",14)

persona1.saludar()


class Rectangulo {
    constructor(base, altura){
        this.base=base;
        this.altura=altura;

    }
    area(){
        return this.base*this.altura
    }
    perimetro(){
        return (this.base+this.altura)*2
    }    

}

const reactangulo1 = new Rectangulo(14,5)
console.log(reactangulo1.perimetro())

class CuentaBancaria{
    constructor(){
        this.saldo=4
    }

    depositar(cantidad){
        this.saldo+=cantidad
        return `Se depositaron ${cantidad} . Saldo actual : ${this.saldo}`
    }
    retirar(cantidad){
        if (cantidad>this.saldo) {
            return `Saldo insuficiente . Saldo actual: ${this.saldo}`
        }else{
            return `Retiro de ${this.saldo} exitosamente realizado. Saldo actual: ${this.saldo-=cantidad} `
        }
    }
    obtener(){
        return `Saldo actual: ${this.saldo}`
    }
}

const cuenta1= new CuentaBancaria()
console.log(cuenta1.retirar(4))
console.log(cuenta1.obtener())