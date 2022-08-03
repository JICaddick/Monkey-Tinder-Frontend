import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Header from "./Header"

Enzyme.configure({ adapter: new Adapter() });


describe("When Header renders", () => {
    it("displays a header with text", () => {
        const renderedHeader = shallow(<Header/>)
        const HeaderTag = renderedHeader.find("header")  
        const HeaderTagText = HeaderTag.text()

        expect(HeaderTagText).toEqual("Welcome to Monkey Tinder")
    })
})