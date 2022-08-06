import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MonkeyEdit from './MonkeyEdit'

Enzyme.configure({adapter: new Adapter()})

describe("When MonkeyEdit renders", ()=> {
    it("displays a form", ()=> {
     const monkeyEdit = shallow(<MonkeyEdit />)
     const formGroup = monkeyEdit.find("FormGroup")
     expect(formGroup.length).toEqual(4)

     const formLabel = monkeyEdit.find("Label")
     expect(formLabel.length).toEqual(4)

     const formInput = monkeyEdit.find("Input")
     expect(formInput.length).toEqual(4)

    })
})