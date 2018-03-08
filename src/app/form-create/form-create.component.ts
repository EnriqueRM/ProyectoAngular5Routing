import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Form-create',
  templateUrl: './Form-create.component.html',
  styleUrls: ['./Form-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormCreateComponent implements OnInit {

  form = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveForm() {
    this.http.post('/form', this.form)
      .subscribe(res => {
          let correo = res['_correo'];
          this.router.navigate(['/home']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}