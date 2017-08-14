import * as React from 'react';
import { Balloon, Button } from 'qnui';

/* 
* ============================
* 
* Balloon存在bug：会随着页面滚动而滚动
* fix：设置container，并且container必须定位（如： position：relative；）
*
* ============================
*/

interface BalloonState {
  visible: boolean;
}

class BalloonTest extends React.Component<any, BalloonState> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  // 一切改变visible为false的行为都会触发此事件
  onClose() {
      console.log('onClose doing!');
  }
  handleDisplay = (val: boolean) => {
    this.setState({visible: val});
  }
  render() {
    const defaultTrigger = <Button className="bgrigger">默认</Button>
    const primary = <Button className="bgrigger">主样式</Button>

    const visibleTrigger = <Button onClick={this.handleDisplay.bind(this, true)} type="primary">点击弹出卡片</Button>

    const { visible } = this.state;
    return (
      <div className="Block">
        <div className="title">Balloon 气泡提示</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <Balloon trigger={defaultTrigger}>default</Balloon>
            <Balloon 
              trigger={primary} 
              type="primary" 
              closable={false} 
              triggerType="click"
            >
              primary
            </Balloon>
          </div>

          {/* visible */}
          <div className="line">
            <div id="balloon-container" style={{position: 'relative'}}></div>
            <Balloon
              trigger={visibleTrigger}
              container="balloon-container"
              triggerType="click"
              visible={visible}
              onCloseClick={this.handleDisplay.bind(this, false)}
              onClose={this.onClose}
            >
              <div>content</div>
            </Balloon>
          </div>

        </div>
      </div>
    );
  }
}

export default BalloonTest;