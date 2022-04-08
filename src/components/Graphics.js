import React from 'react';
import {Line} from 'react-chartjs-2';
import '../assets/css/Graphics.css';

function Graphics(props) {
    const data={
        labels:["Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"],
        datasets:[
            {
                label:"Cantidad de Insumos entregados",
                fill: false,
                backgroundColor: '#B96493',
                borderColor:'#B96493',
                pointBorderColor:'#B96493',
                pointBorderWidth:1,
                pointHoverRadius:5,
                pointHoverBackgroundColor:'#B96493',
                pointHoverBorderColor:'#B96493',
                pointRadius: 1,
                pointHitRadius: 10,
                data: [2,31, 19, 1, 57, 65, 49,3, 28, 19, 156, 11, 89, 97]
            }
        ]
    }
    return (
        <div className="containerGrafica">
            <Line data={data}/>
        </div>
    );
}

export default Graphics;