import { shallowMount } from '@vue/test-utils'
import Breadcrumb from '@/components/Breadcrumb.vue'

describe('Breadcrumb.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'movie title'
    const wrapper = shallowMount(Breadcrumb, {
      propsData: { title }
    })
    expect(wrapper.find('.title').text()).toMatch(title)
  })

  it('no renders title when props.title not passed', () => {
    const wrapper = shallowMount(Breadcrumb, {
      propsData: { }
    })
    expect(wrapper.find('.title').exists()).toBeFalsy()
  })
})