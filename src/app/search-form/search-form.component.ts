import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor() { }


  categories = new FormControl();
  categorieList: string[] = ['Roman', 'Polar', 'Sci-Fi', 'Education'];

  ngOnInit() {
  }

}
