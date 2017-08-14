import * as React from 'react';
import { Overlay } from 'qnui';
const { Popup } = Overlay;

interface OverlayState {
  visible1: boolean;
  visible2: boolean;
  visible3: boolean;
  visible4: boolean;
  overlayVisible: boolean;
}

class OverlayTest extends React.Component<any, OverlayState> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      overlayVisible: false,
    };
  }
  handleDisplay1 = (val: boolean) => {
    this.setState({visible1: val});
  }
  handleDisplay2 = (val: boolean) => {
    this.setState({visible2: val});
  }
  handleDisplayToggle = () => {
    this.setState({visible2: !this.state.visible2});
  }
  handleDisplay3 = (val: boolean) => {
    this.setState({visible3: val});
  }
  onVisibleChange = (visible: boolean) => {
    console.log(visible);
    this.setState({visible3: visible});
  }
  handleDisplay4 = (val: boolean) => {
    this.setState({overlayVisible: val});
  }
  onVisibleChange2 = (visible: boolean) => {
    console.log(visible);
    this.setState({visible4: visible});
  }
  afterClose = () => {
    console.log('close');
  }
  render() {
    const { visible1, visible2, visible3, visible4, overlayVisible } = this.state;
    const popupTrigger = <button ref="popupContainer">Popup弹出浮层</button>;
    return (
      <div className="Block">
        <div className="title">Overlay 弹层</div>

        <div className="content">
          {/* 有遮罩的弹层 */}
          <button id="Overlay-container" onClick={this.handleDisplay1.bind(this, true)}>有遮罩</button>
          <Overlay 
            visible={visible1}
            hasMask={true}
            align="cc cc"
            safeNode="Overlay-container"
            onRequestClose={this.handleDisplay1.bind(this, false)}
          >
              <span className="overlay-demo">Hello World From Overlay!</span>
          </Overlay>

          {/* popup 弹层 */}
          <Popup trigger={popupTrigger} triggerType="click" afterClose={this.afterClose}>
            <div className="overlay-demo">Hello World From Overlay!</div>
          </Popup>

          {/* 跟随滚动: scroll-container需relative定位 */}
          <div className="scroll-container" ref="scroll">
            <Popup 
              trigger={<button>跟随</button>}
              container={() => this.refs.scroll}
              triggerType="click"
            >
              <p className="overlay-demo">Hello World From Overlay!</p>
            </Popup>
            <div style={{height: 300}}/>
          </div>

          {/* 弹出一个浮层 */}
          <button id="overlay-toggle" onClick={this.handleDisplayToggle}>Toggle visible</button>
          <Overlay
            visible={visible2}
            target="overlay-toggle"
            safeNode="overlay-toggle"
            onRequestClose={this.handleDisplay2.bind(this, false)}
          >
              <span className="overlay-demo">Hello World From Overlay!</span>
          </Overlay>

          {/* popup 受控 */}
          <Popup 
            trigger={<button>control popup</button>}
            visible={visible3}
            triggerType="click"
            onVisibleChange={this.onVisibleChange}
          >
              <div className="overlay-demo">
                <button onClick={this.handleDisplay3.bind(this, false)}>close</button>
                <p>Hello World From Overlay!</p>
              </div>
          </Popup>

          {/* 安全节点的使用 */}
          <Popup
            trigger={<button>safenode use</button>}
            triggerType="click"
            visible={visible4}
            safeNode="overlay-safenode"
            onVisibleChange={this.onVisibleChange2}
          >
            <div className="overlay-demo">
              <button onClick={this.handleDisplay4.bind(this, true)}>open overlay</button>
              <Overlay
                visible={overlayVisible}
                safeId="overlay-safenode"
                align="tl tl"
              >
                <div className="overlay-demo" onClick={this.handleDisplay4.bind(this, false)}>
                  click me will close this overlay, but popup won't close.
                </div>
              </Overlay>
              <p>Hello World From Popup!</p>
            </div>
          </Popup>

        </div>
      </div>
    );
  }
}

export default OverlayTest;