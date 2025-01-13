# Nonpremixed Laminar Flames

These type of flames feature fast kinetics, such that $Da\to \infty$. This implies burning rate is limited by diffusion
- These flames are also referred to as diffusion flames

<figure markdown="span" style="float: right; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\diffFlame.PNG){ style="float: right; width: 400px;" }
</figure>

In the accompany diagram, we have fuel on the left hand side and oxidizier on the right hand side. Unlike in a premixed laminar flame which chases the fuel/air mixture, in a diffusion flame the fuel and oxidizer flow into the "flame". This implies that the flame has no flame speed or at least in the same sense as before.

A consequence of this configuration is that at the flame, both the fuel and oxidizer and fuel go to 0, where as products are maximized. Max temperature also occur as the flame. In relation to this are some of the simplfying assumptions. One is fast kinetics and 1-step reactions. This leads to an infinitely thin reaction zone. Another name for this is the **Flame Sheet Approximation**.

In the image below, in association with our approximation, the flame will be located at the stoichiometric surface.

<figure markdown="span" style="margin: 0 auto; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\fsapprox.PNG)
</figure>

!!! note "Helpful"
    Fuel and oxidizer react as soon as they meet

# Jet Mixing

Assume quiescent surroundings, steady, nonreacting, laminar, axisymmetric flow

| Type | Equation |
| --- | --- |
| Mass | $\frac{\partial u_x}{\partial x}+\frac{1}{r}\frac{\partial(ru_r)}{\partial r}=0$ |
| Momentum | $u_x\frac{\partial u_x}{\partial x}+u_r\frac{\partial u_x}{\partial r}=\frac{v}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_x}{\partial r}\right)$ |
| Species | $u_x\frac{\partial Y_F}{\partial x}+u_r\frac{\partial Y_F}{\partial x}=\frac{D}{r}\frac{\partial}{\partial r}\left(r\frac{\partial Y_F}{\partial r}\right)$ |

<figure markdown="span" style="margin: 0 auto; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\jmix_1.PNG)
</figure>

For the boundary conditions

- @$x=0$, $r\leq R$, $\rightarrow$ $u_x/u_e=Y_F=1$
- @$x=0$, $r> R$, $\rightarrow$ $u_x/u_e=Y_F=0$
- @$r=\infty$, $x$, $\rightarrow$ $u_x/u_e=Y_F=0$
- @$x=0$, $x$, $\rightarrow$ $\frac{\partial(u_x/u_e)}{\partial r}=\frac{\partial Y_F}{\partial r}=0$; $u_r=0$

Jet Spread Rate

\[
\alpha=\tan^{-1}\left(\frac{r_{1/2}}{x}\right)=\tan^{-1}(2.97Re_j^{-1})
\]

Entrainment Rate

\[
\frac{d\dot{m}}{dx}=8\pi\mu
\]

# Jet Flames

Same as jet mixing, except now we have a source and sink term in the species and energy conservation equation. As describe in the first section, the fuel and oxidizer will diffuse toward the flame sheet with the products diffusing away. The flame tip will be effect by final fuel burnout and buoyancy.

<figure markdown="span" style="margin: 0 auto; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\jflam.png)
</figure>

# Conserved Scalars

Useful in our analysis, conserved scalar are values such that their total number never changes. Instead one value is decreased proportional to the increase of another value.

Examples:

- Total Enthalpy
- Mixture Fraction
- Elemental Mass Fraction

The mixture fraction is a scalar that tells us at a location, how much of the mass originates from the fuel. It is a conserved scalar since the total amount of fuel in the system never changes.

\[
f=\frac{\text{Mass which originated from the fuel}}{\text{Mass of Mixture}}
\]

!!! note "Helpful"
    In hydrocarbon combustion, in our analysese, $C$ and $H$ will come from the fuel. However, if say, $CO$ is added to our fuel, then it is will need to be accounted in the mixture fraction how many $O$s are coming from the oxidizer vs the fuel.

With the conserved scalar, our conservation equations are summarized

| Type | Equation |
| --- | --- |
| Mass | $\frac{\partial}{\partial x}(\rho u_x)+\frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r)=0$ |
| Momentum | $\frac{1}{r}\frac{\partial}{\partial x}(r\rho u_x u_x)+\frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r u_x)-\frac{1}{r}\frac{\partial}{\partial r}(r \rho\nu \frac{\partial u_x}{\partial u_r})=(\rho_{\infty}-\rho)g$ |
| Species | $\frac{\partial}{\partial x}(r\rho u_x f)+\frac{\partial}{\partial r}(r \rho u_r f)-\frac{1}{r}\frac{\partial}{\partial r}(r \rho D \frac{\partial f}{\partial u_r})=0$ |
| Energy | $\frac{\partial}{\partial x}(r\rho u_x h)+\frac{\partial}{\partial r}(r \rho u_r h)-\frac{1}{r}\frac{\partial}{\partial r}(r \rho D \frac{\partial h}{\partial u_r})=0$ |

Momentum is the only equation that has a right hand side. This is the buoyancy term. If a flame is buoyancy dominated then the directional "movement" or the flame will up. Otherwise, it will be the direction in which the flame is directed (think of a butane torch). The Froude number relates to this effect.

\[
Fr=\frac{u_e^2}{gR}
\]

To interpret, if $Fr>1$ the flame is momentum dominated, $Fr<1$ it is buoyancy dominated. Remember, buoyancy means things like to go up.

!!! note "Helpful"
    With the $Le=1$ approximation, the species and energy equations are of the same form. If you can't remember both, the remember one and replace f with h, or h with f.

# Solutions

Just like with the Shvab-Zeldovich simplification, we have the energy equation and species which are effectively the same with appropriate normalization. Our boundary conditions are 

- @$r^*=0$, any $x^*$ $\to$ $\partial\eta/\partial r=0$ $u_r^*=0$
- @$r^*=\infty$ $\to$ $\eta=0$
- @$x^*=0$, $r^*>1$ $\to$ $\eta=0$
- @$x^*=0$, $r^*\leq 1$ $\to$ $\eta=1$

For our assumptions, which include the flame sheet approximation, this would imply that the flame would sit at $f=f_{stoich}$ ($Y_P=1$)

<figure markdown="span" style="margin: 0 auto; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\flength.PNG)
</figure>

With our discovery, we can deduce that the length of the flame will increase if there is not enough oxidizer. Basically, the fuel needs to be diluted to reach stoichiometric proportions. Conversely, if there is less fuel, the flame will get smaller.

\[
\frac{r_{flame}(f=f_{stoich})}{x}=\frac{8}{\sqrt{3}}\frac{1}{Re_j}\left[\left(\frac{3}{8}\frac{Re_j}{f_{stoich}\frac{R}{x}}\right)^{1/2}-1\right]^{1/2}
\]

At the flame tip $r_{flame}=0$

\[
x_{flame}=L_f=\frac{3}{8}Re_j\frac{R}{f_{stoich}}=\frac{3}{8\pi}\frac{1}{f_{stoich}}\frac{Q_e}{\nu}
\]

\[
L_f\propto \frac{Q_e/D}{f_{stoich}}
\]

!!! note "Helpful"
    If we want to decrease the lenght, but maintain mass flowrate, we can use distributed nozzles.

# Failure of Flame Sheet Approximatino

In the flame sheet approximation, we assumed single step fast chemistry. Neither one of these assumptions are valid

- Multistep chemistry
    - Even with fast chemistry, will still have fuel and oxidizer coexisting
- Finite rate chemistry
    - Solution will depend on timescales (residence time and diffusion)

# Soot

<figure markdown="span" style="float: right; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\soot.PNG){ style="float: right; width: 250px;" }
</figure>

Mostly graphitic carbon. Primarily forms due to "heating" of HC fuel species in oxygen deficient regions. Soot is also oxidized in regions of high temperature, however there is enough oxidizer. Most soot after formed is destroyed; However, soot can remain if the rich regions stays unmixed, or the gases are cooled before a reaction can occur.

In the flame, soot formation is seen mostly generated in the 40 mm region. At this point the temperature is sufficiently high, but still rich. Once we reach the tip, he soot fraction decreases as it meets oxygen and is able to be destroyed.

- Nucleation $\to$ growth $\to$ dehydrogenation $\to$ graphitization

!!! note "Helpful"
    Coal is also generated in high temperture low oxidizer in environment.

# Droplet Evaporation

<figure markdown="span" style="float: right; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\devap.png){ style="float: right; width: 250px;" }
</figure>

In droplet evaporation we consider a perfectly spherical droplet, held together by surface tension, no burning but losing mass by being put in a hot environment. This is relevant since all our investigations into flames have burning which take black with gas mixtures. A liquid by the measure can't "burn". 

In the figure, we can see at $t=0$ not enough time has passed to allow the droplet to evaporate. At this point, on the fuel is contained within the droplet. Sometime later, some of the liquid has evaporated as the temperature has increased. This increase in temperature would obviously diffuse and increased the temperature of the droplet. After waiting awhile, more of the droplet will evaporate diffuseing with the ambient environment and the temperature will also increase.

Assumptions

- Quiescent, infinite medium
- Quasi-steady
- Fixed droplet temperature below boilding point
- Uniform droplet
- Single component liquid
- Binary diffusion
- Constant thermophysical properties
- No viscous dissipation, buoyancy

Conservation equations

|Type | Equation |
| --- | --- |
| Mass | $\dot{m}=4\pi r^2\dot{m}^{''}=const$ |
| Species | $\dot{m}_F^{''}=Y_F\dot{m}^{''}-\rho D\nabla Y_F$ |
| Energy | $\dot{m}c_p\frac{dT}{dr}=\frac{d}{dr}\left(\lambda 4\pi r^2\frac{dT}{dr}\right)$| 

Solving for the mass flow rate from species

\[
\dot{m}=-4\pi\rho D r_s\ln\left(1+\frac{Y_{F,s}-Y_{F,\infty}}{1-Y_{F,s}}\right)=4\pi\rho D r_s\ln(1+B_y)
\]

Where $B_h$ is defined as the Spalding Transfer number for mass. Solving for the mass flow rate from energy

\[
\dot{m}=-4\pi\rho\alpha r_s\ln\left(1+\frac{c_p(T_{\infty}-T_s)}{h_{fg}}\right)=4\pi\rho\alpha r_s\ln(1+B_h)
\]

Where $B_h$ is defined as the Spalding Transfer number for energy. If we use $Le=1$ then from the two equation we get

\[
\frac{Y_{F,s}-Y_{F,\infty}}{1-Y_{F,s}}=\frac{c_p(T_{\infty}-T_s)}{h_{fg}}
\]

Still need to find $Y_{F,s}$, $T_s$. If we assume phase equilibrium fetween liquid and vapor at droplet surface, we can use Clasius-Clapeyron

\[
\frac{dP_{vap}}{dT}=\frac{h_{fg}}{T}\frac{P_{vap}}{RT} \to P_{vap}=Ce^{-h_{fg}(T_{wb})/RT_{wb}}
\]

With this we find

\begin{equation*}
    \begin{split}
        Y{F,s}&=Y_{F,vap}(T_s)\\
        &=\chi_{F,vap}(T_s)\frac{\overline{MW_F}}{\overline{MW_{mix}}}\\
        &=\frac{P_{vap}(T_s)}{P}\frac{\overline{MW_F}}{\overline{MW_{mix}}}\\
        &=\frac{(P_{vap}/P)\overline{MW_F}}{\overline{(P_{vap}/P)MW_{F}+(1-P_{vap}/P)MW_{ox}}}\\
        &=\left[1+\left(\frac{P}{Ce^{-h_{fg}(T_s)/RT_s}}-1\right)\frac{MW_{ox}}{MW_F}\right]^{-1}
    \end{split}
\end{equation*}

Which gives us our $Y_{F,s}$, $T_s$.

# Droplet Lifetime

Basically how long does it take for droplet of a given size $d_s$ to go to 0.

\begin{equation*}
    \begin{split}
        m_d&=\rho_l\pi d_s^3/6\\
        \dot{m}_d&=\frac{\pi}{6}\rho_l\frac{d(d^3_s)}{dt}\\
        &=\frac{\pi}{2}\rho_l d_s^2\frac{d(d_s)}{dt}\\
        &=\frac{\pi}{2}\rho_l d_s d_s\frac{d(d_s)}{dt}\\
        &=\frac{\pi}{4}\rho_l d_s \frac{d(d^2_s)}{dt}\\
        \frac{d(d^2_s)}{dt}&=\frac{4\dot{m}_d}{\rho_l\pi d_s}\\
        &=-8\frac{\rho_g}{\rho_l}\alpha\ln(1+B_h)=-K
    \end{split}
\end{equation*}

!!! note "Helpful"
    If not obvious, the reason for $d_s^2$ instead of some other form, is because we found earlier an expression of $\dot{m}$ in terms of the Spalding transfer number. That $\dot{m}$ was also a function $r_s$, which is what drove the form of the $d_s^2$.

For $\dot{m}_d$ we plugged in the formula we found earlier. $K$ is defined as the evaporation constant. Integrating the term we found, we have the "D^2^ Law". Which if you integrate

\[
d_s^2(t)=d_s^2(0)-Kt
\]

This shows a relationship between the size of the droplet and the time to evaporate.

<figure markdown="span" style="margin: 0 auto; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\d2law.PNG)
</figure>

??? question "How does K impact evaporation rate?"
    As K goes down, $\dot{m}$ increasing. Or, lighter liquids evaporate faster. 



# Droplet Burning

<figure markdown="span" style="float: right; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\dburn.PNG){ style="float: right; width: 250px;" }
</figure>

Now the droplet is able to burn. We can solve this in a way similar to the jet flame.

Assumptions

- Assumption
- Constant Pressure
- Negligible radiation transfer
- Fuel and oxidizer react in stoichiometric proportions
- $Le=1$
- Constant $\rho D$

This form is solved in a similar way (conserved scalar) and the main difference will be the resulting Spalding Transfer Numbers.

Combining species and energy, with $Le=1$ then $b=b_h=b_y$

\[
r^2\dot{m}^{''}\frac{db}{dr}=\rho D\frac{d}{dr}\left(r^2\frac{db}{dr}\right)
\]

Solving this equation gives

\begin{equation*}
    \begin{split}
        \dot{m}&=4\pi\rho Dr_s\ln\left(\frac{b_{\infty}-b_s+1}{b(r)-b_s+1}\right)\\
        &=4\pi\rho Dr_s\ln(1+B)\\
    \end{split}
\end{equation*}

And we have

\begin{equation*}
    \begin{split}
        b_y&=\frac{Y_F-Y_{ox}(m_F/m_{ox})_{stoich}}{(Y_{F,s}-1)Y_{ox,s}(m_F/m_{ox})_{stoich}}\\
        b_h&=\frac{Y_{ox}(m_F/m_{ox})_{stoich}(-\Delta h_R)+c_P T-Y_{ox}(m_F/m_{ox})_{stoich}}{h_{fg}+Y_{ox,s}(m_F/m_{ox})_{stoich}(-\Delta h_R)}\\
    \end{split}
\end{equation*}

So to find $B_h$ using our forms

\[
    B_h=\frac{(m_F/m_{ox})_{stoich}(-\Delta h_R)(Y_{ox,\infty}-Y_{ox,S})+c_P(T_{\infty}-T_s)}{h_{fg}+Y_{ox,S}(m_F/m_{ox})_{stoich}(-\Delta h_R)}
\]

With combustion, $Y_{ox,S}=0$

\[
    B_h=\frac{Y_{ox,\infty}(m_F/m_{ox})_{stoich}(-\Delta h_R)+c_P(T_{\infty}-T_s)}{h_{fg}}
\]

!!! note "Helpful"
    The $B_h$ above goes to our evaporation case if we neglect the heat release term $\Delta h_R$

Just like in the jet flame case, we want to know where the flame is located for the droplet is located. Previously we assumed stoichiometric mixture fraction. This is the point where both $Y_F$ and $Y_{ox}$ go to 0, due to the flame sheet approximation. Therefore

\begin{equation*}
    \begin{split}
        \frac{r_f}{r_s}&=\ln\left(\frac{b_{\infty}-b_s+1}{b(r_s)-b_s+1}\right)/\ln\left(\frac{b_{\infty}-b_s+1}{b(r_f)-b_s+1}\right)\\
        &=\ln(1+B)/\ln\left(\frac{b_{\infty}-b_s+1}{0-b_s+1}\right)\\
        &=\ln(1+B)/\ln\left(1+\frac{b_{\infty}}{-b_s+1}\right)\\
        &=\ln(1+B)/\ln(1+(m_F/m_{ox})_{stoich})\\
    \end{split}
\end{equation*}

# Ignition Delay

<figure markdown="span" style="float: right; display: table; border: 2px solid rgb(68, 138, 255); padding: 5px; border-radius: 5px;">
    ![Poopy](images\igdel.PNG){ style="float: right; width: 250px;" }
</figure>

As we have seen, droplets wont begin to burn immediately. Evaporation will precede burning. As we have seen previously, autoignition must occur before burning occurs (excluding forced ignition). If induction time is tool long, the droplet will evaporate and may not be able to burn. Can decrease induction time if we increase temperature.

# Quals Like Problems
---