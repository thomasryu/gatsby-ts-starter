import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { StatelessComponent } from '../StatelessComponent'

Enzyme.configure({ adapter: new Adapter() })

const createStatelessComponent = (title: string) => {
  const testTarget = shallow(<StatelessComponent title={title} />)
  return { testTarget }
}

it('renders the component as expected', () => {
  const setup = createStatelessComponent('Title')
  expect(setup.testTarget).toMatchSnapshot()
})
