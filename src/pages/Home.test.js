import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home Renders", () => {
    let renderedHome
    beforeEach(() => {
        renderedHome = shallow(<Home />)
    })
    it("displays text", () => {
        const homeWelcomeTag = renderedHome.find("h1")
        const homeWelcomeTagText = homeWelcomeTag.text()
        expect(homeWelcomeTagText).toEqual("Welcome to Monkey Tinder")
    })
    it("displays an image on home page", ()=>{
        const homeImage = renderedHome.find("img")
        expect(homeImage.length).toEqual(1)
    })
})