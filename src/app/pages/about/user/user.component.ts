import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  userId: number;

  private unsubscribe = new Subject();

  constructor(
    private activRoute: ActivatedRoute
  ) { }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit(): void {
    this.getUserId();
  }
  private getUserId(): void {
    this.activRoute.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        params => {
          console.log(params);
          this.userId = params.userId
        });
  }


}
