import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MonkeyIndex from './MonkeyIndex'

Enzyme.configure({adapter: new Adapter()})


describe("When MonkeyIndex renders", () => {
    const props = {
        monkey: [
            {
            id: 1,
            name: "Felipe",
            age: 3,
            enjoys: "sunshine and warm spots",
            image: "https://cdn.britannica.com/06/150806-050-6AE99C98/Proboscis-monkey.jpg?w=690&h=388&c=crop"
            }
        ]
    }

    let renderedMonkeyIndex;

    beforeEach(() => {
        renderedMonkeyIndex = shallow(<MonkeyIndex {...props} />)
    })
    it("displays a heading", () => {
        const indexHeader = renderedMonkeyIndex.find("h2") 
        // const MonkeyIndexTagText = MonkeyIndexTag.text()
        expect(indexHeader.length).toEqual(1)
        expect(indexHeader.text()).toEqual("Find your pri-MATE")
    })
    it ("displays a monkey", () => {
        const monkeyIndexCard = renderedMonkeyIndex.find("Card")
        expect(monkeyIndexCard.length).toEqual(1)
    })
})