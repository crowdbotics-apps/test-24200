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
      <View style={styles.View_213_1}>
        <View style={styles.View_213_2} />
        <View style={styles.View_213_3} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1198/c254/826bfc2ec5840a7be1b3aca1b37a87cb"
        }}
        style={styles.ImageBackground_213_4}
      />
      <View style={styles.View_213_5}>
        <View style={styles.View_I213_5_4_8}>
          <Text style={styles.Text_I213_5_4_8}>8:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa9/f0e0/c3fa807b8987f6c1b134c1330e1d513c"
          }}
          style={styles.ImageBackground_I213_5_4_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b0/1ce6/c7083716a66421e582abe435a653dfa9"
          }}
          style={styles.ImageBackground_I213_5_4_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903c/7b9c/e847672213bb5b3015233d413cbdb46e"
          }}
          style={styles.ImageBackground_I213_5_4_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccb8/38b0/4d74f87ab6355068fb3fd3e2d566d1e4"
        }}
        style={styles.ImageBackground_213_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_213_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b795/4a54/983210c53d8067d520773b8e2564bda2"
        }}
        style={styles.ImageBackground_213_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a423/37da/57b49c0678237841fc837ba6179f545c"
        }}
        style={styles.ImageBackground_213_9}
      />
      <View style={styles.View_213_10} />
      <View style={styles.View_213_11} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_213_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad0/b4dc/f253b2fab38ac0ce2a1136a5b3ba9ee4"
        }}
        style={styles.ImageBackground_213_13}
      />
      <View style={styles.View_213_18} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eac/b9a9/cb6dfc8bd170ff3e1437a90e0a86ec24"
        }}
        style={styles.ImageBackground_213_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c210/6dc3/c7cdcd5e8cefd742814d8334e3e0a8ed"
        }}
        style={styles.ImageBackground_213_22}
      />
      <View style={styles.View_213_24}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b942/01fa/9be5b9f97caacefb4d12ad95a5564774"
          }}
          style={styles.ImageBackground_213_25}
        />
      </View>
      <View style={styles.View_213_27}>
        <Text style={styles.Text_213_27}>Events</Text>
      </View>
      <View style={styles.View_213_28}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/912e/9c75e931c1cfce8bd9969e0358da0ba9"
          }}
          style={styles.ImageBackground_213_29}
        />
      </View>
      <View style={styles.View_213_32}>
        <View style={styles.View_213_33}>
          <Text style={styles.Text_213_33}>Dates that matter</Text>
        </View>
      </View>
      <View style={styles.View_213_44} />
      <View style={styles.View_224_259} />
      <View style={styles.View_224_260}>
        <Text style={styles.Text_224_260}>2020</Text>
      </View>
      <View style={styles.View_224_327}>
        <Text style={styles.Text_224_327}>2021</Text>
      </View>
      <View style={styles.View_224_261}>
        <Text style={styles.Text_224_261}>December</Text>
      </View>
      <View style={styles.View_224_262}>
        <Text style={styles.Text_224_262}>Mo</Text>
      </View>
      <View style={styles.View_224_263}>
        <Text style={styles.Text_224_263}>Tue</Text>
      </View>
      <View style={styles.View_224_264}>
        <Text style={styles.Text_224_264}>We</Text>
      </View>
      <View style={styles.View_224_265}>
        <Text style={styles.Text_224_265}>Th</Text>
      </View>
      <View style={styles.View_224_266}>
        <Text style={styles.Text_224_266}>Th</Text>
      </View>
      <View style={styles.View_224_267}>
        <Text style={styles.Text_224_267}>Fr</Text>
      </View>
      <View style={styles.View_224_268}>
        <Text style={styles.Text_224_268}>St</Text>
      </View>
      <View style={styles.View_224_269}>
        <Text style={styles.Text_224_269}>Su</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf8f/2135/68fa1501045cb91422b96ef51d006be5"
        }}
        style={styles.ImageBackground_224_270}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_271}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_272}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_273}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_274}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_275}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_276}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_277}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_278}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_279}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_280}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_281}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_282}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf8f/2135/68fa1501045cb91422b96ef51d006be5"
        }}
        style={styles.ImageBackground_224_283}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_284}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf8f/2135/68fa1501045cb91422b96ef51d006be5"
        }}
        style={styles.ImageBackground_224_285}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_286}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_287}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_288}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_289}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf8f/2135/68fa1501045cb91422b96ef51d006be5"
        }}
        style={styles.ImageBackground_224_290}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_291}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_292}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_293}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_294}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_295}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_296}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/120a/ec11/a235c59c75b37dde88b4a015c731ad49"
        }}
        style={styles.ImageBackground_224_297}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a38e/a0d9/1ac978a63ec5ddb74e2c4811fda4c724"
        }}
        style={styles.ImageBackground_224_302}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dd3/d2d3/c309cb9fe3fb1d5870156515c331eb8b"
        }}
        style={styles.ImageBackground_224_304}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/8605/21d6a24ed4fcf3794dc711bd912d2dc4"
        }}
        style={styles.ImageBackground_224_306}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/8605/21d6a24ed4fcf3794dc711bd912d2dc4"
        }}
        style={styles.ImageBackground_224_307}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/8605/21d6a24ed4fcf3794dc711bd912d2dc4"
        }}
        style={styles.ImageBackground_224_308}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/8605/21d6a24ed4fcf3794dc711bd912d2dc4"
        }}
        style={styles.ImageBackground_224_309}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd86/24b7/bbf191000ebe698c312a4aac5d1a1f10"
        }}
        style={styles.ImageBackground_224_311}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e353/94ab/191775da18091fed8744f58aaac7fe54"
        }}
        style={styles.ImageBackground_224_318}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e353/94ab/191775da18091fed8744f58aaac7fe54"
        }}
        style={styles.ImageBackground_224_321}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e353/94ab/191775da18091fed8744f58aaac7fe54"
        }}
        style={styles.ImageBackground_224_325}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e353/94ab/191775da18091fed8744f58aaac7fe54"
        }}
        style={styles.ImageBackground_224_326}
      />
      <View style={styles.View_224_313}>
        <Text style={styles.Text_224_313}>Dec 12</Text>
      </View>
      <View style={styles.View_226_5}>
        <Text style={styles.Text_226_5}> 12</Text>
      </View>
      <View style={styles.View_226_6}>
        <Text style={styles.Text_226_6}> 13</Text>
      </View>
      <View style={styles.View_226_7}>
        <Text style={styles.Text_226_7}> 14</Text>
      </View>
      <View style={styles.View_224_319}>
        <Text style={styles.Text_224_319}>Dec 24</Text>
      </View>
      <View style={styles.View_224_322}>
        <Text style={styles.Text_224_322}>Dec 31</Text>
      </View>
      <View style={styles.View_224_315}>
        <Text style={styles.Text_224_315}>First smile</Text>
      </View>
      <View style={styles.View_224_320}>
        <Text style={styles.Text_224_320}>First step</Text>
      </View>
      <View style={styles.View_224_324}>
        <Text style={styles.Text_224_324}>First New Year</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6816/53de/c96707eb560d7e7411230eac181b9e84"
        }}
        style={styles.ImageBackground_224_317}
      />
      <View style={styles.View_224_328}>
        <Text style={styles.Text_224_328}>Edit</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3507/84e1/3b8ebb04f789e1f97dc49903d158e377"
        }}
        style={styles.ImageBackground_226_3}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_213_1: {
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
  View_213_2: {
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
  View_213_3: {
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
  ImageBackground_213_4: {
    width: 3024,
    minWidth: 3024,
    height: 4032,
    minHeight: 4032,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1421,
    top: -1767,
    resizeMode: "cover"
  },
  View_213_5: {
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
  View_I213_5_4_8: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I213_5_4_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I213_5_4_3: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    top: 0
  },
  ImageBackground_I213_5_4_5: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291.6220703125,
    top: 0
  },
  ImageBackground_I213_5_4_7: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.5556640625,
    top: 0
  },
  ImageBackground_213_6: {
    width: 40,
    height: 40,
    top: 691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224
  },
  ImageBackground_213_7: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: -21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -46
  },
  ImageBackground_213_8: {
    width: 35,
    height: 35,
    top: 453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 227
  },
  ImageBackground_213_9: {
    width: 106,
    height: 114,
    top: 750,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -45
  },
  View_213_10: {
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
  View_213_11: {
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
  ImageBackground_213_12: {
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
  ImageBackground_213_13: {
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
  View_213_18: {
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
  ImageBackground_213_19: {
    width: 25,
    height: 25,
    top: 771,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297
  },
  ImageBackground_213_22: {
    width: 25,
    height: 25,
    top: 772,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49
  },
  View_213_24: {
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
  ImageBackground_213_25: {
    width: 21.666667938232422,
    height: 21.6683349609375,
    top: 1.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.666748046875
  },
  View_213_27: {
    width: 97,
    minWidth: 97,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 174
  },
  Text_213_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_213_28: {
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
  ImageBackground_213_29: {
    width: 20.00223159790039,
    height: 17.50381088256836,
    top: 11.247772216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.997802734375
  },
  View_213_32: {
    width: 280,
    minWidth: 280,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 211,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_213_33: {
    width: 260,
    minWidth: 260,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10
  },
  Text_213_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_213_44: {
    width: 35,
    minWidth: 35,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 447,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_224_259: {
    width: 389,
    minWidth: 389,
    height: 266,
    minHeight: 266,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -9,
    top: 274,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_224_260: {
    width: 116,
    minWidth: 116,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 282
  },
  Text_224_260: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_327: {
    width: 116,
    minWidth: 116,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 325,
    top: 282
  },
  Text_224_327: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_261: {
    width: 116,
    minWidth: 116,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 141,
    top: 277
  },
  Text_224_261: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_262: {
    width: 108,
    minWidth: 108,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 326
  },
  Text_224_262: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_263: {
    width: 108,
    minWidth: 108,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68,
    top: 326
  },
  Text_224_263: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_264: {
    width: 108,
    minWidth: 108,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 123,
    top: 326
  },
  Text_224_264: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_265: {
    width: 108,
    minWidth: 108,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 178,
    top: 326
  },
  Text_224_265: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_266: {
    width: 108,
    minWidth: 108,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 178,
    top: 326
  },
  Text_224_266: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_267: {
    width: 108,
    minWidth: 108,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 233,
    top: 326
  },
  Text_224_267: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_268: {
    width: 108,
    minWidth: 108,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 326
  },
  Text_224_268: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_269: {
    width: 108,
    minWidth: 108,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339,
    top: 326
  },
  Text_224_269: {
    color: "rgba(144, 148, 215, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_224_270: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 361
  },
  ImageBackground_224_271: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 408
  },
  ImageBackground_224_272: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 455
  },
  ImageBackground_224_273: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 502
  },
  ImageBackground_224_274: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68,
    top: 361
  },
  ImageBackground_224_275: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 408
  },
  ImageBackground_224_276: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70,
    top: 455
  },
  ImageBackground_224_277: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 502
  },
  ImageBackground_224_278: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 123,
    top: 361
  },
  ImageBackground_224_279: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 408
  },
  ImageBackground_224_280: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 455
  },
  ImageBackground_224_281: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 502
  },
  ImageBackground_224_282: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 361
  },
  ImageBackground_224_283: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 176,
    top: 408
  },
  ImageBackground_224_284: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 177,
    top: 455
  },
  ImageBackground_224_285: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 178,
    top: 502
  },
  ImageBackground_224_286: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 230,
    top: 361
  },
  ImageBackground_224_287: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 231,
    top: 408
  },
  ImageBackground_224_288: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 455
  },
  ImageBackground_224_289: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 233,
    top: 502
  },
  ImageBackground_224_290: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284,
    top: 361
  },
  ImageBackground_224_291: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 285,
    top: 408
  },
  ImageBackground_224_292: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 286,
    top: 455
  },
  ImageBackground_224_293: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287,
    top: 502
  },
  ImageBackground_224_294: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339,
    top: 361
  },
  ImageBackground_224_295: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 408
  },
  ImageBackground_224_296: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 341,
    top: 455
  },
  ImageBackground_224_297: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342,
    top: 502
  },
  ImageBackground_224_302: {
    width: 20,
    height: 20,
    top: 284,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251
  },
  ImageBackground_224_304: {
    width: 20,
    height: 20,
    top: 284,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104
  },
  ImageBackground_224_306: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 315
  },
  ImageBackground_224_307: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 395
  },
  ImageBackground_224_308: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 445
  },
  ImageBackground_224_309: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 495
  },
  ImageBackground_224_311: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 591
  },
  ImageBackground_224_318: {
    width: 376,
    minWidth: 376,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: 628
  },
  ImageBackground_224_321: {
    width: 376,
    minWidth: 376,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: 664
  },
  ImageBackground_224_325: {
    width: 376,
    minWidth: 376,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: 695
  },
  ImageBackground_224_326: {
    width: 376,
    minWidth: 376,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: 726
  },
  View_224_313: {
    width: 116,
    minWidth: 116,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 540
  },
  Text_224_313: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_226_5: {
    width: 27,
    minWidth: 27,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 361
  },
  Text_226_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_226_6: {
    width: 27,
    minWidth: 27,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 362
  },
  Text_226_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_226_7: {
    width: 27,
    minWidth: 27,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 362
  },
  Text_226_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_319: {
    width: 116,
    minWidth: 116,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 573
  },
  Text_224_319: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_322: {
    width: 116,
    minWidth: 116,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 611
  },
  Text_224_322: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_315: {
    width: 116,
    minWidth: 116,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 566
  },
  Text_224_315: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_320: {
    width: 116,
    minWidth: 116,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 601
  },
  Text_224_320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_324: {
    width: 116,
    minWidth: 116,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 638
  },
  Text_224_324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_224_317: {
    width: 1.0045660734176636,
    minWidth: 1.0045660734176636,
    height: 219.99998474121094,
    minHeight: 219.99998474121094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94.99560546875,
    top: 540
  },
  View_224_328: {
    width: 31,
    minWidth: 31,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337,
    top: 77
  },
  Text_224_328: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_226_3: {
    width: 6,
    height: 6,
    top: 378,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21
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
