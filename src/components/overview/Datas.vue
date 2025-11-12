<template>
    <yk-space dir="vertical" size="xl">
        <!-- 访问量 -->
        <div class="data-card">
            <div class="data-card-title">
                <p class="data-card-title-name">访问量</p>
                <yk-radio-group v-model="visitRadio" type="button" :solid="true" @change="getVisitData">
                    <yk-radio value="week">近一周</yk-radio>
                    <yk-radio value="month">近一月</yk-radio>
                </yk-radio-group>
            </div>
            <Line :data="visitData" chartHeight="208px" />
        </div>
        <!-- 数据监测 -->
        <div class="data-card">
            <div class="data-card-title">
                <p class="data-card-title-name">数据监测</p>
                <yk-radio-group v-model="checkRadio" type="button" :solid="true" @change="getSurveyDataHandler">
                    <yk-radio value="week">近一周</yk-radio>
                    <yk-radio value="month">近一月</yk-radio>
                </yk-radio-group>
            </div>
            <div style="display: flex;">
                <Pie :data="surveyData.device" chartHeight="208px" title="设备总数"/>
                <Pie :data="surveyData.website" chartHeight="208px" title="访问总数"/>
            </div>
        </div>
    </yk-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Line, Pie } from '../echarts/index';
import { visit,survey,getSurveyData } from '../../mock/data';

const visitRadio = ref('week')
const checkRadio = ref('week')

const visitData = ref(visit.data);
const getVisitData = (e:string)=>{
    let data = visit.data;
    //mock了30个数据，如果是月就取全部，周就取前7个
    if(e==='week'){
        data = data.slice(0,7);
    }
    visitData.value = data;
}

const surveyData = ref({
  device: [],
  website: []
});
// 初始化
const initSurveyData = () => {
  const res = getSurveyData(); // 每次调用都生成新 mock 数据
  surveyData.value = {
    device: [...res.data.device],
    website: [...res.data.website]
  };
};
// 切换时重新获取
const getSurveyDataHandler = () => {
  initSurveyData(); // 重新生成新数据
};

onMounted(()=>{
    getVisitData(visitRadio.value)
    initSurveyData();
})
</script>

<style scoped lang="less">
.data-card{
    padding: @space-xl;
    border-radius:@radius-m;
    background: @bg-color-l;
    width: 100%;
    &-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom:@space-l; ;

        &-name{
            .font-l();
            font-weight: 600;
            color: @font-color-l;
        }
    }
}
</style>