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
      <View style={styles.View_209_143}>
        <View style={styles.View_209_144} />
        <View style={styles.View_209_145} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1198/c254/826bfc2ec5840a7be1b3aca1b37a87cb"
        }}
        style={styles.ImageBackground_209_146}
      />
      <View style={styles.View_209_148}>
        <Text style={styles.Text_209_148}>Account</Text>
      </View>
      <View style={styles.View_209_255}>
        <Text style={styles.Text_209_255}>Done</Text>
      </View>
      <View style={styles.View_209_247}>
        <Text style={styles.Text_209_247}>Gender</Text>
      </View>
      <View style={styles.View_209_154}>
        <View style={styles.View_I209_154_4_8}>
          <Text style={styles.Text_I209_154_4_8}>8:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa9/f0e0/c3fa807b8987f6c1b134c1330e1d513c"
          }}
          style={styles.ImageBackground_I209_154_4_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b0/1ce6/c7083716a66421e582abe435a653dfa9"
          }}
          style={styles.ImageBackground_I209_154_4_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903c/7b9c/e847672213bb5b3015233d413cbdb46e"
          }}
          style={styles.ImageBackground_I209_154_4_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf5/0afc/05b04d4a4e8937e2a3807cd48b42fc8f"
        }}
        style={styles.ImageBackground_209_155}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccb8/38b0/4d74f87ab6355068fb3fd3e2d566d1e4"
        }}
        style={styles.ImageBackground_209_156}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_209_157}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_209_158}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e4e/24c4/a4acf2d202289fa23b5870edb2e27f39"
        }}
        style={styles.ImageBackground_209_160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a423/37da/57b49c0678237841fc837ba6179f545c"
        }}
        style={styles.ImageBackground_209_161}
      />
      <View style={styles.View_209_162} />
      <View style={styles.View_209_163} />
      <View style={styles.View_209_245}>
        <Text style={styles.Text_209_245}>Name</Text>
      </View>
      <View style={styles.View_209_251}>
        <Text style={styles.Text_209_251}>Email</Text>
      </View>
      <View style={styles.View_209_252}>
        <Text style={styles.Text_209_252}>Password</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_209_164}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad0/b4dc/f253b2fab38ac0ce2a1136a5b3ba9ee4"
        }}
        style={styles.ImageBackground_209_165}
      />
      <View style={styles.View_209_170} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eac/b9a9/cb6dfc8bd170ff3e1437a90e0a86ec24"
        }}
        style={styles.ImageBackground_209_171}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c210/6dc3/c7cdcd5e8cefd742814d8334e3e0a8ed"
        }}
        style={styles.ImageBackground_209_174}
      />
      <View style={styles.View_209_176}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b942/01fa/9be5b9f97caacefb4d12ad95a5564774"
          }}
          style={styles.ImageBackground_209_177}
        />
      </View>
      <View style={styles.View_209_179}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/912e/9c75e931c1cfce8bd9969e0358da0ba9"
          }}
          style={styles.ImageBackground_209_180}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71c4/3864/73540d4b06eda61d7e213256fda28aef"
        }}
        style={styles.ImageBackground_209_241}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71c4/3864/73540d4b06eda61d7e213256fda28aef"
        }}
        style={styles.ImageBackground_209_248}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71c4/3864/73540d4b06eda61d7e213256fda28aef"
        }}
        style={styles.ImageBackground_209_249}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71c4/3864/73540d4b06eda61d7e213256fda28aef"
        }}
        style={styles.ImageBackground_209_254}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71c4/3864/73540d4b06eda61d7e213256fda28aef"
        }}
        style={styles.ImageBackground_224_614}
      />
      <View style={styles.View_225_1}>
        <Text style={styles.Text_225_1}>Date of birth</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_209_143: {
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
  View_209_144: {
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
  View_209_145: {
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
  ImageBackground_209_146: {
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
  View_209_148: {
    width: 86,
    minWidth: 86,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 239
  },
  Text_209_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_255: {
    width: 43,
    minWidth: 43,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 108
  },
  Text_209_255: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_247: {
    width: 67,
    minWidth: 67,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 568
  },
  Text_209_247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_154: {
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
  View_I209_154_4_8: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I209_154_4_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I209_154_4_3: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    top: 0
  },
  ImageBackground_I209_154_4_5: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291.6220703125,
    top: 0
  },
  ImageBackground_I209_154_4_7: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.5556640625,
    top: 0
  },
  ImageBackground_209_155: {
    width: 166,
    height: 199,
    top: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -75
  },
  ImageBackground_209_156: {
    width: 40,
    height: 40,
    top: 691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224
  },
  ImageBackground_209_157: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82
  },
  ImageBackground_209_158: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: -21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -46
  },
  ImageBackground_209_160: {
    width: 35,
    height: 35,
    top: 533,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228
  },
  ImageBackground_209_161: {
    width: 106,
    height: 114,
    top: 750,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -45
  },
  View_209_162: {
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
  View_209_163: {
    width: 307.066650390625,
    minWidth: 307.066650390625,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.966796875,
    top: 765,
    backgroundColor: "rgba(240, 244, 251, 1)",
    opacity: 0
  },
  View_209_245: {
    width: 55,
    minWidth: 55,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 314
  },
  Text_209_245: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_251: {
    width: 48,
    minWidth: 48,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 400
  },
  Text_209_251: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_252: {
    width: 86,
    minWidth: 86,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 487
  },
  Text_209_252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_209_164: {
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
  ImageBackground_209_165: {
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
  View_209_170: {
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
  ImageBackground_209_171: {
    width: 25,
    height: 25,
    top: 771,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297
  },
  ImageBackground_209_174: {
    width: 25,
    height: 25,
    top: 772,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49
  },
  View_209_176: {
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
  ImageBackground_209_177: {
    width: 21.666667938232422,
    height: 21.6683349609375,
    top: 1.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.66650390625
  },
  View_209_179: {
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
  ImageBackground_209_180: {
    width: 20.00223159790039,
    height: 17.50381088256836,
    top: 11.247772216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.998046875
  },
  ImageBackground_209_241: {
    width: 352,
    minWidth: 352,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 299
  },
  ImageBackground_209_248: {
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
  ImageBackground_209_249: {
    width: 352,
    minWidth: 352,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 471
  },
  ImageBackground_209_254: {
    width: 352,
    minWidth: 352,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 554
  },
  ImageBackground_224_614: {
    width: 352,
    minWidth: 352,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 640
  },
  View_225_1: {
    width: 111,
    minWidth: 111,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 656
  },
  Text_225_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
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
