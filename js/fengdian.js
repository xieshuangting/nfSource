var vm = new Vue({
    el: '#app',
    data: {
        // 预测分析数据
        forecastData:{
            generating:{
                yesterday:0,
                today:0,
                tomorrow:0
            }
        },
        // 9-0 . 
        numIconList:["&#xe621;","&#xe627;","&#xe623;","&#xe624;","&#xe69a;","&#xe626;","&#xe62b;","&#xe70f;","&#xe69e;","&#xe69f;","&#xe608;"],
        numList1:[],
        numList2:[],
        numList3:[],
        //安全指数数据
        safeData: '',
        safeChart: '',
        safeOption: {
            title: {
                text: '',
                subtext: '',
                itemGap: 10,
                x: 'center',
                y: 'center',
                top: '36%',
                padding: 5,
                textStyle: {
                    fontWeight: 500,
                    fontSize: 20,
                    color: '#fff'
                },
                subtextStyle: {
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#fff'
                }
            },
            color: ["#fff"], //圆环的颜色设置

            series: [{
                name: '数据占比',
                type: 'pie',
                hoverAnimation: false,
                radius: ['70%', '90%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: 15,
                            color: '#00a65a'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        value: 333,
                        name: '',
                        itemStyle: { //底层样式
                            normal: {
                                color: '', //圆环的颜色
                            }
                        }
                    },
                    {
                        value: 44,
                        name: '',
                        itemStyle: { //底层样式
                            normal: {
                                color: 'rgba(58,105,128,0.5)',
                            },
                            // emphasis: { //悬浮式样式
                            //     color: 'rgba( 0,0,0,.1)'
                            // }
                        }
                    }
                ]
            }]
        },
        // 运行数据
        sportData: '',
        sportChart: '',
        sportOption: {
            // backgroundColor: '',
            title: [{
                x: "center",
                bottom: 0,
                text: '',
                subtext: '',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 32,
                    color: "#fff" //标题文字的颜色
                },
                subtextStyle: {
                    fontWeight: 600,
                    fontSize: 32,
                    color: '#fff'
                }
            }],
            tooltip: {
                show: true,
            },
            series: [{
                type: 'gauge',
                center: ['50%', '50%'], // 默认全局居中  
                radius: '78%',
                splitNumber: 10, //刻度数量
                min: 0,
                max: 100,
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
                        color: '#fff', //刻度的颜色
                        width: 1
                    },
                    length: -15,
                    splitNumber: 10
                },
                splitLine: {
                    show: true,
                    length: -20,
                    lineStyle: {
                        color: '#fff', //分区刻度的颜色
                    }
                },
                axisLabel: {
                    distance: -20,
                    textStyle: {
                        color: "#fff", //刻度数字的颜色
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
                    value: 100
                }]
            }, 
			{
                startAngle: 200,
                endAngle: -20,
                type: 'gauge',
                center: ['50%', '50%'], // 默认全局居中  
                radius: '78%',
                min: 0,
                max: 100,
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
            }, 
			{
                // name: '电压合格率',
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                radius: '78%',
                center: ['50%', '50%'], // 默认全局居中  
                min: 0,
                max: 100,
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
                    show: false, //指针数值
                    offsetCenter: [0, '40%'],
                    textStyle: {
                        fontSize: 30
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#fff", //指针的颜色
                    }
                },
                data: [{
                    value: 0
                }]
            }]
        },
        //综合数据
        volumeBarChart: '',
        electricityChart: '',
        timeBarChart: '',
        generalOption: {
            grid: {
                left: '0%', //如果离左边太远就用这个......
                right: '2%',
                //right: '14%',
                //bottom: '0%',
                //top: '0%',
                //containLabel: true
            },
            xAxis: [{
                    show: false,
                },
                //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
                {
                    show: false,
                }
            ],
            yAxis: {
                type: 'category',
                axisLabel: {
                    show: false, //让Y轴数据不显示
                },
                itemStyle: {

                },
                axisTick: {
                    show: false, //隐藏Y轴刻度
                },
                axisLine: {
                    show: false, //隐藏Y轴线段
                },
                data: [1],
            },
            series: [
                //背景色--------------------我是分割线君------------------------------//
                {
                    show: true,
                    type: 'bar',
                    barGap: '-100%',
                    barWidth: '100%', //统计条宽度 
                    itemStyle: {
                        normal: {
                            color: 'rgba(102, 102, 102,0.5)'
                        },
                    },
                    z: 1,
                    data: [1],
                },
                //蓝条--------------------我是分割线君------------------------------//
                {
                    show: true,
                    type: 'bar',
                    barGap: '-100%',
                    barWidth: '100%', //统计条宽度
                    itemStyle: {
                        normal: {
                            color: ''
                        },
                    },
                    max: 1,
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    labelLine: {
                        show: false,
                    },
                    z: 2,
                    data: [],
                }
            ]
        },
        generalData: {
            volume: {
                name: '',
                percent: '',
                value: '',
                unit: ''
            },
            electricity: {
                ame: '',
                percent: '',
                value: '',
                unit: ''
            },
            time: {
                name: '',
                percent: '',
                value: '',
                unit: ''
            }
        },
        //社会综合数据
        contribution: {
            //二氧化碳减排
            emission: {
                name: '',
                value: '',
                unit: ''
            },
            //煤
            coal: {
                name: '',
                value: '',
                unit: ''
            },
            //树
            tree: {
                name: '',
                value: '',
                unit: ''
            }
        },
        //社会贡献柱状图数据
        barChart: '',
        barOption: {
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
                formatter: function(params) {
                    var unit = params[0].name.substring(params[0].name.indexOf('(') + 1, params[0].name.indexOf(')'));
                    return params[0].name + '：' + params[0].value + ' kWh';
                },
                backgroundColor: 'rgba(0,0,0,0.7)', // 背景
                padding: [8, 10], //内边距
                extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            },
            color: ['#3398DB'],
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
                data: ['发电量', '发电量效益']
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
                    showMinLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: "#05edfc"
                    }
                }
            }, {
				name: '%',
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
                min: 0,
                max: 100,
                position: 'right',

            }, ],
            series: [{
                    name: '发电量',
                    type: 'bar',
                    stack: 1,
                    xAxisIndex: 0,
                    barWidth: 10,
                    barGap: 5,
                    z: 2,
                    data: []
                },
                {
                    type: 'scatter',
                    hoverAnimation: false,
                    xAxisIndex: 2,
                    symbolOffset: [0, 0], //相对于原本位置的偏移量
                    symbolSize: 10,
                    z: 2,
                    data: []
                },
                {
                    type: 'bar',
                    xAxisIndex: 1,
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
                    barWidth: 30,
                    barGap: 1,
                    z: 0,
                    data: []
                },
                {
                    name: '发电量效益',
                    type: 'line',
                    smooth: true,
                    yAxisIndex:1,
                    color: '#A871FF',
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
        //综合排名数据
        rankingBarChart: '',
        rankingBarOption: {
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
            color: [],
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
                data: []
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
				name:'万kWh',
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
            },{
			        	name:'%',
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
		                },
		                axisLine: {
		                    lineStyle: {
		                        color: "#05edfc"
		                    }
		                },
		                splitLine:{       //y轴刻度线
				          show:false
				        },

		                min: 0,
		                max: 100,
		                position: 'right',

		            }, ],
            series: [{
	                    name: '同比率',
	                    type: 'line',
	                    smooth: true,
	                    yAxisIndex: 1,
	                    color: '#A871FF',
	                    lineStyle: {
	                        normal: {
	                            width: 3,
	                            shadowColor: 'rgba(0,0,0,0.4)',
	                            shadowBlur: 10,
	                            shadowOffsetY: 10
	                        }
	                    },
	                    data: []
	                }]
        },
        mapChart: '',
        mapOption: {
        }
    },
    mounted: function() {
        this.getForecastData();
        this.getDontributionData();
        this.getBarData();
        this.getRankingBarData();
        this.getGeneralData();
        this.getMapData();
        this.getSafeData();
        this.getSportData();
    },
    methods: {
        // 渲染预测分析数据
        getForecastData:function(){
            const self = this;
            $.get("./json/fengdian/forecastdata.asp", function(result) {
                self.forecastData = eval('(' + result + ')');
                // 转换昨日发电量
                var numStr = self.forecastData.generating.yesterday+'';
                for(var i=0;i<numStr.length;i++){
                    if(numStr.substr(i,1) < 10){
                        self.numList1[i]=self.numIconList[numStr.substr(i,1)];
                    }else if(numStr.substr(i,1) == "."){
                        self.numList1[i]=self.numIconList[10];
                    }else if(numStr.substr(i,1) == "0"){
                        self.numList1[i]=self.numIconList[9];
                    }
                }

                // 转换预测今日发电量
                numStr = self.forecastData.generating.today+'';
                for(var i=0;i<numStr.length;i++){
                    if(numStr.substr(i,1) < 10){
                        self.numList2[i]=self.numIconList[numStr.substr(i,1)];
                    }else if(numStr.substr(i,1) == "."){
                        self.numList2[i]=self.numIconList[10];
                    }else if(numStr.substr(i,1) == "0"){
                        self.numList2[i]=self.numIconList[9];
                    }
                }

                // 转换预测明天发电量
                numStr = self.forecastData.generating.tomorrow+'';
                for(var i=0;i<numStr.length;i++){
                    if(numStr.substr(i,1) < 10){
                        self.numList3[i]=self.numIconList[numStr.substr(i,1)];
                    }else if(numStr.substr(i,1) == "."){
                        self.numList3[i]=self.numIconList[10];
                    }else if(numStr.substr(i,1) == "0"){
                        self.numList3[i]=self.numIconList[9];
                    }
                }
            })
        },
    	// 渲染安全指数表格
        getSafeData: function() {
            const self = this;
            $.get("./json/fengdian/safedata.asp", function(result) {
                self.safeData = eval('(' + result + ')');
                // 基于准备好的dom，初始化echarts实例
                // 渲染安全指数表格1
                vm.safeOption.title.subtext = self.safeData.dataAmount.title;
                vm.safeOption.title.text = self.safeData.dataAmount.value + self.safeData.dataAmount.unit;
                vm.safeOption.series[0].data[0].value = self.safeData.dataAmount.value;
                vm.safeOption.series[0].data[1].value = self.safeData.dataAmount.total - self.safeData.dataAmount.value;
                vm.safeOption.series[0].data[0].itemStyle.normal.color = '#24ED88';
                vm.safeChart = echarts.init(self.$refs.safeCharts1);
                vm.safeChart.setOption(vm.safeOption);
                window.onresize = vm.safeChart.resize;

                // 渲染安全指数表格2
                vm.safeOption.title.subtext = self.safeData.badAmount.title;
                vm.safeOption.title.text = self.safeData.badAmount.value + self.safeData.badAmount.unit;
                vm.safeOption.series[0].data[0].value = self.safeData.badAmount.value;
                vm.safeOption.series[0].data[1].value = self.safeData.badAmount.total - self.safeData.badAmount.value;
                vm.safeOption.series[0].data[0].itemStyle.normal.color = '#FF902C';
                vm.safeChart = echarts.init(self.$refs.safeCharts2);
                vm.safeChart.setOption(vm.safeOption);
                window.onresize = vm.safeChart.resize;

                // 渲染安全指数表格3
                vm.safeOption.title.subtext = self.safeData.badRate.title;
                vm.safeOption.title.text = self.safeData.badRate.value + self.safeData.badRate.unit;
                vm.safeOption.series[0].data[0].value = self.safeData.badRate.value;
                vm.safeOption.series[0].data[1].value = self.safeData.badRate.total - self.safeData.badRate.value;
                vm.safeOption.series[0].data[0].itemStyle.normal.color = '#FF52DA';
                vm.safeChart = echarts.init(self.$refs.safeCharts3);
                vm.safeChart.setOption(vm.safeOption);
                window.onresize = vm.safeChart.resize;

                // 渲染安全指数表格4
                vm.safeOption.title.subtext = self.safeData.onlineAmount.title;
                vm.safeOption.title.text = self.safeData.onlineAmount.value + self.safeData.onlineAmount.unit;
                vm.safeOption.series[0].data[0].value = self.safeData.onlineAmount.value;
                vm.safeOption.series[0].data[1].value = self.safeData.onlineAmount.total - self.safeData.onlineAmount.value;
                vm.safeOption.series[0].data[0].itemStyle.normal.color = '#C1FF39';
                vm.safeChart = echarts.init(self.$refs.safeCharts4);
                vm.safeChart.setOption(vm.safeOption);
                window.onresize = vm.safeChart.resize;

                // 渲染安全指数表格5
                vm.safeOption.title.subtext = self.safeData.offlineAmount.title;
                vm.safeOption.title.text = self.safeData.offlineAmount.value + self.safeData.offlineAmount.unit;
                vm.safeOption.series[0].data[0].value = self.safeData.offlineAmount.value;
                vm.safeOption.series[0].data[1].value = self.safeData.offlineAmount.total - self.safeData.offlineAmount.value;
                vm.safeOption.series[0].data[0].itemStyle.normal.color = '#06C8FC';
                vm.safeChart = echarts.init(self.$refs.safeCharts5);
                vm.safeChart.setOption(vm.safeOption);
                window.onresize = vm.safeChart.resize;

                // 渲染安全指数表格6
                vm.safeOption.title.subtext = self.safeData.wranAmount.title;
                vm.safeOption.title.text = self.safeData.wranAmount.value + self.safeData.wranAmount.unit;
                vm.safeOption.series[0].data[0].value = self.safeData.wranAmount.value;
                vm.safeOption.series[0].data[1].value = self.safeData.wranAmount.total - self.safeData.wranAmount.value;
                vm.safeOption.series[0].data[0].itemStyle.normal.color = '#FF4D40';
                vm.safeChart = echarts.init(self.$refs.safeCharts6);
                vm.safeChart.setOption(vm.safeOption);
                window.onresize = vm.safeChart.resize;
            });
        },
        // 渲染运行数据表格
        getSportData: function() {
            const self = this;
            $.get("./json/fengdian/sportdata.asp", function(result) {
                self.sportData = eval('(' + result + ')');
                // 基于准备好的dom，初始化echarts实例
                // 渲染运行数据表格1
                vm.sportOption.title[0].subtext = self.sportData.generation.unit;
                vm.sportOption.title[0].text = self.sportData.generation.title;
				//vm.sportOption.series[2].data[0].name='发电功率(kW)'; 
                vm.sportOption.series[2].data[0].name = self.sportData.generation.title;
                vm.sportOption.series[2].data[0].value = self.sportData.generation.value;
                vm.sportChart = echarts.init(self.$refs.sportChart1);
                vm.sportChart.setOption(vm.sportOption);
                window.onresize = vm.sportChart.resize;

                // 渲染运行数据表格2
                vm.sportOption.title[0].subtext = self.sportData.charge.unit;
                vm.sportOption.title[0].text = self.sportData.charge.title;
				//vm.sportOption.series[2].data[0].name='电压合格率(%)'; 
                vm.sportOption.series[2].data[0].name = self.sportData.charge.title;
                vm.sportOption.series[2].data[0].value = self.sportData.charge.value;
                vm.sportChart = echarts.init(self.$refs.sportChart2);
                vm.sportChart.setOption(vm.sportOption);
                window.onresize = vm.sportChart.resize;
            });
        },
        //初始化社会贡献数据
        getDontributionData: function() {
            $.get("./json/fengdian/contribution.asp", function(result) {
                data = eval('(' + result + ')');
                vm.contribution = data;
            });

        },
        getBarData: function() {
            const self = this;
            $.get("./json/fengdian/bar.asp", function(result) {
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
        getRankingBarData: function() {
            const self = this;
            $.get("./json/fengdian/rankingBar.asp", function(result) {
                data = eval('(' + result + ')');
                vm.rankingBarOption.xAxis[0].data = data.time;
				vm.rankingBarOption.series[0].data = data.percent;

                vm.rankingBarOption.series = vm.rankingBarOption.series.concat(data.value);

                vm.rankingBarOption.color = data.color;
                $.each(data.value, function(i, e) {
                    vm.rankingBarOption.legend.data.push(e.name);
                })
                 vm.rankingBarOption.legend.data.push('同比率');

                // 基于准备好的dom，初始化echarts实例
                vm.rankingBarChart = echarts.init(self.$refs.rankingBarItem);
                vm.rankingBarChart.setOption(vm.rankingBarOption);
                window.onresize = vm.rankingBarChart.resize;
            });
        },

        getGeneralData: function() {
            const self = this;
            $.get("./json/fengdian/general.asp", function(result) {
                data = eval('(' + result + ')');

                vm.generalData = data;

                // 基于准备好的dom，初始化echarts实例

                vm.volumeBarChart = echarts.init(self.$refs.volumeBarItem);
                vm.generalOption.series[1].itemStyle.normal.color = '#24EDB8';
                vm.generalOption.series[1].data = data.volume.percent

                vm.volumeBarChart.setOption(vm.generalOption);
                window.onresize = vm.volumeBarChart.resize;

                vm.electricityChart = echarts.init(self.$refs.electricityItem);
                vm.generalOption.series[1].itemStyle.normal.color = '#6CF5FF';
                vm.generalOption.series[1].data = data.electricity.percent
                vm.electricityChart.setOption(vm.generalOption);
                window.onresize = vm.electricityChart.resize;

                vm.timeBarChart = echarts.init(self.$refs.timeBarChartItem);
                vm.generalOption.series[1].itemStyle.normal.color = '#FEE100';
                vm.generalOption.series[1].data = data.time.percent;

                vm.timeBarChart.setOption(vm.generalOption);
                window.onresize = vm.timeBarChart.resize;


            });

        },
        getMapData:function(){
                const self = this;
                //乳源地图
                $.get('./json/fengdian/map.asp',function(result){
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
                            top:'5%',
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
                            top:'5%',
                            itemStyle: {
                                    normal: {
                                            opacity:0.8,
                                            borderColor:'rgba(115, 255, 250,0.8)',
                                            borderWidth: 6,
                                            areaColor: {
                                                type: 'radial',
                                                x: 0.6,
                                                y: 0.6,
                                                r: 0.8,
                                                colorStops: [{
                                                    offset: 0, 
                                                    color: 'rgba(69, 137, 155,0.6)' // 0% 处的颜色
                                                }, {
                                                    offset: 1, 
                                                    color: 'rgba(69, 137, 155,0.8)' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            },
                                            //shadowColor: 'rgb(115, 255, 250)',
                                            //shadowColor: 'rgba(255, 255, 255, 1)',
                                            shadowColor: 'rgba(69, 137, 155,1)',
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
                                            areaColor: 'rgba(69, 137, 155,0.8)',
                                            borderColor:'rgba(115, 255, 250,0.8)',
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



        //获取点
        getPoint: function(dataArr) {
            var itemArr = [];
            for (var i = 1; i < (dataArr.length + 1); i++) {
                var item = {
                    value: 0,
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 2,
                            color: '#F21DW3',
                        }
                    }
                };
                itemArr.push(item);
            }
            return itemArr;
        },
        //生成柱状样式
        getBarStyle: function(dataArr) {
            var itemArr = [];
            if (true) {
                for (var i = 1; i < (dataArr.length + 1); i++) {
                    var item = {
                        value: dataArr[i - 1],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 50,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#00b9f6'
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

    }

})