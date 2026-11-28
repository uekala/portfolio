// Projekte für beide Sprachfassungen. Bilder liegen in public/img (aus den READMEs, mit Beispieldaten).
const gh = (repo) => `https://github.com/uekala/${repo}`;
const addonRepo = (repo) =>
  `https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=${encodeURIComponent(gh(repo))}`;

export const projects = [
  {
    id: 'ladecockpit',
    name: 'Ladecockpit',
    tags: ['Python', 'Docker', 'Home Assistant', 'Tesla', 'Android'],
    desc: {
      en: 'Real Tesla Supercharger & MultiPass invoices, charging costs and price radar — self-hosted, Home Assistant optional.',
      de: 'Echte Tesla-Supercharger- und MultiPass-Rechnungen, Ladekosten und Preisradar – selbst gehostet, Home Assistant optional.',
    },
    links: [
      { kind: 'install', href: addonRepo('ladecockpit') },
      { kind: 'download', href: `${gh('ladecockpit')}/releases/latest` },
    ],
  },
  {
    id: 'ladekrone',
    name: 'Ladekrone',
    tags: ['Python', 'Home Assistant', 'EV'],
    desc: {
      en: 'Cheapest ad-hoc charging prices (AFIR / Mobilithek) on a map and in Home Assistant.',
      de: 'Die günstigsten Ad-hoc-Ladepreise (AFIR / Mobilithek) auf der Karte und in Home Assistant.',
    },
    links: [
      { kind: 'try', href: 'https://uekala.github.io/ladekrone/app/' },
      { kind: 'install', href: `${gh('ladekrone')}#installation-über-hacs` },
    ],
  },
  {
    id: 'kassensturz',
    name: 'Kassensturz',
    tags: ['Python', 'Home Assistant', 'FinTS', 'Flutter'],
    desc: {
      en: 'Local household budget app for Home Assistant: Open Banking, FinTS or file import, with a companion phone app.',
      de: 'Haushaltsbuch lokal in Home Assistant: Open Banking, FinTS oder Dateiimport, dazu eine Handy-App.',
    },
    links: [
      { kind: 'install', href: addonRepo('kassensturz') },
      { kind: 'download', href: `${gh('kassensturz')}/releases` },
    ],
  },
  {
    id: 'automationscheck',
    name: 'Automationscheck',
    tags: ['Python', 'Home Assistant'],
    desc: {
      en: 'Finds loops and conflicting automations in Home Assistant and reports them as repairs.',
      de: 'Findet Schleifen und Gegenspieler unter den Automationen in Home Assistant und meldet sie als Reparatur.',
    },
    links: [{ kind: 'install', href: `${gh('automationscheck')}#readme` }],
  },
  {
    id: 'ha-grok-update-check',
    name: 'HA Grok Update Check',
    tags: ['Blueprint', 'Home Assistant', 'Grok'],
    desc: {
      en: 'Blueprint: Grok searches for known problems before you install a Home Assistant update.',
      de: 'Blueprint: Grok sucht nach bekannten Problemen, bevor du ein Home-Assistant-Update installierst.',
    },
    links: [
      {
        kind: 'install',
        href: 'https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgithub.com%2Fuekala%2Fha-grok-update-check%2Fblob%2Fmain%2Fblueprints%2Fautomation%2Fgrok_update_check.yaml',
      },
    ],
  },
  {
    id: 'exitcheck',
    name: 'Exitcheck',
    tags: ['JavaScript', 'Browser', 'VMware'],
    desc: {
      en: 'Evaluate a VMware exit (RVTools export) against Proxmox VE and Hyper-V — right in the browser, nothing is uploaded.',
      de: 'Den Umstieg weg von VMware (RVTools-Export) gegen Proxmox VE und Hyper-V prüfen – direkt im Browser, nichts wird hochgeladen.',
    },
    links: [{ kind: 'try', href: 'https://uekala.github.io/exitcheck/' }],
  },
].map((p) => ({ ...p, url: gh(p.id), image: `img/${p.id}.webp` }));

export const text = {
  en: {
    lang: 'en',
    title: 'uekala — Portfolio',
    subtitle: 'Self-hosted tools, Home Assistant integrations & practical open-source projects',
    description: 'Self-hosted tools, Home Assistant integrations and practical open-source projects by uekala.',
    projects: 'Projects',
    tech: 'Technologies',
    links: { source: 'Source', try: 'Try it', install: 'Install', download: 'Download' },
    more: 'More on',
    other: { label: 'Deutsch', href: 'de/', hreflang: 'de' },
    shot: (name) => `${name} with sample data`,
  },
  de: {
    lang: 'de',
    title: 'uekala – Portfolio',
    subtitle: 'Selbst gehostete Werkzeuge, Home-Assistant-Integrationen und praktische Open-Source-Projekte',
    description: 'Selbst gehostete Werkzeuge, Home-Assistant-Integrationen und praktische Open-Source-Projekte von uekala.',
    projects: 'Projekte',
    tech: 'Technik',
    links: { source: 'Quellcode', try: 'Ausprobieren', install: 'Installieren', download: 'Download' },
    more: 'Mehr auf',
    other: { label: 'English', href: '../', hreflang: 'en' },
    shot: (name) => `${name} mit Beispieldaten`,
  },
};
