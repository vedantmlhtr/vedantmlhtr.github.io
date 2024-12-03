# Towards a Richer and More Accessible Understanding of Inequality

The discourse around economic inequality is currently faced by two major problems.

The Gini coefficient[^1] currently has a near-monopoly over inequality measurement in economic research. \(G(x)\) is calculated as the normalised mean of piecewise absolute differences in incomes in an income distribution \(x = (x_{1}\hdots x_{n})\). It is a great measure of the statistical dispersion of income in an economy. However, it doesn't declare or consider the implicit value judgements or social welfare considerations made in its calculation. This is a critical flaw – after all, inequality and social welfare are intricately linked by our personal value judgements. This makes an "ethical" notion of inequality aversion essential, as our measurement of inequality inherently involves value judgements about fairness, the priorities of society, and the trade-off between equity and efficiency.

The Atkinson Index[^2] is a normative measure of inequality, where a parameter \(\epsilon \geq 0\), known as the "level of inequality aversion" is used to weigh incomes. For an inreasing-order income distribution \(x = (x_{1}\hdots x_{n})\), \(A(x)\) is calculated as \(1 - \frac{x_{e}}}{\mu(x)}\), where \(x_{e}\) is the equivalent equally distributed income and \(\mu(x)\) is the arithmetic mean of incomes in the distribution. It represents the share of total income that must be sacrificed to instate perfect equality without dropping overall welfare. Thus, it is a strong candidate to solve our first problem. However, the Atkinson Index somewhat exacerbates the second problem facing the discourse around inequality – esotericism.

Though, arguably, the Gini coefficient is visualisable as a ratio of the area between the line of perfect equality and an economy's Lorenz curve (the perceived inequality) and the total area under the line of perfect equality, i.e. \(\frac{A}{A+B}\), it remains difficult for the layman to interpret. The same goes for the Atkinson Index, which requires a fair bit of statistical and mathematical know-how. This complexity has the unfortunate implication of keeping the means of understanding inequality away from those most adversely affected by it.

To encourage a solution to these problems, me and Ishan Dubey wrote a paper deriving a simplified measure of inequality, the Subramaniam Index, \(\sigma_{A}(x)\), from the Atkinson Index. \(\sigma_{A}(x)\) condenses inequality measurement to what we believe to be the most intuitive way to understand inequality; it represents the share of cake that the poorer person gets in a two-person cake-sharing problem, while having the inequality aversion of the Atkinson Index baked into it.

# Mathematical and Computing Limitations

To access a more detailed mathematical exposition leading us to the Subramaniam Index, please [mail me](mailto:malhotra.vedant@gmail.com) for the paper. The equation that we solve to derive \(\sigma_{A}(x)\) is:

\[ \sigma_{A}(x)^{1-\epsilon} + (1 - \sigma_{A}(x))^{1-\epsilon} = 2^{\epsilon}\cdot \left(1 - \tilde{A}(x)\cdot (1 - 2^{\frac{-\epsilon}{1-\epsilon}})\right) \]

Alas, it doesn't have a closed-form solution. So, we attempt to simplify a problem by adding a little bit more complication to it and apply root-solving methods on real-world data to derive this index for different countries across time.

Additionally, due to the structure of this equation, we cannot account for values of \(\epsilon > 1\). This limits our ability to calculate the index for higher levels of inequality aversion. However, since it can be calculated for \(\epsilon = 1 - \delta\) for a tiny \(\delta\), it serves as a great complement for the Gini coefficient, which is postulated to be most similar to the Atkinson Index when \(\epsilon = 1\).

Obviously, \(\sigma_{A}(x)\) cannot and should not be treated as a one-size-fits-all measure of inequality. In fact, we believe it shouldn't be used alone at all, since it abstracts away from the income distribution and delivers simplification at the cost of statistical granularity. A researcher must be provided with a platter of tools to understand inequality through her personal value judgements, and hence, the Subramaniam Index must be treated as a complement to the Gini and Atkinson measures.

# Our Approach to Data

In our paper, we extrapolate a very sophisticated approach developed by Peter Ellis [^3] to calculate our desired inequality measures using the LM-WPID longitudinal dataset, which contains mean incomes by deciles for 158 countries between 1986-2010. We iteratively pick a log-normal distribution that fits our binned means best, generate 10,000 individual level data points and calculate the binned means from the generated distribution. Then, we consider the binned means as a sample of 10 incomes to calculate our indices. Again, please [mail me](mailto:malhotra.vedant@gmail.com) for access to our code.

# Data Analysis: Shortfalls of the Gini Coefficient

Firstly, we observe a seemingly large difference in the means of the Gini coefficient and the Atkinson Index for a relatively high level of inequality aversion, say \(\epsilon = 2\). Then, we run paired ttests across different income groups[^4] to confirm our hypothesis and check for a relationship between the perceived difference between \(G(x)\) and \(A(x)\) and the income group a country belongs to. Here are the results:

| **Income Classification**  | **Income Group**              | **Average Difference**  | **P Value**        |
|----------------------------|-------------------------------|-------------------------|--------------------|
| World Poverty Line         | GDP < 456.25                  | -0.03642                | 0.0047174660       |
| Low Income                 | 456.25 <= GDP <= 733.86       | -0.02724                | 0.0020704470       |
| Lower Middle Income        | 733.86 < GDP <= 2893.79       | -0.02723                | 0.0000000038       |
| Upper Middle Income        | 2893.79 < GDP <= 8976.19      | -0.06479                | 0.0000000000       |
| High Income                | GDP > 8976.19                 | -0.03655                | 0.0000000000       |

This suggests two things. Firstly, the observed difference between \(G(x)\) and \(A(x)\) is statistically significant at all conventional levels of confidence, for all income groups. Secondly, the statistical significance of this difference increases as we move up the income groups. This suggests that the Gini coefficient, a widely popular tool used to compare inequality across countries, tends to be more lenient with richer countries when we consider a high level of inequality aversion than it does with poor countries, shifting the narrative around inequality in the favour of countries that, ironically, also benefit from inter-country inequality.

# Data Analysis: Demonstration of the Subramaniam Index

To demonstrate the intuitive use of \(\sigma_{A}(x)\) as an inequality measure and check its sanity w.r.t \(A(x)\) for a given \(\epsilon\), we visualised the historical trends of inequality observed in India. Here, I attach the trend we highlighted taking \(\epsilon = 0.5\). Since our exploration here is limited to India, we urge the reader(s) to explore these trends for other countries and/or regions using our method.

![Visualisations of the Subramniam Index]()

[^1]: Gini, C. (1936). *"On the Measure of Concentration with Special Reference to Income and Statistics,"* Colorado College Publication, General Series No. 208, pp. 73–79.
[^2]: Atkinson, A.B. (1970) *"On the measurement of inequality."* Journal of Economic Theory, 2 (3), pp. 244–263.
[^3]: Ellis, P. *“Estimating Gini coefficient when we only have mean income by decile.”* Free Range Statistics, 2017.
[^4]: We used the 2005 world poverty line and adjusted the current World Bank income groups for inflation, since our data is in 2005 PPP terms.
