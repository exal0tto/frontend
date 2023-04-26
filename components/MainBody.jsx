import {WalletModal} from '@/components/Connection';
import {CookieNotice} from '@/components/CookieNotice';
import {MessageModal, ModalContainer} from '@/components/Modals';


export const MainBody = ({children}) => (
  <div className="main-body">
    <ModalContainer>
      {children}
      <WalletModal/>
      <MessageModal/>
      <CookieNotice/>
    </ModalContainer>
  </div>
);
