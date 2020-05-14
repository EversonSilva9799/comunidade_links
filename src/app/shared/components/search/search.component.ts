import { Component, OnInit } from '@angular/core';
import Post from '../../../data/models/Post';
import { SearchService } from 'src/app/data/services/search.service';
import Response from 'src/app/data/models/Response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public posts: Post[] = [];
  public word: string;
  public focus = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  public search() {
    if (this.word.trim().length > 0 ) {
      this.searchService.get(this.word.trim()).subscribe((response: Response) => {
        this.posts = response.data.docs;
      });
    } else {
      this.posts = [];
    }
  }

  public onBlur() {
    this.focus = false;
    if (this.word?.length === 0) {
      this.posts = [];
    }
  }

  public onFocus() {
      this.focus = true;
  }

}
