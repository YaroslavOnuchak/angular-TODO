import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserInterface } from 'src/app/core/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user: UserInterface;


  private unsubscribe = new Subject();

  constructor(
    private activRoute: ActivatedRoute,
    private userService: UserService
  ) { }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit(): void {
    console.log('this user+++', this.user)
    this.getUserId();
  }
  private getUserId(): void {
    this.activRoute.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        params => {
          this.getUser(params.userId)

        });
  }
  private getUser(userId: number): void {
    this.userService.getUser(userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.user = data;
        console.log('getUser userId: number', data)
        console.log('this user', this.user)
        // console.log('this user.pict', this.user.picture)
      })
  }

}
