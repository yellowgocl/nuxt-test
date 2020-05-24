<template>
    <div class="lrs_lb flex py-1 text-base">
        <div class="text-primary flex-shrink-0">
            {{title}}
        </div>
        <div class="flex-shrink  text-n2">
            {{content}}
        </div>
    </div>
</template>
<script>
 export default{
    props: {
        title: { type: String , default: () => '' },
        content: { type: String , default: () => '' }
    }
}
</script>