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
      <View style={styles.View_212_721}>
        <View style={styles.View_212_722} />
        <View style={styles.View_212_723} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1198/c254/826bfc2ec5840a7be1b3aca1b37a87cb"
        }}
        style={styles.ImageBackground_212_724}
      />
      <View style={styles.View_212_725}>
        <Text style={styles.Text_212_725}>Journal </Text>
      </View>
      <View style={styles.View_212_729}>
        <View style={styles.View_I212_729_4_8}>
          <Text style={styles.Text_I212_729_4_8}>8:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa9/f0e0/c3fa807b8987f6c1b134c1330e1d513c"
          }}
          style={styles.ImageBackground_I212_729_4_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b0/1ce6/c7083716a66421e582abe435a653dfa9"
          }}
          style={styles.ImageBackground_I212_729_4_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903c/7b9c/e847672213bb5b3015233d413cbdb46e"
          }}
          style={styles.ImageBackground_I212_729_4_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf5/0afc/05b04d4a4e8937e2a3807cd48b42fc8f"
        }}
        style={styles.ImageBackground_212_730}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccb8/38b0/4d74f87ab6355068fb3fd3e2d566d1e4"
        }}
        style={styles.ImageBackground_212_731}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_212_732}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_212_733}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e4e/24c4/a4acf2d202289fa23b5870edb2e27f39"
        }}
        style={styles.ImageBackground_212_735}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a423/37da/57b49c0678237841fc837ba6179f545c"
        }}
        style={styles.ImageBackground_212_736}
      />
      <View style={styles.View_212_737} />
      <View style={styles.View_212_738} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_212_742}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad0/b4dc/f253b2fab38ac0ce2a1136a5b3ba9ee4"
        }}
        style={styles.ImageBackground_212_743}
      />
      <View style={styles.View_212_748} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eac/b9a9/cb6dfc8bd170ff3e1437a90e0a86ec24"
        }}
        style={styles.ImageBackground_212_749}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c210/6dc3/c7cdcd5e8cefd742814d8334e3e0a8ed"
        }}
        style={styles.ImageBackground_212_752}
      />
      <View style={styles.View_212_754}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b942/01fa/9be5b9f97caacefb4d12ad95a5564774"
          }}
          style={styles.ImageBackground_212_755}
        />
      </View>
      <View style={styles.View_212_757}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/912e/9c75e931c1cfce8bd9969e0358da0ba9"
          }}
          style={styles.ImageBackground_212_758}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_212_762} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_212_784}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_212_788}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_212_789}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_212_790}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_212_791}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_212_792}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f8/b3d9/5c2b353e24e1e8c6c74aa4493db71ea8"
        }}
        style={styles.ImageBackground_212_793}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f8/b3d9/5c2b353e24e1e8c6c74aa4493db71ea8"
        }}
        style={styles.ImageBackground_212_795}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f8/b3d9/5c2b353e24e1e8c6c74aa4493db71ea8"
        }}
        style={styles.ImageBackground_212_797}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f8/b3d9/5c2b353e24e1e8c6c74aa4493db71ea8"
        }}
        style={styles.ImageBackground_212_799}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f8/b3d9/5c2b353e24e1e8c6c74aa4493db71ea8"
        }}
        style={styles.ImageBackground_212_801}
      />
      <View style={styles.View_212_805}>
        <Text style={styles.Text_212_805}>Edit</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_212_721: {
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
  View_212_722: {
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
  View_212_723: {
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
  ImageBackground_212_724: {
    width: 3024,
    minWidth: 3024,
    height: 4032,
    minHeight: 4032,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1539,
    top: -1723,
    resizeMode: "cover"
  },
  View_212_725: {
    width: 78,
    minWidth: 78,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 239
  },
  Text_212_725: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_729: {
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
  View_I212_729_4_8: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I212_729_4_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I212_729_4_3: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    top: 0
  },
  ImageBackground_I212_729_4_5: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291.622314453125,
    top: 0
  },
  ImageBackground_I212_729_4_7: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.5556640625,
    top: 0
  },
  ImageBackground_212_730: {
    width: 166,
    height: 199,
    top: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -75
  },
  ImageBackground_212_731: {
    width: 40,
    height: 40,
    top: 691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224
  },
  ImageBackground_212_732: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82
  },
  ImageBackground_212_733: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: -21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -46
  },
  ImageBackground_212_735: {
    width: 35,
    height: 35,
    top: 533,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228
  },
  ImageBackground_212_736: {
    width: 106,
    height: 114,
    top: 750,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -45
  },
  View_212_737: {
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
  View_212_738: {
    width: 307.066650390625,
    minWidth: 307.066650390625,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.966552734375,
    top: 765,
    backgroundColor: "rgba(240, 244, 251, 1)",
    opacity: 0
  },
  ImageBackground_212_742: {
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
  ImageBackground_212_743: {
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
  View_212_748: {
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
  ImageBackground_212_749: {
    width: 25,
    height: 25,
    top: 771,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297
  },
  ImageBackground_212_752: {
    width: 25,
    height: 25,
    top: 772,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49
  },
  View_212_754: {
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
  ImageBackground_212_755: {
    width: 21.666667938232422,
    height: 21.6683349609375,
    top: 1.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.666748046875
  },
  View_212_757: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 101,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_758: {
    width: 20.00223159790039,
    height: 17.50381088256836,
    top: 11.247772216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.997802734375
  },
  View_212_762: {
    width: 352,
    minWidth: 352,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 385
  },
  ImageBackground_212_784: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 313
  },
  ImageBackground_212_788: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 381
  },
  ImageBackground_212_789: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 442
  },
  ImageBackground_212_790: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 511
  },
  ImageBackground_212_791: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 576
  },
  ImageBackground_212_792: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 646
  },
  ImageBackground_212_793: {
    width: 20,
    height: 20,
    top: 340,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_212_795: {
    width: 20,
    height: 20,
    top: 403,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_212_797: {
    width: 20,
    height: 20,
    top: 469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_212_799: {
    width: 20,
    height: 20,
    top: 533,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_212_801: {
    width: 20,
    height: 20,
    top: 600,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  View_212_805: {
    width: 31,
    minWidth: 31,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 112
  },
  Text_212_805: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
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
