??? example "What is the Zeroth Law"
    Relates thermal equilibrium to the "hotness" of a body. As in, if all bodies have the same temperature, then they are in thermal equilibirum.

??? example "What is the First Law"
    Mass and energy or neither created or destroyed, they are only transformed between each other. Conservation of energy.

??? example "What is the Second Law"
    Determines the impossibility of reversing and natural process. Defines entropy.

??? example "What is the State Postulate"
    The number of independent Thermodynamic properties necessary to define a state.

??? example "What is an isolated, open, and closed system"
    And isolated system is one where energy and mass cannot cross the boundary. Open is where both can freely cross. Closed, energy can only cross.

??? example "What is a control mass? Volume"
    Control mass is one where it is a closed system. Control volume is one where it is a open system.

??? example "What is thermodynamic equilibrium"
    To achieved TD equilibrium, the system must also be in thermal, mechanical, chemical, and electro equilibrium. If of the equilibriums correspond to the uniformity of a state property of the system. Respectively, these are temperature, pressure, chemical potential, and electrical potential.

??? example "What is a Thermodynamic property"
    Attribute of a system that can be quantied. Volume, mass, energy, and pressure are all TD properties. Work and heat transfer are not.

??? example "What is an extensive property"
    Depends on size. Additive

??? example "What is an intensive property"
    Dependent on size. Not additive.

??? example "What is meant by state"
    Condition of the system.

??? example "What is meant by homogenous"
    The substance is of one phase.

??? example "What is a pure substance"
    A substance that has the same chemical structure in all states.

??? example "What is a reversible work mode"
    For $\delta W=Fdx$, F is independent of direction ad rate of change of the process.

??? example "What are independent ways to transfer energy"
    Reversible work modes and heat transfer.

??? example "What are some reversible work modes"
    Fluid compression/expansion, polarization, liquid surface extension.

??? example "What is a simple substance"
    Only one reversible work mode.

??? example "What is a simple compressible substance"
    Only reversible work mode is fluid compression/expansion.

??? example "What is the general definition of equation of state"
    Defines the relationship between thermodynamic properties. ~$p=p(\rho,T)$

??? example "What is needed to specify a substance"
    Need m-1 moles fraction $\chi_i$

??? example "Can you create an intensive from an extensive property"
    Yes. $=>E(m,I_1,I_2)=mg(I_1,I_2)=>\frac{E}{m}=g(I_1,I_2)$

??? example "What are some specific properties"
    General form $\frac{E}{m}$. Also $h=\frac{H}{m}$, $v=\frac{V}{m}$. Additionally you can create a volume specific property $\frac{H}{V}$.

??? example "In the classical thermodynamics context, what is temperature"
    A measure that quantifies the "hotness" of a system. Not an absolute reference, but can agree on relative "hotness".

??? example "What must be true for temperature to be defined"
    Body is in thermal equilibrium.

??? example "What is the PG (Perfect Gas) temperature scale"
    A system filled in a constant volume gas, can show that T is monotonically increasing as a function fo the gas state.

??? example "What is the difference between $\delta$ and d. (As in $\delta w$ vs $du$)"
    The value obtained through $\delta$ is path dependent, where as the $d$ is state dependent and will return the same value no matter the path.

??? example "Describe $dU=\delta Q+\delta W$"
    The change in internal energy (which is a state property) can be equation to the path dependent values of heat transfer and work.

??? example "What is U"
    Internal energy. Extensive property. Sum of the rotational, vibrational, and electric energy.

??? example "Draw a cyclic process and what are it's associated equations"
    === "Equations"
        \begin{equation*}
            \begin{split}
                \oint dU = U_1 - U_1 &= \oint \delta Q + \oint \delta W = Q + W\\
                Q&=-W\\
            \end{split}
        \end{equation*}
    === "Figure"
        <figure markdown="span">
            ![Image title](../python/images/cyclic_process.png){ width="400" }
        </figure>


??? example "What is the first law but for fluid work only"
    $$\delta W=-pdV \xrightarrow{} dU=Q_{12}-pdV$$

??? example "What is heat of reaction"
    $\Delta H_R^o$ the value of the amount of energy per mole either related or produced in a reaction.

??? example "In the context of classical thermo, what is entropy"
    A property of a system which differentiates what is impossible in relation to reversibility. An extensive property.

??? example "What is a conservative force"
    A force whose total expenditure of work is independent of direction. Example is fluid compression. A non-conservative force is friction.

??? example "In a classical equilibirum context, what is temperature"
    \begin{equation*}
        \begin{split}
            \text{Temperature is the value found}&\text{ such that entropy (S) is maximized.}\\
            T&=\frac{1}{\left(\frac{\partial S}{\partial V}\right)_U}
        \end{split}
    \end{equation*}

??? example "What is the thermodynamic definition of pressure"
    $$P=T\left(\frac{\partial S}{\partial V}\right)_U$$

??? example "Within the context of classical thermodynamics, when is temperature and pressure valid"
    TD Equilibrium

??? example "What is the Gibbs Equation"
    \begin{equation*}
        \begin{split}
            dS&=\left(\frac{\partial S}{\partial U}\right)_VdU+\left(\frac{\partial S}{\partial V}\right)_UdV\\
            dS&=\frac{1}{T}dU+\frac{P}{T}dV
        \end{split}
    \end{equation*}

??? example "How can you transfer entropy from a closed system"
    Heat transfer

??? example "How is entropy produced"
    When there is heat transfer across a finite temperature difference.

??? example "When is an isentropic system reversible"
    When it is also adiabatic or there is no heat transfer.

??? example "For a control mass, what is the second law"
    $$dS_{CM}=\frac{\partial Q}{T}+\partial P_s$$

??? example "What is the maximum work attainable from a system"
    When $\delta\mathcal{P}_s=0$

??? example "What is (Carnot) efficiency"
    $$\eta=\frac{W_{out}}{Q_{in}}\text{, }\eta_{rev}=\frac{W_{max}}{Q_1}=1-\frac{T_2}{T_1}$$

??? example "What is the thermodyanimc definition of chemical potential"
    $$\mu=-T\left(\frac{\partial S}{\partial n_i}\right)_{U,V,n_{i\neq j}}$$

??? example "What is the difference between phase and chemical equilibirum"
    Two system is considered in **phase equilibirum** if $\mu_{liq}=\mu_{ice}$. For **chemical equilibirum** if $N_2+O_2\xrightarrow{}2NO$ then $\mu_{N_2}+\mu_{O_2}=2\mu_{NO}$

??? example "What is the relationship of $\mu$ to G,H, and F"
    $$\mu_i=\left(\frac{\partial G}{\partial n_i}\right)_{T,P}=\left(\frac{\partial H}{\partial n_i}\right)_{S,P}=\left(\frac{\partial F}{\partial n_i}\right)_{T,V}$$

??? example "What is the requirement for $dS\geq 0$, $dF\leq 0$, $dG\leq 0$"
    For dS, U and V are const. For F, T and V are const. For G, T and P. For all $\Sigma\mu_i dn_i\leq 0$

??? example "What are the identifies for H, G, and F"
    $H=U+PV$, $G=H-TS$, $F=U-TS$

??? example "van't Hoff Relation"
    $$\left(\frac{\partial G/T}{\partial T}\right)_{P,n_i}=-\frac{H}{T^2}$$

??? example "Relate $C_v$ and $C_p$ to U and H"
    \begin{equation*}
        \begin{split}
            dU&=\left(\frac{\partial U}{\partial T}\right)_V dT+\left(\frac{\partial U}{\partial V}\right)_T dV \\
            dH&=\left(\frac{\partial H}{\partial T}\right)_P dT+\left(\frac{\partial H}{\partial P}\right)_T dP \\
        \end{split}
    \end{equation*}

??? example "Relate $C_v$ and $C_p$ to Q"
    \begin{equation*}
        \begin{split}
            &\text{Starting with }dU=\delta Q-pdV\text{ For $C_v$ meaning constant volume and using }dU=C_vdT\text{, we find}\\
            &C_v=\frac{\partial Q}{dT}\\
            &\text{Similarly for $C_p$ ~ }dH=C_pdT \\
            &C_p=\frac{\partial Q}{dT}\\
        \end{split}
    \end{equation*}

??? example "Forms for isobaric, isothermal, and isentropic compressibility"
    \begin{equation*}
        \begin{split}
            \alpha=\frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_P\\
            \kappa=-\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T\\
            \beta=-\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_S
        \end{split}
    \end{equation*}

??? example "For a perfect gas, $C_p-C_v=R$. What is it for a real gas"
    $$C_p-C_v=T\frac{\alpha^2 V}{\kappa}$$

??? example "For a perfect gas, $C_p/C_v=\gamma$. What is it for a real gas"
    $$\frac{C_p}{C_v}=\frac{\kappa}{\beta}$$

??? example "Entropic state relation"
    \begin{equation*}
        \begin{split}
            dS&=\left(\frac{\partial S}{\partial T}\right)_P dT+\left(\frac{\partial S}{\partial P}\right)_T dP\\
            dS&=C_P dT\frac{dT}{T}-\alpha VdP\\
            dS&=C_V dT\frac{dT}{T}-\frac{\alpha}{\kappa}dP
        \end{split}
    \end{equation*}