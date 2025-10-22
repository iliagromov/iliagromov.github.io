// import { ComponentType, FC, ReactNode } from 'react';
// // import { LoadableComponent } from '@loadable/component';
// // import { TFunction } from 'i18next';
// // import { Nullable } from 'shared/types/global';
// // import { ModalProps } from 'shared/types/modal';

// export type ModalWrapperProps = {
//   onOverlayClick: () => void;
//   disableClickOutside?: Nullable<boolean>;
//   children: ReactNode;
// };

// export type ModalWrapper = ComponentType<ModalWrapperProps>;

// export type ModalContextValue = {
//   modalWrapper?: ModalWrapper;
//   isVisible: boolean;
//   lastStackId: number;
//   stack: Modal[];

//   showModal: (loader: Modal['modalCtor'], props?: Modal['props']) => void;
//   replaceModal: (loader: Modal['modalCtor'], props?: Modal['props']) => void;
//   closeModal: () => void;
//   t: () => string | TFunction;
// };

// export type Modal = {
//   id: number;
//   modalCtor: FC;
//   props?: {
//     [key: string]: any;
//   };
// };

// export type ModalContainerProps = {
//   modal: Modal;
//   closeModal: () => void;
//   isVisible: boolean;
//   modalWrapper?: ModalWrapper;
//   lastStackId: ModalContextValue['lastStackId'];
// };

// type LoadableMethods = {
//   render: any;
// };

// export type ModalContainerState = {
//   activeModal: Modal | null;
//   ModalComponent: (LoadableComponent<ModalProps> & LoadableMethods) | null;
//   isLoaded: boolean;
// };
