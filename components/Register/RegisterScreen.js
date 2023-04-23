import * as React from 'react';
import { Text, View } from 'react-native';
import { Form, FormItem } from 'react-native-form-component';

function RegisterScreen() {
  return (
    <View style={{ margin: 20 }}>
        <Form>
            <FormItem
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                required
            />
            <FormItem
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                required
            />
            <FormItem
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                required
            />
        </Form>
    </View>
  );
}

export default RegisterScreen;