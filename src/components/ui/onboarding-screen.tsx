"use client";

import type { OnboardingPropsStep1 } from "#/features/OnBoardingForm/OnBoardingFormProps";
import { OnBoardingFormStep1 } from "#/features/OnBoardingForm/Step 1/AccountsNamesLabels";
import { OnBoardingFormStep2 } from "#/features/OnBoardingForm/Step 2/SecondaryData";
import HuntResumeCard from "#/features/OnBoardingForm/Step 3/HuntResumeCard";
import { ChevronLeft, StarsIcon } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";

export const OnboardingScreen: React.FC<OnboardingPropsStep1> = ({
  title = "Business Details",
  subtitle = "Tell us about your brand to start creating campaigns.",
  businessNameLabel = "Business name",
  businessNamePlaceholder = "Enter your name",
  legalNameLabel = "Business Legal name",
  legalNamePlaceholder = "Enter your business legal name",
  nextButtonText = "Create business account",
  finishButtonText = "Finish Setup",
  tooltipMainText = "Click here to add your profile image.",
  tooltipSubText = "You can always do this later.",
  rightSectionDescription = "With your creator profile ready, it's time to set up your business account.",
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [businessName, setBusinessName] = useState("Acme Inc");
  const [legalName, setLegalName] = useState("");

  const totalSteps = 3;
  const spring = { type: "spring", stiffness: 300, damping: 30 } as const;
  const progressSpring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
  } as const;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="flex min-h-full h-screen my-auto w-full flex-col items-center justify-center bg-transparent transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={spring}
        className="flex w-full max-w-sm flex-col overflow-hidden rounded-[32px] border bg-white p-2 shadow-xl transition-colors duration-500 md:max-w-[1140px] md:flex-row dark:bg-[#0A0A0A]"
      >
        {/* Left Section */}
        <div className="flex flex-[1.2] flex-col justify-center rounded-[26px] border border-black/5 bg-[#FAFAFA] px-8 py-10 transition-colors duration-500 md:rounded-l-[26px] md:rounded-r-none md:border-r-0 md:px-16 dark:border-white/10 dark:bg-[#131313]">
          <div className="mx-auto w-full max-w-sm overflow-y-scroll">
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="rounded-xl bg-black/5 p-2 dark:bg-white/5">
                <StarsIcon />
              </div>
            </div>

            <h1 className="mb-2 text-2xl font-semibold tracking-tight text-[#1A1A1A] transition-colors dark:text-[#d8d8d8]">
              {title}
            </h1>
            <p className="mb-8 text-sm text-gray-500 transition-colors dark:text-gray-400">
              {subtitle}
            </p>

            {/* Stepper */}
            <div className="mb-6 flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative h-1 flex-1 overflow-hidden rounded-full bg-black/5 dark:bg-white/10"
                >
                  <motion.div
                    animate={{ width: i <= currentStep ? "100%" : "0%" }}
                    transition={progressSpring}
                    className="absolute top-0 left-0 h-full bg-emerald-400"
                  />
                </div>
              ))}
            </div>

            {/* Step 1 */}
            {currentStep === 1 && (
              <OnBoardingFormStep1
                businessNameLabel={businessNameLabel}
                businessNamePlaceholder={businessNamePlaceholder}
                legalNameLabel={legalNameLabel}
                legalNamePlaceholder={legalNamePlaceholder}
                businessName={businessName}
                setBusinessName={setBusinessName}
                legalName={legalName}
                setLegalName={setLegalName}
              />
            )}

            {currentStep === 2 && <OnBoardingFormStep2 />}

            {currentStep === 3 && <HuntResumeCard />}

            <div className="flex flex-nowrap items-center gap-2 mt-6 md:gap-4">
              <motion.button
                onClick={handleBack}
                whileTap={{ scale: 0.95 }}
                className="shrink-0 rounded-2xl border border-black/10 bg-white p-4 text-[#666666] transition-colors dark:border-[#282828] dark:bg-[#121212] dark:text-[#999999]"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileTap={{ scale: 0.98 }}
                className="flex min-w-fit flex-1 items-center justify-center rounded-2xl bg-[#1A1A1A] px-8 py-4 text-sm font-bold whitespace-nowrap text-white shadow-xl transition-colors dark:bg-[#EDEDED] dark:text-[#101010]"
              >
                {currentStep === totalSteps ? finishButtonText : nextButtonText}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative hidden flex-1 flex-col items-center justify-center rounded-[26px] border border-black/5 bg-[#F4F4F4] p-12 transition-colors duration-500 md:flex md:rounded-l-none md:rounded-r-[26px] md:border-l-0 dark:border-white/5 dark:bg-[#1C1C1C]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-10 -mb-5 rounded-2xl border border-[#E5E5E5] bg-white px-4 py-2 text-center text-xs font-medium whitespace-nowrap text-black shadow-lg transition-colors dark:border-[#2D2D2D] dark:bg-[#2B292E] dark:text-white"
          >
            <p>{tooltipMainText}</p>
            <p className="text-[10px] font-normal whitespace-nowrap opacity-60">{tooltipSubText}</p>
          </motion.div>

          <img src="https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fbulbapedia.bulbagarden.net%2Fwiki%2FPok%25C3%25A9mon_FireRed_and_LeafGreen_Versions&ved=0CBYQjRxqFwoTCMC6ufehhJQDFQAAAAAdAAAAABAF&opi=89978449" />

          <p className="max-w-64 text-center text-xs leading-relaxed text-gray-500 transition-colors dark:text-gray-400">
            {rightSectionDescription}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
