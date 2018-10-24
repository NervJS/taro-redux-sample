import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import './app.scss'

import configStore from './store'

// 支付宝小程序不需要引用 @tarojs/async-await
if (Taro.getEnv() !== Taro.ENV_TYPE.ALIPAY) {
  require('@tarojs/async-await')
}

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/index2/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
