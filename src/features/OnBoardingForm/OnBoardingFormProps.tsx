export interface OnboardingPropsStep1 {
    title?: string;
    subtitle?: string;
    businessNameLabel?: string;
    businessNamePlaceholder?: string;
    legalNameLabel?: string;
    legalNamePlaceholder?: string;
    nextButtonText?: string;
    finishButtonText?: string;
    tooltipMainText?: string;
    tooltipSubText?: string;
    rightSectionDescription?: string;
    businessName?: string;
    legalName?: string;
    setBusinessName?: (businessName: string) => void;
    setLegalName?: (legalName: string) => void;
}
