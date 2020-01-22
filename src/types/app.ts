export interface HomeProps {
    setIsMobile: Function;
    isMobile: boolean;
}

export interface SkillsProps {
    setIsMobile: Function;
    isMobile: boolean;
}

export interface ProjectsProps {
    setIsMobile: Function;
    isMobile: boolean;
}

export interface ProjectsCardProps {
    project: Record<string, any>;
    projectSelected: string;
    setProjectAnimationClass: Function;
}

export interface ContactMeProps {
    setIsMobile: Function;
    isMobile: boolean;
    setEmailSender: Function;
    setEmailMessage: Function;
    setEmailResponse: Function;
    emailSender: string;
    emailMessage: string;
    emailResponse: Record<string, any>;
}

export interface Tweet {
    created_at: string;
    text: string;
    photo?: string;
    retweet_count: number;
    favorite_count: number;
}

export interface AppState {
    latestTweet: Tweet;
    isMobile: boolean;
    emailSender: string;
    emailMessage: string;
    emailResponse: Record<string, any>;
    projectSelected: string;
}