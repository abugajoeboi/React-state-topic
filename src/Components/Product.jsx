import React from 'react'
import Styles from './Product.module.css';

export default function Product({flag}) {
  return (
    <div>
        <h1 style={{color:'red',backgroundColor:'yellow', textAlign:"center"}}>E-Commence</h1>
        <p className={flag ? Styles.paraTrue : Styles.paraFalse}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eaque repellendus accusantium,
             dolores tenetur libero earum reiciendis distinctio magni dicta quis,
             minima illo cumque adipisci! Tenetur voluptatum repudiandae saepe error.</p>
    </div>
  )
}
