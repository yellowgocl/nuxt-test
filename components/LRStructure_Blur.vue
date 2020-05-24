<template>
    <div class="lrs_Blur flex py-1 text-primary">
        <div class="flex-shrink-0">
            {{title}}
        </div>
        <div class="flex-shrink">
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