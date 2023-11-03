function agregar(a, b) {
    return a * b;
  }
  
  function suma(carrito) {
    let resultado = 0;
    for (let num of carrito) {
      resultado += num;
    }
    return resultado;
  }
  
  let maquina = [
    { posicion: 1, producto: "gaseosa", precio: 3, cantidad: 13 },
    { posicion: 2, producto: "galleta", precio: 1.5, cantidad: 8 },
    { posicion: 3, producto: "frugos", precio: 2.5, cantidad: 5 },
    { posicion: 4, producto: "gomitas", precio: 6, cantidad: 7 },
    { posicion: 5, producto: "chocolate", precio: 4, cantidad: 10 },
    { posicion: 6, producto: "chisito", precio: 2, cantidad: 15 },
    { posicion: 7, producto: "caramelo", precio: 1, cantidad: 5 }
  ]
  
  let carrito = [];
  
  let costo, total, tamaño;
  let i = "si";
  
  do {
    let pedido = Number(prompt("Digite el numero del producto que desee")) - 1;
    tamaño = maquina.length;
  
    if (pedido <= tamaño) {
      let cantidad = Number(prompt("Que cantidad desea?"));
  
      if (cantidad <= maquina[pedido].cantidad) {
        costo = agregar(maquina[pedido].precio, cantidad);
        carrito.push(costo);
        i = prompt("Desea adquirir otro producto?");
      } else { alert(`Solo tenemos ${maquina[pedido].cantidad} en stock`) }
  
    } else { alert("Numero incorrecto") }
    
  } while (i === "si");
  
  if (i === "no") {
    total = suma(carrito);
    alert(`El monto a pagar es S/.${total} soles`);
  }