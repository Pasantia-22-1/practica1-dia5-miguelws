class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

//se realizaron cambios
class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }
    get nombre(){
        this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    toString(){
        return `Computadora: [idComputadora: ${this._idComputadora}, nombre: ${this._nombre},\n${this._monitor},\n${this._teclado},\n${this._raton}]`;
    }
}

//modificaciones
class Orden{
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];
    }
    get idOrden(){
        this._idOrden;
    }
    agregarComputadora(computador){
        this._computadoras.push(computador);
    }
    mostrarOrden(){
        let orden = ""
        for(let pc in this._computadoras){
            orden += this._computadoras[pc].toString();
        }
        document.getElementById("resultado").innerHTML = `<h3>Orden:</h3><br><div>${orden.toString()}</div><br><br>`;
        //return console.log(orden);
    }
    /*
    get computadora(){
        return this._computadora;
    }
    set computadora(computadora){
        this._computadora = computadora;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    toString(){
        return `Orden: [idOrden: ${this._idOrden},\n${this._computadora}]`
    }
    */
}

/*
let orden1 = new Orden(`${computadora1}`);
console.log(orden1.toString());
let orden2 = new Orden(`${computadora2}`);
console.log(orden2.toString());
*/

let orden1 = new Orden();

function valores() {
    const forma = document.getElementById("forma");
    let tamano;
    let modelo;
    let conexion;

    conexion = forma["conexionRaton"];
    modelo = forma["marcaRaton"];
    let raton1 = new Raton(conexion.value, modelo.value);

    conexion = forma["conexionTeclado"];
    modelo = forma["marcaTeclado"];
    let teclado1 = new Teclado(conexion.value, modelo.value);

    conexion = forma["modeloPantalla"];
    tamano = forma["tamanoPantalla"];
    let monitor1 = new Monitor(conexion.value, tamano.value);

    modelo = forma["marcaPC"];
    let computadora1 = new Computadora(modelo.value, monitor1, raton1, teclado1);

    orden1.agregarComputadora(computadora1);
    orden1.mostrarOrden();

    //let datos = orden1.toString()
}

function limpiar() {
    location.reload();
}
