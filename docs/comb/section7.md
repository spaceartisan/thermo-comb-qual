# Laminar Flamespeed

Laminar flamespeed cause from the deflagration weak solutions. If we are sitting on a wave, such that our reference is tationary to everything else; we would see unburned products coming towards us at one velocity, and burned products leaving at some other velocity.

- Laminar burning flux: $\dot{m}^{''}=\rho_1 S_u^o=\rho_2 S_b^o$

<figure markdown="span" style="margin: 0 auto; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  ![Poopy](https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\lamFStr.png){ width=400 } 
</figure>


The equation set is the same as before from the Rayleight-Hugoniot. But now add diffusion effects

Species

\[
\dot{m}^{''}\frac{dY_i}{dx}=-\frac{dj_{i,x}}{dx}+MW_i\dot{\omega}_i
\]

Energy

\[
\dot{m}^{''}c_p\frac{dT}{dx}=\frac{d}{dx}\left(\lambda\frac{dT}{dx}\right)-\sum_i c_{p,j}j_{i,x}\frac{dT}{dx}-\sum_i h_iMW_i\dot{\omega}_i
\]

Using Shvab-Zeldovich forms we use (Recall Le=1 for SZ)

\[
 \frac{d}{dx}\left[\dot{m}^{''}\eta-\rho D\frac{d\eta}{dx}\right]=RR(\eta)   
\]

4 Boundary conditions
- $\eta(x=-\infty)=\eta_{unburned}$, $\eta(x=+\infty)=\eta_{burned}$
- $\left(\frac{d\eta}{dx}\right)_{\pm}=0$


<figure markdown="span" style="float: right; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  ![Poopy](https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\fzone.png){ style="float: right; width: 400px;" }
</figure>

Flame Zones, divide the solution into two distinct regions
- If $T<T_i$, $RR=0$
- If $T>T_i$, $RR\propto e^{-E_a/RT}$

Preheat Zone - 

\[
\left(\lambda\frac{dT}{dx}\right)_i=\rho_1 S_L^o\bar{c}_p(T_i-T_1)
\]

Reaction Zone - Diffusive flux >> Convective flux

\[
\left(\lambda\frac{dT}{dx}\right)_i=\sqrt{\left(2\Delta h_{R,T_ref}\int_{T_i}^{T_2}\lambda RRdT\right)}
\]

\[
S_L^o=\sqrt{\frac{2}{\rho_1 Y_{f,1}}\bar{\alpha}\overline{RR}}
\]

<figure markdown="span" style="margin: 0 auto; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  ![Poopy](https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\ezgif.com-crop.gif)
</figure>


# Flame Thickness and Flame Speed

Thickness $\delta$ is the preheat and reaction zones

- $\delta_f=\delta_{ph}+\delta_R$

\[
\rho_1 S_L^o\bar{c}_p(T_i-T_1)=\lambda\frac{T_2-T_i}{\delta_f} \to \delta_f=\frac{\lambda}{\rho_1\bar{c}_p}\frac{1}{S_L^o}=\frac{\alpha}{S_L^o}
\]

# Scaling Models

Reaction Rate

\[
RR\propto A(fuel,ox)\rho^n e^{-E_a/RT_2}
\]

Diffusivity

- $\bar{\alpha}=\lambda/\rho_1 c_p$
- $a\propto \frac{T_1\bar{T}^m}{P\bar{c}_p}\frac{1}{MW^m}$
- $\lambda\propto (T/MW)^m$
- $\rho_1\propto \frac{P}{T_1}MW_1$
- $c_p=\bar{c}_p/MW$

Pressure Dependence

\[
S_L^o\propto P^{\frac{n-2}{n}}
\]

Initial Temperature Dependence

\[
S_L^o\propto T_1\bar{T}^{m/2}T_2^{-n/2}e^{-E_a/2RT_2}
\]

Molecular weight and $c_p$ dependence

\[
S_L^o\propto\sqrt{\frac{1}{\bar{c}_p MW^m}}
\]

!!! note "Helpful"
    Recall, smaller $c_p$ means easier to heat up

Equivalence Ratio

- Flamespeed peak matches $\Phi$ temperature peak 

Effect of Diluents

- ~Molecular weight and ~$c_p$

Flame Thickness scaling

- Pressure $\delta_f\propto P^{-n/2}$
- T~2~ $\delta_f\propto T_2^{m/2}e^{\frac{-E_a/R}{2T_2}}
- $c_p$, $MW$ $\delta_f\propto\sqrt{1/(\bar{c}_p MW^m)}$
- $\phi$ $\delta_f$ minimum roughly at $\phi$ where $S_L$ maximum

??? question "Can you use any flow reactor to approximate flamespeed?"
    No. Batch reactors neglect diffusion.

# H~2~ Flame Structure

<div style="display: flex; gap: 10px;">

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\h2_1.png" alt="Image title" width="433">
  <figcaption>Major Species</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\h2_2.png" alt="Image title" width="413">
  <figcaption>Radical Species</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\h2_3.png" alt="Image title" width="433">
  <figcaption>Heat Release</figcaption>
</figure>

</div>

??? question "Why is there a bump in $O_2$ mole fraction?"
    $H_2$ diffuses fast proportionally increasing $O_2$

# CH~4~ Flame Structure

<div style="display: flex; gap: 10px;">

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\ch4_1.png" alt="Image title" width="305">
  <figcaption>Major Species</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\ch4_2.png" alt="Image title" width="300">
  <figcaption>Radical Species</figcaption>
</figure>

</div>

# Flame Stretch

Deviations from previous assumptions from ideal premixed to non-ideal premixed flames
- Non-adiabatic
- 3-dimensional
- Non-uniform and/or unsteady flow

Stretch causes a misalignment between convective and diffusive fluxes near the flame

<div style="display: flex; gap: 10px;">

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\negstr.png" alt="Image title" width="230">
  <figcaption>Negative Stretch</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\posstr.png" alt="Image title" width="300">
  <figcaption>Positive Stretch</figcaption>
</figure>

</div>

- Thermal Diffusion ($\lambda$) "focuses" into reactants, enhances $S_L$
- Mass Diffusion of reactants away from centerline, can reduce reactants, reaction rate and thus $S_L$
- Differetnail diffusion can lead to less stoichiometric mixture, greater diffusional loss of deficient reactant, reduces $S_L$

If $Le=1$ there is negligible stretch effects.

| Sign | Effect |
| --- | --- |
| Positive | $Le>1$ $S_L\uparrow$, $Le<1$ $S_L\downarrow$ |
| Negative | $Le>1$ $S_L\downarrow$, $Le<1$ $S_L\uparrow$ |

# Bunsen Tips

<div style="display: flex; gap: 10px;">

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\buncj4.png" alt="Image title" width="294">
  <figcaption>Methane is lighter than air. Rich flames will enhance the tip.</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\bunc3h8.png" alt="Image title" width="280">
  <figcaption>Propane is heavier than air. Lean flames will enhance the tip.</figcaption>
</figure>

</div>

# Flame Speed Corrections

Small perturbation leads to

\[
S_L=S_L^o-l\kappa=S_L^o-Ma\delta_f\kappa \to \frac{S_L^o}{S_L}=1+MaKa
\]

# Flame Speed Measurements

- Bunsen-type
    - Color schlieren
    - Particle tracks
    - Chemiluminescence
- Spherical Bomb
    - Watch flame propagate
- Flat flame burner
- Stagnation flames

# Stability

Quenching distance - The minimum distance such that heat loss to walls drives the flame speed down to zero.

\begin{equation*}
    \begin{split}
        \dot{Q}_{cond}&=\dot{Q}_{chem}\\
        \to& dq=2\sqrt{2}\frac{\alpha}{S_L^o}=2\sqrt{2}\delta_f\\
    \end{split}
\end{equation*}

# Flammability Limits

Flame propagates only within a range of $\phi$

<div style="display: flex; gap: 10px;">

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\flimit.png" alt="Image title" width="294">
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\flimit2.png" alt="Image title" width="280">
</figure>

</div>


# Stability of Flame to Perturbations

<div style="display: flex; gap: 10px;">

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\thermalp.png" alt="Image title" width="294">
  <figcaption>Thermal conduction always flattens flame, perturbations decay</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\reactdp.png" alt="Image title" width="329">
  <figcaption>Deficient reactant will diffuse and grow perturbations.</figcaption>
</figure>

</div>

If $Le<1$, reactant diffusion outweighs thermal diffusion, causing perturbations to grow.

??? question "What conditions are flames unstable to perturbation?"
    - light fuels + lean mixture
    - heavy fuels + rich mixture

# Flame Stabilization

Where does a flame anchor? Requires $u_e=S_L$ at some point. Otherwise issues occur.

- Flashback $u_e<S_L$
  - Flame moves upstream
- Blowoff $u_e>>S_L$
  - Flame exits combustor or extinguishes

<div style="display: flex; gap: 10px;">

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\fstb1.PNG" alt="Image title" width="305">
  <figcaption>Simple model</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\fstb2.PNG" alt="Image title" width="350">
  <figcaption>Flashback</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\fstb3.PNG" alt="Image title" width="305">
  <figcaption>Blowoff</figcaption>
</figure>

</div>

# Quals Like Problems
---