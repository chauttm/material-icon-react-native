import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Icon from "./MaterialIcons";
import DemoIcon from "./DemoIcons";
import {
  generateColorTheme,
  generateMUTheme,
  generateTinyColorTheme,
} from "./ColorUtils";

export default function App() {
  //generateMUTheme("#001A50", BrimColors.Secondary);
  console.log(generateTinyColorTheme("#001A50", BrimColors.Secondary));
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {Prototype(
          generateColorTheme(BrimColors.Primary, BrimColors.Secondary)
        )}
        {Prototype(
          generateTinyColorTheme(BrimColors.Primary, BrimColors.Secondary)
        )}
        {Prototype(generateMUTheme(BrimColors.Primary, BrimColors.Secondary))}
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        {Prototype(generateColorTheme("#c20000", BrimColors.Secondary))}
        {Prototype(generateTinyColorTheme("#c20000", BrimColors.Secondary))}
        {Prototype(generateMUTheme("#c20000", BrimColors.Secondary))}
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        {Prototype(generateColorTheme("#06BD6D", BrimColors.Secondary))}
        {Prototype(generateTinyColorTheme("#06BD6D", BrimColors.Secondary))}
        {Prototype(generateMUTheme("#06BD6D", BrimColors.Secondary))}
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        {Prototype(generateColorTheme("#104473", "#06BD6D"))}
        {Prototype(generateTinyColorTheme("#104473", "#06BD6D"))}
        {Prototype(generateMUTheme("#104473", "#06BD6D"))}
      </View>
    </View>
  );
  //{Prototype(BrimColors)}
}

function Prototype(theme) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
      }}
    >
      {MainScreen(theme)}
      {ContactUs(theme)}
      {SignIn(theme)}
    </View>
  );
}

const SignIn = (theme) => {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: theme.Primary,
        justifyContent: "space-between",

        margin: 10,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Icon
          name="keyboard_backspace"
          height="20"
          width="20"
          fill={theme.White}
        />

        <Text
          style={{
            color: theme.White,
            margin: 5,
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          LOGO
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: theme.NeutralLighter,
            margin: 5,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Sign In N-Liter
        </Text>
        {InputBox(theme)}
        {BigButton(theme)}
        <Text
          style={{
            color: theme.Secondary,
            alignSelf: "center",
          }}
        >
          Forgot password?
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: theme.NeutralLighter,
          }}
        >
          NeutralLighter
        </Text>
        <Text
          style={{
            color: theme.Secondary,
          }}
        >
          Sign up
        </Text>
      </View>
    </View>
  );
};

const ContactUs = (theme) => {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: theme.Primary,
        margin: 10,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Icon name="close" height="20" width="20" fill={theme.White} />

        <Text
          style={{
            color: theme.White,
            margin: 5,
            fontWeight: "bold",
          }}
        >
          Contact Us White
        </Text>
      </View>

      <Text
        style={{
          color: theme.PrimaryLighter,
          fontSize: 15,
          margin: 5,
          fontWeight: "bold",
        }}
      >
        OREGON IN P-LITER
      </Text>
      {DividerOnDark(theme)}
      {Address(theme)}
      {Address(theme)}

      <Text
        style={{
          color: theme.PrimaryLighter,
          fontSize: 15,
          margin: 5,
          fontWeight: "bold",
        }}
      >
        WASHINGTON
      </Text>
      {DividerOnDark(theme)}
      {Address(theme)}
      {Address(theme)}
    </View>
  );
};

const Address = (theme) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Icon
        name="edit_location"
        height="16"
        width="16"
        fill={theme.PrimaryLighter}
      />

      <Text
        style={{
          color: theme.NeutralLighter,
          margin: 5,
        }}
      >
        Address in NeutralLighter
      </Text>
    </View>
  );
};

function MainScreen(theme) {
  console.log(theme);
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: theme.Primary,
        margin: 10,
        padding: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.Primary,
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Text
          style={{
            color: theme.White,
            fontSize: 20,
            margin: 5,
            fontWeight: "bold",
          }}
        >
          Page in White
        </Text>
        <Text
          style={{
            color: theme.Secondary,
            fontSize: 10,
            margin: 5,
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.Primary,
        }}
      >
        {Item(theme)}
        {Item(theme)}
      </View>

      {InputBox(theme)}
      {Bubble(theme)}
      {BigButton(theme)}

      {Tabs(theme)}
    </View>
  );
}

const Item = (theme) => {
  const { PrimaryLight, PrimaryLighter, Primary, Secondary } = theme;
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: PrimaryLight,
        //flex: 0.3,
        margin: 5,
        padding: 5,
        width: 110,
        borderRadius: 8,
      }}
    >
      <Text style={{ color: theme.NeutralLighter }}>
        N-Liter text on PrimaryLight background
      </Text>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Primary,
          borderRadius: 5,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: theme.NeutralLighter }}>NeutralLiter</Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: Secondary,
            borderRadius: 3,
            justifyContent: "space-between",
          }}
        >
          <Icon
            name="shopping_cart_outline"
            height="20"
            width="20"
            fill={Primary}
          />
        </View>
      </View>
    </View>
  );
};

const InputBox = (theme) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: theme.White,
        margin: 5,
        padding: 5,
        alignItems: "center",
        borderColor: theme.NeutralLighter,
        borderWidth: 1,
        borderRadius: 8,
      }}
    >
      <Icon name="mail" height="16" width="16" fill={theme.NeutralLight} />
      <Text style={{ color: theme.NeutralLight }}>
        Hint text in NeutralLight
      </Text>
    </View>
  );
};

const BigButton = (theme) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: theme.Secondary,
        margin: 5,
        padding: 5,
        borderRadius: 8,
      }}
    >
      <Icon name="mail" height="16" width="16" fill={theme.Primary} />
      <Text style={{ color: theme.Primary, fontWeight: "bold" }}>Primary</Text>
    </View>
  );
};

const Bubble = (theme) => {
  const { White, Primary, PrimaryLight, PrimaryLighter } = theme;
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: White,
        margin: 5,
        padding: 5,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: Primary, fontWeight: "bold" }}>
          Title in Primary
        </Text>
        <Icon name="home" height="20" width="20" fill={Primary} />
      </View>

      {Divider(theme)}

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={{ color: theme.NeutralDark }}>NeutralDark:</Text>
        <Text style={{ color: theme.Blue }}> text@in.Blue.com</Text>
      </View>

      {Divider(theme)}
      <Text style={{ color: theme.NeutralDarker }}>
        NeutralDarker is the text color
      </Text>
      {Divider(theme)}
      <Text style={{ color: theme.NeutralDarker }}>
        Divider color is NeutralLighter
      </Text>

      {InputBox(theme)}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Icon name="add_a_photo" height="20" width="20" fill={Primary} />

        <Text style={{ color: theme.NeutralDark }}>Upload in NeutralDark</Text>
      </View>
    </View>
  );
};

const Divider = (theme) => {
  return (
    <View
      style={{
        backgroundColor: theme.NeutralLighter,
        margin: 5,
        height: 1,
      }}
    />
  );
};

const DividerOnDark = (theme) => {
  return (
    <View
      style={{
        backgroundColor: theme.PrimaryLight,
        margin: 5,
        height: 1,
      }}
    />
  );
};

const Tabs = (theme) => {
  const { Secondary, PrimaryLight, PrimaryLighter, White, Primary } = theme;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: PrimaryLight,
        margin: 5,
        padding: 5,
      }}
    >
      <Icon name="home" height="40" width="40" fill={Secondary} />
      <Icon
        name="request_quote_outline"
        height="40"
        width="40"
        fill={PrimaryLighter}
      />
      <Icon
        name="shopping_cart_outline"
        height="40"
        width="40"
        fill={PrimaryLighter}
      />
      <Icon
        name="account_circle_outlined"
        height="40"
        width="40"
        fill={PrimaryLighter}
      />
    </View>
  );
};

const BrimColors = {
  Black: "#000000",
  White: "#FFFFFF",
  Blue: "#0000FF",

  Primary: "#162839",
  PrimaryLight: "#354452",
  PrimaryLighter: "#8F969D",

  NeutralLighter: "#BFD1E7",
  NeutralLight: "#91A3B8",
  Neutral: "#828282",
  NeutralDark: "#666666",
  NeutralDarker: "#333333",

  Secondary: "#FCD941",
};
