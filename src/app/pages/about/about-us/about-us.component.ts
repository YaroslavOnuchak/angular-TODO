import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserInterface } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/services/user/user.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {
  userList: Array<UserInterface>

  private unsubscribe = new Subject();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(data => {
        this.userList = data;
        console.log('userdata', this.userList)
      }),
      error => console.error(error)
  }
  getUser(userId: number): void {
    this.userService.getUser(userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.getUsers()
      });
  }
}
