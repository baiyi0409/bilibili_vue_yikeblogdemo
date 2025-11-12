<template>
    <yk-space size="m" class="reply">
        <yk-avatar img-url="" />
        <yk-space dir="vertical" size="s" class="reply-main">
            <div class="reply-name">
                <yk-text strong>{{ content?.user.name }}</yk-text>
                <yk-text type="third" style="font-size: 12px;">{{ content?.moment}}</yk-text>
            </div>
            <yk-text type="secondary">{{ content?.comment }}</yk-text>
            <yk-space size="s" align="center">
                <yk-tag type="primary">{{ content?.article?.title }}</yk-tag>
                <yk-text type="danger" v-show="content?.complaint! >0">举报 {{ content?.complaint }}</yk-text>
            </yk-space>
        </yk-space>

    </yk-space>
</template>

<script lang="ts" setup>
import { type ReplyProps } from './reply';

const props = withDefaults(defineProps<ReplyProps>(),{
    isComment:true
})

</script>

<style lang="less" scoped>
.reply{
    &-main{
        border-bottom:1px solid @line-color-s;
        width:100%;
        padding-bottom: @space-l;
    }
    &-name{
        display: flex;
        flex-direction: column;
    }
}
</style>