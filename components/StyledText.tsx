import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
