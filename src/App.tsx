import { useState } from 'react'
import { Outlet, Link } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* 占位符组件，类似于窗口，用来展示组件，有点像vue中的router-view */}
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default App
