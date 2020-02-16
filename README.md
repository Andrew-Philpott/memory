# _Memory_
#### _Memory Game_, 01.31.2020_
#### By _**Andrew Philpott**_
## Description
_The purpose of this application is to provide a fun Memory card game. The objective of the game is to identify all pairs of cards by selecting matching cards back to back. Change game difficulty by entering the number of pairs of cards that you would like to play with._

## Specs
* _Spec: The application should not be able to create a memory game if the difficulty input number is less than 2.
  * Input: 1
  * Output: The number must be between 2 and 26

* _Spec: The application should not be able to create a memory game if the difficulty input number is more than 26.
  * Input: 28
  * Output: The number must be between 2 and 26

* _Spec: The application should show a card when a card is clicked on the first click of two.
  * Input: clicks hidden card "A"
  * Output: "A" is displayed

* _Spec: The application should not hide a card if the same card is clicked for a second time.
  * Input: Clicks shown card "A"
  * Output: "A" is displayed

* _Spec: The application should reveal the second card clicked before hiding the cards values when a pair wasn't made.
  * Input: First click revealed "A", second click
  * Output: "B" is shown before hiding both cards

* _Spec: The application should hide two cards if the first click and second click of two hidden cards were not a pair.
  * Input: First click on hidden card "A" followed by second click on hidden card "B"
  * Output: "" ""

* _Spec: The application should continue to show two cards for the entirety of the game if the first and second click were a pair of cards.
  * Input: Clicks hidden "A" card on the first click followed by clicking another hidden "A" card on the second.
  * Output: "A" "A" is displayed

## Setup/Installation Requirements
_Clone this repository._

_Open index.html with a web browser._

## Support and contact details
_Issues or concerns? Contact us at andrewphilpott92@gmail.com_

## Technologies Used
_Html_
_CSS_
_JavaScript_

### License
Copyright (c) 2020 **_Andrew Philpott_**

*This software is licensed under the MIT license.*
