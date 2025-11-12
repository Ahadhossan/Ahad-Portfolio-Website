import { useState } from "react";

// Default export so it renders in preview
export default function WebsiteRequestForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    currentSite: "",
    projectType: "new",
    goals: "",
    audience: "",
    pages: 5,
    features: [],
    featuresOther: "",
    budget: "",
    timeline: "",
    contentReadiness: "not_sure",
    branding: "need_help",
    style: [],
    colors: "",
    competitors: "",
    hosting: "need_setup",
    domain: "have_domain",
    notes: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState(null);

  const featureOptions = [
    "Blog/News",
    "E‑commerce",
    "Booking/Appointment",
    "User Accounts/Auth",
    "Contact Form",
    "Live Chat",
    "Portfolio/Case Studies",
    "Analytics/Tracking",
    "Multilingual",
    "SEO Setup",
    "CMS (e.g., WordPress/Headless)",
    "API Integration",
  ];

  const styleWords = [
    "Clean/Minimal",
    "Bold/Colorful",
    "Corporate",
    "Playful",
    "Elegant",
    "Techy/Modern",
    "Editorial",
    "Illustrative",
  ];

  function validate() {
    const e = {};
    if (!data.name.trim()) e.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Valid email required";
    if (!data.projectType) e.projectType = "Select one";
    if (!data.budget) e.budget = "Select a range";
    if (!data.timeline) e.timeline = "Select a timeline";
    if (!data.goals.trim()) e.goals = "Tell us your goals";
    if (!data.consent) e.consent = "You must agree before submitting";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function update(key, value) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function toggleArray(key, value) {
    setData((d) => {
      const arr = new Set(d[key]);
      arr.has(value) ? arr.delete(value) : arr.add(value);
      return { ...d, [key]: Array.from(arr) };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Compose payload
    const payload = {
      ...data,
      submittedAt: new Date().toISOString(),
      // Combine custom feature if provided
      features: data.featuresOther
        ? Array.from(new Set([...data.features, data.featuresOther]))
        : data.features,
    };

    // Simulate network call
    await new Promise((r) => setTimeout(r, 900));

    // In a real app, POST to your backend:
    // const res = await fetch("/api/website-request", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });

    setSubmittedPayload(payload);
    setSubmitting(false);
  }

  function resetForm() {
    setData({
      name: "",
      email: "",
      phone: "",
      company: "",
      currentSite: "",
      projectType: "new",
      goals: "",
      audience: "",
      pages: 5,
      features: [],
      featuresOther: "",
      budget: "",
      timeline: "",
      contentReadiness: "not_sure",
      branding: "need_help",
      style: [],
      colors: "",
      competitors: "",
      hosting: "need_setup",
      domain: "have_domain",
      notes: "",
      consent: false,
    });
    setErrors({});
    setSubmittedPayload(null);
  }

  if (submittedPayload) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 md:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/70 dark:bg-neutral-900/70 backdrop-blur rounded-2xl shadow p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Thanks! 🎉</h1>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Your request has been recorded. Below is a summary of what you
              sent. You can copy it for your records.
            </p>
            <pre className="text-sm overflow-auto bg-gray-100 dark:bg-neutral-800 p-4 rounded-xl">
              {JSON.stringify(submittedPayload, null, 2)}
            </pre>
            <div className="mt-6 flex gap-3">
              <button
                onClick={resetForm}
                className="px-4 py-2 rounded-xl font-semibold bg-gray-900 text-white dark:bg-white dark:text-black hover:opacity-90 active:scale-[0.99]"
              >
                Submit another
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 md:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Website Project Request
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Tell us what you need. This quick brief helps us estimate scope,
            timeline, and cost.
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          noValidate
          className="bg-white/70 dark:bg-neutral-900/70 backdrop-blur rounded-2xl shadow divide-y divide-gray-100/70 dark:divide-neutral-800"
        >
          {/* Contact */}
          <Section title="Contact details" subtitle="How can we reach you?">
            <Grid>
              <TextField
                label="Full name"
                id="name"
                value={data.name}
                onChange={(v) => update("name", v)}
                error={errors.name}
                required
              />
              <TextField
                label="Email"
                id="email"
                type="email"
                value={data.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
                required
              />
              <TextField
                label="Phone"
                id="phone"
                type="tel"
                value={data.phone}
                onChange={(v) => update("phone", v)}
                placeholder="Optional"
              />
              <TextField
                label="Company/Organization"
                id="company"
                value={data.company}
                onChange={(v) => update("company", v)}
                placeholder="Optional"
              />
              <TextField
                label="Current website"
                id="currentSite"
                type="url"
                value={data.currentSite}
                onChange={(v) => update("currentSite", v)}
                placeholder="https://example.com (if any)"
              />
            </Grid>
          </Section>

          {/* Project basics */}
          <Section title="Project basics" subtitle="What are we building?">
            <Grid>
              <SelectField
                label="Project type"
                id="projectType"
                value={data.projectType}
                onChange={(v) => update("projectType", v)}
                options={[
                  { value: "new", label: "New website" },
                  { value: "redesign", label: "Redesign" },
                ]}
                error={errors.projectType}
                required
              />
              <NumberField
                label="# of pages (approx.)"
                id="pages"
                min={1}
                max={200}
                value={data.pages}
                onChange={(v) => update("pages", v)}
              />
            </Grid>
            <TextArea
              label="Primary goals"
              id="goals"
              value={data.goals}
              onChange={(v) => update("goals", v)}
              placeholder="e.g., Generate leads, sell products, showcase portfolio, improve UX, boost SEO"
              error={errors.goals}
              required
            />
            <TextArea
              label="Target audience"
              id="audience"
              value={data.audience}
              onChange={(v) => update("audience", v)}
              placeholder="Who is this for? Any accessibility needs?"
            />
          </Section>

          {/* Features */}
          <Section
            title="Features & integrations"
            subtitle="Pick all that apply."
          >
            <CheckboxGroup
              options={featureOptions}
              selected={data.features}
              onToggle={(val) => toggleArray("features", val)}
            />
            <TextField
              label="Other features"
              id="featuresOther"
              value={data.featuresOther}
              onChange={(v) => update("featuresOther", v)}
              placeholder="Anything not listed above"
            />
          </Section>

          {/* Budget & timeline */}
          <Section
            title="Budget & timeline"
            subtitle="This helps us propose the right approach."
          >
            <Grid>
              <SelectField
                label="Estimated budget (USD)"
                id="budget"
                value={data.budget}
                onChange={(v) => update("budget", v)}
                options={[
                  { value: "<2k", label: "Under $2,000" },
                  { value: "2-5k", label: "$2,000 – $5,000" },
                  { value: "5-10k", label: "$5,000 – $10,000" },
                  { value: "10-25k", label: "$10,000 – $25,000" },
                  { value: ">25k", label: "$25,000+" },
                ]}
                error={errors.budget}
                required
              />

              <SelectField
                label="Ideal timeline"
                id="timeline"
                value={data.timeline}
                onChange={(v) => update("timeline", v)}
                options={[
                  { value: "2-4w", label: "2–4 weeks" },
                  { value: "1-2m", label: "1–2 months" },
                  { value: "3-4m", label: "3–4 months" },
                  { value: "flex", label: "Flexible / not urgent" },
                ]}
                error={errors.timeline}
                required
              />
            </Grid>
          </Section>

          {/* Content & brand */}
          <Section
            title="Content & brand"
            subtitle="Where are you with words and visuals?"
          >
            <Grid>
              <SelectField
                label="Content readiness"
                id="contentReadiness"
                value={data.contentReadiness}
                onChange={(v) => update("contentReadiness", v)}
                options={[
                  { value: "ready", label: "All content ready" },
                  { value: "partial", label: "Some content ready" },
                  { value: "not_sure", label: "Need help creating content" },
                ]}
              />
              <SelectField
                label="Branding"
                id="branding"
                value={data.branding}
                onChange={(v) => update("branding", v)}
                options={[
                  {
                    value: "have_brand",
                    label: "Have brand guidelines/assets",
                  },
                  { value: "need_help", label: "Need help with branding" },
                ]}
              />
            </Grid>

            <div className="mt-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="style"
              >
                Visual style keywords
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {styleWords.map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => toggleArray("style", w)}
                    className={
                      "px-3 py-2 rounded-xl border text-sm transition active:scale-[0.99] " +
                      (data.style.includes(w)
                        ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white"
                        : "bg-white/60 dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700 hover:border-gray-300")
                    }
                    aria-pressed={data.style.includes(w)}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            <TextField
              label="Color preferences"
              id="colors"
              value={data.colors}
              onChange={(v) => update("colors", v)}
              placeholder="Brand colors or examples"
            />
            <TextArea
              label="Competitors / inspiration"
              id="competitors"
              value={data.competitors}
              onChange={(v) => update("competitors", v)}
              placeholder="Share URLs you like or competitors to differentiate from"
            />
          </Section>

          {/* Tech & infrastructure */}
          <Section
            title="Tech & infrastructure"
            subtitle="We can help wherever you are."
          >
            <Grid>
              <SelectField
                label="Hosting"
                id="hosting"
                value={data.hosting}
                onChange={(v) => update("hosting", v)}
                options={[
                  { value: "have_hosting", label: "I have hosting" },
                  { value: "need_setup", label: "I need hosting set up" },
                ]}
              />
              <SelectField
                label="Domain"
                id="domain"
                value={data.domain}
                onChange={(v) => update("domain", v)}
                options={[
                  { value: "have_domain", label: "I own a domain" },
                  { value: "need_domain", label: "I need a domain" },
                ]}
              />
            </Grid>
          </Section>

          {/* Notes */}
          <Section
            title="Anything else?"
            subtitle="Links, files, constraints—drop them here."
          >
            <TextArea
              label="Additional notes"
              id="notes"
              value={data.notes}
              onChange={(v) => update("notes", v)}
              placeholder="e.g., hard deadlines, must‑have tools, stakeholder list, accessibility/regulatory requirements"
              rows={5}
            />
          </Section>

          {/* Consent & Submit */}
          <div className="p-6 md:p-8">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 rounded border-gray-300 dark:border-neutral-700"
                checked={data.consent}
                onChange={(e) => update("consent", e.target.checked)}
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                I agree to be contacted about this request and understand my
                data will be handled according to the privacy policy.
              </span>
            </label>
            {errors.consent && (
              <p className="mt-2 text-sm text-red-600">{errors.consent}</p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-[#15919B] to-[#2CC295] hover:opacity-95 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#15919B]/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {submitting ? "Submitting…" : "Submit request"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="rounded-2xl px-5 py-3 font-semibold bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700"
              >
                Reset
              </button>
            </div>
          </div>
        </form>

        <footer className="mt-6 text-center text-xs text-gray-500">
          Built with ❤️ • Accessible, responsive, and privacy‑conscious.
        </footer>
      </div>
    </div>
  );
}

/* -----------------------
 * UI Primitives
 * ----------------------*/
function Section({ title, subtitle, children }) {
  return (
    <section className="p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function Grid({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  required,
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={
          "w-full rounded-xl border bg-white/60 dark:bg-neutral-800/60 px-3 py-2 outline-none transition " +
          "border-gray-200 focus:ring-2 focus:ring-teal-400 dark:border-neutral-700"
        }
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function NumberField({ id, label, value, onChange, min = 0, max = 1000 }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1">
        {label}
      </label>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-xl border bg-white/60 dark:bg-neutral-800/60 px-3 py-2 outline-none transition border-gray-200 focus:ring-2 focus:ring-teal-400 dark:border-neutral-700"
      />
    </div>
  );
}

function TextArea({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
  required,
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border bg-white/60 dark:bg-neutral-800/60 px-3 py-2 outline-none transition border-gray-200 focus:ring-2 focus:ring-teal-400 dark:border-neutral-700"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function SelectField({ id, label, value, onChange, options, error, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-xl border bg-white/60 dark:bg-neutral-800/60 px-3 py-2 outline-none transition border-gray-200 focus:ring-2 focus:ring-teal-400 dark:border-neutral-700"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function CheckboxGroup({ options, selected, onToggle }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-800/60 px-3 py-2"
        >
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 dark:border-neutral-600"
            checked={selected.includes(opt)}
            onChange={() => onToggle(opt)}
          />
          <span className="text-sm">{opt}</span>
        </label>
      ))}
    </div>
  );
}
