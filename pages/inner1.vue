<template>
  <div class="accordion">
        <div class="m-4">
            <accordion title="标题1">
              <div class="list_name">
                电脑端查看效果更佳
              </div>
                 <attachment  v-for="(item) in attachments" :key="item.title" :data='item'></attachment>
            </accordion>
        </div>
        <div class="m-4">
            <accordion title="标题2">
              <div>
                 <lrStructure_Blur class="text-sm"  title='合同：' content='专利管理培训合同'></lrStructure_Blur>
                 <lrStructure_lb  v-for="(item) in lrStructure0s" :key="item.name" :title='item.name' :content='item.content'></lrStructure_lb>
              </div>
            </accordion>
        </div>
        <div class="m-4">
            <accordion title="标题2">
              <div class="gray_box">
                  <div class="center_title">
                    付款金额
                  </div>
                  <div class="py-2">
                     <lrStructure_Red  v-for="(item) in lrStructure1s" :key="item.name" :title='item.name' :content='item.content'></lrStructure_Red>
                  </div>
                  <lrStructure_Red_B title='合计金额：' content='¥304.00'></lrStructure_Red_B>
                   <lrStructure_Gray class=""  v-for="(item) in lrStructure0s" :key="item.name" :title='item.name' :content='item.content'></lrStructure_Gray>
              </div>
              
            </accordion>
        </div>
    </div>
</template>

<script>
import accordion from '@/components/Accordion'
import attachment from '@/components/Attachment'
import lrStructure_lb from '@/components/LRStructure_LB'
import lrStructure_Gray from '@/components/LRStructure_Gray'
import lrStructure_Blur from '@/components/LRStructure_Blur'
import lrStructure_Red from '@/components/LRStructure_Red'
import lrStructure_Red_B from '@/components/LRStructure_Red_B'
export default {
  components:{
    accordion,
    attachment,
    lrStructure_lb,
    lrStructure_Gray,
    lrStructure_Blur,
    lrStructure_Red,
    lrStructure_Red_B
  },
  data() {
    return {
       attachments: [
        {name: '2019年⽹络技术维护服务0.pdf' ,  date: '2020-05-10 09:00', url:'static/2.pdf'},
        {name: '2019年⽹络技术维护服务1.pdf' ,  date: '2020-05-10 09:00', url:'static/5.pdf' },
        {name: '2019年⽹络技术维护服务2.pdf' ,  date: '2020-05-10 09:00', url:'static/2.pdf' },
        {name: '2019年⽹络技术维护服务3.pdf' ,  date: '2020-05-10 09:00', url:'static/5.pdf' },
        {name: '2019年⽹络技术维护服务4.pdf' ,  date: '2020-05-10 09:00', url:'static/2.pdf' },
        {name: '2019年⽹络技术维护服务5.pdf' ,  date: '2020-05-10 09:00', url:'static/5.pdf' },
      ],
       lrStructure0s: [
        {name: '合同：' ,  content: '专利管理培训合同'},
        {name: '预算总⾦额：' ,  content: '专利管理培训合同' },
        {name: '合同总⾦额：' ,  content: '专利管理培训合同' },
        {name: '供应商名称：' ,  content: '专利管理培训合同' },
        {name: 'CD率：' ,  content: '本合同内容是研究开发中⼼专利管理培训项⽬，此培训属于专业培训内容，项⽬部⻔指定⼴州'},
        {name: '采购员：' ,  content: '专利管理培训合同'},
      ],
       lrStructure1s: [
        {name: '不含税' ,  content: '¥350300.00'},
        {name: '含税：' ,  content: '¥350300.00' },
        {name: '税金：' ,  content: '¥350300.00' },
      ]
    }
  },
  onCheck(){

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
