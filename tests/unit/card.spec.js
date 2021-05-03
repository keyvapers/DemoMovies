import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

const data = {
  title: 'example',
  description: 'example',
  director: 'example',
  producer:'example',
  id: 'example',
  runningTime: 'example',
  score: 'example',
  releaseDate: 'example',
}
const factory = (data = {}) => {
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

  it('renders props.runningTime when passed', () => {
    const wrapper = factory(data)
    expect(wrapper.find('.runningTime').text()).toMatch(data.runningTime)
  })
  
  it('renders props.score when passed', () => {
    const wrapper = factory(data)
    expect(wrapper.find('.score').text()).toMatch(data.score)
  })

  it('renders props.releaseDate when passed', () => {
    const wrapper = factory(data)
    expect(wrapper.find('.releaseDate').text()).toMatch(data.releaseDate)
  })

  it('renders props.title when not passed', () => {
    const wrapper = factory({id: '1'})
    expect(wrapper.find('.title').text()).toMatch('--')
  })

  it('renders props.description when not passed', () => {
    const wrapper = factory({id: '1'})
    expect(wrapper.find('.description').text()).toMatch('--')
  })

  it('renders props.runningTime when not passed', () => {
    const wrapper = factory({})
    expect(wrapper.find('.runningTime').text()).toMatch('--')
  })

  it('renders props.score when not passed', () => {
    const wrapper = factory({})
    expect(wrapper.find('.score').text()).toMatch('--')
  })

  it('renders props.releaseDate when not passed', () => {
    const wrapper = factory({})
    expect(wrapper.find('.releaseDate').text()).toMatch('--')
  })

  it('no renders button when not passed id', () => {
    const wrapper = factory({})
    expect(wrapper.find('.button').exists()).toBeFalsy()
  })
})