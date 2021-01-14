import {AdminAgency} from './AdminAgency';

export class Agency extends AdminAgency {
    constructor(
        public _id?: string,
        public code?: string,
        public webSite?: string,
        public marginAction?: string,
        public margin?: string,
        public marginUnity?: string,
        public emailAgency?: string,
        public phoneAgency?: string,
        public fax?: string
    ) {
        super();
    }
}
