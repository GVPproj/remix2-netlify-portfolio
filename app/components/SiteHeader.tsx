import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { NavLink } from "@remix-run/react"
import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion"
import MenuIcon from "../assets/menu-icon.svg?react"
import CloseIcon from "../assets/close-icon.svg?react"
import Signature from "./Signature"

const sleep = (s: number) =>
  new Promise((resolve) => setTimeout(resolve, s * 1000))

export default function SiteHeader() {
  const [showNav, setShowNav] = useState(false)
  const controls = useAnimationControls()

  async function closeMenu() {
    await controls.start("closed")
    setShowNav(false)
    // here we are ensuring our menu animation finished before
    // dismissing the menu
  }

  useEffect(() => {
    if (showNav) {
      controls.start("open")
    }
  }, [controls, showNav])

  return (
    <header className="flex min-w-full justify-between p-6 transition-all md:py-12 lg:mb-8">
      <NavLink
        to="/"
        aria-label="Go back to the homepage"
        prefetch="intent"
        className={({ isActive }) =>
          isActive ? "stroke-skin-accent" : "navLink"
        }
      >
        <div className="">
          <Signature />
          {/* <svg
            className="h-12 w-48 md:h-12 md:w-48 lg:h-16 lg:w-64"
            viewBox="-20 -20 1200 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
              d="m126.55,13.26c-4.7-4.48-9.51-7.65-15.77-10.04-7.17-2.73-13.99-3.77-21.41-1.43-10.47,3.3-19.9,10.77-28.27,17.81-11.08,9.32-20.82,20.09-28.78,32.16-9.57,14.53-15.54,31.5-19.73,48.33-4.89,19.65-8.07,39.59-10.16,59.72-1.77,17.08-4.02,35.26,1.95,51.87,4.23,11.76,10.35,23.18,18.67,32.56,5.62,5.01,11.5,9.7,17.63,14.06,5.38,4.41,11.28,8,17.7,10.77,4.05.26,8.09.53,12.14.79l13.78-6.01c12.68-6.46,25.67-19.01,34.67-30.11,5.38-5.37,8.85-11.86,10.41-19.48l-.62-15.48c-2.1-9.48-6.58-17.46-13.44-23.94-3.24-5.27-7.71-9.05-13.41-11.35-6.48-4.77-13.83-7.32-22.07-7.66l-12.83-.87c-1.23-.01-12.85-.05-12.36,1.56,10.52-1.84,21.01-4.21,31.49-6.27,18.46-3.64,34.49-9.24,50.04-20.06,9.46-6.59,18.21-13.67,26.92-21.16,1.96-1.69,4.71-4.04,7.59-3.55.58,2.07.29,4.34.27,6.46-.19,14.79-1.05,29.57-1.25,44.36-.34,24.85-.18,49.71-.1,74.57-.03-4.03-.1-8.07-.14-12.1-.13-12.77-.91-26.49,1.37-39.1,4.52-24.97,20.78-47.2,43.71-58.25,7.49-3.61,14.95-4.19,22.86-6.19,5.03-1.27,7.84-2.43,7.15-8.16-2.89-1.16-6.15,1.15-8.49,2.7-7.53,5-13.84,14.94-18.33,22.49-6.67,11.21-11.42,24.05-14.16,36.78-1.79,8.32-5.4,21.37.09,28.68,3.94,5.26,8.41,2.19,12.44-1.53,8.43-7.79,13.6-17.57,17.85-28.1,7.78-19.28,10.79-39.68,13.19-60.21,5.04-2.91,8.26.19,11.41,4.08,4.68,5.78,3.91,15.41,4.7,22.43,2.7,24.2,1.26,51.05,13.64,72.81l4.9-.67,6.78-8.52c3.02-7.01,6.03-14.03,9.05-21.04,7.03-20.26,13.12-40.79,18.27-61.59,6.05-22.83,11.3-45.74,15.96-68.9.91-4.53,2.1-19.09,6.15-23.16.08,33.75-6.32,67.64-9.54,101.13-1.77,18.37-3.42,36.75-4.21,55.19-.33,7.7-1.31,16.21-.2,23.93,7.42-16.92,11.88-35,19.51-51.85l10.37-21.33c1.91-7.11,5.99-10.99,12.24-11.62,2.15,8.28,2.21,15.94,1.93,24.55-.44,6.8-.88,13.6-1.32,20.39l1.03,18.53,6.7,11.88c3.84.98,7.67,1.96,11.51,2.94l13.52-4.52c9.31-5.4,16.24-12.86,20.77-22.4,5.21-6.15,8.35-13.21,9.4-21.18,3.01-5.81,3.78-11.81,2.3-18,1.53-4.93.15-7.81-4.14-8.63-3.39-2.78-6.52-2.01-9.41,2.31-6.02,2.84-10.26,7.48-12.74,13.91-5.54,6.41-9.22,13.75-11.05,22.03-3.59,6.41-5.16,13.22-4.72,20.43-2.11,6.34-.47,11.54,4.93,15.62l9.2-2.94c6.89-7.15,11.67-15.45,14.34-24.91,5.35-13.62,9.43-27.57,13.71-41.56-1.93,9.52-3.97,18.97-5.48,28.56-1.22,6-1.92,12.05-2.11,18.16-1.2,6.21-.79,12.33,1.23,18.35l5.11.32c5.5-6.44,9.7-13.63,12.6-21.57,6.32-13.61,12.2-27.32,20.99-39.51,3.94,5.14,1.16,24.95,1,28.29l-.89,16.48c-2.15,4.94-1.37,8.6,2.33,11,13.51-13.78,19.66-33.6,28.03-50.73.03,8.93-3.63,20.22-5.49,28.49-1.66,7.43-6.04,17.55-3.64,24.92,4.22-1.05,6.8-4.03,7.75-8.93,3.54-8.28,6.45-16.77,8.72-25.48,2.44-7.02,4.46-11.58,10.92-15.78,1.39-.91,2.66-2.1,4.22-2.57,3.54-1.07,7.98.69,11.7-.22.26,1.21.21,2.44-.14,3.7-.42,6.57-.24,13.14.54,19.71.68,5.05,4.35,26.63,15.73,24.56,3.11-1.97,6.21-3.95,9.32-5.92,11.89-19.68,20.15-40.84,24.8-63.5,4.32-18.33,9.3-38.23,9.12-57.15,2.08,37.62,5.82,75.41,12.18,112.54,1.24,14.66,5.14,28.6,11.7,41.81,3.02,10.08,9.34,14.71,18.95,13.89,8.95-13.68,14.83-28.57,17.63-44.67,6.98-25.06,13.9-50.14,20.77-75.23l16.08-44c2.88-9.76,7.68-18.23,14.38-25.41-12.32,14.01-14.81,34.24-20.61,51.26-9.06,26.61-23.2,52.36-25.45,80.85-.75,11.25-.09,22.4,1.97,33.47-.32,5.34,1.12,9.92,4.31,13.75,4.76-5.75,9.87-11.17,15.34-16.24,8.95-9.27,18.47-17.93,28.55-25.99,4.8-5.12,9.61-10.24,14.41-15.36,5.89-7.07,9-15.09,9.33-24.05l-6.13.03c-7.97,5.66-14.41,12.67-19.32,21.03-4.73,5.64-8.51,11.85-11.35,18.62-4.13,5.32-5.85,11.3-5.16,17.94l7.77-1.18c7.75-4.83,13.74-11.22,17.97-19.16,3.84-4.72,6.81-9.92,8.9-15.6,2.93-2.8,3.85-5.82,2.78-9.07-5.17,9.92-8.85,20.39-11.05,31.4-4.96,8.72-4.38,15.97,1.74,21.75,9.36-6.85,16.61-15.57,21.76-26.19,5.16-9.78,11.51-18.65,19.07-26.61,1.39,6.58,1.04,13.16-1.04,19.75-2.87,8.33-2.82,16.5.15,24.5,8.03-.51,13.25-5.07,15.66-13.67,3.23-6.85,5.45-13.98,6.67-21.39,1.92-.72,6.1.21,8.25.44.09,3.71.59,5.55,2.41,9.59l5.9,10.76c2.84,7.98,8.05,12.8,15.62,14.46,5.86,4.19,11.31,3.1,16.34-3.26,15.9-7.56,27.46-20.09,34.7-37.58,7.39-14.74,14.78-29.48,22.17-44.21,7.6-17.4,13.71-35.29,18.33-53.65-7.79,31.04-12.4,64.3-14.96,95.92-1.02,16.57-2.05,33.14-3.07,49.7-2.16,13.73-1.61,27.2,1.65,40.42,12.49-39.02,10.83-81.21,22.99-120.5,6.11-16.86,12.23-33.72,18.34-50.59,9.81-22.46,24.59-28.8,44.31-19.01,10.29,17.35,12.28,35.26,5.95,53.75-.7,21.9-8.82,41.14-24.36,57.7-8.74,4.31-17.49,8.63-26.23,12.94-12.49.73-23.93-2.09-34.33-8.44,5.71.52,10.85,2.84,15.42,6.95,7.72,5.5,16.19,8.47,25.4,8.92,10.44,2.78,20.57,1.12,30.37-5.01,11.84-5.18,20.46-13.42,25.86-24.72l-4.89-1.41c-8.2,3.94-14.39,9.84-18.59,17.7-5.37,4.71-7.65,10.56-6.85,17.57-3.58,9.84.55,16.43,12.39,19.78l24.31-3.18c9.04-7.48,18.08-14.95,27.11-22.43,13.81-17.98,24.58-37.52,32.3-58.62,5.37-10.76,9.36-22,11.99-33.72-9.28,16.14-15.26,34.14-22.03,51.44-5.09,11.56-9.27,23.44-12.55,35.63-4.99,10.46-6.56,21.41-4.69,32.84,8.82,4.2,16.06,2.07,21.72-6.38,17.04-11.5,30.17-26.89,39.38-46.17,8.49-15.21,16.98-30.43,25.46-45.64,7.98-9.6,12.39-20.15,13.24-31.66-9.05,19.65-17.53,39.57-24.37,60.12-3.83,13.18-7.67,26.35-11.5,39.53-4.78,11.86-6.12,23.85-4.02,35.98-1.53,6.41.61,10.72,6.42,12.95,3.95,5.11,8.81,5.76,14.6,1.93,7.05-.61,13.2-3.33,18.47-8.14,8.4-4.32,15.38-10.36,20.95-18.12l-3.45-11.74c-10.15-8.8-21.31-15.95-33.5-21.44-12.95-6.72-26.18-12.13-39.47-18.09,4.54-1.89,13.65-1.11,17.53-1.29,28.21-1.31,56.53-2.35,84.77-1.64-2.74.68-5.82-5.5-6.48-6.47"
              stroke="currentColor"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </svg> */}
        </div>
      </NavLink>

      <nav className="hidden gap-6 self-center font-sans text-2xl font-medium md:flex lg:gap-8">
        <NavLink
          to="cv"
          aria-label="Go to my CV."
          prefetch="intent"
          className={({ isActive }) =>
            isActive ? "text-skin-accent" : "navLink"
          }
        >
          CV
        </NavLink>
        <NavLink
          to="portfolio"
          aria-label="Go to the Portfolio page."
          prefetch="intent"
          className={({ isActive }) =>
            isActive ? "text-skin-accent" : "navLink"
          }
        >
          Portfolio
        </NavLink>
      </nav>
      <DropdownMenu.Root open={showNav} onOpenChange={setShowNav}>
        <DropdownMenu.Trigger className="rounded px-1.5 focus:bg-skin-fill-muted focus:outline-none md:hidden">
          {!showNav && <MenuIcon className="h-8 w-8" />}
          {showNav && <CloseIcon className="h-8 w-8" />}
        </DropdownMenu.Trigger>
        <AnimatePresence>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="items-left flex h-screen w-screen flex-col gap-16
                  bg-skin-fill px-6 py-24 font-sans text-2xl 
                  font-medium 
                  md:hidden"
              asChild
            >
              <motion.div
                initial="closed"
                animate={showNav ? "open" : "closed"}
                // exit="closed"
                variants={{
                  open: {
                    opacity: 1,
                    transition: { ease: "easeOut", duration: 0.2 },
                  },
                  closed: {
                    opacity: 0,
                    transition: { ease: "easeIn", duration: 0.3 },
                  },
                }}
              >
                {showNav && (
                  <>
                    <NavLink to="cv" prefetch="intent" className="max-w-max">
                      <Item closeMenu={closeMenu}>CV</Item>
                    </NavLink>
                    <NavLink
                      to="portfolio"
                      prefetch="intent"
                      className="max-w-max"
                    >
                      <Item closeMenu={closeMenu}>Portfolio</Item>
                    </NavLink>
                  </>
                )}
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </AnimatePresence>
      </DropdownMenu.Root>
    </header>
  )
}

function Item({
  children,
  onSelect = () => {},
  closeMenu,
}: {
  children?: ReactNode
  onSelect?: () => void
  closeMenu: () => void
}) {
  const controls = useAnimationControls()
  const shouldReduceMotion = useReducedMotion()
  return (
    <DropdownMenu.Item
      onSelect={async (e) => {
        e.preventDefault()
        if (!shouldReduceMotion) {
          await controls.start({
            backgroundColor: "var(--colour-text-muted)",
            color: "var(--colour-fill-muted)",
            transition: { duration: 0.1 },
          })
          await controls.start({
            backgroundColor: "var(--colour-fill)",
            color: "var(--colour-text-base)",
            transition: { duration: 0.3 },
          })
          await sleep(0.4)
        }

        await closeMenu()
        onSelect()
      }}
      asChild
      className="w-min select-none rounded px-2 py-1.5 text-skin-base 
       data-[highlighted]:bg-skin-fill-muted 
       data-[highlighted]:text-skin-base data-[highlighted]:focus:outline-none"
    >
      <motion.div animate={controls}>{children}</motion.div>
    </DropdownMenu.Item>
  )
}
