import React from 'react';
import styles from './AddReceiptButton.module.scss';
import addAttachmentIcon from '../assets/icons/add_attachment.svg';

interface Props {
  buttonText: string;
  id: string;
  onClick: (id: string) => void;
}

function AddReceiptButton({ buttonText, id, onClick }: Props) {
  // `buttonText` can be used to replace the logo by translated text
  return (
    <div onClick={() => onClick(id)}>
      <button className={styles.button}><img src={addAttachmentIcon} alt=''/></button>
    </div>
  );
}

export default AddReceiptButton;
