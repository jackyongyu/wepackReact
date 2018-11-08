import Mock from 'mockjs';

Mock.setup({temiout:'12000-2600'})
Mock.mock('/data', {
    'data': {
        first:'@FIRST',
        middle:'@FIRST',
        last:'@LAST',
        full:'@first @middle @last'
        }
});

Mock.mock('./number',{
    data:{
        "num|1-100":123
    }
})