import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blind-quiz-query',
  templateUrl: './blind-quiz-query.component.html',
  styleUrls: ['./blind-quiz-query.component.css']
})
export class
 BlindQuizQueryComponent implements OnInit {

  form: FormGroup;
  websiteList: any = [
    { id: 'able', name: 'able' },
    { id: 'accepting', name: 'accepting' },
    { id: 'adaptable', name: 'adaptable' },
    { id: 'bold', name: 'bold' },
    { id: 'brave', name: 'brave' },
    { id: 'calm', name: 'calm' },
    { id: 'caring', name: 'caring' },
    { id: 'cheerful', name: 'cheerful' },
    { id: 'clever', name: 'clever' },
    { id: 'complex', name: 'complex' }
  ];

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      website: this.formBuilder.array([], [Validators.required])
    })
  }

  onCheckboxChange(e) {
    const website: FormArray = this.form.get('website') as FormArray;
    if (e.target.checked) {
      website.push(new FormControl(e.target.value));
    } else {
      const index = website.controls.findIndex(x => x.value === e.target.value);
      website.removeAt(index);
    }
  }

  submit(newHero: string) {
    console.log(this.form.value.website);
    console.log(newHero);
    if(this.form.value.website == ""){
      alert('Select Checkbox!');
      return;
    }else if(newHero == ""){
      alert('Enter Unique Name!');
      return;
    }else{
    this.router.navigate(['/blindQuizSave', { newHero: newHero ,  website: this.form.value.website }]);
    }
  }


  ngOnInit(): void {
  }

}
