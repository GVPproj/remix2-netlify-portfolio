import PocketBase from "pocketbase"
const pb = new PocketBase(import.meta.env.VITE_PB_URL)

export const getPb = () => {
  return pb
}
export const checkIfLoggedIn = (): boolean => {
  return pb.authStore.isValid
}
export const logout = () => {
  pb.authStore.clear()
}
