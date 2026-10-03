import { ExperienceItem, ProjectItem, EducationItem, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Vinoth Kumar Murugan',
  title: 'Aspiring Data Scientist / Data Analyst',
  tagline: 'Turning raw business datasets into actionable operational intelligence and predictive value.',
  phone: '+91 6379270746',
  email: 'vinoth.mroffcl@gmail.com',
  location: 'Tenkasi, Tamil Nadu - 627852',
  linkedinUrl: 'https://linkedin.com/in/vinoth-murugan-mr0ffcl',
  linkedinHandle: 'vinoth-murugan-mr0ffcl',
  objective:
    'Data science and analytics professional currently pursuing an M.Tech in Computer Science & Technology, building on a B.Tech in Artificial Intelligence and Data Science. Skilled in Python, SQL, and machine learning fundamentals, with hands-on experience turning raw business data into actionable insights through exploratory analysis, visualization, and predictive modeling. Certified in UI/UX from IBM and trained in Business Analytics and data-driven decision making, with a strong interest in applying statistical and analytical methods to solve real business problems as part of a cross-functional team.',
  languages: [
    { name: 'Tamil', fluency: 'Native' },
    { name: 'English', fluency: 'Professional Working Proficiency' }
  ],
  stats: [
    { label: 'Academic Standing', value: '7.7 CGPA', detail: 'B.Tech in AI & Data Science' },
    { label: 'Applied Internships', value: '2 Programs', detail: 'ROBOMATICS & Altitudes' },
    { label: 'Technical Domain', value: 'ML & Analytics', detail: 'Python, SQL, EDA, Modeling' },
    { label: 'Professional Design', value: 'IBM Certified', detail: 'UI/UX Design Principles' }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: 'robomatics',
    role: 'Business Analytics Intern',
    subtitle: 'Data-Driven Decision Making',
    company: 'ROBOMATICS',
    location: 'Coimbatore, India',
    period: 'Jul 2025',
    points: [
      'Applied rigorous business analytics techniques to interpret multi-dimensional datasets and support data-driven decision making for business scenarios.',
      'Practiced structuring raw operational data into actionable executive insights using analytical frameworks introduced during training.',
      'Identified critical performance metrics, trends, and seasonal variance patterns to advise inventory and sales optimization.'
    ],
    skills: ['Business Analytics', 'Python', 'Exploratory Data Analysis', 'Data Interpretation', 'Decision Frameworks'],
    metricHighlight: 'Synthesized high-variance datasets into structured strategic business reports'
  },
  {
    id: 'altitudes',
    role: 'Machine Learning Intern',
    subtitle: 'Applied Machine Learning Workflows',
    company: 'Altitudes',
    location: 'Coimbatore, India',
    period: 'Feb 2024 - Mar 2024',
    points: [
      'Gained hands-on exposure to core machine learning concepts, data pipelines, and modeling workflows as part of an applied internship program.',
      'Assisted in building, hyperparameter tuning, and evaluating foundational ML models under direct mentor guidance.',
      'Conducted feature scaling, categorical encoding, and validation experiments to benchmark predictive accuracy across algorithms.'
    ],
    skills: ['Machine Learning', 'Model Evaluation', 'Python (NumPy, Pandas)', 'Scikit-learn', 'Predictive Modeling'],
    metricHighlight: 'Developed end-to-end model evaluation pipelines for classification and regression'
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'sales-analytics',
    title: 'Sales Analytics on Retail Dataset',
    subtitle: 'End-to-End EDA & Revenue Driver Identification',
    date: 'Jul 2025',
    description:
      'Performed comprehensive end-to-end sales data analysis in Python and Google Colab, covering data cleaning, multi-variate exploratory analysis, and trend identification to surface actionable business insights for retail stakeholders.',
    highlights: [
      'Handled missing values, detected outliers with IQR methods, and normalized transaction records across regional outlets.',
      'Engineered temporal features (Day-of-Week, Month, Quarter) to identify revenue velocity and seasonal purchase cycles.',
      'Analyzed product basket affinities and category gross margins to pinpoint the top 20% revenue-generating SKUs.',
      'Interactive Colab notebook with parameterized charts and markdown narrative for non-technical stakeholders.'
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Google Colab', 'Matplotlib/Seaborn', 'EDA', 'Trend Analysis'],
    type: 'analytics',
    colabLinkText: 'https://colab.research.google.com',
    hasInteractiveDemo: true
  },
  {
    id: 'price-recommendation',
    title: 'Price Recommendation System for Online Sellers',
    subtitle: 'Data-Driven Pricing Engine under Naan Mudhalvan Initiative',
    date: 'May 2024',
    organization: 'Naan Mudhalvan Initiative',
    description:
      'Built a data-driven price recommendation system for online sellers under the Tamil Nadu Government Naan Mudhalvan initiative, deriving dynamic pricing insights from historical sales data to support merchant decision-making.',
    highlights: [
      'Constructed predictive modeling algorithms incorporating historical sales velocity, competitor price distributions, and customer rating bands.',
      'Formulated price elasticity estimation logic to prevent margin cannibalization while maximizing conversion probability.',
      'Designed an intuitive decision dashboard reflecting IBM-certified UI/UX heuristics so non-technical sellers could adopt pricing recommendations effortlessly.'
    ],
    tools: ['Machine Learning', 'Predictive Modeling', 'Recommendation Systems', 'Python', 'SQL', 'UI/UX Principles'],
    type: 'ml',
    hasInteractiveDemo: true
  }
];

export const educationHistory: EducationItem[] = [
  {
    degree: 'M.Tech, Computer Science & Technology (CST)',
    field: 'Postgraduate Degree',
    period: '2026 - 2028',
    status: 'Pursuing / Admitted'
  },
  {
    degree: 'B.Tech, Artificial Intelligence and Data Science',
    field: 'Undergraduate Degree',
    institution: 'Dhanalakshmi Srinivasan College of Engineering',
    location: 'Coimbatore, Tamil Nadu',
    period: '2022 - 2026',
    score: '7.7 CGPA',
    scoreLabel: 'CGPA'
  },
  {
    degree: 'Higher Secondary School (Class XII)',
    field: 'Computer Science Stream',
    period: 'Completed',
    score: '79.16%',
    scoreLabel: 'Percentage'
  },
  {
    degree: 'Secondary School (Class X)',
    field: 'General Studies',
    period: 'Completed',
    score: '73.00%',
    scoreLabel: 'Percentage'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Querying',
    iconName: 'Code',
    skills: [
      { name: 'Python (NumPy, Pandas)', level: 'Advanced', desc: 'Data cleaning, feature manipulation, and numerical computing' },
      { name: 'SQL', level: 'Proficient', desc: 'Complex joins, aggregations, window functions, and query optimization' },
      { name: 'Java', level: 'Intermediate', desc: 'Core OOP, algorithms, and modular software construction' },
      { name: 'ML Tools & Ecosystem', level: 'Proficient', desc: 'Scikit-learn, Colab, Jupyter, Matplotlib, Seaborn' },
      { name: 'Tableau', level: 'Proficient', desc: 'Executive BI dashboards, dimensional drill-downs, and trend views' }
    ]
  },
  {
    title: 'Data Analysis & Visualization',
    iconName: 'BarChart3',
    skills: [
      { name: 'Exploratory Data Analysis (EDA)', level: 'Advanced', desc: 'Distribution analysis, outlier detection, and correlation mapping' },
      { name: 'Business Analytics', level: 'Proficient', desc: 'Translating statistical patterns into actionable commercial strategy' },
      { name: 'Sales & Trend Analysis', level: 'Proficient', desc: 'Time-series decomposition, moving averages, and seasonality' },
      { name: 'Data Storytelling', level: 'Proficient', desc: 'Synthesizing technical outputs for cross-functional leadership' }
    ]
  },
  {
    title: 'Machine Learning & AI',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'AI/ML Fundamentals', level: 'Proficient', desc: 'Supervised & unsupervised learning, cost functions, gradient descent' },
      { name: 'Predictive Modeling', level: 'Proficient', desc: 'Linear/logistic regression, decision trees, random forests' },
      { name: 'Recommendation Systems', level: 'Proficient', desc: 'Collaborative filtering, content-based ranking, and price modeling' },
      { name: 'Model Evaluation', level: 'Proficient', desc: 'Cross-validation, RMSE, MAE, Precision/Recall, ROC-AUC' }
    ]
  },
  {
    title: 'Design & Human-Centered Thinking',
    iconName: 'Palette',
    skills: [
      { name: 'UI/UX Design Principles', level: 'Certified', desc: 'IBM SkillsBuild certified: wireframing, heuristic evaluation' },
      { name: 'Information Hierarchy', level: 'Advanced', desc: 'Designing high-density data visualizations that reduce cognitive load' },
      { name: 'User Empathy & Research', level: 'Proficient', desc: 'Understanding merchant and analyst workflows to build intuitive tools' }
    ]
  },
  {
    title: 'Core Professional Competencies',
    iconName: 'Sparkles',
    skills: [
      { name: 'Analytical Thinking', level: 'Core', desc: 'Decomposing ambiguous business problems into measurable hypotheses' },
      { name: 'Problem Solving', level: 'Core', desc: 'Root-cause analysis and methodical testing of analytical pipelines' },
      { name: 'Cross-Functional Collaboration', level: 'Core', desc: 'Working with engineers, domain leaders, and stakeholders' }
    ]
  }
];

export const certifications = [
  {
    title: 'UI/UX Design Certification',
    issuer: 'IBM SkillsBuild',
    date: 'Certified',
    description: 'Formal credential verifying mastery in design thinking, user persona definition, wireframing, usability heuristics, and interface architecture.'
  }
];
