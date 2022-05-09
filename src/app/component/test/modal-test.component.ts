// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

interface IData {
  formTitle: String;
  dbFirstName: String;
  dbLastName: String;
  dbNiceTest: String;
  dbNiceTest2: String;
}

@Component({
  selector: 'app-modal-test',
  templateUrl: '../modal-test/modal-test.component.html',
  styleUrls: ['../modal-test/modal-test.component.scss']
})
export class ModalTestComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ModalTestComponent>,
    private formBuilder: FormBuilder,
    // private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: IData
      = {
        formTitle: "test",
        dbFirstName: "",
        dbLastName: "",
        dbNiceTest: "",
        dbNiceTest2: ""
      },
  ) {
    this.justinForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(45)]],
      lastName: ['', [Validators.required, Validators.maxLength(45)]],
      niceTest: ['', [Validators.required, Validators.maxLength(45)]],
      niceTest2: ['', [Validators.required, Validators.maxLength(45)]],
    });


  }

  justinForm: FormGroup;

  ngOnInit(): void {


  }

  onSubmit() {
    this.dialogRef.close(this.justinForm.value);
    // console.log(this.justinForm.value);
  }

  onCancel() {
    // console.log("cancel");
    this.dialogRef.close();
  }
}
