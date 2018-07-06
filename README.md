# React Tap Room
Verna Santos, June 29, 2018

:email: vernajs@gmail.com


## Component Tree

![component tree](https://drive.google.com/file/d/1s1ybijrpm29e8QDRb3JpLlVpY2f-7nws/view?usp=sharing)

## App Objectives

_Patron_
* List/menu of all available kegs.
* Each keg: name, brand, price, and alcoholContent.
* Keg prices are color-coded.
* Alcohol content property is color-coded.

_Employee_

* Form for tapping a new keg to add it to the list.
* Option to edit a keg's properties after entering them.
* Button next to a keg whenever selling a pint. Decreasing number of pints left by 1.
* Kegs with less than 10 pints left are highlighted.

_Both_
* How many pints are left in a keg. Full: 124 pints.

## React Objectives

### Part 1 Requirements

- [x] Before coding, spend time planning and drawing out your React app's component structure.

- [x] No dynamic data. For now, just hard-code data directly into your JSX.

- [x] Commit history depicts a full day's work.

### Part 2 Requirements

- [x] Add a keg to kegs list.
- [x] Update component tree to show state.
- [x] State is used only when necessary.
- [x] State is lifted in an efficient manner that follows best practices.

### Stretch Goals

**CRUD**: _Create_, Read, Update, and _Delete._

- [ ] Edit a keg.
- [ ] Delete a keg from kegs list.
- [x] Admin route that displays employee controls. !Not on patron route.
- [x] Explore Material UI in React.

## Setup Instructions

Clone from GitHub.
```
$ git clone https://github.com/v3rna5/tap_room.git
```

Install NPM packages.
```
$ npm install
```
