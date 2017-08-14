import * as React from 'react';
import { Feedback, Button } from 'qnui';

const Toast = Feedback.toast;

const showSuccess = () => Toast.success('success 快捷调用');
const showPrompt = () => Toast.prompt('prompt 快捷调用');
const showError = () => Toast.error('error 快捷调用');
const showHelp = () => Toast.help('help 快捷调用');
const showLoading = () => Toast.loading('loading 快捷调用');

const show = () => {
    Toast.show({
        type: 'loading',
        content: '将在3秒后关闭或手动点击关闭按钮',
        afterClose: () => console.log('Closed the toast')
    });
};
const hide = () => Toast.hide();

interface DropdownState {
  visible: boolean;
}

class FeedbackTest extends React.Component<any, DropdownState> {
  state = {
    visible: false,
  }
  render() {
    return (
      <div className="Block">
        <div className="title">Feedback 反馈</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <Feedback title="title">
                Content Content Content Content
            </Feedback>
            <Feedback title="title large" type="prompt" size="large">
                Content Content Content Content
            </Feedback>
            <Feedback title="title" type="error">
                Content Content Content Content
            </Feedback>
          </div>

            {/* 弹窗反馈 */}
            <div className="line">
              <Button onClick={showSuccess}>success 快捷调用</Button>
              <Button onClick={showPrompt}>prompt 快捷调用</Button>
              <Button onClick={showError}>error 快捷调用</Button>
              <Button onClick={showHelp}>help 快捷调用</Button>
              <Button onClick={showLoading}>loading 快捷调用</Button>
            </div>

            {/* 显隐的切换*/}
            <div className="line">
              <Button onClick={show}>显示</Button>
              <Button onClick={hide}>关闭</Button>
            </div>

          {/* 详情见文档 */}

        </div>
      </div>
    );
  }
}

export default FeedbackTest;