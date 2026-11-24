// République du Bénin — Portail Citoyen & Institutionnel

const STATE_FACTS = [
  { label: 'Forme de l’État', value: 'République unitaire à régime présidentiel' },
  { label: 'Capitale officielle', value: 'Porto-Novo (siège de l’Assemblée nationale)' },
  { label: 'Siège du Gouvernement', value: 'Cotonou (Palais de la Marina)' },
  { label: 'Découpage territorial', value: '12 départements et 77 communes' },
  { label: 'Langue officielle', value: 'Français' },
  { label: 'Monnaie', value: 'Franc CFA (XOF)' },
  { label: 'Fête nationale', value: '1er août (Proclamation de l’Indépendance en 1960)' }
];

const INSTITUTION_CATEGORIES = [
  { id: 'all', label: 'Toutes les institutions' },
  { id: 'legislatif', label: 'Pouvoir législatif' },
  { id: 'juridictions', label: 'Hautes juridictions' },
  { id: 'regulation', label: 'Consultation, Médiation & Régulation' },
  { id: 'elections-droits', label: 'Élections & Droits (INF)' }
];

const INSTITUTIONS = [
  {
    id: 'assemblee-nationale',
    num: '01',
    cat: 'legislatif',
    catName: 'Pouvoir législatif',
    name: 'Assemblée nationale',
    leaderLabel: 'Président (10e législature)',
    leader: 'Joseph Djogbénou',
    governance: 'Dirigée par le Président Joseph Djogbénou, assisté des vice-présidents, questeurs et secrétaires parlementaires du Bureau de l’Assemblée nationale, ainsi que de la Conférence des Présidents et des commissions permanentes.',
    location: {
      city: 'Porto-Novo',
      district: 'Quartier Avakpa / Centre administratif',
      address: 'Palais des Gouverneurs, Avenue du Gouverneur Reste, Porto-Novo',
      contact: 'assemblee-nationale.bj'
    },
    domain: 'assemblee-nationale.bj',
    url: 'https://assemblee-nationale.bj',
    summary: 'Parlement monocaméral exerçant le pouvoir législatif, votant le budget de l’État et contrôlant l’action du Gouvernement.',
    devRole: 'En votant les lois de finances, les codes sectoriels et les autorisations de financement des infrastructures stratégiques, l’Assemblée nationale dote le Bénin d’un cadre juridique moderne, sécurise les investissements et veille à la transparence de la dépense publique au service du développement.',
    actions: [
      'Examen et vote des lois de la République et réformes structurelles économiques et sociales.',
      'Adoption annuelle du Budget général de l’État et contrôle de son exécution par le Gouvernement.',
      'Contrôle démocratique via les questions au Gouvernement, commissions d’enquête et diplomatie parlementaire.'
    ]
  },
  {
    id: 'cour-constitutionnelle',
    num: '02',
    cat: 'juridictions',
    catName: 'Hautes juridictions',
    name: 'Cour constitutionnelle',
    leaderLabel: 'Président (7e mandature)',
    leader: 'Prof. Cossi Dorothé Sossa',
    governance: 'Présidée par le Prof. Cossi Dorothé Sossa, la Cour constitutionnelle est composée de sept (07) conseillers appelés « Sages » (quatre nommés par le Bureau de l’Assemblée nationale et trois par le Président de la République).',
    location: {
      city: 'Cotonou',
      district: 'Ganhi · Place du Souvenir',
      address: 'Quartier Ganhi, Avenue Jean-Paul II, Cotonou',
      contact: 'courconstitutionnelle.bj'
    },
    domain: 'courconstitutionnelle.bj',
    url: 'https://courconstitutionnelle.bj',
    summary: 'Plus haute juridiction de l’État en matière constitutionnelle ; garante des droits fondamentaux et régulatrice des institutions.',
    devRole: 'La sécurité constitutionnelle et le respect de l’État de droit renforcent la paix civile et la confiance des investisseurs. En protégeant les libertés publiques et en régulant les rapports entre pouvoirs publics, la Cour garantit la stabilité institutionnelle indispensable au progrès du pays.',
    actions: [
      'Contrôle de constitutionnalité des lois, ordonnances et règlements intérieurs des institutions.',
      'Protection directe des droits fondamentaux des citoyens (saisine individuelle possible).',
      'Proclamation des résultats définitifs de l’élection présidentielle et des élections législatives.'
    ]
  },
  {
    id: 'cour-supreme',
    num: '03',
    cat: 'juridictions',
    catName: 'Hautes juridictions',
    name: 'Cour suprême',
    leaderLabel: 'Président',
    leader: 'Victor Dassi Adossou',
    governance: 'Dirigée par le Président Victor Dassi Adossou, la Cour s’appuie sur ses présidents de Chambres (Chambre judiciaire et Chambre administrative), le Procureur général près la Cour suprême et le corps des conseillers.',
    location: {
      city: 'Porto-Novo',
      district: 'Ouando · Boulevard du Cinquantenaire',
      address: 'Quartier Ouando, Porto-Novo',
      contact: 'coursupreme.bj'
    },
    domain: 'coursupreme.bj',
    url: 'https://coursupreme.bj',
    summary: 'Plus haute juridiction de l’État en matière administrative, judiciaire et pour le contentieux des élections locales.',
    devRole: 'En assurant l’unité de la jurisprudence et l’équité des décisions judiciaires et administratives sur tout le territoire, la Cour suprême sécurise le climat des affaires, les contrats publics et les droits des citoyens face à l’administration.',
    actions: [
      'Contrôle en cassation des arrêts et jugements rendus par les cours d’appel et juridictions du fond.',
      'Règlement du contentieux administratif et avis consultatifs sur les projets de textes du Gouvernement.',
      'Juge en dernier ressort du contentieux des élections communales et locales.'
    ]
  },
  {
    id: 'cour-des-comptes',
    num: '04',
    cat: 'juridictions',
    catName: 'Hautes juridictions',
    name: 'Cour des comptes',
    leaderLabel: 'Première présidente',
    leader: 'Ismath Bio Tchané Mamadou',
    governance: 'Placée sous l’autorité de la Première présidente Ismath Bio Tchané Mamadou, elle réunit des présidents de chambres, des conseillers maîtres et référendaires ainsi qu’un Ministère public chargé de veiller à la régularité des comptes.',
    location: {
      city: 'Porto-Novo',
      district: 'Quartier Ponto',
      address: 'Quartier Ponto (près de la Préfecture), Porto-Novo',
      contact: 'courdescomptes.bj'
    },
    domain: 'courdescomptes.bj',
    url: 'https://courdescomptes.bj',
    summary: 'Juridiction supérieure de contrôle des finances publiques, de la régularité des comptes publics et de la bonne gestion budgétaire.',
    devRole: 'La performance et l’intégrité des finances publiques permettent d’orienter chaque franc public vers les infrastructures, l’école, l’eau et la santé. La Cour des comptes évalue les politiques publiques, prévient les dérives budgétaires et consolide la crédibilité financière du Bénin.',
    actions: [
      'Vérification et jugement des comptes des comptables publics et des collectivités territoriales.',
      'Audit de l’exécution des lois de finances et certification des comptes de l’État.',
      'Évaluation des politiques publiques et publication de rapports annuels au service de la transparence.'
    ]
  },
  {
    id: 'haute-cour-de-justice',
    num: '05',
    cat: 'juridictions',
    catName: 'Hautes juridictions',
    name: 'Haute Cour de Justice',
    leaderLabel: 'Présidente',
    leader: 'Prof. Dandi Gnamou',
    governance: 'Présidée par la Prof. Dandi Gnamou, la Haute Cour de Justice est composée des membres de la Cour constitutionnelle (à l’exception de son président), de six députés élus par l’Assemblée nationale et du président de la Cour suprême.',
    location: {
      city: 'Porto-Novo',
      district: 'Quartier Adjina',
      address: 'Quartier Adjina, Porto-Novo',
      contact: 'hcj.bj'
    },
    domain: 'hcj.bj',
    url: 'https://hcj.bj',
    summary: 'Juridiction constitutionnelle d’exception compétente pour juger le Chef de l’État et les membres du Gouvernement.',
    devRole: 'En consacrant l’égalité devant la loi et la responsabilité pénale au sommet de l’État, la Haute Cour de Justice renforce l’éthique publique, la lutte contre l’impunité et la confiance civique nécessaire aux réformes de développement.',
    actions: [
      'Compétence pour juger le Président de la République en cas de haute trahison.',
      'Jugement des membres du Gouvernement pour les faits qualifiés de crimes ou délits commis dans l’exercice de leurs fonctions.',
      'Garantie des procédures constitutionnelles de mise en accusation décidées par le Parlement.'
    ]
  },
  {
    id: 'ces',
    num: '06',
    cat: 'regulation',
    catName: 'Consultation, Médiation & Régulation',
    name: 'Conseil Économique et Social (CES)',
    leaderLabel: 'Président (8e mandature)',
    leader: 'Abdoulaye Bio Tchané',
    governance: 'Dirigé par le Président Abdoulaye Bio Tchané et le 1er Vice-président Conrad Gbaguidi, le CES rassemble des représentants du patronat, des syndicats de travailleurs, des artisans, des agriculteurs, des professions libérales et de la société civile.',
    location: {
      city: 'Cotonou',
      district: 'Quartier Saint-Michel / Centre-ville',
      address: 'Boulevard Saint-Michel / Avenue Mgr Steinmetz, Cotonou',
      contact: 'cesbenin.bj'
    },
    domain: 'cesbenin.bj',
    url: '',
    summary: 'Assemblée consultative représentant les forces vives de la Nation et éclairant les pouvoirs publics sur les choix économiques et sociaux.',
    devRole: 'Passerelle permanente entre l’État et les acteurs productifs du Bénin, le CES formule des recommandations concrètes sur l’emploi, l’agriculture, le pouvoir d’achat et la transformation industrielle afin d’ancrer les lois dans les réalités socio-économiques.',
    actions: [
      'Émission d’avis consultatifs sur les projets de lois de programme et plans nationaux de développement.',
      'Autosaisine sur toute question économique, sociale, environnementale ou culturelle d’intérêt national.',
      'Concertation structurée avec les organisations socioprofessionnelles dans les départements.'
    ]
  },
  {
    id: 'mediateur-republique',
    num: '07',
    cat: 'regulation',
    catName: 'Consultation, Médiation & Régulation',
    name: 'Médiateur de la République',
    leaderLabel: 'Titulaire (1er Vice-président du CES)',
    leader: 'Conrad Gbaguidi',
    governance: 'Fonction exercée par Conrad Gbaguidi (1er Vice-président du Conseil Économique et Social), appuyé par une équipe de conseillers juristes et de délégués chargés de l’instruction des réclamations citoyennes.',
    location: {
      city: 'Cotonou',
      district: 'Haie Vive · 12e arrondissement',
      address: 'Quartier Haie Vive, Rue des Ambassades, Cotonou',
      contact: 'mediateur.gouv.bj'
    },
    domain: 'mediateur.gouv.bj',
    url: '',
    summary: 'Organe indépendant de médiation gratuite entre les citoyens et les administrations publiques.',
    devRole: 'En facilitant un règlement amiable et rapide des différends entre citoyens, entreprises et services publics, le Médiateur améliore la qualité du service public, réduit les blocages administratifs et renforce la cohésion sociale.',
    actions: [
      'Réception et instruction gratuite des réclamations liées au fonctionnement des administrations et mairies.',
      'Formulation de propositions de réformes administratives pour corriger les dysfonctionnements récurrents.',
      'Défense du droit des usagers à une administration diligente, équitable et accessible.'
    ]
  },
  {
    id: 'haac',
    num: '08',
    cat: 'regulation',
    catName: 'Consultation, Médiation & Régulation',
    name: 'Haute Autorité de l’Audiovisuel et de la Communication (HAAC)',
    leaderLabel: 'Président (7e mandature)',
    leader: 'Édouard Loko',
    governance: 'Dirigée par le Président Édouard Loko, la HAAC siège en collège de neuf (09) conseillers issus des désignations du Président de la République, du Bureau de l’Assemblée nationale et de l’élection par les professionnels des médias.',
    location: {
      city: 'Cotonou',
      district: 'Ganhi · Avenue Jean-Paul II',
      address: 'Quartier Ganhi, Avenue Jean-Paul II, Cotonou',
      contact: 'haac.bj'
    },
    domain: 'haac.bj',
    url: 'https://haac.bj',
    summary: 'Autorité constitutionnelle de régulation garantissant la liberté de la presse et l’éthique de l’espace médiatique.',
    devRole: 'Un paysage médiatique libre, pluraliste et professionnalisé accompagne l’éducation civique, l’essor des industries créatives et audiovisuelles ainsi que la transparence démocratique à l’ère du numérique.',
    actions: [
      'Garantie de la liberté de la presse et accès équitable des courants d’opinion aux médias publics.',
      'Attribution des fréquences de radiodiffusion et de télévision et régulation des contenus audiovisuels.',
      'Délivrance de la carte de presse et accompagnement déontologique des organes d’information.'
    ]
  },
  {
    id: 'cena',
    num: '09',
    cat: 'elections-droits',
    catName: 'Élections & Droits (INF)',
    name: 'Commission Électorale Nationale Autonome (CENA)',
    leaderLabel: 'Président du Conseil électoral',
    leader: 'Sacca Lafia',
    governance: 'Administrée par un Conseil électoral de cinq membres présidé par Sacca Lafia, en tandem avec une Direction générale des élections chargée de l’organisation technique, logistique et opérationnelle des scrutins.',
    location: {
      city: 'Cotonou',
      district: 'Ganhi · Boulevard Saint-Michel',
      address: 'Quartier Ganhi, Boulevard Saint-Michel, Cotonou',
      contact: 'cena.bj'
    },
    domain: 'cena.bj',
    url: 'https://cena.bj',
    summary: 'Organe permanent indépendant chargé de l’organisation, du déroulement et de la supervision des élections nationales et locales.',
    devRole: 'La légitimité des élus et la paix post-électorale constituent le socle de toute stratégie nationale de développement. La CENA sécurise la continuité démocratique indispensable aux réformes économiques et territoriales de long terme.',
    actions: [
      'Préparation logistique, enregistrement des candidatures et gestion du matériel électoral sur les 77 communes.',
      'Supervision des opérations de vote et formation des agents électoraux.',
      'Centralisation des procès-verbaux et proclamation des résultats provisoires des scrutins.'
    ]
  },
  {
    id: 'inf',
    num: '10',
    cat: 'elections-droits',
    catName: 'Élections & Droits (INF)',
    name: 'Institut National de la Femme (INF)',
    leaderLabel: 'Présidente · Secrétaire exécutive : Flore Djinou',
    leader: 'Huguette Bokpè Gnacadja',
    governance: 'Rattaché à la Présidence de la République, l’INF est présidé par Huguette Bokpè Gnacadja et dispose d’un Secrétariat exécutif conduit par Flore Djinou, assisté de directions juridiques, sociales et d’un dispositif d’écoute permanente.',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun · Carrefour SONEB',
      address: 'Avenue Jean-Paul II, Carrefour SONEB, Cotonou',
      contact: 'inf.bj · Ligne d’écoute gratuite : 114'
    },
    domain: 'inf.bj',
    url: 'https://inf.bj',
    summary: 'Institution publique dédiée à la promotion politique, économique et sociale de la femme et à la lutte contre les violences basées sur le genre.',
    devRole: 'En défendant l’intégrité des femmes et des filles, en luttant contre les discriminations et en soutenant leur accès aux responsabilités publiques et à l’entrepreneuriat, l’INF libère pleinement le potentiel de plus de la moitié de la population béninoise.',
    actions: [
      'Assistance juridique, psychosociale et orientation 24h/24 des victimes via le numéro vert 114.',
      'Prérogative légale d’ester en justice devant les tribunaux pour poursuivre les auteurs de violences basées sur le genre.',
      'Plaidoyer et programmes pour le leadership féminin et l’autonomisation économique et éducative des femmes.'
    ]
  }
];

const SYMBOLS = [
  {
    id: 'drapeau',
    index: '01',
    tab: '1. Le Drapeau National',
    title: 'Le Drapeau National',
    short: 'Vert, jaune et rouge : espérance, prospérité et courage.',
    desc: 'Composé d’une bande verticale verte côté hampe et de deux bandes horizontales à droite (jaune en haut, rouge en bas). Le vert symbolise l’espérance et le renouveau ; le jaune évoque les richesses de la terre et la prospérité ; le rouge rappelle le courage et le sacrifice des ancêtres.',
    details: [
      { k: 'Bande verticale verte', v: 'Espérance et renouveau' },
      { k: 'Bande supérieure jaune', v: 'Richesses de la terre et prospérité' },
      { k: 'Bande inférieure rouge', v: 'Courage et sacrifice des ancêtres' }
    ],
    visual: () => `
      <img src="/public/assets/aistudio/images__1__55fd2bb6.jfif" alt="Drapeau officiel de la République du Bénin" class="symbol-photo">
    `
  },
  {
    id: 'armoiries',
    index: '02',
    tab: '2. Les Armoiries',
    title: 'Les Armoiries de la République',
    short: 'Écu écartelé soutenu par deux panthères et deux cornes d’abondance.',
    desc: 'Un écu écartelé soutenu par deux panthères (symbole de royauté et de bravoure), surmonté de deux cornes d’abondance remplies d’épis de maïs et de sable. On y retrouve le château Somba, l’étoile du Bénin, un navire et le palmier.',
    details: [
      { k: 'Supports & Cimier', v: 'Deux panthères et deux cornes d’abondance' },
      { k: 'Écu écartelé', v: 'Château Somba, étoile du Bénin, navire, palmier' },
      { k: 'Devise inscrite', v: 'Fraternité – Justice – Travail' }
    ],
    visual: () => `
      <img src="/public/assets/aistudio/images__2__e70127f6.jfif" alt="Armoiries et emblème officiel de la République du Bénin" class="symbol-photo-contain">
    `
  },
  {
    id: 'devise',
    index: '03',
    tab: '3. La Devise Nationale',
    title: 'La Devise Nationale',
    short: '« Fraternité – Justice – Travail » : trois piliers éthiques.',
    desc: '« Fraternité – Justice – Travail » — Trois piliers éthiques qui guident l’action publique et la vie citoyenne : la solidarité nationale, l’équité devant la loi et l’effort collectif pour le développement.',
    details: [
      { k: 'Fraternité', v: 'Solidarité nationale et cohésion' },
      { k: 'Justice', v: 'Équité devant la loi' },
      { k: 'Travail', v: 'Effort collectif pour le développement' }
    ],
    visual: () => `
      <div style="display:grid;gap:8px;width:100%">
        <div style="padding:10px 14px;border-radius:10px;background:#f5eedf;font-weight:700;color:#0a0905">Fraternité</div>
        <div style="padding:10px 14px;border-radius:10px;background:#f5eedf;font-weight:700;color:#d2521b">Justice</div>
        <div style="padding:10px 14px;border-radius:10px;background:#f5eedf;font-weight:700;color:#0a0905">Travail</div>
      </div>
    `
  },
  {
    id: 'hymne',
    index: '04',
    tab: '4. L’Hymne National',
    title: 'L’Hymne National : L’Aube Nouvelle',
    short: 'Adopté en 1960, appel à l’unité et à la construction pacifique.',
    desc: 'L’Aube Nouvelle — Adopté lors de l’indépendance en 1960, il appelle les citoyens à l’unité, à la fierté nationale et à la construction pacifique de la Nation.',
    details: [
      { k: 'Titre officiel', v: 'L’Aube Nouvelle' },
      { k: 'Adoption', v: 'Indépendance de 1960' },
      { k: 'Structure', v: 'Refrain et trois couplets officiels' }
    ],
    visual: () => `
      <div style="text-align:left;width:100%;padding:14px 16px;background:#f5eedf;border-radius:12px">
        <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#d2521b;margin-bottom:6px">Refrain — L’Aube Nouvelle</p>
        <p style="font-size:13px;line-height:1.6;color:#0a0905;font-style:italic">
          Enfants du Bénin, debout !<br>
          La liberté d’un cri sonore<br>
          Chante aux premiers feux de l’aurore ;<br>
          Enfants du Bénin, debout !
        </p>
      </div>
    `,
    extra: () => `
      <div class="anthem-lyrics" aria-label="Paroles intégrales de l’hymne national du Bénin">
        <div class="anthem-stanza anthem-refrain">
          <p class="anthem-stanza-label">Refrain</p>
          <p>
            Enfants du Bénin, debout !<br>
            La liberté d’un cri sonore<br>
            Chante aux premiers feux de l’aurore ;<br>
            Enfants du Bénin, debout !
          </p>
        </div>
        <div class="anthem-stanza">
          <p class="anthem-stanza-label">Couplet I</p>
          <p>
            Jadis à son appel, nos aïeux sans faiblesse<br>
            Ont su avec courage, ardeur, pleins d’allégresse<br>
            Livrer au prix du sang des combats éclatants.<br>
            Accourez-vous aussi, bâtisseurs du présent,<br>
            Plus forts dans l’unité, chaque jour à la tâche,<br>
            Pour la postérité, construisez sans relâche !
          </p>
        </div>
        <div class="anthem-stanza">
          <p class="anthem-stanza-label">Couplet II (suivi du Refrain)</p>
          <p>
            Quand partout souffle un vent de colère et de haine,<br>
            Béninois, sois fier, et d’une âme sereine,<br>
            Confiant dans l’avenir, regarde ton drapeau !<br>
            Dans le vert tu liras l’espoir du renouveau,<br>
            De tes aïeux le rouge évoque le courage ;<br>
            Des plus riches trésors le jaune est le présage.
          </p>
        </div>
        <div class="anthem-stanza anthem-refrain">
          <p class="anthem-stanza-label">Couplet III (après le Refrain)</p>
          <p>
            Tes monts ensoleillés, tes palmiers, ta verdure,<br>
            Cher Bénin, partout font ta vive parure.<br>
            Ton sol offre à chacun la richesse des fruits.<br>
            Bénin, désormais que tes fils tous unis<br>
            D’un fraternel élan partagent l’espérance<br>
            De te voir à jamais heureux dans l’abondance.
          </p>
        </div>
      </div>
    `
  }
];

const MONUMENT_ZONES = [
  { id: 'all', label: 'Tout le Bénin (Nord → Sud)' },
  { id: 'nord', label: '1. Grand Nord (Atacora & Borgou)' },
  { id: 'centre', label: '2. Centre (Collines, Zou & Allada)' },
  { id: 'sud', label: '3. Sud & Littoral (Lac Nokoué, Porto-Novo, Cotonou, Ouidah, Grand-Popo)' }
];

const MONUMENT_TYPES = [
  { id: 'all', label: 'Toutes catégories' },
  { id: 'patrimoine', label: 'Patrimoine & Monuments' },
  { id: 'travaux', label: 'Grands Travaux' },
  { id: 'hotel', label: 'Hôtels & Écolodges' }
];

const MONUMENTS = [
  // ===== 1. GRAND NORD =====
  {
    id: 'pendjari',
    zone: 'nord',
    zoneName: '1. Grand Nord · Atacora & Borgou (Septentrion)',
    type: 'patrimoine',
    location: 'Tanguiéta · Atacora (Extrême Nord)',
    category: 'Réserve UNESCO',
    title: 'Parc National de la Pendjari',
    img: '/src/assets/images/benin_pendjari_park_1795510019894.jpg',
    desc: 'Réserve de biosphère UNESCO offrant l’un des derniers sanctuaires de la grande faune d’Afrique de l’Ouest (lions, éléphants, guépards, buffles) et les cascades de Tanougou.',
    highlight: 'Grande faune · Chutes de Tanougou & Kota',
    context: 'Point d’ancrage de l’écotourisme dans le Septentrion, la Pendjari a bénéficié d’importants investissements de sécurisation, de pistes de safari et de préservation écologique.'
  },
  {
    id: 'pendjari-lodge',
    zone: 'nord',
    zoneName: '1. Grand Nord · Atacora & Borgou (Septentrion)',
    type: 'hotel',
    location: 'Parc de la Pendjari · Atacora',
    category: 'Écolodge & Safari',
    title: 'Pendjari Lodge & Écolodges du Septentrion',
    img: '/src/assets/images/pendjari_safari_lodge_1795514203650.jpg',
    desc: 'Hébergements éco-touristiques haut de gamme au cœur de la savane (pavillons en pierre et bois, tentes grand confort, piscines et excursions safari guidées).',
    highlight: 'Safari de standing & tourisme durable au Nord',
    context: 'Conçus pour valoriser le tourisme nature dans l’Atacora, les lodges de la Pendjari et hôtels d’étape de Natitingou (Tata Somba Hotel) offrent un accueil international aux visiteurs du Grand Nord.'
  },
  {
    id: 'tata-somba',
    zone: 'nord',
    zoneName: '1. Grand Nord · Atacora & Borgou (Septentrion)',
    type: 'patrimoine',
    location: 'Boukoumbé & Natitingou · Atacora',
    category: 'Architecture ancestrale',
    title: 'Les Tata Somba & Route des Tata',
    img: '/src/assets/images/tata_somba_atacora_1795514202294.jpg',
    desc: 'Châteaux forts familiaux en terre crue à tourelles et terrasses construits par le peuple Bètammaribè au pied de la chaîne de l’Atacora.',
    highlight: 'Patrimoine mondial UNESCO (Koutammakou / Atacora)',
    context: 'La Route des Tata et l’aménagement des sites d’accueil à Boukoumbé préservent ce génie architectural unique et stimulent l’artisanat et le tourisme communautaire.'
  },
  {
    id: 'parakou-nikki',
    zone: 'nord',
    zoneName: '1. Grand Nord · Atacora & Borgou (Septentrion)',
    type: 'travaux',
    location: 'Parakou & Nikki · Borgou',
    category: 'Monuments & Grands Travaux',
    title: 'Place Bio Guéra, Palais de Nikki & Hôtels du Borgou',
    img: '/src/assets/images/hero_cotonou_1795507871511.jpg',
    desc: 'Monument au héros national Bio Guéra à Parakou, palais royal et arène réhabilitée de la fête de la Gaani à Nikki, complétés par les grands hôtels du septentrion (Kobourou City Hotel).',
    highlight: 'Arène de la Gaani · Carrefour économique du Nord',
    context: 'Grâce à la réhabilitation de l’arène impériale de Nikki, aux axes routiers asphaltés de Parakou et à l’hôtellerie urbaine, le Borgou rayonne comme capitale culturelle du peuple Baatonu.'
  },

  // ===== 2. CENTRE =====
  {
    id: 'dassa-collines',
    zone: 'centre',
    zoneName: '2. Centre · Collines, Zou & Allada',
    type: 'patrimoine',
    location: 'Dassa-Zoumè & Savalou · Collines',
    category: 'Paysage & Hôtellerie',
    title: 'Les 41 Collines de Dassa-Zoumè & Hébergements des Collines',
    img: '/src/assets/images/tata_somba_atacora_1795514202294.jpg',
    desc: 'Cité granitique des 41 collines réputée pour son site de pèlerinage marial, les traditions royales Idaasha et ses hôtels-étapes au cœur du Centre (Jeco Hotel, auberges panoramiques).',
    highlight: '41 collines granitiques · Carrefour Centre-Bénin',
    context: 'Étape privilégiée entre le Sud et le Nord du pays, Dassa-Zoumè allie randonnées rocheuses, spiritualité et hospitalité hôtelière au milieu du département des Collines.'
  },
  {
    id: 'abomey',
    zone: 'centre',
    zoneName: '2. Centre · Collines, Zou & Allada',
    type: 'patrimoine',
    location: 'Abomey · Zou',
    category: 'Patrimoine UNESCO & Musée',
    title: 'Palais Royaux & Musée des Rois et Amazones d’Abomey',
    img: '/src/assets/images/benin_abomey_palace_1795510019588.jpg',
    desc: 'Ancienne capitale du Royaume du Danxomè, classée à l’UNESCO pour ses bas-reliefs polychromes, dotée du nouveau Musée des Rois et des Amazones aux normes internationales.',
    highlight: 'Trésors royaux restitués · Architecture du Danxomè',
    context: 'La restauration des palais royaux et l’édification d’un grand musée moderne à Abomey valorisent les trésors royaux et structurent l’offre d’accueil culturel du Zou.'
  },
  {
    id: 'gdiz',
    zone: 'centre',
    zoneName: '2. Centre · Collines, Zou & Allada',
    type: 'travaux',
    location: 'Glo-Djigbé · Atlantique (Axe Centre-Sud)',
    category: 'Grand Chantier Industriel',
    title: 'Zone Industrielle de Glo-Djigbé (GDIZ)',
    img: '/src/assets/images/benin_marina_institution_1795510020342.jpg',
    desc: 'Pôle industriel de classe mondiale s’étendant sur plus de 1 640 hectares pour la transformation locale du coton, de l’anacarde, du soja et du textile « Made in Benin ».',
    highlight: '1 640 ha · Transformation agro-industrielle & emplois',
    context: 'Projet phare de l’industrialisation du Bénin, la GDIZ relie les bassins agricoles du Nord et du Centre aux usines modernes situées aux portes du Grand Cotonou.'
  },

  // ===== 3. SUD & LITTORAL =====
  {
    id: 'ganvie',
    zone: 'sud',
    zoneName: '3. Sud & Littoral · Lac Nokoué, Porto-Novo, Cotonou, Ouidah & Grand-Popo',
    type: 'patrimoine',
    location: 'Lac Nokoué · Atlantique',
    category: 'Cité lacustre',
    title: 'Cité Lacustre de Ganvié (« Venise de l’Afrique »)',
    img: '/src/assets/images/ganvie_lake_village_1795514202620.jpg',
    desc: 'Plus grande cité lacustre d’Afrique bâtie sur pilotis par le peuple Tofinu, avec un programme de grands travaux d’assainissement des chenaux, d’embarcadères modernes et d’habitats témoins.',
    highlight: 'Village sur pilotis · Embarcadère & écotourisme lacustre',
    context: 'Située sur le lac Nokoué à quelques kilomètres au nord de Cotonou, Ganvié bénéficie d’aménagements structurants pour préserver son mode de vie lacustre et accueillir les visiteurs.'
  },
  {
    id: 'porto-novo',
    zone: 'sud',
    zoneName: '3. Sud & Littoral · Lac Nokoué, Porto-Novo, Cotonou, Ouidah & Grand-Popo',
    type: 'patrimoine',
    location: 'Porto-Novo · Ouémé (Capitale officielle)',
    category: 'Capitale & Musées',
    title: 'Porto-Novo : Musée Honmè, Musée du Vodun & Assemblée',
    img: '/src/assets/images/benin_abomey_palace_1795510019588.jpg',
    desc: 'Capitale constitutionnelle au riche patrimoine afro-brésilien, abritant le Musée Honmè, le Musée International du Vodun, la Grande Mosquée et le nouveau siège de l’Assemblée nationale.',
    highlight: 'Musée International du Vodun & architecture afro-brésilienne',
    context: 'Berceau du Festival des Masques, Porto-Novo conjugue grands chantiers institutionnels, musées internationaux et maisons d’hôtes culturelles au bord de la lagune.'
  },
  {
    id: 'amazone-marina',
    zone: 'sud',
    zoneName: '3. Sud & Littoral · Lac Nokoué, Porto-Novo, Cotonou, Ouidah & Grand-Popo',
    type: 'travaux',
    location: 'Cotonou · Littoral',
    category: 'Monuments & Grands Travaux',
    title: 'Place de l’Amazone, Jardins de Mathieu & Cité Ministérielle',
    img: '/public/assets/aistudio/caption_48b675b6.jpg',
    desc: 'Ensemble monumental du Boulevard de la Marina : statue de l’Amazone (30 m), Monument aux Dévoués, Jardins de Mathieu, Cité Ministérielle de Cadjèhoun et modernisation du Port de Cotonou.',
    highlight: 'Boulevard de la Marina · Statue de 30 m & Cité Ministérielle',
    context: 'Vitrines architecturales du Cotonou contemporain, ces grands travaux redessinent le front de mer autour de la mémoire des Agoojié, des espaces paysagers et des infrastructures de l’État.'
  },
  {
    id: 'hotels-cotonou',
    zone: 'sud',
    zoneName: '3. Sud & Littoral · Lac Nokoué, Porto-Novo, Cotonou, Ouidah & Grand-Popo',
    type: 'hotel',
    location: 'Marina & Haie Vive · Cotonou',
    category: 'Hôtels de Prestige',
    title: 'Grands Hôtels : Sofitel Marina, Novotel & Golden Tulip',
    img: '/src/assets/images/sofitel_marina_hotel_1795514202936.jpg',
    desc: 'Pôle hôtelier international de Cotonou : Sofitel Cotonou Marina Hotel & Spa (5★, près de 200 chambres et villas sur la Marina), Novotel Orisha (4★), Golden Tulip Le Diplomate (Haie Vive) et Azalaï Hôtel de la Plage.',
    highlight: 'Sofitel Cotonou Marina 5★ · Novotel · Golden Tulip · Azalaï',
    context: 'Dotée de centres de conférences, spas, piscines face à l’Atlantique et tables gastronomiques, l’hôtellerie cotonoise accueille sommets internationaux, voyageurs d’affaires et séjours balnéaires.'
  },
  {
    id: 'ouidah-grand-popo',
    zone: 'sud',
    zoneName: '3. Sud & Littoral · Lac Nokoué, Porto-Novo, Cotonou, Ouidah & Grand-Popo',
    type: 'hotel',
    location: 'Ouidah & Grand-Popo · Littoral Ouest',
    category: 'Culture, Plages & Resorts',
    title: 'Ouidah, Route des Pêches & Hôtels Balnéaires (Grand-Popo)',
    img: '/src/assets/images/benin_ouidah_coast_1795510019144.jpg',
    desc: 'Arènes culturelles et Porte du Non-Retour à Ouidah (MIME, Vodun Days), reliées par la Route des Pêches aux complexes balnéaires d’Avlékété et aux hôtels les pieds dans l’eau de Grand-Popo (Awale Plage, Casa del Papa).',
    highlight: 'Route des Pêches · MIME Ouidah · Awale Plage & Casa del Papa',
    context: 'De Ouidah à l’embouchure du fleuve Mono à Grand-Popo, le littoral ouest combine tourisme mémoriel, spiritualité Vodun et évasion balnéaire entre lagune et océan.'
  }
];

const EXECUTIVE = [
  {
    num: '01',
    role: 'Président de la République, Chef de l’État, Chef du Gouvernement',
    name: 'Romuald Wadagni',
    photo: '/src/assets/portraits/wadagni.jpg',
    desc: 'Investi le 24 mai 2026 pour un mandat de 5 ans, il conduit la politique de la Nation, préside le Conseil des ministres chaque mercredi et veille à la continuité de l’État.'
  },
  {
    num: '02',
    role: 'Vice-Présidente de la République',
    name: 'Mariam Chabi Talata Zimé Yérima',
    photo: '/src/assets/portraits/talata.jpg',
    desc: 'Elle assiste le Président de la République dans ses missions de représentation et veille à la cohésion des grandes institutions républicaines.'
  }
];

const POLES = [
  { id: 'all', label: 'Tous les pôles' },
  { id: 'pole1', label: 'Pôle 1 : Souveraineté, Justice & Diplomatie' },
  { id: 'pole2', label: 'Pôle 2 : Économie, Finances & Commerce' },
  { id: 'pole3', label: 'Pôle 3 : Infrastructures, Énergie & Innovation' },
  { id: 'pole4', label: 'Pôle 4 : Capital Humain, Culture & Gouvernance' }
];

const MINISTRIES = [
  {
    slug: 'justice-legislation',
    pole: 'pole1',
    poleName: 'Pôle 1 : Souveraineté, Justice & Diplomatie',
    name: 'Garde des Sceaux, Ministère de la Justice et de la Législation',
    minister: 'Yvon Détchénou',
    photo: '/src/assets/portraits/yvon-detchenou.jpg',
    location: {
      city: 'Cotonou',
      district: 'Haie Vive · 12e arrondissement',
      address: 'Route de l’Aéroport, près de la Place des Martyrs',
      postal: '01 BP 967 Cotonou'
    },
    mission: 'Administration de la justice, réformes législatives, droits humains et modernisation des juridictions.',
    devRole: 'En consolidant l’État de droit, la sécurité juridique des contrats et l’accès équitable aux tribunaux, la Justice crée le climat de confiance indispensable à l’investissement privé, à la paix sociale et à la protection des libertés.',
    actions: [
      'Dématérialisation des actes judiciaires (e-Casier judiciaire, juridictions commerciales et cours spécialisées).',
      'Modernisation des textes législatifs et amélioration de l’accessibilité de la justice sur tout le territoire.',
      'Protection des droits fondamentaux et amélioration continue des infrastructures judiciaires et pénitentiaires.'
    ]
  },
  {
    slug: 'affaires-etrangeres-afrodescendants',
    pole: 'pole1',
    poleName: 'Pôle 1 : Souveraineté, Justice & Diplomatie',
    name: 'Ministère des Affaires Étrangères, chargé de l’intégration des afrodescendants',
    minister: 'Corinne Amori Brunet',
    photo: '/src/assets/portraits/corinne-amori-brunet.jpg',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun / Haie Vive',
      address: 'Boulevard de la Marina, près de la Place du Souvenir',
      postal: '01 BP 318 Cotonou'
    },
    mission: 'Diplomatie, coopération internationale, intégration des afrodescendants et accompagnement de la diaspora.',
    devRole: 'La diplomatie d’influence et d’intégration positionne le Bénin comme pont stratégique entre l’Afrique et les communautés afrodescendantes, tout en mobilisant partenariats économiques, investissements et talents de la diaspora.',
    actions: [
      'Mise en œuvre de la politique d’accueil, de citoyenneté et d’intégration économique et culturelle des afrodescendants.',
      'Déploiement d’une diplomatie active au service des échanges commerciaux et des grands investissements.',
      'Modernisation des services consulaires et renforcement de la coopération régionale (CEDEAO, UEMOA, UA).'
    ]
  },
  {
    slug: 'interieur-securite-publique',
    pole: 'pole1',
    poleName: 'Pôle 1 : Souveraineté, Justice & Diplomatie',
    name: 'Ministère délégué auprès du Président de la République, chargé de l’Intérieur et de la Sécurité Publique',
    minister: 'Djibril Mama Cissé Moussa',
    photo: '/src/assets/portraits/djibril-mama-cisse-moussa.jpg',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun / Gbégamey',
      address: 'Cité Ministérielle & Zone administrative de Cotonou',
      postal: '01 BP 925 Cotonou'
    },
    mission: 'Sécurité intérieure, Police Républicaine, protection civile et gestion des titres de voyage et frontières.',
    devRole: 'La stabilité et la sécurité des personnes et des biens sur tout le territoire constituent la condition première de l’activité économique, du tourisme et de la sérénité citoyenne au quotidien.',
    actions: [
      'Maillage territorial de la Police Républicaine et prévention de la délinquance urbaine et rurale.',
      'Sécurisation des documents de voyage (passeports biométriques via la DEI) et contrôle aux frontières.',
      'Prévention des risques et renforcement des capacités de la protection civile.'
    ]
  },
  {
    slug: 'defense-nationale',
    pole: 'pole1',
    poleName: 'Pôle 1 : Souveraineté, Justice & Diplomatie',
    name: 'Ministère délégué auprès du Président de la République, chargé de la Défense Nationale',
    minister: 'Gildas Agonkan',
    photo: '/src/assets/portraits/gildas-agonkan.jpg',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun / Placodji',
      address: 'Boulevard de la Marina, en face de la Présidence de la République',
      postal: '01 BP 2493 Cotonou'
    },
    mission: 'Défense de l’intégrité territoriale, sécurisation des frontières et modernisation des Forces Armées Béninoises.',
    devRole: 'En garantissant l’intégrité du territoire national et la sécurité des zones frontalières, la Défense Nationale protège la souveraineté de l’État, les infrastructures stratégiques et le développement des régions du Nord.',
    actions: [
      'Montée en puissance opérationnelle, équipement moderne et formation continue des Forces Armées Béninoises.',
      'Sécurisation des frontières septentrionales et lutte contre les menaces transfrontalières.',
      'Participation du génie militaire aux ouvrages d’intérêt public et aux opérations de coopération régionale.'
    ]
  },
  {
    slug: 'economie-finances-cooperation',
    pole: 'pole2',
    poleName: 'Pôle 2 : Économie, Finances & Commerce',
    name: 'Ministère de l’Économie et des Finances, chargé de la Coopération',
    minister: 'Aristide Médénou',
    photo: '/src/assets/portraits/aristide-medenou.jpg',
    location: {
      city: 'Cotonou',
      district: 'Haie Vive · 12e arrondissement',
      address: 'Route de l’Aéroport, Rue 371',
      postal: '01 BP 302 Cotonou'
    },
    mission: 'Pilotage macroéconomique, politique fiscale et douanière, coopération financière et financement du développement.',
    devRole: 'Socle de la souveraineté économique, ce ministère coordonne la politique budgétaire et financière de l’État, garantit la stabilité macroéconomique et mobilise les partenariats internationaux au service de la transformation structurelle.',
    actions: [
      'Pilotage de la stratégie macroéconomique et coordination des pôles finances, budget et dette.',
      'Modernisation des régies financières et amélioration continue du climat des affaires.',
      'Coordination de la coopération financière bilatérale et multilatérale pour les projets structurants.'
    ]
  },
  {
    slug: 'finances-microfinance',
    pole: 'pole2',
    poleName: 'Pôle 2 : Économie, Finances & Commerce',
    name: 'Ministère délégué auprès du Ministre de l’Économie et des Finances, chargé des finances et de la microfinance',
    minister: 'Nicolas Yénoussi',
    photo: '/src/assets/portraits/nicolas-yenoussi.jpg',
    location: {
      city: 'Cotonou',
      district: 'Haie Vive · 12e arrondissement',
      address: 'Complexe du Ministère de l’Économie et des Finances, Route de l’Aéroport',
      postal: '01 BP 302 Cotonou'
    },
    mission: 'Régulation financière, trésorerie publique, inclusion financière et développement du secteur de la microfinance.',
    devRole: 'En élargissant l’accès au financement de proximité et en assurant la solidité des circuits financiers, ce ministère délégué soutient les ménages, les artisans et les entrepreneurs à travers tout le pays.',
    actions: [
      'Supervision des systèmes financiers décentralisés et sécurisation de l’épargne et du crédit de proximité.',
      'Facilitation de l’inclusion financière numérique et accompagnement des porteurs de micro-projets.',
      'Gestion performante des opérations du Trésor public et des recettes fiscales.'
    ]
  },
  {
    slug: 'budget-fonction-publique',
    pole: 'pole2',
    poleName: 'Pôle 2 : Économie, Finances & Commerce',
    name: 'Ministère délégué auprès du Ministre de l’Économie et des Finances, chargé du budget et de la fonction publique',
    minister: 'Rodrigue Chaou',
    photo: '/src/assets/portraits/rodrigue-chaou.jpg',
    location: {
      city: 'Cotonou',
      district: 'Haie Vive / Cadjèhoun',
      address: 'Complexe Économie et Finances, Route de l’Aéroport & Cité Ministérielle',
      postal: '01 BP 302 Cotonou'
    },
    mission: 'Préparation et exécution du budget de l’État, gestion de la masse salariale et modernisation de la fonction publique.',
    devRole: 'En alignant la dépense publique sur l’efficacité des politiques publiques et sur une fonction publique fondée sur le mérite, ce portefeuille optimise chaque franc investi dans les services aux citoyens.',
    actions: [
      'Élaboration des lois de finances orientées vers l’investissement productif et l’impact social.',
      'Gestion prévisionnelle des effectifs de l’État, transparence des recrutements et dialogue social.',
      'Dématérialisation des procédures budgétaires et suivi de la performance des administrations.'
    ]
  },
  {
    slug: 'ressources-exterieures-gestion-dette',
    pole: 'pole2',
    poleName: 'Pôle 2 : Économie, Finances & Commerce',
    name: 'Ministère délégué auprès du Ministre de l’Économie et des Finances, chargé de la mobilisation des ressources extérieures et de la gestion de la dette',
    minister: 'Hugues Oscar Lokossou',
    photo: '/src/assets/portraits/hugues-oscar-lokossou.jpg',
    location: {
      city: 'Cotonou',
      district: 'Haie Vive · 12e arrondissement',
      address: 'Complexe du Ministère de l’Économie et des Finances, Route de l’Aéroport',
      postal: '01 BP 302 Cotonou'
    },
    mission: 'Mobilisation des financements concessionnels et internationaux, gestion active de la dette souveraine et notation financière.',
    devRole: 'Il sécurise les ressources de long terme à conditions maîtrisées pour financer les infrastructures majeures tout en préservant la soutenabilité de la dette et la crédibilité du Bénin auprès des investisseurs.',
    actions: [
      'Structuration des émissions souveraines et gestion proactive du portefeuille de la dette publique.',
      'Négociation de financements concessionnels auprès des bailleurs multilatéraux et partenaires techniques.',
      'Suivi de la notation souveraine et transparence vis-à-vis des marchés financiers internationaux.'
    ]
  },
  {
    slug: 'tourisme-commerce-exterieur-industrie',
    pole: 'pole2',
    poleName: 'Pôle 2 : Économie, Finances & Commerce',
    name: 'Ministère du Tourisme et du Commerce Extérieur, en charge de l’Industrie et de la Promotion de l’investissement privé',
    minister: 'Olushegun Adjadi Bakari',
    photo: '/src/assets/portraits/olushegun-adjadi-bakari.jpg',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun · Route de l’Aéroport',
      address: 'Cité Ministérielle & pôle Commerce extérieur, Cadjèhoun',
      postal: '01 BP 2037 Cotonou'
    },
    mission: 'Rayonnement touristique, exportations, transformation industrielle locale et attraction des investissements privés.',
    devRole: 'À la croisée de l’industrialisation, de la balance commerciale et de l’attractivité touristique, ce ministère accélère la création de valeur ajoutée locale (Glo-Djigbé) et positionne la destination Bénin à l’international.',
    actions: [
      'Développement des zones industrielles et transformation locale des filières agricoles et textiles.',
      'Promotion des investissements directs étrangers et simplification des parcours investisseurs.',
      'Déploiement de la stratégie touristique nationale autour des pôles balnéaires, mémoriels et d’écotourisme.'
    ]
  },
  {
    slug: 'commerce-interieur-formalisation',
    pole: 'pole2',
    poleName: 'Pôle 2 : Économie, Finances & Commerce',
    name: 'Ministère du Commerce Intérieur, en charge de la formalisation de l’économie',
    minister: 'Shadiya Alimatou Assouman',
    photo: '/src/assets/portraits/shadiya-alimatou-assouman.jpg',
    location: {
      city: 'Cotonou',
      district: 'Ahouanlêko · 12e arrondissement',
      address: 'Bâtiment I, Cité Ministérielle (Boulevard de la Marina)',
      postal: '01 BP 2037 Cotonou'
    },
    mission: 'Régulation du marché intérieur, protection des consommateurs, modernisation des marchés et formalisation économique.',
    devRole: 'En intégrant progressivement les acteurs informels dans l’économie structurée et en modernisant les circuits de distribution, ce ministère protège le pouvoir d’achat et élargit le tissu des entreprises formelles.',
    actions: [
      'Accompagnement incitatif vers la formalisation des commerçants, artisans et micro-entreprises.',
      'Gestion et animation des marchés urbains et régionaux modernes sur l’ensemble du territoire.',
      'Contrôle de la qualité, métrologie et régulation loyale de la concurrence et des prix.'
    ]
  },
  {
    slug: 'pme-emploi-formation-professionnelle',
    pole: 'pole2',
    poleName: 'Pôle 2 : Économie, Finances & Commerce',
    name: 'Ministère des Petites et Moyennes Entreprises et de la Promotion de l’Emploi, en charge de la Formation Professionnelle',
    minister: 'Awaou Baco',
    photo: '/src/assets/portraits/awaou-baco.jpg',
    location: {
      city: 'Cotonou',
      district: 'Haie Vive · Route de l’Aéroport',
      address: 'Route de l’Aéroport, Cotonou',
      postal: '04 BP 786 Cotonou'
    },
    mission: 'Soutien aux PME, insertion professionnelle des jeunes, entrepreneuriat et formation qualifiante aux métiers.',
    devRole: 'Réponse directe au défi démographique, ce ministère aligne la formation professionnelle sur les besoins réels des entreprises et dote les PME des outils de croissance nécessaires pour créer des emplois durables.',
    actions: [
      'Appui technique, accès aux marchés et accompagnement financier des PME et jeunes entrepreneurs.',
      'Déploiement de centres de formation professionnelle et programmes d’apprentissage certifiants.',
      'Pilotage des dispositifs nationaux d’insertion et d’employabilité (en lien avec l’ANPE).'
    ]
  },
  {
    slug: 'agriculture-elevage-peche',
    pole: 'pole3',
    poleName: 'Pôle 3 : Infrastructures, Énergie & Innovation',
    name: 'Ministère de l’Agriculture, de l’Élevage et de la Pêche',
    minister: 'Adin Yeton Bloukounon Goubalan',
    photo: '/src/assets/portraits/adin-yeton-bloukounon-goubalan.jpg',
    location: {
      city: 'Cotonou',
      district: 'Haie Vive · 12e arrondissement',
      address: 'Route de l’Aéroport, Rue 371',
      postal: '01 BP 383 Cotonou'
    },
    mission: 'Souveraineté alimentaire, modernisation des filières agricoles, mécanisation, élevage et pêche durable.',
    devRole: 'Premier pourvoyeur d’emplois en milieu rural, le secteur agro-sylvo-pastoral et halieutique assure la sécurité alimentaire nationale, augmente les revenus paysans et alimente les unités industrielles locales.',
    actions: [
      'Structuration des filières porteuses (coton, anacarde, ananas, soja, maïs, riz) et hausse des rendements.',
      'Développement de la mécanisation agricole, des aménagements hydro-agricoles et du conseil rural.',
      'Modernisation de l’élevage et promotion de l’aquaculture et de la pêche durable.'
    ]
  },
  {
    slug: 'energie-eau-mines',
    pole: 'pole3',
    poleName: 'Pôle 3 : Infrastructures, Énergie & Innovation',
    name: 'Ministère de l’Énergie, de l’Eau et des Mines',
    minister: 'Édouard Dahomè',
    photo: '/src/assets/portraits/edouard-dahome.jpg',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun · 12e arrondissement',
      address: 'Avenue Patte d’Oie, Rue 390, Immeuble Loko',
      postal: '04 BP 1333 Cotonou'
    },
    mission: 'Production électrique, transition énergétique, accès universel à l’eau potable et valorisation minière.',
    devRole: 'L’autonomie énergétique et l’accès universel à l’eau potable conditionnent directement l’industrialisation du Bénin, la santé publique et la qualité de vie dans les villes comme dans les campagnes.',
    actions: [
      'Renforcement de la capacité électrique nationale, réseaux de transport et intégration solaire.',
      'Généralisation de l’accès à l’eau potable en milieu rural, périurbain et urbain.',
      'Cartographie géologique et valorisation responsable des ressources minérales.'
    ]
  },
  {
    slug: 'cadre-de-vie-transports-developpement-durable',
    pole: 'pole3',
    poleName: 'Pôle 3 : Infrastructures, Énergie & Innovation',
    name: 'Ministère du Cadre de Vie et des Transports, chargé du Développement Durable',
    minister: 'Georges Alé',
    photo: '/src/assets/portraits/georges-ale.jpg',
    location: {
      city: 'Cotonou',
      district: 'Placodji & Cité Ministérielle (Cadjèhoun)',
      address: '5e arrondissement (Placodji) & Boulevard de la Marina (Cité Ministérielle)',
      postal: '01 BP 3502 Cotonou'
    },
    mission: 'Aménagement urbain, routes, mobilité et transports, habitat, assainissement et protection de l’environnement.',
    devRole: 'En désenclavant le territoire par des axes routiers modernes, en assainissant les villes et en protégeant le littoral et les écosystèmes, ce ministère bâtit le cadre physique d’un Bénin résilient.',
    actions: [
      'Extension de l’asphaltage urbain, autoroutes et modernisation des corridors logistiques et portuaires.',
      'Programmes d’assainissement pluvial, de gestion des déchets et de logements décents.',
      'Lutte contre l’érosion côtière, préservation des forêts et transition écologique.'
    ]
  },
  {
    slug: 'transformation-digitale-innovation-ia',
    pole: 'pole3',
    poleName: 'Pôle 3 : Infrastructures, Énergie & Innovation',
    name: 'Ministère de la Transformation Digitale et de l’Innovation, en charge de la stratégie nationale d’intelligence artificielle',
    minister: 'Mahuna Akplogan',
    photo: '/src/assets/portraits/mahuna-akplogan.jpg',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun · Boulevard de la Marina',
      address: 'Cité Ministérielle (face au Palais des Congrès)',
      postal: '01 BP 120 Cotonou'
    },
    mission: 'Administration numérique, haut débit, innovation technologique et stratégie nationale d’intelligence artificielle.',
    devRole: 'Accélérateur de transparence et de compétitivité, ce ministère modernise les démarches publiques (.bj / .gouv.bj) et positionne le Bénin à l’avant-garde africaine de l’économie numérique et de l’IA.',
    actions: [
      'Déploiement des E-Services publics, interopérabilité des données et souveraineté numérique.',
      'Mise en œuvre de la stratégie nationale d’intelligence artificielle et appui aux start-ups innovantes.',
      'Extension du haut débit, cybersécurité et développement des compétences numériques.'
    ]
  },
  {
    slug: 'communication-medias',
    pole: 'pole3',
    poleName: 'Pôle 3 : Infrastructures, Énergie & Innovation',
    name: 'Ministère de la Communication, en charge des Médias',
    minister: 'Aurélie Adam Soulé épouse Zoumarou',
    photo: '/src/assets/portraits/aurelie-adam-soule-epouse-zoumarou.jpg',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun · 12e arrondissement',
      address: 'Avenue Pape Jean-Paul II, Cotonou',
      postal: '01 BP 120 Cotonou'
    },
    mission: 'Communication gouvernementale, transformation du paysage audiovisuel, soutien aux médias et accès à l’information.',
    devRole: 'En structurant des médias professionnels, pluriels et modernisés à l’ère numérique, ce ministère renforce la transparence de l’action publique, la culture citoyenne et le droit à une information fiable.',
    actions: [
      'Modernisation des médias de service public et transition technologique de l’audiovisuel national.',
      'Appui au professionnalisme de la presse et lutte contre la désinformation en ligne.',
      'Diffusion claire et accessible des politiques publiques auprès de tous les citoyens.'
    ]
  },
  {
    slug: 'sante',
    pole: 'pole4',
    poleName: 'Pôle 4 : Capital Humain, Culture & Gouvernance',
    name: 'Ministère de la Santé',
    minister: 'Benjamin Ignace Bodounrin Hounkpatin',
    photo: '/src/assets/portraits/benjamin-ignace-bodounrin-hounkpatin.jpg',
    location: {
      city: 'Cotonou',
      district: 'Sodjatinmé · 4e arrondissement',
      address: 'Rue 1684, Akpakpa / Sodjatinmé',
      postal: '01 BP 882 Cotonou'
    },
    mission: 'Offre de soins, modernisation des hôpitaux, santé communautaire et couverture sanitaire universelle.',
    devRole: 'Un capital humain en bonne santé est le premier moteur de productivité et de cohésion : ce ministère élève les plateaux techniques hospitaliers et rapproche la médecine préventive et curative de chaque famille.',
    actions: [
      'Construction et équipement d’hôpitaux de référence et modernisation des urgences médicales.',
      'Renforcement de la santé communautaire, de la vaccination et de la santé maternelle et infantile.',
      'Déploiement de la couverture sanitaire et sécurité pharmaceutique nationale.'
    ]
  },
  {
    slug: 'enseignement-superieur-recherche-technique',
    pole: 'pole4',
    poleName: 'Pôle 4 : Capital Humain, Culture & Gouvernance',
    name: 'Ministère de l’Enseignement Supérieur et de la Recherche Scientifique, en charge de la Formation Technique',
    minister: 'Sèdami Médégan Fagla',
    photo: '/src/assets/portraits/sedami-medegan-fagla.jpg',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun · 12e arrondissement',
      address: 'Avenue Pape Jean-Paul II',
      postal: '01 BP 348 Cotonou'
    },
    mission: 'Universités, recherche scientifique, innovation académique et essor de la formation technique supérieure.',
    devRole: 'En formant des ingénieurs, chercheurs et techniciens supérieurs en prise directe avec l’économie réelle, ce ministère alimente la souveraineté scientifique, industrielle et technologique du Bénin.',
    actions: [
      'Modernisation des campus universitaires, laboratoires de recherche et écoles polytechniques.',
      'Développement de la formation technique supérieure orientée vers les métiers d’avenir.',
      'Soutien à la recherche appliquée, aux brevets et aux partenariats université-entreprise.'
    ]
  },
  {
    slug: 'enseignement-secondaire',
    pole: 'pole4',
    poleName: 'Pôle 4 : Capital Humain, Culture & Gouvernance',
    name: 'Ministère de l’Enseignement Secondaire',
    minister: 'Clément Kouchadé',
    photo: '/src/assets/portraits/clement-kouchade.jpg',
    location: {
      city: 'Cotonou & Porto-Novo',
      district: 'Haie Vive (Cotonou) & Adjina (Porto-Novo)',
      address: 'Place des Martyrs (Cotonou) & Rue Delcassé (Porto-Novo)',
      postal: '10 BP 250 Cotonou'
    },
    mission: 'Collèges et lycées d’enseignement général, encadrement pédagogique et réussite scolaire des adolescents.',
    devRole: 'Charnière entre l’école fondamentale et les études supérieures ou professionnelles, l’enseignement secondaire élève le niveau scientifique, civique et linguistique de toute une génération.',
    actions: [
      'Réhabilitation et construction d’établissements secondaires et laboratoires de sciences.',
      'Formation continue et dotation en enseignants qualifiés sur tout le territoire.',
      'Amélioration de l’orientation scolaire et des résultats aux examens nationaux (BEPC, BAC).'
    ]
  },
  {
    slug: 'enseignements-maternel-primaire',
    pole: 'pole4',
    poleName: 'Pôle 4 : Capital Humain, Culture & Gouvernance',
    name: 'Ministère des Enseignements Maternel et Primaire',
    minister: 'Armand Kuyéma Natta',
    photo: '/src/assets/portraits/armand-kuyema-natta.jpg',
    location: {
      city: 'Porto-Novo',
      district: 'Oganla Sokè',
      address: 'Derrière l’administration générale de l’Assemblée Nationale, Porto-Novo',
      postal: '01 BP 10 Porto-Novo'
    },
    mission: 'Scolarisation universelle, cantines scolaires, qualité des apprentissages de base et petite enfance.',
    devRole: 'En garantissant l’accès de chaque enfant aux apprentissages fondamentaux et aux cantines scolaires dans toutes les communes, ce ministère réduit durablement les inégalités à la racine.',
    actions: [
      'Maintien et extension du programme national des cantines scolaires en zones rurales et urbaines.',
      'Construction et équipement de salles de classe maternelles et primaires.',
      'Renforcement de la maîtrise de la lecture, de l’écriture et du calcul dès les premières années.'
    ]
  },
  {
    slug: 'famille-action-sociale',
    pole: 'pole4',
    poleName: 'Pôle 4 : Capital Humain, Culture & Gouvernance',
    name: 'Ministère de la Famille et de l’Action Sociale',
    minister: 'Véronique Tognifodé',
    photo: '/src/assets/portraits/veronique-tognifode.jpg',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun · Boulevard de la Marina',
      address: 'Cité Ministérielle / Tour Administrative de Cotonou',
      postal: '01 BP 2639 Cotonou'
    },
    mission: 'Protection de la famille, de l’enfance et des personnes vulnérables, autonomisation des femmes et cohésion sociale.',
    devRole: 'Garant de la solidarité républicaine, ce ministère protège les ménages fragiles, défend les droits des femmes et des enfants et accompagne l’autonomisation sociale sur l’ensemble du territoire.',
    actions: [
      'Protection de l’enfance, accompagnement des personnes âgées et en situation de handicap.',
      'Lutte contre les violences basées sur le genre et promotion du leadership féminin.',
      'Déploiement des filets sociaux et centres de promotion sociale dans les communes.'
    ]
  },
  {
    slug: 'culture-arts-patrimoine',
    pole: 'pole4',
    poleName: 'Pôle 4 : Capital Humain, Culture & Gouvernance',
    name: 'Ministère de la Culture, des Arts et du Patrimoine',
    minister: 'Yassine Latoundji',
    photo: '/src/assets/portraits/yassine-latoundji.jpg',
    location: {
      city: 'Cotonou',
      district: 'Haie Vive · 12e arrondissement',
      address: 'Route de l’Aéroport (derrière le Lycée Montaigne)',
      postal: '01 BP 2037 Cotonou'
    },
    mission: 'Préservation du patrimoine matériel et immatériel, musées nationaux, industries créatives et rayonnement artistique.',
    devRole: 'La culture et le patrimoine historique du Bénin constituent à la fois le ciment de l’identité nationale et une filière économique créatrice d’emplois dans les musées, le spectacle vivant et les arts.',
    actions: [
      'Gestion des grands musées (Abomey, Ouidah, Porto-Novo, Cotonou) et mise en valeur des trésors royaux.',
      'Soutien aux créateurs, artistes, festivals nationaux et économie des industries culturelles.',
      'Sauvegarde des sites patrimoniaux et transmission des savoirs et arts traditionnels.'
    ]
  },
  {
    slug: 'sports-engagement-civique',
    pole: 'pole4',
    poleName: 'Pôle 4 : Capital Humain, Culture & Gouvernance',
    name: 'Ministère des Sports et de l’Engagement Civique',
    minister: 'Benoît K. M. Dato',
    photo: '/src/assets/portraits/benoit-k-m-dato.jpg',
    location: {
      city: 'Cotonou',
      district: 'Gbégamey · 11e arrondissement',
      address: 'Enceinte du Stade de l’Amitié Général Mathieu Kérékou (Palais des Sports)',
      postal: '03 BP 2103 Cotonou'
    },
    mission: 'Infrastructures sportives, sport scolaire, détection des talents, sélections nationales et citoyenneté active.',
    devRole: 'Le sport et l’engagement civique fédèrent la jeunesse autour des valeurs d’effort, de discipline et de patriotisme, tout en dotant chaque commune d’équipements sportifs modernes.',
    actions: [
      'Développement des stades omnisports communaux, académies sportives et classes sportives.',
      'Programmes d’engagement civique et de volontariat pour la jeunesse béninoise.',
      'Accompagnement des fédérations et rayonnement des équipes nationales à l’international.'
    ]
  },
  {
    slug: 'decentralisation-gouvernance-locale',
    pole: 'pole4',
    poleName: 'Pôle 4 : Capital Humain, Culture & Gouvernance',
    name: 'Ministère de la Décentralisation et de la Gouvernance Locale',
    minister: 'Janvier Yahouédéou',
    photo: '/src/assets/portraits/janvier-yahouedeou.jpg',
    location: {
      city: 'Cotonou',
      district: 'Cadjèhoun · 12e arrondissement',
      address: 'En face de la Présidence de la République, Cadjèhoun',
      postal: '01 BP 925 Cotonou'
    },
    mission: 'Tutelle et appui aux 12 départements et 77 communes, développement local et administration de proximité.',
    devRole: 'En renforçant les capacités techniques, financières et managériales des 77 communes, la décentralisation rapproche l’action publique des citoyens et assure un développement territorial équilibré.',
    actions: [
      'Accompagnement des mairies dans la gouvernance locale et la mise en œuvre des plans communaux.',
      'Transfert de compétences et mobilisation des ressources financières locales (FADeC).',
      'Amélioration de la qualité des services publics de proximité dans les 77 communes.'
    ]
  }
];

const SERVICE_CATEGORIES = [
  { id: 'all', label: 'Toutes les catégories' },
  { id: 'guichet', label: '1. Guichet Unique' },
  { id: 'etat-civil', label: '2. État Civil, Identité & Voyages' },
  { id: 'entreprises', label: '3. Entreprises, Impôts & Foncier' },
  { id: 'justice', label: '4. Justice & Sécurité' },
  { id: 'education', label: '5. Éducation, Emploi & Protection Sociale' }
];

const ESERVICES = [
  { cat: 'guichet', catName: '1. Guichet Unique', title: 'Portail National des Services Publics', domain: 'service-public.bj', url: 'https://service-public.bj', action: 'Consulter la liste complète de plus de 250 démarches administratives (pièces à fournir, délais, coûts) et accéder aux téléservices associés.' },

  { cat: 'etat-civil', catName: '2. État Civil, Identité & Voyages', title: 'ANIP (Agence Nationale d’Identification des Personnes)', domain: 'eservices.anip.bj', url: 'https://eservices.anip.bj', action: 'Demander et télécharger son Acte de naissance sécurisé, son Certificat d’Identification Personnelle (CIP), sa carte biométrique, son certificat de résidence ou de coutume.' },
  { cat: 'etat-civil', catName: '2. État Civil, Identité & Voyages', title: 'DEI (Direction de l’Émigration et de l’Immigration)', domain: 'dei.gouv.bj', url: 'https://dei.gouv.bj', action: 'Prendre rendez-vous en ligne pour l’établissement ou le renouvellement du passeport biométrique béninois.' },
  { cat: 'etat-civil', catName: '2. État Civil, Identité & Voyages', title: 'e-Visa Bénin', domain: 'evisa.bj', url: 'https://evisa.bj', action: 'Demander en ligne un visa touristique ou d’affaires pour entrer au Bénin avec délivrance électronique rapide.' },

  { cat: 'entreprises', catName: '3. Entreprises, Impôts & Foncier', title: 'MonEntreprise.bj (APIEx)', domain: 'monentreprise.bj', url: 'https://monentreprise.bj', action: 'Créer son entreprise (entreprise individuelle ou société) en ligne, obtenir son RCCM et son attestation d’immatriculation sans déplacement.' },
  { cat: 'entreprises', catName: '3. Entreprises, Impôts & Foncier', title: 'e-Services DGI (Direction Générale des Impôts)', domain: 'e-services.impots.bj', url: 'https://e-services.impots.bj', action: 'Télé-déclarer et payer ses impôts en ligne, obtenir son Identifiant Fiscal Unique (IFU) et télécharger son attestation fiscale.' },
  { cat: 'entreprises', catName: '3. Entreprises, Impôts & Foncier', title: 'ANDF (Agence Nationale du Domaine et du Foncier)', domain: 'andf.bj', url: 'https://andf.bj', action: 'Vérifier l’authenticité d’un titre foncier, consulter le cadastre numérique et suivre ses formalités foncières.' },

  { cat: 'justice', catName: '4. Justice & Sécurité', title: 'e-Casier Judiciaire', domain: 'casierjudiciaire.justice.gouv.bj', url: 'https://casierjudiciaire.justice.gouv.bj', action: 'Demander en ligne son bulletin n°3 de casier judiciaire et le recevoir par voie électronique sécurisée.' },
  { cat: 'justice', catName: '4. Justice & Sécurité', title: 'Ministère de la Justice et de la Législation', domain: 'justice.gouv.bj', url: 'https://justice.gouv.bj', action: 'Accéder aux informations judiciaires, aux démarches liées au certificat de nationalité et aux services des tribunaux.' },

  { cat: 'education', catName: '5. Éducation, Emploi & Protection Sociale', title: 'e-Résultats', domain: 'eresultats.bj', url: 'https://eresultats.bj', action: 'Consulter gratuitement les résultats officiels des examens et concours nationaux (CEP, BEPC, BAC, examens professionnels).' },
  { cat: 'education', catName: '5. Éducation, Emploi & Protection Sociale', title: 'CNSS (Caisse Nationale de Sécurité Sociale)', domain: 'cnss.bj', url: 'https://cnss.bj', action: 'Déclarer ses cotisations sociales (employeurs), consulter son relevé de carrière et suivre ses prestations sociales.' },
  { cat: 'education', catName: '5. Éducation, Emploi & Protection Sociale', title: 'ANPE Bénin (Agence Nationale pour l’Emploi)', domain: 'anpe.bj', url: 'https://anpe.bj', action: 'Consulter les offres d’emploi, s’inscrire comme demandeur d’emploi et accéder aux programmes d’insertion professionnelle.' }
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const BTN_ICON = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  rotate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>'
};

const state = {
  route: 'decouvrir',
  instCat: 'all',
  instQuery: '',
  activeInstitutionSlug: null,
  activeSymbol: 'drapeau',
  activeMonumentId: null,
  monumentZone: 'all',
  monumentType: 'all',
  monumentQuery: '',
  activeMinistrySlug: null,
  govPole: 'all',
  govQuery: '',
  serviceCat: 'all',
  serviceQuery: ''
};

function initialsOf(name) {
  return name
    .split(/\s+/)
    .filter((w) => w.length > 1 && !['de', 'du', 'la', 'le', 'et', 'épouse'].includes(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

function renderPortraitMarkup(photo, name, isLarge = false) {
  const ini = initialsOf(name);
  if (photo) {
    return `<img src="${photo}" alt="Portrait officiel de ${name}" referrerpolicy="no-referrer" onerror="this.parentElement.innerHTML='<div class=\\'portrait-monogram\\'><b>${ini}</b><span>${name}</span></div>'">`;
  }
  if (isLarge) {
    return `<div class="portrait-monogram"><b>${ini}</b><span>${name}</span></div>`;
  }
  return `<span>${ini}</span>`;
}

// ===== QUOTA GOOGLE MAPS (SECTION 8) =====
window.addEventListener('gmp-quota-exceeded', () => {
  const banner = $('#gmpQuotaBanner');
  if (banner) banner.hidden = false;
});

// ===== ROUTAGE MULTI-VUES & ANCRES FLUIDES =====
const VALID_ROUTES = ['decouvrir', 'gouvernement', 'eservices', 'institutions', 'ministere', 'institution'];
const ANCHOR_TO_ROUTE = {
  accueil: 'decouvrir',
  apropos: 'decouvrir',
  symboles: 'decouvrir',
  patrimoine: 'decouvrir',
  'autres-institutions': 'institutions'
};

function scrollToAnchorSmooth(anchorId) {
  const el = document.getElementById(anchorId);
  if (!el) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function setRoute(targetRoute, scrollAnchorId = null, param = null) {
  let view = targetRoute;
  if (!VALID_ROUTES.includes(view)) {
    view = 'decouvrir';
  }

  const wasSameView = state.route === view;
  state.route = view;

  $$('.page-view').forEach((sec) => {
    const active = sec.id === `view-${view}`;
    sec.hidden = !active;
  });

  if (view !== 'ministere') {
    window.Ministry3DScene?.dispose();
  }

  if (view === 'ministere' && param) {
    state.activeMinistrySlug = param;
    renderMinistryPage(param);
  }
  if (view === 'institution' && param) {
    state.activeInstitutionSlug = param;
    renderInstitutionPage(param);
  }

  const activeNavKey = view === 'ministere'
    ? 'gouvernement'
    : (view === 'institution' ? 'institutions' : view);

  $$('.pill-nav a, .mobile-link').forEach((a) => {
    a.classList.toggle('active', a.dataset.route === activeNavKey);
  });

  const mobileMenu = $('#mobileMenu');
  const menuToggle = $('#menuToggle');
  if (mobileMenu && !mobileMenu.hidden) {
    mobileMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (scrollAnchorId) {
    scrollToAnchorSmooth(scrollAnchorId);
  } else if (!wasSameView || view === 'ministere' || view === 'institution') {
    window.scrollTo({ top: 0, behavior: 'auto' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function navigateToHash(hashValue) {
  if (window.location.hash !== hashValue) {
    history.pushState(null, '', hashValue);
  }
}

function applyHashFromLocation() {
  const rawHash = window.location.hash.replace('#', '');
  if (rawHash.startsWith('ministere/')) {
    const slug = rawHash.split('/')[1];
    setRoute('ministere', null, slug);
  } else if (rawHash.startsWith('institution/')) {
    const slug = rawHash.split('/')[1];
    setRoute('institution', null, slug);
  } else if (['decouvrir', 'gouvernement', 'eservices', 'institutions'].includes(rawHash)) {
    setRoute(rawHash);
  } else if (ANCHOR_TO_ROUTE[rawHash]) {
    setRoute(ANCHOR_TO_ROUTE[rawHash], rawHash);
  } else {
    setRoute('decouvrir');
  }
}

window.addEventListener('hashchange', applyHashFromLocation);
window.addEventListener('popstate', applyHashFromLocation);

document.addEventListener('click', (e) => {
  const minLink = e.target.closest('[data-ministry-slug]');
  if (minLink) {
    e.preventDefault();
    const slug = minLink.dataset.ministrySlug;
    navigateToHash(`#ministere/${slug}`);
    setRoute('ministere', null, slug);
    return;
  }

  const instLink = e.target.closest('[data-institution-slug]');
  if (instLink) {
    e.preventDefault();
    const slug = instLink.dataset.institutionSlug;
    navigateToHash(`#institution/${slug}`);
    setRoute('institution', null, slug);
    return;
  }

  const el = e.target.closest('[data-route]');
  if (el) {
    e.preventDefault();
    const route = el.dataset.route;
    const href = el.getAttribute('href') || '';
    const hashId = href.startsWith('#') ? href.slice(1) : '';
    const anchorId = el.dataset.anchor || (hashId && hashId !== route ? hashId : null);
    navigateToHash(anchorId ? `#${anchorId}` : `#${route}`);
    setRoute(route, anchorId);
    return;
  }

  const anchorLink = e.target.closest('a[href^="#"]');
  if (anchorLink && !anchorLink.classList.contains('open-contact')) {
    const hashId = (anchorLink.getAttribute('href') || '').slice(1);
    if (ANCHOR_TO_ROUTE[hashId]) {
      e.preventDefault();
      navigateToHash(`#${hashId}`);
      setRoute(ANCHOR_TO_ROUTE[hashId], hashId);
    }
  }
});

$('#menuToggle').addEventListener('click', () => {
  const menu = $('#mobileMenu');
  const open = menu.hidden;
  menu.hidden = !open;
  $('#menuToggle').setAttribute('aria-expanded', String(open));
});

// ===== PAGE 1 : REPÈRES, SYMBOLES, MONUMENTS (FICHE MODALE) =====
function renderStateFacts() {
  $('#stateFacts').innerHTML = STATE_FACTS.map((f) => `
    <div class="fact-row">
      <dt>${f.label}</dt>
      <dd>${f.value}</dd>
    </div>
  `).join('');
}

function renderInstitutionFilters() {
  $('#institutionFilters').innerHTML = INSTITUTION_CATEGORIES.map((c) => `
    <button type="button" class="chip ${state.instCat === c.id ? 'on' : ''}" role="tab" aria-selected="${state.instCat === c.id}" data-inst-cat="${c.id}">
      ${c.label}
    </button>
  `).join('');
}

function renderInstitutions() {
  const q = state.instQuery.trim().toLowerCase();
  const filtered = INSTITUTIONS.filter((inst) => {
    const matchCat = state.instCat === 'all' || inst.cat === state.instCat;
    const matchQuery = !q || `${inst.name} ${inst.leader} ${inst.location.city} ${inst.location.address} ${inst.summary} ${inst.catName}`.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  $('#institutionCount').textContent = `${filtered.length} institution${filtered.length > 1 ? 's' : ''}`;

  if (!filtered.length) {
    $('#institutionsGrid').innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <p>Aucune institution ne correspond à « ${state.instQuery} ».</p>
        <button type="button" class="btn btn-dark btn-sm" id="resetInstBtn">${BTN_ICON.rotate} Tout afficher</button>
      </div>
    `;
    return;
  }

  $('#institutionsGrid').innerHTML = filtered.map((inst) => `
    <article class="why-card">
      <div class="inst-card-head">
        <span class="num">${inst.num}</span>
        <span class="inst-cat-label">${inst.catName}</span>
      </div>
      <h3>${inst.name}</h3>
      <p class="minister-name">${inst.leaderLabel} : ${inst.leader}</p>
      <p>${inst.summary}</p>
      <p class="ministry-loc-line">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${inst.location.city} · ${inst.location.district}
      </p>
      <div class="inst-card-actions">
        <button type="button" class="btn btn-dark btn-sm" data-institution-slug="${inst.id}">
          ${BTN_ICON.file}
          Détails de l’institution
          ${BTN_ICON.arrowRight}
        </button>
        ${inst.url ? `<a href="${inst.url}" target="_blank" rel="noopener noreferrer" class="link-action">${inst.domain} ${BTN_ICON.external}</a>` : ''}
      </div>
    </article>
  `).join('');
}

function renderInstitutionPage(slug) {
  const idx = INSTITUTIONS.findIndex((x) => x.id === slug);
  const inst = idx >= 0 ? INSTITUTIONS[idx] : INSTITUTIONS[0];
  const prev = INSTITUTIONS[(idx - 1 + INSTITUTIONS.length) % INSTITUTIONS.length];
  const next = INSTITUTIONS[(idx + 1) % INSTITUTIONS.length];

  $('#instDetailCat').textContent = `Institution ${inst.num} · ${inst.catName} · ${inst.location.city}`;
  $('#instDetailTitle').textContent = inst.name;
  $('#instDetailLead').textContent = `${inst.leaderLabel} : ${inst.leader} — ${inst.summary}`;

  $('#instDetailPhotoBox').innerHTML = `
    <div class="ministry-portrait-frame">
      <div class="portrait-monogram">
        <b>${initialsOf(inst.leader)}</b>
        <span style="font-size:15px;font-weight:700;color:var(--ink)">${inst.leader}</span>
        <span>${inst.leaderLabel}</span>
      </div>
    </div>
    <span class="badge">${inst.name} · ${inst.location.city}</span>
  `;

  $('#instDetailBody').innerHTML = `
    <p class="lead">${inst.name}</p>
    <p><strong>Direction actuelle :</strong> ${inst.leader} (${inst.leaderLabel})</p>
    <p><strong>Gouvernance :</strong> ${inst.governance}</p>

    <div class="location-box">
      <div class="location-head">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <h3>Localisation &amp; Siège de l’institution</h3>
      </div>
      <dl class="location-grid">
        <div class="fact-row">
          <dt>Ville</dt>
          <dd>${inst.location.city}</dd>
        </div>
        <div class="fact-row">
          <dt>Quartier / Zone</dt>
          <dd>${inst.location.district}</dd>
        </div>
        <div class="fact-row">
          <dt>Adresse / Repère</dt>
          <dd>${inst.location.address}</dd>
        </div>
        <div class="fact-row">
          <dt>Portail / Contact</dt>
          <dd>${inst.url ? `<a href="${inst.url}" target="_blank" rel="noopener noreferrer" style="color:var(--orange);font-weight:700">${inst.location.contact}</a>` : inst.location.contact}</dd>
        </div>
      </dl>
    </div>

    <div class="dev-role-box">
      <h3>Rôle dans le développement du Bénin</h3>
      <p>${inst.devRole}</p>
    </div>

    <h3 style="font-size:16px;font-weight:700;margin-bottom:8px">Missions et prérogatives principales</h3>
    <ul class="ministry-actions-list">
      ${inst.actions.map((a) => `<li>${a}</li>`).join('')}
    </ul>

    <div class="hero-cta" style="margin-top:16px">
      <button type="button" class="btn btn-dark btn-sm" data-route="institutions">${BTN_ICON.arrowLeft} Retour aux Institutions</button>
      ${inst.url ? `<a href="${inst.url}" target="_blank" rel="noopener noreferrer" class="btn btn-light btn-sm">${BTN_ICON.external} Site officiel (${inst.domain})</a>` : ''}
      <a href="#eservices" class="btn btn-dark btn-sm" data-route="eservices">${BTN_ICON.grid} Voir les E-Services</a>
    </div>
  `;

  $('#institutionPager').innerHTML = `
    <button type="button" class="link-action" data-institution-slug="${prev.id}">${BTN_ICON.arrowLeft} Précédent : ${prev.name}</button>
    <button type="button" class="link-action" data-institution-slug="${next.id}">Suivant : ${next.name} ${BTN_ICON.arrowRight}</button>
  `;
}

$('#institutionSearch').addEventListener('input', (e) => {
  state.instQuery = e.target.value;
  renderInstitutions();
});

document.addEventListener('click', (e) => {
  const catBtn = e.target.closest('[data-inst-cat]');
  if (catBtn) {
    state.instCat = catBtn.dataset.instCat;
    renderInstitutionFilters();
    renderInstitutions();
    return;
  }
  if (e.target.id === 'resetInstBtn') {
    state.instCat = 'all';
    state.instQuery = '';
    $('#institutionSearch').value = '';
    renderInstitutionFilters();
    renderInstitutions();
  }
});

function renderSymbols() {
  $('#symbolTabs').innerHTML = SYMBOLS.map((s) => `
    <button type="button" class="chip ${s.id === state.activeSymbol ? 'on' : ''}" role="tab" aria-selected="${s.id === state.activeSymbol}" data-symbol="${s.id}">
      ${s.tab}
    </button>
  `).join('');

  const active = SYMBOLS.find((s) => s.id === state.activeSymbol) || SYMBOLS[0];
  $('#symbolStage').innerHTML = `
    <div class="symbol-visual">${active.visual()}</div>
    <div class="symbol-info">
      <p class="symbol-kicker">Symbole ${active.index} sur 04</p>
      <h4>${active.title}</h4>
      <p>${active.desc}</p>
      ${active.extra ? active.extra() : ''}
      <div class="symbol-details">
        ${active.details.map((d) => `<div><strong>${d.k}</strong><span>${d.v}</span></div>`).join('')}
      </div>
    </div>
  `;

  $('#symbolsSummary').innerHTML = SYMBOLS.map((s) => `
    <button type="button" class="why-card clickable ${s.id === state.activeSymbol ? 'active-card' : ''}" data-symbol="${s.id}">
      <span class="num">${s.index}</span>
      <h3>${s.title}</h3>
      <p>${s.short}</p>
    </button>
  `).join('');
}

document.addEventListener('click', (e) => {
  const sym = e.target.closest('[data-symbol]');
  if (!sym) return;
  state.activeSymbol = sym.dataset.symbol;
  renderSymbols();
});

function renderMonumentFilters() {
  $('#monumentZoneFilters').innerHTML = MONUMENT_ZONES.map((z) => `
    <button type="button" class="chip ${state.monumentZone === z.id ? 'on' : ''}" role="tab" aria-selected="${state.monumentZone === z.id}" data-mzone="${z.id}">
      ${z.label}
    </button>
  `).join('');

  $('#monumentTypeFilters').innerHTML = MONUMENT_TYPES.map((t) => `
    <button type="button" class="chip ${state.monumentType === t.id ? 'on' : ''}" role="tab" aria-selected="${state.monumentType === t.id}" data-mtype="${t.id}">
      ${t.label}
    </button>
  `).join('');
}

function renderMonuments() {
  const q = state.monumentQuery.trim().toLowerCase();
  const filtered = MONUMENTS.filter((m) => {
    const matchZone = state.monumentZone === 'all' || m.zone === state.monumentZone;
    const matchType = state.monumentType === 'all' || m.type === state.monumentType;
    const matchQuery = !q || `${m.title} ${m.location} ${m.category} ${m.desc} ${m.highlight} ${m.zoneName}`.toLowerCase().includes(q);
    return matchZone && matchType && matchQuery;
  });

  $('#monumentCount').textContent = `${filtered.length} étape${filtered.length > 1 ? 's' : ''} · Nord → Sud`;

  if (!filtered.length) {
    $('#monumentsContainer').innerHTML = `
      <div class="empty-state">
        <p>Aucun site ou hôtel ne correspond à votre recherche.</p>
        <button type="button" class="btn btn-dark btn-sm" id="resetMonumentBtn">${BTN_ICON.rotate} Réinitialiser</button>
      </div>
    `;
    return;
  }

  const zoneOrder = ['nord', 'centre', 'sud'];
  $('#monumentsContainer').innerHTML = zoneOrder.map((zoneId) => {
    const items = filtered.filter((m) => m.zone === zoneId);
    if (!items.length) return '';
    return `
      <div class="pole-group">
        <h3 class="pole-heading">${items[0].zoneName}</h3>
        <div class="monuments-grid">
          ${items.map((m) => `
            <article class="monument-card">
              <div class="monument-pic">
                <img src="${m.img}" alt="${m.title}" referrerpolicy="no-referrer">
              </div>
              <div class="monument-body">
                <p class="monument-meta">${m.location} · ${m.category}</p>
                <h3>${m.title}</h3>
                <p>${m.desc}</p>
                <button type="button" class="link-action" data-monument="${m.id}">
                  ${BTN_ICON.file}
                  Consulter la fiche
                  ${BTN_ICON.arrowRight}
                </button>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

$('#monumentSearch').addEventListener('input', (e) => {
  state.monumentQuery = e.target.value;
  renderMonuments();
});

document.addEventListener('click', (e) => {
  const zBtn = e.target.closest('[data-mzone]');
  if (zBtn) {
    state.monumentZone = zBtn.dataset.mzone;
    renderMonumentFilters();
    renderMonuments();
    return;
  }
  const tBtn = e.target.closest('[data-mtype]');
  if (tBtn) {
    state.monumentType = tBtn.dataset.mtype;
    renderMonumentFilters();
    renderMonuments();
    return;
  }
  if (e.target.id === 'resetMonumentBtn') {
    state.monumentZone = 'all';
    state.monumentType = 'all';
    state.monumentQuery = '';
    $('#monumentSearch').value = '';
    renderMonumentFilters();
    renderMonuments();
  }
});

let lastMonumentTrigger = null;

function openMonumentModal(id, triggerEl = null) {
  const idx = MONUMENTS.findIndex((x) => x.id === id);
  if (idx === -1) return;
  const m = MONUMENTS[idx];
  const prev = MONUMENTS[(idx - 1 + MONUMENTS.length) % MONUMENTS.length];
  const next = MONUMENTS[(idx + 1) % MONUMENTS.length];
  state.activeMonumentId = m.id;

  const modal = $('#monumentModal');
  if (triggerEl && !modal.contains(triggerEl)) {
    lastMonumentTrigger = triggerEl;
  }

  $('#monModalBody').innerHTML = `
    <div class="monument-modal-pic">
      <img src="${m.img}" alt="${m.title}" referrerpolicy="no-referrer">
    </div>
    <p class="symbol-kicker">${m.location} · ${m.category}</p>
    <h3 id="monModalTitle" style="font-size:24px;margin-bottom:10px">${m.title}</h3>
    <p style="font-size:13.5px;line-height:1.7;color:#5c5648;margin-bottom:12px">${m.desc}</p>
    <p style="font-size:13px;line-height:1.7;color:var(--ink);margin-bottom:14px">${m.context}</p>
    <p style="font-size:12px;font-weight:700;color:var(--ink)">Repère patrimonial : <span style="color:var(--orange)">${m.highlight}</span></p>
    <div class="monument-modal-footer">
      <button type="button" class="link-action" data-monument="${prev.id}">${BTN_ICON.arrowLeft} ${prev.title.split('(')[0].trim()}</button>
      <button type="button" class="btn btn-dark btn-sm" data-monument="${next.id}">Suivant : ${next.title.split('(')[0].trim()} ${BTN_ICON.arrowRight}</button>
    </div>
  `;

  modal.hidden = false;
  modal.scrollTop = 0;
  $('#monModalClose').focus({ preventScroll: true });
}

function closeMonumentModal() {
  $('#monumentModal').hidden = true;
  if (lastMonumentTrigger && document.contains(lastMonumentTrigger)) {
    lastMonumentTrigger.focus({ preventScroll: true });
  }
  lastMonumentTrigger = null;
}

document.addEventListener('click', (e) => {
  const mBtn = e.target.closest('[data-monument]');
  if (mBtn) {
    e.preventDefault();
    openMonumentModal(mBtn.dataset.monument, mBtn);
  }
});

$('#monModalClose').addEventListener('click', closeMonumentModal);
$('#monumentModal').addEventListener('click', (e) => {
  if (e.target === $('#monumentModal')) closeMonumentModal();
});

// ===== PAGE 2 : LE GOUVERNEMENT & PAGE DÉDIÉE MINISTÈRE =====
function renderExecutive() {
  $('#executiveGrid').innerHTML = EXECUTIVE.map((ex) => `
    <article class="why-card exec-card">
      <div class="exec-portrait">
        ${renderPortraitMarkup(ex.photo, ex.name, true)}
      </div>
      <div>
        <span class="num">${ex.num}</span>
        <p class="minister-name">${ex.role}</p>
        <h3>${ex.name}</h3>
        <p>${ex.desc}</p>
      </div>
    </article>
  `).join('');
}

function renderGovFilters() {
  $('#govFilters').innerHTML = POLES.map((p) => `
    <button type="button" class="chip ${state.govPole === p.id ? 'on' : ''}" role="tab" aria-selected="${state.govPole === p.id}" data-pole="${p.id}">
      ${p.label}
    </button>
  `).join('');
}

function renderMinistries() {
  const q = state.govQuery.trim().toLowerCase();
  const filtered = MINISTRIES.filter((m) => {
    const matchPole = state.govPole === 'all' || m.pole === state.govPole;
    const matchQuery = !q || `${m.name} ${m.minister} ${m.mission} ${m.poleName} ${m.location.city} ${m.location.district} ${m.location.address}`.toLowerCase().includes(q);
    return matchPole && matchQuery;
  });

  $('#govCount').textContent = `${filtered.length} ministère${filtered.length > 1 ? 's' : ''}`;

  if (!filtered.length) {
    $('#ministriesContainer').innerHTML = `
      <div class="empty-state">
        <p>Aucun ministère ne correspond à « ${state.govQuery} ».</p>
        <button type="button" class="btn btn-dark btn-sm" id="resetGovBtn">${BTN_ICON.rotate} Réinitialiser</button>
      </div>
    `;
    return;
  }

  const poleOrder = ['pole1', 'pole2', 'pole3', 'pole4'];
  let idx = 1;
  $('#ministriesContainer').innerHTML = poleOrder.map((poleId) => {
    const items = filtered.filter((m) => m.pole === poleId);
    if (!items.length) return '';
    return `
      <div class="pole-group">
        <h3 class="pole-heading">${items[0].poleName}</h3>
        <div class="why">
          ${items.map((m) => {
            const num = String(idx++).padStart(2, '0');
            return `
              <article class="why-card">
                <div class="ministry-card-head">
                  <div class="ministry-avatar">${renderPortraitMarkup(m.photo, m.minister, false)}</div>
                  <div>
                    <span style="font-size:11px;font-weight:700;color:var(--muted)">${num} · ${m.poleName.split(':')[0].trim()}</span>
                    <p class="minister-name" style="margin-bottom:0">${m.minister}</p>
                  </div>
                </div>
                <h3>${m.name}</h3>
                <p>${m.mission}</p>
                <p class="ministry-loc-line">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  ${m.location.city} · ${m.location.district}
                </p>
                <div style="margin-top:16px">
                  <button type="button" class="btn btn-dark btn-sm" data-ministry-slug="${m.slug}">
                    ${BTN_ICON.file}
                    Détails du ministère
                    ${BTN_ICON.arrowRight}
                  </button>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderMinistryPage(slug) {
  const idx = MINISTRIES.findIndex((m) => m.slug === slug);
  const m = idx >= 0 ? MINISTRIES[idx] : MINISTRIES[0];
  const prev = MINISTRIES[(idx - 1 + MINISTRIES.length) % MINISTRIES.length];
  const next = MINISTRIES[(idx + 1) % MINISTRIES.length];

  $('#minDetailPole').textContent = `${m.poleName} · ${m.location.city}`;
  $('#minDetailTitle').textContent = m.name;
  $('#minDetailLead').textContent = `Ministre en exercice : ${m.minister} — ${m.mission}`;

  $('#minDetailPhotoBox').innerHTML = `
    <div class="ministry-portrait-frame">
      ${renderPortraitMarkup(m.photo, m.minister, true)}
    </div>
    <span class="badge">${m.minister} · ${m.location.city}</span>
  `;

  $('#minDetailBody').innerHTML = `
    <p class="lead">${m.name}</p>
    <p><strong>Ministre :</strong> ${m.minister}</p>
    <p><strong>Pôle gouvernemental :</strong> ${m.poleName}</p>

    <div class="location-box">
      <div class="location-head">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <h3>Localisation &amp; Siège du ministère</h3>
      </div>
      <dl class="location-grid">
        <div class="fact-row">
          <dt>Ville</dt>
          <dd>${m.location.city}</dd>
        </div>
        <div class="fact-row">
          <dt>Quartier / Zone</dt>
          <dd>${m.location.district}</dd>
        </div>
        <div class="fact-row">
          <dt>Adresse / Repère</dt>
          <dd>${m.location.address}</dd>
        </div>
        <div class="fact-row">
          <dt>Boîte postale</dt>
          <dd>${m.location.postal}</dd>
        </div>
        <div class="fact-row">
          <dt>Coordonnées GPS</dt>
          <dd id="minMapCoords">Recherche en cours...</dd>
        </div>
      </dl>
      <div class="map-toolbar">
        <span class="map-status-line" id="minMapStatus">Chargement de Google Maps...</span>
        <div class="map-toolbar-actions">
          <button type="button" class="chip" id="minMapTypeBtn">Vue satellite</button>
          <a id="minMapDirectionsBtn" class="btn btn-dark btn-sm" target="_blank" rel="noopener noreferrer" hidden>
            ${BTN_ICON.external}
            Itinéraire Google Maps
          </a>
        </div>
      </div>
      <div id="ministryMap" aria-label="Carte Google Maps du siège du ministère"></div>
    </div>

    <div class="dev-role-box">
      <h3>Rôle dans le développement du Bénin</h3>
      <p>${m.devRole}</p>
    </div>

    <h3 style="font-size:16px;font-weight:700;margin-bottom:8px">Missions et leviers stratégiques</h3>
    <ul class="ministry-actions-list">
      ${m.actions.map((a) => `<li>${a}</li>`).join('')}
    </ul>

    <div class="hero-cta" style="margin-top:16px">
      <button type="button" class="btn btn-dark btn-sm" data-route="gouvernement">${BTN_ICON.arrowLeft} Retour au Gouvernement</button>
      <a href="#eservices" class="btn btn-light btn-sm" data-route="eservices">${BTN_ICON.grid} Voir les E-Services de l’État</a>
    </div>
  `;

  $('#ministryPager').innerHTML = `
    <button type="button" class="link-action" data-ministry-slug="${prev.slug}">${BTN_ICON.arrowLeft} Précédent : ${prev.minister}</button>
    <button type="button" class="link-action" data-ministry-slug="${next.slug}">Suivant : ${next.minister} ${BTN_ICON.arrowRight}</button>
  `;

  window.MinistryMapController?.mount($('#ministryMap'), m, {
    coordsEl: $('#minMapCoords'),
    directionsBtn: $('#minMapDirectionsBtn'),
    statusEl: $('#minMapStatus'),
    mapTypeBtn: $('#minMapTypeBtn')
  });

  const themeBadge = $('#min3DThemeLabel');
  if (themeBadge && window.Ministry3DScene?.getThemeLabel) {
    themeBadge.textContent = window.Ministry3DScene.getThemeLabel(m.pole);
  }
  $$('[data-three-preset]').forEach((btn) => {
    btn.classList.toggle('on', btn.dataset.threePreset === 'overview');
  });
  window.Ministry3DScene?.mount($('#min3DStage'), m);
}

// Contrôles de la scène 3D ministérielle
document.addEventListener('click', (e) => {
  const presetBtn = e.target.closest('[data-three-preset]');
  if (presetBtn) {
    const preset = presetBtn.dataset.threePreset;
    $$('[data-three-preset]').forEach((b) => b.classList.toggle('on', b === presetBtn));
    window.Ministry3DScene?.setPreset(preset);
    return;
  }
  if (e.target.id === 'min3DLightBtn') {
    const btn = e.target;
    const nextMode = btn.dataset.light === 'dusk' ? 'day' : 'dusk';
    btn.dataset.light = nextMode;
    btn.textContent = nextMode === 'dusk' ? 'Ambiance : Crépuscule' : 'Ambiance : Jour';
    btn.classList.toggle('on', nextMode === 'dusk');
    window.Ministry3DScene?.setLighting(nextMode);
    return;
  }
  if (e.target.id === 'min3DRotateBtn') {
    const active = window.Ministry3DScene?.toggleAutoRotate();
    e.target.classList.toggle('on', Boolean(active));
    e.target.textContent = active ? 'Rotation : Active' : 'Rotation : Pause';
    return;
  }
  if (e.target.id === 'min3DDockToggle') {
    const dock = $('#min3DDock');
    const isCollapsed = dock.classList.toggle('collapsed');
    e.target.setAttribute('aria-expanded', String(!isCollapsed));
    e.target.textContent = isCollapsed ? 'Afficher les contrôles' : 'Masquer les contrôles';
  }
});

$('#govSearch').addEventListener('input', (e) => {
  state.govQuery = e.target.value;
  renderMinistries();
});

document.addEventListener('click', (e) => {
  const poleBtn = e.target.closest('[data-pole]');
  if (poleBtn) {
    state.govPole = poleBtn.dataset.pole;
    renderGovFilters();
    renderMinistries();
    return;
  }
  if (e.target.id === 'resetGovBtn') {
    state.govPole = 'all';
    state.govQuery = '';
    $('#govSearch').value = '';
    renderGovFilters();
    renderMinistries();
  }
});

// ===== PAGE 3 : GUICHET E-SERVICES =====
function renderServiceFilters() {
  $('#serviceFilters').innerHTML = SERVICE_CATEGORIES.map((c) => `
    <button type="button" class="chip ${state.serviceCat === c.id ? 'on' : ''}" role="tab" aria-selected="${state.serviceCat === c.id}" data-cat="${c.id}">
      ${c.label}
    </button>
  `).join('');
}

function renderServices() {
  const q = state.serviceQuery.trim().toLowerCase();
  const filtered = ESERVICES.filter((s) => {
    const matchCat = state.serviceCat === 'all' || s.cat === state.serviceCat;
    const matchQuery = !q || `${s.title} ${s.domain} ${s.action} ${s.catName}`.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  $('#serviceCount').textContent = `${filtered.length} plateforme${filtered.length > 1 ? 's' : ''} officielle${filtered.length > 1 ? 's' : ''}`;

  if (!filtered.length) {
    $('#servicesContainer').innerHTML = `
      <div class="empty-state">
        <p>Aucune plateforme ne correspond à « ${state.serviceQuery} ».</p>
        <button type="button" class="btn btn-dark btn-sm" id="resetServiceBtn">${BTN_ICON.rotate} Tout afficher</button>
      </div>
    `;
    return;
  }

  const catOrder = ['guichet', 'etat-civil', 'entreprises', 'justice', 'education'];
  $('#servicesContainer').innerHTML = catOrder.map((catId) => {
    const items = filtered.filter((s) => s.cat === catId);
    if (!items.length) return '';
    return `
      <div class="pole-group">
        <h3 class="pole-heading">${items[0].catName}</h3>
        <div class="services-grid">
          ${items.map((s) => `
            <article class="service-card">
              <div>
                <p class="service-domain">${s.domain}</p>
                <h4>${s.title}</h4>
                <p>${s.action}</p>
              </div>
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-sm" style="align-self:flex-start">
                Accéder au service
                ${BTN_ICON.external}
              </a>
            </article>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

$('#serviceSearch').addEventListener('input', (e) => {
  state.serviceQuery = e.target.value;
  renderServices();
});

document.addEventListener('click', (e) => {
  const catBtn = e.target.closest('[data-cat]');
  if (catBtn) {
    state.serviceCat = catBtn.dataset.cat;
    renderServiceFilters();
    renderServices();
    return;
  }
  if (e.target.id === 'resetServiceBtn') {
    state.serviceCat = 'all';
    state.serviceQuery = '';
    $('#serviceSearch').value = '';
    renderServiceFilters();
    renderServices();
  }
});

// ===== MODALE QUESTION CITOYENNE =====
const contactModal = $('#contactModal');
let lastContactTrigger = null;

const openContactModal = (triggerEl = null) => {
  if (triggerEl && !contactModal.contains(triggerEl)) {
    lastContactTrigger = triggerEl;
  }
  $('#modalFormStep').hidden = false;
  $('#modalSuccessStep').hidden = true;
  contactModal.hidden = false;
  contactModal.scrollTop = 0;
  $('#citizenName').focus({ preventScroll: true });
};
const closeContactModal = () => {
  contactModal.hidden = true;
  if (lastContactTrigger && document.contains(lastContactTrigger)) {
    lastContactTrigger.focus({ preventScroll: true });
  }
  lastContactTrigger = null;
};

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('.open-contact');
  if (trigger) {
    e.preventDefault();
    openContactModal(trigger);
  }
});
$('#modalClose').addEventListener('click', closeContactModal);
$('#modalDone').addEventListener('click', closeContactModal);
contactModal.addEventListener('click', (e) => { if (e.target === contactModal) closeContactModal(); });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!contactModal.hidden) closeContactModal();
    if (!$('#monumentModal').hidden) closeMonumentModal();
  }
});

$('#citizenForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#citizenName').value.trim();
  const topic = $('#citizenTopic').value;
  if (!name) { $('#citizenName').focus({ preventScroll: true }); return; }
  $('#modalSuccessText').textContent = `Merci ${name}. Votre question concernant « ${topic} » a bien été enregistrée pour orientation citoyenne.`;
  $('#modalFormStep').hidden = true;
  $('#modalSuccessStep').hidden = false;
  e.target.reset();
});

// ===== INITIALISATION =====
function init() {
  renderStateFacts();
  renderInstitutionFilters();
  renderInstitutions();
  renderSymbols();
  renderMonumentFilters();
  renderMonuments();
  renderExecutive();
  renderGovFilters();
  renderMinistries();
  renderServiceFilters();
  renderServices();

  applyHashFromLocation();
}

init();
