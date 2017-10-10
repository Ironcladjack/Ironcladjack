import time

from neopixel import *

from random import randint


# LED strip configuration:
LED_COUNT   = 16      # Number of LED pixels.
LED_PIN     = 18      # GPIO pin connected to the pixels (must support PWM!).
LED_FREQ_HZ = 800000  # LED signal frequency in hertz (usually 800khz)
LED_DMA     = 5       # DMA channel to use for generating signal (try 5)
LED_INVERT  = False   # True to invert the signal (when using NPN transistor level shift)
LED_BRI = 255
LED_RED = 255
LED_GRE = 255
LED_BLU = 255
UP_DOWN = 1


# Define functions which animate LEDs in various ways.
def colorWipe(strip, color, wait_ms=50):
	"""Wipe color across display a pixel at a time."""
	for i in range(strip.numPixels()):
		strip.setPixelColor(i, color)
		strip.show()
		time.sleep(wait_ms/1000.0)



#Self Made Scripts


    #A colour wipes in from both sides, then a different colour wipes out
def colorSwap(strip, color, color2, wait_ms=50):
    """Wipe color across display a pixel at a time."""
    for i in range(strip.numPixels()):
        if i >= LED_BRI/2:
            strip.setPixelColor(i, color)
            strip.setPixelColor((LED_COUNT-i),color)
            strip.show()
            time.sleep(wait_ms/1000.0)
        else:
            strip.setPixelColor(i, color2)
            strip.setPixelColor((LED_COUNT-i),color2)
            strip.show()
            time.sleep(wait_ms/1000.0)


    #Two different colours wipe in from either end
def colorRun(strip, color, color2, wait_ms=50):
        """Wipe color across display a pixel at a time."""
        for i in range(strip.numPixels()):
            strip.setPixelColor(i, color)
            strip.setPixelColor((LED_COUNT-i),color2)
            strip.show()
            time.sleep(wait_ms/1000.0)

    #Split LED strip into segments, and have rainbow patterns in that range.
def colorSplit(LED_Split, wait_ms=50):
    if LED_COUNT%LED_Split == 0:
        for y in range(10):
            color = RanColor
            for i in range(strip.numPixels/LED_Split()):
                strip.setPixelColor(i, color)
                for p in Range(LED_Split):
                    strip.setPixelColor((LED_COUNT/p)+i,color)
                time.sleep(wait_ms/1000.0)

    #Random Colour in every pin
def colorRandom():
        for i in range(LED_COUNT):
            strip.setPixelColor(i, RanColor)

    #Flashing Random Colour in every pin
def colorRandomFlash(wait_ms=50):
    for i in range(50000):
        for i in range(LED_COUNT):
            strip.setPixelColor(i, RanColor)
        time.sleep(wait_ms/1000.0)
        
    #Sets all LEDs to be one color
def colorAll():
    for i in range(LED_COUNT):
        strip.setPixelColor(i, color)

def colorRGB():
    for i in range(LED_COUNT/3):
        strip.setPixelColor(((i*3)-3),LED_RED,0,0)
        strip.setPixelColor(((i*3)-2),0,LED_GRE,0)
        strip.setPixelColor(((i*3)-1),0,0,LED_BLU)

    #Assigns a variant of Red, Green or Blue
def RanColor():
    color1 = Color(LED_BRI, randint(0,LED_BRI), randint(0,LED_BRI))
    color2 = Color(randint(0,LED_BRI), LED_BRI, randint(0,LED_BRI))
    color3 = Color(randint(0,LED_BRI), randint(0,LED_BRI), LED_BRI)
    
    RanColorRan = randint(0,2)
    if RanColorRan == 0:
        return color1
    elif RanColorRan == 1:
        return color2
    elif RanColorRan == 2:
        return color3

def BriChange():
    count = 0
    if count == 0:
        count += 1
        LED_BRI = 25
    elif count == 1:
        count += 1
        LED_BRI = 75
    elif count == 2:
        count += 1
        LED_BRI = 150
    elif count == 3:
        count += 1
        LED_BRI = 255

def colorSet():
    for i in range(LED_COUNT):
        strip.setPixelColor(i,255,0,0)
        strip.show()

def UP(UP_DOWN):        
    if 0 == 1:
        if UP_DOWN >= 1:
            if UP_DOWN <= 128:
                UP_DOWN = UP_DOWN ** 2
                return UP_DOWN
            else:
                UP_DOWN = 128
                return UP_DOWN
        elif UP_DOWN == -1:
            UP_DOWN = 1
            return UP_DOWN
        elif UP_DOWN < -1:
            UP_DOWN = UP_DOWN ** 0.5
            return UP_DOWN
    elif 0 == 0:
        if UP_DOWN >= -1:
            if UP_DOWN >= -128:
                UP_DOWN = UP_DOWN ** 2
                return UP_DOWN
            else:
                UP_DOWN = -128
                return UP_DOWN
        elif UP_DOWN == 1:
            UP_DOWN = -1
            return UP_DOWN
        elif UP_DOWN > 1:
            UP_DOWN = UP_DOWN ** 0.5
            return UP_DOWN
        
def colorPulse():
    for i in range(LED_COUNT):
        color1 = Color(LED_BRI, randint(0,LED_BRI), randint(0,LED_BRI))
        strip.show()



def SetMode():
    mode = 0
    if mode == 0:
        colorRandomFlash()
        colorRun()
        colorWipe()
        colorSwap()
        colorSplit()
        count += 1
    elif mode == 1:
        colorSet()
        count += 1
    elif mode == 2:
        colorPulse()
    elif mode == 3:
        mode +=1
        
        
        
#### Controlling The LED's ####
while True:
        strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRI, LED_CHANNEL, LED_STRIP)
        strip.begin()

        colorSet()



        strip.show()
