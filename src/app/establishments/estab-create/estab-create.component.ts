import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSelect } from '@angular/material';
import { ReplaySubject, Subject, from, of } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { TypeestabService } from './../../core/services/typeestab.service';
import { EstablishmentType } from './../../core/models/EstablishmentType';
import { Router } from '@angular/router';
import { HotelchaineService } from 'src/app/core/services/hotelchaine.service';
import { HotelChain } from 'src/app/core/models/HotelChain';
import { CropperSettings, ImageCropperComponent, Bounds } from 'ng2-img-cropper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Establishment } from 'src/app/core/models/Establishment';
import { CountryService } from 'src/app/core/services/country.service';
import { Country } from 'src/app/core/models/Country';
import { CityService } from 'src/app/core/services/city.service';
import { City } from 'src/app/core/models/city';
import { CategoryserviceService } from 'src/app/core/services/categoryservice.service';
import { EstabServiceCategory } from 'src/app/core/models/EstabServiceCategory';
import { PaymentMethodService } from 'src/app/core/services/payment-method.service';
import { PaymentMethod } from 'src/app/core/models/PaymentMethod';
import { EstablishmentService } from 'src/app/core/services/establishment.service';
import { Images } from 'src/app/core/models/Images';
import { ConfigService } from 'src/app/core/services/config.service';
import { MetaInfo } from 'src/app/core/models/MetaInfo';
import { Geolocation } from 'src/app/core/models/Geolocation';
import { Contact } from 'src/app/core/models/Contact';
import { EstabAdress } from 'src/app/core/models/EstabAdress';
import { SocialConnection } from 'src/app/core/models/SocialConnection';
import { RestructionService } from 'src/app/core/services/restruction.service';
import { Restruction } from 'src/app/core/models/Restruction';
import { EstabService } from 'src/app/core/models/EstabService';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-estab-create',
  templateUrl: './estab-create.component.html',
  styleUrls: ['./estab-create.component.css']
})
export class EstabCreateComponent implements OnInit {

  formData: FormData;
  images: Images[] = [];
  file: File;
  height: number;
  width: number;
  data: any;
  data2: any;
  cropperSettings: CropperSettings;
  cropperSettings2: CropperSettings;
  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;
  types: EstablishmentType[];
  categories = ['1', '2', '3', '4', '5'];
  ageBb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  ageCh = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '15'];
  chains: HotelChain[];
  countries: Country[];
  paymentMethods: PaymentMethod[];
  categoriesService: EstabServiceCategory[];
  services: string[];
  restructionSelect: string[];
  restructions: Restruction[];
  cities: City[];
  _country: string;
  nbImg = 0;
  isImage = false;
  //att filter chain 

  public cards: FormControl = new FormControl();
  public chainCtrl: FormControl = new FormControl();
  public chainFilterCtrl: FormControl = new FormControl();
  public filteredChains: ReplaySubject<HotelChain[]> = new ReplaySubject<HotelChain[]>(1);
  //att country 
  public countryCtrl: FormControl = new FormControl();
  public countryFilterCtrl: FormControl = new FormControl();
  public filteredCountries: ReplaySubject<Country[]> = new ReplaySubject<Country[]>(1);

  //att filter cities
  public cityCtrl: FormControl = new FormControl();
  public cityFilterCtrl: FormControl = new FormControl();
  public filteredCities: ReplaySubject<City[]> = new ReplaySubject<City[]>(1);

  //att filter types 
  public typeCtrl: FormControl = new FormControl();
  public typeFilterCtrl: FormControl = new FormControl();
  public filteredTypes: ReplaySubject<EstablishmentType[]> = new ReplaySubject<EstablishmentType[]>(1);
  // @ViewChild('singleSelect') singleSelect: MatSelect;
  protected _onDestroy = new Subject<void>();

  constructor(private typeestabservice: TypeestabService,
    private chaineService: HotelchaineService,
    private countryService: CountryService,
    private categoryService: CategoryserviceService,
    private paymentService: PaymentMethodService,
    private cityService: CityService,
    private estabService: EstablishmentService,
    private restructioService: RestructionService,
    private router: Router,
    private configService: ConfigService,
    private toastr: ToastrService


  ) {
    //crop image
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;
    this.cropperSettings.noFileInput = true;
    this.data = {};
    this.cropperSettings2 = new CropperSettings();
    this.cropperSettings2.width = 200;
    this.cropperSettings2.height = 200;
    this.cropperSettings2.keepAspect = false;
    this.cropperSettings2.croppedWidth = 200;
    this.cropperSettings2.croppedHeight = 200;
    this.cropperSettings2.canvasWidth = 500;
    this.cropperSettings2.canvasHeight = 300;
    this.cropperSettings2.minWidth = 100;
    this.cropperSettings2.minHeight = 100;
    this.cropperSettings2.rounded = true;
    this.cropperSettings2.minWithRelativeToResolution = false;
    this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
    this.cropperSettings2.noFileInput = true;
    this.data2 = {};
  }

  ngOnInit() {
    this.services = []
    this.restructionSelect = []
    //type estab service
    this.typeestabservice.getAllEstabtype().subscribe(data => {
      this.types = data;
      this.typeCtrl.setValue(this.types);
      this.filteredTypes.next(this.types.slice());
      // console.log(data);
    });
    //  paymentMethod service
    this.paymentService.getAllPaymentMethod().subscribe(data => {
      this.paymentMethods = data;
      // console.log(data);
    });
    //  category service
    this.categoryService.getAllEstabCateg().subscribe(data => {
      this.categoriesService = data;
      // console.log(data);
      // console.log(this.categoriesService);
    });
    // restruction service
    this.restructioService.getAllRestruction().subscribe(data => {
      this.restructions = data;
      // console.log(data);
    });
    //hotel chain service

    this.chaineService.getAllChaines().subscribe(data => {
      this.chains = data;
      this.chainCtrl.setValue(this.chains);
      this.filteredChains.next(this.chains.slice());
      // console.log(data);
    });

    //country service
    this.countryService.getAllCountry().subscribe(data => {
      this.countries = data;
      this.countryCtrl.setValue(this.countries);
      this.filteredCountries.next(this.countries.slice());
      // console.log(data);
    });


    //select research type estab
    this.typeFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterTypes();
      });
    // select research chain hotel
    this.chainFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterChains();
      });

    //select research country
    this.countryFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCountries();
      });
    this._country = this.countryCtrl.value;
    //console.log(this._country);
    // select research city
    this.cityFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCities();
      });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  // filter chain
  protected filterChains() {
    if (!this.chains) {
      return;
    }

    let search = this.chainFilterCtrl.value;
    if (!search) {
      this.filteredChains.next(this.chains.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredChains.next(
      this.chains.filter(chain => chain.name.toLowerCase().indexOf(search) > -1)
    );
  }
  //// filter type estab 
  protected filterTypes() {
    if (!this.types) {
      return;
    }

    let search = this.typeFilterCtrl.value;
    if (!search) {
      this.filteredTypes.next(this.types.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredTypes.next(
      this.types.filter(type => type.name.toLowerCase().indexOf(search) > -1)
    );
  }
  /// filter country
  protected filterCountries() {
    if (!this.countries) {
      return;
    }

    let search = this.countryFilterCtrl.value;
    if (!search) {
      this.filteredCountries.next(this.countries.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredCountries.next(
      this.countries.filter(country => country.name.toLowerCase().indexOf(search) > -1)
    );
  }
  // filter city
  protected filterCities() {
    if (!this.cities) {
      return;
    }

    let search = this.cityFilterCtrl.value;
    if (!search) {
      this.filteredCities.next(this.cities.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredCities.next(
      this.cities.filter(city => city.name.toLowerCase().indexOf(search) > -1)
    );
  }

  fileChangeListener($event) {
    var image: any = new Image();
    this.file = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);

    };

    myReader.readAsDataURL(this.file);
    this.formData = new FormData;
    this.formData.append('profile', this.file);
    //console.log(this.file)
    //console.log(this.formData)

  }

  //method crop
  cropped(bounds) {
    this.height = bounds.bottom - bounds.top;
    this.width = bounds.right - bounds.left;
  }
  // add list cities after select country
  showCity(e) {
    this.cityService.findByCountryId(e._id).subscribe(data => {
      this.cities = data;
      this.cityCtrl.setValue(this.cities);
      this.filteredCities.next(this.cities.slice());
      //  console.log(data);
    });
  }
  upload(f) {
    this.estabService.sendFile(this.formData).subscribe(data => {

      let img = new Images();
      img.height = this.height;
      img.width = this.width;
      img.title = f.descImage;
      img.alt = f.descImage;
      let link: String = Object.values(data)[1];
      let url = this.configService.url.toString().concat("/");
      // console.log(link);
      img.thumbImage = url + Object.values(data)[1];
      img.image = url + Object.values(data)[1];
      this.images.push(img);
      console.log(this.images);
      this.isImage = true;
    });

  }
  //get service selected
  serviceSelected(id: string, e) {
    if (e.target.checked) { this.services.push(id) }
    if (!e.target.checked) {
      let index = this.services.indexOf(id);
      if (index > -1) {
        this.services.splice(index, 1);
      }
    }
    //console.log(this.services)
  }
  //get restruction service
  restructionSelected(id: string, e) {
    if (e.target.checked) { this.restructionSelect.push(id) }
    if (!e.target.checked) {
      let index = this.restructionSelect.indexOf(id);
      if (index > -1) {
        this.restructionSelect.splice(index, 1);
      }
    }
    console.log(this.restructionSelect)
  }

  // add Establishment
  addEstab(general,amenitie,policie,meta,image,location,contact) {
    let estab = new Establishment();
    estab.code = general.code;
    estab.name = general.name;
    estab.description=general.editor;
    estab.checkIn = general.checkIn;
    estab.checkOut = general.checkOut;
    estab.webSite =contact.webSite;
    estab.stars = general.stars;
    estab.ageBB = general.ageBb;
    estab.ageEnfant = general.ageCh;
    estab.urlAdvisor = general.urlAdvisor;
    estab.estabTypeId = this.typeCtrl.value;
    estab.aCompte = false;
    estab.onLinePay = false;
    estab.recomanded = false;
    estab.status = false;
    estab.fax = contact.fax;
    estab.hotelChainId = this.chainCtrl.value;
    let adress = new EstabAdress();
    adress.adress = location.adress;
    adress.postalCode = location.postalCode;
    adress.dCity = location.dCity;
    adress.dNearlyT = location.dNearlyT;
    adress.cityId = this.cityCtrl.value._id;
    let metaInfo = new MetaInfo();
    metaInfo.description = meta.metaDesc;
    metaInfo.keyword = meta.metaKey;
    metaInfo.title = meta.metaTitle;
    let geo = new Geolocation();
    geo.lat = location.lat;
    geo.long = location.long;
    let contactR = new Contact();
    contactR.email = contact.emailR;
    contactR.firstName = contact.firstNameR;
    contactR.lastName = contact.lastNameR;
    contactR.phone =contact.phoneR;
    contactR.job = "Reservation";
    let contactO = new Contact();
    contactO.email = contact.emailO;
    contactO.firstName = contact.firstNameO;
    contactO.lastName = contact.lastNameO;
    contactO.phone = contact.phoneO;
    contactO.job = "Owner";
    let contactA = new Contact();
    contactA.email = contact.emailA;
    contactA.firstName = contact.firstNameA;
    contactA.lastName = contact.lastNameA;
    contactA.job = "Accounting";
    contactA.phone = contact.phoneA;
    this.estabService.addEstab(estab).subscribe(data => {
      this.estabService.addMetaInfo(metaInfo, data._id.toString()).subscribe();
      this.estabService.addGeolocation(geo, data._id.toString()).subscribe();
      this.estabService.addContact(contactO, data._id.toString()).subscribe();
      this.estabService.addContact(contactR, data._id.toString()).subscribe();
      this.estabService.addContact(contactA, data._id.toString()).subscribe();
      this.estabService.addAdress(adress, data._id.toString()).subscribe();

      this.restructionSelect.map(value => {
      let pay = new PaymentMethod();
      pay._id = value.toString();
      this.estabService.addPayMethod(pay, data._id.toString()).subscribe();
      })
      let socialYou = new SocialConnection();
      socialYou.link = contact.youtube;
      socialYou.type = "youtube";
      socialYou.associated = "hotel";
      this.estabService.addSocialConnection(socialYou, data._id.toString()).subscribe();


      let socialFb = new SocialConnection();
      socialFb.link = contact.facebook;
      socialFb.type = "facebook";
      socialFb.associated = "hotel";
      this.estabService.addSocialConnection(socialFb, data._id.toString()).subscribe();


      let socialLin = new SocialConnection();
      socialLin.link = contact.linkedIn;
      socialLin.type = "linkedIn";
      socialLin.associated = "hotel";
      this.estabService.addSocialConnection(socialLin, data._id.toString()).subscribe();



      let socialTwi = new SocialConnection();
      socialTwi.link = contact.twitter;
      socialTwi.type = "twitter";
      socialTwi.associated = "hotel";
      this.estabService.addSocialConnection(socialTwi, data._id.toString()).subscribe();


      let socialIn = new SocialConnection();
      socialIn.link = contact.instagram;
      socialIn.type = "instagram";
      socialIn.associated = "hotel";
      this.estabService.addSocialConnection(socialIn, data._id.toString()).subscribe();

      this.images.map(img => {
        this.estabService.addImage(img, data._id.toString()).subscribe();
      })
      this.restructionSelect.map(value => {
        let rest = new Restruction();
        rest._id = value;
        console.log(value);
        this.estabService.addRestruction(rest, data._id.toString()).subscribe();
      });


      this.services.map(s => {
        let service = new EstabService();
        service._id = s.toString();
        this.estabService.addService(service, data._id.toString()).subscribe();
      })

    });

    this.router.navigate(['/establishments/all']);
    this.toastr.success('the establishment has been added succefully');

  }

}
