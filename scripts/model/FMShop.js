var FMShop;
(function (FMShop) {
    var Item = /** @class */ (function () {
        function Item() {
            this._name = "test!";
        }
        Object.defineProperty(Item.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        return Item;
    }());
    FMShop.Item = Item;
})(FMShop || (FMShop = {}));
// export = FMShop; 
//# sourceMappingURL=FMShop.js.map