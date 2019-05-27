var vm = new Vue({
    el: '#app',
    data: {
        // 预测分析数据
        forecastData: {
            rate: { name: '' },
            capacity: { name: '' }
        },
        // 数字9-0和.对应的iconfont代码 
        numIconList: ["&#xe621;", "&#xe627;", "&#xe623;", "&#xe624;", "&#xe69a;", "&#xe626;", "&#xe62b;", "&#xe70f;", "&#xe69e;", "&#xe69f;", "&#xe608;"],
        numList1: [],
        numList2: [],

        // 综合分析仪表盘数据
        multipleData: {
            totalCapacity: { title: '', unit: '' },
            yearCapacity: { title: '', unit: '' },
        },
        multipleCharts: '',
        multipleOption: {
            tooltip: {
                formatter: "{a} {b} : {c}"
            },
            series: []
        },
        numList3:[],
        numList4:[],

        // 运行指数数据
        sportData: {
            runData: { title: '', value: '' },
            badAmoumt: { title: '', value: '' },
            badRate: { title: '', value: '' }
        },

        // 社会贡献数据
        devoteData: {
            CO2: { title: '', value: '' },
            coal: { title: '', value: '' },
            tree: { title: '', value: '' }
        },

        // 小水电运行数据
        waterSportData: {
            data: [{
                name: '',
                done: { title: '', amount: '' },
                warn: { title: '', amount: '' }
            }]
        },

        //小水电站项目占比分析
        stationChart: '',
        stationOption: {
            backgroundColor: 'rgba(0,0,0,0)', //rgba设置透明度
            legend: {
                orient: 'vertical',
                type: 'scroll', //设置legend滚动轴的出现
                x: '80%',
                y: '15%',
                pageTextStyle: {
                    color: 'rbg(152,155,162)'
                },
                itemGap: 12,
                data: [],
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 20
                }
            },
            //calculable : true,
            color: ['#007BFF', '#FF902C', '#FF52DA', '#52FFE2', '#FEE100'],
            // grid: {
            //        left: '0',
            //        right: '0',
            //        bottom: '2%',
            //        top: '5%'
            //    },
            series: [{
                name: '电站项目区域分析',
                type: 'pie',
                radius: [30, 190],
                center: ['45%', '55%'],
                roseType: 'area',
                label: {
                    normal: {
                        formatter: '{b}',
                        rich: {
                            b: {
                                fontSize: 20,
                                lineHeight: 24
                            },
                            c: {
                                fontSize: 20,
                                lineHeight: 24
                            }
                        }
                    }
                },
                data: []
            }]
        },
        //小水电站效益分析
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
                    return params[0].name + '：运行' + params[1].value + ' h，发电' + params[0].value + ' 万kWh';
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
                data: ['发电量', '运行时间']
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
                name: '万kWh',
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
                    color: '#F6D54A',
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
                            color: '#0e2147'
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
                            color: '#F6D54A'
                        }
                    },
                    data: []
                },
                {
                    name: '运行时间',
                    type: 'line',
                    smooth: true,
                    yAxisIndex: 1,
                    xAxisIndex: 0,
                    color: '#24E9B5',
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
        //项目分布地图
        mapChart: '',
        mapOption: {}
    },
    mounted: function() {
        this.getForecastData();
        this.getSportData();
        this.getDevoteData();
        this.getWaterSportData();
        this.getStationData();
        this.getBarData();
        this.getMapData();
        this.getZongheData();
    },
    methods: {
        // 渲染综合分析
        getZongheData: function() {
            const self = this;
            // 渲染图表
            $.get("./json/hydropower/analysis.asp", function(result) {
                self.multipleData = eval('(' + result + ')');
                var dataAll = self.multipleData.useload;
                var position = [
                    ['30%', '50%'],
                    ['80%', '50%']
                ];
                var getStyle = function(value) {
                    if (value <= 30) {
                        return {
                            splitNumber: 3, //刻度数量
                            min: 0,
                            max: 30,
                            startAngle: 225,
                            endAngle: 144,
                            color: [
                                [1, '#FF0000']
                            ]
                        };
                    } else if (value >= 90) {
                        return {
                            splitNumber: 1, //刻度数量
                            min: 90,
                            max: 100,
                            startAngle: -18,
                            endAngle: -45,
                            color: [
                                [1, '#60b044']
                            ]
                        };
                    } else {
                        return {
                            splitNumber: 6, //刻度数量
                            min: 30,
                            max: 90,
                            startAngle: 144,
                            endAngle: -18,
                            color: [
                                [1, '#ffce00']
                            ]
                        };
                    }
                };
                var makeSeries = function() {
                    var series = [];
                    dataAll.forEach(function(item, index) {
                        let style = getStyle(item[1]);
                        series.push({
                            name: item[index],
                            left: 0,
                            center: position[index],
                            type: 'gauge',
                            splitNumber: 10, //刻度数量
                            min: 0,
                            max: 100,
                            radius: '100%', //图表尺寸
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    width: 2,
                                    shadowBlur: 0,
                                    color: [
                                        [1, '#306ABC']
                                    ]
                                }
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#306ABC',
                                    width: 1
                                },
                                length: 8,
                                splitNumber: 5
                            },
                            splitLine: {
                                show: true,
                                length: 12,
                                lineStyle: {
                                    color: '#7887ae',
                                }
                            },
                            axisLabel: {
                                distance: 2,
                                textStyle: {
                                    color: "#fff",
                                    fontSize: "14",

                                },
                                formatter: function(e) {
                                    switch (e + "") {
                                        case "0":
                                            return "0%";
                                        default:
                                            return e+"%";
                                    }
                                }

                            },
                            pointer: { //仪表盘指针
                                show: 0
                            },
                            title: {
                                offsetCenter: [0, '90%'],
                                fontSize: 32,
                                color: "#fff"
                            },
                            detail: {
                                show: false
                            },
                            data: [{
                                name: item[0],
                                value: item[1]
                            }]
                        });
                        series.push({
                            name: item[0],
                            type: 'gauge',
                            center: position[index],
                            splitNumber: style.splitNumber, //刻度数量
                            min: style.min,
                            max: style.max,
                            startAngle: style.startAngle,
                            endAngle: style.endAngle,
                            radius: '100%', //图表尺寸
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    width: 2,
                                    shadowBlur: 0,
                                    color: style.color
                                }
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: 'auto',
                                    width: 1
                                },
                                length: 8,
                                splitNumber: 5
                            },
                            splitLine: {
                                show: true,
                                length: 12,
                                lineStyle: {
                                    color: 'auto',
                                }
                            },
                            axisLabel: {
                                show: false
                            },
                            pointer: { //仪表盘指针
                                show: 1,
                                length: '70%',
                                width: 2
                            },
                            detail: {
                                borderColor: '#ccc',
                                shadowColor: '#ccc', //默认透明
                                shadowBlur: 5,
                                offsetCenter: [0, '30%'], // x, y，单位px
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    color: '#333',
                                    fontSize: 35,
                                },
                                formatter: '{value}'
                            },
                            data: [{
                                name: "",
                                value: item[1]
                            }]
                        });

                    });
                    return series;
                }
                var list = makeSeries();
                self.multipleOption.series = list;
                self.multipleCharts = echarts.init(self.$refs.gauge1);
                self.multipleCharts.setOption(self.multipleOption);
                window.onresize = self.multipleCharts.resize;

                // 渲染左侧数字
                // 转换总装机空量
                var numStr = self.multipleData.totalCapacity.value + '';
                for (var i = 0; i < numStr.length; i++) {
                    if (numStr.substr(i, 1) < 10) {
                        self.numList3[i] = self.numIconList[numStr.substr(i, 1)];
                    } else if (numStr.substr(i, 1) == ".") {
                        self.numList3[i] = self.numIconList[10];
                    } else if (numStr.substr(i, 1) == "0") {
                        self.numList3[i] = self.numIconList[9];
                    }
                }

                // 转换年发电量
                var numStr = self.multipleData.yearCapacity.value + '';
                for (var i = 0; i < numStr.length; i++) {
                    if (numStr.substr(i, 1) < 10) {
                        self.numList4[i] = self.numIconList[numStr.substr(i, 1)];
                    } else if (numStr.substr(i, 1) == ".") {
                        self.numList4[i] = self.numIconList[10];
                    } else if (numStr.substr(i, 1) == "0") {
                        self.numList4[i] = self.numIconList[9];
                    }
                }
            });
        },
        // 渲染预测分析数据
        getForecastData: function() {
            const self = this;
            $.get("./json/hydropower/forecastdata.asp", function(result) {
                self.forecastData = eval('(' + result + ')');
                // 转换昨日发电量
                var numStr = self.forecastData.capacity.value + '';
                for (var i = 0; i < numStr.length; i++) {
                    if (numStr.substr(i, 1) < 10) {
                        self.numList1[i] = self.numIconList[numStr.substr(i, 1)];
                    } else if (numStr.substr(i, 1) == ".") {
                        self.numList1[i] = self.numIconList[10];
                    } else if (numStr.substr(i, 1) == "0") {
                        self.numList1[i] = self.numIconList[9];
                    }
                }

                // 转换预测今日发电量
                numStr = self.forecastData.rate.value + '';
                for (var i = 0; i < numStr.length; i++) {
                    if (numStr.substr(i, 1) < 10) {
                        self.numList2[i] = self.numIconList[numStr.substr(i, 1)];
                    } else if (numStr.substr(i, 1) == ".") {
                        self.numList2[i] = self.numIconList[10];
                    } else if (numStr.substr(i, 1) == "0") {
                        self.numList2[i] = self.numIconList[9];
                    }
                }
            })
            // 基于准备好的dom，初始化echarts实例
            // this.multipleCharts = echarts.init(this.$refs.gauge1);
            // this.multipleCharts.setOption(this.multipleOption);
            // window.onresize = this.multipleCharts.resize;
            // this.multipleCharts = echarts.init(this.$refs.gauge2);
            // this.multipleCharts.setOption(this.multipleOption);
            // window.onresize = this.multipleCharts.resize;
        },
        // 渲染运行指数的数据
        getSportData: function() {
            const self = this;
            $.get("./json/hydropower/sportdata.asp", function(result) {
                self.sportData = eval('(' + result + ')');
            })
        },
        // 渲染社会贡献的数据
        getDevoteData: function() {
            const self = this;
            $.get("./json/hydropower/devotedata.asp", function(result) {
                self.devoteData = eval('(' + result + ')');
            })
        },
        // 渲染小水电运行数据
        getWaterSportData: function() {
            const self = this;
            $.get("./json/hydropower/watersportdata.asp", function(result) {
                self.waterSportData = eval('(' + result + ')');
                // console.log(result)
            })
        },

        //水电站数据初始化
        getStationData: function() {
            const self = this;
            //初始化饼图数据
            $.get("./json/hydropower/station.asp", function(result) {
                vm.stationOption.series[0].data = eval('(' + result + ')');
                $.each(vm.stationOption.series[0].data, function(i, e) {
                    vm.stationOption.legend.data.push(e.name)
                })
                // 基于准备好的dom，初始化echarts实例
                vm.stationChart = echarts.init(self.$refs.stationItem);
                vm.stationChart.setOption(vm.stationOption);
                window.onresize = vm.stationChart.resize;
            });
        },
        //小水电站效益分析数据初始化
        getBarData: function() {
            const self = this;
            $.get("./json/hydropower/bar.asp", function(result) {
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


        //获取点
        getPoint: function(dataArr) {
            var itemArr = [];
            for (var i = 1; i < (dataArr.length + 1); i++) {
                var item = {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#FFFFFF",
                            borderColor: '#F6D54A',
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
                                    color: '#F6D54A'
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

        //地图数据初始化
        getMapData:function(){
                const self = this;
                //乳源地图
                $.get('./json/hydropower/map.asp',function(result){
                    data = eval('('+result+')');
                    $.get('./json/ruyuan.json', function(geoJson){
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
                            top:'12%',
                            data:['<10WM','10WM-20WM','>40WM'],
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: 24,
                            }
                        },
                        geo: {
                            map: '乳源',
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
                            top: '12%',
                            left: '40%',
                            itemStyle: {
                                    normal: {
                                            opacity:1,
                                            borderColor:'rgba(115, 255, 250,0.8)',
                                            borderWidth: 5,
                                            areaColor: 'rgba(69, 137, 155,0.8)',
                                            //shadowColor: 'rgb(115, 255, 250)',
                                            //shadowColor: 'rgba(255, 255, 255, 1)',
                                            //shadowColor: 'rgba(69, 137, 155,0.6)',
                                            //shadowOffsetX: -2,
                                            //shadowOffsetY: 2,
                                            //shadowBlur: 10,
                                            label:{
                                                show:true,
                                                textStyle:{
                                                    color: '#fff',
                                                    fontSize:32
                                                }
                                            }
                                        },
                                    emphasis: {
                                            areaColor: 'rgba(69, 137, 155,0.8)',
                                            borderColor:'rgba(115, 255, 250,0.85)',
                                            borderWidth: 4,
                                            label:{
                                                show:true,
                                                textStyle:{
                                                    color: '#fff',
                                                    fontSize:32
                                                }
                                            }
                                    },
                            },
                            data:''
                        },
                        series: [
                            {
                                name: '<10WM',
                                type: 'scatter', // series图表类型
                                coordinateSystem: 'geo', // series坐标系类型
                                symbolSize: 40,
                                symbol:"image://img/风电项目展示/三级风电-8.png",
                                data: data[0].data // series数据内容
                            },
                            {
                                name: '10WM-20WM',
                                type: 'scatter', // series图表类型
                                coordinateSystem: 'geo', // series坐标系类型
                                symbolSize: 40,
                                symbol:"image://img/风电项目展示/二级风电-8.png",
                                data: data[1].data // series数据内容
                             },
                             {
                                name: '>40WM',
                                type: 'scatter', // series图表类型
                                coordinateSystem: 'geo', // series坐标系类型
                                symbolSize: 40,
                                symbol:"image://img/风电项目展示/一级风电-8.png",
                                data: data[2].data // series数据内容
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

    }
})