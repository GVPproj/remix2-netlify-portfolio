// import { getPb, checkIfLoggedIn, logout } from "../data/pocketbaseUtils"
// import React, { useEffect, useRef } from "react"
// import Tests from "../components/Tests"
// import { LoaderFunction } from "@remix-run/node"
// import { useLoaderData } from "@remix-run/react"

// export const Loader: LoaderFunction = async () => {
//   const logged = checkIfLoggedIn()

//   if (logged) {
//     return { loggedIn: true }
//   }

//   return { loggedIn: false }
// }

// const Auth = () => {
//   const { loggedIn } = useLoaderData()
//   //   const [loggedIn, setLoggedIn] = React.useState(false)
//   //   const [loading, setLoading] = React.useState(false)
//   const pb = getPb()
//   const emailRef = useRef<HTMLInputElement>(null)
//   const passwordRef = useRef<HTMLInputElement>(null)

//   const login = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const email = emailRef.current?.value
//     const password = passwordRef.current?.value

//     if (email && password) {
//       try {
//         await pb.collection("users").authWithPassword(email, password)
//         setLoading(true)
//       } catch (error) {
//         alert(error)
//       }
//     }
//   }

//   //   useEffect(() => {
//   //     if (loggedIn) {
//   //       setLoggedIn(true)
//   //       setLoading(false)
//   //     }
//   //   }, [loading])

//   return (
//     <div>
//       <h1>Logged In: {checkIfLoggedIn() ? pb.authStore.model?.email : "No"}</h1>
//       {!loggedIn && (
//         <form onSubmit={login}>
//           <input
//             type="text"
//             className="text-slate-800"
//             placeholder="Email / Username"
//             ref={emailRef}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="text-slate-800"
//             ref={passwordRef}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//       )}
//       {loggedIn && (
//         <form onSubmit={logout}>
//           <button type="submit">Logout</button>
//         </form>
//       )}
//       <Tests />
//     </div>
//   )
// }

// export default Auth
