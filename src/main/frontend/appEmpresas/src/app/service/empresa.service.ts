import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Empresa} from "../model/Empresa";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiURL = "http://localhost:8080/enterprises/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(this.apiURL)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(empresa: Empresa): Observable<Empresa> {
    return this.httpClient.post<Empresa>(this.apiURL + "createEnterprise", JSON.stringify(empresa), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<Empresa> {
    return this.httpClient.get<Empresa>(this.apiURL + "enterprise/" + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, empresa: Empresa): Observable<Empresa> {
    return this.httpClient.put<Empresa>(this.apiURL + "editEnterprise/" + id, JSON.stringify(empresa), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    console.log(this.apiURL + "deleteEnterprise/" + id)
    console.log(this.httpOptions)
    return this.httpClient.delete<Empresa>(this.apiURL + "deleteEnterprise/" + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
