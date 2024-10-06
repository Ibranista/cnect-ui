import { Component, Input } from '@angular/core';
import { linkinfo } from '@models/header.model';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss',
})
export class NavLinkComponent {
  @Input() linkinfo: linkinfo = {
    title: '',
    url: '/',
    iconName: 'contact_page',
  };
}
