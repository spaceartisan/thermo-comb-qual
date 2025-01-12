# Chemical Reactor Models

First define the Damkohler number

\[
    Da=\tau_{flow}/\tau_{chem}
\]

If $Da=\infty$, no mixing. $Da=0$ fast mixing, uniform fluid. The main takeaway here is that when a system has fast chemical time, all the reactants are consumed and turned into products before they can leave a system. Where as for as fast mixing, it is possible for fluid packet to exit a system before all the reactants are consumed.

The batch reactors are closed systems that can either be constant volume or pressure. For these reactors $Da>>1$ mean reactions happen fast compared to mixing.

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

Now we turn our attention to control volumes. The first one is the plug flow reactor. Unlike the batch reactors, the $Da<<1$ meaning the chemical reactions are slow compared to the flow time. This means the possibility of not all the reactants being consumed during a process and their value is a function of the distance down the pipe.