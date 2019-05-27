var dqbm = "韶关";
var citybm = '440232'; // 天气数据默认显示乳源

window.onload = function() {
    getdata();
};

function getdata() {
    var url = "https://free-api.heweather.com/s6/weather/forecast";
    $.ajax({
        type: "get",
        url: url,
        async: false,
        data: {
            location: citybm,
            key: '0668e833810c4cf2b5c15e21d601cd39'
        },
        success: backdata
    });
}

function backdata(obj) {
    var data = obj.HeWeather6["0"].daily_forecast;
    var msg = obj.HeWeather6["0"].basic;
    var da = data["0"]; // 今天数据
    var da1 = data["1"]; // 明天数据
    var da2 = data["2"]; // 后天数据	
    var xdata = [];
    yldata = [];
    maxwd = [];
    var minwd = [];
    ysd = [];
    var yfl = [];
    var njd = [];
    for (j in data) {
        xdata.push((data[j].date).substring(8, 10));
        yldata.push(data[j].pcpn);
        maxwd.push(data[j].tmp_max);
        minwd.push(data[j].tmp_min);
        ysd.push(data[j].hum);
        yfl.push(data[j].wind_spd);
        njd.push(data[j].vis);
    }
    $("#fs").html(yfl[0] + "km/h"); // 风速
    $("#tqqk").html(da["cond_txt_d"]); // 天气情况	
    $("#map-weather").attr("src", "./img/weather/" + da["cond_code_d"] + ".png");
    $("#wdz").html(da["tmp_max"] + "°C" + "/" + da["tmp_min"] + "°C"); // 温度
    $("#sdz").html(da["hum"] + "°C"); // 湿度
    $("#jylz").html(da["pcpn"] + "mm"); // 降雨量
    $("#flz").html(da["wind_sc"] + "级"); // 风力
    $("#fx").html(da["wind_dir"]); // 风向
    $("#kqzlz").html(da["vis"] + "km"); // 能见度
    $("#zwx").html(da["pres"] + "hPa"); // 大气压强
    $("#zwxzs").html(da["uv_index"]); // 紫外线指数
}