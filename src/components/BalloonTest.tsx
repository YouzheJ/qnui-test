import * as React from 'react';
import { Balloon, Button, DatePicker } from 'qnui';

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
    const innerButton = <Button className="btrigger">innerButton</Button>

    const visibleTrigger = <Button onClick={this.handleDisplay.bind(this, true)} type="primary">点击弹出卡片</Button>

    const top = <Button  id="top" className="btrigger">上边</Button>;
    const right = <Button  id="right" className="btrigger">右边</Button>;
    const bottom = <Button id="bottom" className="btrigger">下边</Button>;
    const left = <Button id="left" className="btrigger">左边</Button>;
    const topLeft = <Button id="topLeft" className="btrigger">上左</Button>;
    const topRight = <Button id="topRight" className="btrigger">上右</Button>;
    const rightTop = <Button id="rightTop" className="btrigger">右上</Button>;
    const rightBottom = <Button id="rightBottom" className="btrigger">右下</Button>;
    const bottomLeft = <Button id="bottomLeft" className="btrigger">下左</Button>;
    const bottomRight = <Button id="bottomRight" className="btrigger">下右</Button>;
    const leftTop = <Button id="leftTop" className="btrigger">左上</Button>;
    const leftBottom = <Button id="leftBottom" className="btrigger">左下</Button>;

    const Content = () => (
        <div>
            <h4 style={{marginTop: 0}}>balloon title</h4>
            <hr/>
            <p>
                balloon content
            </p>
        </div>
    );

    const Tooltip = Balloon.Tooltip;

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

          {/* 十二个方向 */}
          <div className="line">
            {/* 上 */}
            <div style={{marginLeft: 75}}>
                <Balloon trigger={topLeft} align="tl" triggerType="click" style={{width: 300}}>
                    <Content/>
                </Balloon>
                <Balloon trigger={top} align="t" triggerType="click" style={{width: 300}}>
                    <Content/>
                </Balloon>
                <Balloon trigger={topRight} align="tr" triggerType="click" style={{width: 300}}>
                    <Content/>
                </Balloon>
            </div>
            {/* 左 */}
            <div style={{width: 80, float: 'left'}}>
                <Balloon trigger={leftTop} align="lt" triggerType="click" style={{width: 300}}>
                    <Content/>
                </Balloon>
                <Balloon trigger={left} align="l" triggerType="click" style={{width: 300}}>
                    <Content/>
                </Balloon>
                <Balloon trigger={leftBottom} align="lb" triggerType="click" style={{width: 300}}>
                    <Content/>
                </Balloon>
            </div>
            {/* 右: tooltip */}
            <div style={{width: 80, marginLeft: 290}}>
                <Tooltip trigger={rightTop} align="rt" text="text text" />
                <Tooltip trigger={right} align="r" text="text text" />
                <Tooltip trigger={rightBottom} align="rb" text="text text" />
            </div>
            {/* 下: 边缘对齐 */}
            <div style={{marginLeft: 80, clear: 'both'}}>
              <Balloon trigger={bottomLeft} align="bl" alignment="edge" triggerType="click" style={{width: 300}}>
                  <Content/>
              </Balloon>
              <Balloon trigger={bottom} align="b" alignment="edge" triggerType="click" style={{width: 300}}>
                  <Content/>
              </Balloon>
              <Balloon trigger={bottomRight} align="br" alignment="edge" triggerType="click" style={{width: 300}}>
                  <Content/>
              </Balloon>
            </div>
          </div>

          {/* 浮层中有浮层的问题 */}
          <div className="line">
            <Balloon 
              type="primary" 
              safeNode="myDate" 
              closable={false}
              triggerType="click"
              trigger={primary}
            >
              <DatePicker defaultValue="2017-8-14" safeId="myDate"/>
            </Balloon>
            <div className="separator"/>
            <Balloon 
              type="primary" 
              safeNode="myDate" 
              closable={false}
              triggerType="click"
              trigger={innerButton}
            >
              <Balloon
                trigger={<Button type="primary">please click</Button>}
                safeId="myDate"
                triggerType="click" 
              >
                nesting balloon content
              </Balloon>
            </Balloon>
          </div>

        </div>
      </div>
    );
  }
}

export default BalloonTest;