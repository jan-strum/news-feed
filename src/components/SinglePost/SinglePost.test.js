import React from 'react'
import { SinglePost } from './'
import { shallow } from 'enzyme'

let wrapper

beforeEach(() => {
  const title = 'Great Post'
  const body = 'Nice body!'

  wrapper = shallow(<SinglePost title={title} body={body} />)
})

it('renders without crashing', () => {
  expect(wrapper)
})
