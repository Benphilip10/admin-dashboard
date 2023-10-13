import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components';

const change = (color) => {
    document.getElementById('preview').style.backgroundColor
    = color.currentValue.hex;
}

const ColorPicker = () => {

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header
      title ="Color Picker"
      category ="App"/>

      <div className='text-center'>
          <div id='preview'/>
          <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='font-semibold text-2xl mt-10 mb-4'>
                Inline Picker
            </p>
            <ColorPickerComponent
              id='inline-picker'
              mode='Picker'
              modeSwitcher={false}
              showButtons={false}
              inline
              change = {change}
            />
          </div>

          </div>
      </div>

    </div>
  )
}

export default ColorPicker