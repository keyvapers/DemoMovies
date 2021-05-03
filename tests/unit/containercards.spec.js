import { shallowMount } from '@vue/test-utils'
import ContainerCards from '@/components/ContainerCards.vue'


const wrapper = (data = {}) => {
    return shallowMount(ContainerCards, {
    propsData: data
  })
}

describe('Card.vue', () => {
  it('renders cards when search not match', () => {
    const wrapper = factory({search: 'example'})
    expect(wrapper.find('.card').exists()).toBeFalsy()
  })

  it('renders cards when search not match', () => {
    const wrapper = factory({search: 'My Neighbor Totoro'})
    expect(wrapper.find('.card').exists()).toBeTruthy()
  })
})