import React from "react";
import { MDBContainer } from "mdbreact";
// import axios from 'axios';
// Doughnut Chart
class OfferPage extends React.Component {
    componentDidMount(){
        window.location.href = 'http://pfm.myoxygen.ir/auth/realms/master/protocol/openid-connect/auth?response_type=code&state=&client_id=79eaa7d7-83a8-42d3-9b95-94b53964&client_secret=4afab5ab-0bf1-430f-8839-0b372d80c781&scope=&redirect_uri=http://192.168.25.142:3000/'
    }
    render() {
        return (
            <MDBContainer>
                <div className="row">
           
            </div>
          </MDBContainer>
        )
    }
}
export default OfferPage;