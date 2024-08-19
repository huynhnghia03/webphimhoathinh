
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("@/components/layout/components/login/contentLogin"))

export default function Login() {
  return (
    <HeavyComponent />
  )
}
