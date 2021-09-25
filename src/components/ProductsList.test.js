import React from 'react';
import { mount } from 'enzyme'
import ProductsList from './ProductsList';

it('renders products list', () => {
  const products = [
    { code: "GR1", name: "Green Tea", price: "10.15 €" },
    { code: "GT1", name: "Black Tea", price: "10.15 €" },
    { code: "WT1", name: "Cup Of Wine", price: "100.15 €" },
  ]
  const component = mount(
    <ProductsList products={products} error="" isLoaded={true} addProductToBasket={() => (() => true)} />
  )
  expect(component).toMatchSnapshot()
});
