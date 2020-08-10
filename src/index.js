import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import App from './App'

// ReactDOM.render(<App/>, document.getElementById('root'))
// 如果使用路由路 那么Provider组件也是放在最外层
ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
)
