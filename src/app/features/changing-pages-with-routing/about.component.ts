import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    template: `
        <h1>About Us</h1>
        <p>This is the about page content.</p>
        <a routerLink="about">Reload Page</a><br />
        <button (click)="goToHome()">برو به خانه</button><br />
        <button (click)="reload()">Reload Page With Relative</button><br />
        <a routerLink="/about/8">load parameter 8</a>
        <p>route param id is: {{id}}</p>
        <hr />
        <h1>{{ name }}</h1>
        <p>Age: {{ age }}</p>
        <p>Location: {{ location }}</p>
        `
})
export class AboutComponent implements OnInit, OnDestroy {

    paramsSubscription!: Subscription;
    id!: number;

    name!: string;
    age!: number;
    location!: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        console.log('snapshot param id:', this.id);
        this.paramsSubscription = this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log('observable param id:', this.id);
        })
        const queryParams = this.route.snapshot.queryParams;
        console.log('queryParams', queryParams);
        const fragment = this.route.snapshot.fragment;
        console.log('fragment', fragment);
        this.route.queryParams.subscribe();
        this.route.fragment.subscribe();

        this.name = this.route.snapshot.data["name"];
        this.age = this.route.snapshot.data["age"];
        this.location = this.route.snapshot.data["location"];
    }

    goToHome() {
        this.router.navigate(['/']);
    }

    reload() {
        this.router.navigate(['about'], { relativeTo: this.route });
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
    }
}