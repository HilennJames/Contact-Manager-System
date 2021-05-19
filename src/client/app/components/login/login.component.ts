import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../shared/api.service';
import { AuthService} from '../../shared/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
   private api: ApiService,
   private auth: AuthService,
   private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): any{
    const values = form.value;
    console.log(form.value);
    const payload = {
      username: values.username,
      password: values.password
    };
    console.log(payload);
    // send payload to authentication route
    this.api.post(payload).
      subscribe(data => {
        this.auth.setToken(data.token);
        this.router.navigate(['/contacts']);
    });
  }

}
