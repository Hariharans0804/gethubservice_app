import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
// import Animated, { Extrapolation, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
// import { Drawer, Header, Overlay } from '../components';
import { Colors, Fonts, Images } from '../constants';
import { products } from '../data/products';
import { everything } from '../data/everything';
import { service } from '../data/service';
import { developer } from '../data/developer';
import { Check, Fish, LifeBuoy, Sailboat, Ship } from 'lucide-react-native';

const HomeScreen = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Build Professional Websites That Grow With Your Business</Text>
          <Text style={styles.headerText1}>Choose subscription for automatic updates & AI features, or ownership for complete control. Either way, get a stunning website built for your industry.</Text>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Start Free Trial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton2}>
            <Text style={styles.headerButtonText1}>Schedule a Demo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.whyChooseContainer}>
          <Text style={styles.whyChooseText}>Tailored for Every Business Type</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20 }]}>Our platform is designed to serve businesses of all types and sizes</Text>
          {products.map((item, index) => (
            <View key={item.id} style={styles.row}>
              <Image source={item.image} resizeMode="contain" style={styles.productsImage} />
              <Text style={styles.productsName}>{item.name}</Text>
              <Text style={styles.productsDescription}>{item.description}</Text>
            </View>
          ))}
        </View>


        <View style={styles.everythingContainer}>
          <Text style={styles.whyChooseText}>Everything You Need to Succeed Online</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20 }]}>Powerful features designed to help your business grow</Text>
          {everything.map((item, index) => (
            <View key={item.id} style={styles.everythingRow}>
              <Image source={item.image} resizeMode="contain" style={[styles.productsImage, { flex: 0.5 }]} />
              <View style={{ /*borderWidth: 1,*/flex: 2 }}>
                <Text style={styles.productsName}>{item.name}</Text>
                <Text style={styles.productsDescription}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>


        <View style={styles.whyChooseContainer}>
          <Text style={styles.whyChooseText}>Why Choose GetHubService?</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20, fontSize: 18 }]}>Whether you're a solo developer, growing startup, or agency—we give you everything needed to launch and scale subscription-based web services.</Text>

          {service.map((item, index) => (
            <View key={index} style={styles.perfectContainer}>
              <Text style={styles.perfectTitle}>{item.tiltle}</Text>
              <View style={{/* borderWidth: 1,*/ paddingVertical: 10, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, /*borderWidth: 1,*/ marginLeft: 10 }}>
                  <Check color={Colors.DEFAULT_GREEN} size={30} />
                  <Text style={styles.pointText}>{item.point_1}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, /*borderWidth: 1,*/ marginLeft: 10 }}>
                  <Check color={Colors.DEFAULT_GREEN} size={30} />
                  <Text style={styles.pointText}>{item.point_2}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, /*borderWidth: 1,*/ marginLeft: 10 }}>
                  <Check color={Colors.DEFAULT_GREEN} size={30} />
                  <Text style={styles.pointText}>{item.point_3}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, /*borderWidth: 1,*/ marginLeft: 10 }}>
                  <Check color={Colors.DEFAULT_GREEN} size={30} />
                  <Text style={styles.pointText}>{item.point_4}</Text>
                </View>
              </View>
            </View>
          ))}

        </View>

        <View style={[styles.whyChooseContainer, { backgroundColor: Colors.DEFAULT_LIGHT_GREEN }]}>
          <Text style={[styles.whyChooseText, { fontSize: 22 }]}>What makes developers love us</Text>
          {developer.map((item, index) => (
            <View key={index} style={[styles.row, { backgroundColor: Colors.DEFAULT_WHITE }]}>
              <Image source={item.image} resizeMode="contain" style={styles.productsImage} />
              <Text style={styles.productsName}>{item.title}</Text>
              <Text style={styles.productsDescription}>{item.details}</Text>
            </View>
          ))}
          <Text style={[styles.whyChooseText, { fontSize: 22 }]}>Start Today – It's Free to Try</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20, fontSize: 18 }]}>No credit card required. Get your professional website live today.</Text>
          <TouchableOpacity style={[styles.headerButton, { marginHorizontal: 30 }]}>
            <Text style={[styles.headerButtonText, { textAlign: 'center', fontSize: 20 }]}>Create Your Website Now</Text>
          </TouchableOpacity>
          <Text style={[styles.whyChooseText, { fontSize: 22 }]}>Ready to Get Your Domain?</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20, fontSize: 16 }]}>Choose from our flexible domain access plans - from token-based access to premium custom domains. Find the perfect solution that grows with your business needs.</Text>
          <TouchableOpacity style={[styles.headerButton, { marginHorizontal: 30 }]}>
            <Text style={[styles.headerButtonText, { textAlign: 'center', fontSize: 20 }]}>View Domain Pricing Plans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.headerButton2, { marginHorizontal: 30 }]}>
            <Text style={[styles.headerButtonText1, { textAlign: 'center' }]}>Explore All Features</Text>
          </TouchableOpacity>


          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 15, marginVertical: 20, marginHorizontal: 30 }}>
            <TouchableOpacity style={styles.iconButton}>
              <Ship
                size={20}
                color={Colors.DEFAULT_SKY_BLUE}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Fish
                size={20}
                color={Colors.DEFAULT_SKY_BLUE}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Sailboat
                size={20}
                color={Colors.DEFAULT_SKY_BLUE}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
               <LifeBuoy
                size={20}
                color={Colors.DEFAULT_SKY_BLUE}
              />
            </TouchableOpacity>
          </View>

        </View>



        {/* <Overlay active={active} /> */}

      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE
  },
  header: {
    // flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: Colors.DEFAULT_SKY_BLUE,
    // borderRadius: 20,
    backgroundColor: Colors.DEFAULT_WHITE_2,
  },
  heading: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 38,
    lineHeight: 38 * 1.4,
    fontFamily: Fonts.POPPINS_EXTRA_BOLD,
    color: Colors.DEFAULT_SKY_BLUE,
  },
  headerText1: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 22 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_DARK_GRAY,
    marginVertical: 10
  },
  headerButton: {
    backgroundColor: Colors.DEFAULT_SKY_BLUE,
    borderRadius: 10,
    marginVertical: 10
  },
  headerButtonText: {
    fontSize: 22,
    lineHeight: 22 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_WHITE,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  headerButton2: {
    // backgroundColor: Colors.DEFAULT_WHITE_2,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1.5,
    borderColor: Colors.DEFAULT_SKY_BLUE,
  },
  headerButtonText1: {
    fontSize: 22,
    lineHeight: 22 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_SKY_BLUE,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  headerButtonText: {
    fontSize: 22,
    lineHeight: 22 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_WHITE,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  image: {
    width: 60,
    height: 60,
    // borderWidth: 1,
    // borderColor: Colors.DEFAULT_WHITE,
  },
  row: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE
  },
  button: {
    backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
    padding: 10,
  },
  logo: {
    width: '100%',
    height: 100,
  },
  whyChooseContainer: {
    // backgroundColor: Colors.DEFAULT_WHITE,
    paddingVertical: 30
  },
  whyChooseText: {
    textAlign: 'center',
    fontSize: 38,
    lineHeight: 38 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
    marginVertical: 20,
    marginHorizontal: 15,
  },
  productsImage: {
    width: 80,
    // height:100
  },
  productsName: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  productsDescription: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    textAlign: 'center',
    color: Colors.DEFAULT_DARK_GRAY,
    marginVertical: 10,
    // paddingHorizontal: 20,
  },
  everythingContainer: {
    backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
    paddingVertical: 30
  },
  everythingRow: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.DEFAULT_WHITE,
    // borderWidth:1,
    borderRadius: 20,
  },
  perfectContainer: {
    borderWidth: 2,
    borderColor: Colors.DEFAULT_GREEN,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: Colors.DEFAULT_LIGHT_GREEN
  },
  perfectTitle: {
    fontSize: 24,
    lineHeight: 24 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    padding: 10,
    color: Colors.DEFAULT_GREEN,
  },
  pointText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    padding: 10
  },
  iconButton: {
    // backgroundColor: Colors.DEFAULT_SKY_BLUE,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_SKY_BLUE,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  }
})