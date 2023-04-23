import * as React from 'react';
import { Text, View } from 'react-native';
import { Form, FormItem } from 'react-native-form-component';

function LoginScreen() {
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
        </Form>
    </View>
  );
}

export default LoginScreen;