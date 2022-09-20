import React from "react";
import { Text, View } from "react-native";
import Icon from "./MaterialIcons";

export default function Prototype(theme) {
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
        backgroundColor: theme.Background,
        justifyContent: "space-between",

        margin: 10,
        padding: 10,
      }}
    >
      <Icon
        name="keyboard_backspace"
        height="20"
        width="20"
        fill={theme.Primary}
      />

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: theme.Primary,
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
            color: theme.TextOnBackground,
            margin: 5,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Sign In TextOnBackground
        </Text>
        {InputBox(theme)}
        {BigButton(theme)}

        <Text
          style={{
            color: theme.Primary,
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
            color: theme.TextOnBackgroundMinor,
          }}
        >
          TextOnBackgroundMinor.
        </Text>
        <Text
          style={{
            color: theme.Primary,
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
        backgroundColor: theme.Background,
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
        <Icon name="close" height="20" width="20" fill={theme.Primary} />

        <Text
          style={{
            color: theme.TextOnBackground,
            margin: 5,
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Text>
      </View>

      <Text
        style={{
          color: theme.TextOnBackgroundMinor,
          fontSize: 15,
          margin: 5,
          fontWeight: "bold",
        }}
      >
        TEXT_ON_BACKGROUND_MINOR
      </Text>
      {DividerOnBackground(theme)}
      {Address(theme)}
      {Address(theme)}

      <Text
        style={{
          color: theme.TextOnBackgroundMinor,
          fontSize: 15,
          margin: 5,
          fontWeight: "bold",
        }}
      >
        WASHINGTON
      </Text>
      {DividerOnBackground(theme)}
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
        fill={theme.Secondary}
      />

      <Text
        style={{
          color: theme.TextOnBackground,
          margin: 5,
        }}
      >
        Address in TextOnBackground
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
        backgroundColor: theme.Background,
        margin: 10,
        padding: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.Background,
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Text
          style={{
            color: theme.TextOnBackground,
            fontSize: 20,
            margin: 5,
            fontWeight: "bold",
          }}
        >
          TextOnBackground
        </Text>
        <Text
          style={{
            color: theme.Primary,
            fontSize: 10,
            margin: 5,
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Text>
      </View>
      {InputBox(theme)}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.Background,
        }}
      >
        {Item(theme)}
        {Item(theme)}
      </View>
      {AnnouncementBox(theme)}
      {AnnouncementInputBox(theme)}
      {Bubble(theme)}
      {ListBubble(theme)}

      {Tabs(theme)}
    </View>
  );
}

const Item = (theme) => {
  const {
    NeutralLighter,
    PrimaryLight,
    PrimaryLighter,
    Primary,
    White,
    Secondary,
  } = theme;
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: White,
        //flex: 0.3,
        margin: 5,
        padding: 5,
        width: 110,
        borderRadius: 8,
      }}
    >
      <Text style={{ color: theme.NeutralDark }}>
        NeutralDark text on white
      </Text>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.NeutralLighter,
          borderRadius: 5,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: theme.Black }}>Black text</Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: Primary,
            borderRadius: 3,
            justifyContent: "space-between",
          }}
        >
          <Icon
            name="shopping_cart_outline"
            height="20"
            width="20"
            fill={White}
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
        Hint text NeutralLight on White
      </Text>
    </View>
  );
};

const AnnouncementInputBox = (theme) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: theme.Background,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderColor: theme.TextOnBackground,
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: "dashed",
      }}
    >
      <Icon name="mail" height="16" width="16" fill={theme.Secondary} />
      <Text style={{ margin: 5, color: theme.TextOnBackground }}>
        TextOnBackground
      </Text>
    </View>
  );
};

const AnnouncementBox = (theme) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: theme.Secondary,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon name="mail" height="16" width="16" fill={theme.Secondary} />
      <Text style={{ margin: 5, color: theme.TextOnSecondary }}>
        TextOnSecondary
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
        backgroundColor: theme.Primary,
        margin: 5,
        padding: 5,
        borderRadius: 8,
      }}
    >
      <Icon name="mail" height="16" width="16" fill={theme.White} />
      <Text style={{ color: theme.White, fontWeight: "bold" }}>Primary</Text>
    </View>
  );
};

const ListBubble = (theme) => {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: theme.White,
        margin: 5,
        padding: 5,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
          backgroundColor: theme.NeutralLighter,
          margin: 5,
          padding: 1,
          width: "100",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: theme.Primary,
            fontWeight: "bold",
            margin: 1,
            padding: 5,
            borderRadius: 10,
          }}
        >
          Default
        </Text>

        <Text
          style={{
            color: theme.White,
            fontWeight: "bold",
            backgroundColor: theme.Primary,
            margin: 0,
            padding: 5,
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          Custom
        </Text>
      </View>

      {InputBox(theme)}

      {ListItem(theme)}
      {ListItem(theme)}
    </View>
  );
};

const ListItem = (theme) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.White,
        padding: 5,
        borderBottomColor: theme.NeutralLighter,
        borderBottomWidth: 1,
      }}
    >
      <Text style={{ color: theme.Neutral }}>Neutral</Text>
      <Text style={{ color: theme.NeutralDarker }}>Neutral Dark</Text>
    </View>
  );
};

const ListHeader = (theme) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.PrimaryLighter,
        padding: 5,
      }}
    >
      <Text style={{ color: theme.Primary, fontWeight: "bold" }}>
        Primary on PrimaryLighter
      </Text>
      <Icon name="expand_more" height="20" width="20" fill={theme.Primary} />
    </View>
  );
};

const Bubble = (theme) => {
  const {
    Black,
    White,
    Primary,
    Background,
    PrimaryLight,
    PrimaryLighter,
  } = theme;
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
        <Text style={{ color: Black, fontWeight: "bold" }}>Title in Black</Text>
        <Icon name="home" height="20" width="20" fill={theme.NeutralLight} />
      </View>

      {Divider(theme)}

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={{ color: theme.Neutral }}>Neutral:</Text>
        <Text style={{ color: theme.Primary }}> text@in.Primary</Text>
      </View>

      {Divider(theme)}
      <Text style={{ color: theme.NeutralDark }}>NeutralDark on White</Text>
      {Divider(theme)}
      <Text style={{ color: theme.NeutralDark }}>
        Divider in NeutralLighter
      </Text>
      {Divider(theme)}
      <Text style={{ color: theme.NeutralDark }}>
        Indicator in NeutralLight
      </Text>
      {Divider(theme)}
      <Text style={{ color: theme.NeutralDark }}>
        Bottom bar icons in NeutralLight
      </Text>
      {Divider(theme)}
      <Text style={{ color: theme.NeutralDark }}>
        Bottom bar in theme.BottomBar
      </Text>
      {Divider(theme)}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <Icon name="add_a_photo" height="20" width="20" fill={Primary} />

        <Text style={{ color: theme.Neutral }}>Upload in Neutral</Text>
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

const DividerOnBackground = (theme) => {
  return (
    <View
      style={{
        backgroundColor: theme.DividerOnBackground,
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
        backgroundColor: theme.BottomBar,
        margin: 5,
        padding: 5,
      }}
    >
      <Icon name="home" height="40" width="40" fill={Primary} />
      <Icon
        name="request_quote_outline"
        height="40"
        width="40"
        fill={theme.NeutralLight}
      />
      <Icon
        name="shopping_cart_outline"
        height="40"
        width="40"
        fill={theme.NeutralLight}
      />
      <Icon
        name="account_circle_outlined"
        height="40"
        width="40"
        fill={theme.NeutralLight}
      />
    </View>
  );
};
