import { Observable } from "rxjs";
import { UserService } from "../user.service";
import { User } from "../user";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

   users?: User[] ;

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUsersList().subscribe(
      (users:any)=>this.users=users,
      err => console.log(err)
      );
    console.log(this.users)
  }
}
