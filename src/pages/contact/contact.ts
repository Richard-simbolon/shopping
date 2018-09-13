import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
Injectable()
@Component({
  templateUrl: 'contactdetail.html'
})


export class NavigationDetailsPage {
  item;
  constructor(params: NavParams) {
    this.item = params.data.item;	
  }
}


@Component({
  templateUrl: 'contact.html'
})  


export class ContactPage {
	product: any;
	constructor(public navCtrl: NavController , public http : HttpClient ) {
		this.getProduct('undefined');
		
	}
	
	getProduct(ev) {
		//
		let val = '';
		
		if(ev != 'undefined'){
			val = ev.target.value;
		
		}else{
			 val = '';
		}
		return new Promise(resolve => {
		this.http.get('http://api.hdindonesia.com/csd/getProduct?search='+val).subscribe(data => {
		  resolve(data);
		  this.product = data;
		  
		}, err => {
		  console.log(err);
		});
	  });
	}

  openNavDetailsPage(item) {
    this.navCtrl.push(NavigationDetailsPage, { item: item });
  }

}

