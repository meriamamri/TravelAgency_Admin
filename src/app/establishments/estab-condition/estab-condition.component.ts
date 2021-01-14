import { EstabconditionService } from './../../core/services/estabcondition.service';
import { MatConfigComponent } from './../../shared/layout/mat-config/mat-config.component';
import { EstabCondition } from './../../core/models/EstabCondition';
import { EstablishmentService } from './../../core/services/establishment.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estab-condition',
  templateUrl: './estab-condition.component.html',
  styleUrls: ['./estab-condition.component.css']
})
export class EstabConditionComponent implements OnInit {
  conditions: EstabCondition[];
  isLoadingResults = true;
  supprimer: boolean;
  addConditionForm;
  editForm;
  condition = new EstabCondition();
  panelOpenState = false;

  constructor(private toastr: ToastrService,public dialog: MatDialog,
    private route: ActivatedRoute, private estabService: EstablishmentService, private conditionService: EstabconditionService,
     private router: Router) { }

  ngOnInit() {
    this.getAllCondition();
  }
  getAllCondition() {
    const id = this.route.snapshot.paramMap.get('idE');
    console.log(id);
    this.estabService.getConditionsByEstab(id).subscribe(data => {
       this.conditions = data;
       console.log(data);
       this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    }
    popUp( condition: EstabCondition): void {
      const dialogRef = this.dialog.open(MatConfigComponent, {
        width: '500px',
        data: 'Êtes-vous sûr de vouloir supprimer cet condition?'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.deleteCondition(condition);
          this.supprimer = true;
        }
      });
    }
    deleteCondition(condition) {
      this.conditionService.deleteCondition(condition._id).subscribe(data => {
        console.log(data);
        this.getAllCondition();
        this.toastr.success('the condition has been deleted succefully');
      });
    }

}
