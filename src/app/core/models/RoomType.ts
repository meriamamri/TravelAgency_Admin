import {Description} from './Description';

export class RoomType extends Description {

  constructor(
    public _id?: string,
    public code?: string,
    public name?: string,
    public nbRoom?: number,
    public minStay?: number,
    public nbExtraBed?: number,
    public size?: number,
    public singleBed?: number,
    public largeBed?: number,
    public maxOccup?: number,
    public priceLitBB?: number,
    public productId?: string,
    public hebergementTypeId?: string,
    public _typeRate?: [{}],
    public _equipements?: [{}],
    public _occupancies?: [{}],
    public _stopSales?: [{}],
    public _descriptions?: [{}],
  ) {
    super();
  }
}
