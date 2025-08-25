import { Anchor, Angry, Anvil, Baby, Cable, Dam, Factory, Folder, Gem, Home, Layout, LayoutDashboard, MSquare, Octagon, ShieldPlus } from 'lucide-react-native';
import { AboutScreen, BlogScreen, CreateSiteScreen, DashboardScreen, FeaturesScreen, GetStartedScreen, HomeScreen, IndustriesScreen, PricingScreen, SiteNeedsScreen, SupportScreen, TemplatesScreen, WhyChooseUsScreen } from '../screens';

export const drawerList = [
    { label: "Home", route: "Home", icon: Home, component: HomeScreen },
    // { label: "Dashboard", route: "Dashboard", icon: LayoutDashboard, component: DashboardScreen },
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