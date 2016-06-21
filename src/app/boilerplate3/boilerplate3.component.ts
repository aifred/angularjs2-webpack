import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle } from '@angular/common';

import { NavComponent } from 'app/common/nav/nav.component';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-boilerplate3',
  template: require('./boilerplate3.component.html'),
  styles:[require('./boilerplate3.component.css').toString()],
  providers: [],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, NavComponent]
})
export class Boilerplate3Component implements OnInit {
  private URL = "http://demo4539349.mockable.io/file";
  public uploader:FileUploader = new FileUploader({url: this.URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  constructor() {}

  ngOnInit() {}

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}
