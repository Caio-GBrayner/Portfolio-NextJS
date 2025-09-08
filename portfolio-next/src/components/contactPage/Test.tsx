'use client'
import React, { useState } from "react";

const steps = [
  {
    label: "Basic Info",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    ),
  },
  {
    label: "Project Details",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    ),
  },
  {
    label: "Schedule",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    ),
  },
  {
    label: "Message",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    ),
  },
];

export function ContactStepperForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    // Adicione outros campos conforme necessário
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  // Exemplo de renderização de cada etapa
  function renderStep() {
    if (step === 0) {
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
            <input
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
            <input
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              placeholder="Your email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      );
    }
    // Adicione outras etapas conforme necessário
    return (
      <div className="space-y-4 text-center text-muted-foreground">
        <p>Step {step + 1} content goes here.</p>
      </div>
    );
  }

  return (
    <div className="pt-28 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto w-full px-4 sm:px-0 flex justify-center items-center text-center">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {/* Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((s, i) => (
                <React.Fragment key={i}>
                  <div className={`flex items-center`}>
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300
                      ${i === step ? "bg-primary border-primary text-primary-foreground" : "border-border text-muted-foreground"}
                    `}>
                      {s.icon}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="h-0.5 w-16 mx-2 transition-all duration-300 bg-border"></div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-sm">
                <span className="text-foreground font-medium">{steps[step].label}</span>
                <span className="text-muted-foreground">{step + 1} of {steps.length}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {step === 0 ? "Tell us about yourself" : "Continue to the next step"}
              </p>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
          {/* Form */}
          <form className="space-y-6" encType="multipart/form-data" onSubmit={e => e.preventDefault()}>
            <div className="bg-card border border-border rounded-2xl p-6" style={{ opacity: 1 }}>
              {renderStep()}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                disabled={step === 0}
                className={`px-6 py-3 rounded-lg border transition-all border-border text-muted-foreground ${step === 0 ? "cursor-not-allowed opacity-60" : ""}`}
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline mr-2" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center"
              >
                Next
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline ml-2" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}