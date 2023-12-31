import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Page, Sort, Filter, Selection, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
  
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title ="Customers"
        category = "Page"
      />
      <GridComponent
      id ="gridcomp"
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowEditing:true, allowDeleting:true}}
      width='auto'
      >

        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key ={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Toolbar, Filter, Selection, Edit]}/>
      </GridComponent>
    </div>
  
  )
}

export default Customers