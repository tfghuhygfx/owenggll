basic.forever(function () {
    basic.clearScreen()
    for (let index = 0; index <= Math.idiv(input.magneticForce(Dimension.X), 1000); index++) {
        led.plot(0, index + 2)
    }
    for (let index = 0; index <= Math.idiv(input.magneticForce(Dimension.X), -1000); index++) {
        led.plot(0, 2 - index)
    }
    for (let index = 0; index <= Math.idiv(input.magneticForce(Dimension.Y), 1000); index++) {
        led.plot(1, index + 2)
    }
    for (let index = 0; index <= Math.idiv(input.magneticForce(Dimension.Y), -1000); index++) {
        led.plot(1, 2 - index)
    }
    for (let index = 0; index <= Math.idiv(input.magneticForce(Dimension.Z), 1000); index++) {
        led.plot(2, index + 2)
    }
    for (let index = 0; index <= Math.idiv(input.magneticForce(Dimension.Z), -1000); index++) {
        led.plot(2, 2 - index)
    }
    for (let index = 0; index <= Math.idiv(input.magneticForce(Dimension.Strength), 1000); index++) {
        led.plot(4, index)
    }
})
