import React from 'react'
import { shallow } from 'enzyme'
// import chai from 'chai'
// import chaiEnzyme from 'chai-enzyme'
//
// chai.use(chaiEnzyme()) // Note the invocation at the end

import ToolBar from '../../../src/react/components/Header/ToolBar'

describe('Header component', () => {
  it('should render ToolBar', () => {
    const wrapper = shallow(<ToolBar />)
    expect(wrapper.find('.tool-bar')).to.have.length(1)
    // expect(wrapper.find('span')).to.have.className('random-post')
  })
})