import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { EqEntity } from '../eq-entity.model';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [
    NgForOf,
    DatePipe
  ]
})
export class UserListComponent implements OnInit {
  users: EqEntity[] = [];
  currentPage = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.currentPage).subscribe(data => {
      this.users = data.filter(user => user.insertDate !== null);
    });
  }

  nextPage() {
    this.currentPage++;
    this.loadUsers();
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadUsers();
    }
  }
}
