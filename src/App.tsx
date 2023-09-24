import { useState } from 'react'
// import { Outlet, Link } from "react-router-dom"
import { useRoutes, Link } from "react-router-dom" // 使用内置的创建对象的路由的hook

import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)

  return (
    <div className='App'>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      {/* 占位符组件，类似于窗口，用来展示组件，有点像vue中的router-view */}
      {/* <Outlet></Outlet> */}

      {outlet}
    </div>
  )
}

export default App
