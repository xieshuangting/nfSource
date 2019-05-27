var vm = new Vue({
    el: '#app',
    data: {
        // 充放电次数与充放电时间比
        impulseEleChart: '',
        impulseEleOption: {
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
                data: ['充放电次数', '充放电时间']
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
                    name: '次',
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
                {
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

                }
            ],
            series: [{
                    name: "充放电次数",
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
                    name: '充放电时间',
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
        // 充放电量趋势分析
        impulseEleTrendChart: '',
        impulseEleTrendOption: {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                data: ['充电量', '放电量'],
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 20
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#05edfc'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 20,
                        lineHeight: 24
                    }
                },
                data: []
            }],
            yAxis: [{
                type: 'value',
                name: '万kWh',
                nameTextStyle: {
                    fontSize: 20,
                    lineHeight: 24,
                    color: '#FFFFFF'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#05edfc'
                    }
                },
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
                        color: '#57617B'
                    }
                }
            }],
            series: [{
                name: '充电量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(76,203,255,10)'
                        }, {
                            offset: 1,
                            color: 'rgba(255,255,255,0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(76,203,255,10)',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12

                    }
                },
                data: []
            }, {
                name: '放电量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(251,179,59,100)'
                        }, {
                            offset: 1,
                            color: 'rgba(255,255,255,0)'
                        }], false),
                        //shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(251,179,59,100)',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12

                    }
                },
                data: []
            }]
        },
        //剩余容量
        residualCapacityChart: '',
        residualCapacityOption: {
            angleAxis: {
                interval: 1,
                type: 'category',
                data: [],
                z: 10,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#00c7ff",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    color: "#FFFFFF",
                    margin: 8,
                    fontSize: 20,
                    lineHeight: 24
                },

            },
            radiusAxis: {
                min: 0,
                max: 100,
                interval: 20,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#00c7ff",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    formatter: '{value} %',
                    show: true,
                    padding: [0, 0, 20, 0],
                    color: "#00c7ff",
                    fontSize: 20,
                    lineHeight: 24
                },
                splitLine: {
                    lineStyle: {
                        color: "#00c7ff",
                        width: 1,
                        type: "solid"
                    }
                }
            },
            polar: {},
            series: [{
                type: 'bar',
                data: [],
                coordinateSystem: 'polar',
            }],
        },
        //圆形图例-并网数
        liquidFillChart_1: '',
        liquidFillOption_1: {
            series: [{
                backgroundStyle: {
                    color: 'rgba(0,0,0,0)'
                },
                type: 'liquidFill',
                name: '并网数',
                color: ['#97EBFF', '#4CCBFF', '#00AAFF'],
                data: [{
                    name: 10,
                    value: 0.6
                }, 0.5, 0.4],
                radius: '80%',
                center: ['25%', '50%'],
                outline: {
                    show: true,
                    itemStyle: {
                        borderWidth: 5,
                        borderColor: '#9AF0F0',
                        shadowBlur: 20,
                        shadowColor: '#9AF0F0'
                    }
                },
                label: {
                    position: ['165%', '50%'],
                    formatter: '{b|{b}台}\n{a|{a}}',

                    rich: {
                        a: {
                            fontSize: 30,
                            fontFamily: 'MicrosoftYaHei',
                            color: 'rgb(255,255,255)',
                            lineHeight: 48,
                            fontStyle: 'normal',
                        },
                        b: {
                            fontSize: 45,
                            fontFamily: 'MicrosoftYaHei-Bold',
                            color: 'rgb(95,217,255)',
                            lineHeight: 72,
                            fontStyle: 'normal',
                        },
                    }
                }
            }]
        },
        //圆形图例-离网数
        liquidFillChart_2: '',
        liquidFillOption_2: {
            series: [{
                backgroundStyle: {
                    color: 'rgba(0,0,0,0)'
                },
                type: 'liquidFill',
                name: '离网数',
                color: ['#FF92A4', '#FF6A74', '#FF4343'],
                data: [{
                    name: 1,
                    value: 0.4
                }, 0.3, 0.2],
                radius: '80%',
                center: ['25%', '50%'],
                outline: {
                    show: true,
                    itemStyle: {
                        borderWidth: 5,
                        borderColor: '#9AF0F0',
                        shadowBlur: 20,
                        shadowColor: '#9AF0F0'
                    }
                },
                label: {
                    position: ['165%', '50%'],
                    formatter: '{b|{b}台}\n{a|{a}}',

                    rich: {
                        a: {
                            fontSize: 30,
                            fontFamily: 'MicrosoftYaHei',
                            color: 'rgb(255,255,255)',
                            lineHeight: 48,
                            fontStyle: 'normal',
                        },
                        b: {
                            fontSize: 45,
                            fontFamily: 'MicrosoftYaHei-Bold',
                            color: 'rgb(255,67,67)',
                            lineHeight: 72,
                            fontStyle: 'normal',
                        },
                    }
                }
            }]
        },
        //圆形图例-警告数
        liquidFillChart_3: '',
        liquidFillOption_3: {
            series: [{
                backgroundStyle: {
                    color: 'rgba(0,0,0,0)'
                },
                type: 'liquidFill',
                name: '警告数',
                color: ['#F6D54A', '#FFB33B', '#FF902C'],
                data: [{
                    name: 102,
                    value: 0.8
                }, 0.7, 0.6],
                radius: '80%',
                center: ['25%', '50%'],
                outline: {
                    show: true,
                    itemStyle: {
                        borderWidth: 5,
                        borderColor: '#9AF0F0',
                        shadowBlur: 20,
                        shadowColor: '#9AF0F0'
                    }
                },
                label: {
                    position: ['165%', '50%'],
                    formatter: '{b|{b}次}\n{a|{a}}',

                    rich: {
                        a: {
                            fontSize: 30,
                            fontFamily: 'MicrosoftYaHei',
                            color: 'rgb(255,255,255)',
                            lineHeight: 48,
                            fontStyle: 'normal',
                        },
                        b: {
                            fontSize: 45,
                            fontFamily: 'MicrosoftYaHei-Bold',
                            color: 'rgb(255,144,44)',
                            lineHeight: 72,
                            fontStyle: 'normal',
                        },
                    }
                }
            }]
        },
        // 储能信息汇总数据
        storedData: {},
        storedChart: {},
        storedImg1: "./img/储能项目展示/储能总数-8.png",
        storedImg2: "./img/储能项目展示/容量-8.png",
        storedImg3: "./img/储能项目展示/投运时间-8.png",
        storedOption: {
            title: {
                text: "储能总数",
                subtext: "263家",
                itemGap: 340,
                x: 'center',
                y: 'center',
                top: '0%',
                padding: 5,
                textStyle: {
                    fontWeight: 500,
                    fontSize: 40,
                    color: "#fff"
                },
                subtextStyle: {
                    fontWeight: 600,
                    fontSize: 60,
                    color: 'rgb(246,213,74)'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "占{d}%  共{c}"
            },
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: "./img/储能项目展示/储能总数-8.png",
                        width: 100,
                        height: 100
                    },
                    left: 'center',
                    top: 'center'
                }]
            },
            series: [{
                type: 'pie',
                radius: ['75%', '92%'],
                center: ['50%', '50%'],
                color: ['#0E7CE2', 'rgba(58,105,128,.5)'],
                data: [{
                        value: 335,
                    },
                    {
                        value: 310,
                    }
                ],
                labelLine: {
                    normal: {
                        show: false,
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                }
            }]
        },

        // 放电次数和充电时间数据
        chargeData: { electric: [{ value: 0 }] },
        chargeChart: {},
        chargeOption: {
            grid: {
                left: '3%',
                right: '6%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: [{
                show: false
            }],
            xAxis: [{
                type: 'category',
                data: ['综合学科', '高等教育学'],
                boundaryGap: ['20%', '20%'],
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
                    padding: [15, 0, 0, 0],
                    textStyle: {
                        fontSize: 28,
                        color: '#fff'
                    }
                }
            }],
            series: [{
                name: '100',
                type: 'pictorialBar',
                stack: '总量',
                z: 2,
                barWidth: '45%',
                data: [{
                    name: '综合学科',
                    value: 2154
                }, {
                    name: '高等教育学',
                    value: 3500
                }],
                symbol: 'image://img/储能项目展示/图22-8.png',
                symbolClip: true,
                symbolBoundingData: 3500,
                symbolSize: [110, '100%'] //有颜色的大小
            }, {
                name: '占位',
                type: 'pictorialBar',
                barWidth: '45%',
                barGap: '-100%',
                silent: true,
                label: {
                    normal: {
                        show: true,
                        position: "top",
                        distance: 26, //上标题与柱状图的距离
                        formatter: '',
                        textStyle: {
                            color: "#fff", //数字颜色
                            fontSize: 40 //数字大小
                        }
                    }
                },
                symbol: 'image://img/储能项目展示/图1-8.png',
                symbolClip: true,
                symbolBoundingData: 3500,
                symbolSize: [110, '100%'], //无颜色的大小
                data: [{
                    name: '综合学科',
                    value: 3500
                }, {
                    name: '高等教育学',
                    value: 3500
                }]
            }]
        },

        // 剩余电量数据
        electricChart: {},
        electricOption: {
            grid: {
                left: '0%',
                right: '0%',
                bottom: '3%',
                top: '0%',
                containLabel: true
            },
            yAxis: [{
                show: false
            }],
            xAxis: [{
                type: 'category',
                data: ['剩余电量', '对比数据'],
                boundaryGap: ['20%', '20%'],
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
                    show: false
                }
            }],
            series: [{
                name: '100',
                type: 'pictorialBar',
                stack: '总量',
                z: 2,
                barWidth: '45%',
                data: [{
                    name: '剩余电量',
                    value: 2154
                }, {
                    name: '对比数据',
                    value: 3500
                }],
                symbol: 'image://img/储能项目展示/电池里面颜色2-8.png',
                symbolClip: true,
                symbolBoundingData: 100,
                symbolSize: [81, '100%'] //有颜色的大小
            }, {
                name: '占位',
                type: 'pictorialBar',
                barWidth: '45%',
                barGap: '-100%',
                silent: true,
                label: {
                    normal: {
                        show: false
                    }
                },
                symbol: 'image://img/储能项目展示/透明-8.png',
                symbolClip: true,
                symbolBoundingData: 100,
                symbolSize: [81, '100%'], //无颜色的大小
                data: [{
                    name: '剩余电量',
                    value: 3500
                }, {
                    name: '对比数据',
                    value: 3500
                }]
            }]
        }
    },
    mounted: function() {
        this.getStoredData();
        this.getChargeData();
        this.getImpulseEleData();
        this.getImpulseEleTrendData();
        this.getResidualCapacityData();
        this.getLiquidFill_1Data();
        this.getLiquidFill_2Data();
        this.getLiquidFill_3Data();
    },
    methods: {
        //并网数数据初始化
        getLiquidFill_1Data: function() {
            const self = this;
            $.get("./json/storedenergy/liquidFillOption_1.asp", function(result) {
                data = eval('(' + result + ')');
                vm.liquidFillOption_1.series[0].data = data;
                vm.liquidFillChart_1 = echarts.init(self.$refs.liquidFillItem_1);
                vm.liquidFillChart_1.setOption(vm.liquidFillOption_1);
                window.onresize = vm.liquidFillChart_1.resize;
            });

        },

        //离网数数据初始化
        getLiquidFill_2Data: function() {
            const self = this;
            $.get("./json/storedenergy/liquidFillOption_2.asp", function(result) {
                data = eval('(' + result + ')');
                vm.liquidFillOption_2.series[0].data = data;
                vm.liquidFillChart_2 = echarts.init(self.$refs.liquidFillItem_2);
                vm.liquidFillChart_2.setOption(vm.liquidFillOption_2);
                window.onresize = vm.liquidFillChart_2.resize;
            });

        },

        //警告数数据初始化
        getLiquidFill_3Data: function() {
            const self = this;
            $.get("./json/storedenergy/liquidFillOption_3.asp", function(result) {
                data = eval('(' + result + ')');
                debugger
                vm.liquidFillOption_3.series[0].data = data;
                vm.liquidFillChart_3 = echarts.init(self.$refs.liquidFillItem_3);
                vm.liquidFillChart_3.setOption(vm.liquidFillOption_3);
                window.onresize = vm.liquidFillChart_3.resize;
            });

        },
        //充放电次数与充放电时间比数据初始化
        getImpulseEleData: function() {
            const self = this;
            $.get("./json/storedenergy/impulseEle.asp", function(result) {
                data = eval('(' + result + ')');
                vm.impulseEleOption.xAxis[0].data = data.time;
                vm.impulseEleOption.series[0].data = data.value;
                vm.impulseEleOption.series[1].data = data.number;
                /*$.each(data.value, function(i, e) {
                    vm.rankingBarOption.legend.data.push(e.name);
                })
                 vm.rankingBarOption.legend.data.push('同比率');*/

                // 基于准备好的dom，初始化echarts实例
                vm.impulseEleChart = echarts.init(self.$refs.impulseEleItem);
                vm.impulseEleChart.setOption(vm.impulseEleOption);
                window.onresize = vm.impulseEleChart.resize;
            });
        },

        // 充放电量趋势分析
        getImpulseEleTrendData: function() {
            const self = this;
            $.get("./json/storedenergy/impulseEleTrend.asp", function(result) {
                data = eval('(' + result + ')');
                vm.impulseEleTrendOption.xAxis[0].data = data.time;
                vm.impulseEleTrendOption.series[0].data = data.charge;
                vm.impulseEleTrendOption.series[1].data = data.discharge;
                vm.impulseEleTrendChart = echarts.init(self.$refs.impulseEleTrendItem);
                vm.impulseEleTrendChart.setOption(vm.impulseEleTrendOption);
                window.onresize = vm.impulseEleTrendChart.resize;
            });

        },

        // 剩余容量占比
        getResidualCapacityData: function() {
            const self = this;
            $.get("./json/storedenergy/residualCapacity.asp", function(result) {
                data = eval('(' + result + ')');
                $.each(data, function(i, e) {
                    var item = {
                        value: '',
                        itemStyle: {
                            normal: {
                                color: ''
                            }
                        }
                    };
                    vm.residualCapacityOption.angleAxis.data.push(e.name);
                    item.value = e.value,
                        item.itemStyle.normal.color = e.color,
                        vm.residualCapacityOption.series[0].data.push(item);

                })
                vm.residualCapacityChart = echarts.init(self.$refs.residualCapacityItem);
                vm.residualCapacityChart.setOption(vm.residualCapacityOption);
                window.onresize = vm.residualCapacityChart.resize;
            });

        },

        getLiquidFillData: function() {
            const self = this;
            $.get("./json/storedenergy/residualCapacity.asp", function(result) {
                data = eval('(' + result + ')');
                vm.liquidFillChart = echarts.init(self.$refs.liquidFillItem);
                vm.liquidFillChart.setOption(vm.liquidFillOption);
                window.onresize = vm.liquidFillChart.resize;
            });

        },
        // 渲染放电次数和充电时间和剩余电量
        getChargeData: function() {
            const self = this;
            $.get("./json/storedenergy/chargedata.asp", function(result) {
                data = eval('(' + result + ')');
                self.chargeData = data;
                // 渲染放电次数
                self.chargeOption.xAxis[0].data = ["放电次数", "对比数据"];
                self.chargeOption.series[0].data = self.chargeData.amount;
                var maxData = [];
                var maxNumArray = [];
                self.chargeData.amount.forEach(function(value, index) {
                    maxNumArray.push(value.value);
                })
                self.chargeData.amount.forEach(function(value, index) {
                    var num;
                    maxData.push({
                        name: value.name,
                        value: Math.max.apply(null, maxNumArray)
                    });
                });
                self.chargeOption.series[1].data = maxData;
                self.chargeOption.series[0].symbolBoundingData = Math.max.apply(null, maxNumArray);
                self.chargeOption.series[1].symbolBoundingData = Math.max.apply(null, maxNumArray);
                self.chargeOption.series[1].label.normal.formatter = function(params) {
                    var stuNum = 0;
                    self.chargeData.amount.forEach(function(value, index, array) {
                        if (params.name == value.name) {
                            stuNum = value.value;
                        }
                    })
                    return stuNum + '次';
                };
                self.chargeChart = echarts.init(self.$refs.secondChart1);
                self.chargeChart.setOption(self.chargeOption);
                window.onresize = self.chargeChart.resize;

                // 渲染充电时间
                self.chargeOption.xAxis[0].data = ["充电时间", "对比数据"];
                self.chargeOption.series[0].data = self.chargeData.time;
                var maxData = [];
                var maxNumArray = [];
                self.chargeData.time.forEach(function(value, index) {
                    maxNumArray.push(value.value);
                })
                self.chargeData.time.forEach(function(value, index) {
                    var num;
                    maxData.push({
                        name: value.name,
                        value: Math.max.apply(null, maxNumArray)
                    });
                });
                self.chargeOption.series[1].data = maxData;
                self.chargeOption.series[0].symbolBoundingData = Math.max.apply(null, maxNumArray);
                self.chargeOption.series[1].symbolBoundingData = Math.max.apply(null, maxNumArray);
                self.chargeOption.series[1].label.normal.formatter = function(params) {
                    var stuNum = 0;
                    self.chargeData.time.forEach(function(value, index, array) {
                        if (params.name == value.name) {
                            stuNum = value.value + 'h';
                        }
                    })
                    return stuNum;
                };
                self.chargeChart = echarts.init(self.$refs.secondChart2);
                self.chargeChart.setOption(self.chargeOption);
                window.onresize = self.chargeChart.resize;

                // 渲染充电时间
                self.electricOption.xAxis[0].data = ["充电时间", "对比数据"];
                self.electricOption.series[0].data = self.chargeData.electric;
                var maxData = [];
                var maxNumArray = [];
                self.chargeData.electric.forEach(function(value, index) {
                    maxNumArray.push(value.value);
                })
                self.chargeData.electric.forEach(function(value, index) {
                    var num;
                    maxData.push({
                        name: value.name,
                        value: Math.max.apply(null, maxNumArray)
                    });
                });
                self.electricOption.series[1].data = maxData;
                self.electricOption.series[0].symbolBoundingData = Math.max.apply(null, maxNumArray);
                self.electricOption.series[1].symbolBoundingData = Math.max.apply(null, maxNumArray);
                self.electricChart = echarts.init(self.$refs.electricChart);
                self.electricChart.setOption(self.electricOption);
                window.onresize = self.electricChart.resize;
            })
        },
        getStoredData: function() {
            const self = this;
            $.get("./json/storedenergy/storeddata.asp", function(result) {
                data = eval('(' + result + ')');
                self.storedData = data;

                // 渲染储能总数环形1
                self.storedOption.title.text = self.storedData.amount.title;
                self.storedOption.title.subtext = self.storedData.amount.value + self.storedData.amount.unit;
                self.storedOption.title.subtextStyle.color = "rgb(68,175,240)";
                self.storedOption.series[0].color[0] = "rgb(68,175,240)";
                self.storedOption.series[0].data[0] = self.storedData.amount.value;
                self.storedOption.series[0].data[1] = self.storedData.amount.total - self.storedData.amount.value;
                self.storedOption.graphic.elements[0].style.image = self.storedImg1;
                self.storedChart = echarts.init(self.$refs.firstCharts1);
                self.storedChart.setOption(self.storedOption);
                window.onresize = self.storedChart.resize;

                // 渲染储能总数环形2
                self.storedOption.title.text = self.storedData.capacity.title;
                self.storedOption.title.subtext = self.storedData.capacity.value + self.storedData.capacity.unit;
                self.storedOption.title.subtextStyle.color = "rgb(36,237,184)";
                self.storedOption.series[0].color[0] = "rgb(36,237,184)";
                self.storedOption.series[0].data[0] = self.storedData.capacity.value;
                self.storedOption.series[0].data[1] = self.storedData.capacity.total - self.storedData.capacity.value;
                self.storedOption.graphic.elements[0].style.image = self.storedImg2;
                self.storedChart = echarts.init(self.$refs.firstCharts2);
                self.storedChart.setOption(self.storedOption);
                window.onresize = self.storedChart.resize;

                // 渲染储能总数环形3
                self.storedOption.title.text = self.storedData.time.title;
                self.storedOption.title.subtext = self.storedData.time.value + self.storedData.time.unit;
                self.storedOption.title.subtextStyle.color = "rgb(246,213,74)";
                self.storedOption.series[0].color[0] = "rgb(246,213,74)";
                self.storedOption.series[0].data[0] = self.storedData.time.value;
                self.storedOption.series[0].data[1] = self.storedData.time.total - self.storedData.time.value;
                self.storedOption.graphic.elements[0].style.image = self.storedImg3;
                self.storedChart = echarts.init(self.$refs.firstCharts3);
                self.storedChart.setOption(self.storedOption);
                window.onresize = self.storedChart.resize;
            });
        }
    }
})