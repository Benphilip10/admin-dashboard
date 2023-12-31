import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Legend, Inject, Category, StackingColumnSeries, Tooltip, Border } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({height, width}) => {

  const {currentMode} = useStateContext();

  return (
    <ChartComponent
    height={height}
    width = {width}
    id = "stack-chart"
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{border : {width: 0}}}
    tooltip={{enable:true}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    legendSettings={{ background: 'white' }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) =>
        <SeriesDirective key = {index} {...item}
        />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked