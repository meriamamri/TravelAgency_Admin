import { EstablishmentType } from './EstablishmentType';
import { HotelChain } from './HotelChain';
import { Contact } from './Contact';
export class Establishment{

  constructor(
    public _id?: number,
    public code?: string,
    public name?: string,
    public description?: string,
    public checkIn?: string,
    public checkOut?: string ,
    public fax?: string,
    public webSite?: string,
    public stars?: number,
    public ageBB?: number,
    public ageEnfant?: number,
    public urlAdvisor?: string,
    public estabTypeId?: string,
    public hotelChainId?:string,
    public recomanded?: boolean,
    public aCompte?: boolean,
    public status?: boolean,
    public onLinePay?: boolean,
    public contacts: Contact[]= [{}],
	  public hotelChain: HotelChain= {},
    public typeEstab: EstablishmentType= {},
    ) {

  }
}
