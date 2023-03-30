import React from "react";
import {
  Alert,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("PLease Enter your Full Name"),
  email: Yup.string()
    .email("Invalid email")
    .required("PLease Enter your email ID"),
  password: Yup.string()
    .min(8)
    .required("Please Enter your Password")
    .matches(
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Must contain min 8 characters, Atleast one UpperCase"
    ),
  ConfirmPassword: Yup.string()
    .min(8, "Confirm Password must be 8 characters Long")
    .oneOf([Yup.ref("password")], "Your Password do not Match")
    .required("Confirm Password is required"),
  mobile: Yup.string()
    .min(10, "Must be Exactly 10 digits")
    .max(10, "Must be Exactly 10 Digits")
    .matches(/^[0-9]+$/, "Must be only Digits")
    .required("Please Enter your Mobile no")
});

const Form2 = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        ConfirmPassword: "",
        mobile: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit
      }) => (
        <View style={styles.wrapper}>
          <StatusBar barStyle={"light-content"} />

          <View style={styles.formContainer}>
            <Text style={styles.title}>Sign Up</Text>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Full Name"
                value={values.name}
                onChangeText={handleChange("name")}
              />
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Email Address"
              />
            </View>

            <View style={styles.inputWrapper}>
              <TextInput style={styles.inputStyle} placeholder="Password" />
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Confirm Password"
              />
            </View>

            <View style={styles.inputWrapper}>
              <TextInput style={styles.inputStyle} placeholder="Phone Number" />
            </View>

            {/* <TouchableOpacity onPress={() => {}} style={styles.submitbtn}>
              <Text style={styles.submitbtnTxt}>Submit</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      )}
      ;
    </Formik>
  );
};

export default Form2;

const styles = StyleSheet.create({});
