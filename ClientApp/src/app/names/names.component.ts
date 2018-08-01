import { Component, OnInit } from '@angular/core';
import { Name } from '../shared/name.model';
import { NamesService } from './names.service';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { nearer } from 'q';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  hideForm = true;

  names: Name[];

  msg = 'Bereit';

  constructor(private nameService: NamesService) {

     this.names = nameService.getNames();

  }

  ngOnInit() {
  }

  onClickShowForm() {
    this.hideForm = false;
  }

  OnSubmit(form: NgForm) {

    // tslint:disable-next-line:prefer-const
    let newName = new Name();

    newName.Vorname = form.value.ForeName;
    newName.Name =  form.value.name;
    newName.Id = this.nameService.lastId + 1;

    this.nameService.lastId = this.nameService.lastId + 1;

    this.names.push(newName);

    form.value.ForeName = '';
    form.value.name = '';

    this.nameService.insertName(newName)
        .subscribe( result => { this.msg = result; },
                    err => console.error(err) );

    this.hideForm = true;

  }


}
