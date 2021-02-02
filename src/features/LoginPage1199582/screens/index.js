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
      <View style={styles.View_201_176}>
        <View style={styles.View_201_177} />
        <View style={styles.View_201_178} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1198/c254/826bfc2ec5840a7be1b3aca1b37a87cb"
        }}
        style={styles.ImageBackground_201_179}
      />
      <View style={styles.View_201_180}>
        <View style={styles.View_I201_180_4_8}>
          <Text style={styles.Text_I201_180_4_8}>8:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa9/f0e0/c3fa807b8987f6c1b134c1330e1d513c"
          }}
          style={styles.ImageBackground_I201_180_4_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b0/1ce6/c7083716a66421e582abe435a653dfa9"
          }}
          style={styles.ImageBackground_I201_180_4_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903c/7b9c/e847672213bb5b3015233d413cbdb46e"
          }}
          style={styles.ImageBackground_I201_180_4_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf5/0afc/05b04d4a4e8937e2a3807cd48b42fc8f"
        }}
        style={styles.ImageBackground_201_181}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf5/0afc/05b04d4a4e8937e2a3807cd48b42fc8f"
        }}
        style={styles.ImageBackground_201_182}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_201_183}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_201_184}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ebb/55f7/1d4007df7467c3bd5b45bf8770459f4a"
        }}
        style={styles.ImageBackground_201_185}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_201_186}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a423/37da/57b49c0678237841fc837ba6179f545c"
        }}
        style={styles.ImageBackground_201_187}
      />
      <View style={styles.View_201_189}>
        <View style={styles.View_I201_189_4_85} />
        <View style={styles.View_I201_189_4_86}>
          <Text style={styles.Text_I201_189_4_86}>Login</Text>
        </View>
      </View>
      <View style={styles.View_201_190} />
      <View style={styles.View_201_192}>
        <Text style={styles.Text_201_192}>Lifetime</Text>
      </View>
      <View style={styles.View_201_257}>
        <Text style={styles.Text_201_257}>
          Don’t have an account? Register{" "}
        </Text>
      </View>
      <View style={styles.View_201_278}>
        <Text style={styles.Text_201_278}>Forgot your password? </Text>
      </View>
      <View style={styles.View_201_267}>
        <Text style={styles.Text_201_267}>Welcome Back</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc9d/b989/8075b2ddaa83f73eed2faa63ab531bcf"
        }}
        style={styles.ImageBackground_201_269}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc9d/b989/8075b2ddaa83f73eed2faa63ab531bcf"
        }}
        style={styles.ImageBackground_201_270}
      />
      <View style={styles.View_201_271}>
        <Text style={styles.Text_201_271}>Email </Text>
      </View>
      <View style={styles.View_201_274}>
        <Text style={styles.Text_201_274}>Password</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_201_176: {
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
  View_201_177: {
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
  View_201_178: {
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
  ImageBackground_201_179: {
    width: 3024,
    minWidth: 3024,
    height: 4032,
    minHeight: 4032,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1235,
    top: -1993,
    resizeMode: "cover"
  },
  View_201_180: {
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
  View_I201_180_4_8: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I201_180_4_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I201_180_4_3: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    top: 0
  },
  ImageBackground_I201_180_4_5: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291.6222229003906,
    top: 0
  },
  ImageBackground_I201_180_4_7: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.5555725097656,
    top: 0
  },
  ImageBackground_201_181: {
    width: 166,
    height: 199,
    top: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -75
  },
  ImageBackground_201_182: {
    width: 166,
    height: 199,
    top: 691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224
  },
  ImageBackground_201_183: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82
  },
  ImageBackground_201_184: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: -21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -46
  },
  ImageBackground_201_185: {
    width: 84,
    height: 97,
    top: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287
  },
  ImageBackground_201_186: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: 522,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 258
  },
  ImageBackground_201_187: {
    width: 106,
    height: 114,
    top: 750,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -45
  },
  View_201_189: {
    width: 326,
    minWidth: 326,
    height: 63,
    minHeight: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 535,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I201_189_4_85: {
    flexGrow: 1,
    width: 326,
    height: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45
  },
  View_I201_189_4_86: {
    flexGrow: 1,
    width: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 18
  },
  Text_I201_189_4_86: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_190: {
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
  View_201_192: {
    width: 307,
    minWidth: 307,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 140
  },
  Text_201_192: {
    color: "rgba(224, 230, 241, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_257: {
    width: 319,
    minWidth: 319,
    minHeight: 222,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 629
  },
  Text_201_257: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_278: {
    width: 313.25225830078125,
    minWidth: 313.25225830078125,
    minHeight: 218,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 458
  },
  Text_201_278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_267: {
    width: 154,
    minWidth: 154,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113,
    top: 298
  },
  Text_201_267: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_201_269: {
    width: 330,
    minWidth: 330,
    height: 1.1368683772161603e-13,
    minHeight: 1.1368683772161603e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 449
  },
  ImageBackground_201_270: {
    width: 330,
    minWidth: 330,
    height: 1.1368683772161603e-13,
    minHeight: 1.1368683772161603e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 401
  },
  View_201_271: {
    width: 38,
    minWidth: 38,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 376
  },
  Text_201_271: {
    color: "rgba(224, 230, 241, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_274: {
    width: 68,
    minWidth: 68,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 428
  },
  Text_201_274: {
    color: "rgba(224, 230, 241, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
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
