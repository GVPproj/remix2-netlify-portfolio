import React, { useEffect, useState } from "react"

const toolList = [
  "ReactJS",
  "Accessible UI",
  "Typescript",
  "Graphql",
  "Postgres",
  "TailwindCSS",
  "Astro",
  "Prisma",
  "HTML",
  "Remix",
]

export default function SpanCycle() {
  const [listIdx, setListIdx] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      listIdx < toolList.length - 1
        ? setListIdx((prev) => prev + 1)
        : setListIdx(0)
    }, 2000)
    return () => clearTimeout(timer)
  }, [listIdx])

  return <span className="text-skin-accent">{toolList[listIdx]}</span>
}
