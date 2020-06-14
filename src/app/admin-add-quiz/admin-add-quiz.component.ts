import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../service/dataService';
import { Validators, FormBuilder } from '@angular/forms';
import { FileService } from '../file.service';

@Component({
  selector: 'app-admin-add-quiz',
  templateUrl: './admin-add-quiz.component.html',
  styleUrls: ['./admin-add-quiz.component.css']
})
export class AdminAddQuizComponent implements OnInit {
 
  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });
 
  private fileName;
 
  constructor(private fb: FormBuilder, private fileService: FileService) { }
 
  public onFileChange(event) {
    const reader = new FileReader();
 
    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
      };
    }
  }
 
  public onSubmit(): void {
    this.fileService.upload(this.fileName, this.formGroup.get('file').value);
  }

  ngOnInit(): void {
  }
 }