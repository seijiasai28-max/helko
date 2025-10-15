input.onButtonPressed(Button.A, function () {
    basic.showString("Qosmo Year 6 Seiji")
    music.play(music.stringPlayable("E B C5 A B G A F ", 199), music.PlaybackMode.LoopingInBackground)
    for (let index = 0; index < 1e+22; index++) {
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            # . # . .
            . # # # .
            . . # . #
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # . # . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . . # # #
            . # . . .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            # # # . .
            . . . # .
            `)
    }
})
