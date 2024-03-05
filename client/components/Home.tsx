import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import { CustomBounce } from 'gsap/CustomBounce'
import Nav from './Nav'
import Grain from './Grain'
import Cursor from './Cursor'

gsap.registerPlugin(MorphSVGPlugin, ScrambleTextPlugin, CustomBounce)

export default function Home() {
  // React Variables for Animation
  const shape1 = useRef(null)
  const shape2 = useRef(null)
  const shape3 = useRef(null)
  const shape4 = useRef(null)
  const headingUpper = useRef(null)
  const headingLower = useRef(null)

  const duration = 2.5
  // const delay = 1.5
  const ease = 'elastic.out(1,0.2)'

  const landingTL = gsap.timeline({ repeat: -1 })

  useGSAP(() => {
    landingTL
      .to(shape1.current, {
        duration: duration,
        morphSVG: {
          shape: '.st1',
          type: 'rotational',
        },
        // delay,
        ease: CustomBounce.create('myBounce', {
          strength: 0.9,
          endAtStart: false,
          squash: 2,
          squashID: 'myBounce-squash',
        }),
        fill: '#FE7272',
      })
      .to(
        headingLower.current,
        {
          duration: duration,
          scrambleText: {
            text: 'DESIGNER',
          },
          // delay,
        },
        '<',
      )
      .to(shape1.current, {
        duration: duration,
        morphSVG: {
          shape: '.st2',
          type: 'rotational',
        },
        // delay,
        ease: CustomBounce.create('myBounce', {
          strength: 0.9,
          endAtStart: false,
          squash: 2,
          squashID: 'myBounce-squash',
        }),
        fill: '#72CBFE',
      })
      .to(
        headingUpper.current,
        {
          duration: duration,
          scrambleText: 'GRAPHIC',
          // delay,
        },
        '<',
      )
      .to(shape1.current, {
        duration: duration,
        morphSVG: {
          shape: '.st3',
          type: 'rotational',
        },
        // delay,
        ease: CustomBounce.create('myBounce', {
          strength: 0.9,
          endAtStart: false,
          squash: 2,
          squashID: 'myBounce-squash',
        }),
        fill: '#B072FE',
      })
      .to(
        headingLower.current,
        {
          duration: duration,
          scrambleText: 'PHOTOGRAPHER',
          // delay,
        },
        '<',
      )
      .to(
        headingUpper.current,
        {
          duration: duration,
          scrambleText: '    ',
          // delay,
        },
        '<',
      )
      .to(shape1.current, {
        duration: duration,
        morphSVG: {
          shape: '.st0',
          type: 'rotational',
        },
        // delay,
        ease: CustomBounce.create('myBounce', {
          strength: 0.9,
          endAtStart: false,
          squash: 2,
          squashID: 'myBounce-squash',
        }),
        fill: '#FEC572',
      })
      .to(
        headingLower.current,
        {
          duration: duration,
          scrambleText: 'DEVELOPER',
          // delay,
        },
        '<',
      )
      .to(
        headingUpper.current,
        {
          duration: duration,
          scrambleText: 'WEB',
          // delay,
        },
        '<',
      )
  })

  return (
    <>
      <div className="landing-bg">
        <div className="landing-img-box">
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
              fill="#FEC572"
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
              ref={shape2}
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
              ref={shape3}
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
              ref={shape4}
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
      </div>
      <div className="landing">
        <div className="landing-top">
          <div className="landing__header">
            <h1
              ref={headingUpper}
              id="landingHeadingTop"
              className="landing-heading"
            >
              WEB
            </h1>
            <h1
              ref={headingLower}
              id="landingHeadingBottom"
              className="landing-heading"
            >
              DEVELOPER
            </h1>
            <div className="landing__img">
              <img
                className="landing-img"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="landing-bottom">
          <div className="landing-bottom__left">
            <ul className="landing__nav">
              <Link to="Work">
                <li className="landing-nav-item">DEV | DESIGN WORK</li>
              </Link>
              <Link to="Photography">
                <li className="landing-nav-item">PHOTOGRAPHY</li>
              </Link>
              <Link to="Contact">
                <li className="landing-nav-item">GET IN TOUCH</li>
              </Link>
            </ul>
          </div>
          <div className="landing-bottom__right">
            <h2 className="landing-heading">DANIEL KINGSTON</h2>
          </div>
        </div>
      </div>
    </>
  )
}
