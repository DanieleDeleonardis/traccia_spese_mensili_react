import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export const GraficoSpese = () => {
    const {transazioni} = useContext(GlobalContext)

    const filterDataToMonth = (local = "default") => {
        const allDateTime = transazioni.map((data) => new Date(data.data))
        const allMonth = allDateTime.toLocaleString(local, { month: "long" })
        const toArrayMonth = allMonth.split(',')
        const filterMonth = toArrayMonth.filter((element, index) => {
            return toArrayMonth.indexOf(element) === index;
        })

        return filterMonth

        // console.log(toArrayMonth, filterMonth);
    }

    const months = filterDataToMonth("en-us")
    const nameMonthsToInt = months.map((month) => new Date(`1 ${month}, 2022`).getMonth() + 1 )

    const [transData, setTransData] = useState({
        labels: filterDataToMonth(),
        datasets: [{
            label: "Entrata",
            data: transazioni.map((data) => data.amount > 0 ? data.amount : null ) //console.log(new Date(data.data).getMonth())
        },
        {
            label: "Spesa",
            data: transazioni.map((data) => data.amount < 0 ? data.amount : null )
        }
    ]
    })

    

    return (
        <div className='container mt-2'>
            <div className='row mb-4 h-75'>
                <div>GraficoSpese</div>
                <Bar data={transData}></Bar>
            </div>
        </div>
    )
}