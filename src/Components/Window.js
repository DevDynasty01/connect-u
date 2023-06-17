import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import { NewTaskForm } from './NewTaskForm'

export const Window = () => {
  return (
    <div>
        <Popup trigger=
                {<button> Assign new task </button>}
                position="right center">
                    < NewTaskForm />
            </Popup>
    </div>
  )
}
