// import { connect } from 'react-redux';
// // import { hideModal, showModal } from 'entities/modal';
// import { ModalSystemContainer } from './ui';

// const nullModal = {
//   id: null,
//   props: null,
//   modalCtor: null,
//   isAsync: null,
//   overlayElement: null,
// };

// function stateToProps(state) {
//   const { isVisible, stack, lastStackId } = state.modal;
//   const currentModal = stack.length > 0 ? stack[0] : nullModal;

//   const { modalCtor, props, isAsync, overlayElement } = currentModal;
//   const isOpenedFromStack = lastStackId > currentModal.id;

//   return {
//     modalCtor,
//     isVisible,
//     props,
//     isAsync,
//     isOpenedFromStack,
//     overlayElement,
//   };
// }

// const dispatchToProps = {
//   showModal,
//   close: hideModal,
// };

// const ConnectedModalSystem = connect(stateToProps, dispatchToProps)(ModalSystemContainer);

// export { ConnectedModalSystem };
