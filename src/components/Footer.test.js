import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Footer from "./Footer"

Enzyme.configure({ adapter: new Adapter() });


describe("When Footer renders", () => {
    it("displays a footer with text", () => {
        const renderedFooter = shallow(<Footer/>)
        const FooterTag = renderedFooter.find("footer")  
        const FooterTagText = FooterTag.text()

        expect(FooterTagText).toEqual("© Primative Dating Inc")
    })
})