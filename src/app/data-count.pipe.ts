import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataCount'
})
export class DataCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date =new Date();//get current date ad time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate(),today.getTime())
    var dateDifference = Math.abs(todayWithNoTime-value)//return value in milliseconds
    const secondsInDay =86400; //seconds * 60 miutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts milliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value >todayWithNoTime){
    return dateCounter;
  }
  else{
    return 0;
  }
  }
}
