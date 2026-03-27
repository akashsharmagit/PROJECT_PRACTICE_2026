import { Component } from '@angular/core';
import { CompetitionModal } from '../../modal/competition.modal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-competition',
  imports: [FormsModule],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent {

  newobj: CompetitionModal = new CompetitionModal ();

}
