<template>
    <div ref="chart" :style="{ height: chartHeight }" class="chart">

    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, defineProps, markRaw,onBeforeUnmount } from 'vue';


//按需引入echarts模块
import * as echarts from 'echarts/core';
// 引入饼图
import { PieChart } from 'echarts/charts';
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
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

//获取图表元素
const chart = ref<HTMLDivElement>();
const myChart = ref();

const props = defineProps(['data','title', 'chartHeight']);

const option = ref();
const survey = (e: any) => {
  let total: number = 0;
  for (let i = 0; i < e.length; i++) {
    total += e[i].value;
  }

  option.value = {
    color: ['#2b5aed', '#fa5247', '#1ccbb6', '#f625af', '#ffb435'],
    title: {
      text: total,
      subtext: props.title,
      left: 'center',
      top: '34%',
      textStyle: {           // 注意：是 textStyle，不是 textstyle（驼峰命名！）
        fontSize: 32,
        color: '#686b73'
      },
      subtextStyle: {
        fontSize: 14,
        color: '#686b73'
      }
    },
    tooltip: {               // ✅ 移到顶层
      trigger: 'item'
    },
    legend: {                // ✅ 移到顶层
      show: false,
      bottom: 0,
      icon: 'circle'
    },
    series: [                // ✅ 移到顶层
      {
        type: 'pie',
        radius: ['60%', '75%'],
        avoidLabelOverlap: true,
        label: {
          show: true,        // normal 可省略
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,   // 40 太大了，会溢出，建议 14~20
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: e
      }
    ]
  };
};


onMounted(()=>{
    survey(props.data);

    myChart.value = markRaw(echarts.init(chart.value as HTMLDivElement));
    myChart.value.setOption(option.value);

    window.addEventListener('resize',()=>{
        myChart.value.resize();
    });
});
 
watch(()=>props.data,(newVal)=>{
    survey(newVal);
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