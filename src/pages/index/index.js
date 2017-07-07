import React from 'react';
import './index.less'
const { HBox, VBox, Box } = window.SaltUI.Boxs;
class Index extends React.Component {
  componentWillMount() {
    document.title = '管理员首页'
  }
  handleClick(){}
  handleClickImg(){}
  render() {
    return (
      <div>
        <div>我是管理员首页</div>
        <HBox vAlign="center" className="index-card">
          <Box flex={1}s>60 * 60</Box>
          <Box className="right">flex:1</Box>
        </HBox>
      </div>
    )
  }
}
export default Index;