import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import { loadResults } from './js/loadResults';
import { initialLoad } from './js/initialLoad';

import './styles/style.scss';

initialLoad();
loadResults();

export {
    checkForName,
    handleSubmit,
}
