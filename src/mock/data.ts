import Mock from 'mockjs'
const Random = Mock.Random;

//总览数据
export const overview = Mock.mock({
    code:200,
    data:{
        file:Random.float(60,100,2,2)+'M',
        "article|0-50":0,
        "gallery|0-50":0,
        "diary|0-50":0,
    }
})

//访问量数据
export const visit = Mock.mock({
    code:200,
    "data|30":[{
        date:"@datetime('MM-dd')",
        "count|10-60":12,
    }]
})

//数据监测
export const survey = Mock.mock({
    code:200,
    data:{
        device:[
            {
                key:"mobile",
                name:"移动端",
                "value|30-120":50
            },
            {
                key:"pc",
                name:"电脑端",
                "value|30-120":40
            },
        ],
        website:[
            {
                key:"home",
                name:"首页",
                "value|30-120":50
            },
            {
                key:"project",
                name:"项目",
                "value|30-120":40
            },
            {
                key:"diary",
                name:"日记",
                "value|30-120":40
            },
            {
                key:"photo",
                name:"摄影",
                "value|30-120":50
            }
        ]
    }
});

// 导出一个函数，每次调用都生成新的随机数据
export const getSurveyData = () => {
  return Mock.mock({
    code: 200,
    data: {
      device: [
        {
          key: "mobile",
          name: "移动端",
          "value|30-120": 50
        },
        {
          key: "pc",
          name: "电脑端",
          "value|30-120": 40
        }
      ],
      website: [
        { key: "home", name: "首页", "value|30-120": 50 },
        { key: "project", name: "项目", "value|30-120": 40 },
        { key: "diary", name: "日记", "value|30-120": 40 },
        { key: "photo", name: "摄影", "value|30-120": 50 }
      ]
    }
  });
};

//评论
export const comment = Mock.mock({
  code:200,
  data:{
    count:123,
    "list|123":[
      {
        "id|+1":0,
        article:{
          "id|+1":2,
          "title":"@ctitle(3,12)",
        },
        "user":{
          "id|+1":3,
          "name":"@ctitle(3,12)",
          "imgurl":""
        },
        "comment":"@cparagraph(1,4)",
        "moment":"@datetime()",
        "complaint|0-12":0
      }
    ]
  }
})