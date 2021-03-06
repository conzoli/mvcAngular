import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-name-detail',
  templateUrl: './name-detail.component.html',
  styleUrls: ['./name-detail.component.css']
})
export class NameDetailComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe( params => {
      this.id = +params['id']; //(+) converts string 'id' to a bumber
    });

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
