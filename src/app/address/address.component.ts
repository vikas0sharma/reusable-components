import { Component } from '@angular/core';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent {

    addresses = [
        {
            name: 'Scott',
            country: 'Germany'
        },
        {
            name: 'Billy',
            country: 'Mexico'
        },
        {
            name: 'Frank',
            country: 'Canada'
        },
        {
            name: 'Alan',
            country: 'Sweden'
        }
    ]
    
    headings = [
        'Name',
        'Country'
    ];

}
