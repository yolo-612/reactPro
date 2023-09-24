import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化一般放在最前面放在app的上面
import "reset-css"
// UI框架的样式

// 全局样式【要去覆盖ui框架的样式的】
import "../src/assets/styles/global.scss"

// 组件的样式
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
