"use strict";

var context = new(window.AudioContext || window.webkitAudioContext)(),
    oscillator = context.createOscillator(),
    oscillatorType,
    octave,
    detune,
    sustain;

class Sound {

    constructor(context) {
        this.context = context;
    }

    init() {
        this.oscillator = this.context.createOscillator();
        this.gainNode = this.context.createGain();

        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
        this.oscillator.type = oscillatorType;
        this.oscillator.detune.value = detune + octave;
    }

    play(value, time) {
        this.init();

        this.oscillator.frequency.value = value;
        this.gainNode.gain.setValueAtTime(1, this.context.currentTime);

        this.oscillator.start(time);
        this.stop(time);

    }

    stop(time) {
        this.gainNode.gain.exponentialRampToValueAtTime(sustain, time + 1);
        this.oscillator.stop(time + 1);
    }

}

var sound = new Sound(context);
setDefault();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

function setDetune(detuneValue) {
    detune = detuneValue * 1;
    document.getElementById("detuneValue").innerHTML = detuneValue + " cents";
}

function setOctave(octaveValue) {
    octave = octaveValue * 1200;
    document.getElementById("octaveValue").innerHTML = octaveValue + " octave";
}

function setSustain(sustainValue) {
    sustain = 0.0000001;
    for (let i=0; i<=sustainValue; i++) {
        sustain *= 10;
    }
    document.getElementById("sustainValue").innerHTML = sustainValue + " level";
}

function setDefault() {
    setDetune(0);
    setOctave(0);
    setSustain(0);
}

function lofiEffect() {
    setDetune(150);
    for (let i = 0; i < 1000; i++) {
        if (Math.floor(Math.random() * 2) + 1 == 1) detune+10;
        else detune-10;
        sleep(2000);
    }
    setDetune(0);
}

document.addEventListener("keydown", function onPress(event) {
    if (!event.repeat) {
        var now = context.currentTime;
        if (event.key === '1') {
            sound.play(65.41, now);
        }
        if (event.key === '!') {
            sound.play(69.30, now);
        }
        if (event.key === '2') {
            sound.play(73.42, now);
        }
        if (event.key === '@') {
            sound.play(77.78, now);
        }
        if (event.key === '3') {
            sound.play(82.41, now);
        }
        if (event.key === '4') {
            sound.play(87.31, now);
        }
        if (event.key === '$') {
            sound.play(92.50, now);
        }
        if (event.key === '5') {
            sound.play(98.00, now);
        }
        if (event.key === '%') {
            sound.play(103.83, now);
        }
        if (event.key === '6') {
            sound.play(110.00, now);
        }
        if (event.key === '^') {
            sound.play(116.54, now);
        }
        if (event.key === '7') {
            sound.play(123.47, now);
        }
        if (event.key === '8') {
            sound.play(130.81, now);
        }
        if (event.key === '*') {
            sound.play(138.59, now);
        }
        if (event.key === '9') {
            sound.play(146.83, now);
        }
        if (event.key === '(') {
            sound.play(155.56, now);
        }
        if (event.key === '0') {
            sound.play(164.81, now);
        }
        if (event.key === 'q') {
            sound.play(174.61, now);
        }
        if (event.key === 'Q') {
            sound.play(185.00, now);
        }
        if (event.key === 'w') {
            sound.play(196.00, now);
        }
        if (event.key === 'W') {
            sound.play(207.65, now);
        }
        if (event.key === 'e') {
            sound.play(220.00, now);
        }
        if (event.key === 'E') {
            sound.play(233.08, now);
        }
        if (event.key === 'r') {
            sound.play(246.94, now);
        }
        if (event.key === 't') {
            sound.play(261.63, now);
        }
        if (event.key === 'T') {
            sound.play(277.18, now);
        }
        if (event.key === 'y') {
            sound.play(293.66, now);
        }
        if (event.key === 'Y') {
            sound.play(311.13, now);
        }
        if (event.key === 'u') {
            sound.play(329.63, now);
        }
        if (event.key === 'i') {
            sound.play(349.23, now);
        }
        if (event.key === 'I') {
            sound.play(369.99, now);
        }
        if (event.key === 'o') {
            sound.play(392.00, now);
        }
        if (event.key === 'O') {
            sound.play(415.30, now);
        }
        if (event.key === 'p') {
            sound.play(440.00, now);
        }
        if (event.key === 'P') {
            sound.play(466.16, now);
        }
        if (event.key === 'a') {
            sound.play(494.88, now);
        }
        if (event.key === 's') {
            sound.play(523.25, now);
        }
        if (event.key === 'S') {
            sound.play(554.37, now);
        }
        if (event.key === 'd') {
            sound.play(587.33, now);
        }
        if (event.key === 'D') {
            sound.play(622.25, now);
        }
        if (event.key === 'f') {
            sound.play(659.25, now);
        }
        if (event.key === 'g') {
            sound.play(698.46, now);
        }
        if (event.key === 'G') {
            sound.play(739.99, now);
        }
        if (event.key === 'h') {
            sound.play(783.99, now);
        }
        if (event.key === 'H') {
            sound.play(830.61, now);
        }
        if (event.key === 'j') {
            sound.play(880.00, now);
        }
        if (event.key === 'J') {
            sound.play(932.33, now);
        }
        if (event.key === 'k') {
            sound.play(987.77, now);
        }
        if (event.key === 'l') {
            sound.play(1046.50, now);
        }
        if (event.key === 'L') {
            sound.play(1108.73, now);
        }
        if (event.key === 'z') {
            sound.play(1174.66, now);
        }
        if (event.key === 'Z') {
            sound.play(1244.51, now);
        }
        if (event.key === 'x') {
            sound.play(1318.51, now);
        }
        if (event.key === 'c') {
            sound.play(1396.91, now);
        }
        if (event.key === 'C') {
            sound.play(1479.98, now);
        }
        if (event.key === 'v') {
            sound.play(1567.98, now);
        }
        if (event.key === 'V') {
            sound.play(1661.22, now);
        }
        if (event.key === 'b') {
            sound.play(1760.00, now);
        }
        if (event.key === 'B') {
            sound.play(1864.66, now);
        }
        if (event.key === 'n') {
            sound.play(1975.53, now);
        }
        if (event.key === 'm') {
            sound.play(2093.00, now);
        }

    }
});

document.addEventListener("keyup", function onPress(event) {
    var now = context.currentTime;
    sound.stop(now);
});