
import React from 'react'
import './Profile.css';


const ChangePassword = () => {
    return(
        <>
      <div className="personalinfo">
            <div className="container-fluid">
                <div className="row">
                    <div className="personaldetail">
                        <h5>Change Password</h5>
                        <form>
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                <input type="text" readOnly className="form-control" id="staticEmail" value="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Old Password</label>
                                <div class="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">New Password</label>
                                <div class="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Confirm New Password</label>
                                <div class="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
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
export default ChangePassword;