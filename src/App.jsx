// ---------------------------------------------------------------
// Links and content. Edit these when something changes.
// ---------------------------------------------------------------

// TODO: replace with the public Nextcloud link for Session 1.
const BOOKING_URL = 'https://nc.uni-bremen.de/'

// The PDF lives in the /public folder. BASE_URL makes the path work
// both locally and on GitHub Pages.
const PIS_URL = `${import.meta.env.BASE_URL}Participant_Info_Sheet.pdf`

const FACTS = [
  { value: '4', label: 'sessions' },
  { value: '~3 weeks', label: 'between sessions' },
  { value: '~40 min', label: 'per session' },
  { value: '€82–€130', label: 'total payment' },
]

const SESSION_STEPS = [
  'You give informed consent and can ask us anything first.',
  'You answer a few short questions about how stressed you feel.',
  'We place a recording headband on your head. It measures brain activity and heart rate. Then you sit quietly for 2 minutes.',
  'You make a series of choices between two options with different amounts of money. There are no right or wrong answers.',
  'You complete a 10-minute stress task: you put your hand in cold water for a short time and count backwards. You can stop at any time.',
  'You repeat the choices, sit quietly for a few minutes, and get paid at the end.',
]

const EXCLUSIONS = [
  'You are under 18 years of age.',
  'You have a heart or cardiovascular condition, including circulatory disorders.',
  'You have high blood pressure (hypertension).',
  'You have a history of epilepsy or seizures.',
  'You experience panic attacks.',
  'You are pregnant.',
  'You regularly use illegal or recreational drugs.',
  'You are a heavy smoker or regularly drink large amounts of alcohol.',
  'You are currently taking medication for ADHD or depression.',
]

const CONTACTS = ['meister@uni-bremen.de', 'mwhite@uni-bremen.de']

// ---------------------------------------------------------------
// Small reusable pieces
// ---------------------------------------------------------------

function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-slate-200 py-10 sm:py-14">
      <h2 className="text-xl font-semibold text-brand-900 sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-slate-700">{children}</div>
    </section>
  )
}

function LinkButton({ href, children, primary = false, ...rest }) {
  const base =
    'flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-center font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-100 sm:w-auto'
  const style = primary
    ? 'bg-brand-600 text-white shadow-sm hover:bg-brand-700'
    : 'border border-slate-300 bg-white text-brand-900 hover:border-brand-600 hover:bg-brand-50'
  return (
    <a href={href} className={`${base} ${style}`} {...rest}>
      {children}
    </a>
  )
}

// ---------------------------------------------------------------
// The page
// ---------------------------------------------------------------

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <main className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* Hero */}
        <header className="pt-12 pb-10 sm:pt-20 sm:pb-14">
          <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase">
            MINDS Study · University of Bremen
          </p>
          <h1 className="mt-3 text-3xl leading-tight font-bold text-brand-900 sm:text-5xl">
            How does stress shape the way we make decisions?
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            We are looking for participants for a paid study at the Cognitive Systems Lab
            (CSL). You will wear a sensor headband while making simple choices, before and
            after a short stress task.
          </p>

          {/* All the important links in one place */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkButton href={BOOKING_URL} primary target="_blank" rel="noopener noreferrer">
              Book your first session
            </LinkButton>
            <LinkButton href={PIS_URL} target="_blank" rel="noopener noreferrer">
              Read the information sheet ↗
            </LinkButton>
            <LinkButton href={PIS_URL} download>
              Download PDF
            </LinkButton>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Please read the Participant Information Sheet before booking.
          </p>
        </header>

        {/* Key facts: 2 columns on phones, 4 on larger screens */}
        <dl className="grid grid-cols-2 gap-3 pb-10 sm:grid-cols-4 sm:pb-14">
          {FACTS.map((fact) => (
            <div key={fact.label} className="rounded-xl bg-brand-50 p-4">
              <dt className="sr-only">{fact.label}</dt>
              <dd className="text-xl font-bold text-brand-900 sm:text-2xl">{fact.value}</dd>
              <dd className="mt-1 text-sm text-slate-600">{fact.label}</dd>
            </div>
          ))}
        </dl>

        <Section id="about" title="What is the study about?">
          <p>
            MINDS stands for <em>Multimodal Investigation of Neurophysiology, Decision-Making,
            and Sensitive Information under Stress</em>. We want to understand how short-term
            stress affects decisions involving risk, and what wearable sensors (EEG and fNIRS)
            can reveal about a person&apos;s stress level and individual characteristics.
          </p>
        </Section>

        <Section id="session" title="What happens in a session?">
          <ol className="space-y-3">
            {SESSION_STEPS.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm text-slate-500">
            The full step-by-step procedure is in the information sheet.
          </p>
        </Section>

        <Section id="payment" title="Payment">
          <p>
            You are paid at the end of every session: a base payment of €5 × the number of
            sessions completed so far (€50 in total), plus €8–€20 per session based on your
            choices in the decision tasks. Completing all four sessions earns{' '}
            <strong>€82–€130</strong>.
          </p>
        </Section>

        <Section id="eligibility" title="Can I take part?">
          <p>
            For your safety, please <strong>do not take part</strong> if any of the following
            apply to you. You don&apos;t need to tell us which one. If you are unsure, ask us
            before your first session.
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            {EXCLUSIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section id="prepare" title="Before each session">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              No caffeine, nicotine or alcohol for at least <strong>2 hours</strong> before.
            </li>
            <li>
              No hair products on the day of your session. They interfere with the sensors.
            </li>
          </ul>
        </Section>

        <Section id="data" title="Your data and your rights">
          <p>
            Participation is completely voluntary and you can withdraw at any time without
            any consequences. Your data is linked across sessions with a pseudonymous code.
            After your final session, the link to your identity is destroyed, so the data
            can no longer be traced back to you. It is stored securely at CSL and used only
            for research.
          </p>
        </Section>

        <Section id="contact" title="Questions?">
          <p>Write to us any time:</p>
          <ul className="space-y-1">
            {CONTACTS.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
                >
                  {email}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-500">
            Researchers: Lily Meister &amp; Matthew White · Supervisors: Dr. Felix Putze &amp;
            Prof. Tanja Schultz
          </p>
        </Section>
      </main>

      <footer className="mt-6 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-5 py-6 text-sm text-slate-500 sm:px-8">
          Cognitive Systems Lab (CSL) · University of Bremen
        </div>
      </footer>
    </div>
  )
}
