// import { Link } from "@remix-run/react"
// import { motion } from "framer-motion"

// import type { V2_MetaFunction } from "@remix-run/node"

// export const meta: V2_MetaFunction = () => {
//   return [
//     { title: "Graham Van Pelt - About Me" },
//     { property: "og:title", content: "Graham Van Pelt - About Me" },
//     {
//       name: "description",
//       content:
//         "Some biographical information about Graham Van Pelt as a developer.",
//     },
//     {
//       property: "og:description",
//       content:
//         "Some biographical information about Graham Van Pelt as a developer.",
//     },
//     { property: "og:url", content: "https://grahamvanpelt.dev/about" },
//   ]
// }

// export default function about() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 6 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <article className="mx-auto">
//         <h1>
//           A little <span className="italic">background</span>
//         </h1>
//         <p>
//           I got my start with HTML in the mid 90's, building guitar-themed
//           websites in the back of my{" "}
//           <Link to="http://web.archive.org/web/19980210194622/http://cyg.net/">
//             dad's ISP
//           </Link>{" "}
//           storefront. Satisfied with my progress, I took roughly 25 years off
//           from web development to build a life as a{" "}
//           <Link
//             to="https://en.wikipedia.org/wiki/Graham_Van_Pelt"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             musician
//           </Link>{" "}
//           in Montreal (and later Toronto).
//         </p>
//         <p>
//           When lockdown struck in the spring of 2020, my wife and I decamped to
//           her childhood home on{" "}
//           <Link
//             to="https://www.gulfislandsdriftwood.com/"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             Salt Spring Island
//           </Link>{" "}
//           in British Columbia. With little to do at the time aside from a weekly
//           Zoom-based trivia night and endless rounds of the board game Wingspan
//           , I checked in on the web-development world to see how things were
//           going. I thought I might like to build my own pages instead of relying
//           on some platform or another. First, I built a site for my music
//           project, then another for my in-laws' bed and breakfast. After some
//           ill-advised attempts at becoming a Wordpress person (using a
//           blocks-based graphical{" "}
//           <Link
//             to="https://elementor.com/"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             page builder
//           </Link>
//           ), I discovered that tinkering with the underlying code was much more
//           "my kind of thing".
//         </p>
//         <p>
//           I decided at this point to learn some Javascript and CSS, and
//           eventually found my way on to Scrimba's{" "}
//           <Link
//             to="https://scrimba.com/learn/frontend"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             "Front End Career Path"
//           </Link>
//           . Scrimba is a learning platform that enables the instructor to
//           screencast and write code in a browser-based text editor, allowing the
//           student to pause the lesson at any time and edit the code herself. I
//           had a great time building some little{" "}
//           <Link
//             to="https://gvpproj.github.io/colour-scheme-generator/"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             apps
//           </Link>{" "}
//           and{" "}
//           <Link
//             to="https://gvp-tenzies-react.netlify.app/"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             games
//           </Link>
//           ; the real fun starting when we got into the React library and started
//           creating more component-based, api-driven{" "}
//           <Link
//             to="https://gvp-react-quizzical.netlify.app/"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             web apps
//           </Link>{" "}
//           pulling in external data (which triggered my "organization brain" in a
//           pleasing way).
//         </p>
//         <p>
//           Now I build websites and apps for small businesses, friends and
//           family, and just for fun. I use{" "}
//           <Link
//             to="https://react.dev/"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             React
//           </Link>
//           ,{" "}
//           <Link
//             to="https://tailwindcss.com/"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             TailwindCSS
//           </Link>{" "}
//           and whichever JS framework I am enjoying at the moment (currently it's{" "}
//           <Link
//             to="https://remix.run/"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             Remix
//           </Link>
//           ). I enjoy it all quite a lot and would like to find full-time work in
//           the space when the time is right.
//         </p>
//         <p className="font-serif italic">- Graham, Spring '23</p>
//       </article>
//     </motion.div>
//   )
// }
