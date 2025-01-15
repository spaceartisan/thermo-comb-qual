First Law 

\[
    dU=\delta Q+\delta W
\]

Second Law

\[
    dS\geq\int\frac{Q}{T}
\]

Equilbrium

\[
    dS=\left(\frac{\partial S}{\partial U}\right)_{V,n}dU+\left(\frac{\partial S}{\partial V}\right)_{U,n}dV+\sum_i\left(\frac{\partial S}{\partial n_i}\right)_{U,V,n}dn_i
\]

| Relation |
| --- |
| $\left(\frac{\partial S}{\partial U}\right)_{V,n}=\frac{1}{T}$ |
| $\left(\frac{\partial S}{\partial V}\right)_{U,n}=\frac{P}{T}$ |
| $\left(\frac{\partial S}{\partial n_i}\right)_{U,V,n}=-\frac{\mu_i}{T}$ |

Gibbs

\[
    dS=\frac{1}{T}dU+\frac{P}{T}dV
\]

Auxilliary Equations

| Equation |
| --- |
| $H=U+PV$ |
| $G=H-TS$ |
| $F=U-TS$ |

Math Relations. Let $F=F(x,y)$ where $F$ is a smooth continuous function


\[
dF=\left(\frac{\partial F}{\partial x}\right)_ydx+\left(\frac{\partial F}{\partial y}\right)_xdy
\]

Can form a whole host of relations. Example $S=S(U,V)$ from above.

For open system, we have

\[
    \dot{m}_{out}-\dot{m}_{in}=0
\]

\[
    \dot{Q}+\dot{W}=\dot{h}_{out}-\dot{h}_{in}
\]

\[
\dot{P}_s+\frac{\dot{Q}}{T} = \dot{s}_{out}-\dot{s}_{in}
\]

If if we assume simple compressible fluid.

\begin{equation*}
    \begin{split}
        T(\dot{s}_{out}-\dot{s}_{in}-\dot{P}_s)+\dot{W}&=\dot{h}_{out}-\dot{h}_{in}\\
        w_u&=(h_{out}-h_{in})-T(s_{out}-s_{in}-P_s)\\
        w_{u,max,in}&=(h_{out}-h_{in})-T(s_{out}-s_{in})
    \end{split}
\end{equation*}