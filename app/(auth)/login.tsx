// app/(auth)/login.tsx
import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { supabase } from '../../services/supabase';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        Alert.alert('Login Failed', error.message);
      } else {
        router.replace('/(tabs)/home');
      }
    } finally {
      setLoading(false);
    }
  }, [email, password, loading, router]);

  const handleSocialLogin = useCallback(async (provider: 'google' | 'apple') => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) Alert.alert('Social Login Error', error.message);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
        editable={!loading}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        editable={!loading}
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <TouchableOpacity
          onPress={() => handleSocialLogin('google')}
          style={styles.socialButton}
          disabled={loading}
        >
          <Text>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSocialLogin('apple')}
          style={styles.socialButton}
          disabled={loading}
        >
          <Text>Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, marginBottom: 20, fontWeight: '600' },
  input: { width: '100%', height: 48, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 10, marginBottom: 12, backgroundColor: '#fff' },
  button: { width: '100%', height: 48, backgroundColor: '#0066ff', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 8 },
  buttonDisabled: { backgroundColor: '#a0c4ff' },
  buttonText: { color: '#fff', fontWeight: '600' },
  socialContainer: { flexDirection: 'row', marginTop: 16 },
  socialButton: { marginHorizontal: 8, padding: 10, backgroundColor: '#e0e0e0', borderRadius: 6 },
});
