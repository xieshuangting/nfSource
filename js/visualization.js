var vm = new Vue({
    el: '#app',
    data: {
        radioButton:true,
        totalData: {
            todayPower: {
                title: "",
                unit: "",
                value: 0
            },
            topWater: {
                title: "",
                unit: "",
                value: 0
            },
            bottomWater: {
                title: "",
                unit: "",
                value: 0
            },
            storage: {
                title: "",
                unit: "",
                value: 0
            },
            float: {
                title: "",
                unit: "",
                value: 0
            },
            u: {
                title: "",
                unit: "",
                value: 0
            },
            i: {
                title: "",
                unit: "",
                value: 0
            },
            p: {
                title: "",
                unit: "",
                value: 0
            },
            q: {
                title: "",
                unit: "",
                value: 0
            },
            s: {
                title: "",
                unit: "",
                value: 0
            },
            speed: {
                title: "",
                unit: "",
                value: 0
            },
            power: {
                title: "",
                unit: "",
                value: 0
            },
            com: {
                title: "",
                status: 0,
                capital: 0,
                calss: ""
            },
            water: {
                yearPower: {
                    title: "",
                    unit: "",
                    value: 0
                },
                time: {
                    title: "",
                    unit: "",
                    value: 0
                },
                load: {
                    title: "",
                    unit: "",
                    value: 0
                },
                eff: {
                    title: "",
                    unit: "",
                    value: 0
                },
            }
        },
        time: '',
        random: 1,
        //发电量与发电效益分析-2018
        barChart: '',
        barOption: {
            tooltip: {
                show: "true",
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    shadowStyle: {
                        color: 'rgba(112,112,112,0)',
                    },
                },
                formatter: function(params) {
                    var unit = params[0].name.substring(params[0].name.indexOf('(') + 1, params[0].name.indexOf(')'));
                    return params[0].name + '：发电' + params[0].value + ' kWh，效益：' + params[1].value + '%';
                },
                backgroundColor: 'rgba(0,0,0,0.7)', // 背景
                padding: [8, 10], //内边距
                extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            },
            color: ['#3398DB'],
            grid: {
                left: '10%',
                right: '8%',
            },
            legend: {
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 20
                },
                itemGap: 12,
                data: ['发电量', '发电效益']
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
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: []
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: []
            }],
            yAxis: [{
                name: '（kWh）',
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
                    showMinLabel: true,
                    formatter: '{value}'
                },
                axisLine: {
                    lineStyle: {
                        color: "#05edfc"
                    }
                },
            }, {
                //name: 'h',
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
                    formatter: "{value}%",
                    interval: 0,
                    showMinLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: "#05edfc"
                    }
                },
                splitLine: { //y轴刻度线
                    show: false
                },
                min: 0,
                max: 100,
                position: 'right',
            }, ],
            series: [{
                    name: '发电量',
                    type: 'bar',
                    stack: 1,
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    barWidth: 10,
                    barGap: 5,
                    z: 2,
                    color: '#44AFF0',
                    data: []
                },
                {
                    type: 'scatter',
                    hoverAnimation: false,
                    xAxisIndex: 2,
                    yAxisIndex: 0,
                    symbolOffset: [0, 0], //相对于原本位置的偏移量
                    symbolSize: 10,
                    z: 2,
                    data: []
                },
                {
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 0,
                    barGap: '140%',
                    data: [],
                    barWidth: 22,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 50,
                            color: '#6A4C49'
                        }
                    },
                    z: 1
                },
                {
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 0,
                    barWidth: 30,
                    barGap: 1,
                    z: 0,
                    itemStyle: {
                        normal: {
                            color: '#44AFF0'
                        }
                    },
                    data: []
                },
                {
                    name: '发电效益',
                    type: 'line',
                    smooth: true,
                    yAxisIndex: 1,
                    xAxisIndex: 0,
                    color: '#24edb8',
                    splitLine: {
                        show: false
                    },
                    axisTick: { //y轴刻度线
                        show: false
                    },
                    lineStyle: {
                        normal: {
                            width: 3,
                            shadowColor: 'rgba(0,0,0,0.4)',
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    data: []
                },

            ]
        },
        //未来七天发电量预测分析
        eleEnergyChart: '',
        eleEnergyOption: {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            /*legend: {
                data: ['充电量', '放电量'],
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 20
                },
            },*/
            grid: {
                left: '5%',
                right: '8%',
                bottom: '5%',
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
                name: '（kWh）',
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
                name: '发电量',
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
                            color: '#F6D04D'
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
                        color: '#F6D04D',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12

                    }
                },
                data: []
            }]
        },
        //未来七天气象预测分析
        weatherChart: '',
        weatherOption: {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                data: ['温度', '湿度'],
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 20
                },
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
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
                name: '（℃）',
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
                },
            }, {
                name: '（%RH）',
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
                },
                splitLine: { //y轴刻度线
                    show: false
                },
                position: 'right',
            }],
            series: [{
                name: '温度',
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

                itemStyle: {
                    normal: {
                        color: '#F6D04D',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12

                    }
                },
                data: []
            }, {
                name: '湿度',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },

                itemStyle: {
                    normal: {
                        color: '#FF4343',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12

                    }
                },
                data: []
            }]
        },
        // 降雨量预测分析
        jylChart: '',
        jylOption: {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                data: ['降雨量'],
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 20
                },
            },
            grid: {
                left: '5%',
                right: '8%',
                bottom: '5%',
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
                name: '（mm）',
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
                name: '降雨量',
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
                itemStyle: {
                    normal: {
                        color: '#F6D04D',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12

                    }
                },
                data: []
            }]
        },
    },
    mounted: function() {
        this.getBarData();
        this.getEleEnergyData();
        this.getTotalData();
        const self = this;
        setInterval(function() {
            var myDate = new Date(); //获取系统当前时间
            self.time = myDate.toLocaleString(); //获取日期与时间
            if (self.time.indexOf("上午") != -1) {
                self.time = self.time.replace('上午', '');
            }
            // else if (self.time.indexOf("下午") != -1) {
            //     self.time = self.time.replace('下午', '');
            //     parseInt(self.time.slice(self.time.indexOf(' ')+1,self.time.indexOf(':')))+12
            // }
        }, 1000);
        setInterval(function() {
            self.random = Math.random();
            self.getEleEnergyData();
        }, 60000);
        setTimeout(function(){
            self.getWeatherData();
        },1000)
    },
    methods: {
        getTotalData: function() {
            const self = this;
            $.get("./json/visualization/totaldata.asp", function(result) {
                self.totalData = eval('(' + result + ')');
            })
        },
        getBarData: function() {
            const self = this;
            $.get("./json/visualization/bar.asp", function(result) {
                data = eval('(' + result + ')');

                vm.barOption.series[0].data = self.getBarStyle(data.barData, true);
                vm.barOption.series[1].data = self.getPoint(data.barData);
                vm.barOption.series[2].data = data.barData;
                vm.barOption.series[3].data = self.getBarStyle(data.barData, false);
                vm.barOption.series[4].data = data.lineData;
                vm.barOption.xAxis[0].data = data.time;
                vm.barOption.xAxis[1].data = data.time;
                vm.barOption.xAxis[2].data = data.time;

                // 基于准备好的dom，初始化echarts实例
                vm.barChart = echarts.init(self.$refs.barItem);
                vm.barChart.setOption(vm.barOption);
                window.onresize = vm.barChart.resize;
            });
        },
        getEleEnergyData: function() {
            const self = this;
            $.get("./json/visualization/eleEnergy.asp", function(result) {
                data = eval('(' + result + ')');
                vm.eleEnergyOption.xAxis[0].data = self.getDateArray();
                vm.eleEnergyOption.series[0].data = data.eleEnergy.map(function(i){return i*self.random});
                vm.eleEnergyChart = echarts.init(self.$refs.eleEnergyItem);
                vm.eleEnergyChart.setOption(vm.eleEnergyOption);
                window.onresize = vm.eleEnergyChart.resize;
            });
        },
        getWeatherData: function() {
            const self = this;
            $.get("./json/visualization/weather.asp", function(result) {
                data = eval('(' + result + ')');
                vm.weatherOption.xAxis[0].data = self.getDateArray();
                vm.weatherOption.series[0].data = maxwd;
                vm.weatherOption.series[1].data = ysd;
                vm.weatherChart = echarts.init(self.$refs.weatherItem);
                vm.weatherChart.setOption(vm.weatherOption);
                window.onresize = vm.weatherChart.resize;

                vm.jylOption.xAxis[0].data = self.getDateArray();
                vm.jylOption.series[0].data = yldata;
                vm.jylChart = echarts.init(self.$refs.jslItem);
                vm.jylChart.setOption(vm.jylOption);
                window.onresize = vm.jylChart.resize;
            });
        },
        //获取点
        getPoint: function(dataArr) {
            var itemArr = [];
            for (var i = 1; i < (dataArr.length + 1); i++) {
                var item = {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#FFFFFF",
                            borderColor: '#44AFF0',
                            borderWidth: 6,
                        }
                    }
                };
                itemArr.push(item);
            }
            return itemArr;
        },
        //生成柱状样式
        getBarStyle: function(dataArr, flag) {
            var itemArr = [];
            if (flag) {
                for (var i = 1; i < (dataArr.length + 1); i++) {
                    var item = {
                        value: dataArr[i - 1],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 50,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#44AFF0'
                                }])
                            }
                        }
                    };
                    itemArr.push(item);
                }
                return itemArr;
            } else {
                for (var i = 1; i < (dataArr.length + 1); i++) {
                    var item = {
                        value: dataArr[i - 1],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 50,
                            }
                        }
                    };
                    itemArr.push(item);
                }
                return itemArr;
            }
        },
        getDateArray: function(){//n为你要传入的参数，当前为0，前一天为-1，后一天为1
            var array = [];
            for(var i=1;i<=7;i++){
                var date = new Date() ;
                date.setDate(date.getDate()+i);
                var day = date.getDate() ;
                var s  =  ( day < 10 ? ( '0' + day ) : day)+'日' ;
                array.push(s);
            }
            return array ;
        },
    }
})