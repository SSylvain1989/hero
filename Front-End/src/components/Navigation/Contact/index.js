// // == Import npm
// import React from 'react';
// import PropTypes from 'prop-types';

// import Field from '../../common/Field';

// // == Import scss
// import './contact.scss';

// // == Composant
// const Contact = ({
//   email,
//   message,
//   changeField,
//   handleContact,
// }) => {
//   const handleOnSubmit = (event) => {
//     event.preventDefault();
//     handleContact();
//   };

//   return (
//     <div className="contact">
//       <h1>Nous contacter</h1>
//       <form onSubmit={handleOnSubmit}>
//         <input type="text" className="contact__email" />
//         <Field
//           placeholder="Votre email"
//           onChange={changeField}
//           value={email}
//           type="email"
//         />
//         <textarea className="contact__message" />
//         <Field
//           placeholder="Votre message"
//           onChange={changeField}
//           value={message}
//           type="text"
//         />
//         <button type="button" className="contact__submit">Envoyer</button>
//       </form>
//     </div>
//   );
// };

// // == PropTypes
// Contact.propTypes = ({
//   email: PropTypes.string,
//   message: PropTypes.array,
//   changeField: PropTypes.func.isRequired,
//   handleContact: PropTypes.func.isRequired,
// });

// Contact.defaultProps = ({
//   email: '',
//   message: [],
// });

// // == Export
// export default Contact;
