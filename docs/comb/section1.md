# Chemical Balance
Most combustion problems will require balancing the chemical equation. The canonical form is

\[
\text{C}_x\text{H}_y + a(\text{O}_2 + 3.76\text{N}_2) \to b\text{CO}_2 + c\text{H}_2\text{O} + d\text{N}_2
\]

To find the coefficients a, b, c, and d, we use conservation of atoms. 

| Atom      | Balance                          |
| ----------- | ------------------------------------ |
| `C`       | x = b  |
| `H`       | y = 2c |
| `O`    | 2a = 2b + c |
| `N`    | 3.76(2)a = d |

$b$ and $c$ are trivial. A becomes $a=x+y/4$, which leads to,

\[
\text{C}_x\text{H}_y + a(\text{O}_2 + 3.76\text{N}_2) \to x\text{CO}_2 + (y/2)\text{H}_2\text{O} + 7.52a\text{N}_2
\]

This form represents "complete combustion".

!!! note "Helpful"
    Note that while the number of atoms is conserved, species is not.

# Equivalence Ratio
The previous equation is also considered stoichiometric, since all the fuel is consumed in the making of the products. Recall that stoichiometric is related to $\phi$ which is the equivalence ratio. Parameter impacts what products we will expect to see.

| $\phi$      | Products                          |
| ----------- | ------------------------------------ |
| 1       | $\text{CO}_2, \text{H}_2\text{O}$ |
| <1       | $+\text{O}_2$ |
| >1    | $+\text{CO},\text{H}_2$ |

Including this term in our chemical balance, we get

\[
\phi\text{C}_x\text{H}_y + a(\text{O}_2 + 3.76\text{N}_2) \to b\text{CO}_2 + c\text{H}_2\text{O} + d\text{CO} + e\text{O}_2 + f\text{H}_2 + 7.52a\text{N}_2
\]

!!! note "Helpful"
    Depending on $\phi$ different coefficients will go to 0

Other useful definitions

- AFR: Air to Fuel ratio 
    - If stoichiometric $AFR=\left(\frac{m_{air}}{m_{fuel}}\right)=\frac{4.76a}{1}\frac{MW_{air}}{MW_{fuel}}$

!!! note "Helpful"
    If not obvious $a(\text{O}_2+3.76\text{N}_2) \to 4.76a\text{MW}_{air}$
    
    Using $MW_{mix}=\sum \chi_i MW_i = a(\text{MW}_{O_2}+3.76\text{MW}_{N_2}) = 4.76a(\frac{1}{4.76}\text{MW}_{O_2}+\frac{3.76}{4.76}\text{MW}_{N_2})=4.76a\text{MW}_{air}$

# $T_{ad}$ Calculation

Recall from Thermo that enthalpy can be defined as the combination of chemical energy and sensible enthalpy
- Chemical energy is the energy required to form the species
- Sensible enthalpy is the amount of energy required to chagne the temperature of the target species
    - It is possible to change enthalpy without changing temperature

\[
(H_T^o)_i = (\Delta H_{f,Tref}^o)_i + (H_{T}^o - H_{Tref}^o)_i = (\Delta H_{f,Tref}^o)_i + \int_{Tref}^{T}\left(C_p^o\right)_i dT
\]

Next you can find the adiabatic temperature for either constant volume or constant pressure.

For contstant presure

\[
    h_{reac}(T_i,P)=h_{prod}(T_{ad},P)
\]

\begin{equation*}
    \begin{split}
        h_{reac}(T_i,P)&=h_{prod}(T_{ad},P)\\
        \sum\chi_i h_i&=\sum \chi_j h_j\\
        \sum\chi_i \left[(\Delta H_{f,Tref}^o)_i + \int_{Tref}^{T_1}\left(C_p^o\right)_i dT\right] &= \sum \chi_j \left[(\Delta H_{f,Tref}^o)_i + \int_{Tref}^{T_{ad}}\left(C_p^o\right)_i dT\right]
    \end{split}
\end{equation*}

Then solve the above for $T_{ad}$. For constant volume

\[
    h_{reac}(T_i,P)=h_{prod}(T_{ad},P) + R(n_{reac}T_i-n_{prod}T_{ad})
\]

And follow the same procedure from before to solve for $T_{ad}$.

| Fuel      | $T_{ad}$ K                          |
| ----------- | ------------------------------------ |
| $\text{CH}_4$       | 2226 K |
| $\text{C}_3\text{H}_8$       | 2267 K |
| $\text{C}_2\text{H}_2$    | 2539 K |
| $\text{CO}$    | 2275 K |
| $\text{H}_2$   | 2390 K |

??? question "Which provides the highest $T_{ad}$, constant volume or constant pressure? Why?"
    Constant volume, because all the heat release is used to raise the temperature. At constant pressure, some of the heat is used to do work by expanding the gas.


# Equilibrium Constant ($K_p$)

The equilibrium constants come out of kinetic theory in the form of collision rates.

For a reaction $\alpha A+\beta B\leftrightarrow \sigma S + \tau T$

-   Forward reaction rate $=k_f\left(P_A\right)^{\alpha}\left(P_B\right)^{\beta}=\dot{\omega}_f$
-   Backward reaction rate $=k_b\left(P_S\right)^{\sigma}\left(P_T\right)^{\tau}=\dot{\omega}_b$
-   At equilibrium $\dot{\omega}_f=\dot{\omega}_b$

We also have

\[
K_p=\frac{k_f}{k_b}=\frac{P_S^\sigma P_T^\tau}{P_A^\alpha P_B^\beta}
\]

and

\[
K_c=\frac{[S]^\sigma[T]^\tau}{[A]^\alpha[B]^\beta}=K_p\frac{1}{(RT)^{\sigma+\tau-\alpha-\beta}}
\]

There is also one more import definition

\[
    K_p=\exp^{\frac{-\Delta G^o_T}{R_u T}}
\]

# Major-minor Model

Typically, to estimate the molar fractions of a global reaction, all of the above will need to be employed. Additionally with a major-minor model, to make the problem more tractable you will compute are in partial equilibrium with the major components.

For example, use as your global reaction and find $T_{ad}$

\[
\phi\text{C}_x\text{H}_y + a(\text{O}_2 + 3.76\text{N}_2) \to b\text{CO}_2 + c\text{CO} + d\text{H}_2\text{O} + e\text{H}_2 + f\text{O}_2 + 7.52a\text{N}_2
\]

Next find the mole fractions associated with your products, $\chi_{H_2O}$, $\chi_{CO_2}$, $\chi_{N_2}$

Then you can estimate the mole fractions with your minor species (e.g.) by using chosing the appropriate balance

-   H~2~O + CO = H~2~ + CO~2~

<div style="display: flex; gap: 10px;">

<figure style="margin: 0; border: 2px solid black; padding: 5px; border-radius: 5px;">
  <img src="..\images\propAir.png" alt="Image title" width="433">
  <figcaption>Major Species</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid black; padding: 5px; border-radius: 5px;">
  <img src="..\images\propAir2.png" alt="Image title" width="350">
  <figcaption>Minor Species</figcaption>
</figure>

</div>



!!! note "Things to consider"

    When going through, for each of these sections you should ask yourself, how does changing pressure effect the result? Temperature? Equivalence ratio? Fuel? Oxidizer? Number of moles? Replace N~2~ with Argon or something else? All these thoughts are worthy quals questions.

# Quals Like Problems
---