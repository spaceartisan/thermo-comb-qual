# Chemical Reactor Models

First define the Damkohler number

\[
    Da=\tau_{flow}/\tau_{chem}
\]

If $Da=\infty$, no mixing. $Da=0$ fast mixing, uniform fluid. The main takeaway here is that when a system has fast mixing time, the reactants and products are mixed quickly. For slow or no mixing, you have fluid packets thats products are solely a results of the chemistry if the reactant existing there at a previous time.

The batch reactors are closed systems that can either be constant volume or pressure. For these reactors $Da<<1$ mean system is homogenous or is mixed before reactions occur.

Recall $\dot{\omega}=\frac{d[M]}{dt}$. We can define a mass flow rate as

\[
\dot{m}_{chem,i}=V\cdot MW_i\cdot\dot{\omega}_i
\]

We also have energy coupling with

\[
    \frac{dT}{dt}=\frac{\frac{m}{V}\frac{dh}{dt}-\sum_i \bar{h}_i(T)\dot{\omega}_i}{\left(\sum_i [M_i]\bar{c}_{P_i}\right)}=\frac{\frac{dh}{dt}+\frac{V}{m}\dot{q}_{chem}'''}{c_{P_{mix}}(\chi_i,T)}
\]

For constant volume, the above becomes

\[
c_{p_{mix}}(\chi_i,T)\frac{dT}{dt}=\frac{\dot{q}}{\rho V}+\frac{V\dot{q}_{chem}'''}{\rho V}
\]

For pressure

\[
c_{v_{mix}}(\chi_i,T)\frac{dT}{dt}=\frac{\dot{q}}{\dot{m}}+\bar{R}T\frac{V}{m}\sum_i\dot{\omega}_i+\frac{V}{m}\dot{q}_{chem}'''
\]

!!! note "Helpful"
    In both equations $\dot{q}$ represents external heat transfer. If this is remove, you can find $T_{ad}$

Now we turn our attention to control volumes. The first one is the plug flow reactor (PFR). Unlike the batch reactors, the $Da=\infty$ meaning the chemical reactions are slow compared to the flow time. This means the possibility of not all the reactants being consumed during a process and their value is a function of the distance down the pipe.

For the PFR the major assumption are

- Steady, 
- negligible KE
- Axial variation in flow properties
- no cross-stream variations
- no axial diffusive transport
- no wall reactions

!!! note "Reynolds Transport Theorem"
    Alot of derivations after this point heavily rely on RTT. It is practical to become familiar with the formula and what is means.

    \[
        \left(\frac{dB}{dt}\right)_{CM}=\frac{d}{dt}\int_{CV}\rho\beta dV+\int_{CS}\rho\beta(\vec{u}_{rel}\cdot\vec{n})dA
    \]

    B is an extensive property and $\beta$ is in the intensive. The equations shows the rate of change inside CV plus the net flux of property leaving/coming into CV.

Through use of RTT, we get the following conservation laws

| Conservation | Equation |
| --- | --- |
| Mass | $\frac{d(\rho u_x A)}{dx}=0$
| Species | $(\rho u_x)\frac{dY_i}{dx}=\dot{\omega}_i MW_i$ |
| Energy | $\rho u_x c_{p_{mix}}\frac{dT}{dx}=\dot{q}_{in}'''-\sum_i h_i\dot{\omega}_i MW_i$ |
| Momentum | $(\rho u_x A)\frac{du_x}{dx}-A\frac{dP}{dx}-\tau_w p$ |

With the PFR you can examine features such as induction time or autoignition.

The well stirred or perfectly stirred reactor, is effectively the open version of the batch reactor. It also has a $Da<<1$, hence the stirred part. Additionally, due to the Da value, being a WSR implies $Y_i=Y_o$. (Otherwise it would'nt be perfectly stirred, teehee)

| Conservation | Equation |
| --- | --- |
| Mass | $\frac{d(\rho V)}{dt}=\dot{m}_{in}-\dot{m}_{out}$
| Species | $\frac{dY_i}{dt}=\frac{\dot{m}_{in}}{\rho V}(Y_{i,in}-Y_i)+\frac{\dot{\omega}_i MW_i}{\rho}$ |
| Energy | $c_{p_{mix}}\frac{dT}{dt}=\frac{\dot{m}_{in}}{\rho V}\sum_i Y_{i,in}(h_{i,in}-h_i)-\frac{\sum_{i=1}^N h_i\dot{\omega}_i MW_i}{\rho}+\frac{\dot{q}_{in}'''}{\rho}-\frac{(dP/dt)}{\rho}$ |

A residence characteristic time can be defined $\tau_{res}=\frac{\rho V}{\dot{m}_{in}}$

![Poopy](images\scurve.png){ style="float: right; width: 400px;" }

In analyzing the relationship between normalized Da and T. We are able to get the "S-Curve". Upon inspect, as the activation energy increases, the later the rapid rise in temperature occurs. Once we get to larger activation energies, an observed bend in the curve emerges. Because of this, multiple solutions emergy for a given Da'. 

- Will jump to different points on curved depending on starting location
- If starting from the right, reach the solution furthest left then drop down to the low temperature
- If starting from the left, reach the solution furthers right then drop up to the high temperature
- Cannot tranverse between the low furthest right point to the furthest left point

From a chemistry stand point, if starting from the right you are already hot and have formed radicals that further towards other reactions releasing heat allowing you to maintain the temperature. Once you hit the left point, you are effectively quench and can no longer sustain the reactions necessary to continue the high/er temperature.

Conversely, starting from the left, your pool of radicals is smaller since you are colder. Therefore you have a slow buildup. Once you reach that critical state where autoignition occurs, you can jump up to the next curve.

# Quals Like Problems
---