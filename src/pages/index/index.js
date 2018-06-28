import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import A from '../../components/A/A'

import * as Actions from '../../actions/counter'

import './index.scss'

function mapStateToProps(state) {
  return {
    counter: state.counter.toJS()
  }
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch)
  }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    x: [1, 2]
  }

  componentWillMount () {
    console.log('page willmount')
    setTimeout(() => {
      this.setState({
        x: [3, 4]
      })
    }, 2000);

  }

  componentDidMount () {
    console.log('page didmount')
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goto = () => {
    Taro.navigateTo({
      url: '/pages/index2/index?sd=1'
    })
  }

  render () {
    const { add, minus, asyncAdd } = this.props
    return (
      <View className='index'>
        <Button className='add_btn' onClick={add}>+</Button>
        <Button className='dec_btn' onClick={minus}>-</Button>
        <Button className='dec_btn' onClick={asyncAdd}>async</Button>
        <View>{this.props.counter.num}</View>
        {this.state.x.map((item, index) => <A key={index} t={item} />)}
        <Button onClick={this.goto}>走你</Button>
      </View>
    )
  }
}
