import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_212_1751}>
        <View style={styles.View_212_1752} />
        <View style={styles.View_212_1753} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1198/c254/826bfc2ec5840a7be1b3aca1b37a87cb"
        }}
        style={styles.ImageBackground_212_1754}
      />
      <View style={styles.View_212_1755}>
        <View style={styles.View_I212_1755_4_8}>
          <Text style={styles.Text_I212_1755_4_8}>8:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa9/f0e0/c3fa807b8987f6c1b134c1330e1d513c"
          }}
          style={styles.ImageBackground_I212_1755_4_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b0/1ce6/c7083716a66421e582abe435a653dfa9"
          }}
          style={styles.ImageBackground_I212_1755_4_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903c/7b9c/e847672213bb5b3015233d413cbdb46e"
          }}
          style={styles.ImageBackground_I212_1755_4_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccb8/38b0/4d74f87ab6355068fb3fd3e2d566d1e4"
        }}
        style={styles.ImageBackground_212_1756}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_212_1757}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e4e/24c4/a4acf2d202289fa23b5870edb2e27f39"
        }}
        style={styles.ImageBackground_212_1758}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a423/37da/57b49c0678237841fc837ba6179f545c"
        }}
        style={styles.ImageBackground_212_1759}
      />
      <View style={styles.View_212_1760} />
      <View style={styles.View_212_1761} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_212_1762}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad0/b4dc/f253b2fab38ac0ce2a1136a5b3ba9ee4"
        }}
        style={styles.ImageBackground_212_1763}
      />
      <View style={styles.View_212_1768} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eac/b9a9/cb6dfc8bd170ff3e1437a90e0a86ec24"
        }}
        style={styles.ImageBackground_212_1769}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c210/6dc3/c7cdcd5e8cefd742814d8334e3e0a8ed"
        }}
        style={styles.ImageBackground_212_1772}
      />
      <View style={styles.View_212_1774}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b942/01fa/9be5b9f97caacefb4d12ad95a5564774"
          }}
          style={styles.ImageBackground_212_1775}
        />
      </View>
      <View style={styles.View_212_2135}>
        <Text style={styles.Text_212_2135}>For you...</Text>
      </View>
      <View style={styles.View_212_2383}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/912e/9c75e931c1cfce8bd9969e0358da0ba9"
          }}
          style={styles.ImageBackground_212_2384}
        />
      </View>
      <View style={styles.View_212_2497}>
        <View style={styles.View_212_2498}>
          <Text style={styles.Text_212_2498}>You made great memories</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c485/c363/27d21b733e3b2b819e131f22587d0ecc"
        }}
        style={styles.ImageBackground_212_2499}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/171c/fd31/26de92fcc5a716b5dfa2699d583f54c6"
        }}
        style={styles.ImageBackground_212_2500}
      />
      <View style={styles.View_212_2510}>
        <View style={styles.View_212_2511}>
          <Text style={styles.Text_212_2511}>Oregon Sept 25, 2020</Text>
        </View>
      </View>
      <View style={styles.View_212_2512}>
        <View style={styles.View_212_2513}>
          <Text style={styles.Text_212_2513}>New York May 10, 2021</Text>
        </View>
      </View>
      <View style={styles.View_212_2501}>
        <Text style={styles.Text_212_2501}>See All</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8269/4861/9cc28f523692d487271b0e11af8edf66"
        }}
        style={styles.ImageBackground_212_2502}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8269/4861/9cc28f523692d487271b0e11af8edf66"
        }}
        style={styles.ImageBackground_212_2505}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_212_1751: {
    width: 15.155555725097656,
    minWidth: 15.155555725097656,
    height: 16.53333282470703,
    minHeight: 16.53333282470703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 272,
    top: 52.4666748046875,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_212_1752: {
    width: 15.155555725097656,
    minWidth: 15.155555725097656,
    height: 16.53333282470703,
    minHeight: 16.53333282470703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_212_1753: {
    width: 15.155555725097656,
    minWidth: 15.155555725097656,
    height: 16.53333282470703,
    minHeight: 16.53333282470703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_1754: {
    width: 3024,
    minWidth: 3024,
    height: 4032,
    minHeight: 4032,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1420,
    top: -1687,
    resizeMode: "cover"
  },
  View_212_1755: {
    width: 340.5555725097656,
    minWidth: 340.5555725097656,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 23,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I212_1755_4_8: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I212_1755_4_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I212_1755_4_3: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    top: 0
  },
  ImageBackground_I212_1755_4_5: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291.622314453125,
    top: 0
  },
  ImageBackground_I212_1755_4_7: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.5556640625,
    top: 0
  },
  ImageBackground_212_1756: {
    width: 40,
    height: 40,
    top: 691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224
  },
  ImageBackground_212_1757: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: -21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -46
  },
  ImageBackground_212_1758: {
    width: 35,
    height: 35,
    top: 533,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228
  },
  ImageBackground_212_1759: {
    width: 106,
    height: 114,
    top: 750,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -45
  },
  View_212_1760: {
    width: 182,
    minWidth: 182,
    height: 148,
    minHeight: 148,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 239
  },
  View_212_1761: {
    width: 307.066650390625,
    minWidth: 307.066650390625,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.9666748046875,
    top: 765,
    backgroundColor: "rgba(240, 244, 251, 1)",
    opacity: 0
  },
  ImageBackground_212_1762: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 759
  },
  ImageBackground_212_1763: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337,
    top: 771
  },
  View_212_1768: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 237,
    top: 714,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_1769: {
    width: 25,
    height: 25,
    top: 771,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297
  },
  ImageBackground_212_1772: {
    width: 25,
    height: 25,
    top: 772,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49
  },
  View_212_1774: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 772,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_1775: {
    width: 21.666667938232422,
    height: 21.6683349609375,
    top: 1.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.6666259765625
  },
  View_212_2135: {
    width: 128,
    minWidth: 128,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 174
  },
  Text_212_2135: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_2383: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_2384: {
    width: 20.00223159790039,
    height: 17.50381088256836,
    top: 11.247772216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.997802734375
  },
  View_212_2497: {
    width: 280,
    minWidth: 280,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 225,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_212_2498: {
    width: 260,
    minWidth: 260,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10
  },
  Text_212_2498: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_212_2499: {
    width: 320,
    minWidth: 320,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 305
  },
  ImageBackground_212_2500: {
    width: 320,
    minWidth: 320,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 518
  },
  View_212_2510: {
    width: 280,
    minWidth: 280,
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 412,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_212_2511: {
    width: 260,
    minWidth: 260,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10
  },
  Text_212_2511: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_2512: {
    width: 280,
    minWidth: 280,
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 621,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_212_2513: {
    width: 260,
    minWidth: 260,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10
  },
  Text_212_2513: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_2501: {
    width: 54,
    minWidth: 54,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309,
    top: 79
  },
  Text_212_2501: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_212_2502: {
    width: 35,
    height: 35,
    top: 311,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300
  },
  ImageBackground_212_2505: {
    width: 35,
    height: 35,
    top: 527,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
