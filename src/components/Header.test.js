import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Header from "./Header"

Enzyme.configure({ adapter: new Adapter() });


describe("When Header renders", () => {
    let renderedHeader = shallow(<Header/>)
    beforeEach(()=>{
        renderedHeader = shallow(<Header />);
    })

    it("displays a header with text", () => {
        const HeaderTag = renderedHeader.find("header")  
        const HeaderTagText = HeaderTag.text()

        expect(HeaderTagText).toEqual("Monkey Tinder")
    })

    it("contain a className='monkeyhead'", () => {
        const renderedHeaderClassName = renderedHeader.find('.monkeyhead')
        expect(renderedHeaderClassName.length).toEqual(1)
    })
})

// STRETCH: additional test to check for a tag by it's class name to contain some tests