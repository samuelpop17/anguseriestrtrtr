import { Component, ElementRef, ViewChild } from '@angular/core';
import { Seguridad } from 'src/app/models/seguridad';
import { ServiceSeries } from 'src/app/services/service.series';
import { Empleados } from 'src/app/models/empleado';
@Component({
  selector: 'app-seguridadempleados',
  templateUrl: './seguridadempleados.component.html',
  styleUrls: ['./seguridadempleados.component.css']
})
export class SeguridadempleadosComponent {
  public token!: string;
  public status: boolean
  public empleados!: Array<Empleados>;
  
  constructor(
    private _serviceSeries: ServiceSeries,
  ) {
    this.status = false
  }

  @ViewChild('cajaname') cajaNmaeRef!: ElementRef;
  @ViewChild('cajapassword') cajaPasswordRef!: ElementRef;


  BuscarToken(): void {

    var nom = this.cajaNmaeRef.nativeElement.value;
    var pass = this.cajaPasswordRef.nativeElement.value;



    this._serviceSeries.login(nom, pass).subscribe((response) => {
      this.token = response.response
      if (this.token.length>0) {
        this.status=true
        if (this.status==true) {
          this._serviceSeries.getEmpleados(this.token).subscribe((response) => {
            this.empleados = response;
          });
        }
      }
      console.log(response.response)
    });
  }
}
