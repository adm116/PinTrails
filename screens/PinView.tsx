import React from 'react';
import { View, Text, Image, ScrollView, Pressable, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { makeStyles } from '../utils/makeStyles';
import { scale, verticalScale, moderateScale } from '../utils/scaling';
import { RootStackParamList } from '../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';

type PinViewRouteProp = RouteProp<RootStackParamList, 'PinView'>;

export const PinView = () => {
  const navigation = useNavigation();
  const { params } = useRoute<PinViewRouteProp>();
  const { pin } = params;
  const theme = useTheme();
  const styles = useStyles();

  // TODO: remove inline styles
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.headerActions}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={scale(30)} color={theme.textPrimary} />
        </Pressable>
        <Pressable onPress={() => console.log('Edit pressed')} style={styles.editButton}>
          <Ionicons name="create-outline" size={scale(30)} color={theme.textPrimary} />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: verticalScale(16) }}>
        <Image source={{ uri: pin.imageUrl }} style={[styles.image, { marginTop: verticalScale(0) }]} resizeMode="cover" />

        <View style={styles.content}>
          <Text style={styles.title}>{pin.name}</Text>
          <Text style={styles.location}>{pin.location}</Text>

          <View style={styles.tags}>
            {pin.tags.map((tag: string, index: number) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.description}>{pin.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

type PinViewStyles = {
	container: ViewStyle;
	image: ImageStyle;
	backButton: TextStyle;
	content: ViewStyle;
	title: TextStyle;
	location: TextStyle;
	tags: ViewStyle;
	tag: ViewStyle;
	tagText: TextStyle;
	description: ViewStyle;
	headerActions: ViewStyle;
	editButton: ViewStyle;
};

const useStyles = makeStyles<PinViewStyles>((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.background
  },
  image: {
    width: '100%',
    height: verticalScale(240),
  },
  backButton: {
  },
  headerActions: {
    flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: verticalScale(16),
	paddingHorizontal: scale(8),
  },
  editButton: {
  },
  content: {
    padding: scale(16),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    color: theme.textPrimary,
  },
  location: {
    fontSize: moderateScale(16),
    color: theme.textSecondary,
    marginVertical: verticalScale(4),
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: verticalScale(8),
  },
  tag: {
    backgroundColor: theme.secondaryBackground,
    borderRadius: scale(12),
    paddingVertical: verticalScale(4),
    paddingHorizontal: scale(10),
    marginRight: scale(8),
    marginBottom: verticalScale(6),
  },
  tagText: {
    fontSize: moderateScale(12),
    color: theme.textPrimary,
  },
  description: {
    fontSize: moderateScale(16),
    color: theme.textPrimary,
    marginTop: verticalScale(12),
  },
}));