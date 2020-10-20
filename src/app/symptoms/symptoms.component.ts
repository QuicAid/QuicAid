import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { DiagnosisApiService } from '../diagnosis-api.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  symptoms: any;
  selectedSymptom: any;
  diagnosis: any;
  yearOfBirth: number;
  gender = {
    value: ''
  }

  constructor(public apiService: DiagnosisApiService, public config: ConfigService) {
    this.config.setLanguage("en-gb");
    this.config.setFormat("json");
    this.config.getToken();

    try {
      this.apiService.loadSymptoms()
        .subscribe(data => {
          console.log(data);
          this.symptoms = data;
        },
          error => {
            console.log('error:', error);
          })

    } catch (e) {
      console.info('could not get symptoms');
    }
  }

  saveSymptom(symptom): void {
    this.selectedSymptom = symptom;
    console.log(this.selectedSymptom);
  }


  getDiagnosis() {
    this.apiService.loadDiagnosis(this.selectedSymptom, this.gender, this.yearOfBirth).subscribe(
      data => {
        this.diagnosis = data;
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
  }

}
