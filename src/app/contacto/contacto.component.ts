import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactoComponent implements OnInit {

  form = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveForm() {
    this.http.post('/form', this.form)
      .subscribe(res => {
          this.router.navigate(['/home']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}