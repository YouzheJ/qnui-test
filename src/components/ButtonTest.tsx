import * as React from 'react';
import { Button, Icon, Menu } from 'qnui';

interface ButtonState {
  loading: boolean;
  iconLoading: boolean;
}

class ButtonTest extends React.Component<any, ButtonState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      iconLoading: false,
    }
  }
  enterLoading = () => {
    this.setState({loading: !this.state.loading});
  }
  enterIconLoading = () => {
    this.setState({iconLoading: !this.state.iconLoading});
  }
  render() {
    const ButtonGroup = Button.Group;
    const SplitButton = Button.Split;
    const menu = (
        <Menu>
            <Menu.Item disabled>abc</Menu.Item>
            <Menu.Item key="abc">abc</Menu.Item>
            <Menu.Divider key="5"/>
            <Menu.Item key="1">abc</Menu.Item>
            <Menu.Item key="2">abc</Menu.Item>
        </Menu>
    );
    const { loading, iconLoading } = this.state;
    return (
      <div className="Block">
        <div className="title">Button 按钮</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <p>基本：</p>
              <Button type="primary">primary</Button>
              <div className="separator"/>
              <Button type="secondary">secondary</Button>
              <div className="separator"/>
              <Button type="normal">normal</Button>
          </div>

          {/* 基本组合 */}
          <div className="line">
            <p>基本组合：</p>
              <ButtonGroup>
                  <Button type="primary">确定</Button>
                  <Button type="primary" disabled>取消</Button>
              </ButtonGroup>
              <div className="separator"/>
              <ButtonGroup>
                <Button type="primary">
                    <Icon type="arrow-left" /><span>后退</span>
                </Button>
                <Button type="primary">
                    前进<Icon type="arrow-right" />
                </Button>
            </ButtonGroup>
            <div className="separator"/>
            <ButtonGroup size="large">
                <Button>大</Button>
                <Button>大</Button>
                <Button>大</Button>
            </ButtonGroup>
          </div>

          {/* 加载按钮 */}
          <div className="line">
            <Button type="primary" size="large" loading>加载中</Button>
            <Button type="primary"  loading>加载中</Button>
            <Button type="primary" size="small" loading>加载中</Button>
            <div className="separator"/>
            <ButtonGroup>
              <Button type="primary" loading={loading} onClick={this.enterLoading}>点击</Button>
              <Button onClick={this.enterLoading} type="primary" disabled={!loading}>完成</Button>
            </ButtonGroup>
            <div className="separator"/>
            <ButtonGroup>
              <Button type="primary" loading={iconLoading} onClick={this.enterIconLoading}>
                <Icon type="arrow-right"/>
                点击
                </Button>
              <Button onClick={this.enterIconLoading} type="primary" disabled={!iconLoading}>完成</Button>
            </ButtonGroup>
          </div>

          {/* 按钮形状 */}
          <div className="line">
            <h3>幽灵按钮</h3>
            <div className="ghost-light-background">
                <Button type="light" shape="ghost">幽灵按钮（浅色）</Button>
            </div>
            <div className="ghost-dark-background">
                <Button type="dark" shape="ghost">幽灵按钮（深色）</Button>
            </div>
            <h3>文字按钮</h3>
            <Button type="primary" shape="text">
                <Icon type="atm" />点击我
            </Button>&nbsp;&nbsp;
            <Button type="secondary" shape="text">
                <Icon type="atm" />点击我
            </Button>&nbsp;&nbsp;
            <Button type="normal" shape="text">
                <Icon type="atm" />点击我
            </Button>
            <h3>警告按钮</h3>
            <Button type="primary" shape="warning">警告</Button>&nbsp;&nbsp;
            <Button type="normal" shape="warning">警告</Button>
          </div>

          {/* 分隔按钮 */}
          <div className="line">
            <SplitButton menu={menu} type="primary" size="large" onClick={(e: any) => console.log(e)}>Upload</SplitButton>&nbsp;&nbsp;
            <SplitButton menu={menu} type="secondary">Upload</SplitButton>&nbsp;&nbsp;
            <SplitButton menu={menu} type="normal" size="small" disabled>Upload</SplitButton>
          </div>

          {/* 自定义按钮 */}
          <div className="line">
            <Button type="primary" component="a" href="http://www.baidu.com" target="_blank">
              <span>确定</span>
            </Button> &nbsp;&nbsp;
            <Button type="secondary" component="a" href="http://www.baidu.com" target="_blank">次要按钮</Button> &nbsp;&nbsp;
            <Button type="normal" component="a" href="http://www.baidu.com" target="_blank">普通按钮</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default ButtonTest;