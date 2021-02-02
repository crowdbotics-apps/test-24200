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
      <View style={styles.View_210_1}>
        <View style={styles.View_210_2} />
        <View style={styles.View_210_3} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1198/c254/826bfc2ec5840a7be1b3aca1b37a87cb"
        }}
        style={styles.ImageBackground_210_4}
      />
      <View style={styles.View_210_5}>
        <View style={styles.View_I210_5_4_8}>
          <Text style={styles.Text_I210_5_4_8}>8:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa9/f0e0/c3fa807b8987f6c1b134c1330e1d513c"
          }}
          style={styles.ImageBackground_I210_5_4_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b0/1ce6/c7083716a66421e582abe435a653dfa9"
          }}
          style={styles.ImageBackground_I210_5_4_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903c/7b9c/e847672213bb5b3015233d413cbdb46e"
          }}
          style={styles.ImageBackground_I210_5_4_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccb8/38b0/4d74f87ab6355068fb3fd3e2d566d1e4"
        }}
        style={styles.ImageBackground_210_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_210_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e4e/24c4/a4acf2d202289fa23b5870edb2e27f39"
        }}
        style={styles.ImageBackground_210_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a423/37da/57b49c0678237841fc837ba6179f545c"
        }}
        style={styles.ImageBackground_210_12}
      />
      <View style={styles.View_210_13} />
      <View style={styles.View_210_124} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_210_125}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad0/b4dc/f253b2fab38ac0ce2a1136a5b3ba9ee4"
        }}
        style={styles.ImageBackground_210_126}
      />
      <View style={styles.View_210_131} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eac/b9a9/cb6dfc8bd170ff3e1437a90e0a86ec24"
        }}
        style={styles.ImageBackground_210_413}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c210/6dc3/c7cdcd5e8cefd742814d8334e3e0a8ed"
        }}
        style={styles.ImageBackground_210_416}
      />
      <View style={styles.View_210_418}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b942/01fa/9be5b9f97caacefb4d12ad95a5564774"
          }}
          style={styles.ImageBackground_210_419}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abfa/250c/823d3896cb7bb1f10a844a832290e467"
        }}
        style={styles.ImageBackground_212_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/070e/6c51/dd5c57f97b50b2a8afc8ddca039c75ef"
        }}
        style={styles.ImageBackground_212_2}
      />
      <View style={styles.View_212_92}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57bf/6427/7b9dc4e2a983a4f44bb1da33024c7814"
          }}
          style={styles.ImageBackground_212_93}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de0c/7836/53edc4c5f0070b0d9aab83f7ee7cc201"
          }}
          style={styles.ImageBackground_212_94}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5be5/717a/ba01dd17e2bc074207377226a3aeccaa"
          }}
          style={styles.ImageBackground_212_95}
        />
        <View source={{ uri: "null" }} style={styles.View_212_96} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6663/cb18/d2bce2c3114d2cf4198787c60fb4364a"
          }}
          style={styles.ImageBackground_212_97}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01f6/1ec9/206fbf84ee73d3a60d20cc07ea0990d0"
          }}
          style={styles.ImageBackground_212_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1328/61e0/49741f2dba37af57057a26e8d7092c6e"
          }}
          style={styles.ImageBackground_212_99}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/5fd5/93cf3a78131f37d716430297c2efda42"
          }}
          style={styles.ImageBackground_212_100}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91d0/b4d2/1675c3b71787da080c8b2554c3bc5545"
          }}
          style={styles.ImageBackground_212_101}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/881c/e9ed/4b8c8d6837a2799955b34f920a702c5e"
          }}
          style={styles.ImageBackground_212_102}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b47c/7135/068ef07a00dd6b96ba843b2923b5eb81"
          }}
          style={styles.ImageBackground_212_118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/360d/daf1/1b50eac39d31c908dd04c1afc55a5e16"
          }}
          style={styles.ImageBackground_212_127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6c0/d310/9295e1374583be969905251b5d6012ad"
          }}
          style={styles.ImageBackground_212_128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6c0/d310/9295e1374583be969905251b5d6012ad"
          }}
          style={styles.ImageBackground_212_129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6c0/d310/9295e1374583be969905251b5d6012ad"
          }}
          style={styles.ImageBackground_212_130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4cd/cce5/778e4d95931d52ffa8395524b187f573"
          }}
          style={styles.ImageBackground_212_131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a01/dda6/c29c76523e87c39842166814a9f67001"
          }}
          style={styles.ImageBackground_212_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a0a/5923/a95c1f7e2ec7457fa97ea940a1d75e0e"
          }}
          style={styles.ImageBackground_212_133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1570/d47f/a54a5638147270bce5747f68a23b7c5a"
          }}
          style={styles.ImageBackground_212_134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e68/dc65/c734d92e3ed3509dcfb43b6e96ed2f97"
          }}
          style={styles.ImageBackground_212_135}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b65/d020/130c12b2c95f0b383817966a7576b0cc"
          }}
          style={styles.ImageBackground_212_136}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f3c/32e7/7386e2715acbf92cf3fd8aba9c3cf96e"
          }}
          style={styles.ImageBackground_212_137}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59f6/03fb/479d7149b3c4e4b6fe8a8f7cdedf96d2"
          }}
          style={styles.ImageBackground_212_138}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59a1/ce9e/075d3202024222ca209791f15aeb7613"
          }}
          style={styles.ImageBackground_212_139}
        />
        <View source={{ uri: "null" }} style={styles.View_212_140} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b98/bc6d/a17345835c583514553713d8cea73fd1"
          }}
          style={styles.ImageBackground_212_141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d3d/e58d/cc384610228a578226eec81eda1dec5a"
          }}
          style={styles.ImageBackground_212_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99c2/a140/21d0e3ce24799f67f4e7a9fff04c8ba4"
          }}
          style={styles.ImageBackground_212_143}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/260d/ce87/4b222af4146486cfb468382b41c9100e"
          }}
          style={styles.ImageBackground_212_144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a10/fcef/41d9d5d6c8217cf71c300fa723e9ba68"
          }}
          style={styles.ImageBackground_212_145}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0837/d7ae/6fccd4c508908377814138d2b7f3dedb"
          }}
          style={styles.ImageBackground_212_146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/801d/cf4b/44ec5c39cb54b8c528354886894e3324"
          }}
          style={styles.ImageBackground_212_147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e40c/7dfc/91195b805e3f7eb8e443a78780fcfcec"
          }}
          style={styles.ImageBackground_212_148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccce/5f13/0ba961352642023a12c793798191b813"
          }}
          style={styles.ImageBackground_212_149}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7133/074d/e0e37de333a7edc6511ed21888d13e12"
          }}
          style={styles.ImageBackground_212_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bcc/57f2/be03101f5f10705e3fb33614bd18ee2c"
          }}
          style={styles.ImageBackground_212_151}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/942f/1dbe/06f91e9fdc2d5100e1cdd573779e023d"
          }}
          style={styles.ImageBackground_212_152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de0c/7836/53edc4c5f0070b0d9aab83f7ee7cc201"
          }}
          style={styles.ImageBackground_212_153}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2178/0bba/8c195eeb1c8acb7ca2b0e2105ef40b6d"
          }}
          style={styles.ImageBackground_212_154}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5be5/717a/ba01dd17e2bc074207377226a3aeccaa"
          }}
          style={styles.ImageBackground_212_155}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38d8/1333/703a5a42cc690f838f60d685b5b88743"
          }}
          style={styles.ImageBackground_212_156}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d06f/1bea/478ffca1a5e81fae652e4a61b9d76a6b"
          }}
          style={styles.ImageBackground_212_157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5ca/002c/e39838bca622e613c495922d9e348146"
          }}
          style={styles.ImageBackground_212_158}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b09/0cd8/2ab33b32aa89a12ab0a118550c2e7a21"
          }}
          style={styles.ImageBackground_212_159}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c811/7745/c77f8c3398f7d420130a9ccd790d90f9"
          }}
          style={styles.ImageBackground_212_160}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c64/822d/4a547d7fe5daf384f9893e5d86f19a34"
          }}
          style={styles.ImageBackground_212_161}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42ac/a0a1/0043d9607f94ff342f54bd50935ce2b6"
          }}
          style={styles.ImageBackground_212_162}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/804e/aedb/de3b59a51bcf187d98c06ce195654a8c"
          }}
          style={styles.ImageBackground_212_163}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/595d/1fcd/42058469fd4d53023984030ab1abea10"
          }}
          style={styles.ImageBackground_212_164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c564/a7e4/8572ddf02d65160b800fac08b7d42d3a"
          }}
          style={styles.ImageBackground_212_165}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c02/c3dc/daadd5a161187daeb69d3598a3205426"
          }}
          style={styles.ImageBackground_212_166}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/134a/2b30/8b72198fc8897c4cb89e4a3f8fe8ea73"
          }}
          style={styles.ImageBackground_212_167}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f72/5f70/a00abfeae933be07ca4715d5a2fe4bb4"
          }}
          style={styles.ImageBackground_212_168}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348f/e584/e9ec28aae651f74fafc582b957e1253c"
          }}
          style={styles.ImageBackground_212_169}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a2d/27ea/9e074630553081852aa66d2cd138dcea"
          }}
          style={styles.ImageBackground_212_170}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa0d/1717/cb694405fd96cb5fd3cb765bbad90462"
          }}
          style={styles.ImageBackground_212_171}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76f4/ee4b/256cb76c87df526140a212cb87c4b97d"
          }}
          style={styles.ImageBackground_212_172}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec94/b0b9/e7494ff4c12846a7e1aa4ca86ecbaef5"
          }}
          style={styles.ImageBackground_212_173}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b74/0ba3/9ef8e265a064a356994103d11568bec1"
          }}
          style={styles.ImageBackground_212_174}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e79/7b82/511c23638931630aaff0c2af45787208"
          }}
          style={styles.ImageBackground_212_175}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dca6/0ee9/4a5bd43b6804f2a8992e4b724fb85c58"
          }}
          style={styles.ImageBackground_212_176}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dbc/d7e7/cb221272ed50f50c501d802fde2c4fe4"
          }}
          style={styles.ImageBackground_212_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc57/9d32/d47bce9aa508fd1b9995b3c2d2b04e1e"
          }}
          style={styles.ImageBackground_212_178}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff0/458a/76239b52c68f64b622aaceb566e4c394"
          }}
          style={styles.ImageBackground_212_179}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7193/1b0d/3b80a76625fa0b41f59110968bb7ff75"
          }}
          style={styles.ImageBackground_212_180}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36e2/7a02/87d96991197c2408a5e0db735088c702"
          }}
          style={styles.ImageBackground_212_181}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fc2/b627/ac70acd192257969849860f9aa7fe986"
          }}
          style={styles.ImageBackground_212_182}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1744/6ef0/c7809f9df1ddd539bc86e008e408d957"
          }}
          style={styles.ImageBackground_212_183}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bcf/3020/41e0b4b456049019530b50ea90209882"
          }}
          style={styles.ImageBackground_212_184}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b933/a8ac/0268ac8b534669c6faae3887cbf404fe"
          }}
          style={styles.ImageBackground_212_185}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7874/fc3c/74dd1f13920be7c20457c918832a2d75"
          }}
          style={styles.ImageBackground_212_186}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7462/3000/2f20a5b053210a2e295cc4ccf538d219"
          }}
          style={styles.ImageBackground_212_187}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97ea/144d/58c1ee92e4b30a2aa4958b965a3242a2"
          }}
          style={styles.ImageBackground_212_188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6e1/aa01/63d834b0caf965bc2daafe06a35e5d64"
          }}
          style={styles.ImageBackground_212_189}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a43/5ffe/2f8be1fca96891f120ccbbe2c0dffa1b"
          }}
          style={styles.ImageBackground_212_190}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b406/222d/ae1ad2c265fcd6456f025074fbec68e9"
          }}
          style={styles.ImageBackground_212_191}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/006c/55dd/e70c5d7b28ca8a2b03b3f661f3bb25af"
          }}
          style={styles.ImageBackground_212_192}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adae/e7c1/433fb61b90997903763ef18ea5940cdb"
          }}
          style={styles.ImageBackground_212_193}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/968a/d995/aaa9f358e5dcac1e9a8e320506cb4ac5"
          }}
          style={styles.ImageBackground_212_194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
          }}
          style={styles.ImageBackground_212_195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc84/416e/359611aacc4d83c32857637d3b85b9c1"
          }}
          style={styles.ImageBackground_212_196}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68aa/1f70/aa24e51209589f8c785f0a341fcdb8a1"
          }}
          style={styles.ImageBackground_212_197}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7814/f25a/f437fb4f8427d6833b4b12273de6130a"
          }}
          style={styles.ImageBackground_212_198}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3d6/27c6/966bf7c7e68ff31d9d92d5a794059b39"
          }}
          style={styles.ImageBackground_212_199}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/850e/2669/2f00560806c713aa2c9a6d43ba0f5341"
          }}
          style={styles.ImageBackground_212_200}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5e8/b540/a37853a55344e7f119262f0aec99ad36"
          }}
          style={styles.ImageBackground_212_201}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da4e/8cd3/9845c8a2817ca583690537d47641b546"
          }}
          style={styles.ImageBackground_212_202}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc29/c59d/c09e475af86f80e94553be4cb3263266"
          }}
          style={styles.ImageBackground_212_203}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d59d/7749/3fbd54b31e781eaf2f86687b89b279a6"
          }}
          style={styles.ImageBackground_212_204}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4949/1d7c/d345a36b620cc72665eab34a7a1b7822"
          }}
          style={styles.ImageBackground_212_205}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d7/948b/5497565ec4d214db07b40c13fccb9378"
          }}
          style={styles.ImageBackground_212_206}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29be/22b4/0a63f2524f195fe05b135e4c67ba6062"
          }}
          style={styles.ImageBackground_212_207}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7b2/4a8f/9c3c422fc26c8d2dd33276acb72390bc"
          }}
          style={styles.ImageBackground_212_208}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c9d/34f8/8750c692a47aa03dc3dacc29910c5468"
          }}
          style={styles.ImageBackground_212_209}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9537/db52/b503fbd94d3bcaf933fea9a534ddf20d"
          }}
          style={styles.ImageBackground_212_210}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5992/daae/c3466ca3025c04f71d65d722e04c07ce"
          }}
          style={styles.ImageBackground_212_211}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc81/1ac8/c98c6564e3c5c2324eef7a06a80a7169"
          }}
          style={styles.ImageBackground_212_212}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb0/d08c/bca6ac64ad2b67af02b3a17caa37f288"
          }}
          style={styles.ImageBackground_212_213}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e956/733a/fdeeaa895d529a8698c7223b30bf1783"
          }}
          style={styles.ImageBackground_212_217}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1009/c982/f59ae5be58d417b9a64b164bf46c5448"
          }}
          style={styles.ImageBackground_212_218}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aa4/47c3/098c54d0a0534e14c038c3d2e2d71a79"
          }}
          style={styles.ImageBackground_212_219}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0cf/4539/ce2bfb9feb753961d757d8d52e0690ca"
          }}
          style={styles.ImageBackground_212_220}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b499/d775/3231229fd4a3dccb44c97351059d1026"
          }}
          style={styles.ImageBackground_212_226}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f6b/8733/beaa9ad12030b2272edbb22339242cd4"
          }}
          style={styles.ImageBackground_212_227}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5242/dcd4/10f8d422fe2d24d9be59edff1d79be63"
          }}
          style={styles.ImageBackground_212_228}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c88/a428/8603768af7c5d59532ba2bb649d0a111"
          }}
          style={styles.ImageBackground_212_229}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
          }}
          style={styles.ImageBackground_212_230}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/804e/8740/f5a1f48a23dbf96a65fa13c47311e895"
          }}
          style={styles.ImageBackground_212_231}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d777/fee0/4f6e694dc3f33fb162f730afa3f5f799"
          }}
          style={styles.ImageBackground_212_232}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea5/976f/697f5ea76d4020ffe69e01f3e896e82e"
          }}
          style={styles.ImageBackground_212_233}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
          }}
          style={styles.ImageBackground_212_234}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/804e/8740/f5a1f48a23dbf96a65fa13c47311e895"
          }}
          style={styles.ImageBackground_212_235}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb2e/c2d7/b64e2bd0e563a883370d2bc89c6fd264"
          }}
          style={styles.ImageBackground_212_236}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35cf/c4bc/32c81af0ff6d0719ef599c2a40eeca8d"
          }}
          style={styles.ImageBackground_212_237}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1986/a76f/38aa5a976ddc249d63fc786c037291d2"
          }}
          style={styles.ImageBackground_212_238}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e6e/9c7d/154cfd8b57bb88984e6b6f83865b12ff"
          }}
          style={styles.ImageBackground_212_239}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d664/334c/ed662729f057dd5abd4616aea302c6c5"
          }}
          style={styles.ImageBackground_212_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5d7/e91d/0b359aa2f1cce224d12df590339ec344"
          }}
          style={styles.ImageBackground_212_241}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d317/b6e8/76f2c5f956570c75111c6c02f1208e4b"
          }}
          style={styles.ImageBackground_212_242}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07df/1e21/dbfc0b90addd1e9504a7f1d5f7041447"
          }}
          style={styles.ImageBackground_212_243}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/570e/b965/58339f35777d5eec3509b2820f59d36d"
          }}
          style={styles.ImageBackground_212_244}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f198/177e/20362d6042362f4ef82874e1c0c47fab"
          }}
          style={styles.ImageBackground_212_245}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e914/910d/e07ded8f24d52250e2b00347673688aa"
          }}
          style={styles.ImageBackground_212_246}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d664/334c/ed662729f057dd5abd4616aea302c6c5"
          }}
          style={styles.ImageBackground_212_247}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5d7/e91d/0b359aa2f1cce224d12df590339ec344"
          }}
          style={styles.ImageBackground_212_248}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d317/b6e8/76f2c5f956570c75111c6c02f1208e4b"
          }}
          style={styles.ImageBackground_212_249}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07df/1e21/dbfc0b90addd1e9504a7f1d5f7041447"
          }}
          style={styles.ImageBackground_212_250}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/570e/b965/58339f35777d5eec3509b2820f59d36d"
          }}
          style={styles.ImageBackground_212_251}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f198/177e/20362d6042362f4ef82874e1c0c47fab"
          }}
          style={styles.ImageBackground_212_252}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e914/910d/e07ded8f24d52250e2b00347673688aa"
          }}
          style={styles.ImageBackground_212_253}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86fe/e3de/7734dd6ec044b4c2c679adb6736cb8ef"
          }}
          style={styles.ImageBackground_212_254}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bf3/2129/09046f23e5501760382f02823096fbd4"
          }}
          style={styles.ImageBackground_212_255}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/070e/6c51/dd5c57f97b50b2a8afc8ddca039c75ef"
        }}
        style={styles.ImageBackground_212_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/070e/6c51/dd5c57f97b50b2a8afc8ddca039c75ef"
        }}
        style={styles.ImageBackground_212_6}
      />
      <View style={styles.View_212_9}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7ba/0c94/4984e170ac45e024a676f7a0ffa69c48"
          }}
          style={styles.ImageBackground_212_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d22f/97e5/fb77ec5b7ffdefd5f042f0caed05daab"
          }}
          style={styles.ImageBackground_212_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ea/2188/6a9a1be943f3bbe56967f4273710697d"
          }}
          style={styles.ImageBackground_212_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/884f/988f/86f2bc6efb2d6710ee1f9ef9700e5ec9"
          }}
          style={styles.ImageBackground_212_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/179d/80ba/9e8030dc29aebd2c06c8f69212d8d576"
          }}
          style={styles.ImageBackground_212_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b56d/2f47/a12a2c120283f99ea001af106139e6b1"
          }}
          style={styles.ImageBackground_212_15}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3eb/47ba/aea230f0f1ea84ae8c7db4ac3b697d8c"
          }}
          style={styles.ImageBackground_212_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5305/b316/b00b2036a14e519e58bd105c3af3e929"
          }}
          style={styles.ImageBackground_212_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f40/653a/8b3f9c269dab0c929a59196c095e3232"
          }}
          style={styles.ImageBackground_212_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a46/8709/83ee7ffb4cba33adaf0096926d4038f2"
          }}
          style={styles.ImageBackground_212_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a3/2188/9059461b37c4233bf816b6b184d4ea54"
          }}
          style={styles.ImageBackground_212_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bf0/4b77/97978338888a442bc1d929cd8f6b7447"
          }}
          style={styles.ImageBackground_212_21}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa18/1c28/801d895b9ea9d28249350e48750c2cfa"
          }}
          style={styles.ImageBackground_212_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1895/b72c/e03dd6daaf5cfe9bbdba9190c0ac47e4"
          }}
          style={styles.ImageBackground_212_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05e9/8a8d/9701fcb989346de6a0783eecdaf39e30"
          }}
          style={styles.ImageBackground_212_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4050/c3dc/5b7ac5114df5fc7fcb587b914e903a7e"
          }}
          style={styles.ImageBackground_212_25}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8330/59e5/6e957190f1f5b64afda7b1ffd35faf7e"
          }}
          style={styles.ImageBackground_212_26}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71bc/5391/e33e3933dbb26f4e1f3ee1d21766de41"
          }}
          style={styles.ImageBackground_212_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a85/337e/55d87921e874cb3f95ad5738671773d3"
          }}
          style={styles.ImageBackground_212_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e2b/f820/d633cfca69ba60061f2bbc3f7d775b2b"
          }}
          style={styles.ImageBackground_212_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0479/bfa1/1fa893088dee68b86b63d096c51ff45e"
          }}
          style={styles.ImageBackground_212_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c974/2d0b/37f706c0d0b9f4de027152673ff10241"
          }}
          style={styles.ImageBackground_212_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69c4/1fb8/cd470bb8fd4c09927015baddf5164436"
          }}
          style={styles.ImageBackground_212_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b3/02c8/6ee624f1c99c638c8e71c04de51f544c"
          }}
          style={styles.ImageBackground_212_33}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0643/7a03/a7d8215a170ab33b57967127f0182c93"
          }}
          style={styles.ImageBackground_212_34}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/576a/24c6/9e24ad779cd426eb309fe8e8e339d6ed"
          }}
          style={styles.ImageBackground_212_35}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aacc/9364/79399b774efebf6db23f4e422e457899"
          }}
          style={styles.ImageBackground_212_36}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b12/10a1/44c60e745af1055767bafaf0f5841b65"
          }}
          style={styles.ImageBackground_212_41}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8926/cf7c/1e23f050589dba22ec1895a897bcf2fa"
          }}
          style={styles.ImageBackground_212_42}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73c2/6dc5/5dcf07d798223ebc76fda819e3595e0f"
          }}
          style={styles.ImageBackground_212_43}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1b/39da/b744c63ae5527ffaf8bfb947b777f9ce"
          }}
          style={styles.ImageBackground_212_44}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1b/39da/b744c63ae5527ffaf8bfb947b777f9ce"
          }}
          style={styles.ImageBackground_212_45}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f85d/2aee/b7bd5d2726873b06098e1ea737ed1a21"
          }}
          style={styles.ImageBackground_212_46}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ea3/960a/ef637c43ea21089ca5f454fcfeb31538"
          }}
          style={styles.ImageBackground_212_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68af/9f3e/cb2638ed8ed1a3e0eee43c03b0c4df14"
          }}
          style={styles.ImageBackground_212_48}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d8f/d9e9/8c8dadf6347b47d2abcdd9e5bcf85319"
          }}
          style={styles.ImageBackground_212_49}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfb6/cb44/86e7aae6f74a183c3ec437355cc733d3"
          }}
          style={styles.ImageBackground_212_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38a1/da38/6c8a68c217f35652c3f1590b26d54884"
          }}
          style={styles.ImageBackground_212_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3402/db7f/bd5e5bf5313f36b371839305b5908273"
          }}
          style={styles.ImageBackground_212_52}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa89/9a5d/acf0a0751a08df79922affdc2dab0d76"
          }}
          style={styles.ImageBackground_212_53}
        />
        <View source={{ uri: "null" }} style={styles.View_212_54} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c796/6189/7f4040bb8364341d8211e53b20ac4b39"
          }}
          style={styles.ImageBackground_212_55}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c796/6189/7f4040bb8364341d8211e53b20ac4b39"
          }}
          style={styles.ImageBackground_212_56}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e60f/4d6f/7afc3578df4b7ef95b508fb2e3e06b7c"
          }}
          style={styles.ImageBackground_212_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77d8/63b5/e767ba7879366ff822e9faecd82227f1"
          }}
          style={styles.ImageBackground_212_58}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d08/9c94/c03ccdd1a2c7687d434c10a93bda74a3"
          }}
          style={styles.ImageBackground_212_62}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f7f/d790/1558e6aa67577e9f5c59409a03687b51"
          }}
          style={styles.ImageBackground_212_63}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0637/0442/fccef1e1574c5eed9998573d9699b6f0"
          }}
          style={styles.ImageBackground_212_64}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e22/d22d/d92d0096cdfe20e0259d92afb4e066e2"
          }}
          style={styles.ImageBackground_212_65}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a82/01cb/84740c0071af060787239376be8a27b9"
          }}
          style={styles.ImageBackground_212_66}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6d7/0fe8/3491f2e0271587c050ed147e2491b9c1"
          }}
          style={styles.ImageBackground_212_67}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d60/52de/15a2d7426136b184eba8bfae22978ab5"
          }}
          style={styles.ImageBackground_212_68}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e494/c02c/36fdb6fbcb6c4b1d6b7a6a9eda50eeb5"
          }}
          style={styles.ImageBackground_212_69}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e655/830e/90afb960e5ad18a7d92adb1f19caa599"
          }}
          style={styles.ImageBackground_212_70}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64a4/d423/680aaf22e8283b997fd77ce6d57a6772"
          }}
          style={styles.ImageBackground_212_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7898/fe6c/50b17d3a6a3acc9875784625fd5a03f0"
          }}
          style={styles.ImageBackground_212_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a1c/c7fd/91ab13adf86dcee4a545fd4cf593887a"
          }}
          style={styles.ImageBackground_212_73}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5d7/214b/14df3f1fc2f5a92881f02daf255a486a"
          }}
          style={styles.ImageBackground_212_74}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c914/5847/6435fe9ba0010952012ffd55ae6792fb"
          }}
          style={styles.ImageBackground_212_75}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09f2/06a9/26a8f969f41be673b0c9bb9e6f1680f4"
          }}
          style={styles.ImageBackground_212_76}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c638/4e7f/c74e9e7e33d62c6d58f55e8190006bcd"
          }}
          style={styles.ImageBackground_212_77}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cf1/9908/83238c49fb54aa2961cd3dc469224170"
          }}
          style={styles.ImageBackground_212_78}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a00/4802/42657a6bee4ba8adab56f85899bd28a5"
          }}
          style={styles.ImageBackground_212_79}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8926/cf7c/1e23f050589dba22ec1895a897bcf2fa"
          }}
          style={styles.ImageBackground_212_80}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1034/df8c/f13847eead222eaf1ba68078061b10b6"
          }}
          style={styles.ImageBackground_212_81}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8e6/3ee7/1d08db6aaec48d47bc9f6f5a7aab50f3"
          }}
          style={styles.ImageBackground_212_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/daae/207c/036ca7c687ef4367a9194f01d0d7c6e0"
          }}
          style={styles.ImageBackground_212_83}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ff7/4ac6/1a58eefa6662686d9bc427fdef32706a"
          }}
          style={styles.ImageBackground_212_84}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/223c/4f67/e2cc4d40264e7f8ca557b858a1a40111"
          }}
          style={styles.ImageBackground_212_85}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/daae/207c/036ca7c687ef4367a9194f01d0d7c6e0"
          }}
          style={styles.ImageBackground_212_86}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56e4/2c69/c86e5b914b922981a3dc2c5cd8a3c5b2"
          }}
          style={styles.ImageBackground_212_87}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13b5/5102/e933bba1e171171f2ba89eb33bd39817"
          }}
          style={styles.ImageBackground_212_88}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f006/9e9e/75dfb7fccdce7e42be97aaf9ecfabd2e"
          }}
          style={styles.ImageBackground_212_89}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13b5/5102/e933bba1e171171f2ba89eb33bd39817"
          }}
          style={styles.ImageBackground_212_90}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5060/55a6/00d69318e931dfbc4dd01ea388027566"
          }}
          style={styles.ImageBackground_212_91}
        />
      </View>
      <View style={styles.View_212_256}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c28/4565/e30aa1f35f86b6dba694e824c9e60f06"
          }}
          style={styles.ImageBackground_212_257}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7fa/d41c/afd291e0cf7e819fadf80380639579e8"
          }}
          style={styles.ImageBackground_212_258}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/039c/80ab/7929cf420b017354b139dfc5628ab9f5"
          }}
          style={styles.ImageBackground_212_259}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ebf/7ef9/f93de9d44eeeb1637ea71191747121ff"
          }}
          style={styles.ImageBackground_212_260}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3102/da80/618b962b2b20a4c452d8ca945bfd0043"
          }}
          style={styles.ImageBackground_212_261}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90c7/384e/3cfdf5bd7037f5bc73f89163baa49287"
          }}
          style={styles.ImageBackground_212_262}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5366/ab8c/e61831a6cf06d5a078d13b38c15e98d8"
          }}
          style={styles.ImageBackground_212_263}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
          }}
          style={styles.ImageBackground_212_264}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/804e/8740/f5a1f48a23dbf96a65fa13c47311e895"
          }}
          style={styles.ImageBackground_212_265}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33c/1b09/27a63b1aab2dcb3879de13b7a2526fbf"
          }}
          style={styles.ImageBackground_212_266}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3d2/526a/40bc8743842320d2f1d41823837200c5"
          }}
          style={styles.ImageBackground_212_267}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
          }}
          style={styles.ImageBackground_212_268}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/804e/8740/f5a1f48a23dbf96a65fa13c47311e895"
          }}
          style={styles.ImageBackground_212_269}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb2e/c2d7/b64e2bd0e563a883370d2bc89c6fd264"
          }}
          style={styles.ImageBackground_212_270}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35cf/c4bc/32c81af0ff6d0719ef599c2a40eeca8d"
          }}
          style={styles.ImageBackground_212_271}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1986/a76f/38aa5a976ddc249d63fc786c037291d2"
          }}
          style={styles.ImageBackground_212_272}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1c7/2a37/5d2b068b8faf4ca96094396fd2761282"
          }}
          style={styles.ImageBackground_212_273}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d664/334c/ed662729f057dd5abd4616aea302c6c5"
          }}
          style={styles.ImageBackground_212_274}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5d7/e91d/0b359aa2f1cce224d12df590339ec344"
          }}
          style={styles.ImageBackground_212_275}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d317/b6e8/76f2c5f956570c75111c6c02f1208e4b"
          }}
          style={styles.ImageBackground_212_276}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07df/1e21/dbfc0b90addd1e9504a7f1d5f7041447"
          }}
          style={styles.ImageBackground_212_277}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d894/d1ea/79c239731c5ee9af92eec14e3289436d"
          }}
          style={styles.ImageBackground_212_278}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56a2/cce9/0ce4dae2174e8cd30ad5a59a872a57e1"
          }}
          style={styles.ImageBackground_212_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e914/910d/e07ded8f24d52250e2b00347673688aa"
          }}
          style={styles.ImageBackground_212_280}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d664/334c/ed662729f057dd5abd4616aea302c6c5"
          }}
          style={styles.ImageBackground_212_281}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5d7/e91d/0b359aa2f1cce224d12df590339ec344"
          }}
          style={styles.ImageBackground_212_282}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d317/b6e8/76f2c5f956570c75111c6c02f1208e4b"
          }}
          style={styles.ImageBackground_212_283}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07df/1e21/dbfc0b90addd1e9504a7f1d5f7041447"
          }}
          style={styles.ImageBackground_212_284}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d894/d1ea/79c239731c5ee9af92eec14e3289436d"
          }}
          style={styles.ImageBackground_212_285}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56a2/cce9/0ce4dae2174e8cd30ad5a59a872a57e1"
          }}
          style={styles.ImageBackground_212_286}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e914/910d/e07ded8f24d52250e2b00347673688aa"
          }}
          style={styles.ImageBackground_212_287}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86fe/e3de/7734dd6ec044b4c2c679adb6736cb8ef"
          }}
          style={styles.ImageBackground_212_288}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88ce/515c/fcee8210e3f154e06bc1959fd30a4198"
          }}
          style={styles.ImageBackground_212_289}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dabf/e054/0ec5befc979c0004e7ab9b88bf787843"
          }}
          style={styles.ImageBackground_212_290}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c6a/10b5/a85294fadb4bf871b897e1f2eeea7ede"
          }}
          style={styles.ImageBackground_212_291}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc7/a803/5bb024d62b5c5884105388ff983e34dc"
          }}
          style={styles.ImageBackground_212_292}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/068f/0fad/006460055b990abc9ec56fa6276c29da"
          }}
          style={styles.ImageBackground_212_293}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9262/5ce0/60f8682e32cb318d81307914778cde36"
          }}
          style={styles.ImageBackground_212_294}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c109/475b/15ebab4e928d8cd544f8c1478ba2f094"
          }}
          style={styles.ImageBackground_212_295}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35fa/1b9d/236cdcc320e80157cac2b85c8d3b6577"
          }}
          style={styles.ImageBackground_212_296}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f15/88a7/17701435e7241df681670b72194d3f98"
          }}
          style={styles.ImageBackground_212_297}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f999/c38e/8d533383bb15b48e578fd437ea76e7d3"
          }}
          style={styles.ImageBackground_212_298}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b23/4362/787089287116e6a92327119e571877a9"
          }}
          style={styles.ImageBackground_212_299}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ab3/c382/f4064931d88cbbd32c0f34416f9a42b2"
          }}
          style={styles.ImageBackground_212_300}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d5/0565/fca5a34b6771aa7279eea9c90a341b79"
          }}
          style={styles.ImageBackground_212_301}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d5/0565/fca5a34b6771aa7279eea9c90a341b79"
          }}
          style={styles.ImageBackground_212_302}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74b0/5559/72557d439b3fc18139c2460dd44d59f4"
          }}
          style={styles.ImageBackground_212_303}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ab/42a2/7f70db63916d7133d6d13baabe40a5c0"
          }}
          style={styles.ImageBackground_212_304}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff2c/c812/acce99d067c9b7d9cbb5894ef16acf6a"
          }}
          style={styles.ImageBackground_212_305}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b448/97b8/73acb1b6ddfddaee80128485d938a8a6"
          }}
          style={styles.ImageBackground_212_306}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/393e/fe56/701da39222b4a69ec63ba86dfa1d3aee"
          }}
          style={styles.ImageBackground_212_307}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f2/47ce/d9c4cf86586bd0c50ea12728b3774328"
          }}
          style={styles.ImageBackground_212_308}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d5/0565/fca5a34b6771aa7279eea9c90a341b79"
          }}
          style={styles.ImageBackground_212_309}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d5/0565/fca5a34b6771aa7279eea9c90a341b79"
          }}
          style={styles.ImageBackground_212_310}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bbc/9ef9/2a4b36b4513818f7e072ef98fcee0563"
          }}
          style={styles.ImageBackground_212_311}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7280/24d7/fa80328f940cf8736a15b4898577bc75"
          }}
          style={styles.ImageBackground_212_312}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/200b/8e96/61c60fad56589f343647d1806ab1b7a8"
          }}
          style={styles.ImageBackground_212_313}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4aad/bac3/acabb96a801bfc540f09715a82c197c5"
          }}
          style={styles.ImageBackground_212_314}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0724/ccce/852ae0d6e221d12e56a65464d1717175"
          }}
          style={styles.ImageBackground_212_315}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3e5/e75f/8eff3cf844df8101790d2f6f403c6235"
          }}
          style={styles.ImageBackground_212_316}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5e7/81db/2958773125640e4cfac4a65f4a9b05a1"
          }}
          style={styles.ImageBackground_212_317}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c46e/5f02/5c7128aef870cefc60200db4ed23379d"
          }}
          style={styles.ImageBackground_212_318}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b13/1782/b516ba004045212bdeea148d85e94908"
          }}
          style={styles.ImageBackground_212_319}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e21/f286/ccb5db7b5d18b914da9c03785ef61bc3"
          }}
          style={styles.ImageBackground_212_320}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c01d/2b92/f365e27ba24aa575b67e2a94c9b028f3"
          }}
          style={styles.ImageBackground_212_321}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/547d/7fcd/0e78b6dca1239d0a2545d984bef0e1cd"
          }}
          style={styles.ImageBackground_212_322}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc6d/c35f/0db28906af2da64d52d54fc7db1baf06"
          }}
          style={styles.ImageBackground_212_323}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b00e/a36a/07bf7b63f29c6532a15e03d1d7254d36"
          }}
          style={styles.ImageBackground_212_324}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/069b/6456/a12d971d2b0227aa6810242857826627"
          }}
          style={styles.ImageBackground_212_325}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f908/56d7/895a8bf785cd5355af9c6b1959c70bde"
          }}
          style={styles.ImageBackground_212_326}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/2b56/e5672d1e746f0fc94af604fab814fe24"
          }}
          style={styles.ImageBackground_212_327}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9889/aef6/ff7f5e49494d295aa0a66b87bae5e26e"
          }}
          style={styles.ImageBackground_212_328}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16d7/f1f0/996a0004306d163e9528d302b752a952"
          }}
          style={styles.ImageBackground_212_329}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ac7/c039/24de9df8b0c5dc9a8840c22ade801591"
          }}
          style={styles.ImageBackground_212_330}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b729/4202/47e1222f6108921e007fddf05e0ce999"
          }}
          style={styles.ImageBackground_212_331}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a028/87b0/fe828c8311491314ee1774b09cedeb68"
          }}
          style={styles.ImageBackground_212_332}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63ff/5ce1/96b6b5e52d42b233d1c03d6ec6e8cf99"
          }}
          style={styles.ImageBackground_212_333}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a919/6aec/3a991f8cf0e6f86b8015867fd1171e97"
          }}
          style={styles.ImageBackground_212_334}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd5d/f3e5/584840b650b5dbffa205158db0fc9330"
          }}
          style={styles.ImageBackground_212_335}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3103/6d71/42e286163ee21161044e1809b6c0ce61"
          }}
          style={styles.ImageBackground_212_336}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4c2/49e9/4ff6c81a21f782250922b1784db657e0"
          }}
          style={styles.ImageBackground_212_337}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75d3/ba69/53cbe0e7dcd33358e81d9e1fadad1787"
          }}
          style={styles.ImageBackground_212_338}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2c3/9538/de2c72bbdb862c198faa055f3b0f3059"
          }}
          style={styles.ImageBackground_212_339}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7200/8295/bef3760abbbde415fe8375a607663643"
          }}
          style={styles.ImageBackground_212_340}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/874f/3603/4ebd28994c687322be05cb7f8bac7c95"
          }}
          style={styles.ImageBackground_212_341}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d920/4648/a92fa023f943f6e0345a5d18baf770c5"
          }}
          style={styles.ImageBackground_212_342}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc63/eb64/556e5d4f0a11e4bb0cc875b2ab86a96c"
          }}
          style={styles.ImageBackground_212_343}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f93a/df0a/00731a681c875e2d5e2c6ff0a5982511"
          }}
          style={styles.ImageBackground_212_344}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1be/1287/18fe4733f09e1830beb0f8eac6f74efe"
          }}
          style={styles.ImageBackground_212_345}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd4b/57a9/51d35b36aa13e73567b32387c79366e3"
          }}
          style={styles.ImageBackground_212_346}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5b9/4e4c/0dd97beef75172aeb309a932754d7dfc"
          }}
          style={styles.ImageBackground_212_347}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c35/1a0f/16dfffcdd0b9a41ddb929c363dc1a675"
          }}
          style={styles.ImageBackground_212_348}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339e/189b/d3a3461fb1236146e7d3d10e382cb43c"
          }}
          style={styles.ImageBackground_212_349}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2143/337b/740ed2c36866a3a7b7e7941d46085b4e"
          }}
          style={styles.ImageBackground_212_350}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06a7/4935/e3b8e017a06a6ba9f8b1d45277d3c131"
          }}
          style={styles.ImageBackground_212_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b7b/e066/6e79dc1a46f02df46fbac5623065b4d9"
          }}
          style={styles.ImageBackground_212_354}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40b3/bf0f/67afa34f358ff643532f166004a65dfc"
          }}
          style={styles.ImageBackground_212_355}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f36e/1ce7/17017076b7e8f7a42ee3673c03439ca2"
          }}
          style={styles.ImageBackground_212_356}
        />
      </View>
      <View style={styles.View_212_2527}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc6b/7b14/6fab2650ac1b9297acc275a42e7d0c71"
          }}
          style={styles.ImageBackground_212_2528}
        />
      </View>
      <View style={styles.View_212_362}>
        <Text style={styles.Text_212_362}>Memory Lane</Text>
      </View>
      <View style={styles.View_212_672}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/912e/9c75e931c1cfce8bd9969e0358da0ba9"
          }}
          style={styles.ImageBackground_212_673}
        />
      </View>
      <View style={styles.View_212_700} />
      <View style={styles.View_212_716} />
      <View style={styles.View_212_717} />
      <View style={styles.View_212_701}>
        <Text style={styles.Text_212_701}>22.01.2021</Text>
      </View>
      <View style={styles.View_212_718}>
        <Text style={styles.Text_212_718}>22.12.2020</Text>
      </View>
      <View style={styles.View_212_719}>
        <Text style={styles.Text_212_719}>22.06.2021</Text>
      </View>
      <View style={styles.View_212_1535}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fdd/b426/b3a2fee90f013f0f2752b49118eebe5e"
          }}
          style={styles.ImageBackground_212_1536}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fe1/b11f/0e7281ca262166b4f9be6a8146701229"
          }}
          style={styles.ImageBackground_212_1537}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad5f/78ff/e84f579033f15633c2dd31f0ab2906ac"
          }}
          style={styles.ImageBackground_212_1538}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aba/3463/daf82bb67830f02d85da5cba0f3919c2"
          }}
          style={styles.ImageBackground_212_1539}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8723/f985/9af3decc256d10b4d8f486e3ea5f0d03"
          }}
          style={styles.ImageBackground_212_1540}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d2d/1650/f62db903f2230c3e8bf0b956ac15c299"
          }}
          style={styles.ImageBackground_212_1541}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
          }}
          style={styles.ImageBackground_212_1542}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34c0/f479/4d0324f070a3de87dea2a0af82f51251"
          }}
          style={styles.ImageBackground_212_1543}
        />
      </View>
      <View style={styles.View_212_1629}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0677/e212/ae81c37f14ba711622c6c7c1c5faf806"
          }}
          style={styles.ImageBackground_212_1630}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/450b/ae33/0fa4a876e800ae7e36b355a1e8e3017f"
          }}
          style={styles.ImageBackground_212_1631}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbf7/ac35/75f57f2a3b5ba6b80b42fd770baca814"
          }}
          style={styles.ImageBackground_212_1632}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ace/c402/9f6f3165999a5b41ae120a2bc5c3d4a9"
          }}
          style={styles.ImageBackground_212_1633}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e6/e238/e0812ed2a395f65b5504983420e745c6"
          }}
          style={styles.ImageBackground_212_1634}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72d0/4a8c/a5181973d69bcb528a5c28a27a559209"
          }}
          style={styles.ImageBackground_212_1635}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f96/c429/0a8e29e4210f57d503c9cbc09675b863"
          }}
          style={styles.ImageBackground_212_1636}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f65a/94f8/5fbe646b35772641e94b23216c2b4d27"
          }}
          style={styles.ImageBackground_212_1637}
        />
      </View>
      <View style={styles.View_212_2518}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc6b/7b14/6fab2650ac1b9297acc275a42e7d0c71"
          }}
          style={styles.ImageBackground_212_2519}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc9/1348/da378b5003424bae0f7614dab3a184f1"
        }}
        style={styles.ImageBackground_212_2525}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc9/1348/da378b5003424bae0f7614dab3a184f1"
        }}
        style={styles.ImageBackground_212_2526}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_210_1: {
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
  View_210_2: {
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
  View_210_3: {
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
  ImageBackground_210_4: {
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
  View_210_5: {
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
  View_I210_5_4_8: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I210_5_4_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I210_5_4_3: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    top: 0
  },
  ImageBackground_I210_5_4_5: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291.6221923828125,
    top: 0
  },
  ImageBackground_I210_5_4_7: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.5555419921875,
    top: 0
  },
  ImageBackground_210_7: {
    width: 40,
    height: 40,
    top: 691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224
  },
  ImageBackground_210_9: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: -21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -46
  },
  ImageBackground_210_11: {
    width: 35,
    height: 35,
    top: 533,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228
  },
  ImageBackground_210_12: {
    width: 106,
    height: 114,
    top: 750,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -45
  },
  View_210_13: {
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
  View_210_124: {
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
  ImageBackground_210_125: {
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
  ImageBackground_210_126: {
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
  View_210_131: {
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
  ImageBackground_210_413: {
    width: 25,
    height: 25,
    top: 771,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297
  },
  ImageBackground_210_416: {
    width: 25,
    height: 25,
    top: 772,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49
  },
  View_210_418: {
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
  ImageBackground_210_419: {
    width: 21.666667938232422,
    height: 21.6683349609375,
    top: 1.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.6666259765625
  },
  ImageBackground_212_7: {
    width: 18,
    height: 18,
    top: 653,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 178
  },
  ImageBackground_212_2: {
    width: 0,
    minWidth: 0,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 239
  },
  View_212_92: {
    width: 120.28873443603516,
    minWidth: 120.28873443603516,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 481,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_93: {
    width: 76.4931411743164,
    height: 4.1400933265686035,
    top: 85.85986328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.3275146484375
  },
  ImageBackground_212_94: {
    width: 23.238428115844727,
    height: 22.917465209960938,
    top: 60.92608642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61
  },
  ImageBackground_212_95: {
    width: 11.592124938964844,
    height: 6.415563583374023,
    top: 80.08612060546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74.56494140625
  },
  View_212_96: {
    width: 4.9536452293396,
    height: 4.312239170074463,
    top: 81.065185546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80.0172119140625
  },
  ImageBackground_212_97: {
    width: 25.157169342041016,
    height: 25.572288513183594,
    top: 60.9283447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61
  },
  ImageBackground_212_98: {
    width: 106.65907287597656,
    height: 22.58036231994629,
    top: 47.14404296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.29931640625
  },
  ImageBackground_212_99: {
    width: 115.85260772705078,
    height: 14.982120513916016,
    top: 0.00054931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.3758544921875
  },
  ImageBackground_212_100: {
    width: 115.49730682373047,
    height: 18.11841583251953,
    top: 30.16259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.0009765625
  },
  ImageBackground_212_101: {
    width: 120.0087661743164,
    height: 14.947556495666504,
    top: 15.05279541015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.2796630859375
  },
  ImageBackground_212_102: {
    width: 20.755897521972656,
    height: 24.224559783935547,
    top: 29.89715576171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86.679931640625
  },
  ImageBackground_212_118: {
    width: 16.119470596313477,
    height: 28.80785369873047,
    top: 13.12274169921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79.339599609375
  },
  ImageBackground_212_127: {
    width: 2.3798890113830566,
    height: 2.147958993911743,
    top: 9.37109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44.9288330078125
  },
  ImageBackground_212_128: {
    width: 1.7784919738769531,
    height: 2.752673864364624,
    top: 18.26422119140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.1796875
  },
  ImageBackground_212_129: {
    width: 1.7822034358978271,
    height: 2.7529029846191406,
    top: 16.18975830078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.5069580078125
  },
  ImageBackground_212_130: {
    width: 1.781826376914978,
    height: 2.7522876262664795,
    top: 13.10772705078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.1942138671875
  },
  ImageBackground_212_131: {
    width: 2.696110486984253,
    height: 1.912603497505188,
    top: 29.74224853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.860595703125
  },
  ImageBackground_212_132: {
    width: 78.00341033935547,
    height: 73.35115814208984,
    top: 15.06011962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.2891845703125
  },
  ImageBackground_212_133: {
    width: 6.934885025024414,
    height: 10.991656303405762,
    top: 68.19207763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.6534423828125
  },
  ImageBackground_212_134: {
    width: 6.934885025024414,
    height: 10.991656303405762,
    top: 68.19207763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.6534423828125
  },
  ImageBackground_212_135: {
    width: 3.8934011459350586,
    height: 4.262898921966553,
    top: 77.987548828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37.0361328125
  },
  ImageBackground_212_136: {
    width: 3.8934011459350586,
    height: 4.262898921966553,
    top: 77.987548828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37.0361328125
  },
  ImageBackground_212_137: {
    width: 10.10335636138916,
    height: 5.435512542724609,
    top: 80.9775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37.746337890625
  },
  ImageBackground_212_138: {
    width: 10.10335636138916,
    height: 5.435512542724609,
    top: 80.9775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37.746337890625
  },
  ImageBackground_212_139: {
    width: 17.536117553710938,
    height: 29.941499710083008,
    top: 31.40545654296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.911376953125
  },
  View_212_140: {
    width: 8.260095596313477,
    height: 17.75933074951172,
    top: 31.40765380859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.187255859375
  },
  ImageBackground_212_141: {
    width: 8.260095596313477,
    height: 17.75933074951172,
    top: 31.40765380859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.187255859375
  },
  ImageBackground_212_142: {
    width: 31.431896209716797,
    height: 23.59427833557129,
    top: 33.897216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.9764404296875
  },
  ImageBackground_212_143: {
    width: 31.431896209716797,
    height: 23.59427833557129,
    top: 33.897216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.9764404296875
  },
  ImageBackground_212_144: {
    width: 10.9028959274292,
    height: 10.05367660522461,
    top: 39.47894287109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.342529296875
  },
  ImageBackground_212_145: {
    width: 10.9028959274292,
    height: 10.05367660522461,
    top: 39.47894287109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.342529296875
  },
  ImageBackground_212_146: {
    width: 5.427300930023193,
    height: 7.208991527557373,
    top: 34.35321044921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.5335693359375
  },
  ImageBackground_212_147: {
    width: 5.427300930023193,
    height: 7.208991527557373,
    top: 34.35321044921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.5335693359375
  },
  ImageBackground_212_148: {
    width: 4.689203262329102,
    height: 20.270160675048828,
    top: 48.9224853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.5469970703125
  },
  ImageBackground_212_149: {
    width: 4.689203262329102,
    height: 20.270160675048828,
    top: 48.9224853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.5469970703125
  },
  ImageBackground_212_150: {
    width: 6.778787136077881,
    height: 13.623000144958496,
    top: 68.8248291015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.103515625
  },
  ImageBackground_212_151: {
    width: 5.414405822753906,
    height: 1.3781325817108154,
    top: 68.81939697265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.466064453125
  },
  ImageBackground_212_152: {
    width: 12.517142295837402,
    height: 24.76981544494629,
    top: 45.12030029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.100341796875
  },
  ImageBackground_212_153: {
    width: 23.238428115844727,
    height: 22.917465209960938,
    top: 62.5706787109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.175537109375
  },
  ImageBackground_212_154: {
    width: 5.0490336418151855,
    height: 3.974538564682007,
    top: 81.51263427734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74.04150390625
  },
  ImageBackground_212_155: {
    width: 11.592124938964844,
    height: 6.415563583374023,
    top: 81.7308349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69.7408447265625
  },
  ImageBackground_212_156: {
    width: 11.661538124084473,
    height: 5.491279125213623,
    top: 82.7098388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69.67138671875
  },
  ImageBackground_212_157: {
    width: 5.662068843841553,
    height: 5.55558443069458,
    top: 26.39532470703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.8468017578125
  },
  ImageBackground_212_158: {
    width: 12.062856674194336,
    height: 13.168708801269531,
    top: 26.01824951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71.9473876953125
  },
  ImageBackground_212_159: {
    width: 7.63882303237915,
    height: 6.403077602386475,
    top: 26.01824951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71.94970703125
  },
  ImageBackground_212_160: {
    width: 13.742636680603027,
    height: 13.742636680603027,
    top: 18.46051025390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.708740234375
  },
  ImageBackground_212_161: {
    width: 6.662966728210449,
    height: 5.23392915725708,
    top: 33.95294189453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.3472900390625
  },
  ImageBackground_212_162: {
    width: 37.87842559814453,
    height: 54.385948181152344,
    top: 34.1722412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.6185302734375
  },
  ImageBackground_212_163: {
    width: 12.396175384521484,
    height: 2.549976348876953,
    top: 57.1424560546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 78.119384765625
  },
  ImageBackground_212_164: {
    width: 0.5208016037940979,
    height: 1.6468316316604614,
    top: 57.9295654296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83.9915771484375
  },
  ImageBackground_212_165: {
    width: 11.036412239074707,
    height: 11.298239707946777,
    top: 60.898681640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74.9188232421875
  },
  ImageBackground_212_166: {
    width: 0.350620299577713,
    height: 3.0580973625183105,
    top: 59.99639892578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.8067626953125
  },
  ImageBackground_212_167: {
    width: 5.987990379333496,
    height: 15.596636772155762,
    top: 61.66619873046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84.7867431640625
  },
  ImageBackground_212_168: {
    width: 1.4276416301727295,
    height: 9.07291316986084,
    top: 65.39404296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 91.8585205078125
  },
  ImageBackground_212_169: {
    width: 4.666337013244629,
    height: 1.8735458850860596,
    top: 63.31085205078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74.7200927734375
  },
  ImageBackground_212_170: {
    width: 3.78529953956604,
    height: 4.467929363250732,
    top: 52.3214111328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83.22412109375
  },
  ImageBackground_212_171: {
    width: 2.3539669513702393,
    height: 3.426326274871826,
    top: 53.6097412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82.84033203125
  },
  ImageBackground_212_172: {
    width: 1.0348788499832153,
    height: 1.8365110158920288,
    top: 53.1141357421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.4595947265625
  },
  ImageBackground_212_173: {
    width: 1.3987635374069214,
    height: 1.8639215230941772,
    top: 52.3214111328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 89.66552734375
  },
  ImageBackground_212_174: {
    width: 9.903122901916504,
    height: 10.6353178024292,
    top: 35.984619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75.5491943359375
  },
  ImageBackground_212_175: {
    width: 13.106656074523926,
    height: 4.063863754272461,
    top: 55.95050048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.5775146484375
  },
  ImageBackground_212_176: {
    width: 9.857746124267578,
    height: 20.275978088378906,
    top: 36.4212646484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73.968017578125
  },
  ImageBackground_212_177: {
    width: 31.269906997680664,
    height: 23.58774757385254,
    top: 35.987060546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.222412109375
  },
  ImageBackground_212_178: {
    width: 5.011978626251221,
    height: 2.8868982791900635,
    top: 26.39093017578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.496826171875
  },
  ImageBackground_212_179: {
    width: 12.060672760009766,
    height: 12.060669898986816,
    top: 16.99786376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.465087890625
  },
  ImageBackground_212_180: {
    width: 15.817206382751465,
    height: 19.443803787231445,
    top: 29.0108642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.7457275390625
  },
  ImageBackground_212_181: {
    width: 15.817206382751465,
    height: 19.443803787231445,
    top: 28.68194580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.7457275390625
  },
  ImageBackground_212_182: {
    width: 4.402688980102539,
    height: 6.213435649871826,
    top: 42.05120849609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.214111328125
  },
  ImageBackground_212_183: {
    width: 4.402688980102539,
    height: 6.213435649871826,
    top: 42.05120849609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.214111328125
  },
  ImageBackground_212_184: {
    width: 1.4043385982513428,
    height: 2.565525770187378,
    top: 36.5186767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.1630859375
  },
  ImageBackground_212_185: {
    width: 18.497907638549805,
    height: 9.336419105529785,
    top: 40.21875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.461669921875
  },
  ImageBackground_212_186: {
    width: 2.319307804107666,
    height: 1.4859429597854614,
    top: 55.246337890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.1884765625
  },
  ImageBackground_212_187: {
    width: 1.0964245796203613,
    height: 2.6862399578094482,
    top: 52.56585693359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.243408203125
  },
  ImageBackground_212_188: {
    width: 1.6172261238098145,
    height: 2.6566343307495117,
    top: 53.198486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.544921875
  },
  ImageBackground_212_189: {
    width: 1.3705304861068726,
    height: 0.7402083277702332,
    top: 59.9393310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.543701171875
  },
  ImageBackground_212_190: {
    width: 2.190464973449707,
    height: 2.0327906608581543,
    top: 65.6702880859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.1884765625
  },
  ImageBackground_212_191: {
    width: 4.22781229019165,
    height: 2.894556760787964,
    top: 79.55328369140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.1942138671875
  },
  ImageBackground_212_192: {
    width: 5.0643815994262695,
    height: 4.958034515380859,
    top: 79.77142333984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.1416015625
  },
  ImageBackground_212_193: {
    width: 5.064384937286377,
    height: 3.244596481323242,
    top: 81.48602294921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.13818359375
  },
  ImageBackground_212_194: {
    width: 12.138696670532227,
    height: 6.107829570770264,
    top: 81.702880859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32.905029296875
  },
  ImageBackground_212_195: {
    width: 0.4089641869068146,
    height: 0.06249531731009483,
    top: 16.3038330078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.45703125
  },
  ImageBackground_212_196: {
    width: 12.062864303588867,
    height: 11.17455005645752,
    top: 17.004638671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.4627685546875
  },
  ImageBackground_212_197: {
    width: 15.374019622802734,
    height: 13.020451545715332,
    top: 15.64666748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.3424072265625
  },
  ImageBackground_212_198: {
    width: 10.447480201721191,
    height: 5.620869159698486,
    top: 30.94818115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.5540771484375
  },
  ImageBackground_212_199: {
    width: 1.368825078010559,
    height: 1.2342585325241089,
    top: 58.8717041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.17333984375
  },
  ImageBackground_212_200: {
    width: 10.553085327148438,
    height: 14.325916290283203,
    top: 46.0169677734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.99462890625
  },
  ImageBackground_212_201: {
    width: 4.479990482330322,
    height: 9.377717971801758,
    top: 37.0777587890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.08447265625
  },
  ImageBackground_212_202: {
    width: 3.4551596641540527,
    height: 9.840410232543945,
    top: 34.885986328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.5489501953125
  },
  ImageBackground_212_203: {
    width: 1.3635810613632202,
    height: 4.626410484313965,
    top: 43.7418212890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.9422607421875
  },
  ImageBackground_212_204: {
    width: 2.2653799057006836,
    height: 7.647891521453857,
    top: 48.29205322265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.486328125
  },
  ImageBackground_212_205: {
    width: 13.092414855957031,
    height: 11.724388122558594,
    top: 18.45166015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68.3587646484375
  },
  ImageBackground_212_206: {
    width: 16.4262752532959,
    height: 13.46061897277832,
    top: 16.61175537109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.291015625
  },
  ImageBackground_212_207: {
    width: 13.088018417358398,
    height: 29.2108154296875,
    top: 18.67144775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.5816650390625
  },
  ImageBackground_212_208: {
    width: 9.785588264465332,
    height: 9.0889253616333,
    top: 34.2955322265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.7470703125
  },
  ImageBackground_212_209: {
    width: 9.785588264465332,
    height: 9.0889253616333,
    top: 33.966552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.7470703125
  },
  ImageBackground_212_210: {
    width: 5.291743755340576,
    height: 4.689123153686523,
    top: 33.0374755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.748046875
  },
  ImageBackground_212_211: {
    width: 9.64853572845459,
    height: 14.171289443969727,
    top: 45.797607421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.850830078125
  },
  ImageBackground_212_212: {
    width: 12.828166007995605,
    height: 24.6695556640625,
    top: 36.47808837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.179931640625
  },
  ImageBackground_212_213: {
    width: 15.372002601623535,
    height: 9.610201835632324,
    top: 19.0064697265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.28759765625
  },
  ImageBackground_212_217: {
    width: 6.842785358428955,
    height: 3.302332639694214,
    top: 29.0108642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.556396484375
  },
  ImageBackground_212_218: {
    width: 6.842785358428955,
    height: 3.302332639694214,
    top: 28.68194580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.556396484375
  },
  ImageBackground_212_219: {
    width: 16.42174530029297,
    height: 10.52642822265625,
    top: 19.54705810546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.3011474609375
  },
  ImageBackground_212_220: {
    width: 12.945484161376953,
    height: 28.095870971679688,
    top: 19.83538818359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.720947265625
  },
  ImageBackground_212_226: {
    width: 1.4283504486083984,
    height: 2.0097463130950928,
    top: 18.7159423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82.216796875
  },
  ImageBackground_212_227: {
    width: 1.4283504486083984,
    height: 2.0097463130950928,
    top: 18.7159423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82.1072998046875
  },
  ImageBackground_212_228: {
    width: 3.011265993118286,
    height: 4.908694267272949,
    top: 80.7724609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106.51513671875
  },
  ImageBackground_212_229: {
    width: 2.9773900508880615,
    height: 4.911980152130127,
    top: 80.7724609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106.5506591796875
  },
  ImageBackground_212_230: {
    width: 0.1392480432987213,
    height: 0.6817421913146973,
    top: 81.59722900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109.15478515625
  },
  ImageBackground_212_231: {
    width: 0.6236448287963867,
    height: 0.3771872818470001,
    top: 81.91729736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109.2027587890625
  },
  ImageBackground_212_232: {
    width: 3.0107266902923584,
    height: 4.908694267272949,
    top: 80.7724609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103.6357421875
  },
  ImageBackground_212_233: {
    width: 2.977642297744751,
    height: 4.911980152130127,
    top: 80.7724609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103.63330078125
  },
  ImageBackground_212_234: {
    width: 0.1392480432987213,
    height: 0.6817421913146973,
    top: 81.59722900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103.8720703125
  },
  ImageBackground_212_235: {
    width: 0.6233464479446411,
    height: 0.3771872818470001,
    top: 81.91729736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103.3397216796875
  },
  ImageBackground_212_236: {
    width: 6.267993927001953,
    height: 3.1776623725891113,
    top: 84.6695556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104.0640869140625
  },
  ImageBackground_212_237: {
    width: 6.266425132751465,
    height: 2.2723419666290283,
    top: 85.58026123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104.0640869140625
  },
  ImageBackground_212_238: {
    width: 4.511563301086426,
    height: 2.7125635147094727,
    top: 81.61669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.7198486328125
  },
  ImageBackground_212_239: {
    width: 1.7151904106140137,
    height: 16.69635581970215,
    top: 68.68115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.4268798828125
  },
  ImageBackground_212_240: {
    width: 2.322227954864502,
    height: 3.6609628200531006,
    top: 65.0870361328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.0704345703125
  },
  ImageBackground_212_241: {
    width: 2.505814552307129,
    height: 3.238377809524536,
    top: 68.02813720703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.978271484375
  },
  ImageBackground_212_242: {
    width: 3.414947509765625,
    height: 2.364413261413574,
    top: 73.65875244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.4718017578125
  },
  ImageBackground_212_243: {
    width: 3.2128970623016357,
    height: 2.682936191558838,
    top: 78.30889892578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.428955078125
  },
  ImageBackground_212_244: {
    width: 2.977827787399292,
    height: 2.924579381942749,
    top: 69.37579345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.1649169921875
  },
  ImageBackground_212_245: {
    width: 3.393256187438965,
    height: 2.3529903888702393,
    top: 74.56304931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.6890869140625
  },
  ImageBackground_212_246: {
    width: 3.1211507320404053,
    height: 2.616086483001709,
    top: 80.072998046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.439453125
  },
  ImageBackground_212_247: {
    width: 2.322227954864502,
    height: 3.6609628200531006,
    top: 65.0870361328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.0704345703125
  },
  ImageBackground_212_248: {
    width: 2.505814552307129,
    height: 3.238377809524536,
    top: 68.02813720703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.978271484375
  },
  ImageBackground_212_249: {
    width: 3.414947509765625,
    height: 2.364413261413574,
    top: 73.65875244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.4718017578125
  },
  ImageBackground_212_250: {
    width: 3.2128970623016357,
    height: 2.682936191558838,
    top: 78.30889892578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.428955078125
  },
  ImageBackground_212_251: {
    width: 2.977827787399292,
    height: 2.924579381942749,
    top: 69.37579345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.1649169921875
  },
  ImageBackground_212_252: {
    width: 3.393256187438965,
    height: 2.3529903888702393,
    top: 74.56304931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.6890869140625
  },
  ImageBackground_212_253: {
    width: 3.1211507320404053,
    height: 2.616086483001709,
    top: 80.072998046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.439453125
  },
  ImageBackground_212_254: {
    width: 7.365571022033691,
    height: 3.697732925415039,
    top: 83.21832275390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.3896484375
  },
  ImageBackground_212_255: {
    width: 7.3645219802856445,
    height: 1.8801692724227905,
    top: 85.035400390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.3896484375
  },
  ImageBackground_212_3: {
    width: 0,
    minWidth: 0,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 409
  },
  ImageBackground_212_6: {
    width: 0,
    minWidth: 0,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187,
    top: 571
  },
  View_212_9: {
    width: 141.77749633789062,
    minWidth: 141.77749633789062,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 151,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_10: {
    width: 141.77703857421875,
    height: 86.23698425292969,
    top: 1.761138916015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0006103515625
  },
  ImageBackground_212_11: {
    width: 20.8579158782959,
    height: 19.70835304260254,
    top: 65.230712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.18310546875
  },
  ImageBackground_212_12: {
    width: 5.079437255859375,
    height: 4.986550331115723,
    top: 60.296539306640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.9327392578125
  },
  ImageBackground_212_13: {
    width: 6.161482810974121,
    height: 3.9674980640411377,
    top: 66.3934326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106.7196044921875
  },
  ImageBackground_212_14: {
    width: 6.0552191734313965,
    height: 3.970065116882324,
    top: 73.63784790039062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100.330810546875
  },
  ImageBackground_212_15: {
    width: 6.267471790313721,
    height: 3.983917713165283,
    top: 77.67095947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 92.8662109375
  },
  ImageBackground_212_16: {
    width: 3.9897985458374023,
    height: 6.290168762207031,
    top: 64.367919921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103.6497802734375
  },
  ImageBackground_212_17: {
    width: 3.9704856872558594,
    height: 6.097529411315918,
    top: 68.69500732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.484619140625
  },
  ImageBackground_212_18: {
    width: 3.986320734024048,
    height: 6.2881598472595215,
    top: 74.85565185546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.358642578125
  },
  ImageBackground_212_19: {
    width: 5.079437255859375,
    height: 4.986550331115723,
    top: 60.296539306640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.9327392578125
  },
  ImageBackground_212_20: {
    width: 6.161482810974121,
    height: 3.9674980640411377,
    top: 66.3934326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106.7196044921875
  },
  ImageBackground_212_21: {
    width: 6.0552191734313965,
    height: 3.970065116882324,
    top: 73.63784790039062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100.330810546875
  },
  ImageBackground_212_22: {
    width: 6.267471790313721,
    height: 3.983917713165283,
    top: 77.67095947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 92.8662109375
  },
  ImageBackground_212_23: {
    width: 3.9897985458374023,
    height: 6.290168762207031,
    top: 64.367919921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103.6497802734375
  },
  ImageBackground_212_24: {
    width: 3.9704856872558594,
    height: 6.097529411315918,
    top: 68.69500732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.484619140625
  },
  ImageBackground_212_25: {
    width: 3.986320734024048,
    height: 6.2881598472595215,
    top: 74.85565185546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.358642578125
  },
  ImageBackground_212_26: {
    width: 11.08169937133789,
    height: 26.469820022583008,
    top: 58.30718994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.4488525390625
  },
  ImageBackground_212_27: {
    width: 3.9777092933654785,
    height: 5.98500394821167,
    top: 52.41693115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99.06982421875
  },
  ImageBackground_212_28: {
    width: 5.512320041656494,
    height: 4.466870307922363,
    top: 58.42608642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99.0242919921875
  },
  ImageBackground_212_29: {
    width: 6.233269691467285,
    height: 3.978691577911377,
    top: 67.69805908203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.205322265625
  },
  ImageBackground_212_30: {
    width: 6.1527533531188965,
    height: 3.962010383605957,
    top: 74.34271240234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90.3052978515625
  },
  ImageBackground_212_31: {
    width: 4.006760597229004,
    height: 5.947542667388916,
    top: 58.6947021484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94.8787841796875
  },
  ImageBackground_212_32: {
    width: 4.885096549987793,
    height: 5.288179874420166,
    top: 65.92599487304688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 89.1220703125
  },
  ImageBackground_212_33: {
    width: 4.210535049438477,
    height: 5.603050708770752,
    top: 74.59439086914062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85.2135009765625
  },
  ImageBackground_212_34: {
    width: 53.3571891784668,
    height: 59.15956497192383,
    top: 28.83856201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.1336669921875
  },
  ImageBackground_212_35: {
    width: 45.78322982788086,
    height: 42.56123352050781,
    top: 28.88348388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.131103515625
  },
  ImageBackground_212_36: {
    width: 45.789649963378906,
    height: 39.21833801269531,
    top: 32.069244384765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.126953125
  },
  ImageBackground_212_41: {
    width: 36.4846305847168,
    height: 37.1151008605957,
    top: 39.442901611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.5316162109375
  },
  ImageBackground_212_42: {
    width: 2.9899985790252686,
    height: 2.2010395526885986,
    top: 62.425384521484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.138671875
  },
  ImageBackground_212_43: {
    width: 2.247148275375366,
    height: 8.282571792602539,
    top: 63.646026611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.1453857421875
  },
  ImageBackground_212_44: {
    width: 5.383716583251953,
    height: 17.69101905822754,
    top: 49.205474853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80.36572265625
  },
  ImageBackground_212_45: {
    width: 5.383833408355713,
    height: 17.69101905822754,
    top: 49.205474853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80.6710205078125
  },
  ImageBackground_212_46: {
    width: 5.382577419281006,
    height: 17.69101905822754,
    top: 49.205474853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80.518798828125
  },
  ImageBackground_212_47: {
    width: 14.146333694458008,
    height: 15.102635383605957,
    top: 61.45538330078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.53271484375
  },
  ImageBackground_212_48: {
    width: 14.140101432800293,
    height: 12.630205154418945,
    top: 70.49853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.8787841796875
  },
  ImageBackground_212_49: {
    width: 14.147582054138184,
    height: 14.929326057434082,
    top: 72.272705078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.2308349609375
  },
  ImageBackground_212_50: {
    width: 37.42556381225586,
    height: 30.098506927490234,
    top: 57.9014892578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55.354736328125
  },
  ImageBackground_212_51: {
    width: 12.127740859985352,
    height: 21.32921600341797,
    top: 55.4532470703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47.25146484375
  },
  ImageBackground_212_52: {
    width: 8.3307523727417,
    height: 7.829014778137207,
    top: 74.87582397460938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.2315673828125
  },
  ImageBackground_212_53: {
    width: 17.79450035095215,
    height: 17.793357849121094,
    top: 65.98501586914062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69.6993408203125
  },
  View_212_54: {
    width: 6.100650787353516,
    height: 3.585247278213501,
    top: 70.13970947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.9693603515625
  },
  ImageBackground_212_55: {
    width: 2.1105926036834717,
    height: 1.2200746536254883,
    top: 67.43310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.5823974609375
  },
  ImageBackground_212_56: {
    width: 2.110482692718506,
    height: 1.2200746536254883,
    top: 68.6787109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.4266357421875
  },
  ImageBackground_212_57: {
    width: 16.963844299316406,
    height: 29.610689163208008,
    top: 47.6221923828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.4654541015625
  },
  ImageBackground_212_58: {
    width: 16.960376739501953,
    height: 24.28202247619629,
    top: 52.95208740234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.466552734375
  },
  ImageBackground_212_62: {
    width: 15.15656566619873,
    height: 17.79242706298828,
    top: 65.98501586914062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72.337158203125
  },
  ImageBackground_212_63: {
    width: 5.333355903625488,
    height: 6.406121253967285,
    top: 72.10687255859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.5633544921875
  },
  ImageBackground_212_64: {
    width: 6.023348808288574,
    height: 5.805156707763672,
    top: 69.07586669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55.0467529296875
  },
  ImageBackground_212_65: {
    width: 19.624820709228516,
    height: 19.624820709228516,
    top: 32.82232666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.5965576171875
  },
  ImageBackground_212_66: {
    width: 19.624820709228516,
    height: 19.624826431274414,
    top: 32.516845703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.5965576171875
  },
  ImageBackground_212_67: {
    width: 4.494892120361328,
    height: 7.829007625579834,
    top: 74.88079833984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.2315673828125
  },
  ImageBackground_212_68: {
    width: 3.277189016342163,
    height: 5.770242691040039,
    top: 72.74276733398438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.8602294921875
  },
  ImageBackground_212_69: {
    width: 17.416723251342773,
    height: 14.32648754119873,
    top: 71.345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.379638671875
  },
  ImageBackground_212_70: {
    width: 10.535562515258789,
    height: 10.852250099182129,
    top: 65.93020629882812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47.4498291015625
  },
  ImageBackground_212_71: {
    width: 19.215133666992188,
    height: 13.061288833618164,
    top: 64.76473999023438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47.7227783203125
  },
  ImageBackground_212_72: {
    width: 16.860645294189453,
    height: 7.379881381988525,
    top: 78.2923583984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.9356689453125
  },
  ImageBackground_212_73: {
    width: 0.026909494772553444,
    height: 0.021225443109869957,
    top: 82.07958984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83.380126953125
  },
  ImageBackground_212_74: {
    width: 0.02825668454170227,
    height: 0.021943148225545883,
    top: 82.30831909179688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83.45654296875
  },
  ImageBackground_212_75: {
    width: 35.33715057373047,
    height: 9.477120399475098,
    top: 78.52288818359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55.20751953125
  },
  ImageBackground_212_76: {
    width: 4.371323108673096,
    height: 1.0161473751068115,
    top: 78.7960205078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63.396484375
  },
  ImageBackground_212_77: {
    width: 22.098115921020508,
    height: 14.940128326416016,
    top: 30.047607421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50.220703125
  },
  ImageBackground_212_78: {
    width: 22.098115921020508,
    height: 14.940834999084473,
    top: 29.89361572265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50.220703125
  },
  ImageBackground_212_79: {
    width: 17.6066837310791,
    height: 7.205120086669922,
    top: 37.554595947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50.3961181640625
  },
  ImageBackground_212_80: {
    width: 2.9884142875671387,
    height: 2.201046943664551,
    top: 82.34695434570312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84.5599365234375
  },
  ImageBackground_212_81: {
    width: 1.5248488187789917,
    height: 1.0635267496109009,
    top: 86.06494140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76.9693603515625
  },
  ImageBackground_212_82: {
    width: 0.35908252000808716,
    height: 0.5535848736763,
    top: 75.31243896484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69.3951416015625
  },
  ImageBackground_212_83: {
    width: 4.915152549743652,
    height: 4.435687065124512,
    top: 37.634246826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.2169189453125
  },
  ImageBackground_212_84: {
    width: 4.915152549743652,
    height: 4.4356889724731445,
    top: 1.760986328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131.5252685546875
  },
  ImageBackground_212_85: {
    width: 4.91534948348999,
    height: 4.435691833496094,
    top: 27.672210693359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.586181640625
  },
  ImageBackground_212_86: {
    width: 4.915152549743652,
    height: 4.435695648193359,
    top: 22.34332275390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107.9129638671875
  },
  ImageBackground_212_87: {
    width: 4.916399002075195,
    height: 4.435691833496094,
    top: 15.994537353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133.2220458984375
  },
  ImageBackground_212_88: {
    width: 3.347710132598877,
    height: 6.196483612060547,
    top: 21.462646484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90.9495849609375
  },
  ImageBackground_212_89: {
    width: 3.348036289215088,
    height: 6.196484565734863,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112.4808349609375
  },
  ImageBackground_212_90: {
    width: 3.347743272781372,
    height: 6.196483612060547,
    top: 24.56097412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.3731689453125
  },
  ImageBackground_212_91: {
    width: 5.0533294677734375,
    height: 4.462215900421143,
    top: 43.871063232421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.6021728515625
  },
  View_212_256: {
    width: 129.00694274902344,
    minWidth: 129.00694274902344,
    height: 93,
    minHeight: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 319,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_257: {
    width: 114.38944244384766,
    height: 24.218427658081055,
    top: 50.55975341796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.3934326171875
  },
  ImageBackground_212_258: {
    width: 124.2492904663086,
    height: 16.067686080932617,
    top: -0.00030517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.69287109375
  },
  ImageBackground_212_259: {
    width: 123.86823272705078,
    height: 19.431589126586914,
    top: 32.3487548828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.0013427734375
  },
  ImageBackground_212_260: {
    width: 128.7066650390625,
    height: 16.030916213989258,
    top: 16.14263916015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.2996826171875
  },
  ImageBackground_212_261: {
    width: 82.03717803955078,
    height: 4.4401631355285645,
    top: 88.55987548828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.2567138671875
  },
  ImageBackground_212_262: {
    width: 3.230083703994751,
    height: 5.264464378356934,
    top: 74.45501708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 98.54833984375
  },
  ImageBackground_212_263: {
    width: 3.1934287548065186,
    height: 5.267988204956055,
    top: 74.45501708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 98.5877685546875
  },
  ImageBackground_212_264: {
    width: 0.14934039115905762,
    height: 0.7290016412734985,
    top: 75.34173583984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101.3792724609375
  },
  ImageBackground_212_265: {
    width: 0.6685174107551575,
    height: 0.4045248329639435,
    top: 75.68280029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101.4310302734375
  },
  ImageBackground_212_266: {
    width: 3.2294504642486572,
    height: 5.264464378356934,
    top: 74.45501708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.4654541015625
  },
  ImageBackground_212_267: {
    width: 3.193176031112671,
    height: 5.267988204956055,
    top: 74.45501708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.462890625
  },
  ImageBackground_212_268: {
    width: 0.14934039115905762,
    height: 0.7290016412734985,
    top: 75.34173583984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.715087890625
  },
  ImageBackground_212_269: {
    width: 0.6691451668739319,
    height: 0.4045248329639435,
    top: 75.68280029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.1439208984375
  },
  ImageBackground_212_270: {
    width: 6.722288131713867,
    height: 3.407963991165161,
    top: 78.63446044921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.921142578125
  },
  ImageBackground_212_271: {
    width: 6.719515323638916,
    height: 2.4358510971069336,
    top: 79.610107421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.922119140625
  },
  ImageBackground_212_272: {
    width: 4.838549613952637,
    height: 2.9143025875091553,
    top: 78.09393310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.285888671875
  },
  ImageBackground_212_273: {
    width: 1.8448755741119385,
    height: 17.90763282775879,
    top: 64.22125244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.31640625
  },
  ImageBackground_212_274: {
    width: 2.4893598556518555,
    height: 3.889216184616089,
    top: 60.40374755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.9373779296875
  },
  ImageBackground_212_275: {
    width: 2.68416690826416,
    height: 3.467766046524048,
    top: 63.5262451171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.9825439453125
  },
  ImageBackground_212_276: {
    width: 3.6624538898468018,
    height: 2.535778760910034,
    top: 69.5596923828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.4403076171875
  },
  ImageBackground_212_277: {
    width: 3.4457595348358154,
    height: 2.8773884773254395,
    top: 74.5479736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.3221435546875
  },
  ImageBackground_212_278: {
    width: 3.1936511993408203,
    height: 3.136545181274414,
    top: 64.96630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.96630859375
  },
  ImageBackground_212_279: {
    width: 3.6174845695495605,
    height: 2.5131194591522217,
    top: 70.5394287109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.403076171875
  },
  ImageBackground_212_280: {
    width: 3.3473634719848633,
    height: 2.804516077041626,
    top: 76.43994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.1146240234375
  },
  ImageBackground_212_281: {
    width: 2.4893598556518555,
    height: 3.889216184616089,
    top: 60.40374755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.9373779296875
  },
  ImageBackground_212_282: {
    width: 2.68416690826416,
    height: 3.467766046524048,
    top: 63.5262451171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.9825439453125
  },
  ImageBackground_212_283: {
    width: 3.6624538898468018,
    height: 2.535778760910034,
    top: 69.5596923828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.4403076171875
  },
  ImageBackground_212_284: {
    width: 3.4457595348358154,
    height: 2.8773884773254395,
    top: 74.5479736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.3221435546875
  },
  ImageBackground_212_285: {
    width: 3.1936511993408203,
    height: 3.136545181274414,
    top: 64.96630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.96630859375
  },
  ImageBackground_212_286: {
    width: 3.6174845695495605,
    height: 2.5131194591522217,
    top: 70.5394287109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.403076171875
  },
  ImageBackground_212_287: {
    width: 3.3473634719848633,
    height: 2.804516077041626,
    top: 76.43994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.1146240234375
  },
  ImageBackground_212_288: {
    width: 7.90009069442749,
    height: 3.9657371044158936,
    top: 79.81329345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.057861328125
  },
  ImageBackground_212_289: {
    width: 7.89945650100708,
    height: 2.017331838607788,
    top: 81.76080322265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.057861328125
  },
  ImageBackground_212_290: {
    width: 49.87474060058594,
    height: 83.77958679199219,
    top: 8.5230712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.7236328125
  },
  ImageBackground_212_291: {
    width: 3.216749429702759,
    height: 4.035656929016113,
    top: 39.32647705078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.599609375
  },
  ImageBackground_212_292: {
    width: 2.7463929653167725,
    height: 4.034480094909668,
    top: 39.32647705078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.599609375
  },
  ImageBackground_212_293: {
    width: 8.907352447509766,
    height: 10.144984245300293,
    top: 13.078765869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.3773193359375
  },
  ImageBackground_212_294: {
    width: 8.078408241271973,
    height: 51.31821060180664,
    top: 32.7261962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.4769287109375
  },
  ImageBackground_212_295: {
    width: 8.078408241271973,
    height: 51.31821060180664,
    top: 32.7261962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.4769287109375
  },
  ImageBackground_212_296: {
    width: 8.2733736038208,
    height: 8.31824779510498,
    top: 81.56097412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.73046875
  },
  ImageBackground_212_297: {
    width: 4.500322341918945,
    height: 4.618900775909424,
    top: 81.56097412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71.503662109375
  },
  ImageBackground_212_298: {
    width: 20.13797950744629,
    height: 55.91726303100586,
    top: 29.99932861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.411865234375
  },
  ImageBackground_212_299: {
    width: 6.295714855194092,
    height: 9.032710075378418,
    top: 35.1458740234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60.67724609375
  },
  ImageBackground_212_300: {
    width: 8.260248184204102,
    height: 5.053974628448486,
    top: 84.82757568359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.73046875
  },
  ImageBackground_212_301: {
    width: 2.7586417198181152,
    height: 2.758634567260742,
    top: 88.76800537109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73.54931640625
  },
  ImageBackground_212_302: {
    width: 2.7586381435394287,
    height: 2.7586417198181152,
    top: 86.83123779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.4599609375
  },
  ImageBackground_212_303: {
    width: 33.07829666137695,
    height: 7.4675188064575195,
    top: 82.41168212890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.22412109375
  },
  ImageBackground_212_304: {
    width: 33.07829666137695,
    height: 6.420365810394287,
    top: 83.274169921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.22412109375
  },
  ImageBackground_212_305: {
    width: 8.394201278686523,
    height: 5.089432716369629,
    top: 82.6756591796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61.75390625
  },
  ImageBackground_212_306: {
    width: 8.230055809020996,
    height: 0.8149300217628479,
    top: 86.95013427734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61.9072265625
  },
  ImageBackground_212_307: {
    width: 10.22508716583252,
    height: 5.073657989501953,
    top: 81.2681884765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.693115234375
  },
  ImageBackground_212_308: {
    width: 10.160688400268555,
    height: 1.3562822341918945,
    top: 84.986328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.7591552734375
  },
  ImageBackground_212_309: {
    width: 2.7586381435394287,
    height: 2.7586417198181152,
    top: 86.83123779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.5526123046875
  },
  ImageBackground_212_310: {
    width: 2.7586417198181152,
    height: 2.758634567260742,
    top: 89.694580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.533935546875
  },
  ImageBackground_212_311: {
    width: 6.246440887451172,
    height: 9.304131507873535,
    top: 39.225341796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.63818359375
  },
  ImageBackground_212_312: {
    width: 11.350275993347168,
    height: 3.2134792804718018,
    top: 44.48040771484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.550537109375
  },
  ImageBackground_212_313: {
    width: 4.593138217926025,
    height: 9.494074821472168,
    top: 13.726226806640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.3741455078125
  },
  ImageBackground_212_314: {
    width: 14.110699653625488,
    height: 14.110702514648438,
    top: 11.8533935546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.75146484375
  },
  ImageBackground_212_315: {
    width: 18.809547424316406,
    height: 5.428097724914551,
    top: 29.995849609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66.48583984375
  },
  ImageBackground_212_316: {
    width: 4.0227203369140625,
    height: 8.928387641906738,
    top: 13.07135009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.2618408203125
  },
  ImageBackground_212_317: {
    width: 33.27060317993164,
    height: 25.217012405395508,
    top: 9.710662841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.3289794921875
  },
  ImageBackground_212_318: {
    width: 2.992642641067505,
    height: 3.2372262477874756,
    top: 39.225341796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.8919677734375
  },
  ImageBackground_212_319: {
    width: 10.184385299682617,
    height: 17.75359535217285,
    top: 25.6085205078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.6146240234375
  },
  ImageBackground_212_320: {
    width: 2.6481077671051025,
    height: 2.082869529724121,
    top: 25.59527587890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.541015625
  },
  ImageBackground_212_321: {
    width: 1.5346697568893433,
    height: 1.2547428607940674,
    top: 28.7410888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66.9730224609375
  },
  ImageBackground_212_322: {
    width: 1.9063259363174438,
    height: 1.1698722839355469,
    top: 30.72967529296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68.1275634765625
  },
  ImageBackground_212_323: {
    width: 0.6239537000656128,
    height: 1.1415157318115234,
    top: 25.59564208984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 78.1392822265625
  },
  ImageBackground_212_324: {
    width: 1.8924823999404907,
    height: 2.277095079421997,
    top: 25.8155517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79.30859375
  },
  ImageBackground_212_325: {
    width: 3.1047446727752686,
    height: 0.8150304555892944,
    top: 60.4549560546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75.867431640625
  },
  ImageBackground_212_326: {
    width: 1.6552159786224365,
    height: 1.3184216022491455,
    top: 62.4410400390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76.9429931640625
  },
  ImageBackground_212_327: {
    width: 0.7567996978759766,
    height: 1.2961117029190063,
    top: 64.67633056640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76.5703125
  },
  ImageBackground_212_328: {
    width: 13.486703872680664,
    height: 11.890257835388184,
    top: 11.84393310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.71630859375
  },
  ImageBackground_212_329: {
    width: 16.308046340942383,
    height: 14.596564292907715,
    top: 9.318695068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.7283935546875
  },
  ImageBackground_212_330: {
    width: 3.986271381378174,
    height: 5.586988925933838,
    top: 35.14471435546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60.6783447265625
  },
  ImageBackground_212_331: {
    width: 10.926408767700195,
    height: 10.926412582397461,
    top: 29.99578857421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.826416015625
  },
  ImageBackground_212_332: {
    width: 4.570693016052246,
    height: 2.063534736633301,
    top: 81.271728515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.2021484375
  },
  ImageBackground_212_333: {
    width: 4.775289535522461,
    height: 1.7015100717544556,
    top: 82.67333984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64.7974853515625
  },
  ImageBackground_212_334: {
    width: 13.961349487304688,
    height: 22.701431274414062,
    top: 61.3394775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.6712646484375
  },
  ImageBackground_212_335: {
    width: 11.686965942382812,
    height: 3.5483975410461426,
    top: 61.3394775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.9368896484375
  },
  ImageBackground_212_336: {
    width: 14.23179817199707,
    height: 26.37270736694336,
    top: 38.0234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.448974609375
  },
  ImageBackground_212_337: {
    width: 12.622261047363281,
    height: 7.393651008605957,
    top: 44.48040771484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.0430908203125
  },
  ImageBackground_212_338: {
    width: 4.898740291595459,
    height: 4.676518440246582,
    top: 54.66119384765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.8541259765625
  },
  ImageBackground_212_339: {
    width: 1.426571249961853,
    height: 0.7052133679389954,
    top: 56.56500244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66.9267578125
  },
  ImageBackground_212_340: {
    width: 1.8084585666656494,
    height: 1.031569480895996,
    top: 45.2247314453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.30322265625
  },
  ImageBackground_212_341: {
    width: 1.0803852081298828,
    height: 10.267868995666504,
    top: 65.32427978515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60.8397216796875
  },
  ImageBackground_212_342: {
    width: 0.6685498952865601,
    height: 1.201339602470398,
    top: 77.05023193359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.1336669921875
  },
  ImageBackground_212_343: {
    width: 1.569103717803955,
    height: 0.1541725993156433,
    top: 75.20465087890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.2783203125
  },
  ImageBackground_212_344: {
    width: 2.8291563987731934,
    height: 1.2945085763931274,
    top: 80.42266845703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.7869873046875
  },
  ImageBackground_212_345: {
    width: 1.7750529050827026,
    height: 0.273281067609787,
    top: 76.28515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63.6439208984375
  },
  ImageBackground_212_346: {
    width: 0.5575171113014221,
    height: 0.4642403721809387,
    top: 73.41937255859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.9969482421875
  },
  ImageBackground_212_347: {
    width: 10.926377296447754,
    height: 8.571028709411621,
    top: 29.9876708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.827392578125
  },
  ImageBackground_212_348: {
    width: 12.470020294189453,
    height: 10.94580078125,
    top: 27.8328857421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.756103515625
  },
  ImageBackground_212_349: {
    width: 8.816734313964844,
    height: 9.305008888244629,
    top: 44.48040771484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.911376953125
  },
  ImageBackground_212_350: {
    width: 12.458244323730469,
    height: 5.920778751373291,
    top: 32.8543701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.759765625
  },
  ImageBackground_212_353: {
    width: 19.21170425415039,
    height: 34.50568771362305,
    top: 13.4918212890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.8494873046875
  },
  ImageBackground_212_354: {
    width: 18.48463249206543,
    height: 31.72645378112793,
    top: 15.303314208984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61.772216796875
  },
  ImageBackground_212_355: {
    width: 19.210346221923828,
    height: 34.505252838134766,
    top: 13.492218017578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60.18115234375
  },
  ImageBackground_212_356: {
    width: 16.307754516601562,
    height: 9.02036190032959,
    top: 14.89495849609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.7283935546875
  },
  View_212_2527: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 438,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_2528: {
    width: 16,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_212_362: {
    width: 169,
    minWidth: 169,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 69
  },
  Text_212_362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_672: {
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
  ImageBackground_212_673: {
    width: 20.00223159790039,
    height: 17.50381088256836,
    top: 11.247772216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.997802734375
  },
  View_212_700: {
    width: 91,
    minWidth: 91,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 250,
    backgroundColor: "rgba(140, 143, 189, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_212_716: {
    width: 91,
    minWidth: 91,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 287,
    backgroundColor: "rgba(140, 143, 189, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_212_717: {
    width: 91,
    minWidth: 91,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 143,
    top: 435,
    backgroundColor: "rgba(140, 143, 189, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_212_701: {
    width: 58,
    minWidth: 58,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160,
    top: 287
  },
  Text_212_701: {
    color: "rgba(211, 221, 241, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_718: {
    width: 60,
    minWidth: 60,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160,
    top: 252
  },
  Text_212_718: {
    color: "rgba(211, 221, 241, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_719: {
    width: 61,
    minWidth: 61,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 437
  },
  Text_212_719: {
    color: "rgba(211, 221, 241, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_1535: {
    width: 37.73591995239258,
    minWidth: 37.73591995239258,
    height: 37.73591995239258,
    minHeight: 37.73591995239258,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 246,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_1536: {
    width: 33.664669036865234,
    height: 32.964115142822266,
    top: 2.3709716796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.55224609375
  },
  ImageBackground_212_1537: {
    width: 36.2003288269043,
    height: 33.77799987792969,
    top: 1.47637939453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.7666015625
  },
  ImageBackground_212_1538: {
    width: 3.4326376914978027,
    height: 3.468292236328125,
    top: 6.890777587890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.88916015625
  },
  ImageBackground_212_1539: {
    width: 3.397803544998169,
    height: 3.4555578231811523,
    top: 6.9031982421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.92578125
  },
  ImageBackground_212_1540: {
    width: 3.306645393371582,
    height: 3.2455618381500244,
    top: 5.42510986328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.2034912109375
  },
  ImageBackground_212_1541: {
    width: 3.0890774726867676,
    height: 2.728876829147339,
    top: 5.4395751953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.416748046875
  },
  ImageBackground_212_1542: {
    width: 1.337607741355896,
    height: 1.0314934253692627,
    top: 7.003753662109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.428955078125
  },
  ImageBackground_212_1543: {
    width: 22.916357040405273,
    height: 20.116756439208984,
    top: 9.111968994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.322265625
  },
  View_212_1629: {
    width: 42.24241638183594,
    minWidth: 42.24241638183594,
    height: 42.24241638183594,
    minHeight: 42.24241638183594,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 431.99993896484375,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_1630: {
    width: 37.364158630371094,
    height: 37.221561431884766,
    top: 1.223876953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.2421875
  },
  ImageBackground_212_1631: {
    width: 39.41416931152344,
    height: 38.92110824584961,
    top: 1.391357421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.9898681640625
  },
  ImageBackground_212_1632: {
    width: 3.8588950634002686,
    height: 3.8661530017852783,
    top: 10.52838134765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.5662841796875
  },
  ImageBackground_212_1633: {
    width: 3.8300230503082275,
    height: 3.8417789936065674,
    top: 10.5277099609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.5960693359375
  },
  ImageBackground_212_1634: {
    width: 3.6735570430755615,
    height: 3.661123752593994,
    top: 10.4139404296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.9267578125
  },
  ImageBackground_212_1635: {
    width: 3.2930312156677246,
    height: 3.2197132110595703,
    top: 10.4154052734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.9676513671875
  },
  ImageBackground_212_1636: {
    width: 1.3571672439575195,
    height: 1.2948582172393799,
    top: 12.49066162109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.0743408203125
  },
  ImageBackground_212_1637: {
    width: 24.371030807495117,
    height: 23.801177978515625,
    top: 8.614013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.681396484375
  },
  View_212_2518: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 329,
    top: 254,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_2519: {
    width: 16,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_212_2525: {
    width: 85,
    minWidth: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 237,
    top: 263
  },
  ImageBackground_212_2526: {
    width: 85,
    minWidth: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 448
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
