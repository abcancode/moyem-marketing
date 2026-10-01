import { useState, type ComponentProps } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { supabase } from "../../lib/supabase";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit: NonNullable<ComponentProps<"form">["onSubmit"]> = async (
    event,
  ) => {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const { error } = await supabase.from("waitlist_signups").insert({
        full_name: name.trim(),
        email: email.trim().toLowerCase(),
        business_name: business.trim() || null,
        consent_agreed: consent,
      });

      if (error) {
        if (error.code === "23505") {
          throw new Error("This email address is already on the waitlist.");
        }

        console.error("Supabase waitlist error:", error);
        throw new Error("We couldn't submit your details. Please try again.");
      }

      setStatus("success");
      setMessage("You're on the list! We'll be in touch.");

      setName("");
      setEmail("");
      setBusiness("");
      setConsent(false);
    } catch (error) {
      setStatus("error");

      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section id="waitlist" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
        <div>
          <span className="mb-5 inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-600 dark:text-teal-300">
            Get early access
          </span>

          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
            Make running your business feel easier.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Join the Moyem waitlist and be among the first to explore a
            connected workspace for managing and growing your business.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-[var(--color-muted)]">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-500" />
            <span>Be notified when early access becomes available.</span>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-5 sm:p-7">
          {/* <h3 className="text-xl font-semibold text-[var(--color-text)]">
            Join the waiting list
          </h3> */}
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
            Tell us a little about yourself and your business.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="waitlist-name"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Full name
              </label>
              <input
                id="waitlist-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your full name"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="waitlist-email"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Work email
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="waitlist-business"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Business name{" "}
                <span className="font-normal text-[var(--color-muted)]">
                  (optional)
                </span>
              </label>
              <input
                id="waitlist-business"
                name="business"
                type="text"
                autoComplete="organization"
                value={business}
                onChange={(event) => setBusiness(event.target.value)}
                placeholder="Your business name"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="waitlist-consent"
                name="consent"
                type="checkbox"
                required
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-[var(--color-border)] accent-teal-600 focus:ring-2 focus:ring-teal-500"
              />

              <label
                htmlFor="waitlist-consent"
                className="text-sm leading-6 text-[var(--color-muted)]"
              >
                I agree to Moyem processing my information to manage my waitlist
                registration and send me updates about early access and the
                product.
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <LoaderCircle className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Join the waiting list
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>

            {message && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm leading-6 ${
                  status === "success"
                    ? "text-teal-600 dark:text-teal-300"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {message}
              </p>
            )}

            <p className="text-center text-xs leading-5 text-[var(--color-muted)]">
              Your information will only be used in accordance with Moyem's
              privacy practices.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
