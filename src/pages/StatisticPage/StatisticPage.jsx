
import { Component } from 'react'
import { Chart } from '../../cmps/Chart/Chart'
import './StatisticPage.scss'

export class StatisticPage extends Component {

    render() {
        return (
            <div>
                <Chart type={'marketPrice'}/>
                <Chart type={'tradeVolume'}/>
                <Chart type={'blockSize'}/>
            </div>
        )
    }
}
