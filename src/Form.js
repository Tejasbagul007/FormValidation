// 1) Using Single State

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = () => {
    const isValid = validateForm();

    if (isValid) {
      console.log(formData);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Tejas}>Validation Form</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        onBlur={validateForm}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {formErrors.email ? (
        <Text style={styles.error}>{formErrors.email}</Text>
      ) : null}

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={formData.password}
        onChangeText={(value) => handleInputChange("password", value)}
        onBlur={validateForm}
        secureTextEntry
      />
      {formErrors.password ? (
        <Text style={styles.error}>{formErrors.password}</Text>
      ) : null}

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={formData.confirmPassword}
        onChangeText={(value) => handleInputChange("confirmPassword", value)}
        onBlur={validateForm}
        secureTextEntry
      />
      {formErrors.confirmPassword ? (
        <Text style={styles.error}>{formErrors.confirmPassword}</Text>
      ) : null}

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  Tejas: {
    margin: 20,
    fontSize: 30,
    backgroundColor: "skyblue",
    padding: 10
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  error: {
    color: "red",
    marginBottom: 10
  }
});

export default Form;

//----------------------------------------

// 2) Using Multiple State

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const Form = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const handleSubmit = () => {
//     // Perform form submission logic here
//   };

//   const validateEmail = () => {
//     if (!email) {
//       setEmailError('Email is required');
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Please enter a valid email');
//     } else {
//       setEmailError('');
//     }
//   };

//   const validatePassword = () => {
//     if (!password) {
//       setPasswordError('Password is required');
//     } else if (password.length < 8) {
//       setPasswordError('Password must be at least 8 characters');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const validateConfirmPassword = () => {
//     if (!confirmPassword) {
//       setConfirmPasswordError('Confirm password is required');
//     } else if (confirmPassword !== password) {
//       setConfirmPasswordError('Passwords do not match');
//     } else {
//       setConfirmPasswordError('');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Email</Text>
//       <TextInput
//         style={styles.input}
//         value={email}
//         onChangeText={(value) => setEmail(value)}
//         onBlur={validateEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         style={styles.input}
//         value={password}
//         onChangeText={(value) => setPassword(value)}
//         onBlur={validatePassword}
//         secureTextEntry
//       />
//       {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

//       <Text style={styles.label}>Confirm Password</Text>
//       <TextInput
//         style={styles.input}
//         value={confirmPassword}
//         onChangeText={(value) => setConfirmPassword(value)}
//         onBlur={validateConfirmPassword}
//         secureTextEntry
//       />
//       {confirmPasswordError ? (
//         <Text style={styles.error}>{confirmPasswordError}</Text>
//       ) : null}

//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default Form;
