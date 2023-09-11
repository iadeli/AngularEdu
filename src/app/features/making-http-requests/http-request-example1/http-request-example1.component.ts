import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { User, Userimpl } from '../user.model';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-http-request-example1',
  templateUrl: './http-request-example1.component.html',
  styleUrls: ['./http-request-example1.component.scss']
})
export class HttpRequestExample1Component implements OnInit {

  users: User[] = [];
  formData: User = new Userimpl();
  private userService!: UserService;
  isLoading: boolean = false;
  @ViewChild('usersForm') usersForm!: NgForm;
  errorEmitter: Subject<any> = new Subject<any>();
  errorSub!: Subscription;
  // error: any = null;

  constructor(injector: Injector) {
    this.userService = injector.get(UserService);
  }

  ngOnInit(): void {
    this.loadUsers();
    this.subscribeError();
  }

  subscribeError() {
    this.errorEmitter.asObservable().subscribe({
      next:(error) => {
        alert(error.message);
        console.log(error);
      }
    })
  }

  submitData() {
    this.userService.getLatestId().subscribe((latestId) => {
      this.formData.id = latestId + 1;
      this.userService.createUser(this.formData).subscribe({
        next: (value) => { 
          alert('Operation successful');
          this.usersForm.reset();
          this.loadUsers();
        },
        error: (error) => {
          alert('Operation failed');
        }
      });
    });
  }

  loadUsers() {
    this.isLoading = true;
    setTimeout(() => {
      this.userService.getUsers().subscribe({
        next: (users) => {
          this.users = users;
          this.isLoading = false;
        },
        error:(error) => {
          this.isLoading = false;
          this.errorEmitter.next(error);
        }
      });
    }, 2000);
  }

  delete(userId: number) {
    this.userService.deleteUser(userId).subscribe({
      next: (value) => {
        alert('Operation successful');
        this.loadUsers();
      },
      error: (error) => {
        alert('Operation failed');
      }
    })
  }

}