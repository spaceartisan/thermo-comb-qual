# Thermodynamic Relations

Recall that equilibrium can be express as

\[
dS=\left(\frac{\partial S}{\partial E}\right)_{V,N}dE+\left(\frac{\partial S}{\partial V}\right)_{E,N}dV+\left(\frac{\partial S}{\partial N}\right)_{E,V}dN
\]

If we begin equating to

\begin{equation*}
    \begin{split}
        S&=k\ln\Omega\\
        &=k\left[N\left(1+\ln\frac{Q}{N}\right)+\beta E\right]\\
        &=kN\ln\frac{Q}{N}+kN+k\beta E
    \end{split}
\end{equation*}

We can see

\[
\left(\frac{\partial S}{\partial E}\right)_{V,N}=\frac{d}{dE}\left(kN\ln\frac{Q}{N}+kN+k\beta E\right)
\]

This will yield $\beta=1/k_T$. With this we can summarize the important thermodynamic relations in relation to the partition functino

\[
\frac{P}{T}=kN\frac{\partial\ln Q}{\partial V}
\]

\[
\frac{\mu}{T}=-k\ln\frac{Q}{N}
\]

\[
E=NkT^2\frac{\partial\ln Q}{\partial T}
\]

And recall $c_vdT=du=de$

\[
c_v=R\left[2T\frac{\partial\ln Q}{\partial T}+T^2\frac{\partial^2\ln Q}{\partial T^2}\right]
\]

# BE-FD Results

\[
N_{i_{[FE/FD]}}^*=\frac{g_i}{e^{(\varepsilon_i-\mu)/kT}\mp 1}
\]

<div style="display: flex; gap: 10px;">

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/thermo\images\Bose_Einstein_distribution.jpg" alt="Image title" width="305">
  <figcaption>Bose Einstein</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/thermo\images\FD_e_mu.svg.png" alt="Image title" width="350">
  <figcaption>Fermi Dirac</figcaption>
</figure>

<figure style="margin: 0; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  <img src="https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/thermo\images\Quantum_and_classical_statistics.png" alt="Image title" width="305">
  <figcaption>Comparisons</figcaption>
</figure>

</div>

# Independent Energy Modes

For thermally perfect gases, 

\[
\varepsilon=\varepsilon_{tr}+\varepsilon_{int}
\]

Where internal energy modes expands further to

\[
\varepsilon_{int}=\varepsilon_{elec}+(\varepsilon_{rot,vib})
\]

And if not monoatomic

\[
\varepsilon_{rot,vib}=\varepsilon_{vib}+\varepsilon_{rot}
\]

So this yields

\[
Q=Q_{tr}Q_{elec}(Q_{vib}Q_{rot})
\]

This separability leads to $E=E_{tr}+E_{elec}+E_{vib}+E_{rot}$ and consequentially $S=S_{tr}+S_{int}$

# Translational Partition Function

\[
Q=\left(\frac{2\pi mkT}{h^2}\right)^{3/2}V
\]

Can relate the Thermal DeBroglie Wavelength to our Boltzmann assumption. CB is valid for

\[
V/N>>\Lambda^3
\]

Where $Q_{tr}=V/\Lambda^3

# Purely Translating Particles

| TD Property | Equation |
| --- | --- |
| Pressure | $p_{tr}V=NkT$ |
| Energy | $\frac{E_{tr}}{N}=\frac{3}{2}kT$ |
| Specific Heat | $c_{v,tr}=\frac{3}{2}R$ |

# Equipartition of Energy

Every energy mode thata is a quadratic function of a degree of freedom contributes a value of $1/2$ to $c_v/R$

# Electronic Energy Mode

Using characteristic temperatures $\theta_{el,i}=\varepsilon_{el,i}/k$

\[
Q_{el}=g_0+g_1e^{-\theta_{el,1}/T}+g_1e^{-\theta_{el,2}/T}+...
\]

<figure markdown="span" style="display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/thermo\images\eldist.png){ width: 400px;" }
</figure>

# Rotational Partition Function

Using characteristic temperature $\theta_r=hcB/k$

\[
Q_{rot}=\frac{T}{\theta_r}
\]

$Q_{rot}$ contributes

\[
e_{rot}=\bar{R}T
\]

\[
c_{v,rot}=\bar{R}
\]

The above assumed heteronuclear. If homonuclear

\[
Q_{rot}=\frac{T}{2\theta_r}
\]

# Vibrational Partition Function

with characteristic equation $\theta_v=h\nu/k$

\[
Q_{vib}=\frac{e^{-\theta_v/2T}}{1-e^{-\theta_v/T}}
\]

\[
e_{vib}=\bar{R}\theta_v\left(\frac{1}{2}+\frac{1}{e^{\theta_v/T}-1}\right)
\]

\[
c_{v,vib}=\bar{R}\left(\frac{\theta_v}{T}\right)^2\frac{e^{\theta_v/T}}{(e^{\theta_v/T}-1)^2}
\]

!!! note "Helpful"
    Both translation and rotation (if not monoatomic) is fully excited at relatively low temperatures. Vibrational is not so much, at temperatures <500 K it is a safe assumption to ignore vibration, however  above 500 K effects of additional modes will impact.

# Corrections to Simple Energy Models

- Non-rigid rotor
- Anharmonic Oscillator
- Interaction of Rotations-Electronic

# Polyatomic Molecules

- Translation has 3 DOF so 3N-3 rotation and vibrations DOF exist
- Rotations
    - Linear: 2 rotation axes
    - Nonlinear: 3 rotation axes
vibrations
    - Linear: 3N-3-2 DOF = 3N-5 vib. modes
    - Nonlinear: 3N-3-3 DOF = 3N-6 vib. modes

\[
Q_{vib}=\Pi_{l=1}^{N_{vib}}\frac{e^{-\theta_{vl}/2T}}{1-e^{-\theta_{vl}/T}}
\]

\[
Q_{rot}=\frac{1}{\sigma}\sum_J(2J+1)e^{-\theta_r J(J+1)/T}=\frac{T}{\sigma\theta_r}
\]

# Equilibrium Constant 

\[
aA+bB\leftrightarrow cC
\]

\[
\frac{(N^C)^c}{(N^A)^a(N^B)^b}=\frac{(Q^C)^c e^{-\Delta\varepsilon_0/kT}}{(Q^A)^a(Q^B)^b}=\frac{(Q^C e^{-\Delta\varepsilon_0/kT})^c}{(Q^A)^a(Q^B)^b}
\]

If assumming perfect gas

\[
\frac{(N^C)^c}{(N^A)^a(N^B)^b}=\frac{(Q^C)^c e^{-\Delta\varepsilon_0/kT}}{(Q^A)^a(Q^B)^b}\to\frac{P_C^c}{P_A^a P_B^b}=K_p
\]

\[
K_p=\left(\frac{kT}{V}\right)^{c-(a+b)}\frac{(Q^C)^c e^{-\Delta\varepsilon_0/kT}}{(Q^A)^a(Q^B)^b}
\]

# Radiation

Equilibrium (Blackbody) Radiation

\[
I_{\nu}=\frac{2h\nu^3/c^2}{e^{h\nu/kT}-1}
\]

\[
I_{\lambda}=\frac{2hc^2/\lambda^5}{e^{hc/\lambda kT}-1}
\]