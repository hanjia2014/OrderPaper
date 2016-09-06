import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    template: `<!--<div class="side">
                <div class="side_inner">
                    <a rel="nofollow" class="Sharer_link u-button u-facebook">
                        <i class="Sharer_icon fa fa-facebook"></i>
                        <span class="Sharer_label">Facebook</span>
                    </a>
                    <a rel="nofollow" class="Sharer_link u-button u-linkedin">
                        <i class="Sharer_icon fa fa-linkedin"></i>
                        <span class="Sharer_label">LinkedIn</span>
                    </a>
                    <a rel="nofollow" class="Sharer_link u-button u-twitter">
                        <i class="Sharer_icon fa fa-twitter"></i>
                        <span class="Sharer_label">Twitter</span>
                    </a>
                </div>
               </div>-->
               <router-outlet></router-outlet>
                `,
    styles: [`
            .side {
                position: fixed;
                margin: 0;
                top: 40%;
                width: 48px;
                overflow: hidden;
                left: 0;
            }`],
    providers: []
})
export class MasterComponent implements OnInit {
    constructor(private router: Router) {

    }
    ngOnInit() {
        this.router.navigate(['/order-paper-list']);
    }
}