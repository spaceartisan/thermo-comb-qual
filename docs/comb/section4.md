# Dimensionless Ratios

Prandtl Number

\[
Pr=\nu/\alpha
\]

Schmidt Number

\[
Sc=\nu/D
\]

Lewis Number

\[
Le=\alpha/D
\]

These ratios relate to diffusivities which are due to gradients

- Mass diffusivity, $D$
    - Gradient in mass of species
- Thermal diffusivity $\alpha=k/\rho c_p$
    - Gradient in temperature
- Tangental momentum diffusivity/kinematic viscosity, $\nu$
    - Gradient in velocity

Why are there so many ratios and dimensionless parameters 🤮

# Other Forces

Anything which induces net flux of molecules can potentially drive diffusions

- Thermally induced mass diffusion (Soret effect)
- Species gradient induced energy diffusion (Dufor effect)
- Body forces

# Conservation Equations

| Property | Equation |
| --- | --- |
| Mass | $0=\frac{D\rho}{Dt}+\rho(\nabla\cdot\vec{v})$  |
| Species | $\dot{\omega}_i MW_i=\rho\frac{DY_i}{Dt}+\nabla\cdot(\rho Y_i\vec{V}_i)$  |
| Momentum | $\rho\frac{D\vec{v}}{Dt}=-\nabla\cdot\bar{\bar{P}}+\rho\sum_i Y_i\vec{f}_i$  |
| Energy | $\rho c_p\frac{DT}{Dt}=\frac{DP}{Dt}+\nabla\cdot(\lambda\nabla T)-\sum_i c_{p_i}\bar{j}_i\cdot\nabla T-\sum_i MW_i\dot{\omega}_i h_i$ |

The usage of DB/dt instead of dB/dt in the above equation represents the usage of the substantial derivative.

\[
\frac{D\rho}{Dt}=\frac{\partial\rho}{\partial t}+\vec{v}\cdot(\nabla\rho)
\]

!!! note "Helpful"
    To find all the source terms, you could look for $\dot{\omega}_i$ which we know relates to our reaction rate equations defined in a previous section.

# Shvab-Zeldovich Formulation

With $Le=1$, assumes

- Steady
- No body forces
- Normal diffusion
- Negligible radiation and viscous dissipation
- One D to describe all mass diffusion

\[
\nabla\cdot(\rho\vec{v}h_{sens}-\rho\alpha\nabla h_{sens})=-\sum_i h_{i,f}^o MW_i\dot{\omega}_i
\]

\[
\nabla\cdot(\rho\vec{v}Y_i-\rho D\nabla Y_i)=MW_i\dot{\omega}_i
\]

With $Le=1$, $\alpha=D$

# Quals Like Problems
---

For every equation above. Describe what each term means. Every. Single. One.