import React from 'react';

import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, Tooltip, DataLabel, ColumnSeries, Category, Legend,} from '@syncfusion/ej2-react-charts';

import { ChartsHeader, Header} from '../../components';

import { useStateContext } from '../../contexts/ContextProvider';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';


const Bar = () => {

const {currentMode} = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>

      <ChartsHeader
        title ="Olympic Medal Counts"
      category ="Bar Chart"
      />

      <ChartComponent   
        id='charts'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{border: {width: 0}}}
        tooltip={{enable: true}}
        legendSettings={{ background: 'white' }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
      <Inject services ={[ColumnSeries, Legend, Category, Tooltip, DataLabel]}/>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item,index) => 
          (
            <SeriesDirective key={index} {...item}/>
          ))}
      </SeriesCollectionDirective>
      </ChartComponent>

    </div>
  )
}

export default Bar