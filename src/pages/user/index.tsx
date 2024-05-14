import { Component, PropsWithChildren } from "react";



import "taro-ui/dist/style/components/button.scss"; // 按需引入
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";
import {View} from "@tarojs/components";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <text>user</text>
        <AtButton type='primary' onClick={() => // 跳转到目的页面，打开新页面
          Taro.navigateTo({
            url: '../index/index',
          })}>首页面</AtButton>
      </View>
    );
  }
}
