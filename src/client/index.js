import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import { loadResults } from './js/loadResults';

import './styles/style.scss';

loadResults();

export {
    checkForName,
    handleSubmit,
}
