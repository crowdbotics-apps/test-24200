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
      <View style={styles.View_207_1}>
        <View style={styles.View_207_2} />
        <View style={styles.View_207_3} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1198/c254/826bfc2ec5840a7be1b3aca1b37a87cb"
        }}
        style={styles.ImageBackground_207_4}
      />
      <View style={styles.View_207_791}>
        <Text style={styles.Text_207_791}>Settings</Text>
      </View>
      <View style={styles.View_209_0}>
        <Text style={styles.Text_209_0}>Account</Text>
      </View>
      <View style={styles.View_209_4}>
        <Text style={styles.Text_209_4}>Photo book</Text>
      </View>
      <View style={styles.View_209_8}>
        <Text style={styles.Text_209_8}>Logout</Text>
      </View>
      <View style={styles.View_209_12}>
        <Text style={styles.Text_209_12}>Delete account</Text>
      </View>
      <View style={styles.View_209_14}>
        <Text style={styles.Text_209_14}>Report a problem</Text>
      </View>
      <View style={styles.View_209_16}>
        <Text style={styles.Text_209_16}>Send feedback</Text>
      </View>
      <View style={styles.View_207_5}>
        <View style={styles.View_I207_5_4_8}>
          <Text style={styles.Text_I207_5_4_8}>8:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa9/f0e0/c3fa807b8987f6c1b134c1330e1d513c"
          }}
          style={styles.ImageBackground_I207_5_4_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b0/1ce6/c7083716a66421e582abe435a653dfa9"
          }}
          style={styles.ImageBackground_I207_5_4_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903c/7b9c/e847672213bb5b3015233d413cbdb46e"
          }}
          style={styles.ImageBackground_I207_5_4_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf5/0afc/05b04d4a4e8937e2a3807cd48b42fc8f"
        }}
        style={styles.ImageBackground_207_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccb8/38b0/4d74f87ab6355068fb3fd3e2d566d1e4"
        }}
        style={styles.ImageBackground_207_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_207_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_207_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ebb/55f7/1d4007df7467c3bd5b45bf8770459f4a"
        }}
        style={styles.ImageBackground_207_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e4e/24c4/a4acf2d202289fa23b5870edb2e27f39"
        }}
        style={styles.ImageBackground_207_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a423/37da/57b49c0678237841fc837ba6179f545c"
        }}
        style={styles.ImageBackground_207_12}
      />
      <View style={styles.View_207_13} />
      <View style={styles.View_207_124} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_207_125}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad0/b4dc/f253b2fab38ac0ce2a1136a5b3ba9ee4"
        }}
        style={styles.ImageBackground_207_126}
      />
      <View style={styles.View_207_131} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eac/b9a9/cb6dfc8bd170ff3e1437a90e0a86ec24"
        }}
        style={styles.ImageBackground_207_413}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c210/6dc3/c7cdcd5e8cefd742814d8334e3e0a8ed"
        }}
        style={styles.ImageBackground_207_416}
      />
      <View style={styles.View_207_418}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b942/01fa/9be5b9f97caacefb4d12ad95a5564774"
          }}
          style={styles.ImageBackground_207_419}
        />
      </View>
      <View style={styles.View_207_531}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/912e/9c75e931c1cfce8bd9969e0358da0ba9"
          }}
          style={styles.ImageBackground_207_532}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f8/b3d9/5c2b353e24e1e8c6c74aa4493db71ea8"
        }}
        style={styles.ImageBackground_207_539}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f8/b3d9/5c2b353e24e1e8c6c74aa4493db71ea8"
        }}
        style={styles.ImageBackground_209_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_207_541}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_209_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_209_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_209_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_209_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_209_15}
      />
      <View style={styles.View_209_21}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abed/6fdf/24970bc05750132d1328431b82b28d8c"
          }}
          style={styles.ImageBackground_209_22}
        />
      </View>
      <View style={styles.View_209_30}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2e9/5eff/28d048c95ab043ec19379868a7904c64"
          }}
          style={styles.ImageBackground_209_31}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a702/55a5/3f811ca5e8c59d5cdf29b04cbdaffa34"
        }}
        style={styles.ImageBackground_209_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a586/2296/c4fe86a67ffc2b1b55f91640b3e5c5bc"
        }}
        style={styles.ImageBackground_209_40}
      />
      <View style={styles.View_209_42}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69f8/e837/61b0de571e865dc4e5c3eacdfc577e76"
          }}
          style={styles.ImageBackground_209_43}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98d7/1e86/0a54d6655dd5b05fa9d5ba4f2e393755"
        }}
        style={styles.ImageBackground_224_487}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_207_1: {
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
  View_207_2: {
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
  View_207_3: {
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
  ImageBackground_207_4: {
    width: 3024,
    minWidth: 3024,
    height: 4032,
    minHeight: 4032,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1353,
    top: -1693,
    resizeMode: "cover"
  },
  View_207_791: {
    width: 107,
    minWidth: 107,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 172
  },
  Text_207_791: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_0: {
    width: 77,
    minWidth: 77,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 270
  },
  Text_209_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_4: {
    width: 103,
    minWidth: 103,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 333
  },
  Text_209_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_8: {
    width: 63,
    minWidth: 63,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 397
  },
  Text_209_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_12: {
    width: 139,
    minWidth: 139,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 454
  },
  Text_209_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_14: {
    width: 160,
    minWidth: 160,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 511
  },
  Text_209_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_16: {
    width: 137,
    minWidth: 137,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 571
  },
  Text_209_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_207_5: {
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
  View_I207_5_4_8: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I207_5_4_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I207_5_4_3: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    top: 0
  },
  ImageBackground_I207_5_4_5: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291.6220703125,
    top: 0
  },
  ImageBackground_I207_5_4_7: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.5556640625,
    top: 0
  },
  ImageBackground_207_6: {
    width: 166,
    height: 199,
    top: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -75
  },
  ImageBackground_207_7: {
    width: 40,
    height: 40,
    top: 691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224
  },
  ImageBackground_207_8: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82
  },
  ImageBackground_207_9: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: -21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -46
  },
  ImageBackground_207_10: {
    width: 84,
    height: 97,
    top: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287
  },
  ImageBackground_207_11: {
    width: 35,
    height: 35,
    top: 533,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228
  },
  ImageBackground_207_12: {
    width: 106,
    height: 114,
    top: 750,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -45
  },
  View_207_13: {
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
  View_207_124: {
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
  ImageBackground_207_125: {
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
  ImageBackground_207_126: {
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
  View_207_131: {
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
  ImageBackground_207_413: {
    width: 25,
    height: 25,
    top: 771,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297
  },
  ImageBackground_207_416: {
    width: 25,
    height: 25,
    top: 772,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49
  },
  View_207_418: {
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
  ImageBackground_207_419: {
    width: 21.666667938232422,
    height: 21.6683349609375,
    top: 1.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.66650390625
  },
  View_207_531: {
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
  ImageBackground_207_532: {
    width: 20.00223159790039,
    height: 17.50381088256836,
    top: 11.247772216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.998046875
  },
  ImageBackground_207_539: {
    width: 20,
    height: 20,
    top: 276,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_209_2: {
    width: 20,
    height: 20,
    top: 340,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_207_541: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 307
  },
  ImageBackground_209_1: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 371
  },
  ImageBackground_209_5: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 428
  },
  ImageBackground_209_9: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 485
  },
  ImageBackground_209_13: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 544
  },
  ImageBackground_209_15: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 604
  },
  View_209_21: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 270,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_209_22: {
    width: 23,
    height: 23,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_209_30: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 393,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_209_31: {
    width: 20.23080062866211,
    height: 19.933334350585938,
    top: 1.5333251953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.533203125
  },
  ImageBackground_209_35: {
    width: 23,
    height: 23,
    top: 451,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7
  },
  ImageBackground_209_40: {
    width: 23,
    height: 23,
    top: 513,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7
  },
  View_209_42: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 572,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_209_43: {
    width: 19.166667938232422,
    height: 19.166667938232422,
    top: 1.91668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.91650390625
  },
  ImageBackground_224_487: {
    width: 23,
    height: 23,
    top: 331,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8
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
