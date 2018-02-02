import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

declare let paypal: any;
declare let amount: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user;
  login: Boolean;
  product;
  productId;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _getRouteId: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = this._httpService.loadToken();
    console.log(this.user);
    if (this.user != undefined) {
      this.login = true;
      console.log(this.login);
      this._httpService.decoded(this.user).subscribe(user => {
        console.log(user);
        this.user = user['id'];
      })
    }
    else {
      this.login = false;
    }
    this._getRouteId.params.subscribe(params => {
      this.productId = params.id;
      console.log(this.productId);
      this._httpService.getOne(this.productId).subscribe(data => {
        console.log(data);
        this.product = data['data'];
        console.log(this.product);


        this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(() => {
          paypal.Button.render({
            env: 'sandbox',
            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create
            client: {
              sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
            },
            commit: true,
            payment: function (data, actions) {

              // return this.payment(actions)
              return actions.payment.create({
                payment: {
                  transactions: [
                    {
                      amount: { total: '5', currency: 'USD' }
                    }
                  ]
                }
              })
            },
            onAuthorize: function (data, actions) {
              return actions.payment.execute().then(function (payment) {
                // TODO
                console.log("The payment is complete!");
                window.alert('Payment Complete!');
              })
            }
          }, '#paypal-button');
        });
      })
    })
  }


  public loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script')
      scriptElement.src = scriptUrl
      scriptElement.onload = resolve
      document.body.appendChild(scriptElement)
    })


  }
}
