import { Demo0 } from "@/pages/demo_0"
import { Demo1 } from "@/pages/demo_1"
import { Demo2 } from "@/pages/demo_2"
import { Demo3 } from "@/pages/demo_3"
import { Demo4 } from "@/pages/demo_4"
import { Demo5 } from "@/pages/demo_5"
import { Demo6 } from "@/pages/demo_6"
import { Demo7 } from "@/pages/demo_7"
import { Demo8 } from "@/pages/demo_8"
import { Demo9 } from "@/pages/demo_9"
import { Demo10 } from "@/pages/demo_10"
import { Demo11 } from "@/pages/demo_11"
import { Demo12 } from "@/pages/demo_12"

export const ROUTES = [
  {
    name: "home",
    element: <div>home</div>,
  },
  {
    name: "12.几何体组",
    element: <Demo12 />,
  },
  {
    name: "11.几何体clone+copy",
    element: <Demo11 />,
  },
  {
    name: "10.几何体细分",
    element: <Demo10 />,
  },
  {
    name: "9.自定义几何体",
    element: <Demo9 />,
  },
  {
    name: "8.自定义几何平面",
    element: <Demo8 />,
  },
  {
    name: "7.线材质",
    element: <Demo7 />,
  },
  {
    name: "6.点材质",
    element: <Demo6 />,
  },
  {
    name: "demo_5",
    element: <Demo5 />,
  },
  {
    name: "demo_4",
    element: <Demo4 />,
  },
  {
    name: "demo_3",
    element: <Demo3 />,
  },
  {
    name: "demo_2",
    element: <Demo2 />,
  },
  {
    name: "demo_1",
    element: <Demo1 />,
  },
  {
    name: "demo_0",
    element: <Demo0 />,
  },
]
