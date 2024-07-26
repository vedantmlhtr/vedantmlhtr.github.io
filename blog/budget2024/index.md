# Benchmarks and Takeaways from the Union Budget 2024

Narendra Modi, in a recent public address, [forgot about the existence of the caste system](https://www.ndtv.com/india-news/four-biggest-castes-for-me-are-poor-youth-women-farmers-pm-narendra-modi-4621178), stating that the four castes in India are women, the poor, farmers, and the youth. The Union Budget 2024 [speech](https://www.indiabudget.gov.in/doc/budget_speech.pdf) begins by perplexingly doubling down on this slip-up and continues to perplex with the introduction of a new tax regime for investments. I am writing this blog to try and analyse this regime in a systematic manner and hopefully clear it up to some extent.

# Changes in Capital Gains Tax

The holding period for financial securities to be considered as long-term is now 12 months for commonly held listed securities [^1] and 24 months for commonly held unlisted securities [^2]. Short-term Capital Gains Tax (SCGT) and Long-term Capital Gains Tax (LCGT) on listed securities have seen straightforward increases from 15% and 10% to 20% and 12.5% respectively. This gives us a simple mathematical problem to solve, as each investor gets a smaller share of her pie. To maintain the same returns you had under the old regime, you need:

1. Your securities to grow by an additional **6.25%** for a holding period &lt; 12 months.
2. Your securities to grow by an additional **2.86%** for a holding period &gt; 12 months.

However, the change in LCGT for unlisted securities poses a more interesting question---there are winners and losers under the new tax regime; who wins? The tax rate has been reduced from 20% to 12.5%, however, the indexation benefit [^3] has been removed as well. This has been presented as a [simplification exercise](https://economictimes.indiatimes.com/industry/services/property-/-cstruction/revenue-secretary-explains-how-removal-of-indexation-will-only-benefit-most-property-sellers-not-hurt-them/articleshow/112006386.cms?from=mdr) by the government, and it gives us a more compelling mathematical problem.

```
(selling price - indexed cost price)*.2 ≤ (selling price - cost price)*.125
selling price/cost price ≥ (inflation index - .625)/.375
```

Let us take into account the Cost Inflation Indices (CII) of the years 2001-2024 and [calculate](https://docs.google.com/spreadsheets/d/1yMoLsJ9OnJRDqeHne3htWJdx9q1oz3LS-aGvm76hX-g/edit?usp=sharing) the annual growth rate your security must have grown at for you to be a winner under the new tax regime:

| Year of Purchase | Target CAGR  |
| ---------------- | ------------ |
| 2001             | 9.470279382% |
| 2002             | 9.625832396% |
| 2003             | 9.866609732% |
| 2004             | 10.13910072% |
| 2005             | 10.44792461% |
| 2006             | 10.73477262% |
| 2007             | 10.93559014% |
| 2008             | 11.11423934% |
| 2009             | 11.13690183% |
| 2010             | 10.66097267% |
| 2011             | 10.3414434%  |
| 2012             | 10.10143376% |
| 2013             | 9.571933956% |
| 2014             | 8.996790357% |
| 2015             | 8.845577206% |
| 2016             | 9.050773267% |
| 2017             | 9.538125662% |
| 2018             | 10.19488222% |
| 2019             | 10.97042233% |
| 2020             | 11.56616147% |
| 2021             | 11.52051326% |
| 2022             | 12.15188953% |

From these results, we can draw two conclusions:

1. The average target CAGR in the above table is 10.23001335%. Most ambitious estimates put average property growth rates in areas of India under 9%, while [housing price growth rates](https://ceda.ashoka.edu.in/ecometer/) in India's metros have averaged at around 3% over the last 10 years. It is highly unlikely that our [revenue secretary's claim](https://economictimes.indiatimes.com/industry/services/property-/-cstruction/revenue-secretary-explains-how-removal-of-indexation-will-only-benefit-most-property-sellers-not-hurt-them/articleshow/112006386.cms?from=mdr) that most people will not be affected negatively by the removal of indexation is true.
2. The Indian government's commitment to maintaining stable inflation rates around the 4% mark means that, to ensure that you win under this new regime, you must **set a standard of at least a 10% CAGR for your real estate and private equity investments.**

# A Note on Gold

Budget 2024 has reduced gold duties from 10% to 6%. It has also introduced the aforementioned new tax regime for listed and unlisted gold securities. As I write this, we are witnessing an [interesting phenomenon](https://www.indiatoday.in/business/budget/story/gold-demand-surges-after-customs-duty-cut-is-it-a-good-investment-budget-2024-customs-duty-cut-2571564-2024-07-25) and blasphemy to my discipline as the demand for gold is rising while its price is declining. 

# What I Will Do To Meet These Benchmarks

Let's be real. I am 20 years old. You aren't going to take my advice on how to adjust your investment behaviour and there is no rationable reason that you should. I only have \~2 years of hands-on experience in the stock market and my limited knowledge of the real estate market is all second-hand. However, I thought it might be useful to talk about how I will try and meet these benchmarks while investing in 2024-25.

1. Listed securities: To me, this Budget acts as a further motivator to maintain my exclusively long-term holding strategy. Achieving an extra 2.86% of growth on your corpus annually shouldn't be difficult. I will likely dig into **more small and mid cap companies.** You can't go wrong focusing on **macro-favourable stocks with lots of tailwinds,** such as stocks in the EV and semi-conductor sectors and their auxiliary industries.
2. Unlisted securities: I shall keep away from private equity in this section [^4]. As for real estate, I believe there is still plenty of untapped potential for real estate growth in **satellite cities** to India's metros. The four satellites closest to Delhi, Mumbai, Kolkata, and Chennai---Gurugram, Thane, Salt Lake City, and Coimbatore---have had [higher housing price growth](https://docs.google.com/spreadsheets/d/1yMoLsJ9OnJRDqeHne3htWJdx9q1oz3LS-aGvm76hX-g/edit?usp=sharing) than the metros in recent years [^5]. However, the ticket prices for real estate investment in these cities remains high, in which case, it may be a good idea to turn one's attention to [these cities](http://tcpo.gov.in/urban-infrastructure-development-scheme-satellite-towns-around-7-megacities%E2%80%93-scheme-guidelines) instead.
3. Gold: The increasing pressure for a higher growth rate (especially for physical gold) makes it difficult for gold to fulfil its fabled inflation-beating property. As opposed to physical gold or gold ETFs, **I would invest in [SGBs](https://www.rbi.org.in/commonperson/english/scripts/FAQs.aspx?Id=1658)** if one has the patience to wait 8 years for their non-taxable lump sum to mature.

[^1]: Stocks, mutual funds, bonds, REITs, gold ETFs.
[^2]: Real estate, unlisted stocks (private equity), physical gold.
[^3]: Indexation positively adjusts a security's purchase price for the effect of inflation, leading to lesser capital gains and payable tax.
[^4]: There is a severe lack of reliable data on the growth of private equity portfolios in India.
[^5]: Coimbatore is not a satellite city of Chennai. It is the closest city with available housing price data.
