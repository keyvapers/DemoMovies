import { shallowMount } from '@vue/test-utils'
import CardComplete from '@/components/CardComplete.vue'

const data = {
  title: 'example',
  description: 'example',
  director: 'example',
  producer:'example',
  id: 'example',
  runningTime: 'example',
  score: 'example',
  releaseDate: 'example',
  originalTitle: 'example',
  titleRomanised: 'example',
}
const factory = (data = {}) => {
    return shallowMount(CardComplete, {
    propsData: data
  })
}

describe('CardComplete.vue', () => {
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

  it('renders props.originalTitle when passed', () => {
    const wrapper = factory(data)
    expect(wrapper.find('.originalTitle').text()).toMatch(data.originalTitle)
  })

  it('renders props.titleRomanised when passed', () => {
    const wrapper = factory(data)
    expect(wrapper.find('.titleRomanised').text()).toMatch(data.titleRomanised)
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

  it('renders props.originalTitle when not passed', () => {
    const wrapper = factory({})
    expect(wrapper.find('.originalTitle').text()).toMatch('--')
  })

  it('renders props.titleRomanised when not passed', () => {
    const wrapper = factory({})
    expect(wrapper.find('.titleRomanised').text()).toMatch('--')
  })
})