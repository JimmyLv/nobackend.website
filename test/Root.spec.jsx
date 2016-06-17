import React from 'react'
import { shallow } from 'enzyme'

import DevTools from '../src/react/containers/DevTools'
import Root from '../src/react/containers/Root.dev'

describe('Root component', () => {
  it('should render without problems', () => {
    const wrapper = shallow(<Root />)
    expect(wrapper.contains(<DevTools />)).to.be.equal(true)
  })
})