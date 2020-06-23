import React from "react"
import {connect} from 'react-redux'

/*
* 计数器的UI组件(负责展示数据 不处理任何逻辑)
* */
function DemoCounter(props) {
  let {
    counter,
    onIncreaseClick,
    onDecreaseClick,
    onIncreaseAsyncClick,
    onDecreaseAsyncClick
  } = props
  return (
      <div>
        <h2>{counter}</h2>
        <br/>
        <button onClick={onIncreaseClick}>increase</button>
        &nbsp;&nbsp;
        <button onClick={onDecreaseClick}>decrease</button>
        &nbsp;&nbsp;
        <button onClick={onIncreaseAsyncClick}>increase async</button>
        &nbsp;&nbsp;
        <button onClick={onDecreaseAsyncClick}>decrease async</button>
        &nbsp;&nbsp;
      </div>
  )
}

/*
* mapStateToProps(state,props)
* 1.state就是store存储的state对象
* 2.props就是该组件接受的props值(可省略)
* */
function mapStateToProps(state, props) {
  return {
    counter: state.counter + props.number
  }
}

/*
* mapDispatchToProps(dispatch,props)
* 1.参数dispatch 用于派发action
* 2.参数props 表示该组件接受的props的值(可省略)
* */
function mapDispatchToProps(dispatch, {number}) {
  return {
    onIncreaseClick() {
      dispatch({type: 'increase', payload: number})
    },
    onDecreaseClick() {
      dispatch({type: 'decrease', payload: number})
    },
    //派发异步的Action
    onIncreaseAsyncClick() {
      dispatch(dispatch => {
        setTimeout(() => {
          dispatch({type: 'increase', payload: number})
        }, 1000)
      })
    },
    onDecreaseAsyncClick() {
      dispatch(dispatch => {
        setTimeout(() => {
          dispatch({type: 'decrease', payload: number})
        }, 2000)
      })
    }
  }
}


/*
* 向外暴露容器组件(真正的进行数据逻辑操作)
* */
export default connect(
    mapStateToProps, mapDispatchToProps
)(DemoCounter)

