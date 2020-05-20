
//% color="#2131CB" weight=20 icon="\uf001"
namespace Ekits_piano {

  
    let Strip: neopixel.Strip;
    
    
    export enum musictone {

        dadadum = 0,
        birthday,
        wedding,
        funereal,
        punchline,
        baddy,
        chase,
        ba_ding,
        wawawawaa,
        jump_up,
        jump_down,
        power_up,
        power_down,
        entertainer,
        prelude,
        ode,
        nyan,
        ringtone,
        funk,
        blues
    }

    export enum note {
        //% blockId="None" block="None"
        None = 0x0000,
        //% blockId="C" block="C"
        C = 0x0004,
        //% blockId="C#" block="C#"
        CD = 0x0008,
        //% blockId="D" block="D"
        D = 0x0010,
        //% blockId="D#" block="D#"
        DE = 0x0020,
        //% blockId="E" block="E"
        E = 0x0040,
        //% blockId="F" block="F"
        F = 0x0080,
        //% blockId="F#" block="F#"
        FG = 0x0100,
        //% blockId="G" block="G"
        G = 0x0200,
        //% blockId="G#" block="G#"
        GA = 0x0400,
        //% blockId="A" block="A"
        A = 0x0800,
        //% blockId="A#" block="A#"
        AB = 0x1000,
        //% blockId="B" block="B"
        B = 0x2000, 
      
      
        //% blockId="Low pitch" block="Low pitch"
        L = 0x0002,
        //% blockId="Medium Pitch" block="Medium pitch"
        M = 0x0001,
        //% blockId="High Pitch" block="High Pitch"
        H = 0x4000,
       
    }
    
    

    function i2cwrite(addr: number, reg: number, value: number) { 
        let buf = pins.createBuffer(2); 
        buf[0] = reg; 
        buf[1] = value; 
        pins.i2cWriteBuffer(addr, buf); 
    }  
     
  
  
    
    
    //% blockId="turn_on_RGB" block="Turn On RGB Light"
    //% weight=99
    //% blockGap=10
    //% color="#2131CB"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function turn_on_RGB(): neopixel.Strip {
         
        if (!Strip) {
            Strip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB);
        }
        return Strip;  
    }  
       
  
  
  
    //% blockId="turn_off_RGB" block="Turn Off RGB Light"
    //% weight=98
    //% blockGap=10
    //% color="#2131CB"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function turn_off_RGB(): void {
        pins.digitalWritePin(DigitalPin.P1, 0);
        Ekits_piano.turn_on_RGB().clear();
        Ekits_piano.turn_on_RGB().show();
    }
    
  
  
    //% blockId="Musicmelody" block="Music Melody|%index"
    //% weight=98
    //% blockGap=10
    //% color="#2131CB"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Musicmelody(index: musictone): void {
        switch (index) {
            
            case musictone.dadadum: music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once); break;
            case musictone.birthday: music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once); break;
            case musictone.entertainer: music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once); break;
            case musictone.prelude: music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once); break;
            case musictone.ode: music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once); break;
            case musictone.nyan: music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once); break;
            case musictone.ringtone: music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once); break;
            case musictone.funk: music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once); break;
            case musictone.blues: music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once); break;
            case musictone.wedding: music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once); break;
            case musictone.funereal: music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once); break;
            case musictone.punchline: music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once); break;
            case musictone.baddy: music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once); break;
            case musictone.chase: music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once); break;
            case musictone.ba_ding: music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once); break;
            case musictone.wawawawaa: music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once); break;
            case musictone.jump_up: music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once); break;
            case musictone.jump_down: music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once); break;
            case musictone.power_up: music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once); break;
            case musictone.power_down: music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once); break;
        }
    }
    
    //% blockId="Touch" block="Music Touch return"
    //% weight=97
    //% blockGap=10
    //% color="#2131CB"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Touch(): number {
        let a = 0;
        let b = 0;
        let c = 0;
        pins.i2cWriteNumber(0x50,8,NumberFormat.UInt8BE,false);
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, true);
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b<<8)|a;
        return c;
    }
    
    //% blockId="TouchButton" block="Music Note And pitch|%value"
    //% weight=96
    //% blockGap=10
    //% color="#2131CB"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function TouchButton(value: note): number {
       
        let c = value;
        return c;
    }

    //% blockId="PlayPiano" block="Play Piano|tone %value"
    //% weight=95
    //% blockGap=10
    //% color="#2131CB"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function PlayPiano(value: number): void {
        let a = 0;
        let b = 0;
        let c = 0;
        let temp = 0;
        pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE,false);
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, true);
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b << 8) | a;
        
        if (value == 1) { 
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & note.C) {
                music.ringTone(131);
            } else if (c & note.CD) {
                music.ringTone(139);
            } else if (c & note.D) {
                music.ringTone(147);
            } else if (c & note.DE) {
                music.ringTone(156);
            } else if (c & note.E) {
                music.ringTone(165);
            } else if (c & note.F) {
                music.ringTone(175);
            } else if (c & note.FG) {
                music.ringTone(185);
            } else if (c & note.G) {
                music.ringTone(196);
            } else if (c & note.GA) {
                music.ringTone(208);
            } else if (c & note.A) {
                music.ringTone(220);
            } else if (c & note.AB) {
                music.ringTone(233);
            } else if (c & note.B) {
                music.ringTone(247);
            } else if (c == note.None) {
                //music.ringTone(0);
                pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        else  if (value == 2) { 
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & note.C) {
                music.ringTone(262);
            } else if (c & note.CD) {
                music.ringTone(277);
            } else if (c & note.D) {
                music.ringTone(294);
            } else if (c & note.DE) {
                music.ringTone(311);
            } else if (c & note.E) {
                music.ringTone(330);
            } else if (c & note.F) {
                music.ringTone(349);
            } else if (c & note.FG) {
                music.ringTone(370);
            } else if (c & note.G) {
                music.ringTone(392);
            } else if (c & note.GA) {
                music.ringTone(415);
            } else if (c & note.A) {
                music.ringTone(440);
            } else if (c & note.AB) {
                music.ringTone(466);
            } else if (c & note.B) {
                music.ringTone(494);
            } else if (c == note.None) {
                //music.ringTone(0);
                pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        else  if (value == 3) { 
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & note.C) {
                music.ringTone(523);
            } else if (c & note.CD) {
                music.ringTone(554);
            } else if (c & note.D) {
                music.ringTone(587);
            } else if (c & note.DE) {
                music.ringTone(622);
            } else if (c & note.E) {
                music.ringTone(659);
            } else if (c & note.F) {
                music.ringTone(698);
            } else if (c & note.FG) {
                music.ringTone(740);
            } else if (c & note.G) {
                music.ringTone(784);
            } else if (c & note.GA) {
                music.ringTone(831);
            } else if (c & note.A) {
                music.ringTone(880);
            } else if (c & note.AB) {
                music.ringTone(932);
            } else if (c & note.B) {
                music.ringTone(988);
            } else if (c == note.None) {
                //music.ringTone(0);
                pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        
        

        
    }
    
    
}
