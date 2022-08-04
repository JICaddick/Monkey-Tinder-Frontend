import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MonkeyShow from './MonkeyShow'

Enzyme.configure({adapter: new Adapter()})


describe("When MonkeyShow renders", () => {
    const monk = {
        monkey: {
      id: 1,
      name: "Felipe",
      age: 3,
      enjoys: "sunshine and warm spots",
      image: "https://cdn.britannica.com/06/150806-050-6AE99C98/Proboscis-monkey.jpg?w=690&h=388&c=crop"
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