<template>
    <div>
        <div class='flex '><input type="text" v-model='tempKeyword' /><button @click.stop='onSearch'>搜索</button></div>
    <div class="accordion" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <div class="shadow-md" v-for='(item, index) in list' :key='item.title+index'>
            <accordion :title="item.title">
                <p class="pb-5 text-white">{{item.content}}</p>
            </accordion>
        </div>
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
            loading: false,
            list: [
                { title: '标题一', content: 'Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.' }
            ]
        }
    },
    onCheck() {
        
    },
    methods: {
        fetchData() {
            this.loading = true
            this.page++
            // return this.$axios.get('', { params: { page:this.page, size: 10, keyword: this.keyword } })
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let temp = times(Math.abs(Math.random() * 10 + 1), stubObject)
                    this.loading = false
                    resolve({
                        code: 200, message: 'success', data: map(temp, o => ({ title: '标题一', content: 'Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.' }))
                    })
                }, 1000)
            }).then(res => {
                this.list = this.list.concat(res.data)
                return this.list
            })
        },
        onSearch() {
            if (this.keyword != this.tempKeyword) {
                this.page = 0;
                this.list = []
                this.keyword = this.tempKeyword
                this.fetchData()
            }
        },
        loadMore() {
            this.fetchData()
            // this.fetchData().then(res => {
            //     this.list = this.list.concat(res.data)
            //     console.info(res)
            // }, rej => {

            // })
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

