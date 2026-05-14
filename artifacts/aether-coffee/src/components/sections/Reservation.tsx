import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, Clock, ChevronDown } from "lucide-react";

type FormType = "reservation" | "inquiry";

const TIMES = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
];

const PARTY_SIZES = ["1", "2", "3", "4", "5", "6", "7–10", "10+"];

const INQUIRY_TYPES = [
  "Private Event Booking",
  "Wholesale / Trade Inquiry",
  "Catering Request",
  "Press & Media",
  "General Question",
];

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-card/40 border border-border/60 focus:border-primary/60 outline-none h-12 px-4 text-sm text-foreground placeholder:text-foreground/30 transition-colors"
        style={{ color: value ? undefined : "rgba(255,255,255,0.3)" }}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-background text-foreground">{o}</option>
        ))}
      </select>
      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
    </div>
  );
}

export function Reservation() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<FormType>("reservation");
  const [submitting, setSubmitting] = useState(false);

  const [res, setRes] = useState({
    name: "", email: "", phone: "", date: "", time: "", party: "", notes: "",
  });
  const [inq, setInq] = useState({
    name: "", email: "", company: "", type: "", message: "",
  });

  function updateRes(field: string, value: string) {
    setRes((p) => ({ ...p, [field]: value }));
  }
  function updateInq(field: string, value: string) {
    setInq((p) => ({ ...p, [field]: value }));
  }

  async function handleReservation(e: React.FormEvent) {
    e.preventDefault();
    if (!res.name || !res.email || !res.date || !res.time || !res.party) return;
    setSubmitting(true);
    try {
      const r = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "reservation", ...res }),
      });
      if (!r.ok) throw new Error("Failed");
      toast({
        title: "Reservation Confirmed",
        description: `We'll see you on ${res.date} at ${res.time}. A confirmation has been sent to ${res.email}.`,
      });
      setRes({ name: "", email: "", phone: "", date: "", time: "", party: "", notes: "" });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleInquiry(e: React.FormEvent) {
    e.preventDefault();
    if (!inq.name || !inq.email || !inq.type || !inq.message) return;
    setSubmitting(true);
    try {
      const r = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "inquiry", ...inq }),
      });
      if (!r.ok) throw new Error("Failed");
      toast({
        title: "Inquiry Received",
        description: "We'll be in touch within 24 hours.",
      });
      setInq({ name: "", email: "", company: "", type: "", message: "" });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="reserve" className="py-32 bg-card/10 relative" data-testid="section-reservation">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-border/20" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-border/20" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-4">Reserve & Inquire</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Secure your <span className="italic text-primary">experience.</span>
          </h2>
          <p className="text-foreground/50 mt-4 max-w-xl leading-relaxed text-sm">
            Book a table at either of our locations, or reach out about private events, wholesale partnerships, and catering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border border-border/60 bg-card/20"
        >
          {/* Tab bar */}
          <div className="flex border-b border-border/60">
            {(["reservation", "inquiry"] as FormType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-5 text-xs tracking-[0.25em] uppercase font-semibold transition-all ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary bg-primary/5"
                    : "text-foreground/40 hover:text-foreground/70"
                }`}
              >
                {tab === "reservation" ? "Table Reservation" : "General Inquiry"}
              </button>
            ))}
          </div>

          <div className="p-10">
            {activeTab === "reservation" ? (
              <form onSubmit={handleReservation} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-foreground/50">Full Name *</label>
                    <Input
                      value={res.name}
                      onChange={(e) => updateRes("name", e.target.value)}
                      placeholder="Your name"
                      required
                      className="bg-card/40 border-border/60 focus:border-primary/60 rounded-none h-12 text-foreground placeholder:text-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-foreground/50">Email *</label>
                    <Input
                      type="email"
                      value={res.email}
                      onChange={(e) => updateRes("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="bg-card/40 border-border/60 focus:border-primary/60 rounded-none h-12 text-foreground placeholder:text-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-foreground/50">Phone</label>
                    <Input
                      type="tel"
                      value={res.phone}
                      onChange={(e) => updateRes("phone", e.target.value)}
                      placeholder="+1 (000) 000-0000"
                      className="bg-card/40 border-border/60 focus:border-primary/60 rounded-none h-12 text-foreground placeholder:text-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-foreground/50 flex items-center gap-2">
                      <Users size={12} /> Party Size *
                    </label>
                    <Select value={res.party} onChange={(v) => updateRes("party", v)} options={PARTY_SIZES} placeholder="Select party size" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-foreground/50 flex items-center gap-2">
                      <Calendar size={12} /> Date *
                    </label>
                    <Input
                      type="date"
                      value={res.date}
                      onChange={(e) => updateRes("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      required
                      className="bg-card/40 border-border/60 focus:border-primary/60 rounded-none h-12 text-foreground [color-scheme:dark]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-foreground/50 flex items-center gap-2">
                      <Clock size={12} /> Time *
                    </label>
                    <Select value={res.time} onChange={(v) => updateRes("time", v)} options={TIMES} placeholder="Select time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase text-foreground/50">Special Requests</label>
                  <textarea
                    value={res.notes}
                    onChange={(e) => updateRes("notes", e.target.value)}
                    placeholder="Dietary requirements, occasion, seating preferences…"
                    rows={3}
                    className="w-full bg-card/40 border border-border/60 focus:border-primary/60 outline-none px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 resize-none transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-foreground/30 text-xs tracking-wide">* Required fields</p>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-widest rounded-none h-12 px-10 disabled:opacity-50"
                  >
                    {submitting ? "SENDING…" : "RESERVE TABLE"}
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-foreground/50">Full Name *</label>
                    <Input
                      value={inq.name}
                      onChange={(e) => updateInq("name", e.target.value)}
                      placeholder="Your name"
                      required
                      className="bg-card/40 border-border/60 focus:border-primary/60 rounded-none h-12 text-foreground placeholder:text-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-foreground/50">Email *</label>
                    <Input
                      type="email"
                      value={inq.email}
                      onChange={(e) => updateInq("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="bg-card/40 border-border/60 focus:border-primary/60 rounded-none h-12 text-foreground placeholder:text-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-foreground/50">Company / Organisation</label>
                    <Input
                      value={inq.company}
                      onChange={(e) => updateInq("company", e.target.value)}
                      placeholder="Optional"
                      className="bg-card/40 border-border/60 focus:border-primary/60 rounded-none h-12 text-foreground placeholder:text-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-foreground/50">Inquiry Type *</label>
                    <Select value={inq.type} onChange={(v) => updateInq("type", v)} options={INQUIRY_TYPES} placeholder="Select type" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase text-foreground/50">Message *</label>
                  <textarea
                    value={inq.message}
                    onChange={(e) => updateInq("message", e.target.value)}
                    placeholder="Tell us how we can help…"
                    rows={5}
                    required
                    className="w-full bg-card/40 border border-border/60 focus:border-primary/60 outline-none px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 resize-none transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-foreground/30 text-xs tracking-wide">We respond within 24 hours</p>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-widest rounded-none h-12 px-10 disabled:opacity-50"
                  >
                    {submitting ? "SENDING…" : "SEND INQUIRY"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
