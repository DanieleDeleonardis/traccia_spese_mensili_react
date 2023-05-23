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
                backgroundColor: '#65B08E'
            },
            {
                label: 'Spese',
                data: mesi.map((mese) => datiMese[mese].reduce((sum, dato) => (dato.amount < 0) ? sum + dato.amount : sum, 0)),
                backgroundColor: '#E08F8C',
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
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
    };


    return (
        <div className='container mt-4'>
            <div className='row mb-4 h-75 p-2 border border-bg rounded shadow bg-white'>
                <Bar data={data} options={options} />
                {/* <Bar data={transData}></Bar> */}
            </div>
        </div>
    )
}