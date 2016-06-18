import React from 'react'
import { mount } from 'enzyme'
// import chai from 'chai'
// import chaiEnzyme from 'chai-enzyme'
//
// chai.use(chaiEnzyme()) // Note the invocation at the end

import MenuList from '../../../src/react/components/Header/MenuList'

describe('Header component', () => {
  it('should render MenuList', () => {
    const wrapper = mount(<MenuList menuList={[{ name: 'pathname', link: 'pathname' }]} selectedUrl={'pathname'}/>)
    expect(wrapper.find('.menu')).to.have.length(1)
    // expect(wrapper.find('span')).to.have.className('random-post')
  })
})