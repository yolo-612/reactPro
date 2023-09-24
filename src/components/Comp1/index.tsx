// import "./comp1.scss" // 属于全局引入， 跟全局main中引入一样
// 模块化引入
import styles from "./comp1.module.scss" // 一定要这样命名； 像vue的scoped

function Comp(){
  return (
    <div className={styles.box}>
      <p>这是Comp1的内容</p>
    </div>
  )
}

export default Comp