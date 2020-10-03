import { Component, OnInit, Input, TemplateRef } from '@angular/core';


@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

    constructor() { }

    @Input() rowData : any[];
    @Input() colsTemplate: TemplateRef<any>[];
    @Input() headings: string[];

    ngOnInit(): void {
    }

}
