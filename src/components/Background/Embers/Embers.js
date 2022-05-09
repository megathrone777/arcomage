import { useEffect } from "react"

import { gsap, Back, Linear, Power1 } from "gsap/all"

const Embers = () => {
  useEffect(() => {
    createParticle()
  }, [])

  const density = 200
  const speed = 0.3
  const winHeight = window.innerHeight
  const winWidth = window.innerWidth

  const start = {
    yMin: winHeight * 0.5,
    yMax: winHeight * 0.1,
    xMin: 10,
    xMax: winWidth + 10,
    scaleMin: 0.1,
    scaleMax: 0.4,
    scaleXMin: 0.7,
    scaleXMax: 1,
    scaleYMin: 1,
    scaleYMax: 1.3,
    opacityMin: 0.05,
    opacityMax: 0.2,
  }

  const mid = {
    yMin: winHeight * 0.5,
    yMax: winHeight * 0.1,
    xMin: 0,
    xMax: winWidth,
    scaleMin: 0.2,
    scaleMax: 0.8,
    opacityMin: 0.5,
    opacityMax: 1,
  }

  const end = {
    yMin: -180,
    yMax: -180,
    xMin: -100,
    xMax: winWidth + 100,
    scaleMin: 0.1,
    scaleMax: 1,
    opacityMin: 0.4,
    opacityMax: 0.7,
  }

  function range(map, prop) {
    const min = map[prop + "Min"]
    const max = map[prop + "Max"]
    return min + (max - min) * Math.random()
  }

  function randomEase(easeThis, easeThat) {
    return Math.random() < 0.5 ? easeThat : easeThis
  }

  function spawn(particle) {
    const wholeDuration = (10 / speed) * (0.7 + Math.random() * 0.4)
    const delay = wholeDuration * Math.random()
    let partialDuration = (wholeDuration + 1) * (0.2 + Math.random() * 0.3)

    gsap.set(particle, {
      y: range(start, "y"),
      x: range(start, "x"),
      scaleX: range(start, "scaleX"),
      scaleY: range(start, "scaleY"),
      scale: range(start, "scale"),
      opacity: range(start, "opacity"),
      visibility: "hidden",
    })

    // Moving upward
    gsap.to(particle, partialDuration, {
      delay: delay,
      y: range(mid, "y"),
      ease: randomEase(Linear.easeOut, Back.easeInOut),
    })

    gsap.to(particle, wholeDuration - partialDuration, {
      delay: partialDuration + delay,
      y: range(end, "y"),
      ease: Back.easeIn,
    })

    //Moving on axis X
    gsap.to(particle, partialDuration, {
      delay: delay,
      x: range(mid, "x"),
      ease: Power1.easeOut,
    })

    gsap.to(particle, wholeDuration - partialDuration, {
      delay: partialDuration + delay,
      x: range(end, "x"),
      ease: Power1.easeIn,
    })

    //opacity and scale
    partialDuration = wholeDuration * (0.5 + Math.random() * 0.3)
    gsap.to(particle, partialDuration, {
      delay: delay,
      scale: range(mid, "scale"),
      autoAlpha: range(mid, "opacity"),
      ease: Linear.easeNone,
    })

    gsap.to(particle, wholeDuration - partialDuration, {
      delay: partialDuration + delay,
      scale: range(end, "scale"),
      autoAlpha: range(end, "opacity"),
      ease: Linear.easeNone,
      onComplete: spawn,
      onCompleteParams: [particle],
    })
  }

  function createParticle() {
    let i, particleEmber

    for (i = 0; i < density; i += 1) {
      particleEmber = document.createElement("div")
      particleEmber.classList.add("ember")
      document
        .querySelector(".backgroundScene__sun-wrapper")
        .appendChild(particleEmber)
      spawn(particleEmber)
    }
  }

  return null
}

export default Embers
