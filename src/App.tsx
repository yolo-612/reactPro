import { useState } from 'react'
import { Button } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      测试页面
      <Button type="primary">122</Button>
      {/* 注意区分与vue的模板的语法， react外面只有一个{} 里面的{} 是对象 */}
      <StepBackwardOutlined style={{ fontSize: '40px' }} />
    </div>
  )
}

export default App
