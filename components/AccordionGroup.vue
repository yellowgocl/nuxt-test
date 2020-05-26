<template>
    <div class="card-group">
        <template v-for="(item, index) in data">
            <accordion :key='item+index' :title='item.title' :value='hasSelected(item)' @input="onChange(item, index, $event)">
                <component :is='item.view' :data='item'></component>
            </accordion>
        </template>
    </div>
</template>
<script>
import { remove, concat, reduce, indexOf } from 'lodash'
import Accordion from '~/components/Accordion'
// import { Item0, Item1, Item2 } from './accordionItem'
import d1Item1 from '@/components/d1/item1'
import d1Item2 from '@/components/d1/item2'
export default {
    components: {
        d1Item1, d1Item2, Accordion
    },
    props: {
        type: { type: Boolean, default: () => false },
        data: { type: Array, default: () => [] },
        value: { type: Array, default: () => [] }
    },
    mounted() {
    },
    data() {
        return {
            itemName: 'item-0',
            selected: -1
        }
    },
    methods: {
        hasSelected(item) {
            return indexOf(this.value, item) >= 0
        },
        onChange(item, index, event) {
            let temp = [];
            this.selected = event ? index : -1
            temp = event ? [this.data[index]] : []
            this.$emit('input', temp)
        }
    }
}
</script>
<style scoped>

</style>