import React from 'react'
import renderer from 'react-test-renderer'

import TopNav  from '../components/Header/TopNav'


describe('TopNav', () => {
  
  it('renders the html we want',  () => {
    const component = renderer.create(<TopNav />)
    expect(component.toJSON()).toMatchSnapshot()
  })

})
