import { Component, OnInit } from '@angular/core';
import { DiagnosisApiService } from '../diagnosis-api.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {
  showChecker: boolean = true;
  showDiagnosis: boolean = false;
  symptoms: any;
  selectedSymptom: any;
  diagnosis: any;
  yearOfBirth: number;
  gender = {
    value: ''
  }

  constructor(public apiService: DiagnosisApiService) {
  }

  saveSymptom(symptom): void {
    this.selectedSymptom = symptom;
    console.log(this.selectedSymptom);
  }


  getDiagnosis() {
    this.apiService.loadDiagnosis(this.selectedSymptom, this.gender, this.yearOfBirth).subscribe(
      data => {

        if (data) {
          console.log(data);
          this.diagnosis = data;
          this.showChecker = false;
          this.showDiagnosis = true;
        }
        else {
          console.error("Failed to get Diagnosis")
        }
      }
    )
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("QuicAid_Symptoms")) {
      this.symptoms = JSON.parse(sessionStorage.getItem("QuicAid_Symptoms"))
    } else {
      try {
        this.apiService.loadSymptoms()
          .subscribe(data => {
            console.log(data);
            sessionStorage.setItem("QuicAid_Symptoms", JSON.stringify(data));
            this.symptoms = data;
          },
            error => {
              console.log('error fetching symptoms list:', error);
            })
      } catch (e) {
        console.info('error fetching symptoms list:', e);
      }
    }
  }

}
