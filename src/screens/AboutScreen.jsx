import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import { aboutService_1, aboutService_2, aboutService_3 } from '../data/aboutService'
import { ArrowRight, Fish, LifeBuoy, Sailboat, Ship } from 'lucide-react-native'

const AboutScreen = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>About GetHub Service</Text>
          <Text style={styles.headerText1}>The world's most flexible website platform. Choose your perfect fit: subscription services for automatic updates and AI-powered features, or complete ownership with full control and customization freedom. Your business, your choice.</Text>
        </View>

        <View style={styles.whyChooseContainer}>
          <Text style={styles.whyChooseText}>Is GetHubService Right for You?</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20, fontSize: 18 }]}>Find out if our platform matches your business needs and development style.</Text>

          {aboutService_1.map((item, index) => (
            <View key={index} style={styles.perfectContainer}>
              <Text style={styles.perfectTitle}>{item.tiltle}</Text>
              <View style={{ /*borderWidth: 1,*/ paddingVertical: 10, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_1}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10,/* paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_2}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10,/* paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_3}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10,/* paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_4}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10,/* paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_5}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10,/* paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_6}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10,/* paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_GREEN} />}
                  <Text style={styles.pointText}>{item.point_7}</Text>
                </View>
              </View>
            </View>
          ))}

          {aboutService_2.map((item, index) => (
            <View key={index} style={[styles.perfectContainer, { backgroundColor: Colors.DEFAULT_LIGHT_RED, borderColor: Colors.DEFAULT_DARK_RED }]}>
              <Text style={[styles.perfectTitle, { color: Colors.DEFAULT_DARK_RED }]}>{item.tiltle}</Text>

              <View style={{ /*borderWidth: 1,*/ paddingVertical: 10, paddingHorizontal: 10 }}>
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
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10, /*paddingHorizontal: 10,*/ /*borderWidth: 1,*/ marginLeft: 10 }}>
                  {item.icon && <item.icon size={25} color={Colors.DEFAULT_DARK_RED} />}
                  <Text style={styles.pointText}>{item.point_5}</Text>
                </View>
              </View>

            </View>
          ))}
        </View>

        <View style={[styles.whyChooseContainer, { backgroundColor: Colors.DEFAULT_LIGHT_GRAY }]}>
          <Text style={styles.whyChooseText}>Why developers & agencies love GetHubService</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20 }]}>Built by developers, for developers. Here's what makes us different.</Text>
          {aboutService_3.map((item, index) => (
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

        <View style={styles.header}>
          <Text style={[styles.headerText, { fontSize: 30 }]}>Two models. Infinite possibilities. Your choice.</Text>
          <Text style={[styles.headerText1, { color: Colors.DEFAULT_BLUE, fontSize: 20 }]}>Whether you prefer subscription convenience with automatic updates and AI features, or complete ownership with full control—GetHubService gives you the freedom to choose what works best for your business.</Text>
          <Text style={[styles.headerText1, { fontSize: 18 }]}>We believe great businesses deserve great websites that grow with them. Our platform adapts to your needs, whether you're a startup seeking rapid deployment or an enterprise requiring complete customization control.</Text>

          <TouchableOpacity style={[styles.headerButton, { marginHorizontal: 30 }]}>
            <Text style={[styles.headerButtonText, { textAlign: 'center', fontSize: 20 }]}>Get Started Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.headerButton, { marginHorizontal: 30 }]}>
            <Text style={[styles.headerButtonText, { textAlign: 'center', fontSize: 20 }]}>Schedule a Demo</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.whyChooseContainer}>
          <Text style={styles.whyChooseText}>Built for Scale</Text>
          <Text style={[styles.headerText1, { marginHorizontal: 20, fontSize: 18 }]}>Trusted by developers and agencies worldwide</Text>

          <View>
            <View style={styles.scaleContainer}>
              <Text style={styles.numberText1}>10K+</Text>
              <Text style={styles.numberText2}>Websites Deployed</Text>
            </View>
            <View style={styles.scaleContainer}>
              <Text style={styles.numberText1}>99.9%+</Text>
              <Text style={styles.numberText2}>Uptime SLA</Text>
            </View>
            <View style={styles.scaleContainer}>
              <Text style={styles.numberText1}>50+</Text>
              <Text style={styles.numberText2}>Integrations</Text>
            </View>
            <View style={styles.scaleContainer}>
              <Text style={styles.numberText1}>24/7</Text>
              <Text style={styles.numberText2}>Support</Text>
            </View>
          </View>

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
                <Text style={styles.relatedText1}>Why Choose US</Text>
                <Text style={styles.relatedText2}>See what makes us different</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.relatedContainer} activeOpacity={0.8}>
              <View style={styles.iconContainer}>
                <ArrowRight size={30} color={Colors.DEFAULT_GREEN} />
              </View>
              <View>
                <Text style={styles.relatedText1}>Get in Touch</Text>
                <Text style={styles.relatedText2}>Let's discuss your project</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.relatedContainer} activeOpacity={0.8}>
              <View style={styles.iconContainer}>
                <ArrowRight size={30} color={Colors.DEFAULT_GREEN} />
              </View>
              <View>
                <Text style={styles.relatedText1}>View Our Work</Text>
                <Text style={styles.relatedText2}>See examples of our websites</Text>
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

export default AboutScreen

const styles = StyleSheet.create({
  header: {
    // flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
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
  scaleContainer: {
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10
  },
  numberText1: {
    fontSize: 40,
    lineHeight: 40 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_SKY_BLUE,
    padding: 10
  },
  numberText2: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
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
  },
  socialMediaImages: {
    width: 25,
    height: 25,
    color: Colors.DEFAULT_SKY_BLUE,
  },
  socialMediaText: {
    fontSize: 30,
    lineHeight: 30 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_DARK_GRAY,
    paddingHorizontal:30,
    paddingVertical: 10,
    textTransform:'uppercase'
  }
})