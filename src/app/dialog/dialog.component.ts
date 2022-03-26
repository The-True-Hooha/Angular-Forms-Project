import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {

  //passes a list for the urgency materials
  Urgency = ["Very Urgent", "Urgent", "Likely", "Basic"]

  listingForm !: FormGroup;

  constructor(

    private FormBuilder : FormBuilder, 
    private api : ApiService, 
    private dialogRef : MatDialogRef<DialogComponent>
    
    ) { }

  //implements the form body
  ngOnInit(): void {
    this.listingForm = this.FormBuilder.group({
      listName : ['', Validators.required],
      deadline : ['', Validators.required],
      category : ['', Validators.required],
      priority : ['', Validators.required],
      amount : ['', Validators.required],
      statement : ['', Validators.required]
    })
  }

  addListing(){
    if(this.listingForm.valid) {
      this.api.postList(this.listingForm.value)
      .subscribe({
        next: (res) => {
          alert("items has been added successfully")
          this.listingForm.reset();
        },
        error: () => {
          alert("failed! cannot add item")
        }
      })
    }
    
  }
}
