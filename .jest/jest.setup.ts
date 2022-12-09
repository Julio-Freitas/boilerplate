import { defaultFallbackInView } from 'react-intersection-observer';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
// import 'jest-styled-components';

global.IntersectionObserver = jest.fn();
defaultFallbackInView(false);
