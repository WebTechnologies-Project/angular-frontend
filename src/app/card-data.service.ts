import { Injectable } from '@angular/core';
import { Card } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  cards: Card[] = [
    {
      title: 'Card 1',
      bodyText: 'Info about card 1',
      showImg: false,
      url:'https://hips.hearstapps.com/hmg-prod/images/gettyimages-590634523-2-1493049119.jpg?crop=0.669xw:1.00xh;0.259xw,0&resize=640:*'
    },
    {
      title: 'Card 2',
      bodyText: 'Info about card 2',
      showImg: false,
      url:'https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg'
    },
    {
      title: 'Card 3',
      bodyText: 'Info about card 3',
      showImg: false,
      url:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    
  ]

  constructor() { }

  get getCards() {
    return this.cards;
  }
}
