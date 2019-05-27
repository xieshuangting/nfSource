var vm = new Vue({
    el: '#app',
    data: {
        mapMarkers:{},
        totalData: {
            guangfu: {
                proTotal: {
                    title: '',
                    unit: '',
                    value: 0
                },
                totalCapacity: {
                    title: '',
                    unit: '',
                    value: 0
                },
                totalPower: {
                    title: '',
                    unit: '',
                    value: 0
                },
                cleer: {
                    title: '',
                    unit: '',
                    value: 0
                },
                inlineTotal: {
                    title: '',
                    unit: '',
                    value: 0
                },
                yearTotal: {
                    title: '',
                    unit: '',
                    value: 0
                }
            },
            shuidian: {
                proTotal: {
                    title: '',
                    value: 0
                },
                onSport: {
                    title: '',
                    value: 0
                },
                offSport: {
                    title: '',
                    value: 0
                },
                clean: {
                    title: '',
                    value: 0
                },
                capical: {
                    title: '',
                    value: 0
                },
                power: {
                    title: '',
                    value: 0
                },
                rate: {
                    title: '',
                    value: 0
                }
            },
            chuneng: {
                proTotal: {
                    title: '',
                    value: ''
                },
                capital: {
                    title: '',
                    value: ''
                },
                time: {
                    title: '',
                    value: ''
                },
                power: {
                    title: '',
                    value: ''
                },
                totalPower: {
                    title: '',
                    value: ''
                }
            },
            yonghu: {
                ligong: {
                    online: {
                        title: "",
                        value: ""
                    },
                    offline: {
                        title: "",
                        value: ""
                    }
                },
                yumensi: {
                    online: {
                        title: "",
                        value: ""
                    },
                    offline: {
                        title: "",
                        value: ""
                    }
                }
            },
            congdianzhuang: {
                congdianzhan: {
                    title: "",
                    value: 0
                },
                congdianzhuang: {
                    title: "",
                    value: 0
                },
                time: {
                    title: "",
                    value: 0
                },
                power: {
                    title: "",
                    value: 0
                },
            },
            zhonghe: {
                power: {
                    title: "",
                    value: ""
                },
                rate: {
                    title: "",
                    value: ""
                }
            }
        },
        districtNameArr: ['乳源瑶族自治县', '乐昌市', '南雄市', '始兴县', '翁源县', '新丰县', '武江区', '浈江区', '仁化县', '曲江区'],
        // 风电项目情况
        windPowerData: {},
        windPowerChart: '',
        windPowerOption: {
            title: [{
                text: '项目总数',
                subtext: '(个)',
                left: '9.8%',
                top: '60%',
                textAlign: 'center',
                padding: [20, 0, 0, 0],
                textStyle: {
                    fontSize: '24',
                    color: '#fff',
                },
                itemGap: 10,
                subtextStyle: {
                    fontSize: 20,
                    color: 'rgb(204，204，204)'
                }
            }, {
                text: '额定容量',
                subtext: '(MV)',
                left: '29.8%',
                top: '60%',
                textAlign: 'center',
                padding: [20, 0, 0, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '24',
                },
                itemGap: 10,
                subtextStyle: {
                    fontSize: 20,
                    color: 'rgb(204，204，204)'
                }
            }, {
                text: '总发电量',
                subtext: '(kW)',
                left: '49.8%',
                top: '60%',
                textAlign: 'center',
                padding: [20, 0, 0, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '24',
                },
                itemGap: 10,
                subtextStyle: {
                    fontSize: 20,
                    color: 'rgb(204，204，204)'
                }
            }, {
                text: '年总发电量',
                subtext: '(kW)',
                left: '69.8%',
                top: '60%',
                textAlign: 'center',
                padding: [20, 0, 0, 0],
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '24',
                },
                itemGap: 10,
                subtextStyle: {
                    fontSize: 20,
                    color: 'rgb(204，204，204)'
                }
            }, {
                text: '占清洁能源',
                subtext: '(%)',
                left: '89.8%',
                top: '60%',
                textAlign: 'center',
                padding: [20, 0, 0, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '24',
                },
                itemGap: 10,
                subtextStyle: {
                    fontSize: 20,
                    color: 'rgb(204，204，204)'
                }
            }],
            series: [{
                    type: 'pie',
                    hoverAnimation: false, //鼠标经过的特效
                    radius: ['50%', '60%'],
                    center: ['10%', '40%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: 34, //第一个数据
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4390FF'
                                }, {
                                    offset: 1,
                                    color: '#7FFDFF'
                                }]),
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{c}',
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '40',
                                    fontWeight: 'bold',
                                    color: '#fff'
                                }
                            }
                        },
                    }, { //透明的区域
                        value: 100,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                },
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0
                            },
                            emphasis: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0
                            }
                        },
                    }, ]
                },
                {
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['50%', '60%'],
                    center: ['30%', '40%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 45, //第二个数据
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#48DFF6'
                                    }, {
                                        offset: 1,
                                        color: '#93FE86'
                                    }]),
                                }
                            },
                            label: {
                                normal: {
                                    formatter: '{c}',
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '40',
                                        fontWeight: 'bold',
                                        color: '#fff'
                                    }
                                }
                            },
                        }, {
                            value: 100,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                },
                                emphasis: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                }
                            },
                        },

                    ]
                },
                {
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['50%', '60%'],
                    center: ['50%', '40%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 67, //第三个数据
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#F6D54A'
                                    }, {
                                        offset: 1,
                                        color: '#FF5997'
                                    }]),
                                }
                            },
                            label: {
                                normal: {
                                    formatter: '{c}',
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '40',
                                        fontWeight: 'bold',
                                        color: '#fff'
                                    }
                                }
                            },
                        }, {
                            value: 100,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                },
                                emphasis: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                }
                            },
                        },

                    ]
                },
                {
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['50%', '60%'],
                    center: ['70%', '40%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 20, //第四个数据
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#F6D54A'
                                    }, {
                                        offset: 1,
                                        color: '#FF5997'
                                    }]),
                                }
                            },
                            label: {
                                normal: {
                                    formatter: '{c}',
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '40',
                                        fontWeight: 'bold',
                                        color: '#fff'
                                    }
                                }
                            },
                        }, {
                            value: 100,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                },
                                emphasis: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                }
                            },
                        },

                    ]
                },
                {
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['50%', '60%'],
                    center: ['90%', '40%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 20, //第五个数据
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#475AFF'
                                    }, {
                                        offset: 1,
                                        color: '#2FDBF7'
                                    }]),
                                }
                            },
                            label: {
                                normal: {
                                    formatter: '{c}',
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '40',
                                        fontWeight: 'bold',
                                        color: '#fff'
                                    }
                                }
                            },
                        }, {
                            value: 100,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                },
                                emphasis: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                }
                            },
                        },

                    ]
                },

                //外圈的边框
                {
                    // name: '总人数',
                    type: 'pie',
                    hoverAnimation: false, //鼠标经过的特效
                    radius: ['60%', '62%'],
                    center: ['10%', '40%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 75,
                            itemStyle: {
                                normal: {
                                    color: "#0EB9B2"
                                }
                            },
                        }, {
                            value: 25,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                },
                                emphasis: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                }
                            },
                        },

                    ]
                },
                {
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['60%', '62%'],
                    center: ['30%', '40%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 75,
                            itemStyle: {
                                normal: {
                                    color: "#0EB9B2"
                                }
                            },
                        }, {
                            value: 25,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                },
                                emphasis: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                }
                            },
                        },

                    ]
                },
                {
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['60%', '62%'],
                    center: ['50%', '40%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 75,
                            itemStyle: {
                                normal: {
                                    color: "#0EB9B2"
                                }
                            },
                        }, {
                            value: 25,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                },
                                emphasis: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                }
                            },
                        },

                    ]
                },
                {
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['60%', '62%'],
                    center: ['70%', '40%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 75,
                            itemStyle: {
                                normal: {
                                    color: "#0EB9B2"
                                }
                            },
                        }, {
                            value: 25,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                },
                                emphasis: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                }
                            },
                        },

                    ]
                },
                {
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['60%', '62%'],
                    center: ['90%', '40%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 75,
                            itemStyle: {
                                normal: {
                                    color: "#0EB9B2"
                                }
                            },
                        }, {
                            value: 25,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                },
                                emphasis: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
                                }
                            },
                        },

                    ]
                },
            ]
        },
        //绿色能源-综合分析
        greenMultipleData: {
            totalEnergy: '',
            greenPre: '',
        },
        greenMultipleChart: '',
        greenMultipleOption: {
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
                left: '10%',
                right: '10%',
            },
            legend: {
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 20
                },
                itemGap: 12,
                data: ['发电量', '占比']
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
                        color: "#2C60A9"
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
                    splitLine: {
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ['#22477D']
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#2C60A9"
                        }
                    }
                },
                {
                    name: '（%）',
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
                            color: "#2C60A9"
                        }
                    },
                    splitLine: { //y轴刻度线
                        show: false
                    },
                    min: 0,
                    max: 100,
                    position: 'right',

                }
            ],
            series: [{
                    name: "发电量",
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
                    name: '占比',
                    type: 'line',
                    smooth: true,
                    yAxisIndex: 1,
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
        //绿色能源-社会贡献1
        greenPileChart: '',
        greenPileOption: {
            title: {
                show: true,
                text: '供电可靠性',
                x: '12%',
                //y: '80%',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 24,
                    color: "#fff",
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: '25%',
                top: 'center',
                itemGap: 30,
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 24,
                    lineHeight: 28.8,
                },
                data: []
            },
            series: [{
                name: '发电总量',
                type: 'pie',
                radius: '70%',
                center: ['25%', '50%'],
                data: [],
                label: {
                    normal: {
                        formatter: '{c|{c}}',
                        position: 'inner',
                        rich: {
                            c: {
                                fontSize: 32,
                                color: '#FFFFFF'
                            }
                        }
                    }
                },
                color: ['#68CACB', '#44AFF0', '#24EDB8'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        },
        //绿色能源-效率分析
        greenEffChart_1: '',
        greenEffOption_1: {
            title: {
                text: "光伏放电效率分析",
                x: '3%',
                //bottom:'3%',
                textStyle: {
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: 4,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {d}% <br/> {c}"
            },
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: "./img/全景图/效率1-8.png", //插入图片
                        width: 80,
                        height: 80
                    },
                    left: '18%',
                    top: '38%'
                }]
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                y: 'center',
                itemWidth: 16,
                itemHeight: 10,
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    lineHeight: 16.8
                },
                data: []
            },
            series: [{
                type: 'pie',
                radius: ['80%', '60%'],
                center: ['30%', '58%'],
                color: ['#01AAE5', '#FF902C', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
                data: [],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                }
            }]
        },
        greenEffChart_2: '',
        greenEffOption_2: {
            title: {
                text: "光伏放电效率分析",
                x: '3%',
                //bottom:'3%',
                textStyle: {
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: 4,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {d}% <br/> {c}"
            },
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: "./img/全景图/效率2-8.png", //插入图片
                        width: 80,
                        height: 80
                    },
                    left: '18%',
                    top: '38%'
                }]
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                y: 'center',
                itemWidth: 16,
                itemHeight: 10,
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    lineHeight: 16.8
                },
                data: []
            },
            series: [{
                type: 'pie',
                radius: ['80%', '60%'],
                center: ['30%', '58%'],
                color: ['#01AAE5', '#FF902C', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
                data: [],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                }
            }]
        },
        greenEffChart_3: '',
        greenEffOption_3: {
            title: {
                text: "光伏放电效率分析",
                x: '3%',
                //bottom:'3%',
                textStyle: {
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: 4,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {d}% <br/> {c}"
            },
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: "./img/全景图/效率3-8.png", //插入图片
                        width: 80,
                        height: 80
                    },
                    left: '18%',
                    top: '38%'
                }]
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                y: 'center',
                itemWidth: 16,
                itemHeight: 10,
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    lineHeight: 16.8
                },
                data: []
            },
            series: [{
                type: 'pie',
                radius: ['80%', '60%'],
                center: ['30%', '58%'],
                color: ['#01AAE5', '#FF902C', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
                data: [],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                }
            }]
        },
        // 安全分析
        greenSourceChart: {},
        greenSourceData: {},
        greenSourceOption: {
            title: [{
                show: true,
                text: '供电可靠性',
                x: '7%',
                y: '80%',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 24,
                    color: "#fff",
                }
            }, {
                show: true,
                text: '系统频率',
                x: '35%',
                y: '80%',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 24,
                    color: "#fff",
                }
            }, {
                show: true,
                text: '系统负荷',
                x: '62%',
                y: '80%',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 24,
                    color: "#fff",
                }
            }],
            tooltip: {
                trigger: 'item',
                show: true,
                formatter: "{b} : {d}%",
                backgroundColor: 'rgba(0,0,0,0.7)', // 背景
                padding: [8, 10], //内边距
                extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            },
            legend: {
                orient: 'vertical',
                icon: 'circle',
                left: '80%',
                top: 'center',
                itemGap: 30,
                data: ['水电项目', '风电项目', '光伏项目', '04', '05', '06'],
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                }
            },
            series: [{
                    name: 'Line 1',
                    type: 'pie',
                    clockWise: false,
                    radius: [84, 94],
                    center: ['13%', '40%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    label: {
                        borderRadius: '10',
                    },
                    data: [{
                            value: 20, //数据一
                            name: '光伏项目',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#fb734e'
                                    }, {
                                        offset: 1,
                                        color: '#e32f46'
                                    }])
                                }
                            }
                        },
                        {
                            value: 80, //100-数据一
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'Line 2',
                    type: 'pie',
                    clockWise: false,
                    radius: [64, 74],
                    center: ['13%', '40%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    data: [{
                            value: 56.7,
                            name: '风电项目',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#94d96c'
                                    }, {
                                        offset: 1,
                                        color: '#0bbcb7'
                                    }])
                                }
                            }
                        },
                        {
                            value: 43.3,
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'Line 3',
                    type: 'pie',
                    clockWise: false,
                    radius: [44, 54],
                    center: ['13%', '40%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    data: [{
                            value: 30,
                            name: '水电项目',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#1a9bfc'
                                    }, {
                                        offset: 1,
                                        color: '#7049f0'
                                    }]),
                                }
                            }
                        },
                        {
                            value: 0,
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'Line 1',
                    type: 'pie',
                    clockWise: false,
                    radius: [84, 94],
                    center: ['40%', '40%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    label: {
                        borderRadius: '10',
                    },
                    data: [{
                            value: 54.6,
                            name: '光伏项目',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#fb734e'
                                    }, {
                                        offset: 1,
                                        color: '#e32f46'
                                    }])
                                }
                            }
                        },
                        {
                            value: 45.4,
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'Line 2',
                    type: 'pie',
                    clockWise: false,
                    radius: [64, 74],
                    center: ['40%', '40%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    data: [{
                            value: 56.7,
                            name: '风电项目',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#94d96c'
                                    }, {
                                        offset: 1,
                                        color: '#0bbcb7'
                                    }])
                                }
                            }
                        },
                        {
                            value: 43.3,
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'Line 3',
                    type: 'pie',
                    clockWise: false,
                    radius: [44, 54],
                    center: ['40%', '40%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    data: [{
                            value: 30,
                            name: '水电项目',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#1a9bfc'
                                    }, {
                                        offset: 1,
                                        color: '#7049f0'
                                    }]),
                                }
                            }
                        },
                        {
                            value: 0,
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'Line 1',
                    type: 'pie',
                    clockWise: false,
                    radius: [84, 94],
                    center: ['67%', '40%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    label: {
                        borderRadius: '10',
                    },
                    data: [{
                            value: 54.6,
                            name: '光伏项目',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#fb734e'
                                    }, {
                                        offset: 1,
                                        color: '#e32f46'
                                    }])
                                }
                            }
                        },
                        {
                            value: 45.4,
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'Line 2',
                    type: 'pie',
                    clockWise: false,
                    radius: [64, 74],
                    center: ['67%', '40%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    data: [{
                            value: 56.7,
                            name: '风电项目',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#94d96c'
                                    }, {
                                        offset: 1,
                                        color: '#0bbcb7'
                                    }])
                                }
                            }
                        },
                        {
                            value: 43.3,
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'Line 3',
                    type: 'pie',
                    clockWise: false,
                    radius: [44, 54],
                    center: ['67%', '40%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    data: [{
                            value: 30,
                            name: '水电项目',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#1a9bfc'
                                    }, {
                                        offset: 1,
                                        color: '#7049f0'
                                    }]),
                                }
                            }
                        },
                        {
                            value: 0,
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                }
            ]
        },
        // 重点用户运行情况
        cusChartData: {},
        cusChart: {},
        cusChartOption: {
            title: [{
                show: true,
                text: '(kW)',
                x: '20%',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 20,
                    color: "#fff",
                }
            }],
            tooltip: {
                trigger: 'item',
                show: true,
                formatter: "{b} : {d}%",
                backgroundColor: 'rgba(0,0,0,0.7)', // 背景
                padding: [8, 10], //内边距
                extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            },
            legend: {
                orient: 'vertical',
                icon: 'circle',
                left: '60%',
                top: 'center',
                itemGap: 10,
                data: ['今年总用电量', '本月用电量', '04', '05'], //从里到外
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            series: [{
                    name: 'Line 1',
                    type: 'pie',
                    clockWise: false,
                    radius: [70, 80],
                    center: ['30%', '50%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    label: {
                        borderRadius: '10',
                    },
                    data: [{
                            value: 20, //数据一
                            name: '今年总用电量',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#24EDB8'
                                    }, {
                                        offset: 1,
                                        color: '#7FFDFF'
                                    }])
                                }
                            }
                        },
                        {
                            value: 80, //100-数据一
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'Line 2',
                    type: 'pie',
                    clockWise: false,
                    radius: [50, 60],
                    center: ['30%', '50%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur: 40,
                            borderWidth: 10,
                            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 90,
                    data: [{
                            value: 56.7,
                            name: '本月用电量',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#8278FF'
                                    }, {
                                        offset: 1,
                                        color: '#3BD5FF'
                                    }])
                                }
                            }
                        },
                        {
                            value: 43.3,
                            name: '',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,105,128,.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(58,105,128,.5)'
                                }
                            }
                        },
                    ]
                }
            ]
        },
        // 绿色能源-社会贡献2
        devoteData: {
            co2: {
                title: '',
                unit: '',
                value: 0
            },
            coal: {
                title: '',
                unit: '',
                value: 0
            },
            tree: {
                title: '',
                unit: '',
                value: 0
            }
        },
        devoteChart: {},
        devoteOption: {
            grid: {
                left: '0%',
                // right: '0%',
                top: '0%',
                containLabel: false
            },
            xAxis: {
                splitLine: { show: false },
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { show: false }
            },
            yAxis: [{
                type: 'category',
                data: ['综合学科'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    //   rotate: 45,
                    show: false
                }
            }],
            series: [{
                name: '占位',
                type: 'pictorialBar',
                barWidth: "100%",
                barGap: '-100%',
                silent: true,
                symbol: 'image://img/全景图/贡献111-8.png',
                symbolClip: true,
                symbolBoundingData: 3000,
                symbolSize: ['100%', '28'],
                // symbolOffset:[120,120],
                data: [{
                    name: '综合学科',
                    value: 2154
                }]
            }, {
                name: '100',
                type: 'pictorialBar',
                stack: '总量',
                z: 3,
                barWidth: '100%',
                data: [{
                    name: '综合学科',
                    value: 2154
                }],
                label: {
                    normal: {
                        show: false,
                    }
                },
                symbol: 'image://img/全景图/贡献222-8.png',
                symbolClip: true,
                symbolBoundingData: 300,
                symbolSize: ['100%', '28']
            }]
        },
    },
    mounted: function() {
        this.getTotalData();
        this.getGreenMultipleData();
        this.getGreenPileData();
        this.getGreenEffData_1();
        this.getGreenEffData_2();
        this.getGreenEffData_3();
        this.getWindPowerData();
        this.getGreenSourceData();
        this.newMap();
        this.getCusChartData();
        this.getDevoteChartData();
    },
    created:function(){
        this.initMapMarker();
    },
    methods: {
        // 渲染页面的静态数据
        getTotalData: function() {
            const self = this;
            $.get("./json/overallView/totaldata.asp", function(result) {
                self.totalData = eval('(' + result + ')');
            })
        },
        // 绿色能源社会贡献2
        getDevoteChartData: function() {
            const self = this;
            $.get("./json/overallView/devotedata.asp", function(result) {
                self.devoteData = eval('(' + result + ')');
                // 减少co2
                self.devoteOption.series[0].symbolBoundingData = self.devoteData.co2.max;
                self.devoteOption.series[0].data[0] = { name: self.devoteData.co2.title, value: self.devoteData.co2.max };
                self.devoteOption.series[1].data[0] = { name: self.devoteData.co2.title, value: self.devoteData.co2.value };
                self.devoteOption.series[1].symbolBoundingData = self.devoteData.co2.max;
                self.devoteChart = echarts.init(self.$refs.devoteChart1);
                self.devoteChart.setOption(self.devoteOption);
                window.onresize = self.cusChart.resize;
                // 减少煤
                self.devoteOption.series[0].symbolBoundingData = self.devoteData.coal.max;
                self.devoteOption.series[0].data[0] = { name: self.devoteData.coal.title, value: self.devoteData.coal.max };
                self.devoteOption.series[1].data[0] = { name: self.devoteData.coal.title, value: self.devoteData.coal.value };
                self.devoteOption.series[1].symbolBoundingData = self.devoteData.coal.max;
                self.devoteChart = echarts.init(self.$refs.devoteChart2);
                self.devoteChart.setOption(self.devoteOption);
                window.onresize = self.cusChart.resize;
                // 树
                self.devoteOption.series[0].symbolBoundingData = self.devoteData.tree.max;
                self.devoteOption.series[0].data[0] = { name: self.devoteData.tree.title, value: self.devoteData.tree.max };
                self.devoteOption.series[1].data[0] = { name: self.devoteData.tree.title, value: self.devoteData.tree.value };
                self.devoteOption.series[1].symbolBoundingData = self.devoteData.tree.max;
                self.devoteChart = echarts.init(self.$refs.devoteChart3);
                self.devoteChart.setOption(self.devoteOption);
                window.onresize = self.cusChart.resize;
            })
        },
        // 重点用户运行情况
        getCusChartData: function() {
            const self = this;
            $.get("./json/overallView/cuschart.asp", function(result) {
                // 丽宫酒店项目
                self.cusChartData = eval('(' + result + ')');
                self.cusChartOption.series[0].data[0].value = self.cusChartData.ligong.value1;
                self.cusChartOption.series[0].data[1].value = 100 - self.cusChartData.ligong.value1;
                self.cusChartOption.series[1].data[0].value = self.cusChartData.ligong.value2;
                self.cusChartOption.series[1].data[1].value = 100 - self.cusChartData.ligong.value2;
                self.cusChart = echarts.init(self.$refs.cusChart_1);
                self.cusChart.setOption(self.cusChartOption);
                window.onresize = self.cusChart.resize;

                // 云门寺智慧用电
                self.cusChartData = eval('(' + result + ')');
                self.cusChartOption.series[0].data[0].value = self.cusChartData.ligong.value1;
                self.cusChartOption.series[0].data[1].value = 100 - self.cusChartData.ligong.value1;
                self.cusChartOption.series[1].data[0].value = self.cusChartData.ligong.value2;
                self.cusChartOption.series[1].data[1].value = 100 - self.cusChartData.ligong.value2;
                self.cusChart = echarts.init(self.$refs.cusChart_2);
                self.cusChart.setOption(self.cusChartOption);
                window.onresize = self.cusChart.resize;
            })
        },
        // 安全分析
        getGreenSourceData: function() {
            const self = this;
            $.get("./json/overallView/greensafe.asp", function(result) {
                self.greenSourceData = eval('(' + result + ')');
                self.greenSourceOption.series[0].data[0].value = self.greenSourceData.guangfu.value1;
                self.greenSourceOption.series[0].data[1].value = 100 - self.greenSourceData.guangfu.value1;
                self.greenSourceOption.series[1].data[0].value = self.greenSourceData.fengdian.value1;
                self.greenSourceOption.series[1].data[1].value = 100 - self.greenSourceData.fengdian.value1;
                self.greenSourceOption.series[2].data[0].value = self.greenSourceData.shuidian.value1;
                self.greenSourceOption.series[2].data[1].value = 100 - self.greenSourceData.shuidian.value1;

                self.greenSourceOption.series[3].data[0].value = self.greenSourceData.guangfu.value2;
                self.greenSourceOption.series[3].data[1].value = 100 - self.greenSourceData.guangfu.value2;
                self.greenSourceOption.series[4].data[0].value = self.greenSourceData.fengdian.value2;
                self.greenSourceOption.series[4].data[1].value = 100 - self.greenSourceData.fengdian.value2;
                self.greenSourceOption.series[5].data[0].value = self.greenSourceData.shuidian.value2;
                self.greenSourceOption.series[5].data[1].value = 100 - self.greenSourceData.shuidian.value2;

                self.greenSourceOption.series[6].data[0].value = self.greenSourceData.guangfu.value3;
                self.greenSourceOption.series[6].data[1].value = 100 - self.greenSourceData.guangfu.value3;
                self.greenSourceOption.series[7].data[0].value = self.greenSourceData.fengdian.value3;
                self.greenSourceOption.series[7].data[1].value = 100 - self.greenSourceData.fengdian.value3;
                self.greenSourceOption.series[8].data[0].value = self.greenSourceData.shuidian.value3;
                self.greenSourceOption.series[8].data[1].value = 100 - self.greenSourceData.shuidian.value3;
                self.greenSourceChart = echarts.init(self.$refs.greenChart);
                self.greenSourceChart.setOption(self.greenSourceOption);
                window.onresize = self.greenSourceChart.resize;
            })
        },
        // 风电项目情况
        getWindPowerData: function() {
            const self = this;
            $.get("./json/overallView/windpowerdata.asp", function(result) {
                self.windPowerData = eval('(' + result + ')');
                // 第一个
                self.windPowerOption.title[0].text = self.windPowerData.pro_amount.title;
                self.windPowerOption.title[0].subtext = self.windPowerData.pro_amount.unit;
                self.windPowerOption.series[0].data[0].value = self.windPowerData.pro_amount.value;
                // 第二个
                self.windPowerOption.title[1].text = self.windPowerData.rated_capacity.title;
                self.windPowerOption.title[1].subtext = self.windPowerData.rated_capacity.unit;
                self.windPowerOption.series[1].data[0].value = self.windPowerData.rated_capacity.value;
                // 第三个
                self.windPowerOption.title[2].text = self.windPowerData.total_electric.title;
                self.windPowerOption.title[2].subtext = self.windPowerData.total_electric.unit;
                self.windPowerOption.series[2].data[0].value = self.windPowerData.total_electric.value;
                // 第四个
                self.windPowerOption.title[3].text = self.windPowerData.year_capacity.title;
                self.windPowerOption.title[3].subtext = self.windPowerData.year_capacity.unit;
                self.windPowerOption.series[3].data[0].value = self.windPowerData.year_capacity.value;
                // 第五个
                self.windPowerOption.title[4].text = self.windPowerData.green_source.title;
                self.windPowerOption.title[4].subtext = self.windPowerData.green_source.unit;
                self.windPowerOption.series[4].data[0].value = self.windPowerData.green_source.value;
                self.windPowerChart = echarts.init(self.$refs.windPowerChart_1);
                self.windPowerChart.setOption(self.windPowerOption);
                window.onresize = self.windPowerChart.resize;
            })
        },
        //绿色能源-综合分析
        getGreenMultipleData: function() {
            const self = this;
            $.get("./json/overallView/greenMultiple.asp", function(result) {
                data = eval('(' + result + ')');
                self.greenMultipleData.totalEnergy = data.totalEnergy;
                self.greenMultipleData.greenPre = data.greenPre;
                self.greenMultipleOption.xAxis[0].data = data.name;
                self.greenMultipleOption.series[0].data = data.value;
                self.greenMultipleOption.series[1].data = data.pre;
                // 基于准备好的dom，初始化echarts实例
                self.greenMultipleChart = echarts.init(self.$refs.greenMultipleItem);
                self.greenMultipleChart.setOption(self.greenMultipleOption);
                window.onresize = self.greenMultipleChart.resize;
            });
        },

        getGreenPileData: function() {
            const self = this;
            $.get("./json/overallView/greenPile.asp", function(result) {
                data = eval('(' + result + ')');
                self.greenPileOption.series[0].data = data;

                $.each(data, function(i, e) {
                    self.greenPileOption.legend.data.push(e.name);
                })

                // 基于准备好的dom，初始化echarts实例
                self.greenPileChart = echarts.init(self.$refs.greenPileItem);
                self.greenPileChart.setOption(self.greenPileOption);
                window.onresize = self.greenPileChart.resize;
            });
        },


        getGreenEffData_1: function() {
            const self = this;
            $.get("./json/overallView/greenEff_1.asp", function(result) {
                data = eval('(' + result + ')');
                self.greenEffOption_1.series[0].data = data;
                $.each(data, function(i, e) {
                    self.greenEffOption_1.legend.data.push(e.name);
                })
                // 基于准备好的dom，初始化echarts实例
                self.greenEffChart_1 = echarts.init(self.$refs.greenEffItem_1);
                self.greenEffChart_1.setOption(self.greenEffOption_1);
                window.onresize = self.greenEffChart_1.resize;
            });
        },
        getGreenEffData_2: function() {
            const self = this;
            $.get("./json/overallView/greenEff_2.asp", function(result) {
                data = eval('(' + result + ')');
                self.greenEffOption_2.series[0].data = data;
                $.each(data, function(i, e) {
                    self.greenEffOption_2.legend.data.push(e.name);
                })
                // 基于准备好的dom，初始化echarts实例
                self.greenEffChart_2 = echarts.init(self.$refs.greenEffItem_2);
                self.greenEffChart_2.setOption(self.greenEffOption_2);
                window.onresize = self.greenEffChart_2.resize;
            });
        },

        getGreenEffData_3: function() {
            const self = this;
            $.get("./json/overallView/greenEff_3.asp", function(result) {
                data = eval('(' + result + ')');
                self.greenEffOption_3.series[0].data = data;
                $.each(data, function(i, e) {
                    self.greenEffOption_3.legend.data.push(e.name);
                })
                // 基于准备好的dom，初始化echarts实例
                self.greenEffChart_3 = echarts.init(self.$refs.greenEffItem_3);
                self.greenEffChart_3.setOption(self.greenEffOption_3);
                window.onresize = self.greenEffChart_3.resize;
            });
        },
        /*加载地图*/
        newMap: function() {
            const self = this;
            map = new AMap.Map('map', {
                center: [113.87353, 24.775487],
                layers: [ //使用多个图层
                    new AMap.TileLayer.Satellite(),
                    //new AMap.TileLayer,
                ],
                zooms: [9, 10], //设置地图级别范围
                zoom: 9.6,
                /*zoomEnable:false,
                dragEnable:false,*/
                features: ['bg'], //features:['bg','point'],
                pitch: 0,
                rotation: 0,
                viewMode: '3D', //开启3D视图,默认为关闭
            });

            for (var i = 0; i < self.districtNameArr.length; i++) {
                self.addshaoguan(self.districtNameArr[i]);
            }
        },

        /*加载韶关覆盖物*/
        addshaoguan: function(districtName) {
            //加载行政区划插件
            AMap.service('AMap.DistrictSearch', function() {
                var opts = {
                    subdistrict: 1, //返回下一级行政区
                    extensions: 'all', //返回行政区边界坐标组等具体信息
                    level: 'city' //查询行政级别为 市
                };
                //实例化DistrictSearch
                district = new AMap.DistrictSearch(opts);

                district.setLevel('district');

                //行政区查询
                district.search(districtName, function(status, result) {

                    var text = vm.addText(result);
                    //console.log(result.districtList[0]); //adcode:区域代码
                    var bounds = result.districtList[0].boundaries;
                    var polygons = [];
                    if (bounds) {
                        for (var i = 0, l = bounds.length; i < l; i++) {
                            //生成行政区划polygon
                            var polygon = new AMap.Polygon({
                                map: map,
                                zIndex: 1,
                                strokeWeight: 8,
                                path: bounds[i],
                                fillOpacity: 0.6,
                                fillColor: 'rgba(69,137,155,0.6)',
                                strokeColor: '#67BBFA',

                            });
                            AMap.event.addListener(polygon, 'mouseover', function() {
                                polygon.setOptions({
                                    fillColor: 'rgba(69,137,155,0.6)',
                                    fillOpacity: 1
                                });
                            });

                            AMap.event.addListener(polygon, 'mouseout', function() {
                                polygon.setOptions({
                                    fillColor: 'rgba(69,137,155,0.6)',
                                    fillOpacity: 0.6
                                });
                            });

                            // AMap.event.addListener(polygon, 'click', function(e) {
                            //     getData(result.districtList[0].adcode);
                            //     //alert(map.getCenter( ));
                            // });

                            AMap.event.addListener(text, 'mouseover', function() {
                                polygon.setOptions({
                                    fillColor: 'rgba(69,137,155,0.6)',
                                    fillOpacity: 1
                                });
                            });

                            AMap.event.addListener(text, 'mouseout', function() {
                                polygon.setOptions({
                                    fillColor: 'rgba(69,137,155,0.6)',
                                    fillOpacity: 0.6
                                });
                            });

                            // AMap.event.addListener(text, 'click', function(e) {
                            //     getData(result.districtList[0].adcode);
                            // });

                            AMap.event.addListener(map, 'zoomchange', function() {
                                if (map.getZoom() < 9.5) {
                                    map.setCenter([113.87353, 24.675487]);
                                    text.setStyle({
                                        'font-size': '25px',
                                    });
                                } else {
                                    map.setCenter([113.87353, 24.675487]);
                                    text.setStyle({
                                        'font-size': '36px',
                                    });
                                }
                            });

                            polygons.push(polygon);
                        }
                        //  map.setFitView();//地图自适应
                    }
                });
            });
        },

        /*加载韶关下级行政区域名称*/
        addText: function(result) {
            var opt = {};
            if (result.districtList[0].name == '武江区') {
                opt = {
                    map: map,
                    text: result.districtList[0].name,
                    position: [113.36264, 24.670302],
                    textAlign: 'center',
                };
            } else if (result.districtList[0].name == '浈江区') {
                opt = {
                    map: map,
                    text: result.districtList[0].name,
                    position: [113.582367, 24.894729],
                    textAlign: 'center',
                };
            } else if (result.districtList[0].name == '乳源瑶族自治县') {
                opt = {
                    map: map,
                    text: result.districtList[0].name,
                    position: [113.177246, 24.7888],
                    textAlign: 'center',
                };
            } else if (result.districtList[0].name == '曲江区') {
                opt = {
                    map: map,
                    text: result.districtList[0].name,
                    position: [113.616699, 24.601646],
                    textAlign: 'center',
                };
            } else if (result.districtList[0].name == '翁源县') {
                opt = {
                    map: map,
                    text: result.districtList[0].name,
                    position: [113.998474, 24.382945],
                    textAlign: 'center',
                };
            } else if (result.districtList[0].name == '乐昌市') {
                opt = {
                    map: map,
                    text: result.districtList[0].name,
                    position: [113.280243, 25.213212],
                    textAlign: 'center',
                };
            } else if (result.districtList[0].name == '新丰县') {
                opt = {
                    map: map,
                    text: result.districtList[0].name,
                    position: [114.188629, 24.100534],
                    textAlign: 'center',
                };
            } else {
                opt = {
                    map: map,
                    text: result.districtList[0].name,
                    position: result.districtList[0].center,
                    textAlign: 'center',
                };
            }

            var text = new AMap.Text(opt);
            text.setStyle({
                'background': '#B3D6D2',
                'background-color': 'rgba(0,0,0,0)',
                'border': '0px solid ',
                'font-size': '36px',
                '*zoom': '1'
            });

            return text;
        },
        initMapMarker:function(){
            const self = this;
            $.get("./json/overallView/mapMarke.asp", function(result) {
                data = eval('(' + result + ')');
                //光绪微网
                var gxwwMarkers = [];
                $.each(data.gxww, function(i, e) {
                    gxwwMarkers.push(self.getMarker(e.position,"./img/全景图/1-8.png"))
                })
                self.mapMarkers['gxww'] = gxwwMarkers;
                map.add(gxwwMarkers);
                //智慧平台
                var zhptMarkers = [];
                $.each(data.zhpt, function(i, e) {
                    zhptMarkers.push(self.getMarker(e.position,"./img/全景图/2-8.png"))
                })
                self.mapMarkers['zhpt'] = zhptMarkers;
                map.add(zhptMarkers);
                //光伏项目
                var gfxmMarkers = [];
                $.each(data.gfxm, function(i, e) {
                    gfxmMarkers.push(self.getMarker(e.position,"./img/全景图/3-8.png"))
                })
                self.mapMarkers['gfxm'] = gfxmMarkers;
                map.add(gfxmMarkers);
                //风电项目
                var fdxmMarkers = [];
                $.each(data.fdxm, function(i, e) {
                    fdxmMarkers.push(self.getMarker(e.position,"./img/全景图/4-8.png"))
                })
                self.mapMarkers['fdxm'] = fdxmMarkers;
                map.add(fdxmMarkers);
                //小水电项目
                var xsdxmMarkers = [];
                $.each(data.xsdxm, function(i, e) {
                    xsdxmMarkers.push(self.getMarker(e.position,"./img/全景图/5-8.png"))
                })
                self.mapMarkers['xsdxm'] = xsdxmMarkers;
                map.add(xsdxmMarkers);
                //电动汽车充电站
                var ddqccdzMarkers = [];
                $.each(data.ddqccdz, function(i, e) {
                    ddqccdzMarkers.push(self.getMarker(e.position,"./img/全景图/6-8.png"))
                })
                self.mapMarkers['ddqccdz'] = ddqccdzMarkers;
                map.add(ddqccdzMarkers);
            });
        },
        // 编写自定义函数,创建标注
        getMarker:function(point,icon){
            // 将 icon 传入 marker
            var marker = new AMap.Marker({
                position: new AMap.LngLat(point[0],point[1]),
                icon: icon,
                //offset: new AMap.Pixel(-13, -30)
            });
            //map.add([endMarker]);
            return marker;
        },

        //移除标注
        showMarker:function(event){
            $el = $(event.currentTarget);
            var bclass = $el.attr("class");
            if (bclass=='map-button-item') {
                data =  $el.attr("data");
                map.remove(this.mapMarkers[data]); 
                $el.addClass('button-visited')
            }else{
                data =  $el.attr("data");
                map.add(this.mapMarkers[data]); 
                $el.removeClass('button-visited')
            }

            
        }
    }
})