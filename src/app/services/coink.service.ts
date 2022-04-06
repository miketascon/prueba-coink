import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DocumentTypes } from '../interfaces/documentTypes';
import { Genders } from '../interfaces/genders';

@Injectable({
  providedIn: 'root'
})
export class CoinkService {

  constructor(private http: HttpClient) { }

  getDocumentTypes() {
    return this.http.get<DocumentTypes>(`${environment.api}qa/signup/documentTypes?apiKey=${environment.apiKey}`);
  }

  getGenders() {
    return this.http.get<Genders>(`${environment.api}qa/signup/genders?apiKey=${environment.apiKey}`);
  }

}
