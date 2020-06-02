<template>
    <div>
        <!-- <div class='flex '><input type="text" v-model='tempKeyword' /><button @click.stop='onSearch'>搜索</button></div> -->
        <div class="accordion" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class="shadow-md" v-for='(item) in list' :key='item.scontractNo'>
                <div class='w-auto bg-primary h-12 m-4'></div>
            </div>
            <div v-if='isEnd'>已经没有数据了</div>
        </div>
    </div>
</template>
<script>
import Accordion from '@/components/Accordion'
import { stubObject, times, map } from 'lodash'
export default {
    components: {
        Accordion
    },
    data() {
        return {
            keyword: '',
            tempKeyword: '',
            page: 0,
            isEnd: false,
            loading: false,
            list: []
        }
    },
    mounted() {
        // this.fetchData()
    },
    methods: {
        fetchData() {
            if (this.loading || this.isEnd) {
                return
            }
            this.page++
            this.loading = true
            this.$nuxt.$loading.start()
            this.$api.getContract({ page: this.page }).then(res => {
                this.loading = false
                this.$nuxt.$loading.finish()
                this.list = this.list.concat(res.rows || [])
                this.isEnd = this.list.length >= res.total
            })
        },
        loadMore() {
            this.fetchData()
        }
    }
}
</script>
<style scoped>
.tab-content{
    max-height: 0;
}
.tab input:checked ~ .tab-content {
    max-height: 100vh;
}
 .tab input:checked + label{
         /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
         font-size: 1.25rem; /*.text-xl*/
         padding: 1.25rem; /*.p-5*/
         border-left-width: 2px; /*.border-l-2*/
         border-color: #6574cd; /*.border-indigo*/
         background-color: #f8fafc; /*.bg-gray-100 */
         color: #6574cd; /*.text-indigo*/
         }
         /* Icon */
         .tab label::after {
         float:right;
         right: 0;
         top: 0;
         display: block;
         width: 1.5em;
         height: 1.5em;
         line-height: 1.5;
         font-size: 1.25rem;
         text-align: center;
         -webkit-transition: all .35s;
         -o-transition: all .35s;
         transition: all .35s;
         }
        .tab input[type=checkbox] + label::after {
         content: "+";
         font-weight:bold; /*.font-bold*/
         border-width: 1px; /*.border*/
         border-radius: 9999px; /*.rounded-full */
         border-color: #b8c2cc; /*.border-grey*/
         }
</style>

