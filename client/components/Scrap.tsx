export default function Scrap() {
  useGSAP(() => {
    // HOME HOVER LINK ANIMATION

    navTLHome.to(link1.current, {
      // duration,
      // color: 'red',
    })
    // HOME HOVER BG ANIMATION
    navTLHome.to(
      navBG.current,
      {
        // duration,
        background: COLORS.orange,
      },
      '<',
    )

    // HOME HOVER SHAPE ANIMATION
    navTLHome.to(
      shape1.current,
      {
        morphSVG: {
          shape: '.st0',
          type: 'rotational',
        },
        // ease: ease,
        fill: COLORS.red,
      },
      '<',
    )
    // HOME HOVER EVENT LISTENER
    // link1.current.addEventListener('mouseenter', () => {
    //   navTLHome.play()
    // })
    // link1.current.addEventListener('mouseleave', () => {
    //   navTLHome.reverse()
    // })

    // WORK HOVER LINK ANIMATION

    navTLWork.to(link2.current, {
      // duration,
      // color: 'red',
    })
    // WORK HOVER BG ANIMATION
    navTLWork.to(
      navBG.current,
      {
        // duration,
        background: COLORS.red,
      },
      '<',
    )
    // WORK HOVER SHAPE ANIMATION
    navTLWork.to(
      shape1.current,
      {
        morphSVG: {
          shape: '.st1',
          type: 'rotational',
        },
        // ease: ease,
        fill: COLORS.orange,
      },
      '<',
    )
    // WORK HOVER EVENT LISTENER

    // PHOTOGRAPHY HOVER LINK ANIMATION

    navTLPhot.to(link3.current, {
      // duration,
      // color: 'red',
    })
    // PHOTOGRAPHY HOVER BG ANIMATION
    navTLPhot.to(
      navBG.current,
      {
        // duration,
        background: COLORS.purple,
      },
      '<',
    )
    // PHOTOGRAPHY HOVER SHAPE ANIMATION
    navTLPhot.to(
      shape1.current,
      {
        morphSVG: {
          shape: '.st2',
          type: 'rotational',
        },
        // ease: ease,
        fill: COLORS.blue,
      },
      '<',
    )
    // PHOTOGRAPHY HOVER EVENT LISTENER

    // CONTACT HOVER LINK ANIMATION

    navTLCont.to(link3.current, {
      // duration,
      // color: 'red',
    })
    // CONTACT HOVER BG ANIMATION
    navTLCont.to(
      navBG.current,
      {
        // duration,
        background: COLORS.blue,
      },
      '<',
    )
    // CONTACT HOVER SHAPE ANIMATION
    navTLCont.to(
      shape1.current,
      {
        morphSVG: {
          shape: '.st3',
          type: 'rotational',
        },
        // ease: ease,
        fill: COLORS.purple,
      },
      '<',
    )
    // CONTACT HOVER EVENT LISTENER
  })
}