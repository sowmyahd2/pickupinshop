
import React from 'react'
import './Profile.css';


const AddressProfile = () => {
    return(
        <>
       <div className="personalinfo">
            <div className="container-fluid">
                <div className="row">
                    <div className="personaldetail">
                        <h5>Address</h5>
                        <form>
                            <div className="form-group row">
                                <label for="inputPincode" className="col-sm-3 col-form-label">Pincode</label>
                                <div className="col-sm-9">
                                <input type="Number" className="form-control" id="inputPincode" value="Pincode" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputName" className="col-sm-3 col-form-label">Name</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
                                </div>
                            </div>                            
                            <div className="form-group row">
                                <label for="inputNumber" className="col-sm-3 col-form-label">Mobile</label>
                                <div className="col-sm-9">
                                <input type="number" className="form-control" id="inputNumber" placeholder="Number " />
                                
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label for="inputAddress" className="col-sm-3 col-form-label">Address</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputAddress" placeholder=" " />
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputLandmark">Landmark</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputLandmark" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputState">Locality</label>
                                <div className="col-sm-9">
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputState">City</label>
                                <div className="col-sm-9">
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputState">State</label>
                                <div className="col-sm-9">
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                            </div>
                        </form>
                        <div className="savechanges">
                            <button type="button">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 

        </>
    )
}
export default AddressProfile;