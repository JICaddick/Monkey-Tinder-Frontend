import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MonkeyNew from './MonkeyNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When MonkeyNew renders", () => {
    it("displays a form", () => {
        const monkeyNew = shallow(<MonkeyNew />)
        const formGroup = monkeyNew.find('FormGroup')
            expect(formGroup.length).toEqual(3)
        const formLabel = monkeyNew.find('Label')
            expect(formLabel.length).toEqual(3)
        const formInput = monkeyNew.find('Input')
            expect(formInput.length).toEqual(3)
    })
})