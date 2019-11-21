import { Component, OnInit } from "@angular/core";
import { CommentsService } from "./comments.service";
import { Comment } from "./models/comment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public filteredComments: Comment[];
  public search: string;

  private comments: Comment[];

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.comments = this.commentsService.getComments();
    this.filteredComments = this.filterComments("", this.comments);
  }

  public searchComments() {
    this.filteredComments = this.filterComments(this.search.trim(), this.comments);
  }

  private filterComments(search: string, comments: Comment[]): Comment[] {
    return comments
      .map(c => Object.assign({}, c))
      .filter(c => {
        if (!search || c.text.includes(this.search)) {
          return true;
        }

        if (c.comments) {
          return (c.comments = this.filterComments(search, c.comments)).length;
        }
      });
  }
}
