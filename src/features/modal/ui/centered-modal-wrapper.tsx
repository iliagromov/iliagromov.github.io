// import React, { FC, useRef } from 'react';
// import { useOnClickOutside } from 'shared/lib/hooks';
// import { ModalWrapper } from './types';
// import { CenterContentOverlay, Content } from './styled';

// export const CenteredModalWrapper: FC<ModalWrapper> = ({ onOverlayClick, children }) => {
//   const contentRef = useRef<HTMLDivElement | null>(null);
//   const popperPopup = document.getElementById('popup');

//   useOnClickOutside(contentRef, (event) => {
//     if (popperPopup.contains(event.target)) {
//       return;
//     }

//     event.stopImmediatePropagation();
//     event.preventDefault();
//     onOverlayClick(event);
//   });

//   return (
//     <CenterContentOverlay>
//       <Content ref={contentRef}>{children}</Content>
//     </CenterContentOverlay>
//   );
// };
