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
                name: "Mittens",
                age: 5,
                enjoys: "sunshine and warm spots",
                image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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