// import { Link } from "@remix-run/react"
// import Laptop from "./Laptop"

// interface Props {
//   title?: string
//   url?: string
//   screenshot?: string
//   description?: string
//   tooling: string[]
//   repo?: string
// }

// export default function PortfolioItem(props: Props) {
//   return (
//     <>
//       <div className="my-24 md:my-36">
//         <div className="flex flex-col gap-12 xl:flex-row">
//           <div className="min-w-max">
//             {props.url ? (
//               <Link to={props.url} target="_blank" rel="noreferrer">
//                 <Laptop
//                   src={props.screenshot}
//                   alt={"Visit this project: " + props.title}
//                 />
//               </Link>
//             ) : (
//               <Laptop
//                 src={props.screenshot}
//                 alt={"Screenshot of project: " + props.title}
//                 title={"No link available for project: " + props.title}
//               />
//             )}
//           </div>
//           <div className="flex flex-col justify-evenly gap-12 sm:flex-row">
//             <div id="ToolingList" className="text-skin-muted md:min-w-max">
//               {props.repo && (
//                 <Link to={props.repo} target="_blank" rel="noreferrer">
//                   <div className="flex items-center gap-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       strokeWidth="2"
//                       stroke="currentColor"
//                       fill="none"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                       <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
//                     </svg>
//                     <p className="font-sans text-xl font-semibold">
//                       GitHub Repo
//                     </p>
//                   </div>
//                 </Link>
//               )}
//               {props.tooling.includes("Gatsby") && (
//                 <div className="flex items-center gap-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     fill="none"
//                   >
//                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                     <path d="M3.296 14.297l6.407 6.407a9.018 9.018 0 0 1 -6.325 -6.116l-.082 -.291z"></path>
//                     <path d="M16 13h5c-.41 3.603 -3.007 6.59 -6.386 7.614l-11.228 -11.229a9 9 0 0 1 15.66 -2.985"></path>
//                   </svg>
//                   <span className="font-sans text-xl not-italic ">Gatsby</span>
//                 </div>
//               )}

//               {props.tooling.includes("Astro") && (
//                 <div className="flex items-center gap-4">
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 64 79"
//                     fill="currentColor"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M19.9924 65.9282C16.1165 62.432 14.9851 55.0859 16.5999 49.7638C19.3998 53.1193 23.2793 54.1822 27.2977 54.7822C33.5013 55.7081 39.5937 55.3618 45.3565 52.5637C46.0158 52.2434 46.625 51.8174 47.3454 51.386C47.8861 52.9341 48.0268 54.497 47.838 56.0877C47.3787 59.9617 45.4251 62.9542 42.3177 65.2227C41.0752 66.13 39.7604 66.9411 38.4771 67.7967C34.5346 70.4262 33.4679 73.5095 34.9494 77.9946C34.9846 78.1038 35.0161 78.2131 35.0957 78.4797C33.0828 77.5909 31.6124 76.2965 30.4921 74.5946C29.3088 72.7984 28.7458 70.8114 28.7162 68.6615C28.7014 67.6152 28.7014 66.5597 28.5588 65.5282C28.2107 63.0135 27.0144 61.8876 24.7608 61.8227C22.4479 61.7561 20.6183 63.1672 20.1331 65.3893C20.0961 65.5597 20.0424 65.7282 19.9887 65.9263L19.9924 65.9282Z"
//                       // fill="white"
//                     />
//                     <path
//                       d="M0.5 51.3932C0.5 51.3932 11.0979 46.2433 21.7254 46.2433L29.7382 21.5069C30.0381 20.3106 30.9141 19.4977 31.9029 19.4977C32.8918 19.4977 33.7677 20.3106 34.0677 21.5069L42.0804 46.2433C54.6672 46.2433 63.3058 51.3932 63.3058 51.3932C63.3058 51.3932 45.3044 2.47586 45.2692 2.37772C44.7526 0.931458 43.8804 0 42.7045 0H21.1032C19.9273 0 19.0903 0.931458 18.5384 2.37772C18.4995 2.47401 0.5 51.3932 0.5 51.3932Z"
//                       // fill="white"
//                     />
//                   </svg>

//                   <span className="font-sans text-xl not-italic">Astro</span>
//                 </div>
//               )}
//               {props.tooling.includes("TypeScript") && (
//                 <div className="flex items-center gap-4">
//                   <svg
//                     width="20"
//                     height="20"
//                     version="1.1"
//                     viewBox="0 0 260 260"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="m9.75 0h240.5c5.385 0 9.75 4.3652 9.75 9.75v240.5c0 5.385-4.365 9.75-9.75 9.75h-240.5c-5.3848 0-9.75-4.365-9.75-9.75v-240.5c0-5.3848 4.3652-9.75 9.75-9.75z"
//                       fill="#fff"
//                     />
//                     <path
//                       d="m9.75 0h240.5c5.385 0 9.75 4.3652 9.75 9.75v240.5c0 5.385-4.365 9.75-9.75 9.75h-240.5c-5.3848 0-9.75-4.365-9.75-9.75v-240.5c0-5.3848 4.3652-9.75 9.75-9.75zm134.78 138.32v-21.324h-92.532v21.324h33.036v94.946h26.298v-94.946zm10.485 92.439c4.241 2.162 9.257 3.784 15.048 4.865 5.79 1.081 11.893 1.622 18.309 1.622 6.253 0 12.193-0.595 17.82-1.784 5.628-1.189 10.562-3.149 14.803-5.879s7.598-6.297 10.072-10.703 3.711-9.852 3.711-16.339c0-4.703-0.707-8.824-2.12-12.365-1.414-3.541-3.453-6.69-6.117-9.447s-5.859-5.23-9.583-7.419c-3.725-2.189-7.925-4.257-12.601-6.203-3.425-1.406-6.497-2.771-9.216-4.095-2.718-1.324-5.029-2.676-6.932-4.054-1.903-1.379-3.371-2.838-4.404-4.379-1.033-1.54-1.55-3.284-1.55-5.23 0-1.784 0.463-3.392 1.387-4.824 0.924-1.433 2.229-2.663 3.915-3.69 1.685-1.027 3.751-1.824 6.198-2.392 2.447-0.567 5.165-0.851 8.156-0.851 2.174 0 4.472 0.162 6.891 0.486 2.42 0.325 4.853 0.825 7.299 1.5 2.447 0.676 4.826 1.527 7.137 2.555 2.311 1.027 4.445 2.216 6.402 3.567v-24.244c-3.969-1.514-8.305-2.636-13.008-3.365-4.704-0.73-10.1-1.095-16.189-1.095-6.199 0-12.071 0.662-17.617 1.987-5.546 1.324-10.425 3.392-14.639 6.203s-7.544 6.392-9.991 10.743c-2.447 4.352-3.67 9.555-3.67 15.609 0 7.731 2.243 14.326 6.729 19.785 4.485 5.46 11.295 10.082 20.43 13.866 3.588 1.46 6.932 2.892 10.031 4.298 3.099 1.405 5.777 2.865 8.033 4.378 2.257 1.514 4.037 3.162 5.342 4.946s1.958 3.811 1.958 6.082c0 1.676-0.408 3.23-1.224 4.662-0.815 1.433-2.052 2.676-3.71 3.73-1.659 1.054-3.725 1.879-6.199 2.473-2.474 0.595-5.369 0.892-8.686 0.892-5.654 0-11.254-0.986-16.8-2.959s-10.684-4.933-15.415-8.879z"
//                       fill="#082f49"
//                     />
//                   </svg>

//                   <span className="font-sans text-xl not-italic">
//                     TypeScript
//                   </span>
//                 </div>
//               )}
//               {props.tooling.includes("React") && (
//                 <div className="flex items-center gap-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     //   className="icon icon-tabler icon-tabler-brand-gatsby"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     fill="none"
//                     // stroke-lineCap="round"
//                     // stroke-lineJoin="round"
//                   >
//                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                     <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
//                     <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
//                     <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
//                     <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
//                     <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
//                     <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
//                     <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
//                   </svg>

//                   <span className="font-sans text-xl not-italic">React</span>
//                 </div>
//               )}
//               {props.tooling.includes("HTML") && (
//                 <div className="flex items-center gap-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     //   className="icon icon-tabler icon-tabler-brand-gatsby"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     fill="none"
//                     // stroke-lineCap="round"
//                     // stroke-lineJoin="round"
//                   >
//                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                     <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
//                     <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
//                   </svg>
//                   <span className="font-sans text-xl not-italic">HTML</span>
//                 </div>
//               )}
//               {props.tooling.includes("TailwindCSS") && (
//                 <div className="flex items-center gap-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     //   className="icon icon-tabler"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     fill="none"
//                     // stroke-lineCap="round"
//                     // stroke-lineJoin="round"
//                   >
//                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                     <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
//                   </svg>

//                   <span className="font-sans text-xl not-italic">
//                     TailwindCSS
//                   </span>
//                 </div>
//               )}
//               {props.tooling.includes("Javascript") && (
//                 <div className="flex items-center gap-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     //   className="icon icon-tabler icon-tabler-brand-gatsby"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     fill="none"
//                     // stroke-lineCap="round"
//                     // stroke-lineJoin="round"
//                   >
//                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                     <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
//                     <path d="M7.5 8h3v8l-2 -1"></path>
//                     <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
//                   </svg>

//                   <span className="font-sans text-xl not-italic">
//                     Javascript
//                   </span>
//                 </div>
//               )}

//               {props.tooling.includes("CSS") && (
//                 <div className="flex items-center gap-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     //   className="icon icon-tabler icon-tabler-brand-gatsby"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     fill="none"
//                     // stroke-lineCap="round"
//                     // stroke-lineJoin="round"
//                   >
//                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                     <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
//                     <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
//                   </svg>

//                   <span className="font-sans text-xl not-italic">CSS</span>
//                 </div>
//               )}
//             </div>
//             <div className="prose md:min-w-[300px]">
//               <Link
//                 to={props.url || "#"}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="font-sans text-xl font-semibold text-skin-accent no-underline"
//               >
//                 {props.title}
//               </Link>
//               <p className="prose text-skin-muted">{props.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
