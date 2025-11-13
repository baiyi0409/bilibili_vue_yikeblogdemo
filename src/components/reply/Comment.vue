<template>
    <div class="card comment">
        <div class="card-title">
            <p class="card-title-name">评论 {{count}}</p>
        </div>
        <yk-scrollbar ref="scrollbar" :height="height" style="padding:0 24px;">
            <yk-space dir="vertical">
                <Reply v-for="item in comments" :key="item.id" :content="item" @delete="deleteComment" />
            </yk-space>
        </yk-scrollbar>
        <div class="comment-pagination">
            <yk-pagination :total="count" size="m" @change="changePage"></yk-pagination>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref , getCurrentInstance} from 'vue';
import Reply from './reply.vue';
import { comment } from '../../mock/data';
import { type CommentProps } from './reply'; 
import message from '@yike-design/ui/es/components/message/src/utils';

const proxy:any = getCurrentInstance()?.proxy;

const props = withDefaults(defineProps<CommentProps>(),{
    pageSize:8,
    height:"514px"
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
}

//获取数据
const drwCommentData=()=>{
    let data=comment.data;
    count.value = data.count;
    //手动分页
    comments.value = data.list.slice(
        (request.nowPage - 1) * request.pageSize,
        request.nowPage * request.pageSize
    );
}

//翻页
const changePage = (e:number) =>{
    request.nowPage = e;
    drwCommentData();
}

//删除评论
const deleteComment = (e:number) =>{
    //获取除需要删除外的数据
    comments.value = comments.value.filter((obj:any)=>{
        return obj.id !== e 
    })
    proxy.$message({ type:'primary' , message:'删除成功' })
}

onMounted(()=>{
    drwCommentData();
})

</script>

<style lang="less" scoped>
.comment{
    padding: @space-xl 0 0;
    position:relative;
    .card-title-name{
        padding: 0 @space-xl;
        font-weight: bold;
    }
    &-pagination{
        padding: @space-l @space-xl;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top:1px solid @line-color-s;
        width: 100%;
        left:0;
    }
}
</style>