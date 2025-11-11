<template>
    <div class="head-bar">
        <!-- 标题 -->
        <yk-space align="center" size="12" style="cursor: pointer;" @click="backHome">
            <!-- logo -->
            <img src="" class="logo" />
            <span class="name">逸刻博客后台</span>
        </yk-space>
        <!-- 右侧操作区 -->
        <yk-space align="center" size="xl">
            <!-- 消息 -->
            <yk-badge is-dot>
                <IconMailOutline style="font-size: 20px;" />
            </yk-badge>
            <!-- 头像 -->
            <yk-avatar />
            <!-- 主题模式 -->
            <div>
                <yk-theme/>
            </div>
            <!-- 退出按钮 -->
            <yk-button>退出</yk-button>
        </yk-space>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
//返回总览
const backHome = () =>{
    router.push('/overview');
}

</script>

<style scoped lang="less">

.head-bar{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 64px;
    background-color: @bg-color-l;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 @space-xl;
    
    .logo{
        height: 24px;
        width: 38px;
    }
    .name{
        font-size: 20px;
        font-weight: 600;
    }
}
</style>