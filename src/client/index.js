import { handleSubmit } from './js/formHandler'
import { checkForURL } from './js/urlChecker'
import logo from './img/logo.png'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

let homeImg = document.getElementById('logo');
homeImg.src = logo;


export {
    handleSubmit,
    checkForURL,
    }


