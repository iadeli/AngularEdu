import { Component } from "@angular/core";

@Component({
    template: `
    <h1>Profile</h1>
    <div style="display: flex;">
        <nav style="flex: 1;">
            <ul style="list-style-type: none; padding: 0;">
                <li><a routerLink="info">Info</a></li>
                <li><a routerLink="settings">Settings</a></li>
                <li><a routerLink="orders">Orders</a></li>
            </ul>
        </nav>
        <section style="flex: 3;">
            <router-outlet></router-outlet>
        </section>
    </div>
    `
})
export class ProfileComponent { }