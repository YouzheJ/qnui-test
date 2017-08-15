import * as React from 'react';
import {  } from 'qnui';

interface DropdownState {
  visible: boolean;
}

class FieldTest extends React.Component<any, DropdownState> {
  state = {
    visible: false,
  }
  render() {
    return (
      <div className="Block">
        <div className="title">Field 表单通用工具</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            见文档
          </div>

          {/* 详情见文档 */}

        </div>
      </div>
    );
  }
}

export default FieldTest;