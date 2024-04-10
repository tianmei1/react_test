import {createRoot} from 'react-dom/client'

import { StrictMode, useState } from 'react'

const Row = (props)=>{
    return (
    <div className='row-conatiner'>
    <input type='checkbox' checked={props.checked} onChange={props.check(props.text)}/>
    <label>{props.text}</label>
    </div>
    )
}


const App = () =>{
    const tableData=[
        {   
            checked: false,
            text: 'row 1',
            id: 1
        },
        {
            checked: false,
            text: 'row 2',
            id:2

        },
        {
            checked: false,
            text: 'row 3',
            id:3
        },
        {
            checked: false,
            text: 'row 4',
            id:4
        }
    ]

    const [allCheck, setAllCheck] = useState(false)
    const check = (rowText)=>{
        if(rowText){
            tableData.findIndex(row=>row.text === rowText)
            if(){
                setAllCheck(!allCheck)
            }
            
        }
        else{
            setAllCheck(!allCheck)
            tableData = tableData.map(row=>row.checked=!allCheck)
        }
    }
    return (
        <div>
            <h2>Select All: </h2>
            <input type='checkbox' checked={allCheck} onChange={()=>check}></input>
            <h2>Table Component for single select:</h2>
            {
                tableData.map(row=><Row {...row} allCheck={allCheck} check= {check} key={row.id}/>)
            }
        </div>
    )
}


const root= createRoot(document.getElementById('root'));
root.render(<StrictMode><App /></StrictMode>)