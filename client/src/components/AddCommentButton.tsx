import React from 'react';
import styles from './AddCommentButton.module.scss'
import addCommentIcon from '../assets/icons/add_comment.svg'

interface Props {
  buttonText: string;
  id: string;
  comment: string;
  onClick: (id: string, comment: string) => void;
}

function AddCommentButton({ buttonText, id, comment, onClick }: Props) {
  // `buttonText` can be used to replace the logo by translated text
  return (
    <div onClick={() => onClick(id, comment)}>
      <button className={styles.button}><img src={addCommentIcon} alt=''/></button>
    </div>
  );
}

export default AddCommentButton;
