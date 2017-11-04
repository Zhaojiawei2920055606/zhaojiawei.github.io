/// <reference path="../../library/jq/jqwidgets-ts/jqwidgets.d.ts" />
/// <reference path="./model/FMShop.ts" />
/// / <reference path="../decalaration/model/FMShop.d.ts" />
// import *as FMShop from './model/FMShop';
// const FMShop = require('./model/FMShop');
// import FMShop = require('./model/FMShop');
function createBulletChart(selector) {
    var width = 500;
    var item = new FMShop.Item();
    // var item: any = {};
    // Initialization options - validated in typescript
    // jqwidgets.BulletChartOptions has generated TS definition
    var options = {
        width: width,
        height: 80,
        barSize: "40%",
        title: "Revenue 2014 YTD",
        description: "(U.S. $ in thousands)",
        ranges: [
            { startValue: 0, endValue: 200, opacity: 0.5 },
            { startValue: 200, endValue: 250, opacity: 0.3 },
            { startValue: 250, endValue: 300, opacity: 0.1 }
        ],
        pointer: { value: 270, label: item.name + "Revenue 2014 YTD", size: 8, color: "Black" },
        target: { value: 260, label: "Revenue 2013 YTD", size: 4, color: "Black" },
        ticks: { position: "both", interval: 50, size: 10 },
        labelsFormat: "c",
        showTooltip: true
    };
    // Creates an instance
    var myBulletChart = jqwidgets.createInstance(selector, 'jqxBulletChart', options);
    // Event binding
    myBulletChart.addEventHandler('change', function () {
        // Do Something
    });
    // Method 'val' - set new value
    myBulletChart.val(150);
}
//# sourceMappingURL=app.js.map