dinero1 = prompt('Cuanto dinero tienes?');
dinero2 = prompt('Cuanto dinero tienes?');
dinero3 = prompt('Cuanto dinero tienes?');

if (dinero1 >= 0.6 && dinero1 <= 1) {
    alert("Compra el helado de agua")
    alert("y tu vuelto es" + dinero1 - 0.6)
}
else if (dinero1 >= 1 && dinero1 <= 1.6) {
    alert("Compra el helado de crema")
    alert("y tu vuelto es" + dinero1 - 1.6)
}
else if (dinero1 >= 1.6 && dinero1 <= 1.7) {
    alert("Compra el helado marca heladix")
    alert("y tu vuelto es" + dinero1 - 1.6)
    
}
else if (dinero1 >= 1.7 && dinero1 <= 1.8) {
    alert("Compra el helado marca heladovich")
    alert("y tu vuelto es" + dinero1 - 1.8)
}
else if (dinero1 >= 1.8 && dinero1 <= 2.9) {
    alert("Compra el helado marca heladim")
    alert("y tu vuelto es" + dinero1 - 2.9)
}
else if (dinero1 >= 2.9) {
    alert("Compra el helado con confites")
    alert("y tu vuelto es" + dinero1 - 2.9)
}
else {
    alert("No te alcanza para un helado")
}

//enviado desde el celu
//y esto desde la pc