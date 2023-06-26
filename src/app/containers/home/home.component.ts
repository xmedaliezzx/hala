import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,GalleryComponent, NgbCarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images = [
    'https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2019/09/Foto-Utama-Granit.jpg',
    'https://flyingcdn-4eed7dde.b-cdn.net/wp-content/uploads/2021/11/shutterstock_1150490255-1_1-1440x570.jpg',
    'https://indonusa-conblock.com/wp-content/uploads/2019/10/granit-dan-marmer.jpg',
  ];
}
