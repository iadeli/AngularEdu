import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
    template: `<h1>Contact Us</h1>
    <p>This is the contact page content.</p>
    <ng-container *ngIf="data">
        <h1>{{ data.id }}</h1>
        <p>Age: {{ data.name }}</p>
    </ng-container>
    `
})
export class ContactComponent {
    data: any;

    constructor(private route: ActivatedRoute) { }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        // Add your custom logic here to control navigation
        return confirm('Are you sure you want to leave this page?');
    }

    ngOnInit(): void {
        this.data = this.route.snapshot.data["data"];
        this.route.data.subscribe(console.log);
    }
}