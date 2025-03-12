import { Component, Input } from '@angular/core';
import { QualificationData } from '../qualification-data';
@Component({
  selector: 'app-qualification',
  imports: [],
  template: `
    <div>
  <h1>{{ qualificationData.name }}</h1>

  <img
    src="https://en.wikipedia.org/wiki/1934_FIFA_World_Cup#/media/File:1934_fifa_worldcup_poster.jpg"
    alt="the {{ qualificationData.year }} football world cup poster"
  />
  <p>{{ qualificationData.teams }} teams take part</p>
  <p>{{ qualificationData.teamsQualified }} teams qualified</p>
</div>
  `,
  styles: `
  img {
  border-style: groove;
}

div {
  border-style: solid;
  border-width: thick;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
}
`
})
export class QualificationComponent {
  @Input() qualificationData!: QualificationData;
}
