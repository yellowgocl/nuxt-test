<template>
   <lrStructure_Blur class="text-sm"  title='合同：' content='专利管理培训合同'></lrStructure_Blur>
   
</template>
<script>
import lrStructure_Blur from '@/components/LRStructure_Blur'
export default {
     components:{lrStructure_Blur},
    data() {
        return {}
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>