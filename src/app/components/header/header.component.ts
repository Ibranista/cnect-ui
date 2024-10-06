import { Component } from '@angular/core';
import { NavLinkComponent } from '../../ui/nav-link/nav-link.component';
import { NgFor } from '@angular/common';
import { LinkInfo } from '@models/header.modal';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.style.scss',
  imports: [NavLinkComponent, NgFor],
})
export class HeaderComponent {
  linkInfo: LinkInfo[] = [
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
}
