import { useState } from 'react'

const FORM_URL = 'https://nc.uni-bremen.de/index.php/apps/forms/s/QiBsjsAAc3xQJGEfa27JeQLc'

const CONFIRMATIONS = [
  'are not under 18 years of age.',
  'have not been diagnosed with a heart or cardiovascular condition, including circulatory disorders.',
  'have not been diagnosed with high blood pressure (hypertension).',
  "don't have a history of epilepsy or seizures.",
  "don't experience panic attacks.",
  'are not pregnant.',
  "don't regularly use illegal or recreational drugs.",
  "are not a heavy smoker and don't regularly consume large amounts of alcohol.",
  'are not currently taking medication for ADHD or depression.',
]

export default function PreRegister() {
  // One true/false value per checkbox, all unticked at the start.
  const [checked, setChecked] = useState(CONFIRMATIONS.map(() => false))
  const allChecked = checked.every(Boolean)

  function toggle(index) {
    setChecked((prev) => prev.map((value, i) => (i === index ? !value : value)))
  }

  function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page
    if (allChecked) window.location.href = FORM_URL
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-brand-50 to-white text-slate-800 antialiased">
      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
        <a
          href="#"
          className="text-sm font-medium text-brand-600 underline-offset-4 hover:text-brand-700 hover:underline"
        >
          ← Back to the study page
        </a>

        <h1 className="mt-6 text-3xl font-bold text-brand-900 sm:text-4xl">Pre-register</h1>
        <p className="mt-4 text-slate-600">
          First please check that you can take part in the experiment.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <fieldset>
            <legend className="font-semibold text-brand-900">Please confirm that you…</legend>
            <div className="mt-4 space-y-2">
              {CONFIRMATIONS.map((text, i) => (
                <label
                  key={text}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-600"
                >
                  <input
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() => toggle(i)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-brand-600"
                  />
                  <span>{text}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <p className="mt-6 text-sm text-slate-500">
            If any of these does not apply to you, unfortunately you cannot take part in this
            study, for your own safety. Thank you for your interest!
          </p>

          <button
            type="submit"
            disabled={!allChecked}
            className="mt-6 w-full cursor-pointer rounded-xl bg-brand-600 px-5 py-3.5 font-medium text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-100 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none sm:w-auto"
          >
            Continue to pre-registration →
          </button>
          {!allChecked && (
            <p className="mt-2 text-sm text-slate-500">
              {checked.filter(Boolean).length} of {CONFIRMATIONS.length} confirmed
            </p>
          )}
        </form>
      </main>
    </div>
  )
}
