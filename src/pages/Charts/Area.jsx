import React from 'react';

import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, DateTime, Tooltip, SplineAreaSeries,Legend,} from '@syncfusion/ej2-react-charts';

import { ChartsHeader} from '../../components';

import { useStateContext } from '../../contexts/ContextProvider';

import { areaCustomSeries,areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';


const Area = () => {

const {currentMode} = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>

      <ChartsHeader
        title ="Inflation Rate in Percentage"
      category ="Area Chart"
      />

      <ChartComponent   
        id='line-chart'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{border: {width: 0}}}
        tooltip={{enable: true}}
        legendSettings={{ background: 'white' }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
      <Inject services ={[SplineAreaSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item,index) => 
          (
            <SeriesDirective key={index} {...item}/>
          ))}
      </SeriesCollectionDirective>
      </ChartComponent>

    </div>
  )
}

export default Area