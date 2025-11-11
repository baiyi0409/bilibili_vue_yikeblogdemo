<template>
    <div class="index-view">
        <MenuBar />
        <router-view />
    </div>
</template>

<script setup lang="ts">
import MenuBar from '../components/bar/MenuBar.vue';
</script>

<style scoped lang="less">
 .index-view{
    padding-left: 200px;
 }
</style>
