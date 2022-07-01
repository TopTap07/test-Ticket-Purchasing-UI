import './App.css';
import {CheckCircleOutlined,PlusOutlined,UpOutlined,DownOutlined } from '@ant-design/icons';
import visaImg from './img/visa.png'
import card from './img/card.png'
import debitCard from './img/debit-cards.png'
import {useState} from 'react'

function App() {
  const [visaActive,setVisaActive] = useState('')
  const [openTotal,setOpenTotal] = useState(true)
  const OpenvisaActive = (value) => {
    setVisaActive(value)
   
  }
  const Opentotal = () => {
    setOpenTotal(!openTotal)
    
  }
  return (
    <div className="App">
      <div className="DandP">
            <div className="Delivery">
                <div className="DeliveryAnDCheck">
                  <h2 className="h2Delivery">Delivery</h2>
                  <CheckCircleOutlined style={{color:'green',fontSize: '30px'}}/>
                </div>
                <div className="data">
                  <h3>Mobile Entry - Free</h3>
                  <p>Tickets Available by Sun Apr 3, 2022 <br></br>These mobile tickets will be transferred directly yo you from a trusted seller. We'll email <br></br> you
                    instructions on how to accept them on the original ticket provider's mobile app
                  </p>
                </div>
                
            </div>
            <div className="Payment">
              <div className="PaymentB">
                <h2 className="h2Payment">Payment</h2>
                <CheckCircleOutlined  style={{color:'green',fontSize: '30px'}}/>
              </div>
              <div className="creditanddebit">
                <h3>Use Credit/Debit Card</h3>
              </div>
              <div className= {visaActive === 'visa1' ? 'visaDataOpen' : 'visaDataClose'}>
                <div className="visabox1">
                  
                  <input className="radiocheck" type="radio" onClick={() => OpenvisaActive('visa1')}   name="payment" value="VISA"/>
                  <img className="visaimg" src={visaImg} alt="visaimg" height="40" width="50"/>
                  <div className="visabox1_1">
                    <h3>Visa-1111</h3>
                    <p className="Username">UserName | exp. 00/11</p>
                    <div className="EditandDelete">
                      <p className="Edit">Edit</p>
                      <p>|</p>
                      <p className="Delete">Delete</p>
                    </div>
                  </div>
                </div>
                <div className="visabox2">
                  <p className="p_security">Security Code</p>
                  <div className="SecurityCode">
                      <div class="wrapperInput">
                        <CheckCircleOutlined  className="icon" style={{color:'green',fontSize: '30px'}}/>
                        <input class="input" type="password" name="password"></input>
                      </div>
                      <img src={card} alt="three_digits" height="50" width="50"/>
                      <p>3-digits on back of card</p>
                      
                  </div>  
                </div>
                
              </div>
              
              <div className= {visaActive === 'visa2' ? 'visaDataOpen' : 'visaDataClose'}>
                <div className="visabox1">
                  
                  <input className="radiocheck" type="radio"   onClick={() => OpenvisaActive('visa2')}    name="payment" />
                  <img className="visaimg" src={visaImg} alt="visaimg" height="40" width="50"/>
                  <div className="visabox1_1">
                    <h3>Visa-2222</h3>
                    <p className="Username">UserName | exp. 00/22</p>
                    <div className="EditandDelete">
                      <p className="Edit">Edit</p>
                      <p>|</p>
                      <p className="Delete">Delete</p>
                    </div>
                  </div>
                </div>
                <div className="visabox2">
                  <p className="p_security">Security Code</p>
                  <div className="SecurityCode">
                      <div class="wrapperInput">
                        <CheckCircleOutlined  className="icon" style={{color:'green',fontSize: '30px'}}/>
                        <input class="input" type="password" name="password"></input>
                      </div>
                      <img src={card} alt="three_digits" height="50" width="50"/>
                      <p>3-digits on back of card</p>
                      
                  </div>  
                </div>
                
              </div>
             
              <div className="AddCard">
                    <PlusOutlined className="plusicon" style={{color:'blue',fontSize: '30px'}} />
                    <img src={debitCard} alt="debit_card" height="50" width="50"/>
                    <h3>Add New Card</h3>
              </div>
              <hr className="Hrstyle"/>
              <div className="OrPayWith">
                  <h3>Or Pay With</h3>
                  <div className="dataOrPayWith">
                      <p>By using a digital wallet and continuing past this page,you have read and are  accpting the </p>
                      <p className="termsofUse">terms of Use.</p>
                  </div>
                  
            </div>

            </div>
            
      </div>
      {openTotal ? 
        <div className="Total">  
        <div className="totalprice">
          <h2>Total</h2>
          <div className="totalint">
            <h2>$549.11</h2>
            <div className="up_down">
              {openTotal ? <UpOutlined className="UpOutlined" onClick={Opentotal}/> :
              <DownOutlined className="UpOutlined" onClick={Opentotal}/>}
            </div>
          </div>
          
        </div>
        <h3>Tickets</h3>
        <div className="ticketsprice">
          <p>Resale Tickets:$229.00 x 2</p>
          <p>$458.00</p>
        </div>
        <h3>Notes From Seller</h3>
        <p>xfr XFER Proof of at least one dose of COVID-19 vaccination for ages 5 to 11 and guests ages 12 and 
          up will be required to show proof of two COVID-19 vaccine doses or one dose of the Johnson & Johnson vaccine Masks must be worn.</p>
        <h3>Fees</h3>
        <div className="FreeService">
          <p>Service Fee:$44.08x2</p>
          <p>$88.16</p>
        </div>
        <div className="FreeOrder">
          <p>Order Processing Fee</p>
          <p>$2.95</p>
        </div>
        <h3>Delivery</h3>
        <div className="Deliveryprice">
          <p>Mobile Entry</p>
          <p>Free</p>
        </div>
        <h4 className="CancelOrder">Cancel Order</h4>
        <h4>*All Sales Final - No Refunds</h4>
        <div className="checkagree">
          <input type="checkbox" className="checkboxagree"/>
          <h4>i have read and agree to the current</h4>
          <h4 className="TermsofUse">Terms of Use.</h4>
        </div>
        <button type="submit" className="button">Place Order</button>
        <p className="Exceptions">*Exceptions may apply,see our Terms of Use.</p>
        
          
    </div> :
     <div className="Total2">  
        <div className="totalprice">
          <h2>Total</h2>
          <div className="totalint">
            <h2>$549.11</h2>
            <div className="up_down">
              {openTotal ? <UpOutlined className="UpOutlined" onClick={Opentotal}/> :
              <DownOutlined className="UpOutlined" onClick={Opentotal}/>}
            </div>
          </div>
        </div>
      </div> 
    
    }
      
    </div>
  );
}

export default App;
