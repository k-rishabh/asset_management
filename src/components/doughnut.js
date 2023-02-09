import '../css/chart.css'
import { PieChart } from 'react-minimal-pie-chart';
import {useEffect} from 'react';

const Chart = ({data}) => {
    useEffect(() => {
        calc(data);
    },[]);

    const newData = [
        {title: "Groceries", value: 0, color: "red"},
        {title: "Travel", value: 0, color: "blue"},
        {title: "Food", value: 0, color: "green"},
        {title: "", value: 0, color: "yellow"},
        {title: "", value: 0, color: "orange"},
        {title: "", value: 0, color: "pink"},
        {title: "", value: 0, color: "purple"},
        {title: "", value: 0, color: "brown"},
        {title: "", value: 0, color: "cyan"},
        {title: "", value: 0, color: "aqua"}];

    const calc = (data) => {
        data.forEach(element => {
            if(element.category === "Groceries"){
                newData[0].value = newData[0].value + element.amount;
                console.log(`Groceries ${newData[0].value}`);
            }
            else if(element.category === "Travel"){
                newData[1].value = newData[1].value + element.amount;
                console.log(`Travel ${newData[1].value}`);

            }
            else if(element.category === "Food"){
                newData[2].value = newData[2].value + element.amount;
                console.log(`Food ${newData[2].value}`);
            }
        });
    }

    return(
        <PieChart
            data={newData}
            animate
            lineWidth = {40}
            radius = {9}
            viewBoxSize = {[100, 100]}
            center = {[12, 12]}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
            segmentsShift={0.5}
        />
    )
}

export default Chart;
