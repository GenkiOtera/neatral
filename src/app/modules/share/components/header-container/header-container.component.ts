import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styles: [
  ]
})
export class HeaderContainerComponent implements OnInit {

  protected paths:string[] = ["home", "calendar", "setting"];
  protected selectedPath:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  protected onSelectPath(path:string):void{
    this.selectedPath = path;
  }
}
