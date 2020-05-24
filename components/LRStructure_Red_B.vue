<template>
    <div class="lrs_Red px-3 py-1 grid grid-cols-3 font-semibold">
        <div class="col-span-1 text-n2">
            {{title}}
        </div>
        <div class="col-span-2 text-secondary text-right ">
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