import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

  comments = [
    {
      avatar: 'http://placekitten.com/200/300',
      name: 'Asd',
      text: 'Ugh. As if...'
    },
    {
      avatar: 'http://placekitten.com/200/300',
      name: 'Asd2',
      text: 'Ugh. As if...'
    },
    {
      avatar: 'http://placekitten.com/200/300',
      name: 'Asd3',
      text: 'Ugh. As if...'
    }
  ]

}
