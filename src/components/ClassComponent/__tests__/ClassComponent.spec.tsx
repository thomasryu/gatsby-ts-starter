import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ClassComponent } from '../ClassComponent'

Enzyme.configure({ adapter: new Adapter() })

const createClassComponent = () => {
  const testTarget = shallow(<ClassComponent />)
  return { testTarget }
}

it('renders the component as expected', () => {
  const setup = createClassComponent()
  expect(setup.testTarget).toMatchSnapshot()
})
