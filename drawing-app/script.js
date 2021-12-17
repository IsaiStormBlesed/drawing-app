const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const decreaseBtn = document.getElementById('decrease')
const increaseBtn = document.getElementById('increase')
const counter = document.getElementById('size')
const colorPicker = document.getElementById('color')
const clear = document.getElementById('clear')


let size = counter.innerText
let isPressed = false
let color = colorPicker.value
let x
let y


colorPicker.addEventListener('change', e => color = e.target.value)

clear.addEventListener('click', e => ctx.clearRect(0, 0, canvas.width, canvas.height))

function changeCounter() {
	counter.innerText = size
}

decreaseBtn.addEventListener('click', e => {
	size -= 5

	if (size >= 5) {
		changeCounter()
	}
})

increaseBtn.addEventListener('click', e => {
	size += 5

	if (size <= 50) {
		changeCounter()
	}
})


canvas.addEventListener('mousedown', e => {
	isPressed = true

	x = e.offsetX
	y = e.offsetY
})

canvas.addEventListener('mouseup', e => {
	isPressed = false

	x = undefined
	y = undefined
})

canvas.addEventListener('mousemove', e => {
	if (isPressed) {
		const x2 = e.offsetX
		const y2 = e.offsetY

		drawCircle(x2, y2)
		drawLine(x, y, x2, y2)

		x = x2
		y = y2

	}
})

function drawCircle(x, y) {
	ctx.beginPath()
	ctx.arc(x, y, size, 0, Math.PI * 2)
	ctx.fillStyle = color
	ctx.fill()
}

function drawLine(x, y, x2, y2) {
	ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}