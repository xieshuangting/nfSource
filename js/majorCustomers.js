var vm = new Vue({
    el: '#app',
    data: { //重点用户负荷预测
        loadChart: '',
        loadOption: {
            //backgroundColor: '#142058',
            //
            tooltip: {
                show: "true",
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    shadowStyle: {
                        color: 'rgba(112,112,112,0)',
                    },
                },

                backgroundColor: 'rgba(0,0,0,0.7)', // 背景
                padding: [8, 10], //内边距
                extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            },
            color: ['#24EDB8', '#FE6590'],
            grid: {
                left: '7%',
                right: '8%',
            },
            legend: {
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 20
                },
                itemGap: 12,
                data: ['实际负荷', '预测负荷']
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 20,
                        lineHeight: 24
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#05edfc"
                    }
                },
                data: [],
                axisTick: {
                    alignWithLabel: true
                }
            }],
            yAxis: [{
                    name: '（kW）',
                    nameTextStyle: {
                        fontSize: 20,
                        lineHeight: 24,
                        color: '#FFFFFF'
                    },
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#FFFFFF',
                            fontSize: 20,
                            lineHeight: 24
                        },
                        interval: 0,
                        showMinLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#05edfc"
                        }
                    }
                },
                /*{
                    name: 'h',
                    nameTextStyle: {
                        fontSize: 20,
                        lineHeight: 24,
                        color: '#FFFFFF'
                    },
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#FFFFFF',
                            fontSize: 20,
                            ineHeight: 24
                        },
                        interval: 0,
                        showMinLabel: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#05edfc"
                        }
                    },
                    splitLine: { //y轴刻度线
                        show: false
                    },
                    position: 'right',

                }*/
            ],
            series: [{
                    name: "实际负荷",
                    type: 'bar',
                    barWidth: '33%',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 8,
                        }
                    },
                    data: []
                },
                {
                    name: '预测负荷',
                    type: 'line',
                    smooth: true,
                    //yAxisIndex: 1,
                    color: '#FE6590',
                    lineStyle: {
                        normal: {
                            width: 3,
                            shadowColor: 'rgba(0,0,0,0.4)',
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    data: []
                }
            ]
        },
        //圆形图例-线路故障
        liquidFillChart_1: '',
        liquidFillOption_1: {
            title: {
                text: '',
                left: '49%',
                top: '45%',
                textAlign: 'center',
                textStyle: {
                    fontSize: 20,
                    fontFamily: 'MicrosoftYaHei',
                    color: 'rgb(255,255,255)',
                    lineHeight: 24,
                    fontStyle: 'normal',
                }
            },
            series: [{
                backgroundStyle: {
                    color: 'rgba(0,0,0,0)'
                },
                type: 'liquidFill',
                name: '线路故障',
                color: ['#FBB33B'],
                data: [{
                    name: 2,
                    value: 0.3
                }],
                radius: '70%',
                center: ['50%', '45%'],
                outline: {
                    show: true,
                    itemStyle: {
                        borderWidth: 5,
                        borderColor: '#977337',
                        shadowBlur: 30,
                        shadowColor: '#977337'
                    }
                },
                label: {
                    position: ['50%', '115%'],
                    formatter: '{a|{a}}',

                    rich: {
                        a: {
                            fontSize: 20,
                            fontFamily: 'MicrosoftYaHei',
                            color: 'rgb(255,255,255)',
                            lineHeight: 24,
                            fontStyle: 'normal',
                        }

                    }
                }
            }]
        },
        //圆形图例-线路故障
        liquidFillChart_2: '',
        liquidFillOption_2: {
            title: {
                text: '',
                left: '49%',
                top: '45%',
                textAlign: 'center',
                textStyle: {
                    fontSize: 20,
                    fontFamily: 'MicrosoftYaHei',
                    color: 'rgb(255,255,255)',
                    lineHeight: 24,
                    fontStyle: 'normal',
                }
            },
            series: [{
                backgroundStyle: {
                    color: 'rgba(0,0,0,0)'
                },
                type: 'liquidFill',
                name: '停电时间',
                color: ['#4CCBFF'],
                data: [{
                    name: 2,
                    value: 0.3
                }],
                radius: '70%',
                center: ['50%', '45%'],
                outline: {
                    show: true,
                    itemStyle: {
                        borderWidth: 5,
                        borderColor: '#3F7F99',
                        shadowBlur: 30,
                        shadowColor: '#3F7F99'
                    }
                },
                label: {
                    position: ['50%', '115%'],
                    formatter: '{a|{a}}',

                    rich: {
                        a: {
                            fontSize: 20,
                            fontFamily: 'MicrosoftYaHei',
                            color: 'rgb(255,255,255)',
                            lineHeight: 24,
                            fontStyle: 'normal',
                        }

                    }
                }
            }]
        },
        //圆形图例-线路故障
        liquidFillChart_3: '',
        liquidFillOption_3: {
            title: {
                text: '',
                left: '49%',
                top: '45%',
                textAlign: 'center',
                textStyle: {
                    fontSize: 20,
                    fontFamily: 'MicrosoftYaHei',
                    color: 'rgb(255,255,255)',
                    lineHeight: 24,
                    fontStyle: 'normal',
                }
            },
            series: [{
                backgroundStyle: {
                    color: 'rgba(0,0,0,0)'
                },
                type: 'liquidFill',
                name: '停电次数',
                color: ['#FE6590'],
                data: [{
                    name: 2,
                    value: 0.3
                }],
                radius: '70%',
                center: ['50%', '45%'],
                outline: {
                    show: true,
                    itemStyle: {
                        borderWidth: 5,
                        borderColor: '#984C61',
                        shadowBlur: 30,
                        shadowColor: '#984C61'
                    }
                },
                label: {
                    position: ['50%', '115%'],
                    formatter: '{a|{a}}',

                    rich: {
                        a: {
                            fontSize: 20,
                            fontFamily: 'MicrosoftYaHei',
                            color: 'rgb(255,255,255)',
                            lineHeight: 24,
                            fontStyle: 'normal',
                        }

                    }
                }
            }]
        },
        //重点用户能耗数据占比分析
        energyConsumptionChart: '',
        energyConsumptionOption: {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    color: "#FFFFFF",
                    fontSize: 64,
                    height: 72,
                    lineHeight: 72,
                    rich: {
                        text: {
                            color: "#FFFFFF",
                            fontSize: 32,
                            height: 38.4,
                            lineHeight: 38.4,
                            fontWeight: 4,
                        }
                    }
                },

            },


            series: [{
                type: 'pie',
                hoverAnimation: false,
                radius: ['70%', '63%'],
                center: ['50%', '50%'],
                color: ['#01AAE5', '#FF902C', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
                data: [],
                labelLine: {
                    normal: {
                        length: 100,
                        length2: 0,
                        lineStyle: {
                            color: '#FFFFFF'
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: '{b|{b}}\n{hr|}\n{c|{c}}\n{d|{d}%}',
                        rich: {
                            c: {
                                //color: "#ffc72b",
                                fontSize: 32,
                                padding: [5, 4],
                                align: 'center'
                            },
                            b: {
                                color: "#fff",
                                align: 'center',
                                fontSize: 32,
                                padding: [16, 0]
                            },
                            d: {
                                color: '#49dff0',
                                fontSize: 32,
                                align: 'center'
                            },
                            hr: {
                                borderColor: '#FFFFFF',
                                width: '100%',
                                borderWidth: 1,
                                height: 0,
                            }
                        }

                    },
                }
            }]
        },
        //重点用户能耗数据占比分析
        errorChart: '',
        errorOption: {
            //type:''
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c}({d}%)"
            },

            legend: {
                type: 'scroll',
                pageTextStyle: {
                    color: '#FFFFFF'
                },
                left: '3%',
                right: '3%',
                top: 40,
                itemWidth: 40,
                itemHeight: 25,
                itemGap: 40,
                textStyle: {
                    color: '#fff',
                    fontSize: 20,


                },
                data: []
            },
            series: [{
                type: 'pie',
                radius: ['66%', '46%'],
                center: ['50%', '52%'],
                color: ['#FF4343', '#F69846', '#F6D54A', '#45DBF7', '#44AFF0', '#4777F5', '#AD46F3'],
                data: [],
                labelLine: {
                    normal: {
                        length: 100,
                        length2: 60,
                        lineStyle: {
                            width: 2,
                            color: '#1597cc',
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: '{b|{b}}',
                        rich: {
                            b: {
                                color: "#fff",
                                align: 'center',
                                fontSize: 32,
                                //padding: [16, 0]
                            },

                        }

                    },
                }
            }]
        },
        mapChart: '',
        mapOption: {},
        // 重点设备监控
        deviceData: {},
        deviceChart: {},
        deviceOption: {
            title: [{
                x: "15%",
                bottom: 30,
                text: '重点设备用能',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 30,
                    color: "#fff"
                },
            }, {
                x: "44%",
                bottom: 30,
                text: '重点设备数',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 30,
                    color: "#fff"
                },
            }, {
                x: "73%",
                bottom: 30,
                text: '占总用能比',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 30,
                    color: "#fff"
                },
            }],
            tooltip: {
                show: true,
            },
            series: [{
                type: 'gauge',
                center: ['50%', '65%'], // 默认全局居中  
                radius: '100%',
                splitNumber: 10, //刻度数量
                min: 0,
                max: 1000,
                startAngle: 200,
                endAngle: -20,
                clockwise: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [1, '#fff']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                        width: 1
                    },
                    length: -15,
                    splitNumber: 10
                },
                splitLine: {
                    show: true,
                    length: -20,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel: {
                    distance: -20,
                    textStyle: {
                        color: "#fff",
                        fontSize: "15",
                        fontWeight: "bold"
                    }
                },
                pointer: { //仪表盘指针
                    show: 0
                },
                detail: {
                    show: false
                },
                data: [{
                    name: "",
                    value: 1000
                }]
            }, {
                startAngle: 200,
                endAngle: -20,
                type: 'gauge',
                center: ['50%', '65%'], // 默认全局居中  
                radius: '95%',
                min: 0,
                max: 1000,
                splitNumber: 0,
                axisLine: { // 坐标轴线  
                    lineStyle: {
                        color: [
                            [0.66, '#dddddd'],
                            [1, '#dddddd']
                        ], // 属性lineStyle控制线条样式  
                        width: 4
                    }
                },
                axisLabel: { // 坐标轴小标记  
                    textStyle: { // 属性lineStyle控制线条样式  
                        fontWeight: 'bolder',
                        fontSize: 16,
                        color: 'rgba(30,144,255,0)',
                    }
                },
                splitLine: { // 分隔线  
                    length: 10, // 属性length控制线长  
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                        width: 0,
                        color: '#444'
                    }
                },
                pointer: { // 分隔线 指针  
                    color: '#666666',
                    width: 0,
                    length: 230
                },
                detail: {
                    show: false
                },
            }, {
                name: '重点设备数',
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                radius: '80%',
                center: ['50%', '65%'], // 默认全局居中  
                min: 0,
                max: 1000,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 25,
                        shadowBlur: 0,
                        color: [
                            [0.2, '#01AAE5'],
                            [0.4, '#24EDB8'],
                            [0.6, '#65A5FE'],
                            [0.8, '#FF902C'],
                            [1, '#FF4D40']
                        ]
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                    length: 20,
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: true,
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '30%'], //仪表盘数据
                    textStyle: {
                        fontSize: 40
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#fff",
                    }
                },
                data: [{
                    value: 436 //真正的数据
                }]
            }, {
                type: 'gauge',
                center: ['20%', '65%'], // 默认全局居中  
                radius: '65%',
                splitNumber: 10, //刻度数量
                min: 0,
                max: 1000,
                endAngle: 45,
                clockwise: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [1, '#fff']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                        width: 1
                    },
                    length: -15,
                    splitNumber: 10
                },
                splitLine: {
                    show: true,
                    length: -20,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel: {
                    distance: -20,
                    textStyle: {
                        color: "#fff",
                        fontSize: "15",
                        fontWeight: "bold"
                    }
                },
                pointer: { //仪表盘指针
                    show: 0
                },
                detail: {
                    show: false
                },
                data: [{
                    name: "",
                    value: 1000
                }]
            }, {
                type: 'gauge',
                center: ['20%', '65%'], // 默认全局居中  
                radius: '70%',
                min: 0,
                max: 1000,
                endAngle: 45,
                splitNumber: 0,
                axisLine: { // 坐标轴线  
                    lineStyle: {
                        color: [
                            [0.66, '#fff'],
                            [1, '#fff']
                        ], // 属性lineStyle控制线条样式  
                        width: 4
                    }
                },
                axisLabel: { // 坐标轴小标记  
                    textStyle: { // 属性lineStyle控制线条样式  
                        fontWeight: 'bolder',
                        fontSize: 16,
                        color: 'rgba(30,144,255,0)',
                    }
                },
                splitLine: { // 分隔线  
                    length: 10, // 属性length控制线长  
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                        width: 0,
                        color: '#444'
                    }
                },
                pointer: { // 分隔线 指针  
                    color: '#666666',
                    width: 0,
                    length: 230
                },
                detail: {
                    show: false
                },
            }, {
                name: '重点设备用能',
                type: 'gauge',
                endAngle: 45,
                radius: '55%',
                center: ['20%', '65%'], // 默认全局居中  
                min: 0,
                max: 1000,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 25,
                        shadowBlur: 0,
                        color: [
                            [0.2, '#01AAE5'],
                            [0.4, '#24EDB8'],
                            [0.6, '#65A5FE'],
                            [0.8, '#FF902C'],
                            [1, '#FF4D40']
                        ]
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                    length: 20,
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: true,
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '42%'],
                    textStyle: {
                        fontSize: 40
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#fff",
                    }
                },
                data: [{
                    value: 245
                }]
            }, {
                type: 'gauge',
                center: ['80%', '65%'], // 默认全局居中  
                radius: '65%',
                splitNumber: 10, //刻度数量
                min: 0,
                max: 1000,
                startAngle: 140,
                endAngle: -45,
                clockwise: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [1, '#fff']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                        width: 1
                    },
                    length: -15,
                    splitNumber: 10
                },
                splitLine: {
                    show: true,
                    length: -20,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel: {
                    distance: -20,
                    textStyle: {
                        color: "#fff",
                        fontSize: "15",
                        fontWeight: "bold"
                    }
                },
                pointer: { //仪表盘指针
                    show: 0
                },
                detail: {
                    show: false
                },
                data: [{
                    name: "",
                    value: 1000
                }]
            }, {
                type: 'gauge',
                center: ['80%', '65%'], // 默认全局居中  
                radius: '70%',
                min: 0,
                max: 1000,
                startAngle: 140,
                endAngle: -45,
                splitNumber: 0,
                axisLine: { // 坐标轴线  
                    lineStyle: {
                        color: [
                            [0.66, '#dddddd'],
                            [1, '#dddddd']
                        ], // 属性lineStyle控制线条样式  
                        width: 4
                    }
                },
                axisLabel: { // 坐标轴小标记  
                    textStyle: { // 属性lineStyle控制线条样式  
                        fontWeight: 'bolder',
                        fontSize: 16,
                        color: 'rgba(30,144,255,0)',
                    }
                },
                splitLine: { // 分隔线  
                    length: 10, // 属性length控制线长  
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                        width: 0,
                        color: '#444'
                    }
                },
                pointer: { // 分隔线 指针  
                    color: '#666666',
                    width: 0,
                    length: 230
                },
                detail: {
                    show: false
                },
            }, {
                name: '占总用能比',
                type: 'gauge',
                startAngle: 140,
                endAngle: -45,
                radius: '55%',
                center: ['80%', '65%'], // 默认全局居中  
                min: 0,
                max: 1000,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 25,
                        shadowBlur: 0,
                        color: [
                            [0.2, '#FF4D40'],
                            [0.4, '#FF902C'],
                            [0.6, '#65A5FE'],
                            [0.8, '#24EDB8'],
                            [1, '#01AAE5'],

                        ]
                    }
                },
                axisTick: {
                    show: false,

                },
                splitLine: {
                    show: false,
                    length: 20,
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: true,
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '42%'],
                    textStyle: {
                        fontSize: 40
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#fff",
                    }
                },
                data: [{
                    value: 135
                }]
            }]
        },
        // 用电情况
        usePowerData: {},
        usePowerChart: {},
        usePowerOption: {
            title: {
                x: "30%",
                bottom: 30,
                text: '重点设备用能',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 32,
                    color: "#fff"
                },
            },
            series: [{
                type: 'gauge',
                center: ['50%', '58%'], // 默认全局居中  
                radius: '78%',
                splitNumber: 10, //刻度数量
                min: 0,
                max: 1000,
                startAngle: 200,
                endAngle: -20,
                clockwise: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [1, '#24EDB8']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#24EDB8',
                        width: 1
                    },
                    length: -15,
                    splitNumber: 10
                },
                splitLine: {
                    show: true,
                    length: -20,
                    lineStyle: {
                        color: '#24EDB8',
                    }
                },
                axisLabel: {
                    distance: -20,
                    textStyle: {
                        color: "#24EDB8",
                        fontSize: "15",
                        fontWeight: "bold"
                    }
                },
                pointer: { //仪表盘指针
                    show: true
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '40%'], //仪表盘数据
                    textStyle: {
                        fontSize: 48,
                        fontWeight: 600
                    }
                },
                data: [{
                    value: 436 //真正的数据
                }]

            }, {
                name: '重点设备数',
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                radius: '70%',
                center: ['50%', '58%'], // 默认全局居中  
                min: 0,
                max: 1000,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 15,
                        shadowBlur: 0,
                        color: [
                            [0, '#24EDB8'],
                            [1, '#24EDB8']
                        ]
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                    length: 20,
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: false,
                },
                detail: {
                    show: false,

                },
                itemStyle: {
                    normal: {
                        color: "#fff",
                    }
                },
                data: [{
                    name: "",
                    value: 1000
                }]
            }]
        },
        //能耗峰平谷
        consumptionData: {
            peak: 0,
            flat: 0,
            valley: 0
        },
        consumptionChart: {},
        consumptionOption: {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            color: ['#1494E7', '#12FFB0', '#FEE100'],
            legend: {
                data: ['峰', '平', '谷'],
                top: '5%',
                left: '20%',
                itemWidth: 42,
                itemHeight: 18,
                textStyle: {
                    color: '#fff',
                    fontSize: 32
                },
                itemGap: 120
            },
            grid: {
                left: '3%',
                right: '5%',
                bottom: '10%',
                top: '15%',
                containLabel: true
            },
            yAxis: {
                name: '单位(kWh)',
                nameTextStyle: {
                    fontSize: 24,
                    lineHeight: 24,
                    color: '#FFFFFF'
                },
                type: 'value',
                show: true,
                axisLabel: {
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 400,
                    interval: 0
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: "#fff"
                    }
                },
            },
            xAxis: [{
                show: true,
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: "#fff"
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 400,
                    interval: 0
                },
                data: ['一月', '2月', '水利部', '名航', '海洋局'],
            }],
            series: [{
                    name: '谷',
                    type: 'bar',
                    barWidth: 25,
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [30, 30, 30, 30],
                        },
                    },
                    data: [320, 302, 301, 334, 390]
                },
                {
                    name: '平',
                    type: 'bar',
                    barWidth: 25,
                    stack: '总量',
                    data: [120, 132, 101, 134, 90],
                    itemStyle: {
                        normal: {
                            barBorderRadius: [30, 30, 30, 30],
                        },
                    }
                },
                {
                    name: '峰',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 25,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [30, 30, 30, 30],
                        },
                    },
                    data: [220, 182, 191, 234, 290]
                }
            ]
        }
    },
    mounted: function() {
        this.getDeviceData();
        this.getUsePowerData();
        this.getConsumptionData();
        this.getLoadData();
        this.getLiquidFill_1Data();
        this.getLiquidFill_2Data();
        this.getLiquidFill_3Data();
        this.getEnergyConsumptionData();
        this.getErrorChartData();
        this.getMapData();
    },
    methods: { //重点用户负荷预测
        getLoadData: function() {
            const self = this;
            $.get("./json/majorCustomers/load.asp", function(result) {
                data = eval('(' + result + ')');
                vm.loadOption.xAxis[0].data = data.time;
                vm.loadOption.series[0].data = data.value;
                vm.loadOption.series[1].data = data.number;
                /*$.each(data.value, function(i, e) {
                    vm.rankingBarOption.legend.data.push(e.name);
                })
                 vm.rankingBarOption.legend.data.push('同比率');*/

                // 基于准备好的dom，初始化echarts实例
                vm.loadChart = echarts.init(self.$refs.loadItem);
                vm.loadChart.setOption(vm.loadOption);
                window.onresize = vm.loadChart.resize;
            });
        },

        getLiquidFill_1Data: function() {
            const self = this;
            $.get("./json/majorCustomers/liquidFillOption_1.asp", function(result) {
                data = eval('(' + result + ')');
                self.liquidFillOption_1.series[0].data = data;
                self.liquidFillOption_1.title.text = data[0].name + "次";
                self.liquidFillChart_1 = echarts.init(self.$refs.liquidFillItem_1);
                self.liquidFillChart_1.setOption(self.liquidFillOption_1);
                window.onresize = self.liquidFillChart_1.resize;
            });
        },

        getLiquidFill_2Data: function() {
            const self = this;
            $.get("./json/majorCustomers/liquidFillOption_2.asp", function(result) {
                data = eval('(' + result + ')');
                self.liquidFillOption_2.series[0].data = data;
                self.liquidFillOption_2.title.text = data[0].name + "h";
                self.liquidFillChart_2 = echarts.init(self.$refs.liquidFillItem_2);
                self.liquidFillChart_2.setOption(self.liquidFillOption_2);
                window.onresize = self.liquidFillChart_2.resize;
            });
        },

        getLiquidFill_3Data: function() {
            const self = this;
            $.get("./json/majorCustomers/liquidFillOption_3.asp", function(result) {
                data = eval('(' + result + ')');
                self.liquidFillOption_3.series[0].data = data;
                self.liquidFillOption_3.title.text = data[0].name + "次";
                self.liquidFillChart_3 = echarts.init(self.$refs.liquidFillItem_3);
                self.liquidFillChart_3.setOption(self.liquidFillOption_3);
                window.onresize = self.liquidFillChart_3.resize;
            });
        },

        getEnergyConsumptionData: function() {
            const self = this;
            $.get("./json/majorCustomers/energyConsumption.asp", function(result) {
                data = eval('(' + result + ')');
                self.energyConsumptionOption.series[0].data = data.data;
                self.energyConsumptionOption.title.text = data.total + "\n{text|用电总量}";
                /*$.each(data, function(i, e) {
                    self.energyConsumptionOption.legend.data.push(e.name);
                })*/
                // 基于准备好的dom，初始化echarts实例
                self.energyConsumptionChart = echarts.init(self.$refs.energyConsumptionItem);
                self.energyConsumptionChart.setOption(self.energyConsumptionOption);
                window.onresize = self.energyConsumptionChart.resize;
            });
        },

        getErrorChartData: function() {
            const self = this;
            $.get("./json/majorCustomers/error.asp", function(result) {
                var data = eval('(' + result + ')');
                self.errorOption.series[0].data = data;
                //self.errorOption.title.text = data.total+"\n{text|用电总量}";
                $.each(data, function(i, e) {
                    self.errorOption.legend.data.push(e.name);
                })
                // 基于准备好的dom，初始化echarts实例
                self.errorChart = echarts.init(self.$refs.errorItem);
                self.errorChart.setOption(self.errorOption);
                window.onresize = self.errorChart.resize;
            });
        },

        getMapData: function() {
            const self = this;
            //乳源地图
            $.get('./json/majorCustomers/map.asp', function(result) {
                data = eval('(' + result + ')');
                $.get('./json/ruyuan.json', function(geoJson) {
                    echarts.registerMap('乳源', geoJson);
                    option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{b}"
                        },
                        legend: {
                            orient: 'vertical',
                            itemWidth: 40,
                            itemHeight: 40,
                            itemGap: 16,
                            right: '10%',
                            top: '5%',
                            //data:['<10WM','10WM-20WM','>40WM'],
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: 24,
                            }
                        },
                        geo: {
                            map: '乳源',
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 30
                                    }
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 30
                                    }
                                }
                            },
                            top: '5%',
                            itemStyle: {
                                normal: {
                                    opacity: 1,
                                    //borderColor:'rgba(115, 255, 250,0.8)',
                                    //borderWidth: 5,
                                    areaColor: '#3CAEBA',
                                    //shadowColor: 'rgb(115, 255, 250)',
                                    //shadowColor: 'rgba(255, 255, 255, 1)',
                                    //shadowColor: 'rgba(69, 137, 155,0.6)',
                                    //shadowOffsetX: -2,
                                    //shadowOffsetY: 2,
                                    //shadowBlur: 10,
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 32
                                        }
                                    }
                                },
                                emphasis: {
                                    areaColor: '#3CAEBA',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 32
                                        }
                                    }
                                },
                            },
                            data: ''
                        },
                        series: [{
                                //name: '',
                                type: 'scatter', // series图表类型
                                coordinateSystem: 'geo', // series坐标系类型
                                symbolSize: 40,
                                symbol: "image://img/风电项目展示/定位图标.png",
                                data: data[0].data // series数据内容
                            }


                        ]
                    };

                    vm.mapChart = echarts.init(self.$refs.mapItem);
                    vm.mapChart.setOption(option);
                })

            })
            //河源地图
            /*$.get('./json/map.asp',function(result){
                data = eval('('+result+')');
                $.get('./json/shaoguang.json', function(geoJson){
                echarts.registerMap('韶关', geoJson);
                option = {
                    geo: {
                        map: '韶关',
                        label: {
                            normal: {
                                show:true,
                                textStyle:{
                                    color: '#fff',
                                    fontSize:30
                                }
                            },
                            emphasis: {
                                show:true,
                                textStyle:{
                                    color: '#fff',
                                    fontSize:30
                                }
                            }
                        },
                        itemStyle: {
                                normal: {
                                        borderColor: 'rgba(147, 235, 248, 1)',
                                        borderWidth: 1,
                                        areaColor: {
                                            type: 'radial',
                                            x: 0.5,
                                            y: 0.5,
                                            r: 0.8,
                                            colorStops: [{
                                                offset: 0, 
                                                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                            }, {
                                                offset: 1, 
                                                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                            }],
                                            globalCoord: false // 缺省为 false
                                        },
                                        shadowColor: 'rgba(128, 217, 248, 1)',
                                        // shadowColor: 'rgba(255, 255, 255, 1)',
                                        shadowOffsetX: -2,
                                        shadowOffsetY: 2,
                                        shadowBlur: 10,
                                        label:{
                                            show:true,
                                            textStyle:{
                                                color: '#fff',
                                                fontSize:32
                                            }
                                        }
                                    },
                                emphasis: {
                                        areaColor: '#389BB7',
                                        borderWidth: 0,
                                        label:{
                                            show:true,
                                            textStyle:{
                                                color: '#fff',
                                                fontSize:32
                                            }
                                        }
                                }
                              
                            },
                    },
                    series: [
                        {
                            name: '韶关',
                            type: 'scatter', // series图表类型
                            coordinateSystem: 'geo', // series坐标系类型
                            symbolSize: 40,
                            symbol:"image://img/光伏项目/定位图标.png",
                            data: data // series数据内容
                         }
                       
                    ]
                };
                vm.mapChart = echarts.init(self.$refs.mapItem);
                vm.mapChart.setOption(option);
                })

            })*/
        },
        getConsumptionData: function() {
            const self = this;
            $.get("./json/majorCustomers/consumptiondata.asp", function(result) {
                //峰平谷数据
                self.consumptionData = eval('(' + result + ')');
                self.consumptionOption.xAxis[0].data = self.consumptionData.time;
                self.consumptionOption.series[0].data = self.consumptionData.ydata1;
                self.consumptionOption.series[1].data = self.consumptionData.ydata2;
                self.consumptionOption.series[2].data = self.consumptionData.ydata3;
                self.consumptionChart = echarts.init(self.$refs.consumptionChartItem);
                self.consumptionChart.setOption(self.consumptionOption);
                window.onresize = self.consumptionChart.resize;
            })
        },
        getUsePowerData: function() {
            const self = this;
            $.get("./json/majorCustomers/usepowerdata.asp", function(result) {
                self.usePowerData = eval('(' + result + ')');
                // 用电量
                self.usePowerOption.title.text = self.usePowerData.power.title;
                self.usePowerOption.title.x = "25%";
                self.usePowerOption.series[0].max = self.usePowerData.power.max;
                self.usePowerOption.series[1].max = self.usePowerData.power.max;
                self.usePowerOption.series[1].data = [{ value: self.usePowerData.power.max, name: '' }];
                self.usePowerOption.series[0].data = [{ value: self.usePowerData.power.value }];
                self.usePowerOption.series[0].axisLine.lineStyle.color = [
                    [1, '#24EDB8']
                ];
                self.usePowerOption.series[0].axisTick.lineStyle.color = '#24EDB8';
                self.usePowerOption.series[0].splitLine.lineStyle.color = '#24EDB8';
                self.usePowerOption.series[0].axisLabel.textStyle.color = '#24EDB8';
                self.usePowerOption.series[1].axisLine.lineStyle.color = [
                    [1, '#24EDB8']
                ];
                self.usePowerChart = echarts.init(self.$refs.usePowerChart1);
                self.usePowerChart.setOption(self.usePowerOption);
                window.onresize = self.usePowerChart.resize;

                // 电力负荷
                self.usePowerOption.title.text = self.usePowerData.load.title;
                self.usePowerOption.title.x = "27%";
                self.usePowerOption.series[0].max = self.usePowerData.load.max;
                self.usePowerOption.series[1].max = self.usePowerData.load.max;
                self.usePowerOption.series[1].data = [{ value: self.usePowerData.load.max, name: '' }];
                self.usePowerOption.series[0].data = [{ value: self.usePowerData.load.value }];
                self.usePowerOption.series[0].axisLine.lineStyle.color = [
                    [1, '#68CACB']
                ];
                self.usePowerOption.series[0].axisTick.lineStyle.color = '#68CACB';
                self.usePowerOption.series[0].splitLine.lineStyle.color = '#68CACB';
                self.usePowerOption.series[0].axisLabel.textStyle.color = '#68CACB';
                self.usePowerOption.series[1].axisLine.lineStyle.color = [
                    [1, '#68CACB']
                ];
                self.usePowerChart = echarts.init(self.$refs.usePowerChart2);
                self.usePowerChart.setOption(self.usePowerOption);
                window.onresize = self.usePowerChart.resize;

                // 负载率
                self.usePowerOption.title.text = self.usePowerData.rate.title;
                self.usePowerOption.title.x = "35%";
                self.usePowerOption.series[0].max = self.usePowerData.rate.max;
                self.usePowerOption.series[1].max = self.usePowerData.rate.max;
                self.usePowerOption.series[1].data = [{ value: self.usePowerData.rate.max, name: '' }];
                self.usePowerOption.series[0].data = [{ value: self.usePowerData.rate.value }];
                self.usePowerOption.series[0].axisLine.lineStyle.color = [
                    [1, '#44AFF0']
                ];
                self.usePowerOption.series[0].axisTick.lineStyle.color = '#44AFF0';
                self.usePowerOption.series[0].splitLine.lineStyle.color = '#44AFF0';
                self.usePowerOption.series[0].axisLabel.textStyle.color = '#44AFF0';
                self.usePowerOption.series[1].axisLine.lineStyle.color = [
                    [1, '#44AFF0']
                ];
                self.usePowerChart = echarts.init(self.$refs.usePowerChart3);
                self.usePowerChart.setOption(self.usePowerOption);
                window.onresize = self.usePowerChart.resize;
            })
        },
        getDeviceData: function() {
            const self = this;
            $.get("./json/majorCustomers/devicedata.asp", function(result) {
                self.deviceData = eval('(' + result + ')');
                // 重点设备用能
                self.deviceOption.title[0].text = self.deviceData.energy.title;
                self.deviceOption.series[3].max = self.deviceData.energy.max;
                self.deviceOption.series[4].max = self.deviceData.energy.max;
                self.deviceOption.series[5].max = self.deviceData.energy.max;
                self.deviceOption.series[5].data = [{ value: self.deviceData.energy.value }];
                // 重点设备数
                self.deviceOption.title[1].text = self.deviceData.amount.title;
                self.deviceOption.series[0].max = self.deviceData.amount.max;
                self.deviceOption.series[1].max = self.deviceData.amount.max;
                self.deviceOption.series[2].max = self.deviceData.amount.max;
                self.deviceOption.series[2].data = [{ value: self.deviceData.amount.value }];
                // 占总用能比
                self.deviceOption.title[2].text = self.deviceData.rate.title;
                self.deviceOption.series[6].max = self.deviceData.rate.max;
                self.deviceOption.series[7].max = self.deviceData.rate.max;
                self.deviceOption.series[8].max = self.deviceData.rate.max;
                self.deviceOption.series[8].data = [{ value: self.deviceData.rate.value }];
                self.deviceChart = echarts.init(self.$refs.deviceChart);
                self.deviceChart.setOption(self.deviceOption);
                window.onresize = self.deviceChart.resize;
            })
        }
    }
})