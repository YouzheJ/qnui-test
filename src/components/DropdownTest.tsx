import * as React from 'react';
import { Dropdown, Menu } from 'qnui';

interface DropdownState {
  visible: boolean;
}

const menu = <Menu>
  <Menu.Item>option 1</Menu.Item>
  <Menu.Item>option 2</Menu.Item>
  <Menu.Item>option 3</Menu.Item>
  <Menu.Item>option 4</Menu.Item>
</Menu>

class DropdownTest extends React.Component<any, DropdownState> {
  state = {
    visible: false,
  }
  toggleVisible = () => {
      this.setState({visible: !this.state.visible});
  }
  onVisibleChange = (visible: boolean) => {
      this.setState({ visible });
  }
  render() {
    return (
      <div className="Block">
        <div className="title">Dropdown 下拉菜单</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <p>
              <button onClick={this.toggleVisible} ref="button">其他的控制按钮控制显示隐藏</button>
            </p>
            <Dropdown trigger={<span>Hello dropdown</span>}
                        visible={this.state.visible}
                    triggerType="click"
                    safeNode = {()=>this.refs.button}
                    onVisibleChange={this.onVisibleChange}>
                {menu}
            </Dropdown>
          </div>
          {/* 详情见文档 */}

        </div>
      </div>
    );
  }
}

export default DropdownTest;