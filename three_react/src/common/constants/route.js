import { Demo0 } from "@/pages/demo_0"
import { Demo1 } from "@/pages/demo_1"
import { Demo2 } from "@/pages/demo_2"

export const ROUTES = [
  {
    name: "home",
    element: <div>home</div>,
  },
  {
    name: "demo_0",
    element: <Demo0 />,
  },
  {
    name: "demo_1",
    element: <Demo1 />,
  },
  {
    name: "demo_2",
    element: <Demo2 />,
  },
]
