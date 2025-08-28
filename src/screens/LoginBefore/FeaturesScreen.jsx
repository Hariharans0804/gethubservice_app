import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../constants'
import { ArrowRight, Fish, LifeBuoy, Sailboat, Ship } from 'lucide-react-native'
import { features_1, features_2, features_3 } from '../../data/features'

const FeaturesScreen = () => {
  return (
    <>
      <ScrollView>

        <View style={styles.header}>
          <Text style={styles.headerText}>Complete Website Solution</Text>
          <Text style={styles.headerText1}>Everything you need to create, launch, and grow your business online - from design tools to AI features, subscription management to e-commerce</Text>

          <View style={{ /*borderWidth: 1,*/marginVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>24+ Core Features</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>AI-Powered</Text>
            </TouchableOpacity>
          </View>

          <View style={{ /*borderWidth: 1,*/marginVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>No Code Required</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Developer Friendly</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.whyChooseContainer, { backgroundColor: Colors.DEFAULT_LIGHT_GRAY }]}>
          <Text style={styles.whyChooseText}>All Features</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20 }]}>Detailed breakdown of every feature available on our platform</Text>
          {features_1.map((item, index) => (
            <View key={item.id} style={[styles.row, { backgroundColor: Colors.DEFAULT_WHITE }]}>
              <Image source={item.image} resizeMode="contain" style={styles.productsImage} />
              <Text style={[styles.productsName, { textAlign: 'center' }]}>{item.title}</Text>
              <Text style={styles.productsDescription}>{item.description}</Text>

              <View style={{/*borderWidth:1,*/marginHorizontal: 30, paddingHorizontal: 10, paddingVertical: 10, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_DARK_RED} />}
                  <Text style={styles.pointText}>{item.point_1}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_DARK_RED} />}
                  <Text style={styles.pointText}>{item.point_2}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_DARK_RED} />}
                  <Text style={styles.pointText}>{item.point_3}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_DARK_RED} />}
                  <Text style={styles.pointText}>{item.point_4}</Text>
                </View>
              </View>

            </View>
          ))}
        </View>

        <View style={styles.whyChooseContainer}>
          <Text style={styles.whyChooseText}>Feature Availability by Model</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20, fontSize: 18 }]}>See which features are available in each model to help you choose the best option for your business</Text>

          {features_2.map((item, index) => (
            <View key={index} style={[styles.perfectContainer, { backgroundColor: Colors.DEFAULT_LIGHT_BLUE, borderColor: Colors.DEFAULT_SKY_BLUE }]}>
              {/* <Image source={item.image} resizeMode="contain" style={styles.productsImage} /> */}
              <Text style={[styles.perfectTitle, { color: Colors.DEFAULT_SKY_BLUE }]}>{item.tiltle}</Text>
              <Text style={styles.productsDescription}>{item.description}</Text>

              <View style={{ /*borderWidth: 1,*/ paddingVertical: 10, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_SKY_BLUE} />}
                  <Text style={styles.pointText}>{item.point_1}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_SKY_BLUE} />}
                  <Text style={styles.pointText}>{item.point_2}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_SKY_BLUE} />}
                  <Text style={styles.pointText}>{item.point_3}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_SKY_BLUE} />}
                  <Text style={styles.pointText}>{item.point_4}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_SKY_BLUE} />}
                  <Text style={styles.pointText}>{item.point_5}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_SKY_BLUE} />}
                  <Text style={styles.pointText}>{item.point_6}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_SKY_BLUE} />}
                  <Text style={styles.pointText}>{item.point_7}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_SKY_BLUE} />}
                  <Text style={styles.pointText}>{item.point_8}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_SKY_BLUE} />}
                  <Text style={styles.pointText}>{item.point_9}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_SKY_BLUE} />}
                  <Text style={styles.pointText}>{item.point_10}</Text>
                </View>

                <Text style={styles.bestForText}><Text style={{ fontFamily: Fonts.POPPINS_SEMI_BOLD }}>Best for : </Text>{item.details}</Text>
              </View>

            </View>
          ))}
          {features_3.map((item, index) => (
            <View key={index} style={[styles.perfectContainer,]}>
              {/* <Image source={item.image} resizeMode="contain" style={styles.productsImage} /> */}
              <Text style={[styles.perfectTitle,]}>{item.tiltle}</Text>
              <Text style={styles.productsDescription}>{item.description}</Text>

              <View style={{ /*borderWidth: 1,*/ paddingVertical: 10, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_1}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_2}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_3}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_4}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_5}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_6}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_7}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_8}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_9}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_10}</Text>
                </View>

                <Text style={[styles.bestForText, { backgroundColor: Colors.DEFAULT_LIGHT_GREEN_2 }]}><Text style={{ fontFamily: Fonts.POPPINS_SEMI_BOLD }}>Best for : </Text>{item.details}</Text>
              </View>

            </View>
          ))}

          <Text style={{ marginHorizontal: 20, fontSize: 18, lineHeight: 18 * 1.4, fontFamily: Fonts.POPPINS_SEMI_BOLD, textAlign: 'center', marginTop: 5 }}>Not sure which model to choose?
            <Text style={{ fontSize: 18, lineHeight: 18 * 1.4, fontFamily: Fonts.POPPINS_REGULAR, textAlign: 'center' }}> Start with our free trial and experience both options!</Text>
          </Text>

          <TouchableOpacity style={[styles.headerButton, { marginHorizontal: 30 }]}>
            <Text style={[styles.headerButtonText, { textAlign: 'center', fontSize: 20 }]}>Start Free Trial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.headerButton, { marginHorizontal: 30 }]}>
            <Text style={[styles.headerButtonText, { textAlign: 'center', fontSize: 20 }]}>Compare Models</Text>
          </TouchableOpacity>

        </View>

        <View style={[styles.whyChooseContainer, { backgroundColor: Colors.DEFAULT_LIGHT_GREEN }]}>
          <Text style={styles.whyChooseText}>Ready to Get Started?</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20, fontSize: 18 }]}>Choose from our flexible pricing plans or try our platform with a free trial. All plans include access to the features you've seen above.</Text>

          <TouchableOpacity style={[styles.headerButton, { marginHorizontal: 30 }]}>
            <Text style={[styles.headerButtonText, { textAlign: 'center', fontSize: 20 }]}>View Pricing Plans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.headerButton, { marginHorizontal: 30 }]}>
            <Text style={[styles.headerButtonText, { textAlign: 'center', fontSize: 20 }]}>Start Free Trial</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
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

export default FeaturesScreen

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
  button: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.DEFAULT_WHITE,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  whyChooseContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
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
  row: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
    borderRadius: 20,
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
  pointText: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    padding: 10
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
    textAlign: 'center'
  },
  pointText: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    padding: 10
  },
  bestForText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    fontFamily: Fonts.POPPINS_REGULAR,
    backgroundColor: Colors.DEFAULT_LIGHT_BLUE_2,
    padding: 10,
    borderRadius: 10,
    marginTop: 10
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
  iconButton: {
    // backgroundColor: Colors.DEFAULT_SKY_BLUE,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_SKY_BLUE,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
        marginBottom:10
  },
  socialMediaText: {
    fontSize: 30,
    lineHeight: 30 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_DARK_GRAY,
    paddingHorizontal: 30,
    paddingVertical: 10,
    textTransform: 'uppercase'
  }
})