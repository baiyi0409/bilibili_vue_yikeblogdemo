<template>
    <yk-space class="gather">
        <div v-for="(item,index) in gathers" :key="index" class="gather-list" :style="{ background: 'linear-gradient('+ item.bgColor +')'}">
            <yk-space dir="vertical" size="s">
                <yk-text type="secondary">{{item.name}}</yk-text>
                <yk-title :level="2" style="margin: 0;">{{item.total}}</yk-title>
            </yk-space>
            <yk-button v-if="index>0" size="xl" type="secondary" shape="square">
                <IconPlusOutline/>
            </yk-button>
        </div>
    </yk-space>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { overLink } from '../../utils/menu';
import { overview } from '../../mock/data';

const gathers = ref([...overLink]);

//模拟获取数据
const drawGatherData = () => {
  const data = overview.data;
  gathers.value[0].total = data.file;
  gathers.value[1].total = data.article;
  gathers.value[2].total = data.gallery;
  gathers.value[3].total = data.diary;
}

onMounted(()=>
{
    drawGatherData();
});
</script>

<style scoped lang="less">
.gather{
    width: 100%;

    &-list{
        width: 25%;
        background: #eee;
        display: flex;
        justify-content: space-between;
        padding: @space-xl;
        border-radius: @radius-m;
        align-items: center;
        &:first-child{
            .yk-title,.yk-text{
                color:@white;
            }
        }
    }
}
</style>