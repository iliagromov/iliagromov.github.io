// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { shallowEqual } from 'react-redux';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// import loadable from '@loadable/component';
// import { ModalWrapper } from './modal-wrapper';
// import { CenteredModalWrapper } from './centered-modal-wrapper';

// class ModalSystemContainer extends Component<any, any> {
//   overlayRef = null;

//   static propTypes = {
//     close: PropTypes.func.isRequired,

//     modalCtor: PropTypes.func,
//     isVisible: PropTypes.bool,
//     props: PropTypes.shape({}),
//     isAsync: PropTypes.bool,
//     isOpenedFromStack: PropTypes.bool,
//     overlayElement: PropTypes.elementType,
//   };

//   static defaultProps = {
//     modalCtor: null,
//     isVisible: false,
//     props: null,
//     isAsync: false,
//     isOpenedFromStack: false,
//     overlayElement: null,
//   };

//   state = {
//     ActiveModal: null,
//     activeModalCtor: null,
//     activeModalProps: null,
//     isLoaded: false,
//     isClosing: false,
//   };

//   static getDerivedStateFromProps(nextProps, prevState) {
//     const { modalCtor, props } = nextProps;
//     const { activeModalCtor, activeModalProps } = prevState;

//     const isModalUpdated = !matchModals(activeModalCtor, activeModalProps)(modalCtor, props);

//     if (isModalUpdated) {
//       return {
//         ActiveModal: modalCtor === null ? modalCtor : loadable(modalCtor),
//         activeModalCtor: modalCtor,
//         activeModalProps: props,
//         isLoaded: false,
//       };
//     }

//     return null;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { activeModalCtor, isLoaded, ActiveModal } = this.state;

//     const isModalUpdated = ActiveModal && activeModalCtor !== prevState.activeModalCtor;

//     if (isModalUpdated && !isLoaded) {
//       ActiveModal.load().then(() =>
//         this.setState((state) => state.activeModalCtor === activeModalCtor && { isLoaded: true }),
//       );
//     }
//   }

//   componentWillUnmount() {
//     const { isVisible } = this.props;

//     if (isVisible) {
//       enableBodyScroll(this.overlayRef);
//     }
//   }

//   handleCloseRequested = (data = null) => {
//     const { isAsync, close, closeAsync } = this.props;
//     const { activeModalProps } = this.state;

//     if (activeModalProps && typeof activeModalProps.onClose === 'function') {
//       activeModalProps.onClose(data);
//     }

//     if (isAsync) {
//       closeAsync(data);
//     } else {
//       close();
//     }
//   };

//   overlayRendered = (overlay) => {
//     if (overlay) {
//       this.overlayRef = overlay;
//       disableBodyScroll(overlay);
//     } else {
//       enableBodyScroll(this.overlayRef);
//     }
//   };

//   render() {
//     const { isVisible, isOpenedFromStack, overlayElement } = this.props;

//     const { ActiveModal, activeModalProps, isLoaded } = this.state;

//     const ModalOverlay = overlayElement || CenteredModalWrapper;

//     const modalStatus = (ActiveModal && isLoaded && 'complete') || (ActiveModal && !isLoaded && 'loading') || 'closed';

//     return (
//       <ModalWrapper
//         isOpen={isVisible}
//         closeTimeoutMS={500}
//         overlayRef={this.overlayRendered}
//         onRequestClose={this.handleCloseRequested}
//       >
//         <ModalOverlay
//           {...activeModalProps}
//           modal={ActiveModal}
//           modalStatus={modalStatus}
//           isOpenedFromStack={isOpenedFromStack}
//           onOverlayClick={(event) => {
//             if (activeModalProps && activeModalProps.preventOverlayClose) {
//               return;
//             }

//             this.handleCloseRequested(event);
//           }}
//         >
//           {modalStatus === 'loading' && 'Put your loading here'}

//           {modalStatus === 'complete' && (
//             <ActiveModal
//               {...activeModalProps}
//               onClose={this.handleCloseRequested}
//               isOpenedFromStack={isOpenedFromStack}
//             />
//           )}
//         </ModalOverlay>
//       </ModalWrapper>
//     );
//   }
// }

// export { ModalSystemContainer };

// const matchModals = (ctor, props) => (nextCtor, nextProps) => {
//   const isShallowMatch = ctor === nextCtor && shallowEqual(props, nextProps);

//   if (isShallowMatch) {
//     return props && props.notification ? props.notification.id === nextProps.notification.id : isShallowMatch;
//   }

//   return isShallowMatch;
// };
