import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Banner from './Components/Banner';
import Hero2 from './Components/Hero2';
// import Promo from './Components/Promo';
import Feature from './Components/Feature';
import CTA from './Components/CTA';
// import Header from './Components/Header';
import Previews from './Components/Previews';
import Products from './Components/Products';

ReactDOM.render(
  <React.StrictMode>
    
    <Banner />
      <Hero2 />
     <Feature />
      <Previews />
      <Products />
      
       
       <CTA /> 

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


