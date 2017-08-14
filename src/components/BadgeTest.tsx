import * as React from 'react';
import { Badge,Icon, Button } from 'qnui';

interface BadgeState {
  count: number;
  show: boolean;
}

class BadgeTest extends React.Component<any, BadgeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 5,
      show: true,
    };
  }
  increase = () => {
    const count = this.state.count + 1;
    this.setState({count});
  }
  decrease = () => {
    let count = this.state.count - 1;
    if(count < 0) {
      count  = 0;
    }
    this.setState({count});
  }
  onClick = () => {
    this.setState({show: !this.state.show});
  }
  onNumberClick = () => {
    const count = this.state.count;
    this.setState({count: count ? 0 : 5});
  }
  render() {
    const style1 = {
      backgroundColor: '#fff',
      color: '#999',
      border: '1px solid #d9d9d9',
    }
    const ButtonGroup = Button.Group;
    return (
      <div className="Block">
        <div className="title">Badge 徽标数</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <Badge count={5}>
              <a href="#" className="basic-example"/>
            </Badge>
          </div>

          {/* 独立使用 */}
          <div className="line">
            <Badge count={25}/>
            <span className="separator"/>
            <Badge count={4} style={style1}/>
            <span className="separator"/>
            <Badge count={109} style={{backgroundColor: '#87d068'}}/>
          </div>

          {/* 列表的圆点 */}
          <div className="line">
            <ul>
              <li><Badge dot={true} align="left">xxxxxxxxx</Badge></li>
              <li><Badge dot={true} align="left">xxxxxxxxx</Badge></li>
              <li><Badge dot={true} align="left">xxxxxxxxx</Badge></li>
            </ul>
          </div>

          {/* 大数字： 默认99 */}
          <div className="line">
            <Badge count={100}>
              <a href="#" className="basic-example"/>
            </Badge>
            <span className="separator"/>
            <Badge count={200} overflowCount={199}>
              <a href="#" className="basic-example"/>
            </Badge>
          </div>

          {/* 小红点 */}
          <div className="line">
            <Badge dot={true}>
              <Icon type="email"/>
            </Badge>
            <span className="separator"/>
            <Badge dot count={100}>
              <a href="#">link</a>
            </Badge>
          </div>

          {/* 动态变化 */}
          <div className="line">
            <Badge count={this.state.count}>
              <a href="#" className="basic-example"/>
            </Badge>
            <div className="separator"/>
            <Badge dot={this.state.show}>
              <a href="#" className="basic-example"/>
            </Badge>
            <div className="separator"/>

            <div style={{marginTop: 10}}>
              <Button onClick={this.onNumberClick} style={{marginRight: 6}}>
                切换数字显隐
              </Button>
              <Button onClick={this.onClick} style={{marginRight: 6}}>
                切换红点显隐
              </Button>
              <ButtonGroup>
                <Button onClick={this.increase}>
                  <Icon type="add"/>
                </Button>
                <Button onClick={this.decrease}>
                  <Icon type="subtract"/>
                </Button>
              </ButtonGroup>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default BadgeTest;