import { Component } from '@angular/core';
import { NAMED_ENTITIES } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  menu: any[] = [
    { 'name': 'Home', 'link': '/home' },
    { 'name': 'Currency Converter', 'link': '/currency-converter' },
    { 'name': 'Profile', 'link': '/profile' },
    { 'name': 'Edit Profile', 'link': '/edit-profile' },
    { 'name': 'Admin', 'link': '/admin' },
    { 'name': 'Admin Modal', 'link': '/admin-modal' },
    { 'name': 'Sign In', 'link': '/sign-in' },
    { 'name': 'Sign Up', 'link': '/sign-up' },
  ]

  NAME: string = 'name';
  LINK: string = 'link'
}