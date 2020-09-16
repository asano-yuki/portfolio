import React from 'react'

import Chart from '../atoms/chart'

/**
 * モチベーション環境要因を構築
 * chart.jsライブラリのパラメータを構築
 * https://www.chartjs.org/
 */
const Motivation: React.FC = () => {
  // y軸のラベル表記を定義
  const yAxesLabels = ['低', '中', '高']
  // chart.js専用パラメータ
  const params = {
    type : 'horizontalBar',
    data : {
      labels : [
        '自己実現',
        '技術的風土',
        '期待・評価',
        '給与',
        '職場環境'
      ],
      datasets : [{
        data : [90, 80, 70, 60, 50],
        backgroundColor : [
          'rgba(253, 111, 145, 0.6)',
          'rgba(255, 246, 176, 0.6)',
          'rgba(58, 144, 184, 0.6)',
          'rgba(255, 234, 214, 0.6)',
          'rgba(148, 215, 199, 0.6)'
        ],
        borderWidth        : 1,
        barPercentage      : 0.8,
        categoryPercentage : 1.0
      }]
    },
    options : {
      maintainAspectRatio : false,
      legend : {
        display : false
      },
      tooltips : {
        enabled : false
      },
      scales : {
        xAxes : [{
          ticks : {
            max      : 100,
            min      : 0,
            stepSize : 50,
            padding  : 7,
            fontSize : 10.5,
            callback : (value: string, index: number) => yAxesLabels[index]
          }
        }],
        yAxes : [{
          ticks : {
            padding  : 7,
            fontSize : 10.5
          }
        }]
      }
    }
  }

  return <Chart params={params} style={{ height: 250 }} />
}

export default Motivation
