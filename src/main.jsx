import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Product from './Components/Product.jsx'
// import Index from './Components/Items/Index'
// import PriceList from './Components/Items/PriceList.jsx'
// import Style from './Components/Items/Style.jsx'
import StatePro from './Components/StatePro.jsx'
import Import1 from './Components/Import1.jsx'
import StateOne from './Components/StateOne.jsx'
import RandomDefault from './Components/RandomDefault.jsx'

// var productList = ['yam','garri','beans','plantian','oil','indomie']
// var flag=true;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App name= 'john' age= '20' course='java'/> */}
    {/* <Product flag={flag}/> */}
    {/* <Index list={productList} flag={flag}/> */}
    {/* <Style/> */}
    {/* <PriceList/> */}
    {/* <StatePro/> */}
    {/* <Import1/> */}
    <StateOne/>
    <RandomDefault/>
  </StrictMode>,
)
