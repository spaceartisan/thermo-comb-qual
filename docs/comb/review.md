??? example "What is combustion"
    Self-sustained rapid oxidation generating heat, or both light and heat.

??? example "In combustion what is equilibrium"
    Where the reaction is heading if given enough time

??? example "What is kinetics"
    Considers chemical rates. How fast an reaction occurs tending towards equilibrium

??? example "Equivalence ratio$"
    $$\Phi=\frac{f_{actual}}{f_{stoichiometric}}$$

??? example "What is f with respect to equivalence ratio"
    Fuel to oxidizer ratio

??? example "Stoichiometric vs lean vs rich (equivalence ratio)"
    - Stoichiometric $\Phi=1$
    - Lean $\Phi<1$
    - Rich $\Phi>1$

??? example "General balance of $C_xH_y+aO_2\rightarrow bCO_2+cH_2O$"
    - $a=x+y/4$
    - $b=x$
    - $c=y/2$

??? example "Typical values of nitrogen and oxygen in air"
    - $\chi_{N_2}=0.79$
    - $\chi_{O_2}=0.21$

??? example "What is adiabatic flame temperature"
    Equilibirum temperature that would be achieved if reactancts were converted to equilibirum products without heat addition or loss

??? example "Relationship between sensible enthalpy and enthalpy of formation"
    $$h_i(T)=\underbrace{[h_T-h_{T_{ref}}]_i}_{\text{sensible}}+\underbrace{[\Delta h_{f,T_{ref}}^o]}_{\text{enthalpy of formation}}$$

??? example "Adiabatic flame temperature calculation for constant volume, constant pressure"
    - const P $H_r=H_p$
    - const V $H_r-H_p-R(N_rT_i-N_pT_{ad})=0$

??? example "What is heating value"
    Chemical to thermal energy conversion possible by burning 1 unit of fuel

    - $Hv=\{H_r-H_p\}/m_{fuel}$

??? example "Stoichiometric $T_{ad}$ for $CH_4$, $C_3H_8$, $C_2H_2$, $CO$, $H_2$"
    - $CH_4$: 2226 
    - $C_3H_8$: 2267
    - $C_2H_2$: 2539
    - $CO$: 2275
    - $H_2$: 2390

    Units in Kelvin

??? example "What is the impact of pressure on $T_{ad}$"
    Delays dissociation which increasing the $T_{ad}$

??? example "For typical HC-Air combustion, what are major species? Lean? Rich?"
    === "Major"
        - $H_2O$
        - $CO_2$
        - $N_2$
    === "Rich"
        - All major species
        - $O_2$
    === "Lean"
        - All major species
        - $CO$
        - $H_2$

??? example "What is the major/minor species model"
    - Products of combustion contain more than just ideal products
    - Major species dissociate, producing minor species
    - Amount of CHON atoms are conserved

??? example "HOw do you set up a chemical equilibrium problem"
    Atom conservation, Kp, etc.

??? example "Molecular collision rate"
    $$\zeta=n_A n_B\sigma_{AB}\sqrt{8kT/\pi\mu}$$

??? example "Do all collisions result in a reaction"
    No. Activation energy

??? example "What is the energy barrier of collision"
    Activation energy. Limits on which collisions have sufficent relative kinetic energy to cause a change in internal energy

??? example "Graphically show the relationship between energy and reactions"
    <figure markdown="span">
        ![collRxn](../images/energy_collision.PNG)
    </figure>
    - Inelastic collisions have changes in internal energy which equate to changes in kinetic energy.

??? example "Arrhenius form for the reaction rate"
    $$R=n_A n_B\sigma_{AB}\sqrt{8kT/\pi\mu}e^{-\varepsilon/RT}$$

??? example "Graphical Arrhenius rate law"
    <figure markdown="span">
        ![rateLaw](../images/arr_rate_law.PNG)
    </figure>

??? example "Modified Arrhenius Rate"
    $$k=AT^be^{\frac{E_a}{\bar{R}T}}$$

??? example "Global vs Elementary reaction rates"
    Global reaction rates are the top level overall description. However, most reactions have intermediate mechanisms which leads to the global. This  are the elementary reactions rates (detailed mechanism)

??? example "What is reaction rate of $N+N+O\rightarrow NO+N$"
    $$\frac{d[N]}{dt}=RR(1-2)=-RR=-k[N]^2[O]$$

    $$\frac{d[NO]}{dt}=RR=k[N]^2[O]$$

??? example "Related $k_f$, $k_r$, and $K_c$"
    $$K_c=\frac{k_f}{k_r}$$

??? example "What is order vs molecularity"
    - For termolecular, bimolecular, and unimolecular the molecularity is 3, 2, 1 respectively
    - For order, the value is the sum of the reaction rate exponents

??? example "What is the steric factor"
    - Molecule structure effects on collision efficiency. Accounts for non spherical symmetry
    - $k=k_{coll}\times P_{steric}$

??? example "What is the activated collision complex"
    A temporarily formed molecule formed from an unstable collision complex. Activation energy required to form the complex.

??? example "What is the potential energy surface"
    Math function that gives energy of a molecule as a function of goemetry

??? example "Lindemann Mechanism"
    - $A\overset{k_1}{\rightarrow}products$
    - $A+M\overset{k_e}{\rightarrow}A^*+M$
    - $A^*+M\overset{k_{de}}{\rightarrow}A+M$
    - $A^*\overset{k_{uni}}{\rightarrow}products$

??? example "From Lindemann Mechanism, what is production rate"
    $$\frac{d[prod]}{dt}=k_{uni}[A^*]$$

??? example "Zeldovich mechanism"
    - $N_2+O\leftrightarrow NO+N$
    - $O_2+N\leftrightarrow NO+N$
    - $\tau$ decreases when $T>1700$ K

??? example "Bimolecular reaction time"
    $$\tau_{chem}=\frac{[N]-[N]_o}{d[N]/dt}=\frac{1}{k_{1f}[M]}$$

??? example "Partial Equilibrium Assumption"
    Forward and backward rates are much larger than the net reaction rate. This applies to specific species.

??? example "Steady State Assumption"
    - $d[M]/dt=0$
    - Applies to specific species

??? example "Various forms of net production rate"
    $$\dot{\omega}_M=\frac{d\omega_M}{dt}=\rho\frac{dY_M}{dt}=MW_M\frac{d[M]}{dt}$$

??? example "Types of radical reactions"
    - Chain initiation ($\Delta R$ +2) 
        - Creates radical without radical reactant
    - Chain propagating ($\Delta R$ 0) 
        - Use and produce same number of radicals
    - Chain branching ($\Delta R$ +1) 
        - Net production of radicals
    - Chain terminating ($\Delta R$ -2) 
        - Net destruction of radicals

??? example "What is an explosion"
    Rapidly accelerating fast reaction

??? example "H2-O2 first explosion limit"
    - Net production of radicals too slow
    - $d[H]/dt=k_{wall}[H]$
    - $\frac{d[H]_+/dt}{d[H]_{\_}/dt}\propto P$

??? example "H2-O2 second explosion limit"
    - $HO_2$ removes $H$ acts as a termination path
    - $\frac{d[H]_+/dt}{d[H]_{\_}/dt}\propto P^{-1}$

??? example "H2-O2 third explosion limit"
    - At higher pressures $HO_2$ eventually becomes chain branching
    - $\frac{d[HO_2]_{branch}/dt}{d[HO_2]_{term}/dt}\propto P^{-1}$

??? example "Induction period"
    Characterized by radical build up

??? example "Dry CO explosion mechanism"
    $$CO+\frac{1}{2}O_2\leftrightarrow CO_2$$

??? example "Wet CO explosion mechanism"
    - $CO+OH\rightarrow CO_2+H$
    - $H+O_2\rightarrow OH+O$
    - $O+HC\rightarrow OH$


??? example "What are differences betweens alkanes, alkenes, and alkynes"
    Single, double, and triple CC bonds, respectively.

??? example "Four ways of oxidizing $HC$"
    - $H_2O_2$
    - $HC$
    - Wet $CO$
    - $NO_x$

??? example "Extended Zeldovich Mechanism"
    - $OH+N\leftrightarrow NO+H$
    - Also known as thermal $NO$ mechanism

??? example "Intermediate $N_2O$ mechanism"
    - $N_2+O+M\leftrightarrow N_2O+M$
    - $H+N_2O\leftrightarrow NO+NH$
    - $O+N_2O\leftrightarrow NO+NO$
    - Medium to high activation energy
    - Low temperature, lean, and high pressure conditions

??? example "NNH mechanism"
    - $N_2+H+M\leftrightarrow NNH+M$
    - $NNH+O\leftrightarrow NO+NH$
    - $T>2200$, $\Phi\leq 1$, short $\tau_{res}$
    - $T<1900$, $\Phi=1$

??? example "Fenimore mechanism"
    - $CH+N_2\leftrightarrow HCN+N$

??? example "$NO_2$ mechanism"
    - $NO+HO_2\leftrightarrow NO_2+OH$
    - Oxidizes in atmosphere

??? example "Damkohler number"
    $$Da=\frac{\tau_{flow}}{\tau_{chem}}$$
