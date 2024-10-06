import { Component } from '@angular/core';
import { NavLinkComponent } from '../../ui/nav-link/nav-link.component';
import { NgFor } from '@angular/common';
import { linkinfo } from '@models/header.model';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.style.scss',
  imports: [NavLinkComponent, NgFor],
})
export class HeaderComponent {
  isToggled: boolean = false;

  linkinfo: linkinfo[] = [
    {
      title: 'Applications',
      url: '/',
      iconName: 'contact_page',
    },
    {
      title: 'Profiles',
      url: '/',
      iconName: 'account_circle',
    },
    {
      title: 'Videos',
      url: '/',
      iconName: 'smart_display',
    },
  ];

  toggleHamburgerMenu() {
    console.log('Clicked');
    this.isToggled = !this.isToggled;
  }
}
