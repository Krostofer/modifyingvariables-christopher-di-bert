let hungriness = 0
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        hungriness = hungriness + 1
        basic.showNumber(hungriness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungriness = hungriness - 1
        basic.showNumber(hungriness)
    }
    
})
