// app/(auth)/subscription.tsx
import React, { useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

// Placeholder subscription plans
const plans = [
  { id: 'explorer', name: 'Explorer', price: '$4.99/mo', features: ['Basic AI access', 'Limited missions'] },
  { id: 'pro', name: 'Pro', price: '$9.99/mo', features: ['Unlimited AI', 'Premium missions', 'Priority support'] },
  { id: 'elite', name: 'Elite', price: '$19.99/mo', features: ['All features', 'Personal AI mentor', 'Early access'] },
];

export default function SubscriptionScreen() {
  const router = useRouter();

  const handleSelect = useCallback((planId: string) => {
    // TODO: integrate Stripe/PayPal checkout
    console.log('Selected plan', planId);
    router.replace('/(tabs)/home');
  }, [router]);

  // useMemo prevents re-mapping the plans array on every render
  const renderedPlans = useMemo(() => plans.map(plan => (
    <View key={plan.id} style={styles.planCard}>
      <Text style={styles.planName}>{plan.name}</Text>
      <Text style={styles.planPrice}>{plan.price}</Text>
      {plan.features.map((feat, i) => (
        <Text key={i} style={styles.feature}>• {feat}</Text>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSelect(plan.id)}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Select {plan.name}</Text>
      </TouchableOpacity>
    </View>
  )), [handleSelect]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Choose Your Plan</Text>
      {renderedPlans}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 20 },
  title: { fontSize: 28, fontWeight: '600', marginBottom: 20, textAlign: 'center' },
  planCard: { borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 15, marginBottom: 15 },
  planName: { fontSize: 22, fontWeight: '600' },
  planPrice: { fontSize: 18, color: '#4F46E5', marginVertical: 5 },
  feature: { fontSize: 14, color: '#555' },
  button: { backgroundColor: '#4F46E5', padding: 10, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});
