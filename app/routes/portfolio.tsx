import React from "react"
import PortfolioItem from "../components/PortfolioItem"
import { motion } from "framer-motion"
import type { PortfolioItemData } from "../data/portfolioData"
import { portfolioItems } from "../data/portfolioData"

import { useLoaderData } from "@remix-run/react"
import FadeUp from "../components/FadeUp"

export const meta = () => {
  return [
    { title: "Graham Van Pelt - Portfolio" },
    { property: "og:title", content: "Graham Van Pelt - Portfolio" },
    {
      name: "description",
      content: "A list of my web personal with links and descriptions.",
    },
    {
      property: "og:description",
      content: "A list of my web personal with links and descriptions.",
    },
    { property: "og:url", content: "https://grahamvanpelt.dev/portfolio" },
  ]
}

const PortfolioDivider = () => {
  return (
    <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-skin-fill-muted  md:my-10"></hr>
  )
}

// routes/portfolio.tsx

export const loader = async () => {
  const personal = portfolioItems.filter((item) => item.category === "personal")
  const projects = portfolioItems.filter((item) => item.category === "project")
  const education = portfolioItems.filter(
    (item) => item.category === "education"
  )

  return { personal, education, projects }
}

const Portfolio = () => {
  const { personal, education, projects } = useLoaderData<{
    personal: PortfolioItemData[]
    education: PortfolioItemData[]
    projects: PortfolioItemData[]
  }>()

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="mb-8 text-2xl font-extrabold md:text-4xl">
        <span>Collaborative Projects</span>
      </h1>
      <p>Team-driven projects featuring my work.</p>
      {projects.map((item, index) => (
        <FadeUp key={index}>
          <>
            <PortfolioItem
              title={item.title}
              description={item.description}
              screenshot={item.screenshot}
              tooling={item.tooling}
              url={item.url}
              repo={item.repo}
            />
            {index < projects.length - 1 && <PortfolioDivider />}
          </>
        </FadeUp>
      ))}
      <FadeUp>
        <h1 className="text-2xl font-extrabold md:text-4xl">
          <span>Client websites</span> and <span>personal projects</span>
        </h1>
      </FadeUp>
      {personal.map((item, index) => (
        <FadeUp key={index}>
          <React.Fragment>
            <PortfolioItem
              title={item.title}
              description={item.description}
              screenshot={item.screenshot}
              tooling={item.tooling}
              url={item.url}
              repo={item.repo}
            />
            {index < personal.length - 1 && <PortfolioDivider />}
          </React.Fragment>
        </FadeUp>
      ))}

      <FadeUp>
        <>
          <h1 className="mb-8 text-2xl font-extrabold md:text-4xl">
            <span>Educational Projects</span>
          </h1>
          <p>
            These projects were coded by <span>me</span>, assigned as Figma
            files and functionality descriptions.
          </p>
        </>
      </FadeUp>
      {education.map((item, index) => (
        <FadeUp key={index}>
          <React.Fragment>
            <PortfolioItem
              title={item.title}
              description={item.description}
              screenshot={item.screenshot}
              tooling={item.tooling}
              url={item.url}
              repo={item.repo}
            />
            {index !== education.length - 1 && <PortfolioDivider />}
          </React.Fragment>
        </FadeUp>
      ))}
    </motion.div>
  )
}

export default Portfolio
