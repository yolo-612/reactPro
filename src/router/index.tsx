import React, { lazy } from "react"
import Home from "../views/Home"
// import About from "../views/About"

const About = lazy(()=>import("../views/About"))

// 懒加载报错：Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator.
//  To fix, updates that suspend should be wrapped with startTransition.
// 懒加载的模式 需要外面结合suspend一起使用

import {Navigate} from "react-router-dom"

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/about",
    element: <React.Suspense fallback={<div>Loading</div>}>
      <About></About>
    </React.Suspense> 
  }
]

export default routes

