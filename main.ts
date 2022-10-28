input.onButtonPressed(Button.A, function () {
    Zahl1 = 1125
    basic.showNumber(Zahl1)
    basic.pause(3000)
})
input.onButtonPressed(Button.AB, function () {
    ergebnis = Zahl1 + zahl2
    basic.showNumber(ergebnis)
    basic.pause(3000)
    basic.showLeds(`
        . # . # .
        # # # . #
        . # # . #
        . # # . #
        . # . # .
        `)
    basic.pause(3000)
})
input.onButtonPressed(Button.B, function () {
    zahl2 = 2875
    basic.showNumber(zahl2)
    basic.pause(3000)
})
let zahl2 = 0
let ergebnis = 0
let Zahl1 = 0
basic.showString("Ennos Rechner")
basic.forever(function () {
	
})
