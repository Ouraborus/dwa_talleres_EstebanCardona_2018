import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public rating = 0;

  public modifyRating(increment){
    increment ? this.rating++ : this.rating--;
  }
  ngOnInit() {
  }

}
