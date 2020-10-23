import Email from '../../Navigation/Contact/Email';
import { renderEmail } from 'react-html-email'

const messageHtml = renderEmail(<MyEmail name={this.state.name} />); // HTML code

export default Email;
