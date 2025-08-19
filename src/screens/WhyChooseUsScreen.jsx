import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import { whyChooseUsData_1, whyChooseUsData_2 } from '../data/whyChooseUsData'
import { ArrowRight, Fish, LifeBuoy, Sailboat, Ship } from 'lucide-react-native'

const WhyChooseUsScreen = () => {
  return (
    <>
      <ScrollView>

        <View style={styles.header}>
          <Text style={styles.headerText}>GetHubService?</Text>
          <Text style={styles.headerText1}>Choose your perfect model: subscription for automatic updates and AI features, or ownership for complete control. Either way, you get professional results.</Text>
        </View>

        <View style={[styles.header, { backgroundColor: Colors.DEFAULT_LIGHT_RED }]}>
          <Text style={[styles.headerText, { color: Colors.DEFAULT_DARK_RED }]}>Tired of These Limitations?</Text>

          {whyChooseUsData_1.map((item, index) => (
            <View key={index} style={{ /*borderWidth: 1,*/ paddingVertical: 10, paddingHorizontal: 10, /*marginHorizontal: 20*/ }}>
              <View style={{ backgroundColor: Colors.DEFAULT_LIGHT_RED_2, borderRadius: 20, flexDirection: 'row', alignItems: 'center', gap: 10,/* borderWidth: 1, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginHorizontal: 10, marginVertical: 10, padding: 10, }}>
                {item.icon && <item.icon size={22} color={Colors.DEFAULT_DARK_RED} />}
                <Text style={[styles.pointText, { marginRight: 10 }]}>{item.point_1}</Text>
              </View>
              <View style={{ backgroundColor: Colors.DEFAULT_LIGHT_RED_2, borderRadius: 22, flexDirection: 'row', alignItems: 'center', gap: 10,/* borderWidth: 1, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginHorizontal: 10, marginVertical: 10, padding: 10, }}>
                {item.icon && <item.icon size={22} color={Colors.DEFAULT_DARK_RED} />}
                <Text style={[styles.pointText, { marginRight: 10 }]}>{item.point_2}</Text>
              </View>
              <View style={{ backgroundColor: Colors.DEFAULT_LIGHT_RED_2, borderRadius: 22, flexDirection: 'row', alignItems: 'center', gap: 10,/* borderWidth: 1, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginHorizontal: 10, marginVertical: 10, padding: 10, }}>
                {item.icon && <item.icon size={22} color={Colors.DEFAULT_DARK_RED} />}
                <Text style={[styles.pointText, { marginRight: 10 }]}>{item.point_3}</Text>
              </View>
              <View style={{ backgroundColor: Colors.DEFAULT_LIGHT_RED_2, borderRadius: 22, flexDirection: 'row', alignItems: 'center', gap: 10,/* borderWidth: 1, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginHorizontal: 10, marginVertical: 10, padding: 10, }}>
                {item.icon && <item.icon size={22} color={Colors.DEFAULT_DARK_RED} />}
                <Text style={[styles.pointText, { marginRight: 10 }]}>{item.point_4}</Text>
              </View>
              <View style={{ backgroundColor: Colors.DEFAULT_LIGHT_RED_2, borderRadius: 22, flexDirection: 'row', alignItems: 'center', gap: 10,/* borderWidth: 1, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginHorizontal: 10, marginVertical: 10, padding: 10, }}>
                {item.icon && <item.icon size={22} color={Colors.DEFAULT_DARK_RED} />}
                <Text style={[styles.pointText, { marginRight: 10 }]}>{item.point_5}</Text>
              </View>
              <View style={{ backgroundColor: Colors.DEFAULT_LIGHT_RED_2, borderRadius: 22, flexDirection: 'row', alignItems: 'center', gap: 10,/* borderWidth: 1, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginHorizontal: 10, marginVertical: 10, padding: 10, }}>
                {item.icon && <item.icon size={22} color={Colors.DEFAULT_DARK_RED} />}
                <Text style={[styles.pointText, { marginRight: 10 }]}>{item.point_6}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={[styles.header]}>
          <Text style={[styles.headerText, { color: Colors.DEFAULT_GREEN }]}>Here's the Solution</Text>
          <Text style={[styles.headerText1, { fontSize: 18, }]}>GetHubService eliminates these frustrations with flexible options that put you in control of how you want to build and manage your website.</Text>

          {whyChooseUsData_2.map((item, index) => (
            <View key={index} style={styles.solutionContainer}>
              <Image source={item.image} resizeMode="contain" style={styles.productsImage} />
              <View style={{ padding: 5,/*borderWidth:1,*/marginRight: 10 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.pointContainer}>
                  {item.icon && <item.icon size={22} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_1}</Text>
                </View>
                <View style={styles.pointContainer}>
                  {item.icon && <item.icon size={22} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_2}</Text>
                </View>
                <View style={styles.pointContainer}>
                  {item.icon && <item.icon size={22} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_3}</Text>
                </View>
                <View style={styles.pointContainer}>
                  {item.icon && <item.icon size={22} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_4}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={[styles.header, { backgroundColor: Colors.DEFAULT_LIGHT_YELLOW }]}>
          <Text style={[styles.headerText, { fontSize: 32, color: Colors.DEFAULT_BLACK }]}>Related Pages</Text>
          <Text style={[styles.headerText1, { color: Colors.DEFAULT_DARK_GRAY, fontSize: 20 }]}>Explore more resources to help you succeed online</Text>


          <View style={{/*borderWidth:1*/ }}>
            <TouchableOpacity style={styles.relatedContainer} activeOpacity={0.8}>
              <View style={styles.iconContainer}>
                <ArrowRight size={30} color={Colors.DEFAULT_GREEN} />
              </View>
              <View>
                <Text style={styles.relatedText1}>View Pricing</Text>
                <Text style={styles.relatedText2}>See what's included in each plan</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.relatedContainer} activeOpacity={0.8}>
              <View style={styles.iconContainer}>
                <ArrowRight size={30} color={Colors.DEFAULT_GREEN} />
              </View>
              <View>
                <Text style={styles.relatedText1}>Read Success Stories</Text>
                <Text style={styles.relatedText2}>Learn from other businesses</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.relatedContainer} activeOpacity={0.8}>
              <View style={styles.iconContainer}>
                <ArrowRight size={30} color={Colors.DEFAULT_GREEN} />
              </View>
              <View>
                <Text style={styles.relatedText1}>Get Started</Text>
                <Text style={styles.relatedText2}>Build your website today</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        <Text style={styles.socialMediaText}>social media</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 15, marginVertical: 10, marginHorizontal: 30 }}>
          <TouchableOpacity style={styles.iconButton}>
            <Ship
              size={20}
              color={Colors.DEFAULT_SKY_BLUE}
            />
            {/* <Image source={Images.INSTAGRAM} resizeMode="contain" style={styles.socialMediaImages}/> */}
            {/* <INSTAGRAM width={25} height={25} fill={Colors.DEFAULT_SKY_BLUE} /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Fish
              size={20}
              color={Colors.DEFAULT_SKY_BLUE}
            />
            {/* <INSTAGRAM width={30} height={30} fill={Colors.DEFAULT_SKY_BLUE}/> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Sailboat
              size={20}
              color={Colors.DEFAULT_SKY_BLUE}
            />
            {/* <INSTAGRAM width={30} height={30} fill={Colors.DEFAULT_SKY_BLUE}/> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <LifeBuoy
              size={20}
              color={Colors.DEFAULT_SKY_BLUE}
            />
            {/* <INSTAGRAM width={30} height={30} fill={Colors.DEFAULT_SKY_BLUE}/> */}
          </TouchableOpacity>
        </View>


      </ScrollView>
    </>
  )
}

export default WhyChooseUsScreen

const styles = StyleSheet.create({
  header: {
    // flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    // marginBottom: 10,
    // borderWidth: 1,
    // borderColor: Colors.DEFAULT_SKY_BLUE,
    // borderRadius: 20,
    backgroundColor: Colors.DEFAULT_LIGHT_GREEN_2,
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
  pointText: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    padding: 10
  },
  productsImage: {
    width: 50,
    height: 60,
  },
  solutionContainer: {
    borderWidth: 1,
    paddingVertical: 25,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderColor: Colors.DEFAULT_GREEN,
    borderRadius: 20
  },
  title: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_GREEN
  },
  description: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_REGULAR,
    padding: 5,
    color: Colors.DEFAULT_DARK_GRAY
  },
  pointContainer: {
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 5,
    marginTop: 10
  },
  pointText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    fontFamily: Fonts.POPPINS_REGULAR
  },
  relatedContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 10,
    borderRadius: 12,
    flexDirection: 'row',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: Colors.DEFAULT_WHITE_2,
    borderRadius: 12,
    padding: 10,
    // borderWidth: 1,
    height: 50,
  },
  relatedText1: {
    fontSize: 22,
    lineHeight: 22 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  relatedText2: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_DARK_GRAY,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
    socialMediaText: {
    fontSize: 30,
    lineHeight: 30 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_DARK_GRAY,
    paddingHorizontal: 30,
    paddingVertical: 10,
    textTransform: 'uppercase'
  },
    iconButton: {
    // backgroundColor: Colors.DEFAULT_SKY_BLUE,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_SKY_BLUE,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom:10
  },
  
})