var decodeMorse = function (morseCode) {
    
        var a = morseCode.trim().split("   ").map(function (word) {
            x = word.split(" ").map(function (letter) {
                return MORSE_CODE[letter]
            }).join("")
            return x
        }).join(" ")
        return a
    }
    