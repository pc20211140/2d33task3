let count = 0
input.onButtonPressed(Button.A, function () {
    count = 9
    for (let index = 0; index < 10; index++) {
        basic.showNumber(count)
        basic.pause(1000)
        count += -1
    }
})
basic.forever(function () {
	
})
