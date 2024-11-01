import { NavLink, Link, Outlet } from "@remix-run/react"
import Document from "../assets/document.svg?react"
import Email from "../assets/email.svg?react"
import Github from "../assets/github.svg?react"
import LinkedIn from "../assets/linkedin.svg?react"
import Music from "../assets/music.svg?react"

export const meta = () => {
  return [
    { title: "Graham Van Pelt - CV" },
    { property: "og:title", content: "Graham Van Pelt - CV" },
    { name: "description", content: "Graham Van Pelt's developer CV." },
    { property: "og:description", content: "Graham Van Pelt's developer CV." },
    { property: "og:url", content: "https://grahamvanpelt.dev/cv" },
  ]
}

export default function CV() {
  return (
    <>
      <section className="flex flex-col justify-between gap-12 lg:flex-row">
        <aside className="mx-auto flex flex-col font-sans lg:mx-0 lg:w-1/4 ">
          <img
            className="mx-auto my-0 aspect-square h-36 w-36 overflow-hidden rounded-full bg-skin-accent p-1 lg:mx-0"
            height="auto"
            loading="eager"
            width="auto"
            src="/images/graham.webp"
            alt="My face smiling"
          ></img>
          <p>
            A front-end web developer who loves{" "}
            <span className="font-bold">React</span>. A game developer
            specializing in <span className="font-bold">Audio.</span> A{" "}
            <span className="font-bold">Music-Lover</span> who releases albums
            and broadcasts a weekly radio show online.
          </p>
          <a download="" href="/resume/GrahamVanPelt_CV.pdf">
            <div className="flex items-center gap-2">
              <Document />
              <p className="m-0 text-base">My CV .pdf</p>
            </div>
          </a>

          <Link
            to="mailto:grahamvanpelt@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-2">
              <div className="inline p-0">
                <Email />
              </div>
              <p className="m-0 text-base">Email</p>
            </div>
          </Link>
          <Link
            to="https://github.com/GVPproj"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-2">
              <Github />
              <p className="m-0 text-base">GitHub Profile</p>
            </div>
          </Link>
          <Link
            to="https://www.linkedin.com/in/graham-van-pelt-39b37797/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-2">
              <LinkedIn />
              <p className="m-0 text-base">LinkedIn Profile</p>
            </div>
          </Link>
          <Link
            to="https://links.grahamvanpelt.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-2">
              <Music />
              <p className="m-0 text-base">Music Page</p>
            </div>
          </Link>
        </aside>
        <section className="mt-8 md:mt-0">
          <nav className="flex gap-8 font-sans text-xl ">
            <NavLink
              preventScrollReset
              to="."
              className={({ isActive }) =>
                isActive
                  ? "text-skin-accent no-underline"
                  : "text-skin-base no-underline"
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="education"
              end
              preventScrollReset
              className={({ isActive }) =>
                isActive
                  ? "text-skin-accent no-underline"
                  : "text-skin-base no-underline"
              }
            >
              Education
            </NavLink>
          </nav>

          <Outlet />
        </section>
      </section>
    </>
  )
}
