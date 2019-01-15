> https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html

==注意目录结构==

![image](https://i.loli.net/2019/01/15/5c3de93fca9e8.jpg)

```
// app.js
    subPackages: [{
      root: 'packageA',
      pages: [
        'pages/cat/index'
      ]
    }, {
      root: 'packageB',
      pages: [
        'pages/apple/index'
      ]
    }]
    
//pages
```

```
//主包跳转分包
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


```