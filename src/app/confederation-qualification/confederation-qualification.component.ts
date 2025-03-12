import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confederation-qualification',
  imports: [],
  template: `

    <h1> {{confederationName}} qualification of {{year}} </h1>
    <hr>
    <p>
      confederation-qualification works!
    </p>
  `,
  styles: ``
})
export class ConfederationQualificationComponent {

  route : ActivatedRoute = inject(ActivatedRoute);
  @Input() confederationName! : string;
  @Input() year! : Number;

  constructor() {
    this.year = Number(this.route.snapshot.params['year']);
    this.confederationName = this.route.snapshot.params['confederation'];
  }
}
