import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommentComponent } from "./comment/comment.component";
import { CommentsComponent } from "./comments/comments.component";

@NgModule({
  declarations: [AppComponent, CommentsComponent, CommentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
