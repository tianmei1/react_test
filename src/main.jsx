import {createRoot} from 'react-dom/client'

import { StrictMode, useState } from 'react'

const App = () =>{
    return (
        <div>
            <h1>empty React with Vite</h1>
        </div>
    )
}


const root= createRoot(document.getElementById('root'));
root.render(<StrictMode><App /></StrictMode>)