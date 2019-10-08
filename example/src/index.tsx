import React from 'react';
import { View, Text, Progress, FlatList, render } from '../../packages/core';

function Section({
  label,
  children,
  growable,
}: {
  growable?: boolean;
  label: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <View
      width="100%"
      paddingLeft={2}
      paddingRight={2}
      flexDirection="column"
      flexGrow={growable ? 1 : undefined}
    >
      <Text bold color="magenta">
        [{label}]
      </Text>
      <View
        width="100%"
        height="100%"
        paddingLeft={2}
        paddingRight={2}
        paddingTop={1}
        paddingBottom={1}
        flexDirection="column"
      >
        {children}
      </View>
    </View>
  );
}

function CompilationStatus({
  label,
  status,
  progress,
}: {
  label: string;
  status: string;
  progress: number;
}) {
  return (
    <View width="100%">
      <View marginRight={1}>
        <Text bold color="blue">
          {label}
        </Text>
      </View>
      <View marginRight={1}>
        <Text italic>{status}</Text>
      </View>
      <Progress value={progress} percentage />
    </View>
  );
}
class App extends React.Component {
  state = {};

  render() {
    return (
      <View width="100%" height="100%" flexDirection="column">
        <Section label="Compilation">
          <CompilationStatus label="ASDF " status="running" progress={0.2} />
          <CompilationStatus label="QWERT" status="running" progress={0.6} />
        </Section>
        <Section label="Logs" growable>
          <View bgColor="blue" width="100%" height="100%" testID="container">
            <FlatList
              itemHeight={3}
              data={new Array(20).fill(null).map((_, i) => `Element #${i}`)}
              keyExtractor={({ item }) => item}
              renderItem={({ item, index }) => (
                <View
                  paddingTop={1}
                  paddingBottom={1}
                  bgColor={index % 2 === 0 ? 'green' : 'magenta'}
                  width="100%"
                >
                  <Text>{item}</Text>
                </View>
              )}
            />
          </View>
        </Section>
      </View>
    );
  }
}

render(<App />);
