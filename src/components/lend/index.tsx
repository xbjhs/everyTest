import React from 'react';
import './index.scss';
import echarts from 'echarts';
import china from 'echarts/map/json/china.json';
echarts.registerMap('china', china)

const Lend = () => {
    React.useEffect(() => {
        initMap();
    }, []);


    // 初始化地图
    const initMap = () => {
        // 获取容器
        let de: any;
        de = document.getElementById('myMap');
        let myChart: any = echarts.init(de);

        // 图列里面的颜色
        const COLORS = ["#ffffff", "#faebd2", "#e9a188", "#d56355", "#bb3937", "#772526", "#480f10"];
        // 模拟数据
        const dataList = [
            { name: "南海诸岛", value: 0 },
            { name: '北京', value: 97 },
            { name: '天津', value: 5 },
            { name: '上海', value: 30 },
            { name: '重庆', value: 2 },
            { name: '河北', value: 2 },
            { name: '河南', value: 1 },
            { name: '云南', value: 2 },
            { name: '辽宁', value: 4 },
            { name: '黑龙江', value: 13 },
            { name: '湖南', value: 0 },
            { name: '安徽', value: 0 },
            { name: '山东', value: 9 },
            { name: '新疆', value: 0 },
            { name: '江苏', value: 5 },
            { name: '浙江', value: 15 },
            { name: '江西', value: 1 },
            { name: '湖北', value: 8685 },
            { name: '广西', value: 3 },
            { name: '甘肃', value: 40 },
            { name: '山西', value: 1 },
            { name: '内蒙古', value: 1 },
            { name: '陕西', value: 7 },
            { name: '吉林', value: 0 },
            { name: '福建', value: 0 },
            { name: '贵州', value: 0 },
            { name: '广东', value: 49 },
            { name: '青海', value: 0 },
            { name: '西藏', value: 0 },
            { name: '四川', value: 17 },
            { name: '宁夏', value: 0 },
            { name: '海南', value: 1 },
            { name: '台湾', value: 54 },
            { name: '香港', value: 70 },
            { name: '澳门', value: 2 }
        ];
        // echarts配置项
        const option = {
            //提示框组件 支持字符串模板和回调函数两种形式。
            tooltip: {
                formatter: function (params: { seriesName: string; name: string; value: string; }, ticket: any, callback: any) {
                    return params.seriesName + '<br />' + params.name + '：' + params.value
                }
            },
            background: '#eeeeee',
            // 视觉组件:将数据映射为视觉元素(echarts配置项)
            visualMap: {
                type: 'piecewise',//分段型视觉映射组件
                orient: 'horizontal',//水平方向
                left: 'left',//位置
                top: 'bottom',//位置
                // 不同的确诊人数对应不同的颜色
                pieces: [
                    {
                        value: 0, color: COLORS[0]
                    },
                    {
                        min: 1, max: 9, color: COLORS[1]
                    },
                    {
                        min: 10, max: 99, color: COLORS[2]
                    },
                    {
                        min: 100, max: 499, color: COLORS[3]
                    },
                    {
                        min: 500, max: 999, color: COLORS[4]
                    },
                    {
                        min: 1000, max: 10000, color: COLORS[5]
                    },
                    {
                        min: 10000, color: COLORS[6]
                    }
                ],
                inRange: {
                    color: COLORS //取值范围的颜色
                },
                show: true//图注
            },
            // 地理坐标系组件:绘制地图
            geo: {
                map: 'china',
                roam: false,//不开启缩放和平移
                zoom: 1.23,//视角缩放比例
                label: {
                    normal: {
                        show: true,
                        fontSize: '10',
                        color: 'rgba(0,0,0,0.7)'
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis: {
                        areaColor: '#F3B329',//鼠标选择区域颜色
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            // 图标类型选择以及基本的配置
            series: [
                {
                    name: '信息量',
                    type: 'map',//图表类型
                    geoIndex: 0,
                    data: dataList//图表的数据
                }
            ]
        };
        myChart.setOption(option);
    }

    return (
        <div className="lend">
            <h1 className='test'>lend页面</h1>
            <div id="myMap"></div>
        </div>
    )
}
export default (Lend)