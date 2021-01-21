import React from 'react';
import Profile from '.';
import {IApplication} from '../../models/application';

interface Props {
  pickedApp: string;
  selectedApplications: IApplication[];
  setPickedApp: (id: string) => void;
  seenApplications: (id: string) => void;
}

const ProfileData: React.FC<Props> = ({
  pickedApp,
  selectedApplications,
  setPickedApp,
  seenApplications,
}) => {
  /** Body of selected profile/application */
  const selectBody = selectedApplications.find((a) => a.id === pickedApp);

  /** Data array of all relevant profile data */
  const dataArray = [
    {
      title: selectBody?.form_response.definition.fields[0].title,
      content: selectBody?.form_response.answers[0].text,
    },
    {
      title: selectBody?.form_response.definition.fields[1].title,
      content: selectBody?.form_response.answers[1].text,
    },
    {
      title: selectBody?.form_response.definition.fields[2].title,
      content: selectBody?.form_response.answers[2].text,
    },
    {
      title: selectBody?.form_response.definition.fields[3].title,
      content: selectBody?.form_response.answers[3].text,
    },
    {
      title: selectBody?.form_response.definition.fields[4].title,
      content: selectBody?.form_response.answers[4].choice?.label,
    },
    {
      title: selectBody?.form_response.definition.fields[5].title,
      content: selectBody?.form_response.answers[5].choice?.label,
    },
    {
      title: selectBody?.form_response.definition.fields[6].title,
      content: selectBody?.form_response.answers[6].choice?.label,
    },
    {
      title: selectBody?.form_response.definition.fields[7].title,
      content: selectBody?.form_response.answers[7].date,
    },

    {
      title: selectBody?.form_response.definition.fields[8].title,
      content: selectBody?.form_response.answers[8].text,
    },
    {
      title: selectBody?.form_response.definition.fields[9].title,
      content: selectBody?.form_response.answers[9].choice?.label,
    },
    {
      title: selectBody?.form_response.definition.fields[10].title,
      content: selectBody?.form_response.answers[10].text,
    },
    {
      title: selectBody?.form_response.definition.fields[11].title,
      content: selectBody?.form_response.answers[11].choices?.labels.map(
        (language) => language + '\n',
      ),
    },
    {
      title: selectBody?.form_response.definition.fields[12].title,
      content: selectBody?.form_response.answers[12].file_url,
    },
    {
      title: selectBody?.form_response.definition.fields[14].title,
      content: selectBody?.form_response.answers[14].phone_number,
    },
    {
      title: selectBody?.form_response.definition.fields[15].title,
      content: selectBody?.form_response.answers[15].email,
    },
    {
      title: selectBody?.form_response.definition.fields[16].title,
      content: selectBody?.form_response.answers[16].choice?.label,
    },
  ];
  return (
    <Profile
      selectedApplications={selectedApplications}
      pickedApp={pickedApp}
      seenApplications={seenApplications}
      setPickedApp={setPickedApp}
      dataArray={dataArray}
    />
  );
};

export default ProfileData;
