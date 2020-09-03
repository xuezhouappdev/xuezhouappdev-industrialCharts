import React, { Component } from 'react';
import echarts from 'echarts';
import 'echarts/map/js/china';
import geoJson from 'echarts/map/json/china.json';
import ZJgeoJson from 'echarts/map/json/province/zhejiang'; // 来源于echart
import NBgeoJson from '../shared/ningbo_GEOJSON.json'; // 来源于网络
// import { geoCoordMap, cityData } from "../shared/zhejiangGeo";
import { geoCoordMap, cityData } from "../shared/ningbiongGeo";
import styles from './index.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    this.initalECharts();
  }
  initalECharts() {
    // const data = [
    //   { name: '杭州', area: '其他', type: 'areaCenterCity', service: 10172.3 },
    //   { name: '温州', area: '华西大区', type: 'areaCenterCity', service: 3642.5 },
    //   { name: '嘉兴', area: '华北大区', type: 'areaCenterCity', service: 2356.9 },
    //   { name: '湖州', area: '华中大区', type: 'areaCenterCity', service: 1393.2 },
    //   { name: '绍兴', area: '东北大区', type: 'areaCenterCity', service: 2801.6 },
    //   { name: '金华', area: '华南大区', type: 'areaCenterCity', service: 2581.1 },
    //   { name: '衢州', area: '华西大区', type: 'areaCenterCity', service: 835.9 },
    //   { name: '舟山', area: '华北大区', type: 'areaCenterCity', service: 749.7 },
    //   { name: '台州', area: '华中大区', type: 'areaCenterCity', service: 2512.1 },
    //   { name: '宁波', area: '东北大区', type: 'areaCenterCity', service: 5879.9 },
    //   { name: '丽水', area: '东北大区', type: 'areaCenterCity', service: 805.2 },
    // ];
    // 2018年宁波各县市区三产总量
    const data = [
      { name: '海曙', area: '其他', type: 'areaCenterCity', service: 782.75 },
      { name: '江北', area: '华西大区', type: 'areaCenterCity', service: 333.17 },
      { name: '北仑', area: '华北大区', type: 'areaCenterCity', service: 637.64 },
      { name: '镇海', area: '华中大区', type: 'areaCenterCity', service: 253.23 },
      { name: '鄞州', area: '东北大区', type: 'areaCenterCity', service: 1172.15 },
      { name: '奉化', area: '华南大区', type: 'areaCenterCity', service: 216.85 },
      { name: '象山', area: '华西大区', type: 'areaCenterCity', service: 232.86 },
      { name: '宁海', area: '华北大区', type: 'areaCenterCity', service: 244.47 },
      { name: '余姚', area: '华中大区', type: 'areaCenterCity', service: 418.82 },
      { name: '慈溪', area: '东北大区', type: 'areaCenterCity', service: 632.28 },
    ]
    //echarts.registerMap('zhejiang', ZJgeoJson);
    echarts.registerMap('ningbo', NBgeoJson);
    const myChart = echarts.init(document.getElementById('mainMap'));
    const myPieChart = echarts.init(document.getElementById('myPieChart'));

    //常规地图
    myChart.setOption({
      tooltip: {
        show: false,       //不显示提示标签
        formatter: '{b}',      //提示标签格式
        backgroundColor: "#ff7f50",//提示标签背景颜色
        textStyle: { color: "#fff" } //提示标签字体颜色
      },
      grid: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%',
        containLabel: true
      },
      geo: {
        // map: 'zhejiang',
        map: 'ningbo',
        roam: false,
        zoom: 1.2,
        geoIndex: 0,
        tooltip: {
          show: false,       //不显示提示标签
        },
        label: {
          normal: {
            show: false,//显示省份标签
            textStyle: { color: "red" }//省份标签字体颜色
          },
          emphasis: {//对应的鼠标悬浮效果
            show: false,
            textStyle: { color: "#800080" }
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 2.5,//区域边框宽度
            borderColor: '#fff',//区域边框颜色
            areaColor: "#EEEEEE",//区域颜色
            label: { show: false }
          },
          emphasis: {
            show: false,
            borderWidth: 2.5,
            borderColor: 'black',
            areaColor: "#EEEEEE",
          }
        },
      },
      series: [
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: this.convertData(data),
          symbolSize: function (val) {
            return val[3] / 20;
          },
          symbolRotate: 35,
          animation: false,
          label: {
            normal: {
              formatter: '{b}:{@[3]}',
              position: 'right',
              show: true,
              fontSize: 20,
            },
            emphasis: {
              show: false
            }
          },
          tooltip: {
            show: false,       //不显示提示标签
            formatter: '{c}',      //提示标签格式
            backgroundColor: "#fff",//提示标签背景颜色
            borderColor: '#ccc',
            borderWidth: .5,
            textStyle: { color: "#000" } //提示标签字体颜色
          },
        },
        {
          type: 'map',
          // mapType: 'zhejiang',
          mapType: 'ningbo',
          roam: false,
          zoom: 1.2,
          tooltip: {
            show: false,       //不显示提示标签
          },
          label: {
            normal: {
              show: false   //显示省份标签
            },
            emphasis: {
              show: false,
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 2.5,      //区域边框宽度
              borderColor: '#fff',  //区域边框颜色
              label: { show: true }
            },
            emphasis: {
              show: false,
            }
          },
          geoIndex: 0,
          data: cityData
        }
      ],
    })

    // 饼图
    myPieChart.setOption({
      title: {
        left: 'center',
        itemGap: 0,
        textStyle: {
          color: '#eee'
        },
      },
      geo: {
        map: 'ningbo',
        silent: true,
        zoom: 1.2,
        geoIndex: 1,
        roam: false,
        itemStyle: {
          normal: {
            borderWidth: 2.5,//区域边框宽度
            borderColor: '#fff',//区域边框颜色
            areaColor: "#EEEEEE",//区域颜色
            label: { show: false }
          },
          emphasis: {
            show: false,
            borderWidth: 2.5,
            borderColor: '#4b0082',
            areaColor: "#ffdead",
          }
        },
        label: {
          normal: {
            show: false,//显示省份标签
            textStyle: { color: "black", zIndex: 999 }//省份标签字体颜色
          },
        },
      },
      series: this.getPie(myChart)
    })
  }

  //饼图数据处理函数
  getPie = (myChart) => {
    var ser = [];
    for (var i = 0; i < cityData.length; i++) {
      ser.push(
        {
          name: cityData[i].name,
          title: cityData[i].name,
          type: 'pie',
          radius: '5%',
          center: myChart.convertToPixel({ geoIndex: 0 }, cityData[i].coord),
          data: cityData[i].data,
          selectedOffset: 5,
          label: {
            normal: {
              show: false,
            },
          },
          color: ["#FFC000", "#A5A5A5", "#5B9BD5"]
        }
      );
    }
    return ser;
  }

  convertData(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].area).concat(data[i].service),
          area: data[i].area,
          type: data[i].type,
          service: data[i].service,
        });
      }
    }
    return res;
  }

  render() {
    return (
      <div className="App" className={styles.wrapper}>
        <div id="mainMap" style={{ width: '100vm', height: '100vh' }}></div>
        <div id="myPieChart" style={{ width: '100vm', height: '100vh' }}></div>
      </div>
    );
  }
}

export default App;