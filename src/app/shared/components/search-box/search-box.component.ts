import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  // @ViewChild('txtInput')
  // public tagInput: ElementRef<HTMLInputElement>

  @Input()
  public placeholder: string = '';
}
