import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export const GraficoSpese = () => {
    const { transazioni } = useContext(GlobalContext)

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        return date.toLocaleString('en-US', { month: 'long' });
    }

    const datiMese = {}

    transazioni.forEach((dato) => {
        const meseN = new Date(dato.data).getMonth() + 1
        const mese = getMonthName(meseN) 
        if (!datiMese[mese]) {
            datiMese[mese] = []
        }
        datiMese[mese].push(dato)
    });
    
    console.log(datiMese);

    const mesi = Object.keys(datiMese)
    const data = {
        labels: mesi,
        datasets: [
            {
                label: 'Entrata',
                data: mesi.map((mese) => datiMese[mese].reduce((sum, dato) => dato.amount > 0 ? sum + dato.amount : null, 0)),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Spese',
                data: mesi.map((mese) => datiMese[mese].reduce((sum, dato) => (dato.amount < 0) ? sum + dato.amount : sum, 0)),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };


    return (
        <div className='container mt-2'>
            <div className='row mb-4 h-75'>
                <div>GraficoSpese</div>
                <Bar data={data} options={options} />
                {/* <Bar data={transData}></Bar> */}
            </div>
        </div>
    )
}