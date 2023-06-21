import styled from 'styled-components';
import { sizes } from './utils';
import { SvgConfig } from './types';
import { getColor } from '../../helpers/colors';

export const Svg = styled.svg<SvgConfig>`
  fill: ${(props) => getColor(props)};
  stroke: ${(props) => (props.setStroke ? getColor(props) : 'none')};
  width: ${(props: SvgConfig) => (props.size ? sizes[props.size] : sizes.sm)};
  height: ${(props: SvgConfig) => (props.size ? sizes[props.size] : sizes.sm)};
  transform: rotate(${(props) => props.rotation}deg);
`;

export default Svg;
