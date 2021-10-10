
import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('image') input;

  title = 'angular-qr-code';
  name = 'Angular ' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.linkedin.com/in/haknazar-amangeldiyev-a3a74893/';

  constructor(private elRef: ElementRef) { }
  ngOnInit() {

  }

}


