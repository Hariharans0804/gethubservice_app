import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../../../constants'
import { ScreenHeader } from '../../../components';
import { Apple, BadgeCent, ChartArea, ListChecks, ListOrdered, PersonStanding } from 'lucide-react-native';
import DashboardMenu from '../components/DashboardMenu';
import TodayRevenue from '../components/TodayRevenue';
import TotalRevenue from '../components/TotalRevenue';

const DashboardScreen = ({ title, navigation }) => {

  const [searchText, setSearchText] = useState('');

  const hideSections = {
    addButton: true,
    title: false,
    search: true
  };

  // Dashboard items
  const dashboardItems_1 = [
    { id: 1, label: 'Analytics', icon: ChartArea, color: '#8E9CFA', bgColor: '#E1E2FE' },
    { id: 2, label: 'Customers', icon: PersonStanding, color: '#FF9800', bgColor: '#FFE9CF' },
    { id: 3, label: 'Orders', icon: ListOrdered, color: '#E573E0', bgColor: '#F9EAF7' },
    { id: 4, label: 'Tasks', icon: ListChecks, color: '#81C784', bgColor: '#E4F0E3' },
    { id: 5, label: 'Sales', icon: BadgeCent, color: '#FFD54F', bgColor: '#FEF7DC' },
    { id: 6, label: 'Products', icon: Apple, color: '#C27A89', bgColor: '#F2E4E7' },
  ];

  const dashboardItems_2 = [
    { id: 1, title: 'Revenue Today', amount: '$2,847', percentage: '+12%', color: '#4CAF50' },
    { id: 2, title: 'Active Users', amount: '1,234', percentage: '+5%', color: '#4CAF50' },
    { id: 3, title: 'Orders', amount: '89', percentage: '+8%', color: '#4CAF50' },
    { id: 4, title: 'Products', amount: '$2,847', percentage: '0', color: '#4CAF50' },
  ]

  const dashboardItems_3 = [
    { id: 1, title: 'Total Revenue', amount: '$12,847', percentage: '12%', color: '#5B6DFF' },
    { id: 2, title: 'Active Customers', amount: '234', percentage: '+5%', color: '#5B6DFF' },
    { id: 3, title: 'Orders Today', amount: '89', percentage: '+8%', color: '#5B6DFF' },
    { id: 4, title: 'Conversion Rate', amount: '3.2%', percentage: '+0.5%', color: '#5B6DFF' },
  ]

  return (
    <View style={styles.container}>

      <ScreenHeader hideSections={hideSections} searchText={searchText} setSearchText={setSearchText} title={title} />


      <View style={{/*borderWidth:1,*/marginTop: -20 }}>
        <DashboardMenu data={dashboardItems_1} />
      </View>

      <View style={{/*borderWidth:1,*/marginTop: 20 }}>
        <TodayRevenue data={dashboardItems_2} />
      </View>

      <View style={{/*borderWidth:1,*/marginTop: 20 }}>
        <TotalRevenue data={dashboardItems_3} />
      </View>

    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE
  },
  heading: {
    fontSize: 22,
    // lineHeight: 22 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    padding: 10,
    color: Colors.DEFAULT_SKY_BLUE
  },
  searchContainer: {
    // borderWidth: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
})