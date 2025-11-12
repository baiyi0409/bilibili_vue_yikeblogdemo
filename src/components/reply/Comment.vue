<template>
    <div class="card comment">
        <div class="card-title">
            <p class="card-title-name">评论</p>
        </div>
        <yk-scrollbar ref="scrollbar" height="490px">
            <yk-space dir="vertical">
                <Reply v-for="item in comments" :key="item.id" :content="item" />
            </yk-space>
        </yk-scrollbar>
        <div class="comment-pagination">
            <yk-pagination :total="count" size="m"></yk-pagination>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Reply from './reply.vue';
import { comment } from '../../mock/data';
import { type CommentProps } from './reply'; 

const props = withDefaults(defineProps<CommentProps>(),{
    pageSize:8,
})

//总数
const count = ref<number>(123);
//数据内容
const comments = ref();
//请求
type Request = {
    token?:string;
    pageSize:number;
    nowPage:number;
    count?:boolean;
}

const request:Request={
    pageSize:props.pageSize,
    nowPage:1,
    count:false
}

//获取数据
const drwCommentData=(e:boolean)=>{
    let data=comment.data;
    if(e){
        count.value = data.count;
    }
    //手动分页
    comments.value = data.list.slice(
        (request.nowPage - 1) * request.pageSize,
        request.nowPage * request.pageSize
    );
}

onMounted(()=>{
    drwCommentData(true);
})

</script>

<style lang="less" scoped>
.comment{
    position:relative;
    &-pagination{
        padding: @space-l @space-xl;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top:1px solid @line-color-s;
        width: 100%;
        left:0;
        background: @bg-color-l;
    }
}
</style>