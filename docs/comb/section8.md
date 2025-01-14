# Required Characteristics

What is the required size of the kernel to maintain the flame?

<figure markdown="span" style="float: right; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\igkernel.PNG){ style="float: right; width: 250px;" }
</figure>

\begin{equation*}
    \begin{split}
        \dot{q}_{chem}^{'''}V&>\dot{q}_{cond}^{''}A_{surf}\\
        \dot{q}_{chem}^{'''}4\pi R^3/3&>\dot{q}_{cond}^{''}4\pi R^2\\
        R_{crit}&=\frac{3\dot{q}_{cond}^{''}}{\dot{q}_{chem}^{'''}}\\
        R_{crit}&=\frac{(S_L^2/2\alpha)(T_2-T_1)\rho_1 c_p}{\lambda(T_2-T_1)/R_{crit}}\\
        R_{crit}&=\sqrt{6}\frac{\alpha}{S_L}\\
        R_{crit}&=\sqrt{6}\delta_f
    \end{split}
\end{equation*}

The required energy?

\begin{equation*}
    \begin{split}
        E_{min}&=\rho V c_p(T_2-T_1)\\
        &=4/3\pi R_{crit}^3\rho_2 c_p(T_2-T_1)\\
        &=4/3\pi\left(\sqrt{6}\alpha/S_L\right)^3(P/RT_2)c_p(T_2-T_1)\\
        E_{min}&=61.6P\frac{c_p}{R}\left(\frac{\alpha}{S_L}\right)^3\frac{(T_2-T_1)}{T_2}
    \end{split}
\end{equation*}

# Pressure Scaling

Critical size

\[
R_{crit}\propto \delta_f\propto P^{-n/2}
\]

Minimum energy

\[
E_{min}\propto P\delta^3\propto P^{(2-3n)/2}
\]

!!! note "Helpful"
    For hydrocarbons n=1-2

# Thermal Ignition

<figure markdown="span" style="margin: 0 auto; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
  ![Image title](https://raw.githubusercontent.com/spaceartisan/thermo-comb-qual/refs/heads/master/docs/comb/images\thermigni.PNG){ width="600" }
  <figcaption>Only above flash point, it is possible to ignite gas phase fuel/air mixture</figcaption>
</figure>

# Quals Like Problems
---