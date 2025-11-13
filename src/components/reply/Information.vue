<template>
    <yk-drawer placement="right" :show="active" @close="close" :title="'私信'+count">
        <yk-space dir="vertical">
            <Reply v-for="item in comments" :key="item.id" :content="item" @delete="deleteComment" :isComment="false" />
        </yk-space>
        <template #footer>
            <yk-pagination :total="count" simple  @change="changePage"></yk-pagination>
        </template>
    </yk-drawer>
</template>

<script lang="ts" setup>
import { ref, toRefs,onMounted,getCurrentInstance } from 'vue';
import { type InformationProps } from './reply'
import { comment } from '../../mock/data';

const props = withDefaults(defineProps<InformationProps>(),{
    active:false,
    pageSize:8
})

const proxy:any = getCurrentInstance()?.proxy;
const emits=defineEmits(['close'])

const { active } = toRefs(props)
const close = () => {
    emits('close',false);
}

const count = ref<number>();
const comments = ref();
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

</style>