import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { CustomWiggle } from 'gsap/all'
import { COLORS } from './Values'
gsap.registerPlugin(MorphSVGPlugin, CustomEase, CustomWiggle)

export default function Nav() {
  // Setting state for Hamburger Toggle
  const [isClicked, setIsClicked] = useState(true)

  // Reference Variables
  const link1 = useRef(null)
  const link2 = useRef(null)
  const link3 = useRef(null)
  const link4 = useRef(null)
  const shape1 = useRef(null)
  const navBG = useRef(null)
  const hamToggle = useRef(null)
  const hamShape1 = useRef(null)
  const hamShape2 = useRef(null)
  const hamShape3 = useRef(null)
  const hamShape4 = useRef(null)
  const navArea = useRef(null)
  const navMain = useRef(null)
  const toggleContainer = useRef(null)
  const duration = 0.5
  const ease = 'elastic.out(1,0.2)'

  // NAV Layout Timelines()
  const hamTL = useRef()
  const openNav = useRef()

  // Word effects timelines
  const navTLHome = useRef()
  const navTLWork = useRef()
  const navTLPhot = useRef()
  const navTLCont = useRef()

  // const { contextSafe } = useGSAP()

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(navBG.current, {
        transformOrigin: 'top right',
        top: 0,
        right: 0,
        clip: '0%',
        clipPath: 'circle(0% at 100% 0)',
      })

      // gsap.set(hamShape4, {
      //   fill: 'none',
      // })

      gsap.set([shape1.current, navMain.current], {
        visibility: 'hidden',
      })

      gsap.set('.nav-item', {
        right: '1000px',
      })

      hamTL.current = gsap
        .timeline({ paused: true })
        .to(hamShape1.current, {
          duration: 1,
          ease: CustomEase.create(
            'custom',
            'M0,0,C0.11,0.494,0.192,0.726,0.318,0.852,0.45,0.984,0.504,1,1,1',
          ),
          morphSVG: {
            shape: '.ham-01',
            type: 'rotational',
          },
          fill: COLORS.white,
          // scaleX: '31.2',
          // scaleY: '31.2',
          // x: -18200,
          // y: -5500,
          // opacity: 0,
        })
        .to(
          hamShape2.current,
          {
            duration: 0.5,
            ease: 'back.out',
            morphSVG: {
              shape: '.ham-02',
              type: 'rotational',
            },
            fill: COLORS.white,
          },
          '<',
        )
        .to(
          hamShape3.current,
          {
            duration: 0.5,
            ease: 'back.out',
            morphSVG: {
              shape: '.ham-03',
              type: 'rotational',
            },
            fill: COLORS.white,
          },
          '<',
        )
        // .to(
        //   hamShape4.current,
        //   {
        //     duration: 1,
        //     ease: CustomEase.create(
        //       'custom',
        //       'M0,0,C0.11,0.494,0.192,0.726,0.318,0.852,0.45,0.984,0.504,1,1,1',
        //     ),
        //     morphSVG: {
        //       shape: '.ham-04',
        //       type: 'rotational',
        //     },
        //     fill: COLORS.white,
        //     scaleX: '31.2',
        //     scaleY: '31.2',
        //     x: -18200,
        //     y: -5500,
        //   },
        //   '<',
        // )
        .to(
          navBG.current,
          {
            duration: 0.5,
            transformOrigin: 'top right',
            // top: 0,
            // right: 0,
            clipPath: 'circle(141.2% at 100% 0)',
            ease: CustomEase.create(
              'custom',
              'M0,0 C0.046,0.091 0.635,0.168 0.705,0.623 0.726,0.764 0.72,1 1,1 ',
            ),
          },
          '-=1',
        )
        .to(
          shape1.current,
          {
            opacity: '0%',
          },
          '<',
        )
        .to(
          shape1.current,
          {
            visibility: 'visible',
            duration: 0.2,
          },
          '<',
        )
        .to(shape1.current, {
          duration: 0.5,
          opacity: '100%',
        })
        .to(
          navMain.current,
          {
            visibility: 'visible',
            duration: 0.2,
          },
          '<',
        )
        .to('.nav-item', {
          right: 0,
          duration: 0.5,
          stagger: 0.2,
        })
    },
    { scope: navArea },
  )

  const timelineToggle = contextSafe(() => {
    setIsClicked(!isClicked)
    isClicked ? hamTL.current.play() : hamTL.current.reverse()
  })

  const onMouseEnterHome = contextSafe(({ currentTarget }) => {
    // HOME HOVER LINK ANIMATION
    navTLHome.current = gsap.timeline().to(currentTarget, {
      // duration,
      // color: 'red',
      scrambleText: {
        text: 'HOME',
      },
      color: COLORS.white,
    })
    // HOME HOVER BG ANIMATION
    navTLHome.current.to(
      navBG.current,
      {
        // duration,
        backgroundColor: COLORS.orange,
      },
      '<',
    )

    // HOME HOVER SHAPE ANIMATION
    navTLHome.current.to(
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
  })

  const onMouseLeaveHome = contextSafe(({ currentTarget }) => {
    navTLHome.current.to(currentTarget, {
      // duration,
      // color: 'red',
      scrambleText: {
        text: 'HOME',
      },
      color: COLORS.black,
    })
  })

  const onMouseEnterWork = contextSafe(({ currentTarget }) => {
    navTLWork.current = gsap.timeline().to(currentTarget, {
      // duration,
      // color: 'red',
      scrambleText: {
        text: 'DEV | DESIGN',
      },

      color: COLORS.white,
    })
    // WORK HOVER BG ANIMATION
    navTLWork.current.to(
      navBG.current,
      {
        // duration,
        backgroundColor: COLORS.red,
      },
      '<',
    )

    // WORK HOVER SHAPE ANIMATION
    navTLWork.current.to(
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
  })

  const onMouseLeaveWork = contextSafe(({ currentTarget }) => {
    navTLWork.current.to(currentTarget, {
      // duration,
      // color: 'red',
      scrambleText: {
        text: 'DEV | DESIGN',
      },
      color: COLORS.black,
    })
  })

  const onMouseEnterPhot = contextSafe(({ currentTarget }) => {
    navTLPhot.current = gsap.timeline().to(currentTarget, {
      // duration,
      // color: 'red',
      scrambleText: {
        text: 'PHOTOGRAPHY',
      },
      color: COLORS.white,
    })
    // PHOTOGRAPHY HOVER BG ANIMATION
    navTLPhot.current.to(
      navBG.current,
      {
        // duration,
        backgroundColor: COLORS.purple,
      },
      '<',
    )
    // PHOTOGRAPHY HOVER SHAPE ANIMATION
    navTLPhot.current.to(
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
  })

  const onMouseLeavePhot = contextSafe(({ currentTarget }) => {
    navTLPhot.current.to(currentTarget, {
      // duration,
      // color: 'red',
      scrambleText: {
        text: 'PHOTOGRAPHY',
      },
      color: COLORS.black,
    })
  })

  const onMouseEnterCont = contextSafe(({ currentTarget }) => {
    navTLCont.current = gsap.timeline().to(currentTarget, {
      // duration,
      // color: 'red',
      scrambleText: {
        text: 'CONTACT',
      },
      color: COLORS.white,
    })
    // CONTACT HOVER BG ANIMATION
    navTLCont.current.to(
      navBG.current,
      {
        // duration,
        backgroundColor: COLORS.blue,
      },
      '<',
    )
    // CONTACT HOVER SHAPE ANIMATION
    navTLCont.current.to(
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
  })

  const onMouseLeaveCont = contextSafe(({ currentTarget }) => {
    navTLCont.current.to(currentTarget, {
      // duration,
      // color: 'red',
      scrambleText: {
        text: 'CONTACT',
      },
      color: COLORS.black,
    })
  })

  return (
    <>
      <div ref={navArea} className="nav-area">
        <div ref={toggleContainer} className="nav-bar">
          <div className="nav__logo"></div>
          <div className="nav-toggle" id="navToggle">
            <div onClick={timelineToggle} className="nav__hamburger">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 724.6 724.6"
                // style="enable-background:new 0 0 723.25 721.75;"
                xmlSpace="preserve"
              >
                <g id="Active">
                  <g>
                    <path
                      className="svg-shape ham-01"
                      d="M704.72,363.94c-2.38,146.67-97.22,330.66-257.41,347.09C221.68,733.51,1.85,526.12,11.36,298.43
			c1.58-24.84,6.63-48.33,14.65-70.32C75.63,95.08,223.31,24.34,360.15,21.71c194.34-5.84,344.18,131.76,344.57,342L704.72,363.94z
			 M377.68,39.99C232.39,43.85,42.61,132.77,30.49,294.8c-1.96,32.5,4.18,65.52,11.62,96.97
			C85.36,567.77,259.44,704.31,441.4,690.92c18.39-1.61,37.35-6.71,54.57-14.19C788.63,550.49,720.88,31.7,377.89,39.99
			L377.68,39.99z"
                    />
                    <g>
                      <g>
                        <g>
                          <path
                            className="svg-shape ham-02"
                            d="M178.04,201.42c11.49,11.49,22.97,22.97,34.46,34.46c27.57,27.57,55.15,55.15,82.72,82.72
						c33.22,33.22,66.43,66.43,99.65,99.65c28.71,28.71,57.43,57.43,86.14,86.14c13.96,13.96,27.56,28.46,41.97,41.97
						c0.21,0.2,0.41,0.41,0.61,0.61c9.11,9.11,23.26-5.03,14.14-14.14c-11.49-11.49-22.97-22.97-34.46-34.46
						c-27.57-27.57-55.15-55.15-82.72-82.72c-33.22-33.22-66.43-66.43-99.65-99.65c-28.71-28.71-57.43-57.43-86.14-86.14
						c-13.96-13.96-27.56-28.46-41.97-41.97c-0.21-0.2-0.41-0.41-0.61-0.61C183.07,178.16,168.93,192.3,178.04,201.42L178.04,201.42
						z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            className="svg-shape ham-03"
                            d="M192.19,546.97c11.49-11.49,22.97-22.97,34.46-34.46c27.57-27.57,55.15-55.15,82.72-82.72
						c33.22-33.22,66.43-66.43,99.65-99.65c28.71-28.71,57.43-57.43,86.14-86.14c13.96-13.96,28.46-27.56,41.97-41.97
						c0.2-0.21,0.41-0.41,0.61-0.61c9.11-9.11-5.03-23.26-14.14-14.14c-11.49,11.49-22.97,22.97-34.46,34.46
						c-27.57,27.57-55.15,55.15-82.72,82.72c-33.22,33.22-66.43,66.43-99.65,99.65c-28.71,28.71-57.43,57.43-86.14,86.14
						c-13.96,13.96-28.46,27.56-41.97,41.97c-0.2,0.21-0.41,0.41-0.61,0.61C168.93,541.94,183.07,556.08,192.19,546.97
						L192.19,546.97z"
                          />
                        </g>
                      </g>
                    </g>
                    <path
                      className="svg-shape ham-04"
                      d="M694.12,371.56c-3.07,80.08-30.21,162.79-87.12,234.61c-29.71,37.51-66.23,66.59-111.9,83.01
			c-21.73,7.81-44.18,11.93-67.17,12.68c-103.99,3.39-193-33.56-270.28-101.34C94.81,545.4,52.62,477.3,31.86,396.28
			c-11.81-46.09-14.16-92.68-2.8-139.26c11.94-48.93,38.49-89.41,74.2-124.21c36.22-35.3,79.44-59.05,126.74-75.93
			c49.47-17.65,100.35-27.19,152.97-24.16c74.59,4.29,143.02,26.11,201.29,74.58c32.79,27.28,57.23,61.09,74.99,99.72
			C681.63,255.72,693.73,306.82,694.12,371.56z"
                    />
                  </g>
                </g>
                <g id="Unactive">
                  <g>
                    <path
                      ref={hamShape4}
                      fill="none"
                      className="svg-shape ham-14"
                      d="M359.1,697.41c-80.08-3.07-162.79-30.21-234.61-87.12c-37.51-29.71-66.59-66.23-83.01-111.9
			c-7.81-21.73-11.93-44.18-12.68-67.17c-3.39-103.99,33.56-193,101.34-270.28C185.26,98.1,253.36,55.91,334.38,35.15
			c46.09-11.81,92.68-14.16,139.26-2.8c48.93,11.94,89.41,38.49,124.21,74.2c35.3,36.22,59.05,79.44,75.93,126.74
			c17.65,49.47,27.19,100.35,24.16,152.97c-4.29,74.59-26.11,143.02-74.58,201.29c-27.28,32.79-61.09,57.23-99.72,74.99
			C474.94,684.93,423.84,697.02,359.1,697.41z"
                    />
                    <g>
                      <g>
                        <g>
                          <path
                            ref={hamShape2}
                            className="svg-shape ham-12"
                            d="M247.37,329.82c11.93,0,23.86,0,35.78,0c28.65,0,57.31,0,85.96,0c34.68,0,69.37,0,104.05,0c30.14,0,60.27,0,90.41,0
						c14.52,0,29.19,0.59,43.7,0c0.2-0.01,0.41,0,0.61,0c12.87,0,12.89-20,0-20c-11.93,0-23.86,0-35.78,0c-28.65,0-57.31,0-85.96,0
						c-34.68,0-69.37,0-104.05,0c-30.14,0-60.27,0-90.41,0c-14.52,0-29.19-0.59-43.7,0c-0.2,0.01-0.41,0-0.61,0
						C234.5,309.82,234.48,329.82,247.37,329.82L247.37,329.82z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            ref={hamShape3}
                            className="svg-shape ham-13"
                            d="M119.2,412.55c16.24,0,32.49,0,48.73,0c38.99,0,77.99,0,116.98,0c46.98,0,93.95,0,140.93,0c40.61,0,81.21,0,121.82,0
						c19.75,0,39.62,0.65,59.35,0c0.29-0.01,0.58,0,0.87,0c12.87,0,12.89-20,0-20c-16.24,0-32.49,0-48.73,0
						c-38.99,0-77.99,0-116.98,0c-46.98,0-93.95,0-140.93,0c-40.61,0-81.21,0-121.82,0c-19.75,0-39.62-0.65-59.35,0
						c-0.29,0.01-0.58,0-0.87,0C106.33,392.55,106.31,412.55,119.2,412.55L119.2,412.55z"
                          />
                        </g>
                      </g>
                    </g>

                    <path
                      ref={hamShape1}
                      className="svg-shape ham-11"
                      d="M366.72,708.01c-146.67-2.38-330.66-97.22-347.09-257.41C-2.85,224.98,204.54,5.14,432.23,14.66
			c24.84,1.58,48.33,6.63,70.32,14.65c133.02,49.62,203.76,197.3,206.39,334.13c5.84,194.34-131.76,344.18-342,344.57L366.72,708.01
			z M690.67,380.97C686.81,235.68,597.89,45.9,435.86,33.78c-32.5-1.96-65.52,4.18-96.97,11.62
			C162.89,88.65,26.35,262.73,39.74,444.7c1.61,18.39,6.71,37.35,14.19,54.57c126.24,292.66,645.03,224.91,636.74-118.08
			L690.67,380.97z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div ref={navBG} className="nav-bg">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 942 857"
            // style="enable-background:new 0 0 942 857;"
            xmlSpace="preserve"
          >
            <defs>
              <linearGradient id="bruh" x1="100%" y1="100%">
                <stop offset="0%" stopColor="lightblue" stopOpacity=".5">
                  <animate
                    attributeName="stop-color"
                    values="lightblue;blue;red;red;black;red;red;purple;lightblue"
                    dur="14s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="lightblue" stopOpacity=".5">
                  <animate
                    attributeName="stopColor"
                    values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue"
                    dur="14s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="offset"
                    values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95"
                    dur="14s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
            <path
              id="blue"
              className="svg-shape st0"
              fill={COLORS.red}
              // fill="url(#bruh)"
              ref={shape1}
              strokeWidth="5"
              strokeMiterlimit="10"
              d="M378.01,12.31c37.9,1.87,74.04,4.55,108.97,15.33c23.58,7.28,43.74,20.99,63.04,35.9
	c21.33,16.48,42.09,33.7,63.66,49.86c25.83,19.35,55.59,31.25,85.26,43.29c18.33,7.44,36.46,15.44,54.41,23.75
	c26.02,12.04,47.03,30.52,65.6,52.1c17.17,19.95,33.93,40.19,47.97,62.55c15.37,24.48,27.22,50.39,31.39,79.25
	c4.34,30.01-1.68,58.26-15.46,85.01c-14.35,27.84-34.88,50.64-58.52,70.78c-20.59,17.54-42.9,32.67-66.41,46.02
	c-11.3,6.42-23.71,9.67-36.36,9.15c-19.38-0.8-38.72-3.09-58.02-5.22c-16.89-1.86-33.71-3.81-50.72-1.7
	c-20.26,2.51-34.96,13.6-46.47,29.74c-13.45,18.86-20.26,40.4-24.54,62.76c-5.43,28.39-9.64,57.01-15.31,85.34
	c-4.14,20.68-11.04,40.57-24.77,57.2c-14.74,17.85-33.85,27.49-56.94,29.28c-29.28,2.28-55.31-7.91-80.32-21.36
	c-29.95-16.11-56.17-37.4-81.4-60c-17.77-15.91-29.18-35.92-36.23-58.29c-7-22.2-12.73-44.79-19.09-67.19
	c-6.39-22.55-14.4-44.43-29.09-63.08c-10.28-13.05-22.89-23.78-36.9-32.62c-20.55-12.97-41.51-25.29-62.15-38.13
	c-15.86-9.86-31.14-20.46-43.19-35.12c-20.47-24.9-18.91-59.53,3.71-82.53c13.04-13.26,29.08-21.59,45.86-28.66
	c25.76-10.86,51.94-20.73,77.48-32.07c19.64-8.72,37.3-20.66,49.36-39.26c8.23-12.7,12.33-26.77,13.96-41.72
	c2.61-23.9-1.06-47.41-3.67-71.04c-2.12-19.14-3.93-38.41-4.24-57.64c-0.61-37.94,17.97-64.78,50.84-82.33
	c18.76-10.01,38.97-15.25,60.08-17.12C359.71,13.67,369.66,12.97,378.01,12.31z"
            />
            <path
              id="purple"
              className="svg-shape st1"
              fill="none"
              // ref={shape2}
              d="M600.03,130.47c-0.92,24.12-2.63,49.73-2.66,75.36c-0.04,26.64,1.07,53.37,14.12,77.78
	c14.96,27.98,41.81,41.94,73.76,39.02c29.14-2.66,55.86-13.31,82.78-23.45c24.91-9.38,49.47-19.85,75.92-24.36
	c18.22-3.11,36.25-3.21,52.93,6.34c13.72,7.86,24.27,18.34,25.55,35.22c0.84,11.02-2.64,21.27-8.35,30.34
	c-8.13,12.94-16.96,25.48-26.09,37.74c-15.3,20.55-31.71,40.3-46.46,61.23c-12.51,17.75-19.83,37.67-17.59,60.1
	c1.58,15.79,6.66,30.49,13.47,44.68c12.31,25.67,29.1,48.53,45.12,71.87c13.67,19.92,27.17,39.88,36.52,62.4
	c21.95,52.88-13.35,93.61-53.72,103.6c-20.29,5.02-40.76,5.14-61.45,3.37c-40.24-3.44-79.26-13.7-118.83-20.82
	c-12.59-2.27-25.34-3.7-37.9-6.12c-20.87-4.02-38.65-14.92-56.28-26.12c-13.63-8.66-27.27-17.33-41.24-25.41
	c-26.54-15.34-53.69-15.06-81.4-2.71c-23.27,10.36-43.41,25.21-62.6,41.59c-23.3,19.89-46.16,40.32-69.91,59.65
	c-17.3,14.07-36.78,24.77-58.91,29.48c-26.76,5.7-52.29,1.19-76.73-10.45c-27.16-12.93-49.17-32.41-68.01-55.44
	c-43.65-53.32-74.73-113.67-97.48-178.39C22.22,561.9,14.79,525.7,16.12,488.3c1.13-32.07,7.92-62.77,26.61-89.7
	c14.84-21.38,35.47-36.08,58.35-47.41c26.09-12.92,52.82-24.54,79.16-36.98c26.48-12.5,51.75-26.85,71.93-48.73
	c15-16.26,25.13-35.53,34.54-55.28c11.09-23.28,21.66-46.84,33.52-69.73c9.97-19.22,25.3-33.99,42.59-47.01
	c25.82-19.44,51.17-39.5,79.26-55.68c20-11.52,40.72-21.11,63.8-24.96c38.28-6.39,72.09,13.57,85.27,50.65
	C598.69,84.7,599.65,106.78,600.03,130.47z"
            />
            <path
              id="orange"
              className="svg-shape st2"
              fill="none"
              // ref={shape3}
              d="M346.67,823.99c-37.56-0.6-66.62-2.94-95.07-10.99c-31.86-9.01-59.3-26.17-85.37-45.74
	c-39.27-29.48-72.7-64.44-97.53-107.13c-17.78-30.56-29.45-63.19-34.15-98.38c-5.83-43.65-0.96-86.27,11.17-128.26
	c12.46-43.16,32.5-82.55,58.98-118.84c20.02-27.43,46.81-45.31,78.41-55.98c24.41-8.24,49.39-14.8,74.12-22.11
	c28.32-8.37,56.4-17.34,80.94-34.56c19.18-13.47,35.72-29.87,51.92-46.68c17.93-18.61,36.55-36.37,58.65-50.25
	c23.41-14.69,46.09-30.56,69.52-45.22c18.39-11.51,37.87-20.95,59.31-25.69c29.36-6.48,56.85-1.76,82.66,13.44
	c22.32,13.14,41.45,30.28,59.01,49.01c33.23,35.46,70.22,66.16,111.18,92.31c17.26,11.02,33.5,23.61,47.69,38.56
	c14.72,15.51,25.63,33.05,29.77,54.43c4.45,23,0.28,44.65-9.48,65.52c-9.39,20.09-22.96,37.39-36.51,54.73
	c-16.9,21.63-34.85,42.6-49.81,65.51c-11.47,17.55-19.56,37.42-28.18,56.69c-13.85,31-25.32,63.12-43.09,92.24
	c-19.85,32.54-38.09,66.07-60.93,96.76c-24.97,33.57-57.52,56.93-95.67,73.09c-34.27,14.51-70.08,23.18-106.96,27.29
	c-22.96,2.56-46.01,4.35-69.04,6.12C384.99,821.67,361.75,823,346.67,823.99z"
            />
            <path
              id="red"
              className="svg-shape st3"
              fill="none"
              // ref={shape4}
              d="M11.46,299.15c-0.12-29.41,5.85-53.7,22.39-74.69c17.01-21.59,39.98-33.06,66.18-39.07
	c20.7-4.74,41.77-6.1,62.91-7.06c25.77-1.16,51.57-2.17,77.29-4.16c20.31-1.57,40.1-6.21,58.94-14.29
	c16.79-7.2,28.3-20.29,38.07-35.03c9.65-14.58,18.31-29.84,28.35-44.13c5.87-8.36,12.78-16.42,20.67-22.83
	c16.01-13.02,34.28-12.04,52.49-4.94c16.41,6.39,29.21,17.91,40.5,30.99c15.23,17.65,29.39,36.25,45.06,53.49
	c9.68,10.65,21.03,19.86,32.14,29.09c14.08,11.7,28.38,23.17,43.13,33.99c16.81,12.33,36.41,17.48,56.85,19.94
	c30.79,3.71,61.5,1.19,92.25-0.75c26.08-1.64,52.2-3.51,78.31-0.28c28.16,3.48,53.74,12.66,73.89,33.69
	c14.9,15.55,23.18,34.41,26.8,55.37c7.05,40.72-0.78,79.52-16.27,117.08c-4.3,10.43-10,20.29-15.33,30.27
	c-13.73,25.71-35.94,40.95-63.3,48.36c-24.7,6.69-49.89,11.55-74.87,17.23c-19.71,4.49-38.98,10.2-56.44,20.79
	c-23.69,14.37-38.1,36.12-46.82,61.59c-7.86,22.96-14.02,46.49-21.03,69.75c-6.32,20.98-13.98,41.34-27.88,58.75
	c-9.42,11.8-21.63,20.21-34.09,28.26c-39.11,25.29-81.78,41.05-128.16,45.66c-36.64,3.64-72.56,0.29-106.32-15.93
	c-21.76-10.45-40.53-25.26-56.4-43.21c-19.18-21.7-37.69-44.04-55.64-66.77c-22.25-28.17-46.74-54.26-71.23-80.41
	c-26.56-28.36-52.31-57.37-72.98-90.51c-12.5-20.04-21.44-41.69-29.78-63.68c-11.76-30.97-23.99-61.77-32-94.01
	C14.6,333.39,11.47,314.88,11.46,299.15z"
            />
          </svg>
        </div>
        <nav ref={navMain} className="nav">
          <div className="nav__left">
            <ul className="nav__items">
              <li className="nav__item">
                <NavLink
                  onMouseEnter={onMouseEnterHome}
                  onMouseLeave={onMouseLeaveHome}
                  ref={link1}
                  to="/"
                  className="nav-item"
                >
                  HOME
                </NavLink>
                {/* <div ref={under1} className="nav-under"></div> */}
                <div className="nav-reveal"></div>
              </li>
              <li className="nav__item">
                <NavLink
                  onMouseEnter={onMouseEnterWork}
                  onMouseLeave={onMouseLeaveWork}
                  ref={link2}
                  className="nav-item"
                  to="/Work"
                >
                  DEV | DESIGN
                </NavLink>
                {/* <div ref={under2} className="nav-under"></div> */}
                <div className="nav-reveal"></div>
              </li>
              <li className="nav__item">
                <NavLink
                  onMouseEnter={onMouseEnterPhot}
                  onMouseLeave={onMouseLeavePhot}
                  ref={link3}
                  className="nav-item"
                  to="/Photography"
                >
                  PHOTOGRAPHY
                </NavLink>
                {/* <div ref={under3} className="nav-under"></div> */}
                <div className="nav-reveal"></div>
              </li>
              <li className="nav__item">
                <NavLink
                  onMouseEnter={onMouseEnterCont}
                  onMouseLeave={onMouseLeaveCont}
                  ref={link4}
                  className="nav-item"
                  to="/Contact"
                >
                  CONTACT
                </NavLink>
                {/* <div ref={under4} className="nav-under"></div> */}
                <div className="nav-reveal"></div>
              </li>
            </ul>
          </div>
          <div className="nav__right"></div>
        </nav>
      </div>
    </>
  )
}
