import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '主包'
  }

  _goTo = (page) => {
    Taro.navigateTo({
      url: page
    })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this._goTo.bind(this, '/packageA/pages/cat/index')}>跳转A包</Button>
        <Button onClick={this._goTo.bind(this, '/packageB/pages/apple/index')}>跳转B包</Button>
      </View>
    )
  }
}

