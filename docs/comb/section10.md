# Characteristics of Turbulent

Irregular, chaotic. Within the structure there are random and non-random structures. With turbulence there are vortices that move across the fluid. Normally, in laminar fluids, mixing is a function of molecular diffusion. With turbulent flows you get the effect of stirring.

The existance of eddies means we need to consider how they affect our flames. We can divide into both Large eddies and Small eddies (stirring vs mixing). With the small eddies, there effect is more local such that we can consider slow mixing or $Da>>1$. Conversely, large eddies moving a larger quantities of substances is able to mix more effectively suchs that $Da<<1$. For the large eddies case, we can see this would approach that of a PSR.

- Distributed Reaction Regime $Da<<1$
- Reaction Sheet Regime $Da>>1$

<figure markdown="span" style="margin: 0 auto; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\borg.png)
</figure>

Due to the influence of turbulence on our flames, we need to estimate the Turbulent Flame Speed. Since the motion is chaotic, we will focus on the average propagation speed $S_T$

\[
\dot{m}=\rho_u S_L A\to \dot{m}=\rho_u S_T \bar{A}
\]

Consider the time average value of the area $\bar{A}$. 

!!! note "Helpful"
    $\bar{A}<A$ which leads to $S_T>S_L$

\[
\frac{S_T}{S_L}=\frac{A_{flamelet}}{\bar{A}}\approx 1+\frac{u_{rms}^{'}}{S_L}=f(Re)
\]

# Quals Like Problems
---