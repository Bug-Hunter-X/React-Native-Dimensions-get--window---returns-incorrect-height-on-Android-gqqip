```javascript
// IncorrectDimensions.js
import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const IncorrectDimensions = () => {
  return (
    <View style={{ height: height }}>
      <Text>Incorrect Height: {height}</Text>
    </View>
  );
};


export default IncorrectDimensions;

// CorrectDimensions.js
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

const CorrectDimensions = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowHeight(window.height);
    });
    return () => subscription.remove();
  }, []);

  return (
    <View style={{ height: windowHeight }}>
      <Text>Correct Height: {windowHeight}</Text>
    </View>
  );
};

export default CorrectDimensions;
```