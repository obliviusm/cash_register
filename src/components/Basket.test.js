import React from 'react';
import { mount } from 'enzyme'
import Basket from './Basket';

it('renders basket', () => {
  const basket = {
    productCodes: ["GR1", "FS1"],
    price: '10.15 €'
  }
  const component = mount(<Basket basket={basket} error="" isLoaded={true} />)
  expect(component).toMatchSnapshot()
});
