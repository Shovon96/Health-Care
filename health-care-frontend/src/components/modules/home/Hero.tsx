import { Search, Calendar, Star, Sparkles } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { LargeSparkleIcon, SparkleIcon } from "@/src/assets/icons/icons";
import { HeroProps } from "@/src/types/heroProps";


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
            {/* Modern Gradient Background with Brand Colors */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "linear-gradient(135deg, #ffffff 0%, #e0f7fa 25%, #04BCD4 100%)",
                }}
            />
            
            {/* Animated Background Shapes */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#54AC5C]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#04BCD4]/10 rounded-full blur-3xl animate-pulse delay-1000" />
            
            {/* Content Container */}
            <div className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20 relative z-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                        {/* Left Column - Hero Content */}
                        <div className="flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-in">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 self-start rounded-full bg-white/90 backdrop-blur-sm px-5 py-2.5 shadow-lg border border-[#04BCD4]/20 hover:scale-105 transition-transform duration-300">
                                <Sparkles className="w-4 h-4 text-[#04BCD4]" />
                                <span className="text-sm font-semibold text-[#07824a]">
                                    {badge.text}
                                </span>
                            </div>

                            {/* Heading */}
                            <div className="space-y-2">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#07824a] animate-slide-up">
                                    {heading.line1}
                                </h1>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#04BCD4] to-[#54AC5C] bg-clip-text text-transparent animate-slide-up delay-100">
                                    {heading.line2}
                                </h1>
                            </div>

                            {/* Description */}
                            <div className="space-y-1 text-base md:text-lg leading-relaxed text-gray-700 max-w-xl animate-slide-up delay-200">
                                {description.map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
                                {buttons.primary && (
                                    <Button
                                        onClick={buttons.primary.onClick}
                                        className="h-14 gap-3 cursor-pointer rounded-xl px-8 text-base font-semibold bg-[#04BCD4] hover:bg-[#03a8bd] text-white uppercase shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        <Search className="w-5 h-5" />
                                        {buttons.primary.text}
                                    </Button>
                                )}
                                {buttons.secondary && (
                                    <Button
                                        onClick={buttons.secondary.onClick}
                                        variant="outline"
                                        className="h-14 gap-3 cursor-pointer font-semibold rounded-xl border-2 border-[#54AC5C] px-8 text-base text-[#54AC5C] hover:bg-[#54AC5C] hover:text-white uppercase hover:scale-105 transition-all duration-300 shadow-md"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        {buttons.secondary.text}
                                    </Button>
                                )}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-6 animate-slide-up delay-400">
                                {stats.map((stat, index) => (
                                    <div key={index} className="space-y-2 group">
                                        <div className="flex items-center gap-2">
                                            <p className="text-2xl md:text-3xl font-bold text-[#07824a] group-hover:scale-110 transition-transform duration-300">
                                                {stat.value}
                                            </p>
                                            {stat.icon}
                                        </div>
                                        <p className="text-xs md:text-sm leading-tight text-gray-600">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Form Card */}
                        <div className="flex items-center justify-center lg:justify-end animate-fade-in delay-500">
                            <div className="w-full max-w-lg rounded-3xl bg-white/95 backdrop-blur-md p-8 md:p-10 shadow-2xl border border-[#04BCD4]/10 hover:shadow-[0_20px_60px_-15px_rgba(4,188,212,0.3)] transition-all duration-500">
                                {/* Card Header */}
                                <div className="mb-8 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-[#07824a]">{formCard.title}</h2>
                                    <div className="p-2 bg-gradient-to-br from-[#04BCD4] to-[#54AC5C] rounded-xl">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Form */}
                                <form className="space-y-6">
                                    {/* Symptoms Input */}
                                    <div className="space-y-3">
                                        <Label
                                            htmlFor="symptoms"
                                            className="text-sm font-semibold text-[#07824a]"
                                        >
                                            {formCard.symptomLabel}
                                        </Label>
                                        <Input
                                            id="symptoms"
                                            name="symptoms"
                                            placeholder={formCard.symptomPlaceholder}
                                            className="h-14 rounded-xl border-2 border-gray-200 focus:border-[#04BCD4] focus:ring-[#04BCD4] transition-all duration-300 text-base"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="h-14 w-full rounded-xl bg-gradient-to-r from-[#04BCD4] to-[#54AC5C] text-base font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-white"
                                    >
                                        {formCard.submitText}
                                    </Button>
                                </form>

                                {/* Footer */}
                                <div className="mt-8 border-t border-gray-200 pt-6">
                                    <p className="text-center text-sm leading-relaxed text-gray-600 flex items-center justify-center gap-2">
                                        <Sparkles className="w-4 h-4 text-[#04BCD4]" />
                                        {formCard.footerText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}