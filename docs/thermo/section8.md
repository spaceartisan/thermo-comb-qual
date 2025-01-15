# Differential Collision Rate

\[
d\zeta_{AB}=\frac{n_A n_B}{\delta_{AB}}f(c_i)f(z_i)g\sigma_{AB}(g,\chi)dV_c dV_z d\Omega
\]

Total bimolecular collision rate

\[
z_{AB}=\frac{n_A n_B}{\delta_{AB}}\int_{\infty}^{\infty}\int_{\infty}^{\infty}f(c_i)f(z_i)g\sigma_{AB}^T(g)dV_c dV_z
\]

# Requirement for Equilibrium

Rate depleting collisions = rate replenishing collisions

\[
[f_o(c_i^{'})f_o(z_i^{'})-f_o(c_i)f_o(z_i)]=0
\]

# Equilibrium Distribution Constraints

- Random velocity: $\bar{C}_1=\bar{C}_2=\bar{C}_3=0$
- PDF Normalized: $\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f_o(C_i)dV_C=1$
- P.G. result: $p=nkT=\frac{1}{3}nm\overline{C^2}$

Maxwellian velocity distribution

\[
f_o(C_i)=\left(\frac{m}{2\pi kT}\right)^{3/2}e^{-\frac{mC^2}{2kT}}
\]

Maxwellian Speed Distribution

\[
\chi_o(C)=\left(\frac{m}{2\pi kT}\right)^{3/2}4\pi C^2e^{-\frac{mC^2}{2kT}}
\]

<figure markdown="span" style="display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\maxdistropng.png){ width: 300px;" }
</figure>

|| Equation |
| --- | --- |
| $C_{1_{mp}}$ | 0 |
| $C_{mp}$ | $\sqrt{2kT/m}$ |
| $\bar{C}$| $\sqrt{\frac{8kT}{\pi m}}$ |
| $\sqrt{\overline{C^2}}$| $\sqrt{\frac{3kT}{m}}$ |

# Bimolecular Collision Rate

\[
    z_{AB}=\frac{n_A n_B}{\delta_{AB}}\int_0^{\infty}\left(\frac{m^*_{AB}}{2\pi kT}\right)^{3/2}e^{-\frac{m^*_{AB}}{2\pi kT}}\sigma^T_{AB}(g)4\pi g^3dg
\]

Hard sphere example

\[
z_{AB}=\frac{n_A n_B}{\delta_{AB}}\sigma_{AB}\bar{g}
\]

# Diffusion Expressions

For both heat and shear stress, in equilibrium these terms become 0. Or in translational equilibrium there are no heat diffusion ro shear stresses.