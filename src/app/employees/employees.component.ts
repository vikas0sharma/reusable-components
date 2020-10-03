import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

    employees = [
        {
            id: 1,
            name: 'Scott',
            designation: 'Dev',
            exp: 4
        },
        {
            id: 2,
            name: 'Billy',
            designation: 'QA',
            exp: 3
        },
        {
            id: 3,
            name: 'Frank',
            designation: 'Lead',
            exp: 8
        },
        {
            id: 4,
            name: 'Alan',
            designation: 'Manager',
            exp: 10
        },
    ];

    headings = [
        'Id',
        'Name',
        'Designation',
        'Experience'
    ];

    @ViewChild('id', { static: true }) id;
    @ViewChild('name', { static: true }) name;
    @ViewChild('des', { static: true }) des;
    @ViewChild('exp', { static: true }) exp;

    cols: TemplateRef<any>[] = [];

    ngOnInit(): void {
        this.cols.push(this.id, this.name, this.des, this.exp);
    }

}
