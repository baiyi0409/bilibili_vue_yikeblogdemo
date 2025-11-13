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
        <div>
            <IconDeleteOutline class="reply-main-del" @click="deleteReply(props.content!.id)" />
         </div>
    </yk-space>
</template>

<script lang="ts" setup>
import { EmitFlags } from 'typescript';
import { type ReplyProps } from './reply';

const props = withDefaults(defineProps<ReplyProps>(),{
    isComment:true
})

const emits = defineEmits(["delete"])
//删除
const deleteReply = (e:number)=>{
    emits("delete",e)
}

</script>

<style lang="less" scoped>
.reply{
    width: 100%;
    &-main{
        flex: 1;
        border-bottom:1px solid @line-color-s;
        padding-bottom: @space-l;
        position: relative;
        &-del{
            position: absolute;
            right: 0;
            top: 0;
            width: 16px;
            height: 16px;
            cursor: pointer;
            color:@font-color-s;
            display: none;
        }
    }
    &-name{
        display: flex;
        flex-direction: column;
    }
    &:hover{
        .reply-main-del{
            display: block;
        }
    }
}
</style>