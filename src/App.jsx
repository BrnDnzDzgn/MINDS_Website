import { useEffect, useState } from 'react'
import NeuralBackground from './NeuralBackground.jsx'
import PreRegister from './PreRegister.jsx'

const CSL_URL = 'https://www.uni-bremen.de/en/csl'
const UNI_URL = 'https://www.uni-bremen.de/en/'

const UNI_LOGO = `${import.meta.env.BASE_URL}Uni_Bremen_Logo.png`
const CSL_LOGO = `${import.meta.env.BASE_URL}CSL_Logo.png`

const BRAIN_ICON = `${import.meta.env.BASE_URL}brain-circuit.svg`

const PIS_URL = `${import.meta.env.BASE_URL}Participant_Info_Sheet.pdf`

const FACTS = [
  { value: '4', label: 'sessions' },
  { value: '~3 weeks', label: 'between sessions' },
  { value: '~40 min', label: 'per session' },
  { value: '€82–€130', label: 'total payment' },
]

const SESSION_STEPS = [
  'Give informed consent and ask any questions you have.',
  'Answer a questionnaire.',
  'We place a headband on your head. It measures brain activity and heart rate.',
  'You make a series of choices between two options with different amounts of money.',
  'You complete a 10 minute stress task: you put your hand in cold water for a short time and count backwards. ',
  'You repeat the choices, sit quietly for a few minutes, and get paid at the end.',
]

const EXCLUSIONS = [
  'You are under 18 years of age.',
    'You are pregnant.',
  'You have been diagnosed with high blood pressure (hypertension).',
  'You have a history of epilepsy or seizures.',
  'You experience panic attacks.',
  'You use illegal or recreational drugs.',
  'You are a heavy smoker or regularly consume large amounts of alcohol.',
  'You are currently taking medication for ADHD or depression.',
  'You have been diagnosed with a heart or cardiovascular condition, including circulatory disorders.',
]

const CONTACTS = ['meister@uni-bremen.de', 'mwhite@uni-bremen.de']


// Small reusable pieces ---------------------------------------------------------------

function Card({ id, title, children, className = '' }) {
  return (
    <section
      id={id}
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      <h2 className="text-xl font-semibold text-brand-900">{title}</h2>
      <div className="mt-4 space-y-4 text-slate-700">{children}</div>
    </section>
  )
}

function LinkButton({ href, children, primary = false, disabled = false, ...rest }) {
  const base =
    'flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-center font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-100 sm:w-auto'
  const style = primary
    ? 'bg-brand-600 text-white shadow-sm hover:bg-brand-700'
    : 'border border-slate-300 bg-white text-brand-900 hover:border-brand-600 hover:bg-brand-50'
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400`}
      >
        {children}
      </span>
    )
  }
  return (
    <a href={href} className={`${base} ${style}`} {...rest}>
      {children}
    </a>
  )
}


// The page ---------------------------------------------------------------

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    function onHashChange() {
      setHash(window.location.hash)
      window.scrollTo(0, 0) // start each page at the top
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (hash === '#pre-register') return <PreRegister />

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <div className="sticky top-0 z-20 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-brand-100/70 bg-brand-50/85 px-5 py-3 backdrop-blur-md sm:px-8">
        <a href={UNI_URL} target="_blank" rel="noopener noreferrer" className="justify-self-start">
          <img src={UNI_LOGO} alt="University of Bremen" className="h-8 w-auto sm:h-10" />
        </a>
  
        <p className="hidden text-sm font-semibold tracking-widest text-brand-600 uppercase md:block">
          MINDS Study - University of Bremen
        </p>
        <a href={CSL_URL} target="_blank" rel="noopener noreferrer" className="col-start-3 justify-self-end">
          <img src={CSL_LOGO} alt="Cognitive Systems Lab (CSL)" className="h-8 w-auto sm:h-10" />
        </a>
      </div>


      <div className="relative overflow-hidden bg-linear-to-b from-brand-50 to-white">
        <NeuralBackground className="absolute inset-0" />

        <header className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-10 pb-12 sm:px-8 sm:pt-16 sm:pb-16 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase md:hidden">
              MINDS Study - University of Bremen
            </p>
            <h1 className="mt-3 text-3xl leading-tight font-bold text-brand-900 sm:text-5xl md:mt-0">
              How does stress shape the way we make decisions?
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              The MINDS study is starting soon at the Cognitive Systems Lab (CSL), and we will
              be looking for participants. You can already pre-register by using the button below and we will reach out to you when the actual registration starts!
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton href="#pre-register" primary>
                Pre-register
              </LinkButton>
              <LinkButton href={PIS_URL} target="_blank" rel="noopener noreferrer">
                Read the information sheet ↗
              </LinkButton>
              <LinkButton href={PIS_URL} download>
                Download PDF
              </LinkButton>
            </div>
          </div>


          <div className="hidden justify-center md:flex" aria-hidden="true">
            <div className="relative flex h-72 w-72 items-center justify-center lg:h-80 lg:w-80">
              <span className="absolute inset-0 rounded-full border border-brand-100 motion-safe:animate-[ping_4s_ease-out_infinite]" />
              <span className="absolute inset-6 rounded-full border border-brand-100" />
              <span className="absolute inset-12 rounded-full bg-brand-100/60" />
              <span className="absolute inset-20 rounded-full bg-white shadow-sm" />
              <img src={BRAIN_ICON} alt="" className="relative h-24 w-24 lg:h-28 lg:w-28" />
            </div>
          </div>
        </header>
      </div>

      <main className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        {/* Key facts */}
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label} className="rounded-2xl bg-brand-50 p-5">
              <dt className="sr-only">{fact.label}</dt>
              <dd className="text-2xl font-bold text-brand-900 sm:text-3xl">{fact.value}</dd>
              <dd className="mt-1 text-sm text-slate-600">{fact.label}</dd>
            </div>
          ))}
        </dl>


        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card id="about" title="What is the study about?" className="md:col-span-2">
            <p>
              MINDS stands for <em>Multimodal Investigation of Neurophysiology, Decision-Making,
              and Sensitive Information under Stress</em>.
              We are interested in better understanding how stress influences people's decision-making and how this may be reflected in measurements from wearable sensors.
            </p>
            <p>The main research questions are:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                How does acute stress affect an individual's preferences when making decisions involving risk?
              </li>
              <li>
                To what extent can an individual's stress level be estimated from EEG and fNIRS data?
              </li>
              <li>
                To what extent can individual characteristics or differences between people be identified from EEG and fNIRS data?
              </li>
            </ul>
          </Card>

          <section id="payment" className="rounded-2xl bg-brand-900 p-6 text-brand-50 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-white">Payment</h2>
            <p className="mt-4 text-4xl font-bold text-white">€82–€130</p>
            <p className="mt-1 text-sm text-brand-100">in total for all four sessions</p>
            <div className="mt-6 space-y-3 text-sm">
              <p>
                <strong className="text-white">€50 base payment:</strong> €5 after the first session,
                €10 after the second, €15 after the third and €20 after the fourth.
              </p>
              <p>
                <strong className="text-white">Plus €8–€20 per session,</strong> based on the
                choices you make during the experiment.
              </p>
            </div>
          </section>

      
          <Card id="session" title="What happens in a session?" className="md:col-span-3">
            <ol className="relative grid gap-5 lg:grid-cols-6 lg:gap-4">
              
              <span className="absolute top-4 right-[8%] left-[8%] hidden h-px bg-brand-100 lg:block" aria-hidden="true" />
              {SESSION_STEPS.map((step, i) => (
                <li key={i} className="relative flex gap-3 lg:flex-col lg:items-center lg:text-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm lg:pt-0">{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-sm text-slate-500">
              The full procedure is in the{' '}
              <a
                href={PIS_URL} target="_blank" rel="noopener noreferrer"
                className="underline hover:text-brand-700"
              >
                participant information sheet
              </a>
              .
            </p>
          </Card>

          <Card id="eligibility" title="Can I take part?" className="md:col-span-2">
            <p>
              For your safety, please <strong>do not take part</strong> if any of the following
              apply to you. You don&apos;t need to tell us which one. If you are unsure, ask us via mail.
            </p>
            <ul className="grid gap-x-8 gap-y-1.5 pl-5 sm:grid-cols-2">
              {EXCLUSIONS.map((item) => (
                <li key={item} className="list-disc">{item}</li>
              ))}
            </ul>
          </Card>

          <Card id="prepare" title="Before each session" className="bg-brand-50">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                No caffeine, nicotine or alcohol for at least <strong>2 hours</strong> before.
              </li>
              <li>
                No hair products on the day of your session. They interfere with the sensors.
              </li>
            </ul>
          </Card>

          <Card id="data" title="Data Collection and Processing" className="md:col-span-2">
            <p>
              Participation is completely voluntary and you can withdraw at any time during the experiment without giving any reasons or without
              any consequences. Your data is linked across sessions with a pseudonymous code.
              After your final session, the link to your identity is destroyed, so the data
              can no longer be traced back to you. It is stored securely at CSL and used only
              for research.
            </p>
            <p className="text-sm text-slate-500">
              For more information please refer to the{' '}
              <a
                href={PIS_URL} target="_blank" rel="noopener noreferrer"
                className="underline hover:text-brand-700"
              >
                participant information sheet
              </a>
              .
            </p>
          </Card>

          <Card id="contact" title="Questions?">
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
          </Card>
        </div>
      </main>

      <footer className="mt-6 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-slate-500 sm:px-8">
          <a
            href={CSL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-brand-700 hover:underline"
          >
            Cognitive Systems Lab (CSL)
          </a>
          <span aria-hidden="true"> · </span>
          <a
            href={UNI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-brand-700 hover:underline"
          >
            University of Bremen
          </a>
        </div>
      </footer>
    </div>
  )
}
