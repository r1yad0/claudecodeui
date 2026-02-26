export interface Step {
  title: string;
  description: string;
  documents?: string[];
  tips?: string;
}

export interface Guide {
  name: string;
  description: string;
  steps: Step[];
  requirements: string[];
  timeframe: string;
  cost: string;
  difficulty: 'Easy' | 'Moderate' | 'Complex';
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  region: string;
  tagline: string;
  overview: string;
  currency: string;
  language: string;
  businessClimate: string;
  highlights: string[];
  businessTypes: Guide[];
  residencyOptions: Guide[];
  citizenshipPathways: Guide[];
}

export const countries: Country[] = [
  {
    code: 'GH',
    name: 'Ghana',
    flag: '🇬🇭',
    region: 'Africa',
    tagline: 'Gateway to West Africa',
    overview: 'Ghana is one of Africa\'s most stable democracies with a growing economy, English as the official language, and a welcoming environment for foreign investors.',
    currency: 'Ghanaian Cedi (GHS)',
    language: 'English',
    businessClimate: 'Pro-business with a one-stop registration portal (ORC) and investor-friendly policies.',
    highlights: ['No minimum capital for foreign companies', 'English-speaking workforce', 'Stable democracy', 'Fast-growing digital economy'],
    businessTypes: [
      {
        name: 'Limited Liability Company (LLC)',
        description: 'The most common structure for foreign investors. Requires at least 2 directors and a local address.',
        steps: [
          {
            title: 'Reserve your company name',
            description: 'Search and reserve your business name through the Office of the Registrar of Companies (ORC) online portal at orc.gov.gh.',
            documents: ['Proposed company name', 'Alternative names (2-3 options)'],
            tips: 'Names cannot be identical or too similar to existing companies. Include the legal structure (e.g., "Ltd" or "Limited").'
          },
          {
            title: 'Prepare incorporation documents',
            description: 'Draft and notarize the Regulations (Articles of Association) and prepare the required forms.',
            documents: ['Form 3 (Registration of company)', 'Regulations/Articles of Association', 'Passport copies of all directors and shareholders', 'Proof of address for all directors'],
            tips: 'You can hire a local lawyer or a company secretarial firm to draft the Regulations.'
          },
          {
            title: 'Register with the ORC',
            description: 'Submit all documents to the Office of the Registrar of Companies online or in person at any ORC service center.',
            documents: ['Completed Form 3', 'Notarized Regulations', 'ID documents of directors and shareholders', 'Proof of registered office address in Ghana'],
            tips: 'Online submissions via orc.gov.gh are faster. Pay the registration fee at the time of submission.'
          },
          {
            title: 'Obtain a Ghana Investment Promotion Centre (GIPC) certificate',
            description: 'Foreign-owned businesses must register with GIPC and meet minimum capital requirements.',
            documents: ['Certificate of Incorporation', 'Audited accounts or source of funds proof', 'Business plan', 'GIPC application form'],
            tips: 'Minimum equity capital for foreign businesses is $500,000 USD (joint ventures with Ghanaians require $200,000 USD).'
          },
          {
            title: 'Register for Tax (TIN)',
            description: 'Obtain a Tax Identification Number from the Ghana Revenue Authority (GRA).',
            documents: ['Certificate of Incorporation', 'Directors\' IDs and TINs', 'Company bank account details'],
          },
          {
            title: 'Open a corporate bank account',
            description: 'Open a Ghana cedis business account at any commercial bank in Ghana.',
            documents: ['Certificate of Incorporation', 'Certificate to Commence Business', 'Board resolution', 'Directors\' passports and TINs'],
          },
          {
            title: 'Register for VAT (if applicable)',
            description: 'Businesses with annual turnover exceeding GHS 200,000 must register for VAT with the GRA.',
            documents: ['TIN certificate', 'Certificate of Incorporation', 'Bank details'],
          }
        ],
        requirements: ['Minimum 2 directors (can be non-residents)', 'Registered office address in Ghana', '$500,000 USD minimum capital for wholly foreign-owned businesses', 'Local company secretary recommended'],
        timeframe: '2–4 weeks',
        cost: '$1,500–$3,000 USD (registration fees, legal fees, and GIPC registration)',
        difficulty: 'Moderate'
      },
      {
        name: 'Sole Proprietorship',
        description: 'Simplest business structure, owned by one person. Best for small businesses with lower capital requirements.',
        steps: [
          {
            title: 'Choose a business name',
            description: 'Search for name availability on the ORC portal and reserve your preferred name.',
            documents: ['Proposed business name'],
          },
          {
            title: 'Register with ORC',
            description: 'Complete Form A (Business Name Registration) and submit to the ORC.',
            documents: ['Form A', 'National ID or passport', 'Proof of address'],
            tips: 'This can be done entirely online at orc.gov.gh.'
          },
          {
            title: 'Obtain a Tax Identification Number',
            description: 'Register with Ghana Revenue Authority for a TIN.',
            documents: ['Business registration certificate', 'Personal ID'],
          },
          {
            title: 'Register with local government',
            description: 'Register your business with the local municipal or district assembly where it operates.',
            documents: ['ORC registration certificate', 'TIN', 'Proof of business location'],
          }
        ],
        requirements: ['Must be an individual', 'No minimum capital requirement', 'Not available to foreigners (must have a Ghanaian partner or use LLC structure)'],
        timeframe: '1–3 days',
        cost: '$50–$150 USD',
        difficulty: 'Easy'
      },
      {
        name: 'Free Zone Enterprise',
        description: 'Operate in a designated Free Zone with 100% foreign ownership, tax exemptions for 10 years, and duty-free imports.',
        steps: [
          {
            title: 'Apply to Ghana Free Zones Authority (GFZA)',
            description: 'Submit an application to the GFZA with your business proposal and project plan.',
            documents: ['Application form', 'Business plan', 'Financial projections', 'Passport copies of directors'],
          },
          {
            title: 'Receive a Free Zone license',
            description: 'GFZA reviews your application (usually 21 days) and issues a license if approved.',
            documents: ['GFZA approval letter'],
            tips: 'At least 70% of your production must be exported.'
          },
          {
            title: 'Register with the ORC',
            description: 'Incorporate your company with the ORC using the GFZA license.',
            documents: ['GFZA license', 'Articles of Association', 'Director IDs'],
          },
          {
            title: 'Set up in a Free Zone enclave or Single Factory Zone',
            description: 'Establish your operations within an approved free zone enclave or apply for a Single Factory designation.',
            documents: ['Lease agreement or property documents', 'GFZA license'],
          }
        ],
        requirements: ['Minimum investment of $100,000 USD', 'Must export at least 70% of output', 'Must operate in an approved free zone area'],
        timeframe: '4–8 weeks',
        cost: '$2,000–$5,000 USD (application and registration fees)',
        difficulty: 'Moderate'
      }
    ],
    residencyOptions: [
      {
        name: 'Investor Residence Permit',
        description: 'For foreign nationals who have invested in a Ghana-registered business. Grants a renewable resident permit linked to the business.',
        steps: [
          {
            title: 'Register your business and obtain GIPC certificate',
            description: 'Ensure your company is registered and you hold a valid GIPC certificate as a foreign investor.',
            documents: ['GIPC certificate', 'Certificate of Incorporation'],
          },
          {
            title: 'Apply to Ghana Immigration Service (GIS)',
            description: 'Submit a Residence Permit application at the GIS office or via their online portal.',
            documents: ['Valid passport (6+ months validity)', 'GIPC certificate', 'Company registration documents', 'Passport-size photos', 'Yellow fever vaccination card', 'Police clearance from home country', 'Medical report'],
          },
          {
            title: 'Pay application fees',
            description: 'Pay the applicable residence permit fees at the GIS cashier.',
            tips: 'Fees vary depending on nationality and permit duration (1-year or 2-year).'
          },
          {
            title: 'Attend biometric capture',
            description: 'Visit the GIS office for fingerprinting and photograph.',
          },
          {
            title: 'Collect your Residence Permit',
            description: 'Return to GIS to collect your permit card upon notification.',
          }
        ],
        requirements: ['Valid GIPC certificate', 'Minimum $500,000 USD investment (or $200,000 USD in joint venture)', 'Clean criminal record', 'Valid health certificate'],
        timeframe: '4–8 weeks',
        cost: '$1,000–$2,500 USD per year (government fees)',
        difficulty: 'Moderate'
      }
    ],
    citizenshipPathways: [
      {
        name: 'Naturalization',
        description: 'After residing legally in Ghana for 5 years, you can apply for citizenship by naturalization.',
        steps: [
          {
            title: 'Maintain legal residency for 5 years',
            description: 'Hold a valid residence permit continuously for at least 5 years (with some exceptions for those married to Ghanaians — 2 years).',
            documents: ['All previous residence permit cards', 'Entry stamps in passport'],
          },
          {
            title: 'Obtain a police clearance certificate',
            description: 'Get a clearance from Ghana Police Service and your home country.',
            documents: ['Application form', 'Passport copy', 'Proof of address'],
          },
          {
            title: 'Submit naturalization application to Ministry of Interior',
            description: 'File the naturalization application with supporting documents.',
            documents: ['Application form', 'Residence permits', 'Birth certificate', 'Marriage certificate (if applicable)', 'Police clearance', 'Proof of income or financial self-sufficiency', 'Language proficiency (English is official)'],
          },
          {
            title: 'Attend interview',
            description: 'Attend a citizenship interview at the Ministry of Interior.',
          },
          {
            title: 'Oath of allegiance',
            description: 'If approved, take an oath of allegiance and receive your citizenship certificate.',
          }
        ],
        requirements: ['5 years legal residency (2 years if married to a Ghanaian)', 'Good character and clean criminal record', 'Knowledge of English', 'Renunciation of previous citizenship may be required (Ghana generally does not allow dual citizenship except for diaspora)'],
        timeframe: '6–24 months after eligibility',
        cost: '$500–$1,500 USD (government fees)',
        difficulty: 'Complex'
      },
      {
        name: 'Right of Abode (African Diaspora)',
        description: 'Ghana offers the "Right of Abode" to people of African descent, allowing them to live and work indefinitely without a residence permit.',
        steps: [
          {
            title: 'Determine eligibility',
            description: 'You must be of African descent (including African Americans, Afro-Caribbeans, etc.).',
          },
          {
            title: 'Apply to the Ghana Immigration Service',
            description: 'Submit the Right of Abode application with proof of African ancestry.',
            documents: ['Application form', 'Passport', 'Proof of African heritage (birth certificates, DNA ancestry test, etc.)', 'Passport photos', 'Medical report', 'Police clearance'],
          },
          {
            title: 'Pay fees and await approval',
            description: 'Pay the application fees and wait for GIS to process your application.',
            tips: 'This is a permanent status — not citizenship — but grants indefinite right to live and work in Ghana.'
          }
        ],
        requirements: ['Proof of African descent', 'Valid passport', 'Medical certificate', 'Police clearance'],
        timeframe: '4–12 weeks',
        cost: '$500–$1,000 USD',
        difficulty: 'Moderate'
      }
    ]
  },
  {
    code: 'AE',
    name: 'UAE (Dubai)',
    flag: '🇦🇪',
    region: 'Middle East',
    tagline: 'Global Hub for Business & Lifestyle',
    overview: 'The UAE, particularly Dubai, is one of the world\'s most business-friendly destinations. With 0% income tax, world-class infrastructure, and over 40 free zones, it\'s a top choice for entrepreneurs and investors seeking residency through business.',
    currency: 'UAE Dirham (AED)',
    language: 'Arabic (English widely used)',
    businessClimate: 'Exceptional — 0% personal and corporate income tax (outside oil sector), cutting-edge infrastructure, and strategic location between East and West.',
    highlights: ['0% personal income tax', '100% foreign ownership in free zones and mainland', 'Golden Visa residency by investment', 'World-class infrastructure', '40+ free zones'],
    businessTypes: [
      {
        name: 'Free Zone Company (FZCO / FZE)',
        description: 'Most popular option for foreign entrepreneurs. 100% foreign ownership, easy setup, and allows you to sponsor a UAE residence visa.',
        steps: [
          {
            title: 'Choose your free zone',
            description: 'Select the free zone that fits your business activity. Popular ones: DMCC (trading/commodities), DIFC (financial services), Dubai Internet City (tech), IFZA (general), Sharjah Free Zone (cost-effective).',
            tips: 'IFZA and Sharjah are the most affordable. DMCC and DIFC offer prestige and networking opportunities.'
          },
          {
            title: 'Select your business activity',
            description: 'Define your licensed activities. Each free zone has a list of permitted activities. You can usually add multiple related activities.',
            documents: ['List of intended business activities'],
          },
          {
            title: 'Choose a company name',
            description: 'Select a compliant name — no offensive words, no reference to political/religious bodies, must include the legal suffix (FZE for sole owner, FZCO for 2+ shareholders).',
          },
          {
            title: 'Submit application and documents',
            description: 'Submit your application to the free zone authority along with required documents.',
            documents: ['Passport copy (all shareholders/directors)', 'Passport-size photo', 'Proof of address', 'Business plan (some free zones)', 'No Objection Certificate (if employed in UAE)'],
          },
          {
            title: 'Pay license fees and receive your license',
            description: 'Pay the annual license fee. Upon approval (often 3–7 days) you\'ll receive your trade license digitally.',
            tips: 'License costs range from AED 5,500 (~$1,500 USD) at affordable free zones to AED 50,000+ at premium ones.'
          },
          {
            title: 'Open a corporate bank account',
            description: 'Open a business bank account. Emirates NBD, Mashreq, RAKBank, and ADCB are common choices. Fintech options like Wio, Pyypl, or Wise Business are faster to open.',
            documents: ['Trade license', 'Memorandum of Association', 'Shareholder passports', 'Business plan or proof of transactions'],
            tips: 'Traditional bank accounts can take 4–8 weeks. Fintech accounts open in days but have limits.'
          },
          {
            title: 'Apply for your UAE residence visa',
            description: 'With your trade license, apply for a 2-year or 3-year UAE residence visa as an investor/partner.',
            documents: ['Trade license', 'Passport', 'Emirates ID application', 'Medical fitness test', 'Health insurance'],
          }
        ],
        requirements: ['Valid passport', 'No UAE criminal record', 'Minimum capital varies by free zone (often AED 50,000–1,000 USD in practice)', 'Physical or flexi-desk office space (usually included in license)'],
        timeframe: '1–2 weeks (license); 3–6 weeks (with visa)',
        cost: 'AED 12,000–50,000/year ($3,300–$13,600 USD) including license and visa',
        difficulty: 'Easy'
      },
      {
        name: 'Mainland LLC (Limited Liability Company)',
        description: 'A mainland company allows you to trade directly across the UAE without restrictions. Since 2021, 100% foreign ownership is allowed in most sectors.',
        steps: [
          {
            title: 'Choose a trade name and activity',
            description: 'Reserve your trade name via the Department of Economy and Tourism (DET) for Dubai mainland.',
            documents: ['Proposed trade names (3 options)', 'Passport copies of shareholders'],
          },
          {
            title: 'Get initial approval from DET',
            description: 'Submit your application for initial approval of your business activity and company name.',
            documents: ['Application form', 'Passport copies', 'Visa copies (if in UAE)'],
          },
          {
            title: 'Lease office space and get Ejari',
            description: 'Sign a lease for physical office space (minimum 200 sq ft) and register it via Ejari (the tenancy contract system).',
            documents: ['Signed tenancy contract', 'Landlord documents'],
            tips: 'Co-working spaces or Flexi-offices are accepted in some activities to reduce costs.'
          },
          {
            title: 'Draft and notarize the Memorandum of Association (MOA)',
            description: 'Have a lawyer draft and notarize the MOA at a Dubai Notary Public.',
            documents: ['MOA', 'Passport copies of all shareholders/directors', 'Shareholder signatures required in person or via POA'],
          },
          {
            title: 'Submit for final DET approval and pay fees',
            description: 'Submit all documents to DET and pay the license issuance fees.',
            documents: ['Initial approval', 'Notarized MOA', 'Ejari certificate', 'External approvals (if required by activity)'],
          },
          {
            title: 'Collect trade license',
            description: 'Receive your trade license (usually 1–3 business days after final submission).',
          },
          {
            title: 'Apply for investor residence visa',
            description: 'Apply for a 3-year residence visa as a company partner/investor.',
            documents: ['Trade license', 'Passport', 'Health insurance', 'Medical fitness test'],
          }
        ],
        requirements: ['Minimum 51% UAE national shareholder required for certain restricted activities (most sectors now allow 100% foreign ownership)', 'Physical office space required', 'External government approvals for regulated activities (healthcare, education, etc.)'],
        timeframe: '2–4 weeks',
        cost: 'AED 15,000–40,000 ($4,000–$11,000 USD) for license + AED 15,000–25,000 for office',
        difficulty: 'Moderate'
      }
    ],
    residencyOptions: [
      {
        name: 'Investor Residence Visa (2-Year)',
        description: 'Get a UAE residence visa by registering a company in a free zone or mainland. Valid for 2–3 years, renewable.',
        steps: [
          {
            title: 'Register your business',
            description: 'Obtain a UAE trade license (free zone or mainland) as described in the Business Setup guides.',
          },
          {
            title: 'Apply for an entry permit',
            description: 'Apply for a residence visa entry permit through your free zone authority or a typing center (Amer Center).',
            documents: ['Trade license', 'Passport', 'Photo'],
          },
          {
            title: 'Enter the UAE or status change',
            description: 'If outside UAE, enter on the entry permit. If already in UAE, do a status change without leaving.',
          },
          {
            title: 'Complete medical fitness test',
            description: 'Visit a MOHAP-approved clinic for blood tests and chest X-ray.',
            documents: ['Passport', 'Entry permit copy'],
            tips: 'Results are usually ready in 1–3 days.'
          },
          {
            title: 'Apply for Emirates ID (EID)',
            description: 'Submit an Emirates ID application at an ICA-approved center or via the ICA app (UAE PASS).',
            documents: ['Passport', 'Entry permit', 'Medical results', 'Photo'],
          },
          {
            title: 'Receive visa stamp and Emirates ID',
            description: 'Your passport gets stamped with the residence visa, and your Emirates ID is mailed to your registered address (or collected at the typing center).',
            tips: 'Emirates ID is your primary ID in the UAE for banking, utilities, and services.'
          }
        ],
        requirements: ['Valid trade license', 'Valid passport (6+ months validity)', 'Clean health record (no HIV, TB, Hepatitis B/C)', 'Health insurance (mandatory)'],
        timeframe: '3–6 weeks',
        cost: 'AED 3,000–6,000 ($820–$1,640 USD) government fees for visa + health insurance',
        difficulty: 'Easy'
      },
      {
        name: 'Golden Visa (10-Year Residency)',
        description: 'A long-term, renewable 10-year residency visa for investors, entrepreneurs, and skilled professionals. No need to renew every 2–3 years.',
        steps: [
          {
            title: 'Determine your eligibility category',
            description: 'Golden Visa is available to: real estate investors (AED 2M+ property), business investors/entrepreneurs, outstanding talents (doctors, scientists, artists), and people with specialized degrees.',
            tips: 'For entrepreneurs: you need a startup established in UAE with minimum capital of AED 500,000 or you must have a technology startup approved by an accredited UAE incubator.'
          },
          {
            title: 'Prepare documentation',
            description: 'Gather documents based on your category.',
            documents: ['Passport', 'Valid UAE visa (if applicable)', 'Proof of investment (property title deed, share certificate, or trade license)', 'Bank statements', 'Proof of income or assets'],
          },
          {
            title: 'Apply via ICA (Federal Authority for Identity) or GDRFA (Dubai)',
            description: 'Submit your Golden Visa application online via the ICA smart services portal or through GDRFA Dubai.',
            tips: 'You can also apply via the UAE\'s official Golden Visa portal or through a PRO/immigration consultant.'
          },
          {
            title: 'Complete medical test and biometrics',
            description: 'Complete the standard medical fitness test and biometric capture.',
          },
          {
            title: 'Receive Golden Visa and Emirates ID',
            description: 'Your 10-year residence visa is stamped and your Emirates ID is issued.',
            tips: 'Family members (spouse and children under 18 for daughters, under 18 or studying for sons) can be sponsored on your Golden Visa.'
          }
        ],
        requirements: ['AED 2,000,000 (~$545,000 USD) in real estate OR AED 500,000+ in a business OR approval from an accredited incubator for startups OR skilled professional in a priority field'],
        timeframe: '2–8 weeks',
        cost: 'AED 2,800–4,800 ($760–$1,300 USD) government fees (investment not included)',
        difficulty: 'Moderate'
      }
    ],
    citizenshipPathways: [
      {
        name: 'UAE Citizenship by Exceptional Contribution',
        description: 'UAE citizenship is rarely granted and is by nomination only. It is extended to exceptional investors, professionals, and specialized talents at the discretion of UAE leadership.',
        steps: [
          {
            title: 'Understand the eligibility',
            description: 'UAE citizenship is only granted by nomination — you cannot apply directly. It targets: major investors (AED 10M+ investment), doctors/scientists/researchers of exceptional standing, artists and cultural contributors of high renown.',
          },
          {
            title: 'Be nominated by a UAE authority',
            description: 'A UAE ruler, Cabinet member, or designated government entity nominates you based on your contribution to the country.',
          },
          {
            title: 'Submit required documents upon nomination',
            description: 'If nominated, you\'ll be asked to submit comprehensive documentation.',
            documents: ['Passport', 'Residence visa history', 'Evidence of investment or contribution', 'Medical certificate', 'Security clearance'],
          },
          {
            title: 'Receive citizenship',
            description: 'If approved, you receive a UAE passport and national identity card. Dual citizenship is allowed as the UAE permits you to retain your original nationality.',
            tips: 'UAE citizenship grants a highly ranked passport (180+ countries visa-free) and full rights as a UAE national.'
          }
        ],
        requirements: ['No direct application — invitation/nomination only', 'Exceptional investment, talent, or contribution to UAE', 'Clean criminal record', 'Long-term UAE residency history preferred'],
        timeframe: 'Not predictable (invitation-based)',
        cost: 'Not applicable (not a purchasable program)',
        difficulty: 'Complex'
      }
    ]
  },
  {
    code: 'PT',
    name: 'Portugal',
    flag: '🇵🇹',
    region: 'Europe',
    tagline: 'EU Access, Affordable Living, Atlantic Charm',
    overview: 'Portugal offers one of Europe\'s most attractive residency and citizenship pathways for investors and remote workers. As an EU member, a Portuguese passport grants access to live and work across 27 EU countries.',
    currency: 'Euro (EUR)',
    language: 'Portuguese (English widely spoken)',
    businessClimate: 'Growing startup ecosystem, NHR tax regime for new residents, EU single market access.',
    highlights: ['EU member — passport grants 27-country access', 'NHR tax regime (10% flat tax on foreign income for 10 years)', 'Golden Visa for residency by investment', 'Path to citizenship in 5 years', 'Affordable cost of living vs. Western Europe'],
    businessTypes: [
      {
        name: 'Lda (Sociedade por Quotas) — Private Limited Company',
        description: 'The most common business structure in Portugal, equivalent to an LLC. Minimum capital of just €1.',
        steps: [
          {
            title: 'Get a Portuguese Tax Number (NIF)',
            description: 'Obtain a NIF (Número de Identificação Fiscal) from a Portuguese tax office (Finanças) or via a fiscal representative if non-resident.',
            documents: ['Passport', 'Proof of address from home country'],
            tips: 'Non-residents need to appoint a fiscal representative to obtain a NIF remotely.'
          },
          {
            title: 'Open a Portuguese bank account',
            description: 'Open a business bank account to deposit share capital.',
            documents: ['NIF', 'Passport', 'Proof of address'],
            tips: 'Millennium BCP, Caixa Geral de Depósitos, and Activobank are popular options. Online banks like Wise or Revolut Business also work for some needs.'
          },
          {
            title: 'Register using "Empresa na Hora" (Company in One Hour)',
            description: 'Portugal\'s "Empresa na Hora" service allows you to register a company in a single day at a participating registration office (IRN) or via a notary.',
            documents: ['NIFs of all shareholders and directors', 'Identification documents', 'Proof of share capital deposit'],
            tips: 'You can choose from pre-approved company names or bring your own. The €360 fee is all-in.'
          },
          {
            title: 'Register with the Tax Authority (AT)',
            description: 'Your company is automatically registered with the Tax Authority upon incorporation. You\'ll receive a company NIF.',
          },
          {
            title: 'Register for VAT (if applicable)',
            description: 'If your annual turnover will exceed €13,500, register for VAT (IVA) with Finanças.',
            documents: ['Company NIF', 'Director NIF', 'Bank account details'],
          },
          {
            title: 'Register employees with Social Security',
            description: 'If hiring employees, register with the Social Security Institute (IGFSS).',
          }
        ],
        requirements: ['At least 1 shareholder and 1 director (can be the same person)', 'Minimum capital €1 (recommended €5,000)', 'Portuguese NIF for all founders', 'Registered office address in Portugal'],
        timeframe: '1–5 days (via Empresa na Hora)',
        cost: '€360 (Empresa na Hora) + NIF and bank account costs',
        difficulty: 'Easy'
      }
    ],
    residencyOptions: [
      {
        name: 'D8 Visa — Digital Nomad / Remote Work Visa',
        description: 'For non-EU citizens who work remotely for foreign companies or clients. Grants a 1-year residence permit, renewable.',
        steps: [
          {
            title: 'Obtain a Portuguese NIF',
            description: 'Get your Portuguese tax number via a fiscal representative or in person at a Finanças office.',
          },
          {
            title: 'Open a Portuguese bank account',
            description: 'Required for visa application.',
          },
          {
            title: 'Prepare documentation',
            description: 'Gather all required documents for your D8 visa application.',
            documents: ['Valid passport (6+ months validity)', 'Proof of remote work or freelance income (contracts, employment letter)', 'Proof of sufficient income (minimum 4x the Portuguese minimum wage ≈ €3,480/month)', 'Health insurance valid in Portugal', 'Criminal background check (apostilled)', 'Proof of accommodation in Portugal'],
          },
          {
            title: 'Apply at a Portuguese consulate',
            description: 'Submit your application at the Portuguese consulate or embassy in your home country.',
            tips: 'Book appointments early — some consulates have long waiting lists (8–16 weeks).'
          },
          {
            title: 'Enter Portugal and schedule SEF/AIMA appointment',
            description: 'Once in Portugal, schedule an appointment with AIMA (the successor to SEF) to complete your residence permit application.',
          },
          {
            title: 'Receive your Residence Permit card',
            description: 'Attend your AIMA appointment, provide biometrics, and receive your Cartão de Residência.',
          }
        ],
        requirements: ['Provable remote work or freelance income from non-Portuguese sources', 'Income ≥ €3,480/month (4x minimum wage)', 'Health insurance', 'Criminal background check', 'Proof of accommodation'],
        timeframe: '2–6 months (consulate processing + AIMA wait)',
        cost: '€90 visa fee + €320 residence permit fee + legal/admin costs',
        difficulty: 'Moderate'
      },
      {
        name: 'Golden Visa (ARI)',
        description: 'Portugal\'s investor visa grants residency in exchange for qualifying investments. Leads to citizenship in 5 years.',
        steps: [
          {
            title: 'Choose a qualifying investment',
            description: 'As of 2024, qualifying investments include: €500,000+ in investment funds (most popular), €500,000+ in scientific research, €250,000+ in cultural heritage or arts support, creation of 10+ jobs.',
            tips: 'Real estate is no longer a qualifying investment for new applications (as of Oct 2023 reforms). Fund investments are the most popular current option.'
          },
          {
            title: 'Obtain a Portuguese NIF',
            description: 'Obtain your NIF — required before making the investment.',
          },
          {
            title: 'Open a Portuguese bank account',
            description: 'Make your investment through a Portuguese bank account.',
          },
          {
            title: 'Make the qualifying investment',
            description: 'Transfer funds and complete your investment. Get documentation proving the investment.',
            documents: ['Investment certificate', 'Fund subscription agreement', 'Proof of transfer'],
          },
          {
            title: 'Submit Golden Visa application via ARI portal',
            description: 'Apply online via AIMA\'s ARI (Autorização de Residência para Investimento) portal.',
            documents: ['Passport', 'NIF', 'Proof of investment', 'Criminal background check (apostilled)', 'Health insurance', 'Proof of legal entry into Portugal'],
          },
          {
            title: 'Attend AIMA biometrics appointment',
            description: 'Schedule and attend your in-person biometrics appointment in Portugal.',
          },
          {
            title: 'Receive Golden Visa residence permit',
            description: 'Your 2-year renewable Golden Visa is issued. You only need to spend 7 days/year in Portugal to maintain it.',
          }
        ],
        requirements: ['Qualifying investment (€250,000–€500,000)', 'Clean criminal record', 'NIF and Portuguese bank account', 'Valid passport', 'Spend minimum 7 days/year in Portugal'],
        timeframe: '6–18 months',
        cost: '€533 application fee + €5,324 issuance fee (per person) + investment amount',
        difficulty: 'Moderate'
      }
    ],
    citizenshipPathways: [
      {
        name: 'Naturalization (5-Year Residency)',
        description: 'After 5 years of legal residency (or 5 years of Golden Visa), you can apply for Portuguese citizenship — one of the world\'s most powerful passports (EU + 185+ visa-free countries).',
        steps: [
          {
            title: 'Maintain 5 years of legal residency',
            description: 'Hold a valid Portuguese residence permit for 5 continuous years. For Golden Visa holders, maintain the permit (no minimum stay required).',
          },
          {
            title: 'Prove basic Portuguese language proficiency',
            description: 'Pass a Portuguese language test (A2 level — basic). You can take the CIPLE exam or provide proof of attending a Portuguese language course.',
            tips: 'A2 is a very basic level — conversational basics and simple written understanding.'
          },
          {
            title: 'Gather required documents',
            description: 'Compile your citizenship application documents.',
            documents: ['Valid passport', 'Residence permit', 'Criminal record certificates (Portugal + home country)', 'Proof of ties to Portugal (tax returns, bank statements, lease)', 'Portuguese language certificate (A2+)', 'Birth certificate (apostilled and translated)'],
          },
          {
            title: 'Submit application to the Conservatória dos Registos Centrais',
            description: 'File your citizenship application online via the IRN portal or in person.',
          },
          {
            title: 'Attend oath ceremony',
            description: 'If approved, take an oath of allegiance to Portugal and receive your citizenship certificate.',
          },
          {
            title: 'Apply for Portuguese passport',
            description: 'Apply for your passport at a Loja do Cidadão or consulate.',
            tips: 'Portugal allows dual citizenship — you do NOT need to give up your original nationality.'
          }
        ],
        requirements: ['5 years legal residency (or Golden Visa)', 'A2 Portuguese language certificate', 'Clean criminal record in Portugal', 'Sufficient ties to Portugal (tax registration, etc.)'],
        timeframe: '12–36 months after applying (application processing is slow)',
        cost: '€175 application fee + language test costs (~€150)',
        difficulty: 'Moderate'
      }
    ]
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    region: 'Asia',
    tagline: 'Asia\'s Business Capital',
    overview: 'Singapore consistently ranks as the world\'s easiest place to do business. A strategic hub for Asia with low tax rates, strong rule of law, and world-class infrastructure.',
    currency: 'Singapore Dollar (SGD)',
    language: 'English (official), Mandarin, Malay, Tamil',
    businessClimate: 'World\'s #1 business environment (World Bank). 17% corporate tax, efficient government, top-tier banking.',
    highlights: ['Ranked top globally for ease of doing business', '17% corporate tax (with exemptions for startups)', 'Can incorporate in 1 day online', 'Grants PR and pathway to citizenship', 'Gateway to Southeast Asian markets'],
    businessTypes: [
      {
        name: 'Private Limited Company (Pte. Ltd.)',
        description: 'The gold standard for doing business in Singapore. 100% foreign ownership allowed. Can sponsor Employment Passes for foreign talent.',
        steps: [
          {
            title: 'Appoint a local director',
            description: 'Every Singapore company must have at least one director who is ordinarily resident in Singapore (Singapore citizen, PR, or valid EP/DP holder).',
            tips: 'If you\'re not in Singapore yet, you can hire a nominee director service (~SGD 1,000–2,000/year) until you get your Employment Pass.'
          },
          {
            title: 'Choose a company name',
            description: 'Check name availability and reserve via ACRA\'s Bizfile portal (acra.gov.sg). Names are reserved for 60 days (SGD 15 fee).',
            documents: ['Proposed company name'],
          },
          {
            title: 'Prepare incorporation documents',
            description: 'Prepare the company constitution (memorandum and articles of association) — or use the standard Model Constitution.',
            documents: ['Company Constitution', 'Shareholder details', 'Director details (NRIC or passport)'],
          },
          {
            title: 'Register with ACRA',
            description: 'Submit your incorporation application via Bizfile+ portal. For foreigners, you\'ll need a SingPass (or use a registered filing agent).',
            documents: ['Director and shareholder details', 'Company Constitution', 'Registered Singapore office address'],
            tips: 'Use a registered filing agent (corporate secretary) if you don\'t have SingPass — they handle submission on your behalf.'
          },
          {
            title: 'Receive your UEN (Unique Entity Number)',
            description: 'ACRA approves most applications within 1–3 hours. You\'ll receive a UEN which is your company registration number.',
          },
          {
            title: 'Open a corporate bank account',
            description: 'Open a Singapore business bank account. Popular choices: DBS, OCBC, UOB (traditional), or Aspire, Airwallex (digital).',
            documents: ['ACRA certificate', 'Company constitution', 'Director passport', 'Proof of address'],
            tips: 'Digital banks (Aspire, Airwallex) are easier to open remotely without visiting a branch.'
          },
          {
            title: 'Register for GST (if applicable)',
            description: 'Register for Goods and Services Tax (9%) if your annual revenue exceeds SGD 1,000,000.',
          }
        ],
        requirements: ['At least 1 locally resident director', 'At least 1 shareholder (can be a corporation)', 'Minimum paid-up capital SGD 1', 'Singapore registered office address', 'Company secretary appointed within 6 months'],
        timeframe: '1–3 hours (online), 1–3 days (if using filing agent)',
        cost: 'SGD 315 (ACRA fees) + SGD 1,500–3,000 (corporate secretary/agent fees)',
        difficulty: 'Easy'
      }
    ],
    residencyOptions: [
      {
        name: 'EntrePass (Entrepreneur Pass)',
        description: 'A Singapore work visa for innovative entrepreneurs starting a new business in Singapore. Allows you to start and operate a Singapore business.',
        steps: [
          {
            title: 'Determine eligibility',
            description: 'Must be starting an innovative, scalable business. Criteria: VC/PE-funded, incubator-backed, or significant IP/R&D, OR applying in tech, biomedical, or creative industries with a strong business proposal.',
          },
          {
            title: 'Prepare your business plan',
            description: 'Prepare a detailed business plan showing the innovative nature of your business.',
            documents: ['Business plan', 'CV/resume', 'Relevant credentials (patents, investments, awards)', 'Financial projections'],
          },
          {
            title: 'Submit application to MOM',
            description: 'Apply via the Employment Pass Online (EPO) portal at mom.gov.sg.',
            documents: ['Passport', 'Business plan', 'Educational certificates', 'References and credentials'],
            tips: 'Approval can take 8 weeks. Rejection rate is high — engage an immigration consultant for best results.'
          },
          {
            title: 'Incorporate your company in Singapore',
            description: 'Once the EntrePass is approved in principle, register your Pte. Ltd. company with ACRA.',
          },
          {
            title: 'Complete formalities and receive EntrePass',
            description: 'Provide biometrics at ICA and collect your EntrePass card.',
          }
        ],
        requirements: ['Novel, innovative business concept', 'Relevant entrepreneurial experience or VC/incubator backing', 'Minimum SGD 50,000 paid-up capital (recommended)', 'No criminal record'],
        timeframe: '6–10 weeks',
        cost: 'SGD 105 application fee + SGD 225 issuance fee',
        difficulty: 'Complex'
      },
      {
        name: 'Permanent Residency (PR)',
        description: 'Singapore PR is a long-term residency status. EP holders can apply after 6+ months; successful PR leads to a pathway to citizenship.',
        steps: [
          {
            title: 'Hold an eligible pass for 6+ months',
            description: 'Employment Pass (EP), EntrePass, or S Pass holders can apply for PR.',
          },
          {
            title: 'Gather documents',
            description: 'Prepare a comprehensive PR application.',
            documents: ['Passport', 'Current pass (EP/EntrePass)', 'Educational certificates (apostilled)', 'Employment records and payslips', 'Tax assessment notices', 'Bank statements', 'ACRA certificate (for business owners)'],
          },
          {
            title: 'Submit PR application via e-PR portal',
            description: 'Apply via the ICA e-PR portal.',
          },
          {
            title: 'Await decision and complete formalities',
            description: 'Processing takes 4–6 months. If approved, complete PR formalities including biometric enrolment and issuance of Re-Entry Permit (REP).',
          }
        ],
        requirements: ['6+ months on an eligible work pass', 'Strong employment history and high income', 'Tax compliance', 'Family ties in Singapore (helps)'],
        timeframe: '4–6 months (application processing)',
        cost: 'SGD 100 application fee',
        difficulty: 'Complex'
      }
    ],
    citizenshipPathways: [
      {
        name: 'Naturalization',
        description: 'Singapore citizenship can be obtained after 2 years as a Permanent Resident (or 10 years of lawful residence). Singapore does not allow dual citizenship.',
        steps: [
          {
            title: 'Hold PR status for 2+ years',
            description: 'Maintain your Singapore PR for at least 2 years before applying for citizenship.',
          },
          {
            title: 'Prepare citizenship application',
            description: 'Compile all required documents.',
            documents: ['Passport', 'PR card (Blue IC)', 'Educational certificates', 'Employment and income records', 'Tax statements', 'Marriage and birth certificates (if applicable)'],
          },
          {
            title: 'Submit to ICA',
            description: 'Submit your citizenship application at the ICA Building.',
          },
          {
            title: 'Renounce existing citizenship',
            description: 'If approved, you MUST renounce your existing citizenship. Singapore does not allow dual citizenship.',
            tips: 'This is a major consideration — Singapore passport is strong (192+ countries visa-free), but you\'ll lose your original citizenship.'
          },
          {
            title: 'Take citizenship oath and receive Singapore IC (Pink IC)',
            description: 'Attend citizenship ceremony, take the oath, and receive your NRIC (pink identity card) and Singapore passport.',
          }
        ],
        requirements: ['2+ years as Singapore PR', 'Good character and no criminal record', 'Demonstrate intention to settle in Singapore', 'Must renounce existing nationality'],
        timeframe: '12–24 months after applying',
        cost: 'Nominal fees',
        difficulty: 'Complex'
      }
    ]
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    region: 'North America',
    tagline: 'Welcoming Immigrants, World-Class Living',
    overview: 'Canada offers one of the world\'s most welcoming immigration systems with multiple pathways to permanent residency and citizenship through business investment, skilled work, and family ties.',
    currency: 'Canadian Dollar (CAD)',
    language: 'English, French',
    businessClimate: 'Strong rule of law, multicultural, G7 economy with access to US market via CUSMA/USMCA.',
    highlights: ['Multiple PR pathways for investors and entrepreneurs', '3 years PR → eligible for citizenship', 'Universal healthcare for residents', 'Strong startup ecosystem (Toronto, Vancouver, Montreal)', 'Access to US market via CUSMA'],
    businessTypes: [
      {
        name: 'Federal Corporation (Canada Business Corporation)',
        description: 'Incorporate federally under the Canada Business Corporations Act (CBCA). Allows operation across all provinces.',
        steps: [
          {
            title: 'Choose a business name or use a numbered company',
            description: 'Conduct a NUANS (Newly Upgraded Automated Name Search) report to ensure your name is unique across Canada. Alternatively, use a numbered company (e.g., "1234567 Canada Inc.").',
            documents: ['NUANS report (valid for 90 days)'],
            tips: 'Numbered companies are faster and cheaper. You can always add a trade name later.'
          },
          {
            title: 'Complete Articles of Incorporation',
            description: 'Prepare and file Articles of Incorporation with Corporations Canada.',
            documents: ['Articles of Incorporation (Form 1)', 'NUANS report', 'Registered office address in Canada'],
          },
          {
            title: 'File online with Corporations Canada',
            description: 'Submit via the Corporations Canada Online Filing Centre at corporationscanada.ic.gc.ca.',
            tips: 'Federal incorporation costs CAD $200 online.'
          },
          {
            title: 'Register in each province where you do business',
            description: 'Federal corporations must also register extra-provincially in each province they operate in. This is an additional fee per province.',
          },
          {
            title: 'Register for CRA accounts',
            description: 'Register for a Business Number (BN) with the Canada Revenue Agency and applicable program accounts (GST/HST, payroll, corporate income tax).',
            documents: ['Certificate of Incorporation', 'Director information'],
          },
          {
            title: 'Open a business bank account',
            description: 'Open a corporate bank account at a Canadian bank.',
            documents: ['Certificate of Incorporation', 'Director IDs', 'Board resolution'],
          }
        ],
        requirements: ['At least 25% of directors must be Canadian residents (for CBCA) — many use a "director services" provider to meet this requirement', 'Registered office in Canada', 'No minimum capital'],
        timeframe: '1–5 business days (federal); additional time for provincial registration',
        cost: 'CAD $200 (federal) + provincial registration fees (CAD $50–$500 per province)',
        difficulty: 'Moderate'
      }
    ],
    residencyOptions: [
      {
        name: 'Start-Up Visa Program',
        description: 'For innovative entrepreneurs. Get support from a Canadian VC, angel group, or business incubator, and apply for PR directly (not a temporary work permit).',
        steps: [
          {
            title: 'Develop your startup concept',
            description: 'Have an innovative business idea that can create jobs and compete globally.',
          },
          {
            title: 'Get a letter of support from a designated organization',
            description: 'Apply to and receive a Letter of Support from a designated Canadian VC fund, angel investor group, or business incubator.',
            tips: 'This is the hardest step. Designated organizations include BDC Capital, Real Ventures, Innovacorp, MaRS, and others. Cold applying to many simultaneously is a common strategy.'
          },
          {
            title: 'Meet language requirements',
            description: 'Demonstrate CLB 5 language proficiency in English or French (IELTS or TEF exam).',
            documents: ['IELTS General Training or TEF score report'],
          },
          {
            title: 'Gather required documents',
            description: 'Prepare comprehensive immigration application.',
            documents: ['Letter of Support from designated organization', 'Commitment certificate', 'Language test results', 'Education credentials (ECA if foreign degree)', 'Passport', 'Proof of funds (varies by family size, approx. CAD $13,000–$25,000)'],
          },
          {
            title: 'Submit PR application to IRCC',
            description: 'Submit the Start-Up Visa PR application to Immigration, Refugees and Citizenship Canada (IRCC).',
            tips: 'You can get a temporary work permit while your PR is being processed.'
          },
          {
            title: 'Receive Permanent Residency',
            description: 'Attend the PR confirmation and receive your PR card (Maple Leaf Card).',
          }
        ],
        requirements: ['Letter of support from a designated Canadian organization (VC, angel group, or incubator)', 'CLB 5 English or French proficiency', 'Proof of settlement funds', 'Ownership of >50% of the business'],
        timeframe: '12–36 months',
        cost: 'CAD $1,560 (government fees) + settlement funds + legal fees',
        difficulty: 'Complex'
      }
    ],
    citizenshipPathways: [
      {
        name: 'Naturalization',
        description: 'After 3 years of permanent residency, you\'re eligible for Canadian citizenship. Canada allows dual citizenship.',
        steps: [
          {
            title: 'Maintain PR for 3 of the past 5 years (1,095 days)',
            description: 'Track your physical presence in Canada. You need to be physically present 1,095 days within the last 5 years.',
          },
          {
            title: 'File taxes',
            description: 'File Canadian income tax returns for at least 3 years before applying.',
          },
          {
            title: 'Meet language requirements',
            description: 'Demonstrate adequate language skills in English or French (CLB 4 for ages 18–54).',
            documents: ['Language test results or proof of education in English/French'],
          },
          {
            title: 'Submit citizenship application',
            description: 'Apply online via the IRCC portal.',
            documents: ['PR card', 'Passport', 'Travel history', 'Tax notices of assessment', 'Language proof'],
          },
          {
            title: 'Pass citizenship test',
            description: 'Take a 20-question test on Canadian history, values, institutions, and rights (for ages 18–54).',
            tips: 'Study using the official "Discover Canada" guide — available free online.'
          },
          {
            title: 'Attend citizenship ceremony',
            description: 'Take the Oath of Citizenship at a citizenship ceremony and receive your citizenship certificate.',
          }
        ],
        requirements: ['1,095 days physically present in Canada in last 5 years', 'Income tax compliance for 3+ years', 'Language proficiency (CLB 4)', 'No serious criminal convictions', 'Ages 18–54 must pass citizenship test'],
        timeframe: '12–24 months after applying',
        cost: 'CAD $630 per adult',
        difficulty: 'Moderate'
      }
    ]
  },
  {
    code: 'KE',
    name: 'Kenya',
    flag: '🇰🇪',
    region: 'Africa',
    tagline: 'East Africa\'s Business & Tech Hub',
    overview: 'Kenya is East Africa\'s largest economy and a leading tech hub (nicknamed "Silicon Savannah"). With a young, English-speaking workforce and growing consumer market, it\'s the top gateway for businesses targeting East and Central Africa.',
    currency: 'Kenyan Shilling (KES)',
    language: 'English, Swahili',
    businessClimate: 'Vibrant startup ecosystem, M-Pesa mobile money leader, improving ease of doing business rankings.',
    highlights: ['English-speaking business environment', 'Leading fintech hub in Africa (M-Pesa)', 'Gateway to East Africa Community (EAC)', 'Young, growing consumer market of 55M+', 'Foreign investors can own 100% of most businesses'],
    businessTypes: [
      {
        name: 'Private Limited Company (Ltd)',
        description: 'The standard business structure for foreign investors in Kenya. Registered with the Business Registration Service (BRS).',
        steps: [
          {
            title: 'Reserve a company name',
            description: 'Apply for name reservation via the eCitizen portal (ecitizen.go.ke) → Business Registration Service → Company Name Search.',
            documents: ['Proposed company name (3 options)'],
            tips: 'Name reservation costs KES 150 (~$1 USD) and is valid for 30 days.'
          },
          {
            title: 'Prepare incorporation documents',
            description: 'Prepare all required documents for company registration.',
            documents: ['Memorandum and Articles of Association', 'Statement of nominal capital', 'Director and shareholder details', 'Passport copies or National ID of all directors and shareholders', 'Kenyan physical address for registered office'],
          },
          {
            title: 'Register online via eCitizen',
            description: 'Submit company registration application via the eCitizen Business Registration portal.',
            tips: 'Pay the registration fee based on your nominal capital. Minimum fee is KES 10,650 (~$80 USD).'
          },
          {
            title: 'Receive Certificate of Incorporation',
            description: 'After processing (usually 3–7 days), download your Certificate of Incorporation from eCitizen.',
          },
          {
            title: 'Register for KRA PIN and Tax',
            description: 'Register your company for a Kenya Revenue Authority PIN and relevant tax obligations (income tax, VAT if applicable).',
            documents: ['Certificate of Incorporation', 'Director IDs and PINs'],
          },
          {
            title: 'Register for NSSF and NHIF',
            description: 'Register for National Social Security Fund and National Hospital Insurance Fund if you have employees.',
          },
          {
            title: 'Open a corporate bank account',
            description: 'Open a KES business account at a Kenyan bank.',
            documents: ['Certificate of Incorporation', 'CR12 (list of directors)', 'Director IDs and KRA PINs', 'Board resolution'],
          }
        ],
        requirements: ['Minimum 1 shareholder and 1 director', 'At least 1 director must have a Kenyan physical address (or use a registered agent)', 'No minimum capital requirement', 'Foreign nationals need passport copies and foreign KRA PIN'],
        timeframe: '3–7 business days',
        cost: 'KES 10,650–27,650 ($80–$200 USD) registration + KES 5,000–15,000 legal fees',
        difficulty: 'Easy'
      }
    ],
    residencyOptions: [
      {
        name: 'Investor (Class G) Permit',
        description: 'For foreigners who invest in a Kenyan business. Grants a renewable residence permit for up to 2 years.',
        steps: [
          {
            title: 'Register your Kenyan business',
            description: 'Have a registered Kenyan company in which you are a director or shareholder.',
          },
          {
            title: 'Apply for Kenya Investment Authority (KenInvest) Certificate',
            description: 'Obtain an investment certificate from KenInvest (now Kenya Investment Authority).',
            documents: ['Certificate of Incorporation', 'Business plan', 'Source of funds documentation', 'Proof of investment (bank transfer, etc.)'],
            tips: 'Minimum investment is $100,000 USD for foreign-owned businesses in most sectors.'
          },
          {
            title: 'Apply for Class G Permit',
            description: 'Submit a work/residence permit application to the Department of Immigration via the eCitizen portal.',
            documents: ['Passport (6+ months validity)', 'KenInvest certificate', 'Certificate of Incorporation', 'Tax Compliance Certificate', 'Police Clearance from home country', 'Medical Certificate', 'Passport photos'],
          },
          {
            title: 'Pay fees and await approval',
            description: 'Pay the permit fees and await approval from the Department of Immigration.',
          }
        ],
        requirements: ['Registered Kenyan business', 'Minimum $100,000 USD investment', 'KenInvest certificate', 'Clean criminal record'],
        timeframe: '4–12 weeks',
        cost: 'KES 200,000 ($1,500 USD) per year government fee',
        difficulty: 'Moderate'
      }
    ],
    citizenshipPathways: [
      {
        name: 'Naturalization',
        description: 'Foreign nationals can apply for Kenyan citizenship after 7 years of legal residence.',
        steps: [
          {
            title: 'Maintain 7 years of legal residency',
            description: 'Hold valid residence permits continuously for 7 years.',
          },
          {
            title: 'Demonstrate integration',
            description: 'Show knowledge of Swahili or English and integration into Kenyan society.',
          },
          {
            title: 'Apply to the Department of Immigration',
            description: 'Submit naturalization application with comprehensive documentation.',
            documents: ['Application form', 'All previous residence permits', 'Passport', 'Police clearance (Kenya and home country)', 'Tax compliance certificate', 'Proof of business or employment', 'Birth certificate'],
          },
          {
            title: 'Attend citizenship interview',
            description: 'Attend an interview with the Citizenship and Immigration Board.',
          },
          {
            title: 'Take oath of allegiance',
            description: 'If approved, renounce previous citizenship and take the Kenyan oath of allegiance.',
            tips: 'Kenya does NOT generally allow dual citizenship (with exceptions for those who acquired it at birth).'
          }
        ],
        requirements: ['7 years legal residency', 'Good character', 'Sufficient knowledge of Swahili or English', 'Must renounce previous citizenship'],
        timeframe: '1–3 years after applying',
        cost: 'KES 200,000 (~$1,500 USD)',
        difficulty: 'Complex'
      }
    ]
  },
  {
    code: 'MT',
    name: 'Malta',
    flag: '🇲🇹',
    region: 'Europe',
    tagline: 'EU Citizenship by Investment',
    overview: 'Malta is an EU member state in the Mediterranean offering one of the few remaining EU citizenship-by-investment programs. A Maltese passport grants access to live, work, and study across all 27 EU countries.',
    currency: 'Euro (EUR)',
    language: 'Maltese, English',
    businessClimate: 'Pro-business EU jurisdiction with competitive tax system (effective 5% corporate tax via refund system), strong gaming, fintech, and aviation sectors.',
    highlights: ['One of the few EU citizenship-by-investment programs', 'EU passport — live and work in 27 EU countries', 'English-speaking (official language)', 'Effective 5% corporate tax via Malta\'s full imputation system', 'Mediterranean lifestyle'],
    businessTypes: [
      {
        name: 'Private Limited Company (Ltd)',
        description: 'Malta\'s standard company structure. Effective tax rate of ~5% via the Maltese tax refund system for foreign shareholders.',
        steps: [
          {
            title: 'Reserve company name',
            description: 'Check name availability at the Malta Business Registry (MBR) and reserve your chosen name.',
          },
          {
            title: 'Prepare Memorandum and Articles of Association',
            description: 'Have a Maltese lawyer draft the M&A and have it executed before a Maltese notary.',
            documents: ['M&A document', 'Director and shareholder IDs'],
          },
          {
            title: 'Register with Malta Business Registry',
            description: 'Submit incorporation documents to the MBR.',
            documents: ['Form BO1 (application)', 'Memorandum and Articles of Association', 'Director and shareholder identification'],
          },
          {
            title: 'Pay share capital',
            description: 'Deposit at least 20% of your authorized share capital (minimum €1,165 of €4,658 authorized capital).',
          },
          {
            title: 'Register for VAT and Tax',
            description: 'Register with Malta Tax and Customs Administration for corporate tax and VAT numbers.',
          },
          {
            title: 'Open a Malta bank account',
            description: 'Open a corporate account with a Maltese bank (BOV, HSBC Malta, MeDirect).',
            documents: ['Certificate of registration', 'M&A', 'Director IDs'],
            tips: 'Banking due diligence is thorough in Malta — be prepared with source of funds documentation.'
          }
        ],
        requirements: ['At least 2 shareholders and 1 director', 'Minimum authorized capital €4,658 (20% paid up = ~€1,165)', 'Registered office in Malta', 'Compliance officer/company secretary recommended'],
        timeframe: '1–3 weeks',
        cost: '€1,200–€3,000 (registration + notary + legal fees)',
        difficulty: 'Moderate'
      }
    ],
    residencyOptions: [
      {
        name: 'Malta Permanent Residence Programme (MPRP)',
        description: 'Obtain Maltese (EU) permanent residency through investment. No minimum stay requirement.',
        steps: [
          {
            title: 'Engage a licensed agent',
            description: 'You must apply through a Malta-licensed Authorised Registered Mandatory (ARM) agent.',
          },
          {
            title: 'Choose qualifying investment option',
            description: 'Option A: Rent property (€10,000/year in South Malta or Gozo; €12,000/year elsewhere) OR Option B: Buy property (€300,000 in South Malta/Gozo; €350,000 elsewhere).',
          },
          {
            title: 'Make a government contribution',
            description: 'Pay a non-refundable government contribution of €28,000 (if renting) or €58,000 (if purchasing property).',
          },
          {
            title: 'Donate to a local NGO',
            description: 'Donate €2,000 to a Maltese registered NGO (sports, cultural, philanthropic).',
          },
          {
            title: 'Submit MPRP application',
            description: 'Your agent submits the full application to Residency Malta Agency.',
            documents: ['Passport', 'Birth certificate', 'Marriage certificate (if applicable)', 'Police conduct certificate from all countries lived in for 10+ years', 'Medical insurance', 'Proof of qualifying investment'],
          },
          {
            title: 'Due diligence and approval',
            description: 'Residency Malta conducts multi-tier due diligence. Processing takes 4–6 months.',
          },
          {
            title: 'Receive Malta PR Card',
            description: 'Attend a biometrics appointment in Malta and receive your EU-issued residence card.',
          }
        ],
        requirements: ['Investment as described (rent + contribution OR purchase + contribution)', 'Clean criminal record (all countries)', 'Health insurance covering Malta', 'Capital assets of €500,000 (of which €150,000 must be financial assets)'],
        timeframe: '4–6 months',
        cost: '€30,000–€60,000 (contributions + fees) + property investment',
        difficulty: 'Moderate'
      }
    ],
    citizenshipPathways: [
      {
        name: 'Maltese Citizenship by Naturalization for Exceptional Services (MCES)',
        description: 'One of the few remaining EU citizenship-by-investment programs. Exceptional contribution leads to full Maltese (EU) passport.',
        steps: [
          {
            title: 'Engage a licensed agent (mandatory)',
            description: 'All applications must be submitted through a licensed Authorized Registered Mandatory (ARM).',
          },
          {
            title: 'Obtain Malta residence permit',
            description: 'Hold a valid Maltese residence permit for at least 12 months (fast track) or 36 months (standard) before applying.',
          },
          {
            title: 'Make the exceptional contribution',
            description: 'Two routes:\n- 12-month route: €750,000 contribution to the National Development and Social Fund (NDSF)\n- 36-month route: €600,000 contribution to NDSF\nPlus: €10,000 donation to a registered NGO.',
            tips: 'These amounts are per main applicant. Dependents have additional costs.'
          },
          {
            title: 'Invest in qualifying property',
            description: 'Either: Purchase property worth €700,000+ and hold for 5 years, OR rent at minimum €16,000/year for 5 years.',
          },
          {
            title: 'Submit MCES application',
            description: 'Your ARM submits the comprehensive application to Agenzija Komunita\' Malta (AKM).',
            documents: ['Passport', 'Birth and marriage certificates', 'Police clearance from all countries lived in (10+ year history)', 'Financial statements proving €500,000+ in assets', 'Evidence of ties to Malta', 'Proof of residence', 'Proof of contributions and property investment'],
          },
          {
            title: 'Pass due diligence',
            description: 'AKM conducts 4-tier due diligence including checks by a third-party international due diligence firm. Can take 6–12 months.',
          },
          {
            title: 'Attend citizenship ceremony and receive passport',
            description: 'Take the Oath of Allegiance and receive your Maltese citizenship certificate, then apply for your EU passport.',
            tips: 'Malta allows dual citizenship — you do NOT need to give up your current nationality.'
          }
        ],
        requirements: ['12 or 36 months of Malta residence', 'Exceptional contribution (€600,000–€750,000)', 'Property investment (€700,000 purchase or €16,000/year rental × 5 years)', '€10,000 NGO donation', 'Net assets of €500,000+ (of which €150,000 financial)', 'Clean criminal record'],
        timeframe: '12–24 months (12-month route) or 36–48 months (36-month route)',
        cost: '€600,000–€750,000 contribution + property costs + €30,000–€80,000 in fees',
        difficulty: 'Complex'
      }
    ]
  }
];

export const regions = ['All', 'Africa', 'Middle East', 'Europe', 'Asia', 'North America', 'South America', 'Oceania'];
