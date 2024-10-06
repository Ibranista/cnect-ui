import { Component, Input } from '@angular/core';
import { LinkInfo } from '@models/header.modal';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss',
})
export class NavLinkComponent {
  @Input() linkInfo: LinkInfo = {
    title: '',
    url: '/',
    iconName: 'contact_page',
  };
}
