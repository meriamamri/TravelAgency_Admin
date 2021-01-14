import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatConfigComponent } from './../../shared/layout/mat-config/mat-config.component';
import { Contact } from 'src/app/core/models/Contact';
import { ContactService } from './../../core/services/contact.service';
import { EstablishmentService } from './../../core/services/establishment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estab-contact',
  templateUrl: './estab-contact.component.html',
  styleUrls: ['./estab-contact.component.css']
})
export class EstabContactComponent implements OnInit {
  contacts: Contact[];
  isLoadingResults = true;
  supprimer: boolean;
  addContactForm;
  editForm;
  contact = new Contact();


  constructor(private toastr: ToastrService,public dialog: MatDialog,
    private route: ActivatedRoute, private estabService: EstablishmentService, private contactService: ContactService ,
     private router: Router) { }

     ngOnInit() {
      this.getAllContact();

      this.addContactForm = new FormGroup({
        'firstName': new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('[a-zA-Z]* ?[a-zA-Z]*')
        ])),
        'lastName': new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('[a-zA-Z]* ?[a-zA-Z]*')
        ])),
        'email': new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ])),
        'phone': new FormControl('', Validators.compose([Validators.required,
            Validators.pattern('^[24579][0-9]{7,7}$')])),
        'job': new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('[a-zA-Z]* ?[a-zA-Z]*')])),
    });
  }

  getAllContact() {
    const id = this.route.snapshot.paramMap.get('idE');
    console.log(id);
    this.estabService.getContactsByEstab(id).subscribe(data => {
       this.contacts = data;
       console.log(data);
       this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    }

  popUp( contact: Contact): void {
    const dialogRef = this.dialog.open(MatConfigComponent, {
      width: '500px',
      data: 'Êtes-vous sûr de vouloir supprimer cet contact?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteContact(contact);
        this.supprimer = true;
      }
    });
  }
  saveContact() {
    const id = this.route.snapshot.paramMap.get('idE');
    console.log(id);
    this.contact.establishment = id;
    console.log(this.contact);
    this.contactService.addContact(this.contact).subscribe(data => {

        console.log(data);
    }, err => {
        console.log(err);
    });
    this.toastr.success('the contact has been added succefully');
    this.getAllContact();
  }
  deleteContact(contact) {

    this.contactService.deleteContact(contact._id).subscribe(data => {
      console.log(data);
      this.getAllContact();
      this.toastr.success('the contact has been deleted succefully');
    });
  }
  }
