import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  // @ViewChild('txtInput')
  // public tagInput!: ElementRef<HTMLInputElement>;

  @Output()
  // public onValue: EventEmitter<string> = new EventEmitter();
  public onValue = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  emitTag(tag: string): void {
    // this.onValue.emit(this.tagInput.nativeElement.value);
    this.onValue.emit(tag);
  }
}
