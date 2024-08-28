import * as React from "react"
import { ROUTES } from "@/common/constants/route"

import "./index.less"

export const Home = () => {
  const [active, setActive] = React.useState(0)

  return (
    <div className="container">
      <div className="title">首页</div>
      <div className="route">
        {ROUTES.map(({ name }, index) => {
          return (
            <div
              className={`route-name ${active === index ? "active" : ""}`}
              key={name}
              onClick={() => {
                setActive(index)
              }}
            >
              {name}
            </div>
          )
        })}
      </div>
      <div className="content">
        {ROUTES.map(({ name, element }, index) => {
          return (
            <div
              className={`content-item ${active === index ? "zIndex" : ""}`}
              key={name}
            >
              {element}
            </div>
          )
        })}
      </div>
    </div>
  )
}
