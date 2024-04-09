import {createRoot} from 'react-dom/client'

import { StrictMode, useState } from 'react'

const  Header =(props)=>{
    return (<header> <h1> {props.title} </h1> <span className='total-items'> Items: {props.itemTotal}</span></header>)
} 

const Item =(props)=>{
    console.log(props)
    return (<div className='item'>
        <button className='remove-item' 
        onClick={()=>props.removeItem(props.id)} 
        />
        <span className='item-name'>{props.name}</span>
        <Counter name = {props.name }/>
    </div>)
}
const Counter =(props)=>{
    const [quantity, setQuantity] = useState(0)
    const increaseQty =()=>{
        setQuantity(prev => prev+1)
        if(props.name=='Apples'){
            setQuantity(prev=> prev+1)
        }

    }
    const decreaseQty =()=>{
        if(quantity>0){
            setQuantity(quantity-1)
        }
    }
    return (<div className='quantity'>
        <span className='qty-label'>QTY</span>
        <button className='increment' onClick={increaseQty}>+</button>
        <button className='decrement' onClick={decreaseQty}>-</button>
        <span className='quantity-amount'>{quantity}</span>
    </div>)
}



const App = () =>{
    const [items, setItems] = useState([
        {
          name: "Apples",
          id: 1,
        },
        {
          name: "Bananas",
          id: 2,
        },
        {
          name: "Box of Pasta",
          id: 3,
        },
        {
          name: "Cookies",
          id: 4,
        }
      ])


    const handleRemoveItem =(id)=>{
        setItems(prev => prev.filter(item=> item.id!==id))
    }
    return (
        <div className='grocery-list'>
            <Header 
            title='My grocery list'
            itemTotal ={items.length} />
            {
                items.map(item=>
                    <Item key={item.id} id={item.id}  name={item.name} quantity = {item.quantity} removeItem = {handleRemoveItem} />
                )
            }
        </div>
    )
}


const root= createRoot(document.getElementById('root'));
root.render(<StrictMode><App /></StrictMode>)