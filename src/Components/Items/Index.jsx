import React from 'react'
import PriceList from './PriceList'
// var productList = ['yam','garri','beans','plantian','oil','indomie']
export default function Index({list,flag}) {
  return (
    <div>
        <h1>Product List</h1>
        <ul>
        {list.map((item, index)=>
        <PriceList ItemPrice={item} key={index} flag={flag}/>
        // <li key={index}>{item}</li>
        )}
        </ul>
    </div>
  )
}
