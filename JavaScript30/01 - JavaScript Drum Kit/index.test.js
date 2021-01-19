const drumkit = require('./index.js') 

describe("Test function that gets the pressed key.", () => {
    test("Return the correct key pressed.", () => {
        let keydown = {
            altKey: false,
            bubbles: true,
            cancelBubble: false,
            cancelable: true,
            charCode: 0,
            code: "KeyA",
            composed: true,
            ctrlKey: false,
            currentTarget: null,
            defaultPrevented: false,
            isComposing: false,
            isTrusted: true,
            key: "a",
            keyCode: 65,
            metaKey: false,
            rangeOffset: 0,
            rangeParent: null,
            repeat: false,
            returnValue: true,
            shiftKey: false,
            type: "keydown",
            which: 65
        }
        expect(drumkit.getKeyCode(keydown)).toBe(65);
    });
});

//Test function that plays audio file when triggered.
//describe("Test the function that plays the audio.")

//Test function that animates keys when they are pressed.


//Test function that retrieves
