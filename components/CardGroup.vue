<template>
    <div class="card-group">
        <template v-for="(item, index) in data">
            <card v-if='!!type' :key='item+index' :data='item' :value="hasSelected(item)" @input="onChange(item, index, $event)"></card>
            <card v-else :key='item+index' :data='item' :value='selected == index' @input="onChange(item, index, $event)"></card>
        </template>
    </div>
</template>
<script>
import { remove, concat, reduce, indexOf } from 'lodash'
import Card from '~/components/Card'
export default {
    components: { Card },
    props: {
        type: { type: Boolean, default: () => false },
        data: { type: Array, default: () => [] },
        value: { type: Array, default: () => [] }
    },
    mounted() {
    },
    data() {
        return {
            selected: -1
        }
    },
    methods: {
        hasSelected(item) {
            return indexOf(this.value, item) >= 0
        },
        onChange(item, index, event) {
            let temp = [];
            if (!!this.type) {
                temp = concat(this.value)
                console.info( temp)
                remove(temp, n => n === item)
                event && temp.push(item)
                console.info(event, index, temp)
            } else {
                this.selected = event ? index : -1
                temp = event ? [this.data[index]] : []
            }
            this.$emit('input', temp)
        }
    }
}
</script>
<style scoped>

</style>