import React from 'react'
import renderer from 'react-test-renderer'

import{AddButton}  from '../components/atomic/Buttons'


describe('AddButton', () => {
  
  it('renders the html we want',  () => {
    const component = renderer.create(<AddButton event={()=>{}} />)
    console.log(component.toJSON());
    expect(component.toJSON()).toMatchSnapshot()
  })

})
