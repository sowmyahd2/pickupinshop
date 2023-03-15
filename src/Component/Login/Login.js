import React, { useEffect, useState } from 'react'
import './Login.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../Redux/Action/LoginAction';
import { pathOr } from 'ramda';
import { Redirect } from 'react-router-dom';

const Login = () => { 
    const dispatch = useDispatch();
    const user= useSelector(state => state.Login)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const userId = pathOr("",["user","UserId"],user);
    if(userId!=""){
        return(<Redirect to="/" />)
    }
    const onLogin = (event)=>{
        event.preventDefault();
        dispatch(getLogin(email,password))

    }
    return(            
            <div className="loginlayout col-12">
                <div className="container-fluid">
                <div className="row paddingzero">
                    <div className="loginbox col-lg-4 col-md-6 col-sm-8 col-12">
                        <div className="logininner col-lg-12 col-md-12 col-sm-12 col-12">
                        <Tabs>
                            <TabList>
                                <Tab>Login</Tab>
                                <Tab>Register</Tab>
                            </TabList>                        
                            <TabPanel>
                            <form className="form-horizontal" method="post" action>
                                {user.error}
                                <div className="form-group ">
                                    <div className="input-group ">
                                    <div className="input-group-addon loginicon col-1"><i className="fa fa-user" /></div>
                                    <input onChange={(event)=>{setEmail(event.target.value)}} type="text" name="login_email" className="form-control col-11" placeholder="Username or email" required="required" />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <div className="input-group">
                                    <div className="input-group-addon loginicon col-1"><i className="fa fa-key" /></div>
                                    <input onChange={(event)=>{setPassword(event.target.value)}} type="password" name="login_password" className="form-control col-11" placeholder="Password" required="required" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    
                                    <label className="col-lg-6 col-md-6 col-sm-6 col-12" htmlFor="rememberMe"> <input type="checkbox" id="rememberMe" /> Remember Me</label>
                                    <a className="pull-right col-lg-6 col-md-6 col-sm-6 col-12" data-target="#pwdModal" data-toggle="modal">Forgot password?</a>
                                </div>  
                                <button type="button" onClick={(event)=>{onLogin(event)}}  className="btn loginbutton col-12" >Login </button>

                                
                                <div className="or-seperator my-3"><i>or</i></div>
                                <div className="text-center login_socialmedia">
                                    <a className="btn btn-primary btn-block"><i class="fab fa-facebook-square"></i> Sign in with <b>Facebook</b></a>
                                    <a className="btn btn-danger btn-block"><i class="fab fa-google-plus-square"></i> Sign in with <b>Google</b></a>
                                </div>
                                 
                            </form>

                            </TabPanel>
                            <TabPanel>
                            <form className="form-horizontal" method="post" action>
                                <div className="form-group ">
                                    <div className="input-group">
                                    <div className="input-group-addon loginicon col-1"><i className="fa fa-user" /></div>
                                    <input type="text" name="register_username" className="form-control col-11" placeholder="Username" required="required" />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <div className="input-group">
                                    <div className="input-group-addon loginicon col-1"><i className="fa fa-user" /></div>
                                    <input type="text" name="register_fullname" className="form-control col-11" placeholder="Full name" required="required" />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <div className="input-group">
                                    <div className="input-group-addon loginicon col-1"><i className="fa fa-envelope" /></div>
                                    <input type="email" name="register_email" className="form-control col-11" placeholder="Email" required="required"  />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <div className="input-group">
                                    <div className="input-group-addon loginicon col-1"><i className="fa fa-lock" /></div>
                                    <input type="password" name="register_password" className="form-control col-11" placeholder="Password" required="required" />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <div className="input-group">
                                    <div className="input-group-addon loginicon col-1"><i className="fa fa-lock" /></div>
                                    <input type="password" name="register_cpassword" className="form-control col-11" placeholder="Confirm Password" required="required" />
                                    </div>
                                </div>
                                <button type="Button"  className="btn loginbutton col-12" >Register</button>

                                <div className="or-seperator my-3"><i>or</i></div>
                                <div className="text-center login_socialmedia">
                                    <a className="btn btn-primary btn-block "><i class="fab fa-facebook-square"></i> Sign in with <b>Facebook</b></a>
                                    <a className="btn btn-danger btn-block "><i class="fab fa-google-plus-square"></i> Sign in with <b>Google</b></a>
                                </div>
                            </form>
  
                            </TabPanel>
                        </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            </div>

     

    )
}

export default Login;