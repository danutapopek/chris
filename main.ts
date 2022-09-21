turtle.forward(4)
for (let index = 0; index < 7; index++) {
    images.createImage(`
        # . # . #
                # # # # #
                . . # . .
                # # # # #
                # . # . #
    `).showImage(0)
}
basic.forever(function on_forever() {
    led.plot(11, 11)
    turtle.back(7)
    radio.sendNumber(4)
})
