import React, {useState} from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../../theme';

interface Props {
  title?: string;
  content?: string | string[];
}

const Accordion: React.FC<Props> = ({title, content}) => {
  /** Question expanded or not */
  const [expanded, setExpanded] = useState(false);

  /** Handles expansion of question */
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const styles = StyleSheet.create({
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#242424',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 70,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderColor: '#242424',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 5,
      marginTop: 5,
    },
    child: {
      backgroundColor: theme.palette.pineapple,
      padding: 15,
      borderRadius: 10,
      borderColor: '#242424',
      borderWidth: 1,
    },
    childText: {
      fontSize: 14,
      color: '#242424',
    },
    iconClosed: {
      marginRight: 20,
      borderStyle: 'solid',
      borderWidth: 5,
      borderColor: '#f00946',
      borderRadius: 10,
    },
    iconOpen: {
      marginRight: 20,
      borderWidth: 6,
      borderColor: '#90EE90',
      borderRadius: 10,
    },
    qText: {
      flex: 1,
      alignItems: 'flex-start',
    },
  });

  return (
    <>
      <View>
        <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
          {expanded ? (
            <View style={styles.iconOpen} />
          ) : (
            <View style={styles.iconClosed} />
          )}
          <View style={styles.qText}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.child}>
            <Text style={styles.childText}>{content}</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Accordion;
