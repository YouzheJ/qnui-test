import * as React from 'react';
import Field from '../components/FieldTest';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('FieldTest input', () => {
  const component = renderer.create(
    <Field/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
