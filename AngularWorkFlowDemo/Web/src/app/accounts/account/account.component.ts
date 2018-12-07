import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts = [
    {id: 1, value: 'Account 1'},
    {id: 2, value: 'Account 2'},
    {id: 3, value: 'Account 3'}
];
  constructor(public dialogRef: MatDialogRef<AccountComponent>) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

}
