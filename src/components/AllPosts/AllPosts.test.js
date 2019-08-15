import React from 'react'
import { AllPosts } from './'
import { Loading } from '../Loading'
import { shallow } from 'enzyme'

let wrapper

beforeEach(() => {
  wrapper = shallow(<AllPosts />)
})

it('renders without crashing', () => {
  expect(wrapper)
})

it('initially renders <Loading />', () => {
  expect(wrapper.find(Loading)).toHaveLength(1)
})
