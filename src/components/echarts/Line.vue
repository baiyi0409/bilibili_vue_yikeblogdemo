<template>
    <div ref="chart" :style="{ height: chartHeight }" class="chart">

    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, defineProps, markRaw,onBeforeUnmount } from 'vue';


//按需引入echarts模块
import * as echarts from 'echarts/core';
// 引入折线图
import { LineChart } from 'echarts/charts';
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

//获取图表元素
const chart = ref<HTMLDivElement>();
const myChart = ref();

const props = defineProps(['data', 'chartHeight']);

const xAxisD = ref<string[]>([]);
const seriesD = ref<number[]>([]);
const option = ref();
const visit = (e:any) =>{
    xAxisD.value = [];
    seriesD.value = [];
    for(let i = 0; i < e.length; i++){
        xAxisD.value.push(e[i].date);
        seriesD.value.push(e[i].count);
    }
    option.value = {
        color: ['#2b5aed'],
        grid:{
            top:"4%",
            left:"0%",
            right:"0%",
            bottom:"0%",
            //containLabel:true,
        },
        xAxis:{
            type:'category',
            data:xAxisD.value,
        },
        yAxis:{
            type:'value',
        },
        series:[{
            data:seriesD.value,
            type:'line',
            smooth:true
        }]
    }
}


onMounted(()=>{
    visit(props.data);

    myChart.value = markRaw(echarts.init(chart.value as HTMLDivElement));
    myChart.value.setOption(option.value);

    window.addEventListener('resize',()=>{
        myChart.value.resize();
    });
});
 
watch(()=>props.data,(newVal)=>{
    visit(newVal);
    myChart.value.setOption(option.value);
})

onBeforeUnmount(() =>{
    window.removeEventListener('resize', () => {
        myChart.value.resize();
    });
})

</script>

<style scoped lang="less">
.chart{
    width: 100%;
}  
</style>