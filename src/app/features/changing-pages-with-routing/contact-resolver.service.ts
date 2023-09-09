import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from '../using-services-dependency-injection/data.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.params['id']; // Assuming the route has a parameter called 'id'
    const item = this.dataService.getDataById(Number(id));
    return of(item);
  }
}