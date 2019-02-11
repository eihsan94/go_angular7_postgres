import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit, AfterViewChecked {
  showSpinner;
  testUserData: any;
    constructor(
    private userService: UserService,
  ) {
   }

  ngOnInit() {
    this.showSpinner = true;
    this.testUserData = this.userService.getApiTableTestData();
    this.testUserData.subscribe(() => this.showSpinner = false);
  }
  ngAfterViewChecked() {
  }
  // getUsers() {
  //   this.testUserData =  this.userService.getApiTableTestData();
  //   this.testUserData.forEach((user: UserClass, i) => {
  //     const newUser = new UserClass();
  //     newUser.username = user.username;
  //     newUser.password = user.password;
  //     newUser.image = `https://picsum.photos/200/?${i}`;
  //     this.users.push(newUser);
  //   });
  //   console.log(this.users);
  // }

}
