import { resolve } from 'url';

const alpha = require('alphavantage')({ key: 'QX3FPRR3I44GXQ9R' });

class Stock {

    constructor () {
    }

    intraday(stockID) {
        alpha.data.intraday(stockID).then(function(data) {
        
        });
    }

    

    daily(stockID) {
        alpha.data.daily(stockID).then(data => {
            return data;
        });
    }
}

const stock = new Stock();
export default stock;
