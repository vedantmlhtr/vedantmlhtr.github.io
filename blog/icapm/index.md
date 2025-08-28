# Exploring The Intertemporal Capital Asset Pricing Model

Let's first lay down a plain english understanding of the traditional Capital Asset Pricing Model (CAPM). The CAPM, introduced by Jack Treynor, William Sharpe, John Lintner, and Jan Mossin independently in the 1960s, is a model used to determine a theoretically appropriate **required rate of return** of an asset \(A\), given its risk with respect to the market portfolio (which comprises every stock in our space, weighed by its contribution to the total market capitalisation).

\[ E(r_A) = r_f + \beta_{A,M} \cdot E(r_M)\]

Here, \(r_f\) represents the **risk-free rate of return,** typically taken to be the yield from a 10-year government-issued bond, while **beta** is our relative-risk measure of choice, measured as follows:

\[ \beta_{A,M} = \frac{\text{cov}(r_{A}, r_{M})}{\text{var}(r_M)}\]

# Why Did One Beta Stop Being Enough?

Understandably, among other things, Roll's Critique[^1] regarding the impossibility of observing a true market portfolio, which is treated as the centerpiece of the CAPM, concerned economics and finance professionals alike. This made way for various other models of the stock market, one of which was the Intertemporal (I-) CAPM, introduced by Robert Merton in the 1970s.

The ICAPM remains relatively obsolete in classrooms and hedge funds alike. However, I personally feel that it offers a somewhat intuitive underpinning of a stock's expected return, measured against fluctuations in macroeconomic indicators like GDP, consumption, inflation, and industrial productivity.

# The Moving Parts of the ICAPM

**Hedging portfolios** are the most critical component of the ICAPM. While millions of stock price datapoints are produced minute-by-minute, indices tracking the health of the macroeconomy are typically released monthly, if not quarterly.

This necessitates a high-frequency alternative to these measures. This gap is filled by hedging portfolios which, in simple terms, are created by throwing our universe of stock price data into a CSV, merging it with macroeconomic data, and running thousands of simulations attaching different weights to chosen stocks in the hope of finding a vector of weights that results in a portfolio highly correlated with macroeconomic indicators.

Finding a correlation coefficient ~1 is very difficult. However, with some effort, getting close is quite doable.

# Trying My Hand at Finding Hedging Portfolios

I took daily open and close price data for the last 10 years from the NIFTY500 companies (~2.5m datapoints) and ranked stocks on two criteria: their correlation with macroeconomic indicators (GDP, IIP - an index of industrial productivity, and CPI - an index of consumer price inflation) and the lack thereof with each other. Then, avoiding short-selling, I generated portfolios attaching random weights to the top 15 selected stocks, giving us the following results:

|    Macroeconomic Indicator    | Hedging Portfolio Correlation |
|-------------------------------|-------------------------------|
|              GDP              |              0.77             |
|              IIP              |              0.69             |
|              CPI              |              0.61             |

# Applications

This section is a work-in-progress and something I'll keep adding to. For now, I've used the ICAPM as a valuation metric. The principle behind this lies in the fact that returns are inversely proportional to its price. Thus, in theory, a stock having higher realised return than its equilibrium ICAPM return (the difference between the two is the **ICAPM alpha**) implies that our stock is undervalued.

Based on this principle, adding a couple more bells and whistles like rolling betas from the last 12 months and short-selling (to test our core BLSH theory[^2]), I constructed a very simple trading algorithm which can be found on the github repository for this project[^3]. So far, results from back-testing this algorithm have been mixed. It has realised a ~-6% return in the last year...however, it has also produced an 85% total return since 2015, translating to a ~7.1% CAGR as compared to the NIFTY50's ~11.4%, which is a motivating result for further updating the algorithm.

![Latest Trading Algorithm Results](blog/icapm/icapm-trade.png "Latest Trading Algorithm Results")

[^1]: https://en.wikipedia.org/wiki/Roll%27s_critique
[^2]: All rational investment decisions have a buy low sell high hypothesis; ours is based on the equilibrium produced by the ICAPM.
[^3]: https://github.com/vedantmlhtr/icapm