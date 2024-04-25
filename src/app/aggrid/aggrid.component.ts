import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
  <ag-grid-angular
    [rowData]="rowData"
    [columnDefs]="colDefs"
    class="ag-theme-quartz"
    style="height: 500px;">
  </ag-grid-angular>
 `
 })

 export class AgGridComponent {
  // Row Data: The data to be displayed.
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make", flex: 2 },
    { field: "model", flex: 1 },
    { field: "price", flex: 1 },
    { field: "electric", editable: true, flex: 1 }
  ];
 }
