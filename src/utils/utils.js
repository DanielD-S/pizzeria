const calculaTotal = (listaProductos) => {
    let total = 0;
    listaProductos.map((p) => {
        total = total + (p.price * p.cant);
        
    })
    return total;

}

export { calculaTotal }    