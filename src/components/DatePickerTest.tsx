import * as React from 'react';
import { DatePicker } from 'qnui';

const { MonthPicker, YearPicker, RangePicker } = DatePicker;

class DatePickerTest extends React.Component<any, any> {
  render() {
    return (
      <div className="Block">
        <div className="title">DatePicker 日期选择框</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <h3>日期选择</h3>
            <DatePicker defaultValue={'2017年02月14日'} formater={['YYYY年MM月DD日']} />
            <h3>月份选择</h3>
            <MonthPicker defaultValue={'2017-02'} />
            <h3>年份选择</h3>
            <YearPicker defaultValue={'2017'} />
            <h3>区间选择</h3>
            <RangePicker defaultValue={['2017-02-14', '2017-03-24']} />
          </div>
          {/* 详情见文档 */}

        </div>
      </div>
    );
  }
}

export default DatePickerTest;