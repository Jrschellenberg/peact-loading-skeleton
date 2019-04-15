import { h, Component } from "preact";

export default class Skeleton extends Component<Props> {}

interface Props {
  count?: number;
  duration?: number;
  width?: string;
  height?: string;
  circle?: boolean;
}
