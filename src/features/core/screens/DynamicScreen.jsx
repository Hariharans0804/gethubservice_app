import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ProductsScreen } from '../../products';
import { CategoriesScreen } from '../../categories';
import { Colors, Fonts } from '../../../constants';
import { CustomersScreen } from '../../customers';
import { EmployeesScreen } from '../../employees';
import { AppointmentsScreen } from '../../appointments';
import { DashboardScreen } from '../../dashboard';
import { OrdersScreen } from '../../orders';
import { InventoryScreen } from '../../inventory';
import { MenuManagementScreen } from '../../menu_management';
import { ReviewsScreen } from '../../reviews';
import { AnalyticsScreen } from '../../analytics';
import { MarketingScreen } from '../../marketing';
import { FinanceScreen } from '../../finance';
import { SettingsScreen } from '../../settings';
import { SupportScreen } from '../../support';
import { EnquiriesScreen } from '../../enquiries';
import { NotificationsScreen } from '../../notifications';
import { DocumentsScreen } from '../../documents';
import { TasksScreen } from '../../tasks';
import { CalendarScreen } from '../../calendar';
import { VendorsScreen } from '../../vendors';
import { SubscriptionsScreen } from '../../subscriptions';
import { ReportsScreen } from '../../reports';

const DynamicScreen = ({ route, navigation }) => {

  const { screenId, title, description } = route.params || {};
  console.log('DynamicScreen route params:', route.params);

  return (
    <View style={styles.container}>

      {/* <Text style={styles.title}>{title} </Text>
            {description && (
                <Text style={styles.description}>{description}</Text>
            )} */}

      {screenId === 'dashboard' && (
        <DashboardScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'products' && (
        <ProductsScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'categories' && (
        <CategoriesScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'orders' && (
        <OrdersScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'customers' && (
        <CustomersScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'staff' && (
        <EmployeesScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'inventory' && (
        <InventoryScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'menu-management' && (
        <MenuManagementScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'reservations' && (
        <AppointmentsScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'reviews' && (
        <ReviewsScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'analytics' && (
        <AnalyticsScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'marketing' && (
        <MarketingScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'finance' && (
        <FinanceScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'settings' && (
        <SettingsScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'support' && (
        <SupportScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'enquiries' && (
        <EnquiriesScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'notifications' && (
        <NotificationsScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'documents' && (
        <DocumentsScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'tasks' && (
        <TasksScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'calendar' && (
        <CalendarScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'vendors' && (
        <VendorsScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'subscriptions' && (
        <SubscriptionsScreen screenId={screenId} title={title} navigation={navigation} />
      )}

      {screenId === 'reports' && (
        <ReportsScreen screenId={screenId} title={title} navigation={navigation} />
      )}





    </View>
  )
}

export default DynamicScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_SKY_BLUE,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.DEFAULT_BLACK,
  },
})