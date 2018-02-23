from flask import Flask, render_template
import datetime
import RPi.GPIO as GPIO
from neopixel import *
import cgi
import cgitb

app = Flask(__name__)
GPIO.setmode(GPIO.BCM)
GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_UP)


# LED strip configuration:
LED_COUNT      = 135      # Number of LED pixels.
LED_PIN        = 18      # GPIO pin connected to the pixels (18 uses PWM!).
#LED_PIN        = 10      # GPIO pin connected to the pixels (10 uses SPI /dev/spidev0.0).
LED_FREQ_HZ    = 800000  # LED signal frequency in hertz (usually 800khz)
LED_DMA        = 5       # DMA channel to use for generating signal (try 5)
LED_BRIGHTNESS = 255     # Set to 0 for darkest and 255 for brightest
LED_INVERT     = False   # True to invert the signal (when using NPN transistor level shift)
LED_CHANNEL    = 0       # set to '1' for GPIOs 13, 19, 41, 45 or 53
LED_STRIP      = ws.WS2811_STRIP_GRB   # Strip type and colour ordering

strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRIGHTNESS, LED_CHANNEL, LED_STRIP)
strip.begin()

@app.route("/")

def hello():
    now = datetime.datetime.now()
    timeString = now.strftime("%Y-%m-%d %H:%M")
    templateData = {
        'title' :   'Hello!',
        'time'  :   timeString
        }
    return render_template('index.html', **templateData)

@app.route("/ledset/<state>")
def readPin(state):
    try:
        if state == "blue":
            response = "Pin number " + state + " is high!"
            for i in range(strip.numPixels()):
                strip.setPixelColorRGB(i, 0, 0, 255)
                strip.show()
        elif state == "green":
            for i in range(strip.numPixels()):
                strip.setPixelColorRGB(i, 0, 255, 0)
                strip.show()
        elif state == "red":
            for i in range(strip.numPixels()):
                strip.setPixelColorRGB(i, 255, 0, 0)
                strip.show()
        elif state == "purple":
            for i in range(strip.numPixels()):
                strip.setPixelColorRGB(i, 60, 120, 0)
                strip.show()
        elif state == "white":
            for i in range(strip.numPixels()):
                strip.setPixelColorRGB(i, 255, 255, 255)
                strip.show()
        elif state == "on":
            for o in range(0,255):
                for i in range(strip.numPixels()):
                    strip.setPixelColorRGB(i, 0, o ,0)
                strip.show()
        elif state == "off":
            for o in range(0,255):
                for i in range(strip.numPixels()):
                    strip.setPixelColorRGB(i, 0, 255-o ,0)
                strip.show()
            response = "nothing."
        elif state == "null":
            nothing = "nothing"
    except:
        response = "There was an error reading pin " + state + "."


    templateData = {
       'title'     : "Status of Pin " + state,
            }

    return render_template('LED_SET.html', **templateData)
    input_state = GPIO.input(23)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)
