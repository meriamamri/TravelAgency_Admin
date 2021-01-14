import { EstablishmentService } from './../../core/services/establishment.service';
import { Establishment } from './../../core/models/Establishment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estab-show',
  templateUrl: './estab-show.component.html',
  styleUrls: ['./estab-show.component.css']
})
export class EstabShowComponent implements OnInit {
  establishment: Establishment;
  isLoadingResults = true;
  panelOpenState = false;
  constructor(private route: ActivatedRoute, private estabService: EstablishmentService , private router: Router) { }

  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('idE');
      console.log(id);

      this.estabService.getEstab(id).subscribe(data => {
        this.establishment = data;
        console.log(data.name);
        console.log(data);
        this.isLoadingResults = false;

      },
      err => {
        console.log(err);
        this.isLoadingResults = false;

      });
  }
  }

