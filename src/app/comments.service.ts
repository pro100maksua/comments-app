import { Injectable } from "@angular/core";
import { COMMENTS } from "./COMMENTS";
import { Comment } from "./models/comment";

@Injectable({
  providedIn: "root",
})
export class CommentsService {
  private comments: Comment[] = COMMENTS;
  private nextCommentId: number = 9;

  public getNextCommentId(): number {
    return this.nextCommentId++;
  }

  public getComments(): Comment[] {
    return this.comments;
  }

  // public addComment(parentCommentId: number, newComment: Comment) {
  //   const comment = this.getComment(parentCommentId, this.comments);
  //   if (comment) {
  //     comment.comments = comment.comments
  //       ? [...comment.comments, newComment]
  //       : [newComment];
  //   }
  // }

  // public removeComment(commentId: number) {
  //   this.comments = this.comments.filter(c => c.id !== commentId);
  // }

  // private getComment(commentId: number, comments): Comment {
  //   let comment = comments.find(c => c.id === commentId);
  //   if (!comment) {
  //     for (const c of comments) {
  //       if (c.comments) {
  //         return this.getComment(commentId, c.comments);
  //       }
  //     }
  //   }

  //   return comment;
  // }
}
