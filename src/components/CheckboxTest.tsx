import * as React from 'react';
import { Checkbox } from 'qnui';

interface ButtonState {
  value: string[];
}

class CheckboxTest extends React.Component<any, ButtonState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ['orange'],
    }
  }
  onChange = (selectedItems: string[]) => {
    console.log('onChange callback', selectedItems);
    this.setState({value: selectedItems});
  }
  render() {
    const { Group: CheckboxGroup } = Checkbox;
    const List = [
      {
        value: 'apple',
        label: '苹果',
      },{
        value: 'pear',
        label: '梨',
      },{
        value: 'orange',
        label: '橙子',
      }
    ];
    return (
      <div className="Block">
        <div className="title">Checkbox 复选按钮</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <h6>Without Label</h6>
              <Checkbox />&nbsp;
              <Checkbox defaultChecked />&nbsp;
              <Checkbox defaultIndeterminate />&nbsp;
              <Checkbox disabled />&nbsp;
              <Checkbox disabled checked />&nbsp;
              <Checkbox checked />
              <br />
              <h6>With Label</h6>
              <Checkbox>香蕉</Checkbox>
              <Checkbox id="apple" /><label htmlFor="apple" className="next-checkbox-label">苹果</label>
              <label>
                  <Checkbox id="pear" />
                  <span className="next-checkbox-label">雪梨</span>
              </label>
          </div>

          {/* 受限组件 */}
          <div className="line">
            <CheckboxGroup value={this.state.value} dataSource={List} onChange={this.onChange}/>
          </div>

        </div>
      </div>
    );
  }
}

export default CheckboxTest;