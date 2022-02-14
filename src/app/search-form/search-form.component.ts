import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { searchValue } from 'src/variables';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public newSearch:string;
  @Output() addSearch = new EventEmitter<any>();

  submitSearch(){
    this.addSearch.emit(this.newSearch);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
