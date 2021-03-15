const hexCode = document.getElementById('hexCode');
const arrayHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const colorBtn = document.getElementById('colorBtn');
hexCode.innerText = '#FAFAFA';
hexCode.style.color = '#FAFAFA';
const textColorHex = document.getElementById('textColorHex');
document.body.style.backgroundColor = '#FAFAFA';
const simple = document.getElementById('simple');
const hexColor = document.getElementById('hex');
simple.style.color = '#20B2AA';
let active = 'simple'

colorBtn.addEventListener('click', (event) => {
    if (active === 'simple') {
        let hex = '#';
        for (let i = 0; i < 6; i++) {
            hex += arrayHex[Math.floor(Math.random() * 16)];
        }
        hexCode.innerText = hex;
        hexCode.style.color = hex;
        document.body.style.backgroundColor = hex;
    } else {
        hexCode.innerHTML = textColorHex.value
        hexCode.style.color = textColorHex.value
        document.body.style.backgroundColor = textColorHex.value
        textColorHex.style.color = textColorHex.value
    }
})

simple.addEventListener('click', (event) => {
    textColorHex.value = ''
    simple.style.color = '#20B2AA';
    hexColor.style.color = '#000000'
    hexCode.innerHTML = ''
    colorBtn.value = 'simple';
    active = event.target.id;
    textColorHex.style.display = 'none';
    hexCode.style.display = 'inline-block';
})

hexColor.addEventListener('click', (event) => {
    hexColor.style.color = '#20B2AA';
    simple.style.color = '#000000'
    colorBtn.value = 'hex';
    active = event.target.id;
    textColorHex.style.display = 'inline-block';
    hexCode.style.display = 'none';
})