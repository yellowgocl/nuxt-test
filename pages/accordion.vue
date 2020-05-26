<template>
    <div class="accordion">
        <div class="shadow-md">
            <accordion v-for='item in items' :key='item.id' :title="item.title">
                <div class="content" v-html="item.content"></div>
            </accordion>
        </div>
    </div>
</template>
<script>
import accordion from '@/components/accordion'
export default {
    components: {
        accordion
    },
    data() {
        return {
            items: [
                { title: '条目一', id: 1, content: `<div class='text-white'>我是条目一的<span class='text-green-400'>内容</span></div>` },
                { title: '条目二', id: 2, content: `<div class='text-white'>我是条目二的<span class='text-red-400'>内容</span></div>` }
            ]
        }
    },
    onCheck() {

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

