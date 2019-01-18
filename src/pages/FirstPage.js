import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
// import axios from 'axios';
import costs from './costs.json'
// Doughnut Chart
// const dataDoughnut = {
//     labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
//     datasets: [
//       {
//         data: [300, 50, 100, 40, 120],
//         backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
//         hoverBackgroundColor: [
//           "#FF5A5E",
//           "#5AD3D1"
//         ]
//       }
//     ]
//   };
class FirstPage extends React.Component {
    componentDidMount() {
        // axios.get("./costs.json").then(res => {
        //   console.log(res);
        // })
        console.log(costs);
      // const ref = new URL(window.location.href);
      // const code = ref.searchParams.get("code");
      // axios.post('http://192.168.25.147:3000/token', {
      //     "authorizationCode": code
      //   })
      //   .then(res => {
      //     const token = res.data.access_token;

      //     axios.get('http://192.168.25.147:3000/account/balances?accountNumber=0110008020006', {"authorizatio":"Bearer "+token}).then(response => {
      //         console.log(response);
      //     })
      //     console.log(res);
      //     console.log(res.data.access_token);
      //   })
    }
    render() {
      let labels = [];
      let datasets = [];
      let colors = [];
      for (let cost of costs.costs){
        labels.push(cost.name);
        datasets.push(cost.price);
        colors.push(cost.color)
        
      }
      const dataDoughnut = {
        labels: labels,
        datasets: [
          {
            data: datasets,
            backgroundColor: colors,
            hoverBackgroundColor: colors
          }
        ]
      };
      let doughnuts = []
      for (let cost of costs.costs){
        const dataDoughnut = {
          labels: ["مصرف شده", "باقیمانده"],
          datasets: [
            {
              data: [cost.price, cost.remained],
              backgroundColor: ["#ef9a9a", cost.color],
              hoverBackgroundColor: [
                "#ef9a9a ", cost.color
              ]
            }
          ]
        };
          doughnuts.push(<div key={cost} className="col-sm">
          <h3 className="mt-3">{cost.name}</h3>
          <Doughnut data={dataDoughnut} options={{ responsive: true }} />
          </div>);
      }
        return (
            <MDBContainer>
                <div className="row">
                <div className="col-sm">
              <h3 className="mt-3">کل هزینه ها</h3>
              <Doughnut data={dataDoughnut} options={{ responsive: true }} />
            </div>
                </div>
                <div className="row">
           {doughnuts}
            </div>
          </MDBContainer>
        )
    }
}
export default FirstPage;