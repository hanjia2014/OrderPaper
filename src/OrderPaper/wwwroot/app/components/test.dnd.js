System.register(['@angular/core', '../directives/dnd/ng2-dnd'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_dnd_1;
    var TestDndComponent, Product;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_dnd_1_1) {
                ng2_dnd_1 = ng2_dnd_1_1;
            }],
        execute: function() {
            TestDndComponent = (function () {
                function TestDndComponent() {
                    this.availableProducts = [];
                    this.shoppingBasket = [];
                    this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
                    this.listBoxers = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
                    this.listTeamOne = [];
                    this.listTeamTwo = [];
                    this.availableProducts.push(new Product("Blue Shoes", 3, 35));
                    this.availableProducts.push(new Product("Good Jacket", 1, 90));
                    this.availableProducts.push(new Product("Red Shirt", 5, 12));
                    this.availableProducts.push(new Product("Blue Jeans", 4, 60));
                }
                TestDndComponent.prototype.orderedProduct = function (orderedProduct) {
                    orderedProduct.quantity--;
                };
                TestDndComponent.prototype.addToBasket = function (newProduct) {
                    for (var indx in this.shoppingBasket) {
                        var product = this.shoppingBasket[indx];
                        if (product.name === newProduct.name) {
                            product.quantity++;
                            return;
                        }
                    }
                    this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
                };
                TestDndComponent.prototype.totalCost = function () {
                    var cost = 0;
                    for (var indx in this.shoppingBasket) {
                        var product = this.shoppingBasket[indx];
                        cost += (product.cost * product.quantity);
                    }
                    return cost;
                };
                TestDndComponent = __decorate([
                    core_1.Component({
                        selector: 'order-paper',
                        providers: [ng2_dnd_1.DND_PROVIDERS],
                        template: "<div class=\"container\">\n                    <div>\n                        <h4>Drag-and-Drop - Shopping basket</h4>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"panel panel-success\">\n                                    <div class=\"panel-heading\">Available products</div>\n                                    <div class=\"panel-body\">\n                                        <div *ngFor=\"let product of availableProducts\" class=\"panel panel-default\"\n                                            dnd-draggable [dragEnabled]=\"product.quantity>0\" [dragData]=\"product\" (onDragSuccess)=\"orderedProduct($event)\" [dropZones]=\"['demo1']\">\n                                            <div class=\"panel-body\">\n                                                <div [hidden]=\"product.quantity===0\">{{product.name}} - ${{product.cost}}<br>(available: {{product.quantity}})</div>\n                                                <div [hidden]=\"product.quantity>0\"><del>{{product.name}}</del><br>(NOT available)</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div dnd-droppable (onDropSuccess)=\"addToBasket($event)\" [dropZones]=\"['demo1']\" class=\"panel panel-info\">\n                                    <div class=\"panel-heading\">Shopping Basket<br>(to pay: ${{totalCost()}})</div>\n                                    <div class=\"panel-body\">\n                                        <div *ngFor=\"let product of shoppingBasket\" class=\"panel panel-default\">\n                                            <div class=\"panel-body\">\n                                            {{product.name}}<br>(ordered: {{product.quantity}}<br>cost: ${{product.cost * product.quantity}})\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n    \n    \n                    <h4>Simple sortable</h4>\n                    <div class=\"row\">\n                        <div class=\"col-sm-3\">\n                            <div class=\"panel panel-success\">\n                                <div class=\"panel-heading\">\n                                    Favorite drinks\n                                </div>\n                                <div class=\"panel-body\">\n                                    <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"listOne\">\n                                        <li *ngFor=\"let item of listOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-body\">\n                                    My prefences:<br/>\n                                    <span *ngFor=\"let item of listOne; let i = index\">{{i + 1}}) {{item}}<br/></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n        \n                    <h4>Multi list sortable</h4>\n                    <div class=\"row\">\n                      <div class=\"col-sm-3\">\n                        <div class=\"panel panel-warning\">\n                          <div class=\"panel-heading\">\n                            Available boxers\n                          </div>\n                          <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listBoxers\">\n                            <ul class=\"list-group\" >\n                              <li *ngFor=\"let item of listBoxers; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"panel panel-success\">\n                          <div class=\"panel-heading\">\n                            First Team\n                          </div>\n                          <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listTeamOne\">\n                            <ul class=\"list-group\" >\n                              <li *ngFor=\"let item of listTeamOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"panel panel-info\">\n                          <div class=\"panel-heading\">\n                            Second Team\n                          </div>\n                          <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listTeamTwo\">\n                            <ul class=\"list-group\">\n                              <li *ngFor=\"let item of listTeamTwo; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n        \n                </div>",
                        styles: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestDndComponent);
                return TestDndComponent;
            }());
            exports_1("TestDndComponent", TestDndComponent);
            Product = (function () {
                function Product(name, quantity, cost) {
                    this.name = name;
                    this.quantity = quantity;
                    this.cost = cost;
                }
                return Product;
            }());
        }
    }
});
//# sourceMappingURL=test.dnd.js.map