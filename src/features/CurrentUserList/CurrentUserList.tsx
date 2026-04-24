"use client";
import { IntegrationsCard } from '#/components/ui/integration-card';
import { SiApple, SiDiscord, SiFacebook, SiGithub, SiGoogle, SiSlack } from 'react-icons/si';

const MOCK_INTEGRATIONS = [
    {
        id: '1',
        name: 'Slack',
        entities: 'CHANNELS, MESSAGES, USERS',
        description: 'Send notifications to Slack channels or users when specific events occur in your workflow.',
        tags: ['Communication', 'Notifications'],
        triggers: 12,
        actions: 8,
        available: true,
        icon: <SiSlack className="text-[#E01E5A]" size={20} />
    },
    {
        id: '2',
        name: 'Discord',
        entities: 'SERVERS, CHANNELS, WEBHOOKS',
        description: 'Automate your Discord server by sending rich media messages and managing member roles.',
        tags: ['Community', 'Webhooks'],
        triggers: 5,
        actions: 14,
        available: true,
        icon: <SiDiscord className="text-[#5865F2]" size={20} />
    },
    {
        id: '3',
        name: 'GitHub',
        entities: 'REPOS, ISSUES, PULL REQUESTS',
        description: 'Connect your development workflow to trigger actions on new commits or pull requests.',
        tags: ['Development', 'Version Control'],
        triggers: 24,
        actions: 10,
        available: false,
        icon: <SiGithub className="text-[#181717] dark:text-white" size={20} />
    },
    {
        id: '4',
        name: 'Google',
        entities: 'CALENDAR, CONTACTS, TASKS',
        description: 'Connect your Google account to sync your calendar, contacts, and tasks.',
        tags: ['Productivity', 'Task Management'],
        triggers: 10,
        actions: 5,
        available: true,
        icon: <SiGoogle className="text-[#EA4335]" size={20} />
    },
    {
        id: '5',
        name: 'Microsoft',
        entities: 'OUTLOOK, TEAMS, ONEDRIVE',
        description: 'Connect your Microsoft account to sync your Outlook, Teams, and OneDrive.',
        tags: ['Productivity', 'Task Management'],
        triggers: 10,
        actions: 5,
        available: true,
        icon: <SiGoogle className="text-[#0078D4]" size={20} />
    },
    {
        id: '6',
        name: 'Apple',
        entities: 'CALENDAR, CONTACTS, TASKS',
        description: 'Connect your Apple account to sync your calendar, contacts, and tasks.',
        tags: ['Productivity', 'Task Management'],
        triggers: 10,
        actions: 5,
        available: true,
        icon: <SiApple className="text-[#000000]" size={20} />
    },
    {
        id: '7',
        name: 'Amazon',
        entities: 'AWS, S3, SQS',
        description: 'Connect your Amazon account to sync your AWS, S3, and SQS.',
        tags: ['Productivity', 'Task Management'],
        triggers: 10,
        actions: 5,
        available: true,
        icon: <SiGoogle className="text-[#000000]" size={20} />
    },
    {
        id: '8',
        name: 'Facebook',
        entities: 'FACEBOOK, INSTAGRAM, WHATSAPP',
        description: 'Connect your Facebook account to sync your Facebook, Instagram, and WhatsApp.',
        tags: ['Productivity', 'Task Management'],
        triggers: 10,
        actions: 5,
        available: true,
        icon: <SiFacebook className="text-[#000000]" size={20} />
    },
    {
        id: '9',
        name: 'Twitter',
        entities: 'TWITTER, X, TWITTER',
        description: 'Connect your Twitter account to sync your Twitter, X, and Twitter.',
        tags: ['Productivity', 'Task Management'],
        triggers: 10,
        actions: 5,
        available: true,
        icon: <SiGoogle className="text-[#000000]" size={20} />
    },
];

export default function CurrentUserList() {
    return (
        <IntegrationsCard
            title="Connected Apps"
            items={MOCK_INTEGRATIONS}
        />
    );
}