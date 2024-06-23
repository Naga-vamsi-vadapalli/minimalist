import React from 'react';
import './App.css';
import { useState } from 'react';
import image1 from './background.jpg'
import cracker from './fire cracker.png'
import imageSrc from './line.jpg'; 
import imageSrc2 from './line2.png'; 
import imageSrc3 from './popup.png';
import logo from './logo.png'


const productContents1 = {
  quantity: 10,
  description: "Hand-hurting pieces of rassi bombs",
  emotionalImpact: "Filled with great pain and Raju’s hopes"
};

const shippingTime1 = {
  duration: "Before Raju understands that his dreams do not matter"
};

const rajuRassibomb = {
  id: 1,
  name: "Raju Rassibomb",
  description: "This product packs an extra punch, thanks to the literal blood, sweat and tears of a young boy.",
  contents: productContents1,
  shippingTime: shippingTime1
};

const productContents2 = {
  quantity: 10,
  description: "Hand-hurting pieces of rassi bombs",
  emotionalImpact: "Filled with great pain and Raju’s hopes"
};

const shippingTime2 = {
  duration: "Before Chani realizes the value of her dreams"
};

const ladiyonKiRaniChani = {
  id: 2,
  name: "Ladiyon ki Rani Chani",
  description: "This product embodies the essence of endurance, with each piece infused with the tenacity of a young girl.",
  contents: productContents2,
  shippingTime: shippingTime2
};





function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (productId) => {
    if (productId === 1) {
      setSelectedProduct(rajuRassibomb);
    } else if (productId === 2) {
      setSelectedProduct(ladiyonKiRaniChani);
    }
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="App">
      <div className="background">
        <div className="header">
          <img src={logo} alt='logo'/>
        </div>
        <div className='text-field'>
          <div className='heading1'>
             <h1>The Choice is yours.</h1>
             <h1>Because they don't have one. </h1>
          </div>
          <div>
              <button className='button-view'>Quick View</button>
          </div>

        </div>
        
      </div>
      <div className="About">
        <img src={imageSrc} alt="Description" className="image" />
        <h1>About</h1>
        <img src={imageSrc} alt="Description" className="image" />
      </div>
      <div className="About">
        <img src={cracker} alt="Description" className="image" />
        <div className='para'><p>Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their
          chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.</p>
        <h2>
        The choice is yours. Because they don’t have one.
        </h2></div>
        <img src={cracker} alt="Description" className="image" />
      </div>
      <div className="About">
        <img src={imageSrc} alt="Description" className="image" />
        <h1>Our Products</h1>
        <img src={imageSrc} alt="Description" className="image" />
      </div>
      <div className='products'>
      <div className="product-box" >
      <img src={image1} alt="description" />
          <div className="content">
            <h1>Raju Rassibomb</h1>
            <button className="button-view1" onClick={() => openModal(1)}>Quick View</button>
          </div>
          
      </div>
        <div className="product-box" >
        <img src={image1} alt="description" />
          <div className="content">
            <h1>Ladiyon ki Rani Chani</h1>
            <button className="button-view1" onClick={() => openModal(2)}>Quick View</button>
          </div>
          
        </div>
     </div>

     <div className="img-container">
        <img src={imageSrc2} alt="description" />
      </div>   
   
   
   {/* Modal or Popup */}
   {selectedProduct && (
        <div className="modal">
          <div><img src={imageSrc3} alt='des'></img></div>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h1>{selectedProduct.name}</h1>
            <hr></hr>
            <p>{selectedProduct.description}</p>
            <h2>Product Description:</h2>
            <ul>
              <li>Quantity: {selectedProduct.contents.quantity}</li>
              <li>Description: {selectedProduct.contents.description}</li>
              <li>Emotional Impact: {selectedProduct.contents.emotionalImpact}</li>
            </ul>
            <hr></hr>
            <h2>Shipping Time:</h2>
            <p>{selectedProduct.shippingTime.duration}</p>
            <hr></hr>

            <button className='button-view1'>Choose now</button>
          </div>
        </div>
      )}
   
   
   </div>
    
    

  );
}

export default App;