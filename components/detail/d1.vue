<template>
    <div class="d1">
    <accordionGroup :data='accordions' v-model="selected"></accordionGroup>
    </div>
</template>
<script>
import { map  } from 'lodash'
const titlemap = [
    { title: '标题1', view: 'd1Item1' },
    { title: '标题2', view: 'd1Item2' },
    
]
import accordionGroup from '@/components/AccordionGroup'
export default {
    components: { accordionGroup },
    data() {
        return {
            selected: [],
            accordions: []
        }
    },
    props: {
        id: { type: [String, Number], required: true }
    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            // let api1 = await this.$axios.$get('/api1')
            // let api2 = await this.$axios.$get('/api2')
            // let api3 = await this.$axios.$get('/api3')
            // let values = [api1, api2, api3]
            Promise.all(
                [{ name: '评标审核-基本信息' },
                { name: '评标审核-供应商投标' }],
            ).then(values => {
                values = map(values, (v, k) => {
                    v.title = titlemap[k].title
                    v.view =  titlemap[k].view
                    return v
                })
                this.accordions = values
                this.selected = [this.accordions[0]]
            })
        }
    }
}
</script>