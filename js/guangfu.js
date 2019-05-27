var vm = new Vue({
		el: '#app',
		data: {
			listData:{
				capacity:{value:0,unit:'',name:''},
				power:{value:0,unit:'',name:''},
				electricity:{value:0,unit:'',name:''},
				day_electricity:{value:0,unit:'',name:''},
				mon_electricity:{value:0,unit:'',name:''},
				wind:{value:0,unit:'',name:''},
				temperature:{value:0,unit:'',name:''},
				pressure:{value:0,unit:'',name:''},
				rain:{value:0,unit:'',name:''},
				sunlight:{value:0,unit:'',name:''}
			},
			pileChart:'',
			pileOption:{
			    backgroundColor:'rgba(0,0,0,0)', //rgba设置透明度
			    legend: {
			    	type:'scroll',//设置legend滚动轴的出现
			    	y:'92%',
			    	pageTextStyle:{
			        	color:'rbg(152,155,162)'
			        },
			        itemGap:12,
			        data:[],
			        textStyle:{
			        	color:'#FFFFFF',
			        	fontSize:20
			        }
			    },
			    //calculable : true,
			    color:['#007BFF','#FF902C','#FF52DA','#52FFE2','#FEE100'],
			    // grid: {
		     //        left: '0',
		     //        right: '0',
		     //        bottom: '2%',
		     //        top: '5%'
		     //    },
			    series : [
			        {
			            name:'电站项目区域分析',
			            type:'pie',
			            radius : [30, 110],
			            center : ['50%', '50%'],
			            roseType : 'area',
			            label: {
			                normal: {
			                    formatter: '{b|{b}：}{c|{c}个}',
			                    rich: {
			                        b: {
			                            fontSize: 20,
			                            lineHeight: 24
			                        },
			                        c:{
			                           fontSize: 20,
			                            lineHeight: 24
			                        }
                    			}
			                }
			            },
			            data:[]
			        }
			    ]
			},
			barChart:'',
			barOption:{
				title: {
			        text: '电站PR',
			        x:'50%',
			        textStyle: {
			            color:'#FFFFFF'
			        },
			    },
			    color: ['#3398DB'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    grid: {
			        left: '7%',
			        right: '3%',
			        bottom:'20%'
			    },
			    xAxis : [
			        {
			            type : 'category',
			            axisLabel: {
			                show: true,
			                interval:0,
                            rotate:-60,
			                textStyle: {
			                    color: '#FFFFFF',
			                    fontSize: 20,
			                    lineHeight:24
			                },
			                formatter:function(value){
			                	var valLength = value.length;//X轴类目项的文字个数
			                	if (valLength>5) {
										value = value.substring(0,3)+'...';
			                	}
			                	return value;
			                }
			             }, 
			             axisLine:{
			                 lineStyle:{
			                     color:"rgb(40,77,112)"
			                 }
			             },
			            data : [],
			            axisTick: {
			                alignWithLabel: true
			            }
			        }
			    ],
			    yAxis : [
			        {
						name:'%',
						nameTextStyle:{
							fontSize: 20,
							lineHeight: 24,
							color:'#FFFFFF'
						},
			            type : 'value',
			            axisLabel: {
			                show: true,
			                textStyle: {
			                    color: '#FFFFFF',
			                    fontSize: 20,
			                    lineHeight:24
			                },
			                interval: 0,
			                showMinLabel: true,
			                formatter: '{value}'
			             }, 
			              axisLine:{
			                 lineStyle:{
			                     color:"rgb(40,77,112)"
			                 }
			             },
			            min:0,
			            max:100
			        }
			    ],
			    series : [
			        {
			            name:'电站PR',
			            type:'bar',
			          
			            itemStyle: {
			                normal: {
			                    color: new echarts.graphic.LinearGradient(
			                        0, 0, 0, 1,
			                        [
			                            {offset: 0, color: 'rgb(3,242,215)'},
			                            {offset: 0.5, color: 'rgb(2,182,234)'},
			                            {offset: 1, color: 'rgb(0,125,254)'}
			                        ]
			                    )
			                },
			                emphasis: {
			                    color: new echarts.graphic.LinearGradient(
			                        0, 0, 0, 1,
			                        [
			                            {offset: 0, color: 'rgb(0,125,254)'},
			                            {offset: 0.7, color: 'rgb(1,151,245)'},
			                            {offset: 1, color: 'rgb(0,125,254)'}
			                        ]
			                    )
			                }
			            },
			            barWidth: '25%',
			            data:[]
			        }
			    ]
			},
			//发电量趋势分析
			bar2Chart:'',
			bar2Option:{
				/*title: {
			        text: '发电量趋势',
			        x:'50%',
			        textStyle: {
			            color:'#FFFFFF'
			        },
			    },*/
			    tooltip: {
			        trigger: 'axis'
			    },
			    color: ['#3398DB'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    grid: {
			        left: '7%',
			        right: '7%',
			    },
			    legend: {
	                textStyle: {
	                    color: '#FFFFFF',
	                    fontSize: 20
	                },
	                itemGap: 12,
	                data: ['发电量', '同比率']
	            },
			    xAxis : [
			        {
			            type : 'category',
			            axisLabel: {
			                show: true,
			                textStyle: {
			                    color: '#FFFFFF',
			                    fontSize: 20,
			                    lineHeight:24
			                }
			             }, 
			             axisLine:{
			                 lineStyle:{
			                     color:"rgb(40,77,112)"
			                 }
			             },
			            data : [],
			            axisTick: {
			                alignWithLabel: true
			            }
			        },{
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
		            },
			    ],
			    yAxis : [
			        {
						name:'万kWh',
						nameTextStyle:{
							fontSize: 20,
							lineHeight: 24,
							color:'#FFFFFF'
						},
			            type : 'value',
			            axisLabel: {
			                show: true,
			                textStyle: {
			                    color: '#FFFFFF',
			                    fontSize: 20,
			                    lineHeight:24
			                },
			                interval: 0,
			                showMinLabel: true
			             }, 
			              axisLine:{
			                 lineStyle:{
			                     color:"rgb(40,77,112)"
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

		            }, 
			    ],
			    series : [
			        {
			            name:'发电量',
			            type:'bar',
			          
			            itemStyle: {
			                normal: {
			                    "color": {
						              "type": "linear",
						              "x": 0,
						              "y": 0,
						              "x2": 0,
						              "y2": 1,
						              "colorStops": [
						                {
						                  "offset": 0,
						                  "color": "rgba(255,37,117,0.7)"
						                },
						                {
						                  "offset": 0.5,
						                  "color": "rgba(0,133,245,0.7)"
						                },
						                {
						                  "offset": 1,
						                  "color": "rgba(0,133,245,0.3)"
						                }
						              ],
						              "globalCoord": false
            					}
			                },
			               
			            },
			            barWidth: '25%',
			            data:[]
			        },
			        {
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
	                },
			    ]
			},
			lineChart:'',
			lineOption: {
			    title: {
			        text: '投资收益率',
			        x:'50%',
			        textStyle: {
			            color:'#FFFFFF'
			        },
			    },
			    color:['#007BFF','#FF902C','#FF52DA','#52FFE2','#FEE100'],
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        type: 'scroll',
			        pageTextStyle:{
			        	color:'rbg(152,155,162)'
			        },
			        //x:'9%',
			        inactiveColor:"bg(152,155,162)",
			        textStyle: {
			            fontSize: 20,
			            lineHeight: 24,
			            color:'#FFFFFF'
			        },
			      	bottom:'bottom',
			        data:[]
			    },
			    backgroundColor:'rgba(0,0,0,0)', //rgba设置透明度
			    grid: {
			        left: '6%',
			        right: '3%',
			        //bottom: '10%',

			    },
			    xAxis: {
			        type: 'category',
			        axisLabel: {
			                show: true,
			                textStyle: {
			                    color: '#FFFFFF',
			                    fontSize: 20,
			                    lineHeight:24
			                },
			                interval: 0,
			                showMinLabel: true
			             }, 
			         axisLine:{
			            lineStyle:{
			                color:'rgb(40,77,112)'
			            }
			         },

			        boundaryGap: false,
			        data: []
			    },
			    yAxis: {
			        name:'kwh/kwp',
			        nameTextStyle:{
			            fontSize: 20,
			            lineHeight: 24,
			            color:'#FFFFFF'
			        },
			        type: 'value',
			        axisLabel: {
			                show: true,
			                textStyle: {
			                    color: 'rbg(152,155,162)',
			                    fontSize: 20,
			                    lineHeight:24
			                },
			                interval: 0,
			                showMinLabel: true
			             }, 
			            splitLine: {
			                lineStyle: {
			                    color: 'rgb(40,77,112)'
			                }
			            },  
			              axisLine:{
			                 lineStyle:{
			                     color:"rgb(40,77,112)"
			                 }
			             },
			        },
			    series: []
			},
			line2Chart:'',
			line2Option: {
			    title: {
			        text: '发电量比较',
			        x:'50%',
			        textStyle: {
			            color:'rgb(255,255,255)'
			        },
			    },
			    color:['#007BFF','#FF902C','#FF52DA','#52FFE2','#FEE100'],
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        type: 'scroll',
			        pageTextStyle:{
			        	color:'rbg(152,155,162)'
			        },
			        top:'bottom',
			        textStyle: {
			            fontSize: 20,
			            lineHeight: 24,
			            color:'rgb(255,255,255)'
			        },
			        data:[]
			    },
			    backgroundColor:'rgba(0,0,0,0)', //rgba设置透明度
			    grid: {
			        left: '10%',
			        right: '3%',
			       
			    },
			    xAxis: {
			        type: 'category',
			        axisLabel: {
			                show: true,
			                textStyle: {
			                    color: '#FFFFFF',
			                    fontSize: 20,
			                    lineHeight:24
			                },
			                interval: 0,
			                showMinLabel: true
			             }, 
			         axisLine:{
			            lineStyle:{
			                color:'rgb(40,77,112)'
			            }
			         },

			        boundaryGap: false,
			        data: []
			    },
			    yAxis: {
			        name:'kWh',
			        nameTextStyle:{
			            fontSize: 20,
			            lineHeight: 24,
			            color:'rgb(165,170,182)'
			        },
			        type: 'value',
			        axisLabel: {
			                show: true,
			                textStyle: {
			                    color: '#FFFFFF',
			                    fontSize: 20,
			                    lineHeight:24
			                },
			                interval: 0,
			                showMinLabel: true
			             }, 
			            splitLine: {
			                lineStyle: {
			                    color: 'rgb(40,77,112)'
			                }
			            },  
			              axisLine:{
			                 lineStyle:{
			                     color:"rgb(40,77,112)"
			                 }
			             },
			        },
			    series: []
			},
			line3Chart:'',
			line3Option: {
			    title: {
			        text: '投资收益',
			        x:'50%',
			        textStyle: {
			            color:'#FFFFFF'
			        },
			    },
			    color:['#007BFF','#FF902C','#FF52DA','#52FFE2','#FEE100'],
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        type: 'scroll',
			        pageTextStyle:{
			        	color:'rbg(152,155,162)'
			        },
			        top:'bottom',
			        textStyle: {
			            fontSize: 20,
			            lineHeight: 24,
			            color:'rgb(255,255,255)'
			        },
			        data:[]
			    },
			    backgroundColor:'rgba(0,0,0,0)', //rgba设置透明度
			    grid: {
			        left: '6%',
			        right: '3%',
			    },
			    xAxis: {
			        type: 'category',
			        axisLabel: {
			                show: true,
			                textStyle: {
			                    color: '#FFFFFF',
			                    fontSize: 20,
			                    lineHeight:24
			                },
			                interval: 0,
			                showMinLabel: true
			             }, 
			         axisLine:{
			            lineStyle:{
			                color:'rgb(40,77,112)'
			            }
			         },

			        boundaryGap: false,
			        data: []
			    },
			    yAxis: {
			        name:'万元',
			        nameTextStyle:{
			            fontSize: 20,
			            lineHeight: 24,
			            color:'#FFFFFF'
			        },
			        type: 'value',
			        axisLabel: {
			                show: true,
			                textStyle: {
			                    color: '#FFFFFF',
			                    fontSize: 20,
			                    lineHeight:24
			                },
			                interval: 0,
			                showMinLabel: true
			             }, 
			            splitLine: {
			                lineStyle: {
			                    color: 'rgb(40,77,112)'
			                }
			            },  
			              axisLine:{
			                 lineStyle:{
			                     color:"rgb(40,77,112)"
			                 }
			             },
			        },
			    series: []
			},
			mapChart:'',
			mapOption:{

			},
		},
		mounted:function(){
			this.getListData();
			this.getPileDate();
			this.getBarDate();
			this.getBar2Date();
			this.getlineDate();
			this.getline2Date();
			this.getline3Date();
			this.getMapData();
		},
		methods:{
			getPileDate:function(){
				const self = this;
				//初始化饼图数据
				$.get("./json/pile.asp",function(result){
					vm.pileOption.series[0].data = eval('('+result+')');
					$.each(vm.pileOption.series[0].data,function(i,e){
						vm.pileOption.legend.data.push(e.name)
					})
					// 基于准备好的dom，初始化echarts实例
        			vm.pileChart = echarts.init(self.$refs.pileItem);
        			vm.pileChart.setOption(vm.pileOption);
        			window.onresize = vm.pileChart.resize;
				});
			},
			getBarDate:function(){
				const self = this;
				//初始化饼图数据
				$.get("./json/bar.asp",function(result){
					data = eval('('+result+')');
					vm.barOption.series[0].data = data.data;
					vm.barOption.xAxis[0].data = data.station;
					
					// 基于准备好的dom，初始化echarts实例
        			vm.barChart = echarts.init(self.$refs.barItem);
        			vm.barChart.setOption(vm.barOption);
        			window.onresize = vm.barChart.resize;
				});
			},
			getBar2Date:function(){
				const self = this;
				//初始化饼图数据
				$.get("./json/bar2.asp",function(result){
					data = eval('('+result+')');
					vm.bar2Option.series[0].data = data.data;
					vm.bar2Option.series[1].data = data.percent;
					vm.bar2Option.xAxis[0].data = data.time;
					// 基于准备好的dom，初始化echarts实例
        			vm.bar2Chart = echarts.init(self.$refs.bar2Item);
        			vm.bar2Chart.setOption(vm.bar2Option);
        			window.onresize = vm.bar2Chart.resize;
				});
			},
			getlineDate:function(){
				const self = this;
				//初始化饼图数据
				$.get("./json/line.asp",function(result){
					data = eval('('+result+')');
					vm.lineOption.series = data.data;
					vm.lineOption.xAxis.data = data.time;
					$.each(data.data,function(i,e){
						vm.lineOption.legend.data.push(e.name)
					})
					// 基于准备好的dom，初始化echarts实例
        			vm.lineChart = echarts.init(self.$refs.lineItem);
        			vm.lineChart.setOption(vm.lineOption);
        			window.onresize = vm.lineChart.resize;
				});
			},
			getline2Date:function(){
				const self = this;
				//初始化饼图数据
				$.get("./json/line3.asp",function(result){
					data = eval('('+result+')');
					vm.line2Option.series = data.data;
					vm.line2Option.xAxis.data = data.time;
					$.each(data.data,function(i,e){
						vm.line2Option.legend.data.push(e.name)
					})
					// 基于准备好的dom，初始化echarts实例
        			vm.line2Chart = echarts.init(self.$refs.line2Item);
        			vm.line2Chart.setOption(vm.line2Option);
        			window.onresize = vm.line2Chart.resize;
				});
			},
			getline3Date:function(){
				const self = this;
				//初始化饼图数据
				$.get("./json/line2.asp",function(result){
					data = eval('('+result+')');
					vm.line3Option.series = data.data;
					vm.line3Option.xAxis.data = data.time;
					$.each(data.data,function(i,e){
						vm.line3Option.legend.data.push(e.name)
					})
					// 基于准备好的dom，初始化echarts实例
        			vm.line3Chart = echarts.init(self.$refs.line3Item);
        			vm.line3Chart.setOption(vm.line3Option);
        			window.onresize = vm.line3Chart.resize;
				});
			},
			getMapData:function(){
				const self = this;
				//乳源地图
				$.get('./json/map.asp',function(result){
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
						                    opacity:1,
						                    borderColor:'rgba(115, 255, 250,0.8)',
						                    borderWidth: 5,
						                    areaColor: 'rgba(69, 137, 155,0.75)',
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
			getListData:function(){
				const self = this;
				$.get("./json/list.asp",function(result){
					data = eval('('+result+')');
					vm.listData = data;
				});

			},

		}
		
})
