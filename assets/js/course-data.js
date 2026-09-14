window.COURSE_DATA = {
  course: {
    code: "CIS 6270",
    title: "Discrete Generative Models",
    term: "Fall 2026",
    meeting: "Tuesdays and Thursdays, 8:30–10:00 a.m.",
    location: "Towne 337",
    canvas: "https://canvas.upenn.edu/courses/1948454",
    ed: "https://edstem.org/us/courses/104834",
    syllabusPdf: "https://drive.google.com/file/d/1MDUBUxkUyb66q6WP-e50LqNZuSPGdjSC/view?usp=sharing",
    updated: "September 13, 2026"
  },

  staff: [
    {
      name: "Pranam Chatterjee, Ph.D.",
      role: "Instructor",
      affiliation: "Computer and Information Science",
      email: "pranam@engineering.upenn.edu",
      officeHours: "Wednesdays, 5:30–6:30 p.m.",
      website: "https://chatterjeelab.com"
    },
    {
      name: "Tong Chen",
      role: "Teaching Assistant",
      affiliation: "CIS Ph.D. student, Chatterjee Lab",
      email: "chentong@engineering.upenn.edu",
      officeHours: "Thursdays, 5:30–6:30 p.m."
    },
    {
      name: "Rosie Zhang",
      role: "Teaching Assistant",
      affiliation: "CIS Ph.D. student, Chatterjee Lab",
      email: "roxiez@engineering.upenn.edu",
      officeHours: "Tuesdays, 5:30–6:30 p.m."
    },
    {
      name: "Sophie Vincoff",
      role: "Teaching Assistant",
      affiliation: "BE Ph.D. student, Chatterjee Lab",
      email: "svincoff@engineering.upenn.edu",
      officeHours: "Mondays, 5:30–6:30 p.m."
    }
  ],

  assignments: [
    {
      title: "Project 1 — NeurIPS Workshop",
      weight: "15%",
      due: "September 29, 2026 at 8:30 a.m.",
      defense: "September 30, 2026",
      description: "An execution-focused empirical study with benchmarks, ablations, and quantitative tests.",
      status: "Available",
      canvasUrl: "https://canvas.upenn.edu/courses/1948454/assignments/15122164"
    },
    {
      title: "Project 2 — ICLR Workshop",
      weight: "20%",
      due: "October 27, 2026 at 8:30 a.m.",
      defense: "October 28, 2026",
      description: "Implement and analyze established discrete generative modeling frameworks on data.",
      status: "Forthcoming",
      canvasUrl: "https://canvas.upenn.edu/courses/1948454/assignments"
    },
    {
      title: "Final Project — ICML Main Conference",
      weight: "25%",
      due: "December 3, 2026 at 8:30 a.m.",
      defense: "December 4, 2026",
      description: "Develop a novel discrete generative method for a biological sequence design problem.",
      status: "Forthcoming",
      canvasUrl: "https://canvas.upenn.edu/courses/1948454/assignments"
    }
  ],

  lectures: [
    {
      number: 1,
      isoDate: "2026-08-25",
      date: "August 25, 2026",
      title: "Introduction and Probability Foundations",
      links: [
        { label: "All slides", url: "https://docs.google.com/presentation/d/1Q3uyFuB19tVuX4pwTqekG7R7gRt8-MswKQI8Ygt-QMU/edit?usp=sharing" },
        { label: "Condensed slides", url: "https://docs.google.com/presentation/d/1EKbHi6a7rR2HICHPj8_jcBT85xZtqfqagbtMLAtNM3k/edit?slide=id.g3f40a365991_0_1555#slide=id.g3f40a365991_0_1555" }
      ]
    },
    {
      number: 2,
      isoDate: "2026-08-27",
      date: "August 27, 2026",
      title: "Linear Algebra and the Probability Simplex",
      links: [
        { label: "All slides", url: "https://docs.google.com/presentation/d/1nuVicHBPDY6x2WC8CrD57Vxm_ruNrv2Ce3XDZx7_FfU/edit?usp=sharing" },
        { label: "Condensed slides", url: "https://docs.google.com/presentation/d/1yo6123XuhUZbfF0L8asl-Vas5kZqZXVgWmf47Z0-eqk/edit?slide=id.g3fa8f46a330_1_1692#slide=id.g3fa8f46a330_1_1692" }
      ]
    }
  ],

  schedule: [
    { date: "2026-08-25", displayDate: "Tue, Aug 25", type: "lecture", title: "Introduction and Probability Foundations", details: "Course logistics; continuous and discrete state spaces; distributions; expectation; Monte Carlo estimation; conditional probability and Bayes’ rule." },
    { date: "2026-08-27", displayDate: "Thu, Aug 27", type: "lecture", title: "Linear Algebra and the Probability Simplex", details: "Probability vectors; matrices and linear transformations; eigendecomposition; matrix exponentials." },
    { date: "2026-09-01", displayDate: "Tue, Sep 1", type: "lecture", title: "Maps, Pushforwards, and Changes of Variables", details: "Pushforward distributions; Jacobians; determinants; gradients; divergence; entropy; KL divergence; constrained optimization." },
    { date: "2026-09-03", displayDate: "Thu, Sep 3", type: "lecture", title: "Ordinary Differential Equations and Velocity Fields", details: "Time-dependent maps; trajectories; velocity and flow fields; Euler’s method; numerical ODE solvers." },
    { date: "2026-09-08", displayDate: "Tue, Sep 8", type: "lecture", title: "The Continuity Equation and Flow Matching", details: "Conservation of probability; flux; divergence; continuity equation; probability paths; flow matching objective.", milestone: "Project 1 assigned" },
    { date: "2026-09-10", displayDate: "Thu, Sep 10", type: "lecture", title: "Stochastic Differential Equations and Fokker–Planck", details: "Brownian motion; drift and diffusion; Langevin dynamics; Ornstein–Uhlenbeck process; Fokker–Planck equation." },
    { date: "2026-09-15", displayDate: "Tue, Sep 15", type: "lecture", title: "Continuous Diffusion and Score Matching", details: "Forward corruption; reverse-time SDE; denoising score matching; DDPM; probability-flow ODE." },
    { date: "2026-09-17", displayDate: "Thu, Sep 17", type: "lecture", title: "Discrete State Spaces and Markov Chains", details: "Transition matrices; Markov chains; Chapman–Kolmogorov equations; stationary distributions." },
    { date: "2026-09-22", displayDate: "Tue, Sep 22", type: "lecture", title: "Continuous-Time Markov Chains and the Master Equation", details: "Poisson processes; rate and generator matrices; matrix exponential kernels; master equation." },
    { date: "2026-09-24", displayDate: "Thu, Sep 24", type: "lecture", title: "Time Reversal and Classical Discrete Generation", details: "Detailed balance; reverse-time rates; discrete scores; autoregressive factorization; ancestral sampling." },
    { date: "2026-09-29", displayDate: "Tue, Sep 29", type: "lecture", title: "From Training Objectives to Neural Parametrization", details: "Maximum likelihood; cross-entropy; teacher forcing; exposure bias; embeddings; attention; time conditioning.", milestone: "Project 1 due at 8:30 a.m." },
    { date: "2026-09-30", displayDate: "Wed, Sep 30", type: "defense", title: "Project 1 Defenses", details: "NeurIPS workshop format: 10-minute presentation and 20-minute Q&A per group." },
    { date: "2026-10-01", displayDate: "Thu, Oct 1", type: "break", title: "Fall Term Break", details: "No class." },
    { date: "2026-10-06", displayDate: "Tue, Oct 6", type: "workshop", title: "Code Workshop on Model Development and Training", details: "Model interfaces; objectives; optimization; debugging; exam Q&A." },
    { date: "2026-10-08", displayDate: "Thu, Oct 8", type: "exam", title: "Exam 1", details: "Foundations, continuous generative models, discrete stochastic processes, autoregressive models, and neural parametrization." },
    { date: "2026-10-13", displayDate: "Tue, Oct 13", type: "lecture", title: "Forward Discrete Diffusion and Absorbing-State Corruption", details: "Forward kernels; cumulative transition matrices; categorical corruption; masking processes.", milestone: "Project 2 assigned" },
    { date: "2026-10-15", displayDate: "Thu, Oct 15", type: "lecture", title: "Reverse Discrete Diffusion and the Categorical Posterior", details: "Categorical posterior; reverse kernels; D3PM parametrization; reverse-process sampling." },
    { date: "2026-10-20", displayDate: "Tue, Oct 20", type: "lecture", title: "The Evidence Lower Bound for Discrete Diffusion", details: "Variational inference; discrete diffusion ELBO; per-step KL terms; reconstruction; simplified objectives." },
    { date: "2026-10-22", displayDate: "Thu, Oct 22", type: "lecture", title: "Masked Diffusion and MDLM", details: "Masked corruption; reverse posterior; weighted cross-entropy; MDLM sampling; sequence applications." },
    { date: "2026-10-27", displayDate: "Tue, Oct 27", type: "lecture", title: "Discrete Flow Matching and Target Rate Matrices", details: "Master equation; generating velocity; conditional paths and rates; target rate matrices.", milestone: "Project 2 due at 8:30 a.m." },
    { date: "2026-10-28", displayDate: "Wed, Oct 28", type: "defense", title: "Project 2 Defenses", details: "ICLR workshop format: 10-minute presentation and 20-minute Q&A per group." },
    { date: "2026-10-29", displayDate: "Thu, Oct 29", type: "lecture", title: "Alternative Probability Paths and Edit Flows", details: "Nonlinear paths; Dirichlet and Fisher–Rao interpolants; Gumbel-softmax; variable-length generation." },
    { date: "2026-11-03", displayDate: "Tue, Nov 3", type: "lecture", title: "Couplings, Monge, and Kantorovich", details: "Transport plans; Monge and Kantorovich formulations; relaxation; discrete optimal transport.", milestone: "Final project assigned" },
    { date: "2026-11-05", displayDate: "Thu, Nov 5", type: "lecture", title: "Entropic Optimal Transport and Sinkhorn", details: "Entropic regularization; Sinkhorn iterations; transport duality; convergence and computation." },
    { date: "2026-11-10", displayDate: "Tue, Nov 10", type: "lecture", title: "Dynamic Optimal Transport and Generative Flows", details: "Wasserstein geometry; Benamou–Brenier formulation; optimal paths and transport couplings." },
    { date: "2026-11-12", displayDate: "Thu, Nov 12", type: "workshop", title: "Code Workshop on Model Development and Training", details: "Discrete diffusion and flow matching; optimal transport couplings; evaluation and debugging." },
    { date: "2026-11-17", displayDate: "Tue, Nov 17", type: "review", title: "Exam 2 Review", details: "Practice problems; derivations; algorithm design; discrete diffusion; flow matching; optimal transport." },
    { date: "2026-11-19", displayDate: "Thu, Nov 19", type: "exam", title: "Exam 2", details: "Discrete diffusion, discrete flow matching, and optimal transport." },
    { date: "2026-11-24", displayDate: "Tue, Nov 24", type: "break", title: "Thanksgiving Break", details: "No class." },
    { date: "2026-11-26", displayDate: "Thu, Nov 26", type: "break", title: "Thanksgiving Break", details: "No class." },
    { date: "2026-12-01", displayDate: "Tue, Dec 1", type: "lecture", title: "Schrödinger Bridges and Stochastic Control", details: "Reference processes; path-space relative entropy; Schrödinger systems; stochastic control; iterative proportional fitting." },
    { date: "2026-12-03", displayDate: "Thu, Dec 3", type: "lecture", title: "Discrete Schrödinger Bridge Matching", details: "Sinkhorn as a Schrödinger algorithm; Doob’s h-transform; reciprocal processes; course synthesis.", milestone: "Final project due at 8:30 a.m." },
    { date: "2026-12-04", displayDate: "Fri, Dec 4", type: "defense", title: "Final Project Defenses", details: "ICML main-conference format: 10-minute presentation and 20-minute Q&A per group." }
  ]
};
