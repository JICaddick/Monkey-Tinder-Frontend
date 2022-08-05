import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
<<<<<<< HEAD
import MonkeyNew from './CatNew'

Enzyme.configure({adapter: new Adapter()})

describe("When CatNew renders", ()=> {
    it("displays a form", ()=> {
     const catNew = shallow(<CatNew />)
     const formGroup = catNew.find("FormGroup")
     expect(formGroup.length).toEqual(4)

     const formLabel = catNew.find("Label")
     expect(formLabel.length).toEqual(4)

     const formInput = catNew.find("Input")
     expect(formInput.length).toEqual(4)

=======
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
>>>>>>> d6d53784d775876dbe3ea62180cbeb816a2ef439
    })
})