turtle.forward(4)
for index in range(7):
    images.create_image("""
        # . # . #
                # # # # #
                . . # . .
                # # # # #
                # . # . #
    """).show_image(0)

def on_forever():
    led.plot(11, 11)
    turtle.back(7)
    radio.send_number(4)
basic.forever(on_forever)
