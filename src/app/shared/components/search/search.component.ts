import { Component, OnInit } from '@angular/core';
import Post  from '../../../data/models/Post';
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

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  public search() {
    if (this.word.length > 0) {
      this.searchService.get(this.word).subscribe((response: Response) => {
        this.posts = response.data.docs;
      });
    }
    else {
      this.posts = [];
    }
  }

  public clearSearch() {
    if (this.word.length < 0) {
      this.posts = [];
    }

  }

}
