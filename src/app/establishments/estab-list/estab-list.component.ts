import {MatConfigComponent} from './../../shared/layout/mat-config/mat-config.component';
import {EstablishmentService} from './../../core/services/establishment.service';
import {Establishment} from './../../core/models/Establishment';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-estab-list',
  templateUrl: './estab-list.component.html',
  styleUrls: ['./estab-list.component.css']
})
export class EstabListComponent implements OnInit {
  establishments: Establishment[];
  supprimer: boolean;

  constructor(private toastr: ToastrService, public dialog: MatDialog, private estabService: EstablishmentService, private router: Router) {
  }

  ngOnInit() {
    this.estabService.getAllEstab().subscribe(data => {
      this.establishments = data;
      console.log(this.establishments);
      this.supprimer = false;
    });
  }

  getAllEstab(): void {
    this.estabService.getAllEstab().subscribe(data => {
      this.establishments = data;
    });
  }

  popUp(establishment: Establishment): void {
    const dialogRef = this.dialog.open(MatConfigComponent, {
      width: '500px',

      data: 'Êtes-vous sûr de vouloir supprimer cet establishment?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteEstab(establishment);
        this.supprimer = true;
      }
    });
  }

  addEstab(): void {
    this.router.navigate(['establishments/add']);
  }

  deleteEstab(establishment) {

    this.estabService.deleteEstab(establishment._id).subscribe(data => {
      console.log(data);
      this.getAllEstab();
      this.toastr.success('the establishment has been deleted succefully');
    });
  }
}
