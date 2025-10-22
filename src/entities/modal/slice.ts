// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ElementType } from 'react';

// export type Nullable<T> = T | null;
// export type ModalState = {
//   isVisible: boolean;
//   lastStackId: number;
//   stack: Modal[];
// };

// export type Modal = {
//   id: number;
//   modalCtor: Nullable<() => void>;
//   overlayElement?: Nullable<ElementType>;
//   props?: Nullable<{
//     [key: string]: any;
//   }>;
//   isAsync: boolean;
// };

// export type ModalProps = {
//   onClose: () => void;
//   isOpenedFromStack?: boolean;
// };

// const initialState: ModalState = {
//   isVisible: false,
//   lastStackId: 0,
//   stack: [],
// };

// const defaultModal: Partial<Modal> = {
//   id: 0,
//   modalCtor: null,
//   overlayElement: null,
//   props: null,
//   isAsync: false,
// };

// export const modalSlice = createSlice({
//   name: 'modal',
//   initialState,
//   reducers: {
//     showModal: (state, { payload }: PayloadAction<Partial<Modal>>) => {
//       const { lastStackId } = state;
//       const { modalCtor, overlayElement, isAsync, props } = payload;

//       const nextModalId = lastStackId + 1;

//       state.stack = [
//         {
//           ...defaultModal,
//           modalCtor,
//           props,
//           overlayElement,

//           id: nextModalId,
//           isAsync: Boolean(isAsync),
//         },
//         ...state.stack,
//       ];
//       state.isVisible = true;
//       state.lastStackId = nextModalId;
//     },
//     hideModal: (state) => {
//       state.stack = state.stack.slice(1);
//       state.isVisible = state.stack.length > 0;
//     },
//   },
// });
