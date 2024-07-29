import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { IComment } from '../../core/models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private commentsUrl = '/assets/productCommentsDB.json';

  constructor(private http: HttpClient) {}

  getCommentsByProductId(productId: number): Observable<IComment[]> {
    return this.http
      .get<IComment[]>(this.commentsUrl)
      .pipe(
        map((comments) =>
          comments.filter((comment) => comment.productId === productId)
        )
      );
  }
}
