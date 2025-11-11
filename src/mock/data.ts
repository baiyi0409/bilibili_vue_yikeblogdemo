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