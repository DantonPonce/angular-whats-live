import { UserService } from './../../user.service';
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  private userService = inject(UserService);
  protected users$ = this.userService.getUser();
    // If the api has an error:
    // .pipe(
    //   catchError(err => {
    //     console.log(err);
    //     return of([])
    //   })
    // );
}
