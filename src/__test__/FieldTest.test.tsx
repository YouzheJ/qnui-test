import * as React from 'react';
import Field from '../components/FieldTest';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// 快照测试
test('renders correctly', () => {
  const component = renderer.create(<Field/>);

  let tree: any = component.toJSON();
  expect(tree).toMatchSnapshot();
})

// 渲染测试
//   模拟Props
const setup = () => {
  const props = {
    onSelectChange: jest.fn()
  }
  const wrapper = shallow(<Field {...props} />)
  return {
    props,
    wrapper,
  }
}
//  测试
describe('Field', () => {
  const {wrapper, props } = setup();
  //渲染测试
  it('Field Component should be render', () => {
    expect(wrapper.find('#select').exists());
  });

  // 
  it('when the select change, onChange() should be called', () => {
    const mockEvent = {
      target: {
        value: 'hhh'
      }
    }

    wrapper.find('#select').simulate('change', mockEvent);
    expect(props.onSelectChange).toBeCalled();
  })
});

// http://blog.csdn.net/qq673318522/article/details/70857678