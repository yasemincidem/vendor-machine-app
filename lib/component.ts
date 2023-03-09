interface Props {
    element: any;
    render?: () => void;
}
export default class Component {
    element: any;

    constructor(props: Props) {
        if(props.hasOwnProperty('element')) {
            this.element = props.element;
        }
    }
}
