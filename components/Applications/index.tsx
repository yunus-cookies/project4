import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {IApplication} from '../../models/application';
import {
  Container,
  Content,
  Left,
  Thumbnail,
  List,
  ListItem,
  Body,
  Right,
  Button,
  Text,
  Footer,
  FooterTab,
} from 'native-base';
import ProfileData from '../Profile/ProfileData';

interface Props {
  selectedApplications: IApplication[];
  setIsPicked: (isPicked: boolean) => void;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  bottomCard: {
    marginVertical: 10,
  },
  footerText: {
    color: 'white',
    fontSize: 15,
    textTransform: 'capitalize',
  },
  unread: {
    color: 'green',
    marginRight: 10,
  },
  visited: {
    color: 'red',
    marginRight: 10,
  },
  buttonStyle: {
    fontSize: 14,
  },
  RightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Applications: React.FC<Props> = ({selectedApplications, setIsPicked}) => {
  /** Current picked application */
  const [pickedApp, setPickedApp] = useState('');

  /** State: Status collection of user visited profile or not */
  type StatusTypes = {
    status: string;
  };
  const [status, setStatus] = useState<StatusTypes[]>([]);

  /** Checks if profile id has been visited or not, and updates the status state */
  const seenApplications = (id: string) => {
    !status.some((x) => x.status === id)
      ? setStatus((prevStatus) => [
          ...prevStatus.filter((x) => x.status !== id),
          {status: id},
        ])
      : null;
  };

  return (
    <>
      <Container>
        <ScrollView>
          <Content style={styles.container}>
            {!pickedApp ? (
              selectedApplications.map((application, index) => {
                return (
                  <List key={index}>
                    <ListItem thumbnail>
                      <Left>
                        <Thumbnail
                          square
                          source={{
                            uri: application.form_response.answers[13].file_url,
                          }}
                        />
                      </Left>
                      <Body>
                        <Text>{application.form_response.answers[1].text}</Text>
                        <Text note>
                          {application.form_response.answers[0].text}
                        </Text>
                      </Body>
                      <Right style={styles.RightContainer}>
                        {!status.some((x) => x.status === application.id) ? (
                          <Text style={styles.unread}>Unread</Text>
                        ) : (
                          <Text style={styles.visited}>Visited</Text>
                        )}
                        <Button
                          onPress={() => (
                            setPickedApp(application.id),
                            seenApplications(application.id)
                          )}>
                          <Text style={styles.buttonStyle}>View</Text>
                        </Button>
                      </Right>
                    </ListItem>
                  </List>
                );
              })
            ) : (
              <ProfileData
                selectedApplications={selectedApplications}
                pickedApp={pickedApp}
                seenApplications={seenApplications}
                setPickedApp={setPickedApp}
              />
            )}
          </Content>
        </ScrollView>
      </Container>
      <Footer>
        <FooterTab>
          {!pickedApp ? (
            <Button onPress={() => setIsPicked(false)}>
              <Text style={styles.footerText}>Back to restaurants</Text>
            </Button>
          ) : (
            <Button onPress={() => setPickedApp('')}>
              <Text style={styles.footerText}>Back to applications</Text>
            </Button>
          )}
        </FooterTab>
      </Footer>
    </>
  );
};

export default Applications;
