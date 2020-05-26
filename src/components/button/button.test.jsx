import renderer from 'react-test-renderer';
import { Button } from './index';

describe('<Button />', () => {
    const tree = renderer.create(<Button text="Hello, React!"/>).toJSON();
    it('should be rendered with the text "Hello, React!"', () => {
        expect(tree).toMatchSnapshot();
    });
});
