import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import { NewTaskForm } from './NewTaskForm'
import '../Style/Window.css'

export const Window = () => {
  return (
    <div className='window'>
        <Popup trigger=
                {<button> Assign new task </button>}
                position="right center">
                    < NewTaskForm />
            </Popup>
    </div>
  )
}
