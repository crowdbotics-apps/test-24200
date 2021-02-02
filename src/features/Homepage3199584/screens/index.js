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
      <View style={styles.View_201_1705}>
        <View style={styles.View_201_1706} />
        <View style={styles.View_201_1707} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1198/c254/826bfc2ec5840a7be1b3aca1b37a87cb"
        }}
        style={styles.ImageBackground_201_1708}
      />
      <View style={styles.View_201_1709}>
        <View style={styles.View_I201_1709_4_8}>
          <Text style={styles.Text_I201_1709_4_8}>8:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa9/f0e0/c3fa807b8987f6c1b134c1330e1d513c"
          }}
          style={styles.ImageBackground_I201_1709_4_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b0/1ce6/c7083716a66421e582abe435a653dfa9"
          }}
          style={styles.ImageBackground_I201_1709_4_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903c/7b9c/e847672213bb5b3015233d413cbdb46e"
          }}
          style={styles.ImageBackground_I201_1709_4_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf5/0afc/05b04d4a4e8937e2a3807cd48b42fc8f"
        }}
        style={styles.ImageBackground_201_1710}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccb8/38b0/4d74f87ab6355068fb3fd3e2d566d1e4"
        }}
        style={styles.ImageBackground_201_1711}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_201_1712}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee7/168f/a29c466e3bc40eb0d4ba6168d4a52d18"
        }}
        style={styles.ImageBackground_201_1713}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ebb/55f7/1d4007df7467c3bd5b45bf8770459f4a"
        }}
        style={styles.ImageBackground_201_1714}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e4e/24c4/a4acf2d202289fa23b5870edb2e27f39"
        }}
        style={styles.ImageBackground_201_1715}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a423/37da/57b49c0678237841fc837ba6179f545c"
        }}
        style={styles.ImageBackground_201_1716}
      />
      <View style={styles.View_201_1717} />
      <View style={styles.View_201_1718}>
        <Text style={styles.Text_201_1718}>Hi, Michelle</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fab6/0a4e/77b7bc9074707e5fc003832693954e16"
        }}
        style={styles.ImageBackground_201_1719}
      />
      <View style={styles.View_201_1720} />
      <View style={styles.View_201_1721} />
      <View style={styles.View_201_1722} />
      <View style={styles.View_201_1723}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fac2/a3df/f899cd156b981b90620852aa1fb4d66a"
          }}
          style={styles.ImageBackground_201_1724}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1344/64a1/a9c92c70ea088f3471d50e3f16368aa0"
          }}
          style={styles.ImageBackground_201_1725}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d3f/87c3/a5c732b3bcd8e0ed26a562e0e095359d"
          }}
          style={styles.ImageBackground_201_1726}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b920/838d/4082cf93d061fdb76c22102c840d2317"
          }}
          style={styles.ImageBackground_201_1727}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9951/2f66/182ff4b706e37cb339225e6d18f4d7cc"
          }}
          style={styles.ImageBackground_201_1728}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b920/838d/4082cf93d061fdb76c22102c840d2317"
          }}
          style={styles.ImageBackground_201_1729}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0026/23c7/23ac5890d8e9116a9dd0e282eaae7141"
          }}
          style={styles.ImageBackground_201_1730}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1344/64a1/a9c92c70ea088f3471d50e3f16368aa0"
          }}
          style={styles.ImageBackground_201_1731}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1adf/b28c/d2de7847fa79351cfcfc3829882f2914"
          }}
          style={styles.ImageBackground_201_1732}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b920/838d/4082cf93d061fdb76c22102c840d2317"
          }}
          style={styles.ImageBackground_201_1733}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dcf/f29f/49fa97d4bea69397adbd211cfaa00234"
          }}
          style={styles.ImageBackground_201_1734}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b920/838d/4082cf93d061fdb76c22102c840d2317"
          }}
          style={styles.ImageBackground_201_1735}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d222/e78f/d6ac7d6f70a93b6c5fb41eabd7d7b601"
          }}
          style={styles.ImageBackground_201_1736}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b0d/2512/7ffb65dd1a77f620202bab385d378e07"
          }}
          style={styles.ImageBackground_201_1737}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c443/d3b9/1bb0ea286932b24a9b4ff1d542b5ddbe"
          }}
          style={styles.ImageBackground_201_1738}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ec/53b1/67ee4320ca3b5dd3da3e99e60249ca5b"
          }}
          style={styles.ImageBackground_201_1739}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94b9/7480/0f72dd3c668e406d58ac029b6e4a8042"
          }}
          style={styles.ImageBackground_201_1740}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1803/d502/cb024e5653acb2993d69b63567441578"
          }}
          style={styles.ImageBackground_201_1741}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd8b/5376/f7fc0aece3ad6a7d71a92a4bb16258d1"
          }}
          style={styles.ImageBackground_201_1742}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b14/41ec/0f0242ee64b88b16bdcaf5e8f8c312c2"
          }}
          style={styles.ImageBackground_201_1743}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2477/323e/6d13f06b1c7ca33cb5d9d3a89db960f8"
          }}
          style={styles.ImageBackground_201_1744}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fed/374e/ee07563e59cecbe246900d8eb61aef36"
          }}
          style={styles.ImageBackground_201_1745}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb11/0f08/114cd534d537f603e24b87ee7cbb2db3"
          }}
          style={styles.ImageBackground_201_1746}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cb1/df77/50124b7dfd52f5a06dc0da982e32167c"
          }}
          style={styles.ImageBackground_201_1747}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
          }}
          style={styles.ImageBackground_201_1748}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc8/b386/f4409521fd41a86dcd76845e0d11cc32"
          }}
          style={styles.ImageBackground_201_1749}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc8/b386/f4409521fd41a86dcd76845e0d11cc32"
          }}
          style={styles.ImageBackground_201_1750}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cb1/df77/50124b7dfd52f5a06dc0da982e32167c"
          }}
          style={styles.ImageBackground_201_1751}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cb1/df77/50124b7dfd52f5a06dc0da982e32167c"
          }}
          style={styles.ImageBackground_201_1752}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fac6/be1e/980887ba8886bfac195c58b47ca2310d"
          }}
          style={styles.ImageBackground_201_1753}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a27/9057/ca6f46f7ac5511702b6d5b601b360fe2"
          }}
          style={styles.ImageBackground_201_1754}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fac6/be1e/980887ba8886bfac195c58b47ca2310d"
          }}
          style={styles.ImageBackground_201_1755}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a27/9057/ca6f46f7ac5511702b6d5b601b360fe2"
          }}
          style={styles.ImageBackground_201_1756}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/874f/d87e/13f6b8dbdf43e40e60da4971529fe48d"
          }}
          style={styles.ImageBackground_201_1757}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2fe/cefa/3de5b026a693e6ebee4eeadbe37caef6"
          }}
          style={styles.ImageBackground_201_1758}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1a9/9238/f8139882d9d2ccaaca7014c65865fea1"
          }}
          style={styles.ImageBackground_201_1759}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06b5/0b96/4609b4e9d1c0b216a7f8cec058e56e9b"
          }}
          style={styles.ImageBackground_201_1760}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c728/bd22/ed0b4bb4888b19453e97ec25eb0044a1"
          }}
          style={styles.ImageBackground_201_1761}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff9/159d/7a769ceecdad0026f5ff6e5e19f41377"
          }}
          style={styles.ImageBackground_201_1762}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7791/5926/f8a8be48a73b1e94f501096daf790bba"
          }}
          style={styles.ImageBackground_201_1763}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1dc5/abf1/819f9cdee46cccf2dc48115b65c1a605"
          }}
          style={styles.ImageBackground_201_1764}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0be4/afb8/441c3d22dac2a5e1d6b69c470ab81673"
          }}
          style={styles.ImageBackground_201_1765}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7c7/e4de/f9e8c1333bba8bd7db3a5f739d93eb3e"
          }}
          style={styles.ImageBackground_201_1766}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59b4/a98b/739b7e3acd743dbebae9d5e0637ac1c5"
          }}
          style={styles.ImageBackground_201_1767}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d33/2f63/0b7f242790dc81d56d9a00e45b9efcfd"
          }}
          style={styles.ImageBackground_201_1768}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78d2/879d/2b1eec4ab41a1e84b3cfdaa885c56ad6"
          }}
          style={styles.ImageBackground_201_1769}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f53/66e0/d3025ff62e39f5fe2080c5cb69b70f5f"
          }}
          style={styles.ImageBackground_201_1770}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c5/153f/31b7bd90e1c1c2c2512d9bcbf5bdf42d"
          }}
          style={styles.ImageBackground_201_1771}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9688/2d83/8ed2f6875657f66bfae43db51b7cc3e4"
          }}
          style={styles.ImageBackground_201_1772}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3463/7b3f/31f6bd3d9ee2d97b94456a1e071e5790"
          }}
          style={styles.ImageBackground_201_1773}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b700/6d1d/630dcdecceb29f9add5ed3dc7efd21bc"
          }}
          style={styles.ImageBackground_201_1774}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/575f/7768/2c91dc2d66e77ac9bc924f3b2b3a2148"
          }}
          style={styles.ImageBackground_201_1775}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d674/826c/4cc8214b5e21c68fa9c2e3bc74415fbe"
          }}
          style={styles.ImageBackground_201_1776}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a34c/18d3/ba5f62dacb6070f390133226cf7e7635"
          }}
          style={styles.ImageBackground_201_1777}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29a0/8922/ef1876a597753cce7db6be2907ef0575"
          }}
          style={styles.ImageBackground_201_1778}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b938/9936/f92eed7cf409a665a41751265580756c"
          }}
          style={styles.ImageBackground_201_1779}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8702/4065/1a44ab9c3ef38cfbb03c22c81522db6f"
          }}
          style={styles.ImageBackground_201_1780}
        />
        <View style={styles.View_201_1781}>
          <Text style={styles.Text_201_1781}>Photos</Text>
        </View>
      </View>
      <View style={styles.View_201_1782} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf79/3c2f/2104a2f98452e62854784c1d0120e899"
        }}
        style={styles.ImageBackground_201_1783}
      />
      <View style={styles.View_201_1828} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f42/6894/24f3b7df31e14b090c47f4d23b5ce0ef"
        }}
        style={styles.ImageBackground_201_1829}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad0/b4dc/f253b2fab38ac0ce2a1136a5b3ba9ee4"
        }}
        style={styles.ImageBackground_201_1830}
      />
      <View style={styles.View_201_1835} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ed/f0fd/bd25948a1a48e86b50fb80196ec17db8"
        }}
        style={styles.ImageBackground_201_1836}
      />
      <View style={styles.View_201_1839}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dc4/785d/fa8e2c24e74fd7ed81d7af058c2578b6"
          }}
          style={styles.ImageBackground_201_1840}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22e8/c9be/3f2a772115d6442f6b8562cecd6be969"
          }}
          style={styles.ImageBackground_201_1841}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f785/2738/a74033c1769c29c7fbc1248a5d2cea67"
          }}
          style={styles.ImageBackground_201_1842}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e38/46aa/2aa9e39e4dee757e1b834065d54f4bd9"
          }}
          style={styles.ImageBackground_201_1843}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a73c/1aa2/e7010f1c0061b1eb2b8aeec0534be958"
          }}
          style={styles.ImageBackground_201_1844}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/207a/f35f/10070e2da59bd442926341eb0455e2b7"
          }}
          style={styles.ImageBackground_201_1845}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba69/bb0d/acae1b8957d16c4af4519caab4169c37"
          }}
          style={styles.ImageBackground_201_1861}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c71/5d3a/9dd6e0787f7b5ae9b5de1684ae8c57d4"
          }}
          style={styles.ImageBackground_201_1870}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c71/5d3a/9dd6e0787f7b5ae9b5de1684ae8c57d4"
          }}
          style={styles.ImageBackground_201_1871}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c71/5d3a/9dd6e0787f7b5ae9b5de1684ae8c57d4"
          }}
          style={styles.ImageBackground_201_1872}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/486f/8f80/2f25413b5df8c2d8248d7609a2491cf6"
          }}
          style={styles.ImageBackground_201_1873}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/486f/8f80/2f25413b5df8c2d8248d7609a2491cf6"
          }}
          style={styles.ImageBackground_201_1874}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d9f/8a77/64d646bd3840b0899ab648f793e00b71"
          }}
          style={styles.ImageBackground_201_1875}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50b5/3873/aa27fbdb9f1e90ab9f4a47671f4d119f"
          }}
          style={styles.ImageBackground_201_1876}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253e/3f03/91c3ab2ca411e5357a514719684d336c"
          }}
          style={styles.ImageBackground_201_1877}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42de/d389/a639b34f4644ab8dad58f12d318c5192"
          }}
          style={styles.ImageBackground_201_1878}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f992/8598/5578a6ebd478e79053a44533b2092c6f"
          }}
          style={styles.ImageBackground_201_1879}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a8f/8b1f/b3b571fe87d6b945881f0124dfb58553"
          }}
          style={styles.ImageBackground_201_1880}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b638/e886/f06d1b00874ae4042c7766c727b8b7ef"
          }}
          style={styles.ImageBackground_201_1881}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f5a/5090/29656646f48ed748e1bde7e8bd369df7"
          }}
          style={styles.ImageBackground_201_1882}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aad/f8d4/e19a691ba5ee9bafef603e37c8111990"
          }}
          style={styles.ImageBackground_201_1883}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6adf/afbe/c884269502b6262244ab2be9f743aab0"
          }}
          style={styles.ImageBackground_201_1884}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c10c/8144/c3eeff5d16cdb1de7eddd734615dc05a"
          }}
          style={styles.ImageBackground_201_1885}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c452/fbe5/a522e7e7116857861c44a2f41b0808a7"
          }}
          style={styles.ImageBackground_201_1886}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d49/6a33/c2b437e23e8804cf01ddb8f58e9c4f09"
          }}
          style={styles.ImageBackground_201_1887}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5700/cf39/73e42f17aaa91061f9180d727e0efff7"
          }}
          style={styles.ImageBackground_201_1888}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aad/f8d4/e19a691ba5ee9bafef603e37c8111990"
          }}
          style={styles.ImageBackground_201_1889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6adf/afbe/c884269502b6262244ab2be9f743aab0"
          }}
          style={styles.ImageBackground_201_1890}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05e/4187/51e2e3dec9aec9d383b0e8951bdb8d32"
          }}
          style={styles.ImageBackground_201_1891}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c452/fbe5/a522e7e7116857861c44a2f41b0808a7"
          }}
          style={styles.ImageBackground_201_1892}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b56/64cf/80acb25d1d7bf5823a26a5f984e5c10d"
          }}
          style={styles.ImageBackground_201_1893}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b56/64cf/80acb25d1d7bf5823a26a5f984e5c10d"
          }}
          style={styles.ImageBackground_201_1894}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b56/64cf/80acb25d1d7bf5823a26a5f984e5c10d"
          }}
          style={styles.ImageBackground_201_1895}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d5d/692c/c1d0ca0e24335b522e730377ba93a926"
          }}
          style={styles.ImageBackground_201_1896}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8d2/64f2/5d3ebb18e9cd590b186656274470a2ba"
          }}
          style={styles.ImageBackground_201_1897}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
          }}
          style={styles.ImageBackground_201_1898}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/804e/8740/f5a1f48a23dbf96a65fa13c47311e895"
          }}
          style={styles.ImageBackground_201_1899}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44aa/9853/d29e090b082035646a384209fd8b520c"
          }}
          style={styles.ImageBackground_201_1900}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a879/5e5f/752d272423f524a0ce4320599c6fb976"
          }}
          style={styles.ImageBackground_201_1901}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
          }}
          style={styles.ImageBackground_201_1902}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/804e/8740/f5a1f48a23dbf96a65fa13c47311e895"
          }}
          style={styles.ImageBackground_201_1903}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fbc/3d6a/841d069032126eb368133e4bcb144e99"
          }}
          style={styles.ImageBackground_201_1904}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5065/95ee/3d5fa42e02f9721fa7f162af45b70d6f"
          }}
          style={styles.ImageBackground_201_1905}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a34c/973f/1a7c9212f8cde1d01e62516b4b1fadb5"
          }}
          style={styles.ImageBackground_201_1906}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d43/3b40/b723e8a7f02eb544c1b7084a87b6c6e8"
          }}
          style={styles.ImageBackground_201_1907}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12c4/9906/b0c21b753a2250a920140caf422b6ad6"
          }}
          style={styles.ImageBackground_201_1908}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0038/efab/7d47d2cdd4e1fa2999751feb62ce75ac"
          }}
          style={styles.ImageBackground_201_1909}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05c1/2348/c815ed07af0608973befea20aa6e84a9"
          }}
          style={styles.ImageBackground_201_1910}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/189f/15e5/b60eae328ff2ff78bca11795ef18c2ff"
          }}
          style={styles.ImageBackground_201_1911}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/271c/a262/05c153828896d6be03781e7dc2e427b8"
          }}
          style={styles.ImageBackground_201_1912}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1855/38df/ea3ded196b7b59f70ab34b92af6edd3d"
          }}
          style={styles.ImageBackground_201_1913}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/219a/a316/7f8fb73abcb32733b545221111fdbf5f"
          }}
          style={styles.ImageBackground_201_1914}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ff8/96b7/46c1c5bbba6c445f0a4857e250e541bd"
          }}
          style={styles.ImageBackground_201_1915}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/580d/4406/1565c6e8ecf3225b5de860c67f30d191"
          }}
          style={styles.ImageBackground_201_1916}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0ba/cabe/6d07a28d41360d0fe2be49dd01a83992"
          }}
          style={styles.ImageBackground_201_1917}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8f6/ce85/30bb569d565431b01459f700c3245a3b"
          }}
          style={styles.ImageBackground_201_1918}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/452f/394d/38299d0540020693ee1159d74cd932cd"
          }}
          style={styles.ImageBackground_201_1919}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96ee/8288/5db101695266c6a4d5e9f377615e8812"
          }}
          style={styles.ImageBackground_201_1920}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e29/cabf/32f21c90f3e398d9d1b8f594de5cda33"
          }}
          style={styles.ImageBackground_201_1921}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad9/99bd/888eeef85855b072c9145fa4c62267df"
          }}
          style={styles.ImageBackground_201_1922}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d2b/c490/0c5ad47c25abce995e4b399020bb8268"
          }}
          style={styles.ImageBackground_201_1923}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38ec/ff15/7fb356b7c78c18cfe63ee661d2e253b1"
          }}
          style={styles.ImageBackground_201_1924}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d6d/e606/3a49dbf29a8f4dfc4109ecd2549840d6"
          }}
          style={styles.ImageBackground_201_1925}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d6d/e606/3a49dbf29a8f4dfc4109ecd2549840d6"
          }}
          style={styles.ImageBackground_201_1926}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d6d/e606/3a49dbf29a8f4dfc4109ecd2549840d6"
          }}
          style={styles.ImageBackground_201_1927}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/587f/94d4/b5c712607d5ce1d9355f3050d6334cc5"
          }}
          style={styles.ImageBackground_201_1928}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35c1/6f4d/91c101082a2b2934b00b75675fc258cc"
          }}
          style={styles.ImageBackground_201_1929}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12a9/adbf/3cc521b3a9114c05dc19a39d5c1deeed"
          }}
          style={styles.ImageBackground_201_1930}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c311/332c/882e9836a08cf7270bf5438be29bbae6"
          }}
          style={styles.ImageBackground_201_1931}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a50a/7b94/444f323c716513a67ea389a1df24b5ac"
          }}
          style={styles.ImageBackground_201_1932}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2f5/db4f/cad7f2ca8b6fff82d89ab394767302e2"
          }}
          style={styles.ImageBackground_201_1933}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672d/dac5/f61bf0c9b9fb2ca5310c0ae2eb1f7e54"
          }}
          style={styles.ImageBackground_201_1934}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3e/0991/22298ad1fff73eae2837fc1aa2933368"
          }}
          style={styles.ImageBackground_201_1935}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f77b/e0e8/9518a5dc8560c5552cceb14298cbe48d"
          }}
          style={styles.ImageBackground_201_1936}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eea/1d38/b7a7eea1846bd50b4e1cc4bbe499c5af"
          }}
          style={styles.ImageBackground_201_1937}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/584b/a27d/b2186f417b629793c765a8ac692f7d3f"
          }}
          style={styles.ImageBackground_201_1938}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4da3/0a97/65c971399a01b4c890e369d8f776de99"
          }}
          style={styles.ImageBackground_201_1939}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bfd/fecc/b621cdf084a2525be70d53dbb07535ed"
          }}
          style={styles.ImageBackground_201_1940}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4f0/83cc/c4426523f13083f1ddb22d397fbc2737"
          }}
          style={styles.ImageBackground_201_1941}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c2/d4f2/1ad37258bf60d41c130ba8dc56944eb7"
          }}
          style={styles.ImageBackground_201_1942}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c89/44b3/d1bb766fad24ef913e36caeef82ea317"
          }}
          style={styles.ImageBackground_201_1943}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97c4/85c4/398835d0ae0fd882da57fca7f8be7fc0"
          }}
          style={styles.ImageBackground_201_1944}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95fe/9087/1b0ea0fe3f67f4e8ed24ef8e8ba2f1b1"
          }}
          style={styles.ImageBackground_201_1945}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09ab/6875/34a2f3e8c485ff0c403865d5655e1994"
          }}
          style={styles.ImageBackground_201_1946}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7568/5583/bff25ffb06519e6ddf9d3151bb72a660"
          }}
          style={styles.ImageBackground_201_1956}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a50/0647/4339dc21ef4f75e3434e6de5325d93bb"
          }}
          style={styles.ImageBackground_201_1957}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ac3/2472/ca75d6a273882846a6610a4d44c28871"
          }}
          style={styles.ImageBackground_201_1958}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b1a/c8ed/53e498b4638d460624e2a90979989645"
          }}
          style={styles.ImageBackground_201_1959}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18e1/8a17/620b1d43bec0c7b6b76614875f2b785b"
          }}
          style={styles.ImageBackground_201_1960}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10f2/c40d/9e733ec6f79a43f60b9b87849eb197b6"
          }}
          style={styles.ImageBackground_201_1961}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/118f/21bb/177f44e87cf6876a88282a3bc3f3f758"
          }}
          style={styles.ImageBackground_201_1962}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89ce/f9ea/b4db0b41cfcd5413383bb12592f344b0"
          }}
          style={styles.ImageBackground_201_1963}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a676/b2d4/633e9430796e3c45964006354c215c3d"
          }}
          style={styles.ImageBackground_201_1964}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d08c/d788/9a9f2fb5f2f8641fb1ac157f72af462c"
          }}
          style={styles.ImageBackground_201_1965}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95ab/4dbb/878037f99da9bac1f52bbd924feaa9f1"
          }}
          style={styles.ImageBackground_201_1966}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3066/d92d/7d378b81cf83e8ecb430d3c878d2306a"
          }}
          style={styles.ImageBackground_201_1967}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e795/6260/bc628c56cc3793a87675a0430f808415"
          }}
          style={styles.ImageBackground_201_1968}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f2e/9ba9/a8aa7e45b5a3bb5d6ecaddfd11986358"
          }}
          style={styles.ImageBackground_201_1969}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c142/d920/a4478adc33432d7f939e42053016af2d"
          }}
          style={styles.ImageBackground_201_1970}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5be5/2750/92936a93928ce42ee4cb180ed0241257"
          }}
          style={styles.ImageBackground_201_1971}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/596d/f036/5799f5c887dadd1d51384172278d52d9"
          }}
          style={styles.ImageBackground_201_1972}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1973}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1974}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1975}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1976}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1977}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1978}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1979}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1980}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1981}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1982}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1983}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1984}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1985}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1986}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1987}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1988}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1989}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1990}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1991}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1992}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1993}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1994}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1995}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1996}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1997}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1998}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_1999}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2000}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2001}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2002}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2003}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2004}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2005}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2006}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2007}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2008}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2009}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2010}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2011}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2012}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2013}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2014}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2015}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2016}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2017}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2018}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2019}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2020}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2021}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2022}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2023}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2024}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_201_2025}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4b8/9e31/95b617fc976e1ea39b0a7ca07e54290f"
          }}
          style={styles.ImageBackground_201_2026}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0097/9dd1/b846c0cc04cd86f4b7b0f3f97970ed97"
          }}
          style={styles.ImageBackground_201_2027}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd3c/6daa/1dc7f5ceefd512123c624a0811568136"
          }}
          style={styles.ImageBackground_201_2028}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f289/7b61/1add8aaaa35614c11e439b3de7806ed2"
          }}
          style={styles.ImageBackground_201_2029}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8def/f20b/36db2a9fd693f6d99589aae47031de09"
          }}
          style={styles.ImageBackground_201_2030}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ca/0d58/b2543e0f072c32dc31b9e7a9db89ba5b"
          }}
          style={styles.ImageBackground_201_2031}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98d8/ac9b/f567e8c8a1fa085381c1a52585a205d1"
          }}
          style={styles.ImageBackground_201_2032}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30e3/1d1b/bc265e8354d03165c8e198cb132c06ed"
          }}
          style={styles.ImageBackground_201_2033}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41fd/d2a6/1a2b89228e79e66885be63a9dfdd8e90"
          }}
          style={styles.ImageBackground_201_2034}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8cb/16db/091c9346c675b07b3077eec6e81b07db"
          }}
          style={styles.ImageBackground_201_2035}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2872/6b12/437b55e8ccfd8099d1e064f3c91f6210"
          }}
          style={styles.ImageBackground_201_2036}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/086e/4d3b/981104ac94bc51071f2aca4fbe99c418"
          }}
          style={styles.ImageBackground_201_2037}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb50/c415/b8e12123b7b0802804b2832121e364ac"
          }}
          style={styles.ImageBackground_201_2038}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d7e/a3fd/571e7dd5a297ffdaac34ebae076df339"
          }}
          style={styles.ImageBackground_201_2039}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36aa/373d/62f659d84a2317d8d73a796efcb8129a"
          }}
          style={styles.ImageBackground_201_2040}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7dc/7cd1/827c228a3f47b37fd9dcb01652d57bbb"
          }}
          style={styles.ImageBackground_201_2041}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9b5/fc10/01b26e5e5322c3772c8d5508bd32d7a4"
          }}
          style={styles.ImageBackground_201_2042}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58e9/6814/4b01ced7e9ca5e701a68c309628c9318"
          }}
          style={styles.ImageBackground_201_2043}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fed9/3179/9f19921a57bc646b6cccdf5fc6f25742"
          }}
          style={styles.ImageBackground_201_2047}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26d3/1505/224440ab005b60ef837f253e33776b6c"
          }}
          style={styles.ImageBackground_201_2048}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aa4/4094/d2eb1cf3a6d94b142b31266420b43b66"
          }}
          style={styles.ImageBackground_201_2049}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e392/0b2b/efe4f1b34cbd1d6eef80b79139e64305"
          }}
          style={styles.ImageBackground_201_2050}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a85/082e/e7a2ed5112042281c1db9e3071e25b38"
          }}
          style={styles.ImageBackground_201_2051}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aa4/4094/d2eb1cf3a6d94b142b31266420b43b66"
          }}
          style={styles.ImageBackground_201_2052}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e392/0b2b/efe4f1b34cbd1d6eef80b79139e64305"
          }}
          style={styles.ImageBackground_201_2053}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b470/3317/15e2f76014bf42208ba63d29ab99de6a"
          }}
          style={styles.ImageBackground_201_2054}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a73/c1c8/e7181e4fefe32cf7969724bdef2334e3"
          }}
          style={styles.ImageBackground_201_2055}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a00a/cce8/fb9d064443f8b4b51ab67723c87d8a6a"
          }}
          style={styles.ImageBackground_201_2056}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7600/7046/e1aba11bb84b756268ac1d6cea9ce8b4"
          }}
          style={styles.ImageBackground_201_2057}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b78/30ef/d71901df0ed510bfb4f0ded22f41b05c"
          }}
          style={styles.ImageBackground_201_2058}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bce5/84d0/b1a3058a97c069df605f39871b06df6d"
          }}
          style={styles.ImageBackground_201_2059}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b21a/63b9/d733dc4569247536ff773fc73c1b1a98"
          }}
          style={styles.ImageBackground_201_2060}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a268/734e/23d897763ee93433ca69e9a95f5fab8a"
          }}
          style={styles.ImageBackground_201_2061}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cef7/ed9b/7c5546e09b533050bee14dec4b71d2ea"
          }}
          style={styles.ImageBackground_201_2062}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c8d/6bc8/56654ebe91e05913a209c91d23286521"
          }}
          style={styles.ImageBackground_201_2063}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ac/8dee/baee356baccfaedcb9730e6181368b89"
          }}
          style={styles.ImageBackground_201_2064}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50cc/0670/6838915234358d675dc982910eef7d95"
          }}
          style={styles.ImageBackground_201_2065}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb06/11fa/67423e675b37ce1dd6f80557426a2cf1"
          }}
          style={styles.ImageBackground_201_2066}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/676e/1656/a72f05ae13cf3835b2dee179a9c6358e"
          }}
          style={styles.ImageBackground_201_2067}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58ba/716f/0359361d71bf105b6d5f150cfcfb0759"
          }}
          style={styles.ImageBackground_201_2068}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3298/c13f/b3b9ca1b067ce1c4a79740a10c9c6be1"
          }}
          style={styles.ImageBackground_201_2069}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0310/aede/b50580cb0b48ea196cf2ebd0668d52d8"
          }}
          style={styles.ImageBackground_201_2070}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a099/d6bf/94fef1c63e3da6bb476a397f84c8eb32"
          }}
          style={styles.ImageBackground_201_2071}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b778/e687/533ab8ac84f1bb44ed001605989f9992"
          }}
          style={styles.ImageBackground_201_2072}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf87/31ec/285fd9c93d217e9f1f637df4d0a96fad"
          }}
          style={styles.ImageBackground_201_2073}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9190/ff9e/c6908278329b6c6e401919f1e16de9f8"
          }}
          style={styles.ImageBackground_201_2074}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54de/c543/34035c1a3d2c0a2b9f6a716c4ff04c47"
          }}
          style={styles.ImageBackground_201_2075}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53b0/6e59/cbcbe294ec8af40698eefbd441d59923"
          }}
          style={styles.ImageBackground_201_2084}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a89d/26ad/7b8f68cfef98f73d8949c36c5ea789f3"
          }}
          style={styles.ImageBackground_201_2085}
        />
        <View style={styles.View_201_2086}>
          <Text style={styles.Text_201_2086}>Memory Lane</Text>
        </View>
      </View>
      <View style={styles.View_201_2087}>
        <Text style={styles.Text_201_2087}>Journal</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a42/24fe/a49c231c146d1f9b918e64b01987eede"
        }}
        style={styles.ImageBackground_201_2088}
      />
      <View style={styles.View_201_2114}>
        <Text style={styles.Text_201_2114}>For you</Text>
      </View>
      <View style={styles.View_201_2115}>
        <Text style={styles.Text_201_2115}>For you</Text>
      </View>
      <View style={styles.View_201_2116}>
        <Text style={styles.Text_201_2116}>Events</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eac/b9a9/cb6dfc8bd170ff3e1437a90e0a86ec24"
        }}
        style={styles.ImageBackground_201_2117}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c210/6dc3/c7cdcd5e8cefd742814d8334e3e0a8ed"
        }}
        style={styles.ImageBackground_201_2120}
      />
      <View style={styles.View_201_2122}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b942/01fa/9be5b9f97caacefb4d12ad95a5564774"
          }}
          style={styles.ImageBackground_201_2123}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67b9/2080/c7633f4229bfdf62f936523be9c1e058"
        }}
        style={styles.ImageBackground_214_0}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_201_1705: {
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
  View_201_1706: {
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
  View_201_1707: {
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
  ImageBackground_201_1708: {
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
  View_201_1709: {
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
  View_I201_1709_4_8: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I201_1709_4_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I201_1709_4_3: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    top: 0
  },
  ImageBackground_I201_1709_4_5: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291.6221923828125,
    top: 0
  },
  ImageBackground_I201_1709_4_7: {
    flexGrow: 1,
    width: 20,
    height: 14.466666221618652,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.5555419921875,
    top: 0
  },
  ImageBackground_201_1710: {
    width: 166,
    height: 199,
    top: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -75
  },
  ImageBackground_201_1711: {
    width: 40,
    height: 40,
    top: 691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224
  },
  ImageBackground_201_1712: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82
  },
  ImageBackground_201_1713: {
    width: 92.99999237060547,
    height: 111.48794555664062,
    top: -21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -46
  },
  ImageBackground_201_1714: {
    width: 84,
    height: 97,
    top: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287
  },
  ImageBackground_201_1715: {
    width: 35,
    height: 35,
    top: 533,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228
  },
  ImageBackground_201_1716: {
    width: 106,
    height: 114,
    top: 750,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -45
  },
  View_201_1717: {
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
  View_201_1718: {
    width: 182,
    minWidth: 182,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 99
  },
  Text_201_1718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_201_1719: {
    width: 340,
    minWidth: 340,
    height: 193,
    minHeight: 193,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 165
  },
  View_201_1720: {
    width: 164,
    minWidth: 164,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 379,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_201_1721: {
    width: 172,
    minWidth: 172,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 584,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_201_1722: {
    width: 152,
    minWidth: 152,
    height: 205,
    minHeight: 205,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 519,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_201_1723: {
    width: 148.9481658935547,
    minWidth: 148.9481658935547,
    height: 100.9344482421875,
    minHeight: 100.9344482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 616,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_201_1724: {
    width: 4.712706089019775,
    height: 14.192500114440918,
    top: 86.5452880859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140.41461181640625
  },
  ImageBackground_201_1725: {
    width: 5.314083099365234,
    height: 5.314078330993652,
    top: 82.21356201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 143.4613037109375
  },
  ImageBackground_201_1726: {
    width: 3.0574264526367188,
    height: 9.207450866699219,
    top: 91.53033447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140.83416748046875
  },
  ImageBackground_201_1727: {
    width: 3.44749116897583,
    height: 3.44749116897583,
    top: 88.7203369140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142.8106689453125
  },
  ImageBackground_201_1728: {
    width: 3.570492744445801,
    height: 9.0391206741333,
    top: 91.6300048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137.21636962890625
  },
  ImageBackground_201_1729: {
    width: 3.44749116897583,
    height: 3.44749116897583,
    top: 88.59930419921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 135.4910888671875
  },
  ImageBackground_201_1730: {
    width: 4.712722301483154,
    height: 14.192523002624512,
    top: 86.5452880859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.267822265625
  },
  ImageBackground_201_1731: {
    width: 5.314079284667969,
    height: 5.314078330993652,
    top: 82.21356201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.619873046875
  },
  ImageBackground_201_1732: {
    width: 3.0574228763580322,
    height: 9.207450866699219,
    top: 91.53033447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.50360107421875
  },
  ImageBackground_201_1733: {
    width: 3.44749116897583,
    height: 3.44749116897583,
    top: 88.7203369140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.13702392578125
  },
  ImageBackground_201_1734: {
    width: 3.5704822540283203,
    height: 9.0391206741333,
    top: 91.6300048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.6083984375
  },
  ImageBackground_201_1735: {
    width: 3.44748854637146,
    height: 3.44749116897583,
    top: 88.59930419921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.45660400390625
  },
  ImageBackground_201_1736: {
    width: 15.161063194274902,
    height: 35.6341667175293,
    top: 63.6175537109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115.7288818359375
  },
  ImageBackground_201_1737: {
    width: 128.4669189453125,
    height: 0.4130362272262573,
    top: 100.5213623046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.48126220703125
  },
  ImageBackground_201_1738: {
    width: 23.127063751220703,
    height: 9.61077880859375,
    top: 51.9212646484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.7052001953125
  },
  ImageBackground_201_1739: {
    width: 4.856499671936035,
    height: 2.4282498359680176,
    top: 58.9718017578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122.31512451171875
  },
  ImageBackground_201_1740: {
    width: 69.7254638671875,
    height: 39.54578399658203,
    top: 61.22662353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.42474365234375
  },
  ImageBackground_201_1741: {
    width: 8.49887466430664,
    height: 2.9485890865325928,
    top: 55.7630615234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96.03802490234375
  },
  ImageBackground_201_1742: {
    width: 26.36387062072754,
    height: 26.363861083984375,
    top: 67.8175048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.10546875
  },
  ImageBackground_201_1743: {
    width: 17.344654083251953,
    height: 17.344642639160156,
    top: 72.3271484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 91.6151123046875
  },
  ImageBackground_201_1744: {
    width: 13.181928634643555,
    height: 13.181928634643555,
    top: 74.408447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93.69647216796875
  },
  ImageBackground_201_1745: {
    width: 4.946631908416748,
    height: 8.67231273651123,
    top: 76.66326904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.0806884765625
  },
  ImageBackground_201_1746: {
    width: 8.672321319580078,
    height: 4.509606838226318,
    top: 57.06390380859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120.4072265625
  },
  ImageBackground_201_1747: {
    width: 3.4689316749572754,
    height: 3.4689292907714844,
    top: 62.9610595703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68.02642822265625
  },
  ImageBackground_201_1748: {
    width: 1.734464168548584,
    height: 1.734464168548584,
    top: 63.82830810546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68.89361572265625
  },
  ImageBackground_201_1749: {
    width: 1.734464168548584,
    height: 1.734464168548584,
    top: 63.82830810546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73.40325927734375
  },
  ImageBackground_201_1750: {
    width: 1.734464168548584,
    height: 1.734464168548584,
    top: 63.82830810546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.912841796875
  },
  ImageBackground_201_1751: {
    width: 3.4689316749572754,
    height: 3.4689292907714844,
    top: 62.9610595703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72.5360107421875
  },
  ImageBackground_201_1752: {
    width: 3.4689316749572754,
    height: 3.4689292907714844,
    top: 62.9610595703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.045654296875
  },
  ImageBackground_201_1753: {
    width: 22.548036575317383,
    height: 0.3468928337097168,
    top: 76.29461669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.59814453125
  },
  ImageBackground_201_1754: {
    width: 21.988059997558594,
    height: 0.3468928337097168,
    top: 83.27618408203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.59814453125
  },
  ImageBackground_201_1755: {
    width: 22.548036575317383,
    height: 0.3468928337097168,
    top: 76.29461669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112.4287109375
  },
  ImageBackground_201_1756: {
    width: 21.988059997558594,
    height: 0.3468928337097168,
    top: 83.27618408203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112.94903564453125
  },
  ImageBackground_201_1757: {
    width: 11.291980743408203,
    height: 10.23514175415039,
    top: 32.61590576171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.0400390625
  },
  ImageBackground_201_1758: {
    width: 4.559558391571045,
    height: 8.770487785339355,
    top: 89.86968994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.722412109375
  },
  ImageBackground_201_1759: {
    width: 7.153971195220947,
    height: 4.522904872894287,
    top: 96.1358642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32.21185302734375
  },
  ImageBackground_201_1760: {
    width: 3.1383440494537354,
    height: 8.202107429504395,
    top: 90.48211669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.70904541015625
  },
  ImageBackground_201_1761: {
    width: 6.683017730712891,
    height: 2.5820798873901367,
    top: 98.07659912109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50.61962890625
  },
  ImageBackground_201_1762: {
    width: 23.643762588500977,
    height: 39.33872604370117,
    top: 55.99072265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.49530029296875
  },
  ImageBackground_201_1763: {
    width: 8.520047187805176,
    height: 8.520044326782227,
    top: 35.326904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46.13726806640625
  },
  ImageBackground_201_1764: {
    width: 11.531397819519043,
    height: 16.17914390563965,
    top: 46.32867431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44.73944091796875
  },
  ImageBackground_201_1765: {
    width: 4.683053016662598,
    height: 2.601696491241455,
    top: 45.2327880859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47.8870849609375
  },
  ImageBackground_201_1766: {
    width: 14.203577041625977,
    height: 17.63979721069336,
    top: 48.82122802734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.50079345703125
  },
  ImageBackground_201_1767: {
    width: 7.280612468719482,
    height: 7.878457546234131,
    top: 47.68243408203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.51336669921875
  },
  ImageBackground_201_1768: {
    width: 14.827277183532715,
    height: 9.887561798095703,
    top: 45.0596923828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.6876220703125
  },
  ImageBackground_201_1769: {
    width: 7.9192399978637695,
    height: 6.940842628479004,
    top: 47.69482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.97998046875
  },
  ImageBackground_201_1770: {
    width: 3.093600273132324,
    height: 2.3184545040130615,
    top: 31.91058349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50.98187255859375
  },
  ImageBackground_201_1771: {
    width: 9.122039794921875,
    height: 7.017026424407959,
    top: 34.55322265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46.4305419921875
  },
  ImageBackground_201_1772: {
    width: 17.835269927978516,
    height: 15.023226737976074,
    top: 28.7979736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.3167724609375
  },
  ImageBackground_201_1773: {
    width: 37.55948257446289,
    height: 22.212596893310547,
    top: 24.28253173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_201_1774: {
    width: 10.048510551452637,
    height: 10.04850959777832,
    top: 28.12567138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.77044677734375
  },
  ImageBackground_201_1775: {
    width: 24.212726593017578,
    height: 14.174026489257812,
    top: 28.47784423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.99884033203125
  },
  ImageBackground_201_1776: {
    width: 2.153949499130249,
    height: 2.1539502143859863,
    top: 26.7056884765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.55780029296875
  },
  ImageBackground_201_1777: {
    width: 29.34758186340332,
    height: 17.356096267700195,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.6240234375
  },
  ImageBackground_201_1778: {
    width: 7.851531028747559,
    height: 7.851531028747559,
    top: 3.0029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.695556640625
  },
  ImageBackground_201_1779: {
    width: 18.91892433166504,
    height: 11.075055122375488,
    top: 3.27813720703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.8740234375
  },
  ImageBackground_201_1780: {
    width: 1.6830146312713623,
    height: 1.683014988899231,
    top: 1.89337158203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.62261962890625
  },
  View_201_1781: {
    width: 99,
    top: -10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66
  },
  Text_201_1781: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_1782: {
    width: 161,
    minWidth: 161,
    height: 186,
    minHeight: 186,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 378,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_201_1783: {
    width: 131,
    height: 102,
    top: 406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 220
  },
  View_201_1828: {
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
  ImageBackground_201_1829: {
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
  ImageBackground_201_1830: {
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
  View_201_1835: {
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
  ImageBackground_201_1836: {
    width: 30,
    height: 30,
    top: 107,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334
  },
  View_201_1839: {
    width: 246.52503967285156,
    minWidth: 246.52503967285156,
    height: 180,
    minHeight: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70,
    top: 179,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_201_1840: {
    width: 212.67848205566406,
    height: 24.673227310180664,
    top: 158.92510986328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.13323974609375
  },
  ImageBackground_201_1841: {
    width: 218.59523010253906,
    height: 44.47630310058594,
    top: 92.87677001953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.66131591796875
  },
  ImageBackground_201_1842: {
    width: 237.43777465820312,
    height: 29.5115966796875,
    top: -0.001312255859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.96734619140625
  },
  ImageBackground_201_1843: {
    width: 236.68646240234375,
    height: 35.66749572753906,
    top: 59.424346923828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.00335693359375
  },
  ImageBackground_201_1844: {
    width: 245.95518493652344,
    height: 29.450267791748047,
    top: 29.656829833984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5704345703125
  },
  ImageBackground_201_1845: {
    width: 42.43447494506836,
    height: 47.56022644042969,
    top: 80.66445922851562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129.5162353515625
  },
  ImageBackground_201_1861: {
    width: 33.33755874633789,
    height: 56.95620346069336,
    top: 48.54150390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129.21868896484375
  },
  ImageBackground_201_1870: {
    width: 8.012916564941406,
    height: 1.1009494066238403,
    top: 152.07476806640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84.90374755859375
  },
  ImageBackground_201_1871: {
    width: 8.012925148010254,
    height: 1.100935935974121,
    top: 153.63067626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69.5570068359375
  },
  ImageBackground_201_1872: {
    width: 8.012925148010254,
    height: 1.100935935974121,
    top: 151.52426147460938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.480224609375
  },
  ImageBackground_201_1873: {
    width: 5.695613861083984,
    height: 0.7813198566436768,
    top: 158.2208251953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76.857421875
  },
  ImageBackground_201_1874: {
    width: 5.695613861083984,
    height: 0.7813198566436768,
    top: 157.8302001953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60.92926025390625
  },
  ImageBackground_201_1875: {
    width: 19.318628311157227,
    height: 30.41961669921875,
    top: 123.63717651367188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.4114990234375
  },
  ImageBackground_201_1876: {
    width: 13.3921537399292,
    height: 27.35936164855957,
    top: 126.69741821289062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60.62744140625
  },
  ImageBackground_201_1877: {
    width: 1.6964313983917236,
    height: 3.8466508388519287,
    top: 128.55316162109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68.6041259765625
  },
  ImageBackground_201_1878: {
    width: 3.0897510051727295,
    height: 0.8708372712135315,
    top: 129.04290771484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.29443359375
  },
  ImageBackground_201_1879: {
    width: 3.0808701515197754,
    height: 0.783178448677063,
    top: 136.58428955078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68.835693359375
  },
  ImageBackground_201_1880: {
    width: 1.8711671829223633,
    height: 0.7416370511054993,
    top: 139.6356201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73.02191162109375
  },
  ImageBackground_201_1881: {
    width: 9.926810264587402,
    height: 13.100582122802734,
    top: 141.10284423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63.7764892578125
  },
  ImageBackground_201_1882: {
    width: 8.250429153442383,
    height: 10.456751823425293,
    top: 143.65106201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.3641357421875
  },
  ImageBackground_201_1883: {
    width: 1.6114654541015625,
    height: 0,
    top: 145.2138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64.729248046875
  },
  ImageBackground_201_1884: {
    width: 2.5281739234924316,
    height: 0.10876051336526871,
    top: 148.87857055664062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66.660400390625
  },
  ImageBackground_201_1885: {
    width: 0.2752339839935303,
    height: 1.3162485361099243,
    top: 145.9462890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.92333984375
  },
  ImageBackground_201_1886: {
    width: 0.048825718462467194,
    height: 1.1963926553726196,
    top: 149.9527587890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70.83782958984375
  },
  ImageBackground_201_1887: {
    width: 9.929031372070312,
    height: 13.100582122802734,
    top: 141.10284423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73.50799560546875
  },
  ImageBackground_201_1888: {
    width: 8.232666969299316,
    height: 10.456751823425293,
    top: 143.65106201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73.614501953125
  },
  ImageBackground_201_1889: {
    width: 1.6114654541015625,
    height: 0,
    top: 145.2138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80.87054443359375
  },
  ImageBackground_201_1890: {
    width: 2.525958776473999,
    height: 0.10876051336526871,
    top: 148.87857055664062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 78.0250244140625
  },
  ImageBackground_201_1891: {
    width: 0.2730121612548828,
    height: 1.3162485361099243,
    top: 145.9462890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79.01495361328125
  },
  ImageBackground_201_1892: {
    width: 0.0488324910402298,
    height: 1.1963926553726196,
    top: 149.9527587890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76.3270263671875
  },
  ImageBackground_201_1893: {
    width: 4.010392665863037,
    height: 2.4147021770477295,
    top: 155.51974487304688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61.81842041015625
  },
  ImageBackground_201_1894: {
    width: 4.0099568367004395,
    height: 2.4147021770477295,
    top: 150.1282958984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86.893798828125
  },
  ImageBackground_201_1895: {
    width: 4.009949207305908,
    height: 2.4147021770477295,
    top: 155.51974487304688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 78.53680419921875
  },
  ImageBackground_201_1896: {
    width: 2.6834237575531006,
    height: 4.374927997589111,
    top: 146.43228149414062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.021240234375
  },
  ImageBackground_201_1897: {
    width: 2.653059482574463,
    height: 4.377414703369141,
    top: 146.43228149414062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.021240234375
  },
  ImageBackground_201_1898: {
    width: 0.12194062024354935,
    height: 0.6020277142524719,
    top: 147.16802978515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.2303466796875
  },
  ImageBackground_201_1899: {
    width: 0.5565891265869141,
    height: 0.33378514647483826,
    top: 147.45281982421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.75439453125
  },
  ImageBackground_201_1900: {
    width: 2.6807010173797607,
    height: 4.374927997589111,
    top: 146.43228149414062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.58624267578125
  },
  ImageBackground_201_1901: {
    width: 2.6504642963409424,
    height: 4.377414703369141,
    top: 146.43228149414062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.61651611328125
  },
  ImageBackground_201_1902: {
    width: 0.12415994703769684,
    height: 0.6020277142524719,
    top: 147.16802978515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.93609619140625
  },
  ImageBackground_201_1903: {
    width: 0.5559088587760925,
    height: 0.33378514647483826,
    top: 147.45281982421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.986083984375
  },
  ImageBackground_201_1904: {
    width: 5.584103584289551,
    height: 2.835094690322876,
    top: 149.90594482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.30535888671875
  },
  ImageBackground_201_1905: {
    width: 5.5855712890625,
    height: 2.024777412414551,
    top: 150.70748901367188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.303955078125
  },
  ImageBackground_201_1906: {
    width: 9.537738800048828,
    height: 6.367611408233643,
    top: 123.222412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.07373046875
  },
  ImageBackground_201_1907: {
    width: 46.914302825927734,
    height: 82.01702117919922,
    top: 44.37957763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103.05609130859375
  },
  ImageBackground_201_1908: {
    width: 14.673219680786133,
    height: 19.912981033325195,
    top: 60.919189453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 136.2960205078125
  },
  ImageBackground_201_1909: {
    width: 13.218183517456055,
    height: 11.010078430175781,
    top: 67.01943969726562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120.548828125
  },
  ImageBackground_201_1910: {
    width: 5.2983927726745605,
    height: 13.846807479858398,
    top: 112.53271484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.75811767578125
  },
  ImageBackground_201_1911: {
    width: 29.520187377929688,
    height: 20.591594696044922,
    top: 104.72061157226562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109.42425537109375
  },
  ImageBackground_201_1912: {
    width: 5.444786071777344,
    height: 3.9067022800445557,
    top: 118.35830688476562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109.74151611328125
  },
  ImageBackground_201_1913: {
    width: 5.893507480621338,
    height: 16.292736053466797,
    top: 109.5479736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103.5328369140625
  },
  ImageBackground_201_1914: {
    width: 27.635080337524414,
    height: 21.143617630004883,
    top: 104.1104736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104.7451171875
  },
  ImageBackground_201_1915: {
    width: 27.637170791625977,
    height: 21.143617630004883,
    top: 104.1104736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104.3011474609375
  },
  ImageBackground_201_1916: {
    width: 7.102868556976318,
    height: 2.1881566047668457,
    top: 112.18814086914062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115.1219482421875
  },
  ImageBackground_201_1917: {
    width: 7.331498146057129,
    height: 7.220609664916992,
    top: 114.96011352539062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104.7451171875
  },
  ImageBackground_201_1918: {
    width: 7.331498146057129,
    height: 7.220609664916992,
    top: 115.18206787109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104.52313232421875
  },
  ImageBackground_201_1919: {
    width: 3.5419766902923584,
    height: 4.516981601715088,
    top: 74.60687255859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 136.28497314453125
  },
  ImageBackground_201_1920: {
    width: 13.218183517456055,
    height: 7.657779693603516,
    top: 70.59365844726562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120.548828125
  },
  ImageBackground_201_1921: {
    width: 27.147804260253906,
    height: 21.282487869262695,
    top: 68.67825317382812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112.2437744140625
  },
  ImageBackground_201_1922: {
    width: 16.83601188659668,
    height: 3.1635615825653076,
    top: 86.79718017578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112.65814208984375
  },
  ImageBackground_201_1923: {
    width: 23.777456283569336,
    height: 6.947490215301514,
    top: 104.1104736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.0028076171875
  },
  ImageBackground_201_1924: {
    width: 27.61046028137207,
    height: 25.525936126708984,
    top: 87.24114990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106.2608642578125
  },
  ImageBackground_201_1925: {
    width: 0.7006138563156128,
    height: 0.7006206512451172,
    top: 91.21865844726562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126.83056640625
  },
  ImageBackground_201_1926: {
    width: 0.7006273865699768,
    height: 0.7006206512451172,
    top: 99.1739501953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124.961669921875
  },
  ImageBackground_201_1927: {
    width: 0.7006138563156128,
    height: 0.7006206512451172,
    top: 96.47247314453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127.42327880859375
  },
  ImageBackground_201_1928: {
    width: 2.8162455558776855,
    height: 4.701346397399902,
    top: 89.9600830078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.8251953125
  },
  ImageBackground_201_1929: {
    width: 3.217139959335327,
    height: 5.380643367767334,
    top: 90.40411376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114.419677734375
  },
  ImageBackground_201_1930: {
    width: 11.190691947937012,
    height: 11.553094863891602,
    top: 93.0943603515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120.41143798828125
  },
  ImageBackground_201_1931: {
    width: 5.506250858306885,
    height: 5.489369869232178,
    top: 79.292236328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115.4925537109375
  },
  ImageBackground_201_1932: {
    width: 1.2705397605895996,
    height: 3.036064386367798,
    top: 79.63882446289062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114.7392578125
  },
  ImageBackground_201_1933: {
    width: 1.2917677164077759,
    height: 4.054028511047363,
    top: 69.9832763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 118.2449951171875
  },
  ImageBackground_201_1934: {
    width: 0.8740678429603577,
    height: 2.0372838973999023,
    top: 74.60687255859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 136.295654296875
  },
  ImageBackground_201_1935: {
    width: 5.09157657623291,
    height: 1.5320965051651,
    top: 75.23733520507812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129.1790771484375
  },
  ImageBackground_201_1936: {
    width: 1.5369008779525757,
    height: 2.2578437328338623,
    top: 76.30865478515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144.955322265625
  },
  ImageBackground_201_1937: {
    width: 9.270791053771973,
    height: 16.294857025146484,
    top: 58.569061279296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 135.3717041015625
  },
  ImageBackground_201_1938: {
    width: 14.402705192565918,
    height: 22.000755310058594,
    top: 45.063446044921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.3504638671875
  },
  ImageBackground_201_1939: {
    width: 16.169822692871094,
    height: 29.701004028320312,
    top: 48.42218017578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103.064453125
  },
  ImageBackground_201_1940: {
    width: 6.130662441253662,
    height: 8.379622459411621,
    top: 69.74359130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.2852783203125
  },
  ImageBackground_201_1941: {
    width: 8.199673652648926,
    height: 9.637707710266113,
    top: 68.92892456054688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.6956787109375
  },
  ImageBackground_201_1942: {
    width: 8.468091011047363,
    height: 5.252352237701416,
    top: 67.01507568359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 123.59661865234375
  },
  ImageBackground_201_1943: {
    width: 15.981520652770996,
    height: 15.981522560119629,
    top: 56.059326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122.111572265625
  },
  ImageBackground_201_1944: {
    width: 15.92152214050293,
    height: 11.174575805664062,
    top: 56.044097900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122.18487548828125
  },
  ImageBackground_201_1945: {
    width: 17.290420532226562,
    height: 13.750332832336426,
    top: 53.255706787109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121.21929931640625
  },
  ImageBackground_201_1946: {
    width: 34.09222412109375,
    height: 27.1483154296875,
    top: 47.71575927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.55657958984375
  },
  ImageBackground_201_1956: {
    width: 1.9088906049728394,
    height: 2.2329635620117188,
    top: 56.045989990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121.73211669921875
  },
  ImageBackground_201_1957: {
    width: 0.8656675815582275,
    height: 1.946634292602539,
    top: 58.827423095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137.67803955078125
  },
  ImageBackground_201_1958: {
    width: 40.748085021972656,
    height: 103.40553283691406,
    top: 65.020751953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 174.48876953125
  },
  ImageBackground_201_1959: {
    width: 11.399809837341309,
    height: 15.30493450164795,
    top: 76.24676513671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185.738037109375
  },
  ImageBackground_201_1960: {
    width: 5.438133716583252,
    height: 5.400403022766113,
    top: 157.4373779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185.7799072265625
  },
  ImageBackground_201_1961: {
    width: 4.616861820220947,
    height: 2.2731010913848877,
    top: 160.5645751953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186.594482421875
  },
  ImageBackground_201_1962: {
    width: 4.4871697425842285,
    height: 5.557990074157715,
    top: 162.644775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187.9517822265625
  },
  ImageBackground_201_1963: {
    width: 4.4871697425842285,
    height: 5.557990074157715,
    top: 162.644775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187.9517822265625
  },
  ImageBackground_201_1964: {
    width: 4.920952320098877,
    height: 3.145406484603882,
    top: 159.69232177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192.43890380859375
  },
  ImageBackground_201_1965: {
    width: 12.761378288269043,
    height: 7.629247665405273,
    top: 160.79541015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 179.6776123046875
  },
  ImageBackground_201_1966: {
    width: 10.082262992858887,
    height: 2.266263723373413,
    top: 166.15838623046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 179.6776123046875
  },
  ImageBackground_201_1967: {
    width: 4.920966148376465,
    height: 5.955314636230469,
    top: 156.88238525390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192.43890380859375
  },
  ImageBackground_201_1968: {
    width: 11.230245590209961,
    height: 8.734437942504883,
    top: 159.9136962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187.95135498046875
  },
  ImageBackground_201_1969: {
    width: 11.229736328125,
    height: 2.8293888568878174,
    top: 165.81878662109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187.95135498046875
  },
  ImageBackground_201_1970: {
    width: 4.809970378875732,
    height: 1.3184705972671509,
    top: 157.4373779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185.7799072265625
  },
  ImageBackground_201_1971: {
    width: 4.337183952331543,
    height: 1.9199022054672241,
    top: 156.88238525390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192.7119140625
  },
  ImageBackground_201_1972: {
    width: 18.084321975708008,
    height: 40.01997756958008,
    top: 118.37838745117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180.80731201171875
  },
  ImageBackground_201_1973: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 148.89178466796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193.58428955078125
  },
  ImageBackground_201_1974: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 152.60305786132812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186.21942138671875
  },
  ImageBackground_201_1975: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 150.26129150390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185.7044677734375
  },
  ImageBackground_201_1976: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 150.44561767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186.72113037109375
  },
  ImageBackground_201_1977: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 151.69970703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186.2860107421875
  },
  ImageBackground_201_1978: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 151.3333740234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192.9560546875
  },
  ImageBackground_201_1979: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 152.18356323242188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196.06353759765625
  },
  ImageBackground_201_1980: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 151.18475341796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197.06243896484375
  },
  ImageBackground_201_1981: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 150.59408569335938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193.881591796875
  },
  ImageBackground_201_1982: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 149.57980346679688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187.84637451171875
  },
  ImageBackground_201_1983: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 150.44561767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 189.08056640625
  },
  ImageBackground_201_1984: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 154.20114135742188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186.95855712890625
  },
  ImageBackground_201_1985: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 155.9945068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187.4691162109375
  },
  ImageBackground_201_1986: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 156.6204833984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 189.1448974609375
  },
  ImageBackground_201_1987: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 156.73367309570312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188.14166259765625
  },
  ImageBackground_201_1988: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 157.57940673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187.25384521484375
  },
  ImageBackground_201_1989: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 151.55084228515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187.99517822265625
  },
  ImageBackground_201_1990: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 153.36865234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187.99517822265625
  },
  ImageBackground_201_1991: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 154.56512451171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188.93408203125
  },
  ImageBackground_201_1992: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 155.1044921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188.08172607421875
  },
  ImageBackground_201_1993: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 157.57940673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186.365966796875
  },
  ImageBackground_201_1994: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 155.41741943359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188.99847412109375
  },
  ImageBackground_201_1995: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 150.11245727539062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196.06353759765625
  },
  ImageBackground_201_1996: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 152.18356323242188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 194.60296630859375
  },
  ImageBackground_201_1997: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 155.25323486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193.58428955078125
  },
  ImageBackground_201_1998: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 157.28866577148438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193.251220703125
  },
  ImageBackground_201_1999: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 150.889404296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 194.991455078125
  },
  ImageBackground_201_2000: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 153.07144165039062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 194.454345703125
  },
  ImageBackground_201_2001: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 154.71383666992188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 194.89825439453125
  },
  ImageBackground_201_2002: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 156.38531494140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192.56768798828125
  },
  ImageBackground_201_2003: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 155.84579467773438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193.881591796875
  },
  ImageBackground_201_2004: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 156.28985595703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193.43780517578125
  },
  ImageBackground_201_2005: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 155.64401245117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196.06353759765625
  },
  ImageBackground_201_2006: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 156.14349365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196.06353759765625
  },
  ImageBackground_201_2007: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 157.28866577148438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 194.60296630859375
  },
  ImageBackground_201_2008: {
    width: 0.29710423946380615,
    height: 0.29710423946380615,
    top: 157.72811889648438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 194.1768798828125
  },
  ImageBackground_201_2009: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 156.38531494140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195.1934814453125
  },
  ImageBackground_201_2010: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 157.14218139648438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 194.02813720703125
  },
  ImageBackground_201_2011: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 155.25323486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196.6141357421875
  },
  ImageBackground_201_2012: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 156.14349365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196.91375732421875
  },
  ImageBackground_201_2013: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 155.84579467773438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 194.74951171875
  },
  ImageBackground_201_2014: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 157.357421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195.1934814453125
  },
  ImageBackground_201_2015: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 157.14218139648438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196.06353759765625
  },
  ImageBackground_201_2016: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 157.72811889648438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195.91485595703125
  },
  ImageBackground_201_2017: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 157.8768310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195.1934814453125
  },
  ImageBackground_201_2018: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 154.1121826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195.91485595703125
  },
  ImageBackground_201_2019: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 155.26870727539062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185.7200927734375
  },
  ImageBackground_201_2020: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 155.7681884765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185.7200927734375
  },
  ImageBackground_201_2021: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 154.88031005859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186.2703857421875
  },
  ImageBackground_201_2022: {
    width: 0.29709070920944214,
    height: 0.29710423946380615,
    top: 156.6204833984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186.7188720703125
  },
  ImageBackground_201_2023: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 155.7681884765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186.57025146484375
  },
  ImageBackground_201_2024: {
    width: 0.29709070920944214,
    height: 0.29709070920944214,
    top: 156.76708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185.7200927734375
  },
  ImageBackground_201_2025: {
    width: 0.29710423946380615,
    height: 0.29709070920944214,
    top: 153.7393798828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185.57135009765625
  },
  ImageBackground_201_2026: {
    width: 1.0743149518966675,
    height: 11.950581550598145,
    top: 120.0362548828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188.7764892578125
  },
  ImageBackground_201_2027: {
    width: 5.105186939239502,
    height: 6.449725151062012,
    top: 103.93115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 177.67822265625
  },
  ImageBackground_201_2028: {
    width: 4.477036476135254,
    height: 15.38880443572998,
    top: 92.845703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 179.78692626953125
  },
  ImageBackground_201_2029: {
    width: 7.5887579917907715,
    height: 7.226884841918945,
    top: 76.25408935546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188.20379638671875
  },
  ImageBackground_201_2030: {
    width: 13.76181697845459,
    height: 13.76894760131836,
    top: 69.26962280273438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 182.8765869140625
  },
  ImageBackground_201_2031: {
    width: 3.973172187805176,
    height: 15.38880443572998,
    top: 92.845703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180.29071044921875
  },
  ImageBackground_201_2032: {
    width: 16.973642349243164,
    height: 3.7510852813720703,
    top: 118.37838745117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 181.57147216796875
  },
  ImageBackground_201_2033: {
    width: 11.399809837341309,
    height: 6.827634811401367,
    top: 84.72396850585938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185.738037109375
  },
  ImageBackground_201_2034: {
    width: 24.74755096435547,
    height: 36.86159896850586,
    top: 84.82391357421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 179.0736083984375
  },
  ImageBackground_201_2035: {
    width: 5.552017688751221,
    height: 7.267043590545654,
    top: 105.9415283203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 174.9385986328125
  },
  ImageBackground_201_2036: {
    width: 1.2331368923187256,
    height: 4.096163749694824,
    top: 91.0543212890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 194.2462158203125
  },
  ImageBackground_201_2037: {
    width: 1.344777226448059,
    height: 2.344309091567993,
    top: 90.01559448242188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 182.586181640625
  },
  ImageBackground_201_2038: {
    width: 9.641820907592773,
    height: 37.66744613647461,
    top: 91.05230712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193.8167724609375
  },
  ImageBackground_201_2039: {
    width: 6.655224323272705,
    height: 7.849656581878662,
    top: 88.103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196.406005859375
  },
  ImageBackground_201_2040: {
    width: 6.655224323272705,
    height: 7.849656581878662,
    top: 87.88140869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196.406005859375
  },
  ImageBackground_201_2041: {
    width: 18.95132827758789,
    height: 20.916223526000977,
    top: 69.2757568359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 182.95208740234375
  },
  ImageBackground_201_2042: {
    width: 32.903724670410156,
    height: 28.26551628112793,
    top: 65.25393676757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 181.667236328125
  },
  ImageBackground_201_2043: {
    width: 32.884681701660156,
    height: 27.923295974731445,
    top: 65.42416381835938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 181.58416748046875
  },
  ImageBackground_201_2047: {
    width: 31.430368423461914,
    height: 120.51033782958984,
    top: 56.072906494140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.5855712890625
  },
  ImageBackground_201_2048: {
    width: 10.521866798400879,
    height: 13.654736518859863,
    top: 71.400634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.8109130859375
  },
  ImageBackground_201_2049: {
    width: 13.760683059692383,
    height: 6.831872940063477,
    top: 169.6943359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.54315185546875
  },
  ImageBackground_201_2050: {
    width: 13.76032543182373,
    height: 6.8319010734558105,
    top: 169.6943359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.54315185546875
  },
  ImageBackground_201_2051: {
    width: 3.489475727081299,
    height: 2.9521267414093018,
    top: 173.096923828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.8140869140625
  },
  ImageBackground_201_2052: {
    width: 13.760683059692383,
    height: 6.830552101135254,
    top: 169.31243896484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.2529296875
  },
  ImageBackground_201_2053: {
    width: 13.760683059692383,
    height: 6.830552101135254,
    top: 169.31243896484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.2529296875
  },
  ImageBackground_201_2054: {
    width: 18.108930587768555,
    height: 56.832496643066406,
    top: 115.375244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.77215576171875
  },
  ImageBackground_201_2055: {
    width: 14.884456634521484,
    height: 54.18157958984375,
    top: 118.0074462890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.99603271484375
  },
  ImageBackground_201_2056: {
    width: 20.348270416259766,
    height: 56.5816650390625,
    top: 116.20745849609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.64093017578125
  },
  ImageBackground_201_2057: {
    width: 4.185315132141113,
    height: 0.8781772255897522,
    top: 149.00274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.81011962890625
  },
  ImageBackground_201_2058: {
    width: 4.811453342437744,
    height: 0.9572237730026245,
    top: 151.1248779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.3372802734375
  },
  ImageBackground_201_2059: {
    width: 1.8123986721038818,
    height: 0.4268135726451874,
    top: 150.42410278320312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.7869873046875
  },
  ImageBackground_201_2060: {
    width: 1.6790958642959595,
    height: 2.441610813140869,
    top: 136.71246337890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.0413818359375
  },
  ImageBackground_201_2061: {
    width: 9.285889625549316,
    height: 6.719870567321777,
    top: 71.400634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.780029296875
  },
  ImageBackground_201_2062: {
    width: 17.757198333740234,
    height: 17.757205963134766,
    top: 59.914947509765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.23626708984375
  },
  ImageBackground_201_2063: {
    width: 10.521879196166992,
    height: 5.695727825164795,
    top: 79.35968017578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.8109130859375
  },
  ImageBackground_201_2064: {
    width: 20.205440521240234,
    height: 7.710866928100586,
    top: 115.38397216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.784912109375
  },
  ImageBackground_201_2065: {
    width: 24.779884338378906,
    height: 43.068477630615234,
    top: 79.58212280273438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.18115234375
  },
  ImageBackground_201_2066: {
    width: 9.689373970031738,
    height: 4.435880184173584,
    top: 94.56594848632812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.85247802734375
  },
  ImageBackground_201_2067: {
    width: 9.689373970031738,
    height: 4.435880184173584,
    top: 94.56594848632812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.85247802734375
  },
  ImageBackground_201_2068: {
    width: 3.6274986267089844,
    height: 1.0557414293289185,
    top: 106.09744262695312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.50604248046875
  },
  ImageBackground_201_2069: {
    width: 2.8740828037261963,
    height: 2.01328444480896,
    top: 107.153564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.5712890625
  },
  ImageBackground_201_2070: {
    width: 17.44712257385254,
    height: 15.736152648925781,
    top: 59.920623779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.23565673828125
  },
  ImageBackground_201_2071: {
    width: 22.730371475219727,
    height: 19.136497497558594,
    top: 56.639129638671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.98785400390625
  },
  ImageBackground_201_2072: {
    width: 10.438584327697754,
    height: 36.60062789916992,
    top: 94.56594848632812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.85223388671875
  },
  ImageBackground_201_2073: {
    width: 9.771621704101562,
    height: 9.655462265014648,
    top: 88.24005126953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.3262939453125
  },
  ImageBackground_201_2074: {
    width: 9.771621704101562,
    height: 9.655462265014648,
    top: 88.24005126953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.77020263671875
  },
  ImageBackground_201_2075: {
    width: 19.60848045349121,
    height: 17.860795974731445,
    top: 57.915069580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.11865234375
  },
  ImageBackground_201_2084: {
    width: 135.2896728515625,
    height: 26.587507247924805,
    top: 109.53475952148438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.907958984375
  },
  ImageBackground_201_2085: {
    width: 7.071624279022217,
    height: 9.601953506469727,
    top: 106.967041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 174.6634521484375
  },
  View_201_2086: {
    width: 169,
    top: -4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37
  },
  Text_201_2086: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_2087: {
    width: 87,
    top: 507,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217
  },
  Text_201_2087: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_201_2088: {
    width: 116.88459777832031,
    height: 87.254150390625,
    top: 413,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35
  },
  View_201_2114: {
    width: 99,
    top: 392,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37
  },
  Text_201_2114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_2115: {
    width: 99,
    top: 392,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37
  },
  Text_201_2115: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_2116: {
    width: 120,
    top: 673,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56
  },
  Text_201_2116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_201_2117: {
    width: 25,
    height: 25,
    top: 771,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297
  },
  ImageBackground_201_2120: {
    width: 25,
    height: 25,
    top: 772,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49
  },
  View_201_2122: {
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
  ImageBackground_201_2123: {
    width: 21.666667938232422,
    height: 21.6683349609375,
    top: 1.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.66668701171875
  },
  ImageBackground_214_0: {
    width: 168.81607055664062,
    height: 140,
    top: 541,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11
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
