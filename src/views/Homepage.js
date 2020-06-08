import React, { Component } from 'react'

import {
  Grid, List, TextareaItem, Button, WingBlank, WhiteSpace, 
} from 'antd-mobile'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}))

class Homepage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="sub-title">Carousel</div>
        <Grid data={data} onClick={_el => console.log(_el)} />

        <List renderHeader={() => 'Auto / Fixed height'}>
          <TextareaItem
            placeholder="请填写周报"
            autoHeight
            labelNumber={5}
          />
        </List>

        <WhiteSpace size="lg" />
        <WingBlank>
          <Button type="primary">确定</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Homepage
