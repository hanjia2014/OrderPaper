import { Component, OnInit, ViewChild } from '@angular/core';
import { DND_PROVIDERS, DND_DIRECTIVES } from '../directives/dnd/ng2-dnd';

@Component({
    selector: 'order-paper',
    providers: [DND_PROVIDERS],
    template: `<div class="container">
                    <div>
                        <h4>Drag-and-Drop - Shopping basket</h4>
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="panel panel-success">
                                    <div class="panel-heading">Available products</div>
                                    <div class="panel-body">
                                        <div *ngFor="let product of availableProducts" class="panel panel-default"
                                            dnd-draggable [dragEnabled]="product.quantity>0" [dragData]="product" (onDragSuccess)="orderedProduct($event)" [dropZones]="['demo1']">
                                            <div class="panel-body">
                                                <div [hidden]="product.quantity===0">{{product.name}} - \${{product.cost}}<br>(available: {{product.quantity}})</div>
                                                <div [hidden]="product.quantity>0"><del>{{product.name}}</del><br>(NOT available)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div dnd-droppable (onDropSuccess)="addToBasket($event)" [dropZones]="['demo1']" class="panel panel-info">
                                    <div class="panel-heading">Shopping Basket<br>(to pay: \${{totalCost()}})</div>
                                    <div class="panel-body">
                                        <div *ngFor="let product of shoppingBasket" class="panel panel-default">
                                            <div class="panel-body">
                                            {{product.name}}<br>(ordered: {{product.quantity}}<br>cost: \${{product.cost * product.quantity}})
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
    
                    <h4>Simple sortable</h4>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="panel panel-success">
                                <div class="panel-heading">
                                    Favorite drinks
                                </div>
                                <div class="panel-body">
                                    <ul class="list-group" dnd-sortable-container [sortableData]="listOne">
                                        <li *ngFor="let item of listOne; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    My prefences:<br/>
                                    <span *ngFor="let item of listOne; let i = index">{{i + 1}}) {{item}}<br/></span>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <h4>Multi list sortable</h4>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="panel panel-warning">
                          <div class="panel-heading">
                            Available boxers
                          </div>
                          <div class="panel-body" dnd-sortable-container [dropZones]="['boxers-zone']" [sortableData]="listBoxers">
                            <ul class="list-group" >
                              <li *ngFor="let item of listBoxers; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item}}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="panel panel-success">
                          <div class="panel-heading">
                            First Team
                          </div>
                          <div class="panel-body" dnd-sortable-container [dropZones]="['boxers-zone']" [sortableData]="listTeamOne">
                            <ul class="list-group" >
                              <li *ngFor="let item of listTeamOne; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item}}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="panel panel-info">
                          <div class="panel-heading">
                            Second Team
                          </div>
                          <div class="panel-body" dnd-sortable-container [dropZones]="['boxers-zone']" [sortableData]="listTeamTwo">
                            <ul class="list-group">
                              <li *ngFor="let item of listTeamTwo; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item}}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
        
                </div>`,
    styles: []
})
export class TestDndComponent {
    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];

    listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];

    listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
    listTeamOne: Array<string> = [];
    listTeamTwo: Array<string> = [];

    constructor() {
        this.availableProducts.push(new Product("Blue Shoes", 3, 35));
        this.availableProducts.push(new Product("Good Jacket", 1, 90));
        this.availableProducts.push(new Product("Red Shirt", 5, 12));
        this.availableProducts.push(new Product("Blue Jeans", 4, 60));
    }

    orderedProduct(orderedProduct: Product) {
        orderedProduct.quantity--;
    }

    addToBasket(newProduct: Product) {
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
    }

    totalCost(): number {
        let cost: number = 0;
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    }
}

class Product {
    constructor(public name: string, public quantity: number, public cost: number) { }
}