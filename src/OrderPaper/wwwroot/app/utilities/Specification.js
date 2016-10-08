"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CompositeSpecification = (function () {
    function CompositeSpecification() {
    }
    CompositeSpecification.prototype.and = function (other) {
        return new AndSpecification(this, other);
    };
    CompositeSpecification.prototype.andNot = function (other) {
        return new AndNotSpecification(this, other);
    };
    CompositeSpecification.prototype.or = function (other) {
        return new OrSpecification(this, other);
    };
    CompositeSpecification.prototype.orNot = function (other) {
        return new OrNotSpecification(this, other);
    };
    CompositeSpecification.prototype.not = function () {
        return new NotSpecification(this);
    };
    return CompositeSpecification;
}());
exports.CompositeSpecification = CompositeSpecification;
var AndSpecification = (function (_super) {
    __extends(AndSpecification, _super);
    function AndSpecification(left, right) {
        _super.call(this);
        this.left = left;
        this.right = right;
    }
    AndSpecification.prototype.isSatisfiedBy = function (candidate) {
        return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
    };
    return AndSpecification;
}(CompositeSpecification));
exports.AndSpecification = AndSpecification;
var AndNotSpecification = (function (_super) {
    __extends(AndNotSpecification, _super);
    function AndNotSpecification() {
        _super.apply(this, arguments);
    }
    AndNotSpecification.prototype.isSatisfiedBy = function (candidate) {
        return _super.prototype.isSatisfiedBy.call(this, candidate) !== true;
    };
    return AndNotSpecification;
}(AndSpecification));
exports.AndNotSpecification = AndNotSpecification;
var OrSpecification = (function (_super) {
    __extends(OrSpecification, _super);
    function OrSpecification(left, right) {
        _super.call(this);
        this.left = left;
        this.right = right;
    }
    OrSpecification.prototype.isSatisfiedBy = function (candidate) {
        return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);
    };
    return OrSpecification;
}(CompositeSpecification));
exports.OrSpecification = OrSpecification;
var OrNotSpecification = (function (_super) {
    __extends(OrNotSpecification, _super);
    function OrNotSpecification() {
        _super.apply(this, arguments);
    }
    OrNotSpecification.prototype.isSatisfiedBy = function (candidate) {
        return _super.prototype.isSatisfiedBy.call(this, candidate) !== true;
    };
    return OrNotSpecification;
}(OrSpecification));
exports.OrNotSpecification = OrNotSpecification;
var NotSpecification = (function (_super) {
    __extends(NotSpecification, _super);
    function NotSpecification(other) {
        _super.call(this);
        this.other = other;
    }
    NotSpecification.prototype.isSatisfiedBy = function (candidate) {
        return !this.other.isSatisfiedBy(candidate);
    };
    return NotSpecification;
}(CompositeSpecification));
exports.NotSpecification = NotSpecification;
var RangeSpecification = (function (_super) {
    __extends(RangeSpecification, _super);
    function RangeSpecification(a, b) {
        _super.call(this);
        this.a = a;
        this.b = b;
    }
    RangeSpecification.prototype.isSatisfiedBy = function (candidate) {
        return candidate >= this.a && candidate <= this.b;
    };
    return RangeSpecification;
}(CompositeSpecification));
exports.RangeSpecification = RangeSpecification;
//# sourceMappingURL=Specification.js.map