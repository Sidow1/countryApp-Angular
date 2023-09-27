import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  searchByCapital(term: string): void {
    console.log('Desde ByCapitalPage');
    console.log({ term });
  }
}
