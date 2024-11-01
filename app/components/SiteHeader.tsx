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
import Sig from "./Sig"

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
          <Sig />
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
