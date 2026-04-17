import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetitionModal } from '../../modal/competition.modal';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  newobj: CompetitionModal = new CompetitionModal();
  competitionSrv = inject(CompetitionService);
  gridList: CompetitionModal[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.competitionSrv.getCompetition().subscribe({
      next: (result: CompetitionModal[]) => {
        this.gridList = result;
        console.log('Competition list:', result);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }

  onSave(): void {
    console.log('Save clicked');
    console.log('Payload:', this.newobj);

    this.competitionSrv.createCompetition(this.newobj).subscribe({
      next: (res) => {
        console.log('Create success:', res);
        alert('Competition created successfully');
        this.getAll();
        this.newobj = new CompetitionModal();
      },
      error: (err) => {
        console.error('Create error:', err);
        alert('Error creating competition');
      }
    });
  }
}