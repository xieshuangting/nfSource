var vm = new Vue({
    el: '#app',
    data: {
        infoData: {
            totalAmount: {
                title: "",
                value: ""
            },
            totalCus: {
                title: "",
                value: ""
            },
            ammeter: {
                title: "",
                value: ""
            },
            terminal: {
                title: "",
                value: ""
            }
        },
        // 运行数据综合分析
        sportData: {},
        sportChart: {},
        sportOption: {
            title: {
                text: "在线率",
                textStyle: {
                    color: '#fff',
                    fontSize: 32,
                    fontWeight: 'bold'
                },
                left: 'center',
                bottom: '15%'
            },
            series: [{
                type: 'pie',
                hoverAnimation: false,
                radius: ['79%', '80%'],
                startAngle: 225,
                labelLine: {
                    show: false
                },
                data: [{
                    value: 0.986 * 270,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: '98.60' + '%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#6959CD'
                                }, {
                                    offset: 1,
                                    color: '#ede0ff'
                                }]
                            },
                            borderWidth: 20
                        }
                    }
                }, {
                    value: 270 - 0.986 * 270,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(250,250,250,1)',
                            borderWidth: 5
                        }
                    }
                }, {
                    value: 80,
                    itemStyle: {
                        normal: {
                            color: "rgba(0,0,0,0)"
                        }
                    }
                }],
            }]
        },
        // 设备运行状态
        deviceData: {},
        deviceChart: {},
        deviceOption: {
            title: {
                text: "设备",
                textStyle: {
                    color: '#fff',
                    fontSize: 40,
                    fontWeight: 'bold'
                },
                left: '30%',
                bottom: 'center'
            },
            tooltip: {
                // show: false
                trigger: 'item',
                show: true,
                formatter: "{b} : {d}%",
                backgroundColor: 'rgba(0,0,0,0.7)', // 背景
                padding: [8, 10], //内边距
                extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            },
            legend: {
                show: true,
                left: 'right',
                top: 'center',
                orient: "vertical",
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                }
            },
            toolbox: {
                show: false
            },
            series: [{
                name: '',
                type: 'pie',
                clockWise: false,
                center: ['43%', '50%'],
                radius: [120, 170],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        }
                    }
                },
                data: []
            }]
        },
        // 告警事件信息统计
        warnData: {},
        warnChart: {},
        warnOption: {
            grid: {
                show: false,
                top: 10,
                bottom: 10
            },
            xAxis: [{
                gridIndex: 0,
                type: 'value',
                show: false,
                min: 0,
                max: 100,
                nameLocation: 'middle',
            }],
            yAxis: [{
                gridIndex: 0,
                min: 0,
                show: false,
                max: 100,
                nameLocation: 'middle',
            }],
            series: [{
                type: 'scatter',
                symbol: 'circle',
                symbolSize: 120,
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}',
                        color: '#fff'
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#00acea'
                    }
                },
                data: [{ name: '标题', value: [50, 50], symbolSize: 60 }]
            }]
        },
        //台区用电量趋势分析
        useEleData: {},
        useEleChart: '',
        useEleOption: {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 2000,
                    bottom: '3%',
                    width: '90%',
                    left: '5%',
                    lineStyle: {
                        color: '#fff',
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#fff'
                            },
                            fontSize: 20
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            },
                            fontSize: 20
                        }
                    },
                    checkpointStyle: {
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    controlStyle: {
                        normal: {
                            color: '#fff',
                            borderColor: '#fff'
                        },
                        emphasis: {
                            color: '#fff',
                            borderColor: '#fff'
                        }
                    },
                    data: [{
                        value: '2009',
                        symbol: 'diamond',
                        symbolSize: 16
                    }, '2010'],
                },
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
                color: ['#06C8FC', '#C1FF39'],
                grid: {
                    left: '7%',
                    right: '8%',
                    bottom: '25%'
                },
                calculable: true,
                legend: {
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 20
                    },
                    itemGap: 12,
                    data: ['发电量', '同比下降']
                },
                xAxis: [{
                    type: 'category',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#FFFFFF',
                            fontSize: 20,
                            lineHeight: 24
                        },
                        interval: 0
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
                        showMinLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#05edfc"
                        }
                    }
                }],
                series: [{
                    name: "发电量",
                    type: 'bar',
                    barWidth: '40%',
                    // data: [720, 712, 716, 816, 840, 828, 864, 932, 908, 924, 913.2, 908.5]
                }, {
                    name: '同比下降',
                    type: 'line',
                    smooth: true,
                    color: '#FEE100',
                    lineStyle: {
                        normal: {
                            width: 3,
                            shadowColor: 'rgba(0,0,0,0.4)',
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    // data: [100.8, 80.2, 110.5, 90.9, 80.4, 115.6, 76.7, 90.1, 68.9, 55.7, 133.6, 150.4]
                }],
            },
            options: [{
                title: { text: '2009曲线', show: false },
                series: [
                    // { data: dataMap.dataFDL['2009'] },
                    // { data: dataMap.dataTB['2009'] },
                ]
            }, {
                title: { text: '2010曲线', show: false },
                series: [
                    // { data: dataMap.dataFDL['2010'] },
                    // { data: dataMap.dataTB['2010'] },
                ]
            }]
        },
        //电能质量分析
        powerQualityData: {},
        powerQualityChart: '',
        powerQualityOption: {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 2000,
                    bottom: '3%',
                    width: '90%',
                    left: '5%',
                    lineStyle: {
                        color: '#fff',
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#fff'
                            },
                            fontSize: 20
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            },
                            fontSize: 20
                        }
                    },
                    checkpointStyle: {
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    controlStyle: {
                        normal: {
                            color: '#fff',
                            borderColor: '#fff'
                        },
                        emphasis: {
                            color: '#fff',
                            borderColor: '#fff'
                        }
                    },
                    data: [{
                        value: '2009',
                        symbol: 'diamond',
                        symbolSize: 16
                    }, '2010'],
                },
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
                color: [],
                grid: {
                    left: '7%',
                    right: '8%',
                    bottom: '25%'
                },
                legend: {
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 20
                    },
                    itemGap: 12,
                    data: ["电压合格率", "负载率", "降低损耗", "谐波", "三相不平衡"]
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
                }],
                series: [{
                        name: "电压合格率",
                        type: 'bar',
                        barWidth: '10%',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [10, 10, 0, 0],
                                color: '#FF5C5C'
                            },
                        },
                    },
                    {
                        name: "负载率",
                        type: 'bar',
                        barWidth: '10%',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [10, 10, 0, 0],
                                color: '#FFA897'
                            },
                        },
                    },
                    {
                        name: "降低损耗",
                        type: 'bar',
                        barWidth: '10%',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [10, 10, 0, 0],
                                color: '#44AFF0'
                            },
                        },
                    },
                    {
                        name: "谐波",
                        type: 'bar',
                        barWidth: '10%',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [10, 10, 0, 0],
                                color: '#C9FFA6'
                            },
                        },
                    },
                    {
                        name: "三相不平衡",
                        type: 'bar',
                        barWidth: '10%',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [10, 10, 0, 0],
                                color: '#52FFE2'
                            },
                        },
                    }
                ]
            },
            options: [{
                series: [
                    { data: [720, 712, 716, 816, 840, 828] },
                    { data: [720, 712, 716, 816, 840, 828] },
                    { data: [720, 712, 716, 816, 840, 828] },
                    { data: [720, 712, 716, 816, 840, 828] },
                    { data: [720, 712, 716, 816, 840, 828] },
                ]
            }, {
                series: [
                    { data: [720, 712, 716, 816, 840, 828] },
                    { data: [720, 712, 716, 816, 840, 828] },
                    { data: [720, 712, 716, 816, 840, 828] },
                    { data: [720, 712, 716, 816, 840, 828] },
                    { data: [720, 712, 716, 816, 100, 100] },
                ]
            }]
        },
        // 地图数据
        mapChart: '',
    },
    mounted: function() {
        this.getInfoData();
        this.getSportData();
        this.getDeviceData();
        this.getWarnData();
        this.getuseEleData();
        this.getPowerQualityData();
        this.getMapData();
    },
    methods: {
        getInfoData: function() {
            const self = this;
            $.get("./json/intelligent/infoData.asp", function(result) {
                self.infoData = eval('(' + result + ')');
            })
        },
        // 渲染运行数据综合分析
        showSportData: function(color1, color2, title, value, refEl, self) {
            self.sportOption.series[0].data[0].itemStyle.normal.borderColor.colorStops[0].color = color1;
            self.sportOption.series[0].data[0].itemStyle.normal.borderColor.colorStops[1].color = color2;
            self.sportOption.title.text = title;
            self.sportOption.series[0].data[0].value = value * 270;
            self.sportOption.series[0].data[0].label.normal.formatter = (value * 100).toFixed(2) + "%";
            self.sportOption.series[0].data[1].value = 270 - value * 270;
            vm.sportChart = echarts.init(refEl);
            vm.sportChart.setOption(vm.sportOption);
            window.onresize = vm.sportChart.resize;
        },
        getSportData: function() {
            const self = this;
            $.get("./json/intelligent/sportData.asp", function(result) {
                self.sportData = eval('(' + result + ')');
                // 综合效率
                self.showSportData("#6A5ACD", '#E8DBFD', self.sportData.overallEfficiency.title, self.sportData.overallEfficiency.value, self.$refs.sportItem1, self);

                // 电压合格率
                self.showSportData("#44AFF0", '#C6F0FF', self.sportData.passEfficiency.title, self.sportData.passEfficiency.value, self.$refs.sportItem2, self);

                // 降低台区损耗
                self.showSportData("#4777F5", '#B4E4FF', self.sportData.reduceLost.title, self.sportData.reduceLost.value, self.$refs.sportItem3, self);

                // 负载率
                self.showSportData("#F69846", '#F6E1C0', self.sportData.loadEfficiency.title, self.sportData.loadEfficiency.value, self.$refs.sportItem4, self);
            })
        },
        showDeviceData: function(self, data, title, titleLeft, refEl, color) {
            var deviceData = data;
            var data1 = [];
            var color = color;
            for (var i = 0; i < deviceData.length; i++) {
                data1.push({
                    value: deviceData[i].value,
                    name: deviceData[i].name,
                    itemStyle: {
                        normal: {
                            borderWidth: 4,
                            borderColor: '#C5ECFF',
                            color: color[i]
                        }
                    },
                });
            };
            self.deviceOption.series[0].data = data1;
            self.deviceOption.title.text = title;
            self.deviceOption.title.left = titleLeft;
            vm.deviceChart = echarts.init(refEl);
            vm.deviceChart.setOption(vm.deviceOption);
            window.onresize = vm.deviceChart.resize;
        },
        getDeviceData: function() {
            const self = this;
            $.get("./json/intelligent/deviceData.asp", function(result) {
                self.deviceData = eval('(' + result + ')');
                self.showDeviceData(self, self.deviceData.device.data, self.deviceData.device.title, '35%', self.$refs.deviceItem1, ['#52FFE2', '#FFA897', '#FF5C5C']);

                self.showDeviceData(self, self.deviceData.deviceWarn.data, self.deviceData.deviceWarn.title, '30%', self.$refs.deviceItem2, ['#44AFF0', '#ffec78']);

            })
        },
        getWarnData: function() {
            const self = this;
            $.get("./json/intelligent/warnData.asp", function(result) {
                self.warnData = eval('(' + result + ')');
                var data = self.warnData.data;
                var dataList = self.warnData.datalist;
                var datas = [];
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    var itemToStyle = dataList[i];
                    datas.push({
                        name: item.value + '\n' + item.name,
                        value: itemToStyle.offset,
                        symbolSize: itemToStyle.symbolSize,
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: itemToStyle.symbolSize / 5
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: itemToStyle.color,
                                opacity: .8
                            }
                        },
                    })
                };
                self.warnOption.series[0].data = datas;
                vm.warnChart = echarts.init(self.$refs.warnItem);
                vm.warnChart.setOption(vm.warnOption);
                window.onresize = vm.warnChart.resize;
            })
        },
        getuseEleData: function() {
            const self = this;
            $.get("./json/intelligent/useEle.asp", function(result) {
                self.useEleData = eval('(' + result + ')');
                vm.useEleOption.baseOption.xAxis[0].data = self.useEleData.time;

                var dataMap = {};
                var yearLastIndex = self.useEleData.year.length - 1;

                function dataFormatter(obj) {
                    var pList = self.useEleData.time;
                    var temp;
                    for (var year = self.useEleData.year[0]; year <= self.useEleData.year[yearLastIndex]; year++) {
                        var max = 0;
                        var sum = 0;
                        temp = obj[year];
                        for (var i = 0, l = temp.length; i < l; i++) {
                            max = Math.max(max, temp[i]);
                            sum += temp[i];
                            obj[year][i] = {
                                name: pList[i],
                                value: temp[i]
                            }
                        }
                        obj[year + 'max'] = Math.floor(max / 100) * 100;
                        obj[year + 'sum'] = sum;
                    }
                    return obj;
                }

                dataMap.dataFDL = dataFormatter(self.useEleData.use);
                dataMap.dataTB = dataFormatter(self.useEleData.rate);

                $.each(self.useEleData.year, function(index, item) {
                    self.useEleOption.options[index] = {
                        series: [
                            { data: dataMap.dataFDL[item] },
                            { data: dataMap.dataTB[item] },
                        ]
                    }
                    if ((index + 1) % 4 == 0) {
                        self.useEleOption.baseOption.timeline.data[index] = { value: item, symbol: 'diamond', symbolSize: 20 }
                    } else {
                        self.useEleOption.baseOption.timeline.data[index] = { value: item, symbolSize: 20 }
                    }
                });
                // 基于准备好的dom，初始化echarts实例
                vm.useEleChart = echarts.init(self.$refs.useEleItem);
                vm.useEleChart.setOption(vm.useEleOption);
                window.onresize = vm.useEleChart.resize;
            });
        },
        getPowerQualityData: function() {
            const self = this;
            $.get("./json/intelligent/powerQuality.asp", function(result) {
                self.powerQualityData = eval('(' + result + ')');
                vm.powerQualityOption.baseOption.xAxis[0].data = self.powerQualityData.time;

                var dataMap = {};
                var yearLastIndex = self.powerQualityData.year.length - 1;

                function dataFormatter(obj) {
                    var pList = self.powerQualityData.time;
                    var temp;
                    for (var year = self.powerQualityData.year[0]; year <= self.powerQualityData.year[yearLastIndex]; year++) {
                        var max = 0;
                        var sum = 0;
                        temp = obj[year];
                        for (var i = 0, l = temp.length; i < l; i++) {
                            max = Math.max(max, temp[i]);
                            sum += temp[i];
                            obj[year][i] = {
                                name: pList[i],
                                value: temp[i]
                            }
                        }
                        obj[year + 'max'] = Math.floor(max / 100) * 100;
                        obj[year + 'sum'] = sum;
                    }
                    return obj;
                }

                dataMap.data1 = dataFormatter(self.powerQualityData.data1);
                dataMap.data2 = dataFormatter(self.powerQualityData.data2);
                dataMap.data3 = dataFormatter(self.powerQualityData.data3);
                dataMap.data4 = dataFormatter(self.powerQualityData.data4);
                dataMap.data5 = dataFormatter(self.powerQualityData.data5);

                $.each(self.powerQualityData.year, function(index, item) {
                    self.powerQualityOption.options[index] = {
                        series: [
                            { data: dataMap.data1[item] },
                            { data: dataMap.data2[item] },
                            { data: dataMap.data3[item] },
                            { data: dataMap.data4[item] },
                            { data: dataMap.data5[item] },
                        ]
                    }
                    if ((index + 1) % 4 == 0) {
                        self.powerQualityOption.baseOption.timeline.data[index] = { value: item, symbol: 'diamond', symbolSize: 20 }
                    } else {
                        self.powerQualityOption.baseOption.timeline.data[index] = { value: item, symbolSize: 20 }
                    }
                });
                // 基于准备好的dom，初始化echarts实例
                vm.powerQualityChart = echarts.init(self.$refs.powerQualityItem);
                vm.powerQualityChart.setOption(vm.powerQualityOption);
                window.onresize = vm.powerQualityChart.resize;
            });
        },
        getMapData: function() {
            const self = this;
            //乳源地图
            $.get('./json/intelligent/mapData.asp', function(result) {
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
                            itemWidth: 85,
                            itemHeight: 85,
                            itemGap: 16,
                            right: '80',
                            top:'40',
                            data:['智慧台区'],
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: 32,
                            },
                            borderColor:'#fff',
                            borderWidth:2,
                            borderRadius:[25,25,25,25],
                            padding:[5,30]
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
                                color:{
                                        image: "./img/智慧台区展示/地图.png",
                                        repeat: 'repeat'
                                    },
                                normal: {
                                    opacity: 0.8,
                                    borderColor: 'rgba(115, 255, 250,0)',
                                    borderWidth: 6,
                                    areaColor: {
                                        type: 'radial',
                                        x: 0.6,
                                        y: 0.6,
                                        r: 0.8,
                                        colorStops: [{
                                            offset: 0,
                                            color: 'rgba(185, 230, 255,0.3)' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: 'rgba(185, 230, 255,0.3)' // 100% 处的颜色
                                        }],
                                        globalCoord: false // 缺省为 false
                                    },                   
                                    shadowColor: 'rgba(69, 137, 155,1)',
                                    shadowOffsetX: -2,
                                    shadowOffsetY: 2,
                                    shadowBlur: 10,
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 32
                                        }
                                    }
                                },
                                emphasis: {
                                    areaColor: 'rgba(185, 230, 255,0.3)',
                                    borderWidth: 4,
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
                                name:'智慧台区',
                                type: 'scatter', // series图表类型
                                coordinateSystem: 'geo', // series坐标系类型
                                symbolSize: 190,
                                symbol: "image://img/智慧台区展示/地图定点.png",
                                data: data // series数据内容
                            }
                        ]
                    };
                    vm.mapChart = echarts.init(self.$refs.mapItem);
                    vm.mapChart.setOption(option);
                })
            })
        },
    }
})