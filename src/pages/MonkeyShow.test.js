import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MonkeyShow from './MonkeyShow'

Enzyme.configure({adapter: new Adapter()})


describe("When MonkeyShow renders", () => {
    const monk = {
        monkey: {
            id: 1,
            name: "Mittens",
            age: 5,
            enjoys: "sunshine and warm spots",
            image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
    }

    let renderedMonkeyShow;

    beforeEach(() => {
        renderedMonkeyShow = shallow(<MonkeyShow monk={monk} />)
    })
    it ("displays a profile for the monkey", () => {
        const monkeyShowCard = renderedMonkeyShow.find("Card")
        expect(monkeyShowCard.length).toEqual(1)
    })
})