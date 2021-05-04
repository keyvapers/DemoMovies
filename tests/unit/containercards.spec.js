import { shallowMount } from '@vue/test-utils'
import ContainerCards from '@/components/ContainerCards.vue'
import Card from '@/components/Card.vue'

const data = [
  {
    id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
    title: 'My Neighbor Totoro',
    original_title: 'となりのトトロ',
    original_title_romanised: 'Tonari no Totoro',
    description: 'Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.',
    director: 'Hayao Miyazaki',
    producer: 'Hayao Miyazaki',
    release_date: '1988',
    running_time: '86',
    rt_score: '93'
  }
]

const factory = (data = {}) => {
  return shallowMount(ContainerCards, {
    propsData: data
  })
}

describe('ContainerCards.vue', () => {
  it('renders cards when search not match', () => {
    const wrapper = factory({search: 'example', movies:data})
    wrapper.vm.$nextTick(() => {
      const card = wrapper.findComponent(Card)
      expect(card.exists()).toBe(false)
    })
  })

  it('renders cards when search match', () => {
    const wrapper = factory({search: 'My Neighbor Totoro', movies:data})
    wrapper.vm.$nextTick(() => {
      const card = wrapper.findComponent(Card)
      expect(card.exists()).toBe(true)
    })
  })
})