hungriness = 0

def on_forever():
    global hungriness
    if input.button_is_pressed(Button.A):
        hungriness = hungriness + 1
        basic.show_number(hungriness)
    else:
        if input.button_is_pressed(Button.B):
            hungriness = hungriness - 1
            basic.show_number(hungriness)
basic.forever(on_forever)
