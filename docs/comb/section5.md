# Deflagrations and Detonations

Will go into detail alot later. But one difference between the two is whether or not the combustion wave is subsonic (deflagration) or supersonic (detonation). Additionally, deflagrations are expansion ones, although the change in pressure can be small. Detonation waves are compression waves and will see a large jump in pressure across the wave.

| | Deflagration | Detonations |
| --- | --- | --- |
| $M=u_{wave}/a_u$ | $10^{-4}-0.03$ | $5-10$ |
| $p_2/p_1$ | $0.98-1$ | $10-60$ |
| $T_2/T_1$ | $4-15$ | $8-21$ |
| $\rho_2/\rho_1$ | $1/15-1/4$ | $1.4-2.6$ |

Main assumptions

- Steady
- Adiabatic
- No work but flow work
- Ideal gases
- Negligible viscous effects outside wave

Governing equations

| Type | Equation |
| --- | --- |
| Mass | $\rho_2 u_2=\rho_1 u_1=\dot{m}''$ |
| Momentum | $P_1+\rho_1 u_1^2=P_2+\rho_2 u_2^2$ |
| Energy | $h_{1,sens}+\frac{u_1^2}{2}+q=h_{2,sens}+\frac{u_2^2}{2}$ |
| EOS | $P=\rho\frac{\bar{R}}{MW_i}T$,      $h_{i,sens}=\int_{T_{ref}}^T c_{p_i}(T')dT'$ |

Combining mass and momentum, we are able to get the get the **Rayleigh Line**

\[
-\dot{m}^{''2}=-(\rho_1 u_1)^2=-(\rho_2 u_2)^2=\frac{P_2-P_1}{1/\rho_2-1/\rho_1}
\]

??? question "What happens to Rayleigh line if we assume deflagration?"
    From the table, the speed of a deflagration is $<<1$. In the equation $u_1^2$ which effectively drives the left hand side to zero. This leads to

    \[
        P_2-P_1=0 \to \frac{P_2}{P_1}\approx 1
    \]

If we include energy, we get the **Rankine-Hugoniot Relation**

\[
q=\frac{\gamma}{\gamma-1}\left(\frac{P_2}{\rho_2}-\frac{P_1}{\rho_1}\right)-\frac{1}{2}(P_2-P_1)\left(\frac{1}{\rho_1}+\frac{1}{\rho_2}\right)
\]

![Poopy](images\detdef.png){ style="float: right; width: 400px;" }

The red line, or $q$ is the Rankine-Hugoniot relation. If the flow is non-reacting, then this would imply that $q=0$. In this, case this relation would cross $1/\rho_1$, $P_1$.

The green lines represent the Rayleigh line. To find a solution which satisfies both curves, we would need to find the tangent point. These are our **Chapman-Jouguet (CJ) points**. These represent solutions such that the final velocity, or mach as the the compression/expansion waves is $M_2=1$.

There are other regions of note

- Region I: Strong Detonation
- Region II: Weak Detonation
- Region III: Weak Deflagration
- Region IV: Strong Deflagration
- For reacting flows $q\neq0$, B-C which are physically impossible regions

For detonation $M_1>1$, for deflagrations $M_1<1$.

| Region | $M_2$ | Violation |
| --- | --- | --- |
| Strong Detonation | $<1$ | While possible, very transient. Since gas is already $M=1$, the destonation wave would eventually relax to the CJ-U point |
| Weak Detonation | $>1$ | Violates second law |
| Weak Deflagration | $<1$ | No violation |
| Strong Deflagration | $>1$ | Violates second law |

Out of all of these, besides the CJ points the only realistic family of solutions are from Region III, weak deflagration. 

!!! note "Second Law Violation"
    It is impossible to go from subsonic to supersonic in a constant area via heat addition alone. Heat addition always drives toward $M=1$.

# Quals Like Problems
---