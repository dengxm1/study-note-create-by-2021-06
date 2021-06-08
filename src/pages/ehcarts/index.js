import React,{ useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { Layout,Row, Col  } from 'antd';
import styles from './index.less';

const { Content} = Layout;

export default function Index(){
    useEffect(()=>{
        initTopLeft();
        initdataCreateChar();
    },[])

   const initTopLeft = () =>{
       // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('topLeft'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
            },
            grid: {
                bottom: '10%',
                height: '60%',
                left: '5%',
                right:'10%',
                width: 'auto',
                containLabel: true,
              },
            toolbox: {
                // feature: {
                //     saveAsImage: {}
                // }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五']
            },
            yAxis: {
                name: '单位：次',
                type: 'value',
                // show: false,
                // axisLine:{
                //     show:true
                // },
                axisTick: { show: false }, //刻度线
                splitLine:{
                    lineStyle: {
                        type:'dashed'
                    }
                }
            },
            series: [
                {
                    name: '',
                    type: 'line',
                    stack: '总量',
                    data: [100,130,50,200,150],
                    symbol:'circle',
                    lineStyle:{
                        color:'#0063C7'
                    },
                    areaStyle:{
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                              offset: 0, color: '#0063C7' // 0% 处的颜色
                            }, {
                              offset: 1, color: '#ffffff' // 100% 处的颜色
                            }],
                            // global: false // 缺省为 false
                          }, 
                    }
                },
            ]
          }) 
   }

   const initdataCreateChar = () =>{
    const selectedConditionChart = echarts.init(
        document.getElementById('topRight')
      ); 
      selectedConditionChart.setOption({
        tooltip: {
            trigger: 'item'
        },
        grid: {
            bottom: '5%',
            left:'5%',
            height:'60%',
            // right:'20%',
            width: 'auto',
            containLabel: true,
          },
        legend: {
            icon:'circle',
            top:'30%',
            right:'15%',
            orient: 'vertical',
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                fontSize: 14,
                color:'rgb(0,0,0)'
              },
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: ['40%', '65%'],
                center: ["30%", "50%"],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        color:'#4c4a4a',
                        formatter: '{tip|数据总量}'+ '\n\n\r' + '{total|'+'1432'+'}'+'{unit|条}',
                        rich: {
                            tip:{
                                fontSize: 14,
                                fontFamily : "微软雅黑",
                                color:'#6c7a89',
                             
                            },
                            total: {
                                fontFamily : "微软雅黑",
                                fontSize: 32,
                                color:'#454c5c',
                                lineHeight:32,
                            },
                            unit:{
                                fontSize: 18,
                                fontFamily : "微软雅黑",
                                color:'#6c7a89',
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1048, name: '实时雨水情数据'},
                    {value: 735, name: '气象标准化降水数据'},
                    {value: 580, name: '历史整编数据'},
                    {value: 484, name: '水文基础地理信息数据'}
                ]
            }
        ]
      })
}


    return (
        <Layout>
            <Content className={styles.ehcartsContent}>
            {/* <div style={{height:'600px',width:'600px',background:'#ffffff'}}>
              <div style={{height:'100%',width:'100%'}} className={styles.topLeft}  id="topLeft"></div>
            </div> */}
             
                <div className={styles.rowContent} style={{height:'100%'}}>
                    <Row>   
                        <Col span={12}>
                            <div style={{height:'100%',background:'#ffffff'}}>
                                {/* <div style={{height:'20%',display:'hidden'}}></div> */}
                                <div style={{height:'100%'}} className={styles.topLeft}  id="topLeft"></div>
                            </div>
                        </Col>
                    <Col span={12}>
                        <div style={{height:'100%',background:'#ffffff'}}>
                        {/* <div style={{height:'20%',display:'hidden'}}></div> */}
                        <div style={{height:'100%'}} id="topRight"></div>
                        </div>
                    </Col>
                    <Col span={12}>
                            <div style={{height:'100%',background:'#ffffff'}}>

                            </div>
                        </Col>
                        <Col span={12}>
                            <div style={{height:'100%',background:'#ffffff'}}>

                         </div>
                        </Col>
                    </Row>
                </div>
           
            </Content> 
        </Layout>
    )
}