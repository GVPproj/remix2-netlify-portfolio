import { getPb } from "../data/pocketbaseUtils"
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import Markdown from "markdown-to-jsx"
import React from "react"

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const pb = getPb()
  const record = await pb
    .collection("markdownPosts")
    .getFirstListItem(`slug="${params.slug}"`, {})
  return record
}

const Post = () => {
  const record = useLoaderData<typeof loader>()

  return (
    <article className="mx-auto flex flex-col">
      <div className="prose mx-auto">
        <h1 className="mb-0 text-4xl font-bold text-skin-accent">
          {record.title}
        </h1>
        <h2 className="mt-4 text-lg font-semibold text-skin-accent">
          {new Date(record.created).toLocaleDateString("en-CA", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h2>
      </div>
      <div className="prose mx-auto max-w-full text-skin-base prose-headings:text-skin-base prose-h1:text-skin-accent prose-a:text-skin-accent prose-a:no-underline prose-strong:text-skin-base prose-code:bg-skin-fill-muted prose-code:text-skin-base prose-code:before:content-none prose-code:after:content-none prose-pre:bg-skin-fill-muted">
        <Markdown
          options={{
            overrides: {
              pre: ClickPre,
            },
          }}
        >
          {record.markdown}
        </Markdown>
      </div>
    </article>
  )
}

const ClickPre: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handleCopy = async () => {
    try {
      if (!children) return

      let text = ""
      if (typeof children === "string" || typeof children === "number") {
        text = children.toString()
      } else if (React.isValidElement(children)) {
        text = children.props.children.toString()
      }

      await navigator.clipboard.writeText(text)
      alert("Content copied to clipboard!")
    } catch (error) {
      console.error("Error copying to clipboard:", error)
    }
  }

  return (
    <button onClick={handleCopy} className="w-full">
      <pre className="text-wrap break-words text-left">{children}</pre>
    </button>
  )
}

export default Post
