import * as React from 'react';
import { 
  Field, 
  Form, 
  Select, 
  Button, 
  Radio, 
  DatePicker, 
  NumberPicker 
} from 'qnui';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;


class FieldTest extends React.Component<any, any> {
  field = new Field(this);
  handleReset(e: any) {
    e.preventDefault();
    this.field.reset();
  }
  handleSubmit(e: any) {
    e.preventDefault();
    this.field.validate((errors: object, values: any) => {
      if(errors) {
        console.log('Errors in form!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    })
  }
  checkBirthday(rules: any, value: any, callback: any) {
    console.log(value);
    if(value && value.getTime() >= Date.now()) {
      callback(new Error('你不可能出生在未来吧!'));
    }else {
      callback();
    }
  }
  checkPrime(rule: object, value: any, callback: any) {
    if(value !== 11) {
      callback(new Error('8~12之间的质数明明是11啊！'));
    }else {
      callback();
    }
  }
  render() {
    const init = this.field.init;
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      }
    }
    return (
      <div className="Block">
        <div className="title">Field 表单通用工具</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <Form field={this.field}>
              <FormItem
                label="国籍："
                {...formItemLayout}
              >
                <Select placeholder="请选择国家" style={{width: 200}}
                  {...init('select', {
                    rules: [
                      {required: true, message: '请选择您的国家'}
                    ]
                  })}>
                    <li value="china">中国</li>
                    <li value="usa">美国</li>
                    <li value="japan">日本</li>
                    <li value="korean">韩国</li>
                    <li value="Thailand">泰国</li>
                  </Select>
              </FormItem>

              <FormItem
                  label="喜欢的颜色："
                  {...formItemLayout}
              >
                  <Select multiple placeholder="请选择颜色" style={{width: 200}}
                    {...init('multiSelect', {
                      rules: [
                        {required: true, message: '请选择您喜欢的颜色'}
                      ]
                    })}
                  >
                    <li value="red">红色</li>
                    <li value="orange">橙色</li>
                    <li value="yellow">黄色</li>
                    <li value="green">绿色</li>
                    <li value="blue">蓝色</li>
                  </Select>
              </FormItem>

              <FormItem
                    label="性别："
                    hasFeedback
                    {...formItemLayout}
              >
                    <RadioGroup
                      {...init('radio', {
                        rules: [
                          {required: true, message: '请选择您的性别'}
                        ]
                      })}
                    >
                      <Radio value="male">男</Radio>
                      <Radio value="female">女</Radio>
                    </RadioGroup>
              </FormItem>

              <FormItem
                      label="生日："
                      {...formItemLayout}
              >
                      <DatePicker
                        {...init('birthday', {
                          rules: [
                            {required: true, message: '您的生日是什么时候？'},
                            {validator: this.checkBirthday}
                          ]
                        })}
                      />
              </FormItem>

              <FormItem
                        label="8~12间的质数"
                        {...formItemLayout}
              >
                        <NumberPicker min={8} max={12}
                          {...init('primeNumber', {
                            rules: [
                              {validator: this.checkPrime}
                            ]
                          })}/>
              </FormItem>

              <FormItem
                          wrapperCol={{span: 16, offset: 6}}
              >
                          <Button type="primary" onClick={this.handleSubmit.bind(this)}>确定</Button>
                          &nbsp;&nbsp;&nbsp;
                          <Button onClick={this.handleReset.bind(this)}>重置</Button>
              </FormItem>
            </Form>
          </div>

          {/* 详情见文档 */}

        </div>
      </div>
    );
  }
}

export default FieldTest;