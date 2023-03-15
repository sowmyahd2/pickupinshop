import React from 'react'
import './Profile.css';


const PersonalInformation = () => {
    return(
        <>
        <div className="personalinfo">
            <div className="container-fluid">
                <div className="row">
                    <div className="personaldetail">
                        <h5>Personal Information</h5>
                        <form>
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="staticEmail" value="Email" />
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
                                <p>Send OTP</p>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-check-label col-3" for="exampleRadios1">Gender</label>
                                <div className="form_inline col-sm-9">
                                <div class="col-sm-4">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                    <div class="col-sm-4">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label class="form-check-label" for="inlineRadio2">Female</label>
                                </div>   
                                </div>                                
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputCity">City</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputCity" />
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
                    </div>
                </div>
            </div>
        </div>
           

        </>
    )
}
export default PersonalInformation;