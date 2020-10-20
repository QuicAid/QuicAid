import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DiagnosisApiService} from '../diagnosis-api.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  symptoms: any;

  constructor() { }

  getDiagnosis() { }
  ngOnInit(): void {
  }

}
