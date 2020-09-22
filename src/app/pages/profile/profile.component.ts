import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  toSocialFacebook() {
    const url = 'https://www.facebook.com/tien.nguyenthuy.5477/';
    return window.open(url);
  }

  // tslint:disable-next-line: typedef
  toSocialInstagram() {
    const url = 'https://www.instagram.com/tiennguyen.thuy2208/';
    return window.open(url);
  }
}
