import * as React from 'react';
import { 
  Field, 
  Form, 
  Balloon, 
  Input, 
  Button, 
  Grid,
  NumberPicker,
  Checkbox,
  Range,
  TimePicker,
  DatePicker,
  Upload,
  Radio,
} from 'qnui';

const FormItem = Form.Item;
const { Row, Col } = Grid;
const RadioGroup = Radio.Group;

interface DropdownState {
  visible: boolean;
}

class FormTest extends React.Component<any, DropdownState> {
  field = new Field(this);

  state = {
    visible: false,
  }
  render() {
    const init = this.field.init;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14}
    }
    return (
      <div className="Block">
        <div className="title">Form 表单</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <Form field={this.field}>
              <FormItem
                label="密码："
                {...formItemLayout}
              >
                <Balloon trigger={<Input htmlType="password"/>} closable={false} align="r" triggerType="hover">
                  6-12 number & letter
                </Balloon>
              </FormItem>
              
              <FormItem
                label="数量："
                {...formItemLayout}
              >
                <NumberPicker min={0} max={10} {...init('numberPicker', {initValue: 3})}/>
                  <span>个</span>
              </FormItem>
              
              <FormItem
                label="年龄："
                {...formItemLayout}
              >
                <Range 
                  defaultValue={20} 
                  scales={[0, 100]} 
                  marks={[0, 20, 40, 60, 80, 100]} 
                  style={{marginTop: '20px'}}
                  {...init('range', {trigger: 'onProcess'})}/>
              </FormItem>
              
              <FormItem
                label="性别:"
                {...formItemLayout}
              >
                <RadioGroup>
                  <Radio value="male">男</Radio>
                  <Radio value="female">女</Radio>
                </RadioGroup>
              </FormItem>

              <FormItem
                label="出生日期:"
                {...formItemLayout}
              >
                <DatePicker {...init('date')}/>
              </FormItem>
              
              <FormItem
                  label="时间："
                  {...formItemLayout}
                  required>
                  <TimePicker {...init('time', {
                      getValueFromEvent: (time: any) => {
                          time = time && time.toLocaleTimeString('zh-CN', {
                              hour12: false
                          });
                          return time;
                      }
                  })}/>
              </FormItem>

              <FormItem
                label="头像："
                {...formItemLayout}
                >
                <Upload action="/upload.do" listType="text" onChange={() => {}}
                    {...init('upload', {
                        valueName: 'fileList',
                        getValueFromEvent: () => {}
                    })}
                    >
                    <Button type="primary" style={{margin: '0 0 10px'}}>上传文件</Button>
                </Upload>
            </FormItem>

              <FormItem
                className="next-form-text-align"
                label="是否同意："
                {...formItemLayout}
              >
                <Checkbox {...init('checkbox')}/>
            </FormItem>
              <Row>
                <Col offset="10">
                  <Button type="primary" onClick={() => {}}>确定</Button>
                </Col>
              </Row>
            </Form>
          </div>

          {/* 详情见文档 */}

        </div>
      </div>
    );
  }
}

export default FormTest;