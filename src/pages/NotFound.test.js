import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({adapter: new Adapter()})

describe("When NotFound renders", () => {
    it("displays an h2 with text", () => {
        const renderedNotFound = shallow(<NotFound/>)
        const NotFoundTag = renderedNotFound.find("h2")  
        const NotFoundTagText = NotFoundTag.text()

        expect(NotFoundTagText).toEqual("Quit monkeying around, there's nothing here!!!")
    })
})