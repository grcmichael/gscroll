# GScroll
Pretty basic smooth scroll based on [GSAP](https://greensock.com/) library (1ko minified).

If you’re using GSAP on your project, you can use this package to simply add a smooth scroll.  
It is basically [ScrollTrigger](https://greensock.com/scrolltrigger/) free but if you plan to use ScrollTrigger, you can use GScroll as a setter of the current distance scrolled.

## Install 
```
$ npm i @grcmichael/gscroll
```

## Declaration
```js
import gsap from "gsap"
import GScroll from "@grcmichael/gscroll"
  
const scroll = new GScroll( "#scroll-section" )

scroll.init()
scroll.wheel()
```

## Constructor
```js
GScroll( element: String, speed: Float, onUpdate: function )
```
element — DOM element that will translate.  
speed (optional) — Speed of the scroll, must be superior to 0. Default is 0.6.  
onUpdate (optional) — Contains code that will be read when GScroll is running.

## Methods
`init()` initializes the scroll

`wheel()` add the wheel event listener (the scroll is now active)

`unwheel()` removes the wheel event listenerer (it pauses the scroll) 

`resize()` recalculates the height of the declared section

`scrollTo( element: String, duration: Float )` moves the current position of the page to the position of the element  

`destroy()` kills everything

## Live examples
Basic utilisation: [GSAP + GScroll](https://codepen.io/michaelgrc/pen/WNEyjLv)  
Complete utilisation: [GSAP + ScrollTrigger + GScroll](https://codepen.io/michaelgrc/pen/LYjrzEy)  


## They use GScroll
[benjaminrighetti.com](https://benjaminrighetti.com/)  
[anagram.club](https://anagram.club)  
[brouillon.com](https://brouillon.com/)  
[ugopignal.com](https://ugopignal.com/)