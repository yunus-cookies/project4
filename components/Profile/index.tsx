import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {IApplication} from '../../models/application';
import GestureRecognizer from 'react-native-swipe-gestures';
import {AccordContainer, ProfileHeader} from './ProfileElements';
import Accordion from '../Accordion/index';

interface Props {
  pickedApp: string;
  selectedApplications: IApplication[];
  setPickedApp: (id: string) => void;
  seenApplications: (id: string) => void;
  dataArray: {
    title?: string;
    content?: string | string[];
  }[];
}

const Profile: React.FC<Props> = ({
  pickedApp,
  selectedApplications,
  setPickedApp,
  seenApplications,
  dataArray,
}) => {
  /** First profile/application */
  const start = 0;

  /** Last profile/application */
  const end = selectedApplications.length - 1;

  /** Body of selected profile/application */
  const selectBody = selectedApplications.find((a) => a.id === pickedApp);

  /** Update picked application/profile if swiped left */
  const onSwipeLeft = () => {
    const profileIndex = selectedApplications.findIndex(
      (id) => id.id === pickedApp,
    );
    if (profileIndex < end) {
      setPickedApp(
        selectedApplications[
          selectedApplications.findIndex((a) => a.id === pickedApp) + 1
        ].id,
      );
    } else {
      Alert.alert('Last application');
    }
  };

  /** Update picked application/profile if swiped right */
  const onSwipeRight = () => {
    const profileIndex = selectedApplications.findIndex(
      (id) => id.id === pickedApp,
    );
    if (profileIndex > start) {
      setPickedApp(
        selectedApplications[
          selectedApplications.findIndex((a) => a.id === pickedApp) - 1
        ].id,
      );
    } else {
      Alert.alert('First application');
    }
  };

  /** Update status (Collection of visited/unread profiles/applications) state */
  useEffect(() => {
    seenApplications(pickedApp);
  }, [pickedApp]);

  /** Render accordion with provided props */
  const renderAccordians = () => {
    const items: Element[] = [];
    dataArray.forEach((item, index) => {
      items.push(
        <Accordion key={index} title={item.title} content={item.content} />,
      );
    });
    return items;
  };

  return (
    <GestureRecognizer
      onSwipeLeft={() => onSwipeLeft()}
      onSwipeRight={() => onSwipeRight()}>
      <ProfileHeader>
        {selectBody?.restaurant.label}:{' '}
        {selectBody?.form_response.answers[0].text}
      </ProfileHeader>
      <AccordContainer>{renderAccordians()}</AccordContainer>
    </GestureRecognizer>
  );
};

export default Profile;
