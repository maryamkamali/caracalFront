import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

// import axios from 'axios';
// Doughnut Chart
class SavingPage extends React.Component {
    componentDidMount(){
        // window.location.href = 'http://pfm.myoxygen.ir/auth/realms/master/protocol/openid-connect/auth?response_type=code&state=&client_id=79eaa7d7-83a8-42d3-9b95-94b53964&client_secret=4afab5ab-0bf1-430f-8839-0b372d80c781&scope=&redirect_uri=http://192.168.25.142:3000/'
    }
    render() {
        return (
            <MDBContainer>
            <MDBRow center middle>
      
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <form>
                      <p className="h4 text-center py-4">مقدار پس انداز</p>
                      <label
                        htmlFor="defaultFormCardNameEx"
                        className="grey-text font-weight-light"
                      >
                        مقدار درآمد
                      </label>
                      <input
                        type="text"
                        id="defaultFormCardNameEx"
                        className="form-control"
                      />
                      <br />
                      <label
                        htmlFor="defaultFormCardEmailEx"
                        className="grey-text font-weight-light"
                      >
                        مقدار پس انداز
                      </label>
                      <input
                        type="email"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                      />
                      <div className="text-center py-4 mt-3">
                        <MDBBtn className="btn btn-outline-purple" type="submit">
                          ثبت
                          <MDBIcon icon="paper-plane-o" className="ml-2" />
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )
    }
}
export default SavingPage;