export class Case {
    userId : number;
    date : Date;
    topic : string;
    content : string;
    //atachment
    responsibleId : number;
    status : string;
  }
  export const topics = {
    COMPLAINT : 'شکایت',
    ENTEGHAD : 'انتقاد',
    SUGGESTION : 'پیشنهاد',
    REQUEST : 'درسخواست',
}
export const status = {
    OPEN : 'باز',
    CLOSED : 'بسته',
    INQUEUE : 'در حال بررسی',
    POSTPONED : 'تعویق',
}