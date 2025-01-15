# Random Motion

<figure markdown="span" style="display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\randMot.png){ width: 400px;" }
</figure>

# Lennard-Jones Potential

<figure markdown="span" style="display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\lenjones.png){ width: 400px;" }
</figure>

\[
V(r)=4\varepsilon\left[\left(\frac{\sigma}{r}\right)^{12}-\left(\frac{\sigma}{r}\right)^{6}\right]
\]

Where $\sigma$ is the LJ diameter, $\varepsilon$ is the well-depth, and $r$ is the separation distance.

Assumes elastic, rigid hard sphere.

# Gas Kinetic Pressure

Pressure is the resultant of momentum transfer. Need to consider all collisions with wall.

Flux is defined as $\text{number}/\text{area} \times \text{time}$. With gas, we care about the number density of molecules, so

\begin{equation*}
    \begin{split}
        P&=\text{flux}\times\text{normal force per collision}\\
        &=(\frac{1}{2}n_{C_1}C_1)(2mC_1)\\
        &=mn_{C_1}C_1^2
    \end{split}
\end{equation*}

Summing over all molecules

\[
P=m\sum_{C_1}n_{C-1}C_1^2
\]

Define average squared speed

\[
\bar{C_1^2}=\frac{\sum_{C_1}C_1^2}{\sum_{C_1}n_{C_1}}
\]

\[
P=mn\overline{C_1^2}
\]

In equilibrium , p should be the same in all directions

\[
\overline{C^2}=\overline{C_1^2}+\overline{C_2^2}+\overline{C_3^2}
\]

\[
P=\frac{1}{3}mn\overline{C^2}
\]

# Kinetic Energy and Temperature

\begin{equation*}
    \begin{split}
        E_{tr}&=\frac{1}{2}(Vnm)\overline{C^2}
        &=\frac{3}{2}VP
        &=\frac{3}{2}N\bar{R}T
    \end{split}
\end{equation*}

\[
\frac{1}{2}m\overline{C^2}=\frac{3}{2}kT\to \overline{C^2}=\frac{3kT}{m}
\]

# Transport Properties

Fourier's Law

\[
q_2=-k\frac{dT}{dx_2}
\]

Newtonian Fluid

\[
\tau_{12}=\mu\frac{du_1}{dx_2}
\]

Fickian Diffusion

\[
j_{A,2}=-D_{AB}\frac{d\rho_A}{dx_2}
\]

# Mean Free Path

\[
\lambda=\frac{1}{\sqrt{2}n\sigma}
\]

The $\sqrt{2}$ comes from $\bar{g}=\sqrt{2}\overline{C}$