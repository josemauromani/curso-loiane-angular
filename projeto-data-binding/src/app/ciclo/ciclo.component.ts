import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges {

  @Input() valorInicial: number = 0;

  constructor() { 
    this.log('constructor');
   }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook:string) {
    console.log(hook);
  }


}
