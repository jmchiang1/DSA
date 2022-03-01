// Best Time to Buy and Sell Stock (EASY)

//Prompt: Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    
    let buy = prices[0];    //buy stock on the first day
    prices[0] = 0;          //price on first day = 0. Used to track profit
    let profit = 0;         
    
    for (let i = 1; i < prices.length; i++){              //loop through prices starting on 2nd day
        if (buy > prices[i]){                             //if buy price is more than current price...
            buy = prices[i];                              //move buy pointer current price, dont buy anything yet
            prices[i] = 0;                                //reset the profit to 0 since you didnt sell anything
        } else {                                          //if buy price is lower than current price...
            profit = Math.max(prices[i] - buy, profit)    //profit = bigger number between current profit and existing profit
                                                          //then retun the max value of current price - buy price
        }
    }
    return profit
};

/*

Day:   1  2  3  4  5  6  7

Price: 1  8  9  8  1  6  5

Buy on day 1, sell on day 2
Buy on day 5, sell on day 6
Total profit = (8-1) + (6+1)


https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

*/