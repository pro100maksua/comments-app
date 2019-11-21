import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommentsService } from "../comments.service";
import { Comment } from "../models/comment";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"],
})
export class CommentComponent {
  @Input() comment: Comment;
  @Output() commentRemoved = new EventEmitter();

  public showCommentInput: boolean = false;
  public newComment: string;

  constructor(private commentsService: CommentsService) {}

  public removeComment() {
    this.commentRemoved.emit();
  }

  public submitComment() {
    if (!this.newComment.trim()) {
      return;
    }

    const newComment = {
      id: this.commentsService.getNextCommentId(),
      text: this.newComment,
    };

    this.comment.comments = this.comment.comments
      ? [...this.comment.comments, newComment]
      : [newComment];

    this.newComment = "";
    this.showCommentInput = false;
  }
}
