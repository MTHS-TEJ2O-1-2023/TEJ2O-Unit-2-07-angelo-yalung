/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Oct 2023
 * This program turns the microbit into Cookie Clicker
*/

basic.clearScreen()

// variables
let numberOfCookies: number
numberOfCookies = 0

// on "A" button pressed
input.onButtonPressed(Button.A, function () {
  numberOfCookies = numberOfCookies + 1
  basic.showNumber(numberOfCookies)
})

// on "B" button pressed
input.onButtonPressed(Button.B, function () {
  numberOfCookies = 0
  basic.showNumber(numberOfCookies)
<<<<<<< HEAD
})
=======
})
>>>>>>> 83b8d7fe9a7ff60456487fd94ebc4132d4ab9dd9
