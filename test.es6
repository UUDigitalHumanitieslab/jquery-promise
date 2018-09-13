import { mocha } from 'promises-aplus-tests';
import * as adapter from './test-adapter';

describe('Promises/A+ tests', () => mocha(adapter));
