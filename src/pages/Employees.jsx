import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Search, Inject, Toolbar} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid} from '../data/dummy';

import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Employees = () => {

const {currentMode} = useStateContext();

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header title ="Employees"
        category = "Page"
      />

      <GridComponent
      id ="gridcomp"
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >

        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key ={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Sort, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees