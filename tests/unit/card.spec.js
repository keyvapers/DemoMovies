import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

const data = {
  title: 'example',
  description: 'example',
  director: 'example',
  producer:'example',
  id: 'example'
}
const wrapper = (data = {}) => {
    return shallowMount(Card, {
    propsData: data
  })
}

describe('Card.vue', () => {
  it('renders props.title when passed', () => {
    const wrapper = factory(data)
    expect(wrapper.find('.title').text()).toMatch(data.title)
  })

  it('renders props.description when passed', () => {
    const wrapper = factory(data)
    expect(wrapper.find('.description').text()).toMatch(data.description)
  })

  it('renders props.director when passed', () => {
    const wrapper = factory(data)
    expect(wrapper.find('.director').text()).toMatch(data.director)
  })

  it('renders props.producer when passed', () => {
    const wrapper = factory(data)
    expect(wrapper.find('.producer').text()).toMatch(data.producer)
  })

  it('renders props.title when not passed', () => {
    const wrapper = factory({})
    expect(wrapper.find('.title').text()).toMatch('--')
  })

  it('renders props.description when not passed', () => {
    const wrapper = factory({})
    expect(wrapper.find('.description').text()).toMatch('--')
  })

  it('renders props.director when not passed', () => {
    const wrapper = factory({})
    expect(wrapper.find('.director').text()).toMatch('--')
  })

  it('renders props.producer when not passed', () => {
    const wrapper = factory({})
    expect(wrapper.find('.producer').text()).toMatch('--')
  })

  it('no renders button when not passed id', () => {
    const wrapper = factory({})
    expect(wrapper.find('.button').exists()).toBeFalsy()
  })
})