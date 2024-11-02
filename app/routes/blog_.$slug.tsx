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
    <section className="flex flex-col">
      <div className="mx-auto prose">
        <h1 className="mb-0 text-skin-accent text-4xl font-bold">
          {record.title}
        </h1>
        <h2 className="mt-4 text-lg text-skin-accent font-semibold">
          {new Date(record.created).toLocaleDateString("en-CA", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h2>
      </div>
      <div className="prose-code:before:content-none prose-code:after:content-none mx-auto prose-pre:bg-skin-fill-muted prose-headings:text-skin-base prose-strong:text-skin-base text-skin-base prose prose-h1:text-skin-accent prose-code:bg-skin-fill-muted prose-code:text-skin-base prose-a:text-skin-accent prose-a:no-underline">
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
    </section>
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
      <pre className="text-left text-wrap w-full">{children}</pre>
    </button>
  )
}

export default Post
