import * as React from 'react';
import { Dialog, Button } from 'qnui';

interface DialogState {
  footerAlign: string;
  visible: boolean;
}

class DialogTest extends React.Component<any, DialogState> {
  state = {
    footerAlign: 'left',
    visible: false,
  }
  map = ['left', 'right', 'center'];
  onClose = () => {
    this.setState({visible: false});
  }
  onClick = () => {
    let { footerAlign } = this.state,
      index = this.map.indexOf(footerAlign),
      next = index + 1;

      if(next >= this.map.length) {
        next = 0;
      }
      this.setState({footerAlign: this.map[next]});
  }
  onOpen = () => {
    this.setState({visible: true});
  }
  render() {
    return (
      <div className="Block">
        <div className="title">Dialog 弹窗</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <Button onClick={this.onOpen} type="primary">Open dialog</Button>
            <Dialog visible={this.state.visible}
                  onOk={this.onClose}
                  onCancel={this.onClose}
                  onClose={this.onClose}
                  title="Welcome to Alibaba.com"
                  footerAlign={this.state.footerAlign}
              >
              <Button onClick={this.onClick} type="primary">Modify footerAlign</Button>

              <h3>Your one-stop communication tool!</h3>
              <ul>
                  <li>View messages from buyers & suppliers</li>
                  <li>Negotiate the details of your order</li>
              </ul>
          </Dialog>
          </div>
          {/* 详情见文档 */}

        </div>
      </div>
    );
  }
}

export default DialogTest;