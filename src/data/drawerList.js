import { Anchor, Angry, Anvil, Baby, BriefcaseBusiness, Cable, Dam, Factory, Folder, Gem, Headset, Home, Layout, LayoutDashboard, MSquare, Settings, ShieldPlus, ShowerHead, Smile, University, Users } from 'lucide-react-native';
import { AboutScreen, BlogScreen, CreateSiteScreen, FeaturesScreen, GetStartedScreen, HomeScreen, IndustriesScreen, PricingScreen, SiteNeedsScreen, SupportScreen, TemplatesScreen, WhyChooseUsScreen } from '../screens/LoginBefore';
import { BusinessesScreen, CustomerScreen, DashboardScreen, JobsScreen, LeadsScreen, ServicesScreen, SettingsScreen, SiteBuilderScreen } from '../screens/LoginAfter';


// drawerBefore.js
export const drawerListBeforeLogin = [
    { label: "Home", route: "Home", icon: Home, component: HomeScreen },
    { label: "About", route: "About", icon: Anvil, component: AboutScreen },
    { label: "Features", route: "Features", icon: ShieldPlus, component: FeaturesScreen },
    { label: "WhyChooseUs", route: "WhyChooseUs", icon: MSquare, component: WhyChooseUsScreen },
    { label: "CreateSite", route: "CreateSite", icon: Anchor, component: CreateSiteScreen },
    { label: "Pricing", route: "Pricing", icon: Gem, component: PricingScreen },
    {
        label: "More",
        icon: Folder,
        children: [
            { label: "Industries", route: "Industries", icon: Factory, component: IndustriesScreen },
            { label: "GetStarted", route: "GetStarted", icon: Angry, component: GetStartedScreen },
            { label: "Templates", route: "Templates", icon: Layout, component: TemplatesScreen },
            { label: "SiteNeeds", route: "SiteNeeds", icon: Baby, component: SiteNeedsScreen },
            { label: "Blog", route: "Blog", icon: Cable, component: BlogScreen },
            { label: "Support", route: "Support", icon: Dam, component: SupportScreen },
        ]
    }
];

// drawerAfter.js
export const drawerListAfterLogin = [
    { label: "Dashboard", route: "Dashboard", icon: LayoutDashboard, component: DashboardScreen },
    { label: "Businesses", route: "Businesses", icon: BriefcaseBusiness, component: BusinessesScreen },
    { label: "Site Builder", route: "SiteBuilder", icon: University, component: SiteBuilderScreen },
    { label: "Customer", route: "Customer", icon: Users, component: CustomerScreen },
    { label: "Services", route: "Services", icon: ShowerHead, component: ServicesScreen },
    { label: "Jobs", route: "Jobs", icon: Smile, component: JobsScreen },
    { label: "Leads", route: "Leads", icon: Headset, component: LeadsScreen },
    { label: "Settings", route: "Settings", icon: Settings, component: SettingsScreen },
];