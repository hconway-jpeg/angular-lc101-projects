import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Fotos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://allpetnews.com/wp-content/uploads/2013/04/Trending-Dog-Tights-3-628.jpg';
  image3 = 'https://content.fun-japan.jp/renewal-prod/cms/articles/content/50feb476405c5bfa170649cf0f661071d1b7891c.jpg';

  constructor() { }

  ngOnInit() {
  }

}