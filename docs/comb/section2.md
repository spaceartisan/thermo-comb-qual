# Arrhenius Law
Back in thermodynamics, we learned to calculate the collision rate of molecules through kinetic theory. The collision rate

\[
\zeta_{AB}=n_An_B\sigma_{AB}\sqrt{\frac{8kT}{\pi m_{AB}*}}
\]

!!! note "Helpful"
    Note the usage of $m_{AB}*$. This is because we are using the relative velocity. Or $\bar{g}$ and not $\bar{c}$

Represents a purely elastic collision. If we assume inelastic, then our expression is

\[
\zeta_{AB}=n_An_B\sigma_{AB}\sqrt{\frac{8kT}{\pi m_{AB}*}}e^{\varepsilon_a/RT}
\]

For the general chemical reaction $A + B \rightarrow C + D$, we can define a rate of change of the moles from species C

\[
\frac{dn_C}{dt}=k_fn_An_B=RR
\]

Where $RR$ means Reaction Rate. Through inspection, we can see

\[
k_f = \sigma_{AB}\sqrt{\frac{8kT}{\pi m_{AB}*}}e^{\varepsilon_a/RT}
\]

This is our forward reaction rate constant. This is compared to the empirical Arrhenius Rate constant

\[
k=AT^be^{\varepsilon_a/RT}
\]

If you plot $1/RT$ vs $\ln k$, the slope would relate to the energy of the collision $\varepsilon$. This is the activation energy.

# Reaction Rates

Most systems we have a global reaction in which we are trying to understand. However, the chemistry is more complicated and there are more detailed elementary reactions that are taking place.

We can classify our elementary reactions by their molecularity. For instance, termolecular collsion order is 3, bimolecular is 2, and unimolecular is 1. We can also talk about their order, which relates to their pressure dependence

\[
\frac{[HD]}{dt}=2k_{exp,t}[H_2]^{0.36}[D_2]^{0.66}[Ar]^{0.98}
\]

In the above, the overall order 2 is, but the order in H~2~ is 0.36.

Also, in our discussion of collision rates. We have an assumption of perfectly spherically. This is not in general true and causes law deviations the more complicated our molecule becomes. We use a fudge factor to account for this called the steric factor ($P_{steric}$)

\[
k=k_{coll}\times P_{steric}
\]

# Lindemann Mechanism

As stated, the global reaction represent the overall resultant, however there are steps within. 

![Poopy](https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\tst.PNG){ style="float: right; width: 350px;" }

| Step      | Formula                          |
| ----------- | ------------------------------------ |
| Global       | $A \to production$ : (k~1~)|
| Excitation       | $A + M \to A^* + M$ : (k~e~) |
| De-Excitation    | $A^* + M \to A + M$ : (k~de~)|
| Unimolecular Production formation    | $A^* \to production$ : (k~uni~)|

The last step can be converted a reaction rate

\[
\frac{d[prod]}{dt}=k_{uni}[A^*]
\]

Which relates the quantity [A^*^] to the productions rate. Where $A^*$ represents an activated complex with a "long" lifetime. If you combine all the steps, you get

\[
\frac{d[A^*]}{dt}=k_e[A][M]-k_{de}[A^*][M]-k_{uni}[A^*]
\]

Since A^*^ is unstable and is much less than the relevant major species, we can make a steady-state assumption. This leads the left hand side to 0. From which, we retrieve

\[
[A^*]_{SS}=\frac{k_e[A][M]}{k_{de}[M]+k_{uni}} \to \frac{d[prod]}{dt}=k_{uni}\frac{k_e[A][M]}{k_{de}[M]+k_{uni}} \to k_1 \frac{k_e[M]}{k_{de}[M]+k_{uni}}
\]

The existance of the [M] concentration implies there will be a pressure dependency.

!!! notes "Helpful"
    When in doubt, assume that M is the most likely molecule. In air, this is $N_2$

Do you understand the difference between Partial Equilibrium and Steady State? $2N \to N_2$ vs $d[N]/dt=0$. We used steady state in the Lindemann Mechanism.

# Timescales

Often when we deal with systems, it is important to understand the time at which certain things take place. Is the reaction slow compared to the others, or is it fast? This can impact other points in the combustion process and feed into, say, NO~x~ production. But how do we get our time t? Uh duh, from our rate equations lol

Starting from the reaction

\[
A+B \to C+D
\]

We have the rate expression, where a changes from $[A_o]$ to some $[A]$. And t goes from 0 to the time it makes $[A]$

\[
\begin{equation*}
    \begin{split}
        \frac{d[A]}{dt}&=-k_{bimol}[A][B]\\
        \int_{[A^o]}^{[A]}\frac{d[A]}{[A]}&=-\int_0^t k_{bimol}[B]dt\\
        \ln\frac{[A]}{[A_o]}&=-k_{bimol}[B]t\\
        [A]&=[A_o]e^{-k_{bimol}[B]t}
    \end{split}
\end{equation*}
\]

From here, if we define a chracteristic time $\tau_{chem}=\frac{1}{k_{bimol}[B]}$, plugging this in to the above equation, we can see that $\frac{[A]}{[A_o]}=\frac{1}{e}$. This assumes $[B]>>[A]$. If this is not true, we can relate to their stoichiometry. In our above reaction, we said that for every mole of $[A]$ destroyed, we also destroy a mole of $[B]$. Therefore we have $[A]-[A_o]=[B]-[B_o]$. Plugging into our rate equation.

\[
\begin{equation*}
    \begin{split}
        \frac{d[A]}{dt}&=-k_{bimol}[A][B]\\
        \int_{[A^o]}^{[A]}\frac{d[A]}{[A]([A]-[A_o]+[B_o])}&=-\int_0^t k_{bimol}dt\\
        \frac{1}{(-[A_o]+[B_o])}\left(\ln\frac{[A]}{[A]-[A_o]+[B_o]}-\ln\frac{[A_o]}{[A_o]-[A_o]+[B_o]}\right)&=-k_{bimol}t\\
        \frac{[A]}{[A_o]}&=\frac{[A]-[A_o]+[B_o]}{[B_o]}e^{-k_{bimol}([B_o]-[A_o])t}\\
        \frac{[A]}{[A_o]}&=\frac{[B]}{[B_o]}e^{-k_{bimol}([B_o]-[A_o])t}
    \end{split}
\end{equation*}
\]

And through inspections, by looking at the exponential, our chemical time is now $\tau_{chem}=\frac{1}{k_{bimol}([B_o]-[A_o])}$.

!!! note "Helpful"
    Note that in the second equation, if we assume $[B_o]>>[A_o]$, we get the first equation we derived. Also, the values are not meant to be exact, but rather represent scalings and order of magnitude.

# Types of Radical Reactions

For reactions to occur, there needs to be something that promotes the process. This is accomplished by radicals. Unlike other stable molecules, radicals have an unpaired electron which means that are readily able to react. Usually the most popular radicals are O,H,OH. If you were to crown one king of all radicals, it would probably be H.

| Type | Formula | $\Delta$R | $\Delta$H |
| --- | --- | --- | --- |
| Chain initiation | $O_2+M \leftrightarrow O+O+M$ | +2 | $>0$ |
| Chain propagating | $N_2+O \leftrightarrow N+NO$ | 0 | $\geq0$ |
| Chain branching | $H+O_2 \leftrightarrow OH+O$ | +1 | $>0$ |
| Chain terminating | $O+O+M \leftrightarrow O_2+M$ | -2 | $<0$ |

# Explosion Limits

What is the minimum set of reactions needed to explain this phenomenom? To have an explosion, production of radicals need to exceed their destruction. 

![Poopy](https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\h2o2.png){ style="float: right; width: 400px;" }

- For the first limit, the radical production $[H]$ is competing with its termination with the wall

\[
\frac{[H]_+/dt}{[H]_-/dt}=\frac{2k_3[H][O_2]}{k_{wall}[H]}\propto [O_2] \propto P
\]

- For the second limit, the radical production $[H]$ is competing iwth its termination by $[H][O_2]$

\[
\frac{[H]_+/dt}{[H]_-/dt}=\frac{2k_3[H][O_2]}{k_{6}[H][O_2][M]}\propto \frac{1}{[M]} \propto \frac{1}{P}
\]

- For the third limit, the radical production of $[HO_2]$ can lead to more Hs and Os, or $[HO_2]$ is terminated by the wall.

\[
\frac{[HO_2]_{branch}/dt}{[HO_2]_{term}/dt}=\frac{k_{13}[HO_2][H_2]}{k_{wt}[HO_2][M]}\propto \frac{1}{[M]} \propto P
\]

The explosion limit can be related to autoignition.

!!! note "Helpful"
    Understand the competition between radical branching and termination

# CO and H/C Mechanisms

Dry vs Wet CO Mechanism. Prescence of H containing species significantly increases CO oxidation rate. What are the ways we can get from $CO$ to $CO_2$...

- $CO + OH \to CO_2 + H$
- $H + O_2 \to OH + O$
- $O + HC \to OH....$

![Poopy](https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\hc.png)
/// caption
Recall propane is heavier than methane
///

??? question "Why does coal burn?"
    Wood or is baked (not burnt) into charcoal. This is done with low oxygen to minimize oxidizer in the cooking process. What is left is the presence of significant amounts of carbon.

    - $C+O_2 \to CO_2$ : Our pathway to $CO2$

    **Interesting thought** - Graphite is pure carbon and sublimates. This means it goes directly from a solid to a gas.

# NOx Mechanisms

NOx is bad m'kay. 

- Thermal NO Mechanism - High Temperature, lean environment, long residence times
    - $N_2+O,N+O_2\to NO$
- Intermediate N2O Mechanism - Lower Temperature, lean fuel, high pressure
    - $N_2+O+M\to N_2O+M$
- NNH Mechanism - High Temperature, stoichiometric and rich, low residence times
    - $N_2+H+M\to NNH+M$
- Prompt Mechanism - NO produced via C species. Various intermediates lead to NO (CHx radicals plus N leads to HCN)
    - $N_2+CH\to HCN+N$
- NO2 Mechanism - NO -> NO2 -> More NO

# Quals Like Problems
---