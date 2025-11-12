<template>
    <yk-space dir="vertical" size="xl">
        <div>总览</div>
        <!-- 计数区 -->
        <Gather/>

        <yk-space style="width: 100%;">
            <!-- 图表区 -->
            <Datas style="width: 50%;" />
            <!-- 评论区 -->
            <Comment style="width: 50%;" />
        </yk-space>
    </yk-space>
</template>

<script setup lang="ts">
import Gather from '../components/overview/Gather.vue'
import Datas from '../components/overview/Datas.vue'
import { Comment } from '../components/reply'
</script>

<style scoped lang="less">
.report{
    background-color: aquamarine;
}
</style>
