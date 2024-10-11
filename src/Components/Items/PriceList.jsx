import React from 'react'
import Styles from './Container.module.css'


 function Button({flag}) {
  return (
    <div>
        <button className={flag ? Styles.buttonTrue : Styles.buttonFalse}>submit</button>
    </div>
  )
}


 function PriceList({ItemPrice,index, flag}) {
  return (
    <div key={index} className={flag ? Styles.priceListTrue : Styles.priceListFalse}>
        <h1>{ItemPrice}</h1>
        <Button flag={flag}/>

    </div>
  )
}


export default PriceList


