import React, { useEffect, useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
HighchartsExporting(Highcharts);

const OrderFlow = (props) => {

    const [keys, setKeys] = useState([]);
    const [chartValues, setChartValues] = useState([]);

    const data = [
        {
            "Created Order": [
                {
                    "Jan": "10",
                    "Feb": "20",
                    "March": "17",
                    "April": "8",
                    "May": "3"
                }
            ],
        }, {
            "Back Orders": [
                {
                    "Jan": "17",
                    "Feb": "23",
                    "March": "1",
                    "April": "18",
                    "May": "13"
                }
            ],
        }, {
            "Scheduled Orders": [
                {
                    "Jan": "7",
                    "Feb": "13",
                    "March": "19",
                    "April": "1",
                    "May": "12"
                }
            ],
        }, {
            "Released Orders": [
                {
                    "Jan": "27",
                    "Feb": "33",
                    "March": "11",
                    "April": "8",
                    "May": "3"
                }
            ]
        }
    ]

    useEffect(() => {
        let keysArr = []
        let objArray = [];
        for (let i = 0; i < data.length; i++) {
            let obj = {}
            let arr = [];
            let arryVal = [];
            let keyVal = Object.keys(data[i])[0];
            obj.name = Object.keys(data[i])[0];
            arr = Object.keys(data[i][keyVal][0]);
            for (let j = 0; j < arr.length; j++) {
                arryVal.push(parseInt(data[i][keyVal][0][arr[j]]))
            }
            obj.data = arryVal;
            keysArr = arr;
            objArray.push(obj);
            console.log(data);
        }
        setKeys(keysArr);
        setChartValues(objArray);
    }, [])

    const options = {
        // chart: {
        //     backgroundColor: '#e4e6ea',
        //     // type: 'line'
        // },
        title: {
            text: 'Order flow dashboard'
        },
        yAxis: {
            title: {
                text: 'Number of orders'
            },
            // lineColor: '#000000',
            // lineWidth: 1,
        },
        xAxis: {
            title: {
                text: 'Date'
            },
            // lineColor: '#000000',
            // lineWidth: 1,
            crosshair: true
        },
        xAxis: {
            categories: keys,

        },

        series: chartValues,
        tooltip: {
            borderColor: '#2c3e50',
            shared: true,
            formatter: function (tooltip) {
                const header = `<span style="color: blue;">${this.x}</span><br/><br/>`

                return header + (tooltip.bodyFormatter(this.points).join(''))
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },
        exporting: {
            enabled: true
        }

    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default OrderFlow;