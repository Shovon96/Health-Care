import { Search, Calendar, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HeroProps } from "@/types/heroProps";


export function Hero({
  badge = {
    text: "AI-Powered Healthcare",
  },
  heading = {
    line1: "Find Your Perfect",
    line2: "Doctor with AI",
  },
  description = [
    "Our advanced AI technology analyzes your symptoms, medical",
    "history, and preferences to match you with the best-fit doctors",
    "in seconds.",
  ],
  buttons = {
    primary: {
      text: "Find Your Doctor",
    },
    secondary: {
      text: "Book Appointment",
    },
  },
  stats = [
    { value: "50K+", label: "Patients Served" },
    { value: "1000+", label: "Expert Doctors" },
    {
      value: "4.9",
      label: "Patient Rating",
      icon: <Star className="size-6 fill-yellow-400 stroke-yellow-400" />,
    },
  ],
  formCard = {
    title: "AI Doctor Finder",
    symptomLabel: "What are your symptoms?",
    symptomPlaceholder: "e.g., headache, fever, cough",
    specialtyLabel: "Preferred specialty",
    specialtyOptions: [
      "General Physician",
      "Cardiologist",
      "Dermatologist",
      "Pediatrician",
      "Orthopedic",
    ],
    defaultSpecialty: "General Physician",
    submitText: "Get AI Recommendations",
    footerText:
      "✨ Powered by advanced AI algorithms for accurate doctor matching",
  },
}: HeroProps) {


  return (
    <div className="w-full relative overflow-hidden">
      {/* Modern Gradient Background with Brand Colors - Theme Aware */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-white via-[#04BCD4]/5 to-[#54AC5C]/10 dark:from-gray-900 dark:via-[#04BCD4]/10 dark:to-[#07824a]/20" />

      {/* Animated Background Shapes - Theme Aware */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#54AC5C]/10 dark:bg-[#54AC5C]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#04BCD4]/10 dark:bg-[#04BCD4]/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#07824a]/5 dark:bg-[#07824a]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }} />

      {/* Content Container */}
      <div className="w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 self-start rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 shadow-lg border border-[#04BCD4]/30 dark:border-[#04BCD4]/50 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-5 h-5 text-[#04BCD4] animate-pulse" />
                <span className="text-sm font-semibold text-[#07824a] dark:text-[#54AC5C]">
                  {badge.text}
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#07824a] dark:text-white animate-slide-up">
                  {heading.line1}
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-linear-to-r from-[#04BCD4] via-[#54AC5C] to-[#07824a] bg-clip-text text-transparent animate-slide-up"
                  style={{ animationDelay: '0.1s' }}>
                  {heading.line2}
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-1 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl animate-slide-up"
                style={{ animationDelay: '0.2s' }}>
                {description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up"
                style={{ animationDelay: '0.3s' }}>
                {buttons.primary && (
                  <Button
                    onClick={buttons.primary.onClick}
                    className="h-14 gap-3 cursor-pointer rounded-xl px-8 text-base font-semibold bg-linear-to-r from-[#04BCD4] to-[#03a8bd] hover:from-[#03a8bd] hover:to-[#04BCD4] text-white shadow-lg hover:shadow-2xl hover:shadow-[#04BCD4]/30 hover:scale-105 transition-all duration-300"
                  >
                    <Search className="w-5 h-5" />
                    {buttons.primary.text}
                  </Button>
                )}
                {buttons.secondary && (
                  <Button
                    onClick={buttons.secondary.onClick}
                    variant="outline"
                    className="h-14 gap-3 cursor-pointer font-semibold rounded-xl border-2 border-[#54AC5C] dark:border-[#54AC5C] px-8 text-base text-[#54AC5C] dark:text-[#54AC5C] hover:bg-[#54AC5C] hover:text-white dark:hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    {buttons.secondary.text}
                  </Button>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-up"
                style={{ animationDelay: '0.4s' }}>
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2 group">
                    <div className="flex items-center gap-2">
                      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#07824a] dark:text-[#04BCD4] group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </p>
                      {stat.icon}
                    </div>
                    <p className="text-xs md:text-sm leading-tight text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form Card */}
            <div className="flex items-center justify-center lg:justify-end animate-fade-in"
              style={{ animationDelay: '0.5s' }}>
              <div className="w-full max-w-lg rounded-3xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-8 md:p-10 shadow-2xl border border-[#04BCD4]/20 dark:border-[#04BCD4]/30 hover:shadow-[0_20px_60px_-15px_rgba(4,188,212,0.4)] dark:hover:shadow-[0_20px_60px_-15px_rgba(4,188,212,0.6)] transition-all duration-500">
                {/* Card Header */}
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#07824a] dark:text-white">
                    {formCard.title}
                  </h2>
                  <div className="p-3 bg-linear-to-br from-[#04BCD4] to-[#54AC5C] rounded-xl shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* Symptoms Input */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="symptoms"
                      className="text-sm font-semibold text-[#07824a] dark:text-[#54AC5C]"
                    >
                      {formCard.symptomLabel}
                    </Label>
                    <Input
                      id="symptoms"
                      name="symptoms"
                      placeholder={formCard.symptomPlaceholder}
                      className="h-14 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-[#04BCD4] dark:focus:border-[#04BCD4] focus:ring-[#04BCD4] transition-all duration-300 text-base"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="h-14 w-full rounded-xl bg-linear-to-r from-[#04BCD4] via-[#54AC5C] to-[#07824a] text-base font-semibold hover:shadow-xl hover:shadow-[#04BCD4]/30 hover:scale-[1.02] transition-all duration-300 text-white"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    {formCard.submitText}
                  </Button>
                </form>

                {/* Footer */}
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p className="text-center text-sm leading-relaxed text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#04BCD4]" />
                    {formCard.footerText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Wave Divider - Theme Aware */}
      <div className="absolute -bottom-5 left-0 w-full overflow-hidden leading-none z-20 scale-y-[-1]">
        <svg
          className="relative block w-full h-[60px] md:h-20 lg:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Wave for Light Mode */}
          <path
            className="fill-white dark:fill-black"
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            className="fill-white dark:fill-black"
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path
            className="fill-white dark:fill-black"
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          />
        </svg>
      </div>
    </div>
  );
}