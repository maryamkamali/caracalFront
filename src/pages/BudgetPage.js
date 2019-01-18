import React from "react";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
// Doughnut Chart
class BudgetPage extends React.Component {
    componentDidMount(){
        const ref = new URL(window.location.href);
        const code = ref.searchParams.get("code");
        axios.post('http://192.168.25.147:3000/token', {
          "authorizationCode": code
        })
        .then(res => {
          const token = res.data.access_token;

          axios.get('http://192.168.25.147:3000/account/balances?accountNumber=0110008020006', {"authorizatio":"Bearer "+token}).then(response => {
              console.log(response);
          })
          console.log(res);
          console.log(res.data.access_token);
        })
        // window.location.href = 'http://pfm.myoxygen.ir/auth/realms/master/protocol/openid-connect/auth?response_type=code&state=&client_id=79eaa7d7-83a8-42d3-9b95-94b53964&client_secret=4afab5ab-0bf1-430f-8839-0b372d80c781&scope=&redirect_uri=http://192.168.25.142:3000/'
    }
    render() {
        return (
            <div>
                <MDBContainer>
                    
                </MDBContainer>
            </div>
//             <MDBContainer>
//                 <div class="card">
//   <div class="card-body">

   
//     <div class="table-responsive">

//       <table class="table product-table">

      
//         <thead class="mdb-color lighten-5">
//           <tr>
//             <th></th>
//             <th class="font-weight-bold">
//               <strong>Product</strong>
//             </th>
//             <th class="font-weight-bold">
//               <strong>Color</strong>
//             </th>
//             <th></th>
//             <th class="font-weight-bold">
//               <strong>Price</strong>
//             </th>
//             <th class="font-weight-bold">
//               <strong>QTY</strong>
//             </th>
//             <th class="font-weight-bold">
//               <strong>Amount</strong>
//             </th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">
//               <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" alt="" class="img-fluid z-depth-0"/>
//             </th>
//             <td>
//               <h5 class="mt-3">
//                 <strong>iPhone</strong>
//               </h5>
//               <p class="text-muted">Apple</p>
//             </td>
//             <td>White</td>
//             <td></td>
//             <td>$800</td>
//             <td>
//               <input type="number" value="2" aria-label="Search" class="form-control" style="width: 100px"/>
//             </td>
//             <td class="font-weight-bold">
//               <strong>$800</strong>
//             </td>
//             <td>
//               <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
//                 title="Remove item">X
//               </button>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">
//               <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg" alt="" class="img-fluid z-depth-0"/>
//             </th>
//             <td>
//               <h5 class="mt-3">
//                 <strong>Headphones</strong>
//               </h5>
//               <p class="text-muted">Sony</p>
//             </td>
//             <td>Red</td>
//             <td></td>
//             <td>$200</td>
//             <td>
//               <input type="number" value="2" aria-label="Search" class="form-control" style="width: 100px"/>
//             </td>
//             <td class="font-weight-bold">
//               <strong>$600</strong>
//             </td>
//             <td>
//               <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
//                 title="Remove item">X
//               </button>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">
//               <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg" alt="" class="img-fluid z-depth-0"/>
//             </th>
//             <td>
//               <h5 class="mt-3">
//                 <strong>iPad Pro</strong>
//               </h5>
//               <p class="text-muted">Apple</p>
//             </td>
//             <td>Gold</td>
//             <td></td>
//             <td>$600</td>
//             <td>
//               <input type="number" value="2" aria-label="Search" class="form-control" style="width: 100px"/>
//             </td>
//             <td class="font-weight-bold">
//               <strong>$1200</strong>
//             </td>
//             <td>
//               <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
//                 title="Remove item">X
//               </button>
//             </td>
//           </tr>
//           <tr>
//             <td colspan="3"></td>
//             <td>
//               <h4 class="mt-2">
//                 <strong>Total</strong>
//               </h4>
//             </td>
//             <td class="text-right">
//               <h4 class="mt-2">
//                 <strong>$2600</strong>
//               </h4>
//             </td>
//             <td colspan="3" class="text-right">
//               <button type="button" class="btn btn-primary btn-rounded">Complete purchase
//                 <i class="fas fa-angle-right right"></i>
//               </button>
//             </td>
//           </tr>
     

//         </tbody>
    

//       </table>

//     </div>

//   </div>

// </div>
        
//           </MDBContainer>
        )
    }
}
export default BudgetPage;