import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';
import {RoomType} from '../models/RoomType';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RoomTypeService {

  private apiUrl = this.config.url;

  constructor(private config: ConfigService, public http: HttpClient) {
  }

  form: FormGroup = new FormGroup({
    _id: new FormControl(''),
    code: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    nbRoom: new FormControl('', [Validators.required]),
    maxOccup: new FormControl('', [Validators.required]),
    hebergementTypeId: new FormControl('', [Validators.required]),
    minStay: new FormControl('', [Validators.required]),
    nbExtraBed: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    singleBed: new FormControl('', [Validators.required]),
    largeBed: new FormControl('', [Validators.required]),
    priceLitBB: new FormControl('', [Validators.required]),
    productId: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  initializeFormGroup() {
    this.form.setValue({
      _id: '',
      code: '',
      name: '',
      nbRoom: '',
      minStay: '1',
      nbExtraBed: 0,
      size: '',
      singleBed: '',
      largeBed: '',
      maxOccup: '',
      priceLitBB: '',
      productId: '',
      hebergementTypeId: '',
      description: ''
    });
  }

  getAllRoomTypes(idProduct): Observable<RoomType[]> {
    return this.http.get<RoomType[]>(this.apiUrl + '/RoomType/' + idProduct);
  }

  insertRoomType(roomType: RoomType) {
    console.log(roomType);
    return this.http.post<RoomType>(this.apiUrl + '/RoomType/add', roomType, httpOptions);
  }

  updateRoomType(roomType: RoomType) {
    return this.http.put<RoomType>(this.apiUrl + '/RoomType/update/' + roomType._id, roomType, httpOptions);
  }

  deleteRoomType(id: string): any {
    return this.http.delete(this.apiUrl + '/RoomType/delete/' + id);
  }

  populateForm(roomtype) {
    this.form.setValue({
      _id: roomtype._id,
      code: roomtype.code,
      name: roomtype.name,
      nbRoom: +roomtype.nbRoom,
      minStay: +roomtype.minStay,
      nbExtraBed: +roomtype.nbExtraBed,
      size: +roomtype.size,
      singleBed: +roomtype.singleBed,
      largeBed: +roomtype.largeBed,
      maxOccup: +roomtype.maxOccup,
      priceLitBB: +roomtype.priceLitBB,
      productId: +roomtype.productId,
      hebergementTypeId: +roomtype.hebergementTypeId,
      description: roomtype._descriptions[0].content
    });
  }
}
