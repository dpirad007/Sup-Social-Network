import React from 'react';

import { Doughnut } from 'react-chartjs-2';

import styles from './StateChart.module.css';

const StateChart = ({data, state}) => {

    const doughnutChart = (
        <Doughnut 
            data={{
                labels: ['Confirmed','Active','Recovered','Deadths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(150,0,150,0.5)','rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                    data: [data.confirmed, data.active, data.recovered, data.deceased]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current State in ${state}`}
            }}
        />
    )

    return (
        <div className={styles.container}>
            {doughnutChart}
        </div>
        )
}

export default StateChart;