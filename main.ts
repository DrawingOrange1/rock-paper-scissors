let player_A_score = 0
let player_B_score = 0
let set_hand_to = 0
input.onButtonPressed(Button.A, function () {
    player_A_score = player_A_score + 1
    basic.showNumber(player_A_score)
    if (player_A_score == 10) {
        basic.showString("Player A wins")
        player_A_score = 0
        player_A_score = 0
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    player_B_score = player_A_score + 1
    basic.showNumber(player_B_score)
    if (player_B_score == 10) {
        basic.showString("Player B wins")
        player_B_score = 0
        player_B_score = 0
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    set_hand_to = randint(1, 3)
    if (set_hand_to == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (set_hand_to == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (set_hand_to == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
basic.forever(function () {
	
})
