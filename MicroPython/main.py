"""
Created by: Angelo Yalung
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *


Number_Of_Cookies = 0

input.onButtonPressed(button_a)
Number_Of_Cookies = Number_Of_Cookies + 1
display.show(Number_Of_Cookies)
display.show(str(Number_Of_Cookies))

input.onButtonPressed(button_b)
NumberOfCookies = 0
display.show(Number_Of_Cookies)
display.show(str(Number_Of_Cookies))
