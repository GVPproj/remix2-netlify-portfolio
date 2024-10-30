// import React from "react"
// import { NavLink, Link, Outlet } from "@remix-run/react"
// import { motion } from "framer-motion"

// export const meta = () => {
//   return [
//     { title: "Graham Van Pelt - CV" },
//     { property: "og:title", content: "Graham Van Pelt - CV" },
//     { name: "description", content: "Graham Van Pelt's developer CV." },
//     { property: "og:description", content: "Graham Van Pelt's developer CV." },
//     { property: "og:url", content: "https://grahamvanpelt.dev/cv" },
//   ]
// }

// export default function CV() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 6 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <section className="flex flex-col justify-between gap-12 lg:flex-row">
//         <aside className="mx-auto flex flex-col font-sans lg:mx-0 lg:w-1/4 ">
//           <img
//             className="mx-auto my-0 aspect-square h-36 w-36 overflow-hidden rounded-full bg-skin-accent p-1 lg:mx-0"
//             height="auto"
//             loading="eager"
//             width="auto"
//             src="/images/graham.webp"
//             alt="My face smiling"
//           ></img>
//           <p>
//             A front-end web developer who loves{" "}
//             <span className="font-bold">React</span>. A game developer
//             specializing in <span className="font-bold">Audio.</span> A{" "}
//             <span className="font-bold">Music-Lover</span> who releases albums
//             and broadcasts a weekly radio show online.
//           </p>
//           <a download="" href="/resume/GrahamVanPelt_CV.pdf">
//             <div className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="inline p-0"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                 <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
//                 <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
//                 <path d="M9 9l1 0"></path>
//                 <path d="M9 13l6 0"></path>
//                 <path d="M9 17l6 0"></path>
//               </svg>
//               <p className="m-0 text-base">My CV .pdf</p>
//             </div>
//           </a>

//           <Link
//             to="mailto:grahamvanpelt@gmail.com"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             <div className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="inline p-0"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                 <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
//                 <path d="M3 7l9 6l9 -6"></path>
//               </svg>
//               <p className="m-0 text-base">Email</p>
//             </div>
//           </Link>
//           <Link
//             to="https://github.com/GVPproj"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             <div className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="inline p-0"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                 <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
//               </svg>
//               <p className="m-0 text-base">GitHub Profile</p>
//             </div>
//           </Link>
//           <Link
//             to="https://www.linkedin.com/in/graham-van-pelt-39b37797/"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             <div className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="inline p-0"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                 <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
//                 <path d="M8 11l0 5"></path>
//                 <path d="M8 8l0 .01"></path>
//                 <path d="M12 16l0 -5"></path>
//                 <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
//               </svg>
//               <p className="m-0 text-base">LinkedIn Profile</p>
//             </div>
//           </Link>
//           <Link
//             to="https://links.grahamvanpelt.com/"
//             target="_blank"
//             referrerPolicy="no-referrer"
//           >
//             <div className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="inline p-0"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                 <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
//                 <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
//                 <path d="M7 12a5 5 0 0 1 5 -5"></path>
//                 <path d="M12 17a5 5 0 0 0 5 -5"></path>
//               </svg>
//               <p className="m-0 text-base">Music Page</p>
//             </div>
//           </Link>
//         </aside>
//         <section className="mt-8 md:mt-0">
//           <nav className="flex gap-8 font-sans text-xl ">
//             <NavLink
//               preventScrollReset
//               to="."
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-skin-accent no-underline"
//                   : "text-skin-base no-underline"
//               }
//             >
//               Experience
//             </NavLink>
//             <NavLink
//               to="education"
//               end
//               preventScrollReset
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-skin-accent no-underline"
//                   : "text-skin-base no-underline"
//               }
//             >
//               Education
//             </NavLink>
//           </nav>

//           <Outlet />
//         </section>
//       </section>
//     </motion.div>
//   )
// }
