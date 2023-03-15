import React, {useState} from 'react';
import './Checkout.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Checkouthome = () => {
    const [startDate, setStartDate] = useState(null); 
    
    return(
        <>
        <div className="checkoutlayout mt-2 d-flex justify-content-center">
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="recipient col-lg-6 col-sm-6 col-12">
                        <h5>Shipping Address</h5>
                        <div className="reciientdetail">
                        <p>Name : <span>Manjunath</span></p>
                        <p>Mobile : <span>9480134391</span></p>
                        <p>Address : <span>#01, 1st cross, 1st main, saraswathipuram</span></p>
                        <p>Location/town : <span>Saraswathipuram</span></p>
                        <p>City/District : <span>Mysore</span></p>
                        <p>State : <span>Karnataka</span></p>                        
                        </div>

                        <button className="recipientbutton">Add New Recipient Details</button>
                    </div>
                </div>
                <div className="row">
                    <div className="selectdate col-sm-6 col-12">
                    <div className="paymentoptionhome col-12 ">
                         
                        <div className="agrrepaymenthome">
                            
                        <div className="radiocheck">    
                        <form>
                        <div className="form-check">
                        <label className="form-check-label" for="check1">
                            <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" checked />i agree to <span>terms of use</span> of Cityonnet.com
                        </label>
                        </div>
                        <button type="submit" className="btn btn-primary placeordercheckout col-6">Place Order</button>
                    </form>
                        </div> 
                    </div>                                            
                    </div>                    
                    </div>
                </div>  
                <div className="row">
                    <div className="seller col-sm-6 col-12">
                        <h5>Seller Detail</h5>
                        <div className="selerdetails">
                        <img className="img-fluid" src="https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/uploaded_files/mysore/1485261296.png" />
                        <p>Om Super Market</p>
                        <p>Address : #199,Dr. Rajakumar Road,Teachers Layout,Mysore-</p>
                        <p>Ph : 8884818587</p>
                        <p>Pickup in Shop Timings.
                            <br/>9:00 AM - 6:00 PM</p>
                        </div>
                        
                    </div>
                    
                </div>          

               
                     
            </div>
            </div>
        

        </>
    )
}
export default Checkouthome;