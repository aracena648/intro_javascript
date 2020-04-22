const inputColor = document.querySelector('#color')
const btnCambiarcolor = document.querySelector('#cambiar_color')

btnCambiarcolor.addEventListener('click', () => {
    let color = inputColor.value;

console.log(color);

});

function cambiarColorFondo (color) {
    document.body.style.background = color;
}