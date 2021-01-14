import { ActivatedRoute } from '@angular/router';
import { ContactService } from './../../core/services/contact.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/core/models/Contact';


@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
editContactForm;
contact = new Contact();
  constructor(private contactService: ContactService, private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit() {
    this.editContactForm = new FormGroup({
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
    const id = this.route.snapshot.paramMap.get('idC');
    console.log(id);
    this.contactService.getConatct(id).subscribe(data => {
    console.log(data);
    this.contact = data;
    console.log(data.firstName);
    this.contact.firstName = data.firstName;
    this.contact.lastName = data.lastName;
    this.contact.email = data.email;
    this.contact.phone = data.phone;
    this.contact.job = data.job;
    console.log(this.contact);
    //  sessionStorage.setItem('contact', JSON.stringify(this.contact));
}, err => {
    console.log(err);
});

  }
  editContact() {
    console.log(this.contact);

    this.contactService.updateContact(this.editContactForm.value, this.contact._id).subscribe(data => {


      this.contact = data;
      console.log(this.contact);

        }, err => {
            console.log(err);
        });
        this.toastr.success('the contact has been updated succefully');
  }


}
