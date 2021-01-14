import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit , Inject} from '@angular/core';


@Component({
  selector: 'app-mat-config',
  templateUrl: './mat-config.component.html',
  styleUrls: ['./mat-config.component.css']
})
export class MatConfigComponent implements OnInit {

  constructor(
  public dialogRef: MatDialogRef<MatConfigComponent>,
  @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
