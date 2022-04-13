import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  public getScreenWidth: any;
  hide:boolean=true;
  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      if(this.getScreenWidth<576){
        this.hide = false
      }
      
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  
    if(this.getScreenWidth<576){
      this.hide = false
    }
    else this.hide = true
    
  }

  viewpara(){
    this.hide = !this.hide
}

}
