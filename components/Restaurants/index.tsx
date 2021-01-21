import React, {useState} from 'react';
import {Image, StyleSheet, StatusBar, ScrollView} from 'react-native';
import applications from '../../dummyData/applications.json';
import Applications from '../Applications';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
} from 'native-base';

const Restaurants: () => JSX.Element = () => {
  /** List of unique restaurants */
  const restaurants: string[] = [];

  /** Selected Restaurant */
  const [selectedRes, setSelectedRes] = useState('');

  /** State to determine if user is in list of restaurants or list of applications */
  const [isPicked, setIsPicked] = useState(false);

  const styles = StyleSheet.create({
    CardImage: {
      height: 200,
      flex: 1,
    },
  });

  /** Create unique list of restaurants */
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {!isPicked ? (
        <Container>
          <ScrollView>
            <Content style={{padding: 15}}>
              {applications.map((application, index) => {
                if (restaurants.indexOf(application.restaurant.label) === -1) {
                  restaurants.push(application.restaurant.label);
                  return (
                    <Card key={index}>
                      <CardItem>
                        <Left>
                          <Thumbnail
                            source={{
                              uri:
                                application.form_response.answers[13].file_url2,
                            }}
                          />
                          <Body>
                            <Text>{application.restaurant.label}</Text>
                            <Text note>
                              {
                                applications.filter(
                                  (profiles) =>
                                    profiles.restaurant.label ===
                                    application.restaurant.label,
                                ).length
                              }{' '}
                              applications
                            </Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody>
                        <Image
                          source={{
                            uri:
                              application.form_response.answers[13].file_url2,
                          }}
                          style={styles.CardImage}
                        />
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Button
                            style={{width: '100%'}}
                            onPress={() => {
                              setSelectedRes(application.restaurant.label),
                                setIsPicked(true);
                            }}>
                            <Text
                              style={{marginLeft: 'auto', marginRight: 'auto'}}>
                              {application.restaurant.label}
                            </Text>
                          </Button>
                        </Body>
                      </CardItem>
                    </Card>
                  );
                } else {
                  null;
                }
              })}
            </Content>
          </ScrollView>
        </Container>
      ) : (
        <Applications
          selectedApplications={applications.filter(
            (application) => application.restaurant.label === selectedRes,
          )}
          setIsPicked={setIsPicked}
        />
      )}
    </>
  );
};

export default Restaurants;
