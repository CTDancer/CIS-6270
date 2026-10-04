window.COURSE_DATA = {
  course: {
    code: "CIS 6270",
    title: "Discrete Generative Models",
    term: "Fall 2026",
    meeting: "Tuesdays and Thursdays, 8:30-10:00 a.m.",
    location: "Towne 337",
    canvas: "https://canvas.upenn.edu/courses/1948454",
    ed: "https://edstem.org/us/courses/104834",
    syllabusPdf: "assets/docs/cis6270-syllabus-fall-2026.pdf?v=20261004",
    updated: "October 4, 2026"
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
      resources: [
        { label: "Project Description", url: "assets/docs/projects/cis6270-fall-2026-project-1-description.pdf" },
        { label: "Paper Template", url: "assets/docs/projects/cis6270-fall-2026-project-1-paper-template.pdf" }
      ],
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

  exams: [
    {
      title: "Exam 1",
      weight: "15%",
      date: "2026-10-08",
      displayDate: "October 8, 2026",
      status: "Exam forthcoming",
      practiceStatus: "Available",
      description: "Material taught from August 25 through September 29: mathematical foundations, maps and changes of variables, ODEs and probability conservation, flow matching, SDEs, continuous diffusion, score matching, DDPMs, guidance, masked diffusion, and MDLM foundations",
      resources: [
        { label: "Practice Exam 1", url: "assets/docs/exams/cis6270-fall-2026-practice-exam-1.pdf" },
        { label: "Practice Exam 1 - Key", url: "assets/docs/exams/cis6270-fall-2026-practice-exam-1-key.pdf" }
      ]
    },
    {
      title: "Exam 2",
      weight: "15%",
      date: "2026-11-19",
      displayDate: "November 19, 2026",
      status: "Exam forthcoming",
      practiceStatus: "Forthcoming",
      description: "Cumulative coverage of all material taught from August 25 through November 10: mathematical foundations, continuous flow and diffusion models, discrete diffusion, discrete flow matching, guidance, and flow maps",
      resources: []
    }
  ],

  lectures: [
    {
      number: 1,
      dates: ["2026-08-25"],
      date: "August 25, 2026",
      title: "Probability Foundations",
      links: [
        { label: "Lecture Slides", url: "https://drive.google.com/file/d/1FgoZnsKtzF7MrtiGTjfjHGcIg-ZjM1If/view?usp=sharing" }
      ]
    },
    {
      number: 2,
      dates: ["2026-08-27"],
      date: "August 27, 2026",
      title: "The Probability Simplex and Linear Algebra",
      links: [
        { label: "Lecture Slides", url: "https://drive.google.com/file/d/1iL_cboLK6cDZ2BhmnQDEmLfnv9dEHDp3/view?usp=sharing" }
      ]
    },
    {
      number: 3,
      dates: ["2026-09-01"],
      date: "September 1, 2026",
      title: "Maps, Pushforwards, and Changes of Variables",
      links: [
        { label: "Lecture Slides", url: "https://drive.google.com/file/d/1OrRkfG8yWSYeYVsvjzQAeVE7e4f_flM6/view?usp=sharing" }
      ]
    },
    {
      number: 4,
      dates: ["2026-09-03"],
      date: "September 3, 2026",
      title: "Vector Fields, Probability Conservation, and Optimization",
      links: [
        { label: "Lecture Slides", url: "https://drive.google.com/file/d/1N5T95OchhhzpD-T4sp-1_aIgXdLn8jLq/view?usp=sharing" }
      ]
    },
    {
      number: 5,
      dates: ["2026-09-08"],
      date: "September 8, 2026",
      title: "ODEs and Continuous Probability Transport",
      links: [
        { label: "Lecture Slides", url: "https://drive.google.com/file/d/1Ls5MnTUZm7psBBNeFG5E7Zl2DT5HqQbb/view?usp=sharing" }
      ]
    },
    {
      number: 6,
      dates: ["2026-09-10"],
      date: "September 10, 2026",
      title: "Flow Matching",
      links: [
        { label: "Lecture Slides", url: "https://drive.google.com/file/d/1tS0H9ed8PqiY2uisT727j9Lq1azzzr5m/view?usp=sharing" }
      ]
    },
    {
      number: 7,
      dates: ["2026-09-15"],
      date: "September 15, 2026",
      title: "SDEs, Fokker-Planck, and Score Matching",
      links: [
        { label: "Lecture Slides", url: "https://drive.google.com/file/d/1JrgP_BM8Uyh8FyX_jBd-eerxuyKVBf-L/view?usp=sharing" }
      ]
    },
    {
      number: 8,
      dates: ["2026-09-17"],
      date: "September 17, 2026",
      title: "Reverse-Time Diffusion and DDPMs",
      links: [
        { label: "Lecture Slides", url: "https://drive.google.com/file/d/1DpLHERt83RKvvHXsIv2_qWhpFl20lPK5/view?usp=sharing" }
      ]
    },
    {
      number: 9,
      dates: ["2026-09-22"],
      date: "September 22, 2026",
      title: "Diffusion Paths and Probability-Flow ODEs",
      links: [
        { label: "Lecture Slides", url: "assets/docs/lectures/cis6270-lecture-3.3-2026-09-22.pdf" }
      ]
    },
    {
      number: 10,
      dates: ["2026-09-24"],
      date: "September 24, 2026",
      title: "Guidance for Continuous Generative Models",
      links: [
        {
          label: "Lecture Slides",
          url: "assets/docs/lectures/cis6270-lecture-3.4-2026-09-24.pdf"
        }
      ]
    },
    {
      number: 11,
      dates: ["2026-09-29"],
      date: "September 29, 2026",
      title: "Masked Diffusion and MDLM",
      links: [
        { label: "Lecture Slides", url: "assets/docs/lectures/cis6270-lecture-2026-09-29.pdf" }
      ]
    }
  ],

  schedule: [
    { date: "2026-08-25", displayDate: "Tue, Aug 25", type: "lecture", title: "Probability Foundations", details: "Course logistics and roadmap; continuous and discrete state spaces; probability distributions; expectation and Monte Carlo estimation; joint, marginal, and conditional probability; Bayes’ rule." },
    { date: "2026-08-27", displayDate: "Thu, Aug 27", type: "lecture", title: "The Probability Simplex and Linear Algebra", details: "Probability vectors and simplex geometry; logits and softmax; vectors and matrices; linear transformations; eigenvalues, eigenvectors, diagonalization, and matrix exponentials." },
    { date: "2026-09-01", displayDate: "Tue, Sep 1", type: "lecture", title: "Maps, Pushforwards, and Changes of Variables", details: "Maps, inverse maps, and composition; pushforward distributions; derivatives and Jacobians; determinants and local volume change; finite change of variables." },
    { date: "2026-09-03", displayDate: "Thu, Sep 3", type: "lecture", title: "Vector Fields, Probability Conservation, and Optimization", details: "Gradients, directional derivatives, vector fields, divergence, and the continuity equation; entropy, cross-entropy, KL divergence, constrained optimization, and the complete generative-model framework." },
    { date: "2026-09-08", displayDate: "Tue, Sep 8", type: "lecture", title: "ODEs and Continuous Probability Transport", details: "Ordinary differential equations, velocity fields, flow maps, Euler’s method, numerical integration, conservation of probability, the continuity equation, instantaneous change of variables, and continuous normalizing flows." },
    { date: "2026-09-10", displayDate: "Thu, Sep 10", type: "lecture", title: "Flow Matching", details: "Endpoint couplings, probability paths and interpolants, conditional and marginal velocities, the flow-matching regression objective, conditional-expectation derivation, sampling, neural parametrization, and implementation.", milestone: "Project 1 assigned" },
    { date: "2026-09-15", displayDate: "Tue, Sep 15", type: "lecture", title: "SDEs, Fokker-Planck, and Score Matching", details: "Flow-matching recap, Brownian motion, stochastic differential equations, drift and diffusion, Ito's lemma, the Fokker-Planck equation, variance-preserving diffusion, Gaussian scores, and denoising score matching." },
    { date: "2026-09-17", displayDate: "Thu, Sep 17", type: "lecture", title: "Reverse-Time Diffusion and DDPMs", details: "Noise prediction, score-driven sampling, reverse-time SDEs, DDPM forward transitions and posteriors, the learned reverse mean, time-conditioned networks, U-Nets, and DDPM training and sampling." },
    { date: "2026-09-22", displayDate: "Tue, Sep 22", type: "lecture", title: "Diffusion Paths and Probability-Flow ODEs", details: "Latent diffusion, AMP-Diffusion, alternative noise paths, probability-flow ODEs, deterministic sampling, and the connections among score matching, diffusion, and flow matching." },
    { date: "2026-09-24", displayDate: "Thu, Sep 24", type: "lecture", title: "Guidance for Continuous Generative Models", details: "Conditional scores, classifier guidance, classifier-free guidance, reward guidance, conditional flow matching, multi-objective guidance, time-dependent property reliability, and guided latent flow and diffusion models." },
    { date: "2026-09-29", displayDate: "Tue, Sep 29", type: "lecture", title: "Masked Diffusion and MDLM", details: "Discrete sequence corruption, absorbing masks, exact reverse reveal probabilities, clean-token prediction, the masked diffusion ELBO, continuous-time weighting, and MDLM training and sampling.", milestone: "Project 1 code and writeup due at 8:30 a.m." },
    { date: "2026-09-30", displayDate: "Wed, Sep 30", type: "defense", title: "Project 1 Defenses", details: "Continuous Generative Models: 10-minute presentation and 20-minute Q&A per group." },
    { date: "2026-10-01", displayDate: "Thu, Oct 1", type: "break", title: "Fall Term Break", details: "October 1-4; no class." },
    { date: "2026-10-06", displayDate: "Tue, Oct 6", type: "lecture", title: "Continuous-Time Markov Chains", details: "Jump rates and rate matrices, waiting times, the master equation, matrix exponentials and transition kernels, masking and uniform noise as rate matrices, stationary distributions, detailed balance, and time reversal." },
    { date: "2026-10-08", displayDate: "Thu, Oct 8", type: "exam", title: "Exam 1", details: "Material taught August 25-September 29: mathematical foundations, maps and changes of variables, ODEs and probability conservation, flow matching, SDEs, continuous diffusion, score matching, DDPMs, guidance, masked diffusion, and MDLM foundations." },
    { date: "2026-10-13", displayDate: "Tue, Oct 13", type: "lecture", title: "Reverse Rates, Guidance, and the Rate-Matching Loss", details: "Reverse rates as probability ratios, the denoiser parametrization, Doob's h-transform for guidance, the path KL as a sum of rate errors, the rate-matching likelihood bound, and sampling with correctors.", milestone: "Project 2 assigned" },
    { date: "2026-10-15", displayDate: "Thu, Oct 15", type: "lecture", title: "Discrete Diffusion Models and Guided Sequence Generation", details: "Structured and uniform corruption, score entropy, block diffusion, learned per-token rates, simplex diffusion, a full implementation for DNA, planner-guided sampling, guided peptide design, and any-length generation." },
    { date: "2026-10-20", displayDate: "Tue, Oct 20", type: "lecture", title: "Discrete Flow Matching with Jump Rates", details: "Probability paths, jump rates as probability velocities, the master equation as a continuity equation, couplings and mixture paths, conditional and marginal velocities, the denoiser and cross-entropy training, and sampling." },
    { date: "2026-10-22", displayDate: "Thu, Oct 22", type: "lecture", title: "Correctors, Kinetic-Optimal Paths, and Edit Flows", details: "Schedules and sample quality, backward-velocity correctors, multimodal discrete flows, kinetic-optimal paths, insertions and deletions with Edit Flows, simplex-valued states, and Dirichlet conditional paths." },
    { date: "2026-10-27", displayDate: "Tue, Oct 27", type: "lecture", title: "Dirichlet, Fisher-Rao, and Gumbel-Softmax Flows", details: "Dirichlet velocities, scores, and guidance, Fisher information geometry and spherical geodesics, Gumbel-max sampling, differentiable Gumbel-softmax paths, temperature schedules, and the replicator equation.", milestone: "Project 2 code and writeup due at 8:30 a.m." },
    { date: "2026-10-28", displayDate: "Wed, Oct 28", type: "defense", title: "Project 2 Defenses", details: "Discrete Generative Models Workshop: 10-minute presentation and 20-minute Q&A per group." },
    { date: "2026-10-29", displayDate: "Thu, Oct 29", type: "lecture", title: "Guidance, Rectification, and Multi-Objective Refinement", details: "Guidance as an exact h-transform, predictor-free and Taylor-approximated guidance, multi-objective guidance, reflow and endpoint recoupling, total correlation, reward-tilted targets, and Metropolis-Hastings refinement." },
    { date: "2026-11-03", displayDate: "Tue, Nov 3", type: "lecture", title: "Flow Maps and the Three Training Identities", details: "Finite-interval flow maps, the identity, cocycle, and tangent axioms, the Jacobian equation and Liouville's formula, the Lagrangian, Eulerian, and composition identities, and MeanFlow.", milestone: "Final project assigned" },
    { date: "2026-11-05", displayDate: "Thu, Nov 5", type: "lecture", title: "Consistency, Distillation, and Discrete Flow Maps", details: "Jacobian-vector products, shortcut and consistency models, trajectory error bounds, distillation and self-distillation, a worked implementation, the two-time denoiser on the simplex, and discrete flow maps." },
    { date: "2026-11-10", displayDate: "Tue, Nov 10", type: "lecture", title: "Stochastic, Expanding, and Guided Flow Maps", details: "Solution maps of SDEs, strong stochastic flow maps with the noise path as an input, expansion and transport with birth events, variable-length generation, reward-tilted endpoints, value-gradient guidance, and a synthesis." },
    { date: "2026-11-12", displayDate: "Thu, Nov 12", type: "lecture", title: "Optimal Transport, from Monge to Sinkhorn", details: "Couplings, the Monge and Kantorovich problems, duality and complementary slackness, Wasserstein distances, Brenier's theorem, the Benamou-Brenier dynamic formulation, entropic regularization, and the Sinkhorn algorithm." },
    { date: "2026-11-17", displayDate: "Tue, Nov 17", type: "review", title: "Exam 2 Review", details: "Cumulative review of all material taught from August 25 through November 10, with emphasis on discrete diffusion, discrete flow matching, guidance, and flow maps." },
    { date: "2026-11-19", displayDate: "Thu, Nov 19", type: "exam", title: "Exam 2", details: "Cumulative coverage of all material taught from August 25 through November 10: mathematical foundations, continuous flow and diffusion models, discrete diffusion, discrete flow matching, guidance, and flow maps." },
    { date: "2026-11-24", displayDate: "Tue, Nov 24", type: "break", title: "No class", details: "" },
    { date: "2026-11-26", displayDate: "Thu, Nov 26", type: "break", title: "Thanksgiving Break", details: "November 26-29; no class." },
    { date: "2026-12-01", displayDate: "Tue, Dec 1", type: "lecture", title: "Continuous Schrödinger Bridges", details: "Path-space relative entropy, the static bridge and Schrödinger potentials, Girsanov's formula, stochastic control and Hamilton-Jacobi-Bellman, Doob's h-transform, and iterative proportional and Markovian fitting." },
    { date: "2026-12-03", displayDate: "Thu, Dec 3", type: "lecture", title: "Discrete Schrödinger Bridges and Course Synthesis", details: "Simulation-free score and flow matching, bridges for jump processes, discrete Doob transforms, bridge matching on graphs and categorical sequences, branched and entangled bridges, and course synthesis.", milestone: "Final project code and writeup due at 8:30 a.m." },
    { date: "2026-12-04", displayDate: "Fri, Dec 4", type: "defense", title: "Final Project Defenses", details: "ICML-Ready Paper: 10-minute presentation and 20-minute Q&A per group." }
  ]
};
