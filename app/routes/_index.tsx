import type { MetaFunction } from "@netlify/remix-runtime"
import SpanCycle from "../components/SpanCycle"
import { Link } from "@remix-run/react"
import Face from "~/components/Face"
import FadeUp from "~/components/FadeUp"

export const meta: MetaFunction = () => {
  return [
    { title: "Graham Van Pelt - Developer" },
    { property: "og:title", content: "Graham Van Pelt - Developer" },
    { name: "description", content: "My web development portfolio." },
    { property: "og:description", content: "My web development portfolio." },
    { property: "og:url", content: "https://grahamvanpelt.dev" },
  ]
}

export default function Index() {
  return (
    <FadeUp id="hero" delay="delay-150">
      <>
        <section className="mb-16 flex flex-col items-center gap-8 text-skin-base hover:text-skin-base md:flex-row md:justify-between">
          <p className="min-w-[320px] font-serif text-4xl font-semibold md:max-w-[20ch] md:text-5xl">
            A{" "}
            <span className="italic text-skin-accent ">Software Developer</span>
            {", "}
            building for the web with <br />
            <SpanCycle />.
          </p>
          <Face />
        </section>
        <section className="flex flex-col gap-16">
          <p className="prose-xl">
            👋 Hi, I&apos;m Graham, a web developer based on beautiful{" "}
            <span className="font-semibold not-italic">Salt Spring Island</span>{" "}
            in western Canada. I use{" "}
            <span className="font-semibold not-italic">React</span> with{" "}
            <span className="font-semibold not-italic">TypeScript</span> to
            build satisfying and accessible web experiences. Visit my{" "}
            <Link
              prefetch="render"
              to="portfolio"
              aria-label="Go to my portfolio page."
              className="font-serif italic underline"
            >
              portfolio
            </Link>{" "}
            or have a look through my{" "}
            <Link
              prefetch="render"
              to="cv"
              aria-label="Go to my CV."
              className="font-serif  italic underline"
            >
              CV
            </Link>
            .
          </p>
        </section>
      </>
    </FadeUp>
  )
}
