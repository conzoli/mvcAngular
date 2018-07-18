import { Component, OnInit } from '@angular/core';
import { Name } from '../shared/name.model';
import { NamesService } from './names.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  hideForm = true;

  names: Name[];

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

    this.names.push(newName);

    form.value.ForeName = '';
    form.value.name = '';



    this.nameService.insertName(newName)
    .subscribe( (data: any) => {
      if( data.Succeded == true ) {
        ;
      }
    });

  }


}
