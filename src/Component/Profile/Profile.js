import React from 'react'
import './Profile.css';

import PersonalInfo from '../../Component/Profile/PersonalInfo';
import ChangePass from '../../Component/Profile/ChangePass';
import Address from '../../Component/Profile/Address';
import BankDetails from '../../Component/Profile/BankDetails';


const Profile = () => {
    return(
        <div className="profilelayout mt-2">
            <div className="container-fluid">
                <div className="row d-none d-lg-block">
                    <div className="profileorder col-lg-12 col-md-12 col-12 ">                        
                        <div class="nav flex-column nav-pills virtualorderlist col-lg-2 col-md-3 col-12 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <h6>VIRTUALL MALL ORDERS</h6>
                            <a class="nav-link active" id="v-pills-online_orders-tab" data-toggle="pill" href="#v-pills-online_orders" role="tab" aria-controls="v-pills-online_orders" aria-selected="true">ONLINE ORDERS</a>
                            <a class="nav-link" id="v-pills-pickup-tab" data-toggle="pill" href="#v-pills-pickup" role="tab" aria-controls="v-pill-pickup" aria-selected="false">PICK UP IN SHOP ORDERS</a>
                            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">HOME DELIVERY ORDERS</a>
                            <h6>MY STUFF / SHORTLIST</h6>
                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">WISHLIST</a>
                            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">REVIEWS</a>
                            <h6>SETTINGS</h6>

                            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">PERSONAL INFORMATION</a>
                            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">CHANGE PASSWORD</a>
                            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">ADDRESS</a>
                            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">BANK DETAILS</a>
                            
                        </div>
                        <div class="tab-content virtualtablist col-lg-10 col-md-9 col-12" id="v-pills-tabContent">
                            <div className="ordertabbox col-12">                         
                                <div class="tab-pane fade show active" id="v-pills-online_orders" role="tabpanel" aria-labelledby="v-pills-online_orders-tab">
                                    <h4></h4>
                                </div>
                                <div class="tab-pane fade" id="v-pills-pickup" role="tabpanel" aria-labelledby="v-pills-pickup-tab">
                                    <h4>  </h4>
                                </div>
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                                </div>


                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>


                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><PersonalInfo /></div>
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><ChangePass /> </div>
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><Address /></div>
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><BankDetails /> </div>

                                
                            </div>
                        </div>
                    </div>
                
                
                </div>
            </div>
        </div>
    )
}

export default Profile;