window.COURSE_DATA = {
  course: {
    code: "CIS 6270",
    title: "Discrete Generative Models",
    term: "Fall 2026",
    meeting: "Tuesdays and Thursdays, 8:30-10:00 a.m.",
    location: "Towne 337",
    canvas: "https://canvas.upenn.edu/courses/1948454",
    ed: "https://edstem.org/us/courses/104834",
    syllabusPdf: "assets/docs/cis6270-syllabus-fall-2026.pdf",
    updated: "September 18, 2026"
  },

  staff: [
    {
      name: "Pranam Chatterjee, Ph.D.",
      role: "Professor",
      affiliation: "Assistant Professor of Computer and Information Science\nAssistant Professor of Bioengineering",
      photo: "assets/images/staff/pranam-chatterjee.jpg",
      photoAlt: "Portrait of Pranam Chatterjee",
      email: "pranam@engineering.upenn.edu",
      officeHours: "Wednesdays, 5:00-6:00 p.m.",
      website: "https://chatterjeelab.com"
    },
    {
      name: "Sophie Vincoff",
      role: "Head Teaching Assistant",
      affiliation: "BE Ph.D. student, Chatterjee Lab",
      photo: "assets/images/staff/sophie-vincoff.jpg",
      photoAlt: "Portrait of Sophie Vincoff",
      email: "svincoff@engineering.upenn.edu",
      officeHours: "Mondays, 5:00-6:00 p.m."
    },
    {
      name: "Tong Chen",
      role: "Teaching Assistant",
      affiliation: "CIS Ph.D. student, Chatterjee Lab",
      photo: "assets/images/staff/tong-chen.jpg",
      photoAlt: "Portrait of Tong Chen",
      email: "chentong@engineering.upenn.edu",
      officeHours: "Thursdays, 5:00-6:00 p.m."
    },
    {
      name: "Rosie Zhang",
      role: "Teaching Assistant",
      affiliation: "CIS Ph.D. student, Chatterjee Lab",
      photo: "assets/images/staff/rosie-zhang.jpg",
      photoAlt: "Portrait of Rosie Zhang",
      email: "roxiez@engineering.upenn.edu",
      officeHours: "Tuesdays, 5:00-6:00 p.m."
    }
  ],

  assignments: [
    {
      title: "Project 1 - Continuous Generative Models",
      weight: "15%",
      due: "September 29, 2026 at 8:30 a.m.",
      defense: "September 30, 2026",
      description: "A two-modality empirical study comparing continuous flow matching and diffusion under a matched protocol, with guided generation and an ablated methodological innovation.",
      status: "Available",
      canvasUrl: "https://canvas.upenn.edu/courses/1948454/assignments/15122164"
    },
    {
      title: "Project 2 - Discrete Generative Models Workshop",
      weight: "20%",
      due: "October 27, 2026 at 8:30 a.m.",
      defense: "October 28, 2026",
      description: "Build a discrete generative model with property guidance, appropriate baselines, quantitative evaluation, guidance-strength analyses, and controlled ablations in ICLR workshop format.",
      status: "Forthcoming",
      canvasUrl: "https://canvas.upenn.edu/courses/1948454/assignments"
    },
    {
      title: "Final Project - ICML-Ready Paper",
      weight: "25%",
      due: "December 3, 2026 at 8:30 a.m.",
      defense: "December 4, 2026",
      description: "Extend Project 1, Project 2, or both into a coherent methodological contribution supported by theory, baselines, ablations, multi-seed experiments, guidance analyses, and cross-setting validation.",
      status: "Forthcoming",
      canvasUrl: "https://canvas.upenn.edu/courses/1948454/assignments"
    }
  ],

  lectures: [
    {
      number: 1,
      dates: ["2026-08-25"],
      date: "August 25, 2026",
      title: "Probability Foundations",
      links: [
        { label: "Lecture Notes", url: "https://drive.google.com/file/d/1FgoZnsKtzF7MrtiGTjfjHGcIg-ZjM1If/view?usp=sharing" }
      ]
    },
    {
      number: 2,
      dates: ["2026-08-27"],
      date: "August 27, 2026",
      title: "The Probability Simplex and Linear Algebra",
      links: [
        { label: "Lecture Notes", url: "https://drive.google.com/file/d/1iL_cboLK6cDZ2BhmnQDEmLfnv9dEHDp3/view?usp=sharing" }
      ]
    },
    {
      number: 3,
      dates: ["2026-09-01"],
      date: "September 1, 2026",
      title: "Maps, Pushforwards, and Changes of Variables",
      links: [
        { label: "Lecture Notes", url: "https://drive.google.com/file/d/1OrRkfG8yWSYeYVsvjzQAeVE7e4f_flM6/view?usp=sharing" }
      ]
    },
    {
      number: 4,
      dates: ["2026-09-03"],
      date: "September 3, 2026",
      title: "Vector Fields, Probability Conservation, and Optimization",
      links: [
        { label: "Lecture Notes", url: "https://drive.google.com/file/d/1N5T95OchhhzpD-T4sp-1_aIgXdLn8jLq/view?usp=sharing" }
      ]
    },
    {
      number: 5,
      dates: ["2026-09-08"],
      date: "September 8, 2026",
      title: "ODEs and Continuous Probability Transport",
      links: [
        { label: "Lecture Notes", url: "https://drive.google.com/file/d/1Ls5MnTUZm7psBBNeFG5E7Zl2DT5HqQbb/view?usp=sharing" }
      ]
    },
    {
      number: 6,
      dates: ["2026-09-10"],
      date: "September 10, 2026",
      title: "Flow Matching",
      links: [
        { label: "Lecture Notes", url: "https://drive.google.com/file/d/1tS0H9ed8PqiY2uisT727j9Lq1azzzr5m/view?usp=sharing" }
      ]
    },
    {
      number: 7,
      dates: ["2026-09-15"],
      date: "September 15, 2026",
      title: "SDEs, Fokker-Planck, and Score Matching",
      links: [
        { label: "Lecture Notes", url: "https://drive.google.com/file/d/1JrgP_BM8Uyh8FyX_jBd-eerxuyKVBf-L/view?usp=sharing" }
      ]
    },
    {
      number: 8,
      dates: ["2026-09-17"],
      date: "September 17, 2026",
      title: "Reverse-Time Diffusion and DDPMs",
      links: [
        { label: "Lecture Notes", url: "https://drive.google.com/file/d/1DpLHERt83RKvvHXsIv2_qWhpFl20lPK5/view?usp=sharing" }
      ]
    }
  ],

  schedule: [
    { date: "2026-08-25", displayDate: "Tue, Aug 25", type: "lecture", title: "Probability Foundations", details: "Course logistics and roadmap; continuous and discrete state spaces; probability distributions; expectation and Monte Carlo estimation; joint, marginal, and conditional probability; Bayes’ rule." },
    { date: "2026-08-27", displayDate: "Thu, Aug 27", type: "lecture", title: "The Probability Simplex and Linear Algebra", details: "Probability vectors and simplex geometry; logits and softmax; vectors and matrices; linear transformations; eigenvalues, eigenvectors, diagonalization, and matrix exponentials." },
    { date: "2026-09-01", displayDate: "Tue, Sep 1", type: "lecture", title: "Maps, Pushforwards, and Changes of Variables", details: "Maps, inverse maps, and composition; pushforward distributions; derivatives and Jacobians; determinants and local volume change; finite change of variables." },
    { date: "2026-09-03", displayDate: "Thu, Sep 3", type: "lecture", title: "Vector Fields, Probability Conservation, and Optimization", details: "Gradients, directional derivatives, vector fields, divergence, and the continuity equation; entropy, cross-entropy, KL divergence, constrained optimization, and the complete generative-model framework." },
    { date: "2026-09-08", displayDate: "Tue, Sep 8", type: "lecture", title: "ODEs and Continuous Probability Transport", details: "Ordinary differential equations, velocity fields, flow maps, Euler’s method, numerical integration, conservation of probability, the continuity equation, instantaneous change of variables, and continuous normalizing flows." },
    { date: "2026-09-10", displayDate: "Thu, Sep 10", type: "lecture", title: "Flow Matching", details: "Endpoint couplings, probability paths and interpolants, conditional and marginal velocities, the flow-matching regression objective, sampling, neural parametrization, and implementation.", milestone: "Project 1 assigned" },
    { date: "2026-09-15", displayDate: "Tue, Sep 15", type: "lecture", title: "SDEs, Fokker-Planck, and Score Matching", details: "Flow-matching recap, Brownian motion, stochastic differential equations, drift and diffusion, Ito's lemma, the Fokker-Planck equation, variance-preserving diffusion, Gaussian scores, and denoising score matching." },
    { date: "2026-09-17", displayDate: "Thu, Sep 17", type: "lecture", title: "Reverse-Time Diffusion and DDPMs", details: "Noise prediction, score-driven sampling, reverse-time SDEs, DDPM forward transitions and posteriors, the learned reverse mean, time-conditioned networks, U-Nets, and DDPM training and sampling." },
    { date: "2026-09-22", displayDate: "Tue, Sep 22", type: "lecture", title: "Diffusion Paths and Probability-Flow ODEs", details: "Latent diffusion, AMP-Diffusion, alternative noise paths, probability-flow ODEs, deterministic sampling, and the connections among score matching, diffusion, and flow matching." },
    { date: "2026-09-24", displayDate: "Thu, Sep 24", type: "lecture", title: "Guidance for Continuous Generative Models", details: "Conditional scores, classifier guidance, classifier-free guidance, reward guidance, conditional flow matching, multi-objective guidance, time-dependent property reliability, and guided latent flow and diffusion models." },
    { date: "2026-09-29", displayDate: "Tue, Sep 29", type: "lecture", title: "Masked Diffusion and MDLM", details: "Discrete sequence corruption, absorbing masks, exact reverse reveal probabilities, clean-token prediction, the masked diffusion ELBO, continuous-time weighting, and MDLM training and sampling.", milestone: "Project 1 code and writeup due at 8:30 a.m." },
    { date: "2026-09-30", displayDate: "Wed, Sep 30", type: "defense", title: "Project 1 Defenses", details: "Continuous Generative Models: 10-minute presentation and 20-minute Q&A per group." },
    { date: "2026-10-01", displayDate: "Thu, Oct 1", type: "break", title: "Fall Term Break", details: "October 1-4; no class." },
    { date: "2026-10-06", displayDate: "Tue, Oct 6", type: "lecture", title: "MDLM Implementation and Categorical Corruption", details: "MDLM implementation for DNA, language, and genomic results; token-dependent masking; discrete image generation; D3PM; absorbing and uniform corruption; cumulative categorical kernels; and the discrete diffusion ELBO." },
    { date: "2026-10-08", displayDate: "Thu, Oct 8", type: "exam", title: "Exam 1", details: "Material taught August 25-September 29: mathematical foundations, maps and changes of variables, ODEs and probability conservation, flow matching, SDEs, continuous diffusion, score matching, DDPMs, guidance, masked diffusion, and MDLM foundations." },
    { date: "2026-10-13", displayDate: "Tue, Oct 13", type: "lecture", title: "Continuous-Time Discrete Diffusion", details: "The continuous-time limit of categorical corruption, rate and generator matrices, the master equation, reverse-time rates, probability ratios, discrete scores, score entropy, and continuous-time training losses.", milestone: "Project 2 assigned" },
    { date: "2026-10-15", displayDate: "Thu, Oct 15", type: "lecture", title: "Block Diffusion and Guided Sequence Generation", details: "Blockwise factorization and training, the connection to autoregressive generation, classifier and classifier-free rate guidance, completion-based value estimates, PepTune, and Pareto-guided peptide generation." },
    { date: "2026-10-20", displayDate: "Tue, Oct 20", type: "lecture", title: "Discrete Flow Matching with Jump Rates", details: "Chosen probability paths, probability velocities, the master equation, conditional and marginal jump rates, endpoint posteriors, target rate matrices, the discrete flow-matching loss, and DNA sampling." },
    { date: "2026-10-22", displayDate: "Thu, Oct 22", type: "lecture", title: "Dirichlet and Fisher-Rao Flows", details: "Simplex-valued states, Dirichlet conditional paths and scores, endpoint-conditioned velocities, Fisher information geometry, square-root coordinates, spherical geodesics, and simplex flow matching." },
    { date: "2026-10-27", displayDate: "Tue, Oct 27", type: "lecture", title: "Gumbel-Softmax Flows and Multi-Objective Guidance", details: "Gumbel-max sampling, differentiable Gumbel-softmax paths, temperature schedules, pathwise velocities, straight-through estimation, MOG-DFM, cone-constrained edit directions, and rectified flow.", milestone: "Project 2 code and writeup due at 8:30 a.m." },
    { date: "2026-10-28", displayDate: "Wed, Oct 28", type: "defense", title: "Project 2 Defenses", details: "Discrete Generative Models Workshop: 10-minute presentation and 20-minute Q&A per group." },
    { date: "2026-10-29", displayDate: "Thu, Oct 29", type: "lecture", title: "Rectification and Multi-Objective Discrete Refinement", details: "Reflow and endpoint recoupling, dependence preservation, ReDi, reward-tilted target distributions, guided local proposals, Metropolis-Hastings and monotone acceptance, AReUReDi, Pareto preferences, and finite-neighborhood convergence." },
    { date: "2026-11-03", displayDate: "Tue, Nov 3", type: "lecture", title: "Flow Map Matching and Consistency", details: "Finite-interval flow maps, two-time conditioning, composition and tangent identities, Lagrangian and Eulerian losses, path consistency, Shortcut Models, and MeanFlow.", milestone: "Final project assigned" },
    { date: "2026-11-05", displayDate: "Thu, Nov 5", type: "lecture", title: "Latent and Discrete Flow Maps", details: "One-step and few-step generation, latent flow maps and decoder sensitivity, categorical representations, posterior means, cross-entropy and KL objectives, probability-valued teachers, and endpoint-error bounds." },
    { date: "2026-11-10", displayDate: "Tue, Nov 10", type: "lecture", title: "Posterior and Reward-Guided Flow Maps", details: "Reward-tilted endpoint distributions, posterior sampling, Diamond Maps, nested conditional velocities, value-gradient guidance, Meta Flow Maps, and stochastic guidance through Doob transforms." },
    { date: "2026-11-12", displayDate: "Thu, Nov 12", type: "lecture", title: "Expanding-State and Strong Stochastic Flow Maps", details: "Expansion and transport, generators with birth events, token insertion and variable-length generation, Brownian-path conditioning, shared-noise composition, pathwise refinement, interval drift and diffusion targets, sampling, and molecular applications." },
    { date: "2026-11-17", displayDate: "Tue, Nov 17", type: "review", title: "Exam 2 Review", details: "Cumulative review of material taught August 25-November 12, emphasizing discrete diffusion, discrete flow matching, guidance, and flow maps." },
    { date: "2026-11-19", displayDate: "Thu, Nov 19", type: "exam", title: "Exam 2", details: "Cumulative coverage through November 12: mathematical foundations, continuous flow and diffusion models, discrete diffusion, discrete flow matching, guidance, and flow maps." },
    { date: "2026-11-24", displayDate: "Tue, Nov 24", type: "break", title: "Thanksgiving Break", details: "November 24-29; no class." },
    { date: "2026-11-26", displayDate: "Thu, Nov 26", type: "break", title: "Thanksgiving Break", details: "November 26-29; no class." },
    { date: "2026-12-01", displayDate: "Tue, Dec 1", type: "lecture", title: "Optimal Transport and Continuous Schrödinger Bridges", details: "Monge maps, Kantorovich couplings, primal and dual transport, Wasserstein distances, dynamic transport, entropic regularization, Sinkhorn iterations, path-space relative entropy, stochastic control, Girsanov, Doob transforms, and iterative proportional fitting." },
    { date: "2026-12-03", displayDate: "Thu, Dec 3", type: "lecture", title: "Discrete Schrödinger Bridges and Course Synthesis", details: "Controlled jump processes, discrete Doob transforms, DDSBM, categorical bridge matching, reciprocal and Markov projections, iterative Markovian fitting, masked bridge models, BranchSBM, EntangledSBM, and course synthesis.", milestone: "Final project code and writeup due at 8:30 a.m." },
    { date: "2026-12-04", displayDate: "Fri, Dec 4", type: "defense", title: "Final Project Defenses", details: "ICML-Ready Paper: 10-minute presentation and 20-minute Q&A per group." }
  ]
};
