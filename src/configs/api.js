import config from './environment';
import API from '../helpers/api';
export default new API(config.api.url, config.github.url);
